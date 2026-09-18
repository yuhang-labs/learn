"""Extract existing supplied artwork; no generation, enlargement, or source overwrite.

Run from any directory: python3 game/tools/prepare_assets.py
Requires Pillow. Output coordinates refer to the original 1536 x 1024 sheet.
"""
from pathlib import Path
import hashlib
import json
from PIL import Image, ImageDraw, ImageFilter

ASSETS = Path(__file__).resolve().parents[1] / 'assets'
SOURCE = ASSETS / 'ChatGPT Image 2026年9月18日 14_01_47.png'
OUT = ASSETS / 'processed'
FRAME = 128


def clean_fragments(image):
    alpha = image.getchannel('A')
    remaining = {(x, y) for y in range(image.height) for x in range(image.width)
                 if alpha.getpixel((x, y)) >= 60}
    components = []
    while remaining:
        point = min(remaining)
        remaining.remove(point)
        component, queue = {point}, [point]
        while queue:
            x, y = queue.pop()
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    p = x+dx, y+dy
                    if p in remaining:
                        remaining.remove(p)
                        component.add(p)
                        queue.append(p)
        components.append(component)
    if not components:
        return image
    components.sort(key=len, reverse=True)
    main = Image.new('L', image.size)
    for point in components[0]:
        main.putpixel(point, 255)
    nearby = main.filter(ImageFilter.MaxFilter(9))
    for component in components[1:]:
        if len(component) >= 3 and any(nearby.getpixel(p) for p in component):
            for point in component:
                main.putpixel(point, 255)
    retained = main.filter(ImageFilter.MaxFilter(3))
    result = image.copy()
    for y in range(image.height):
        for x in range(image.width):
            if not retained.getpixel((x, y)):
                result.putpixel((x, y), (0, 0, 0, 0))
    return result


def matte(image):
    """Remove the baked pale checkerboard and reconstruct alpha from RGB.

    The supplied alpha is translucent across the whole sheet, including subjects,
    so it is not a usable cutout mask. Dark subject pixels become opaque.
    """
    image = image.convert('RGB')
    pixels = []
    for r, g, b in image.getdata():
        high, low = max(r, g, b), min(r, g, b)
        brightness = (r + g + b) / 3
        if low >= 208:
            alpha = 0
        elif high - low < 32 and brightness > 160:
            alpha = round(255 * max(0, min(1, (208 - brightness) / 48)))
        else:
            alpha = 255
        pixels.append((r, g, b, alpha) if alpha else (0, 0, 0, 0))
    result = Image.new('RGBA', image.size)
    result.putdata(pixels)
    return result


def spans(image):
    """Split a row into figures by empty column gaps, retaining long weapons."""
    alpha = image.getchannel('A')
    occupied = []
    for x in range(image.width):
        occupied.append(sum(alpha.getpixel((x, y)) >= 180 for y in range(image.height)) >= 4)
    runs = []
    for x, on in enumerate(occupied):
        if not on:
            continue
        if runs and x - runs[-1][1] <= 2:
            runs[-1][1] = x
        else:
            runs.append([x, x])
    runs = [(a, b) for a, b in runs if b-a >= 12]
    boundaries = [0] + [(runs[i-1][1]+runs[i][0])//2 for i in range(1, len(runs))] + [image.width]
    return list(zip(boundaries[:-1], boundaries[1:]))


def main():
    source = Image.open(SOURCE)
    if source.size != (1536, 1024):
        raise ValueError('Source dimensions changed; review crop coordinates before extraction.')
    original_hash = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    OUT.mkdir(exist_ok=True)
    # Exclude the baked black title labels. These are cropped native pixels,
    # not the larger resolutions printed inside the supplied image.
    map_source_path = ASSETS / 'daqin-reference-sheet.png'
    map_source = Image.open(map_source_path)
    if map_source.size != (1536, 1024):
        raise ValueError('Map source dimensions changed; review crop coordinates.')
    map_hash = hashlib.sha256(map_source_path.read_bytes()).hexdigest()
    crops = {'world-map': (0, 0, 1536, 499), 'city-scene': (0, 500, 975, 1024)}
    metadata = {'source': SOURCE.name, 'sourceSha256': original_hash,
                'frameSize': [FRAME, FRAME], 'frameAnchor': [64, 112],
                'maps': {}, 'troops': {}, 'notes': [
                    'Native-resolution crops; not 4096x2048 or 2048x2048.',
                    'Background keying can soften pale weapon/armour edges.',
                    'Rows are supplied pose samples; action timing/directional continuity is not guaranteed.',
                    'City buildings are baked into the scene; no separate occlusion or collision masks.'
                ]}
    for name, box in crops.items():
        crop = map_source.crop(box).convert('RGB')
        crop.save(OUT / (name + '.png'))
        metadata['maps'][name] = {'file': name + '.png', 'crop': box, 'size': crop.size,
                                  'source': map_source_path.name, 'sourceSha256': map_hash}

    rows = {'idle': (551, 627), 'move': (637, 719), 'attack': (730, 816),
            'death': (846, 898), 'poses': (918, 985)}
    columns = {'cavalry': (56, 516), 'archer': (593, 1005), 'spearman': (1075, 1524)}
    reviews = []
    for troop, (left, right) in columns.items():
        metadata['troops'][troop] = {}
        for action, (top, bottom) in rows.items():
            strip = matte(source.crop((left, top, right, bottom)))
            regions = spans(strip)
            frames = []
            for start, end in regions:
                figure = clean_fragments(strip.crop((start, 0, end, strip.height)))
                bounds = figure.getchannel('A').point(lambda p: 255 if p >= 60 else 0).getbbox()
                if not bounds:
                    continue
                figure = figure.crop(bounds)
                if figure.width > 120 or figure.height > 110:
                    raise ValueError(f'{troop}/{action}: merged or oversized frame {figure.size}')
                frame = Image.new('RGBA', (FRAME, FRAME))
                frame.alpha_composite(figure, ((FRAME-figure.width)//2, 112-figure.height))
                frames.append(frame)
            if not frames:
                raise ValueError(f'No figures extracted: {troop}/{action}')
            sheet = Image.new('RGBA', (FRAME*len(frames), FRAME))
            directory = OUT / 'troops' / troop
            directory.mkdir(parents=True, exist_ok=True)
            for i, frame in enumerate(frames):
                sheet.alpha_composite(frame, (i*FRAME, 0))
                frame.save(directory / f'{action}-{i:02d}.png')
            sheet.save(directory / f'{action}.png')
            metadata['troops'][troop][action] = {
                'sheet': f'troops/{troop}/{action}.png', 'frames': len(frames),
                'sourceCrop': [left, top, right, bottom], 'loop': action in ['idle', 'move'],
                'suggestedFps': 6 if action != 'death' else 4
            }
            reviews.append((troop + ' / ' + action, sheet))
    preview = Image.new('RGB', (1280, len(reviews)*156), '#34474b')
    draw = ImageDraw.Draw(preview)
    for i, (label, sheet) in enumerate(reviews):
        y = i*156
        draw.text((8, y+4), label, fill='white')
        for x in range(0, preview.width, FRAME):
            draw.rectangle((x, y+22, x+FRAME-1, y+149), fill='#203b30' if x//FRAME % 2 else '#897c62')
        preview.paste(sheet, (0, y+22), sheet)
    preview.save(OUT / 'troop-preview.jpg', quality=92)
    (OUT / 'manifest.json').write_text(json.dumps(metadata, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    assert hashlib.sha256(SOURCE.read_bytes()).hexdigest() == original_hash
    assert hashlib.sha256(map_source_path.read_bytes()).hexdigest() == map_hash
    print(json.dumps({troop: {action: row['frames'] for action, row in actions.items()}
                      for troop, actions in metadata['troops'].items()}, indent=2))
    print('Original unchanged. Outputs:', OUT)


if __name__ == '__main__':
    main()
