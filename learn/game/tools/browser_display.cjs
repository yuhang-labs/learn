'use strict';
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{spawnSync}=require('node:child_process');
const overlap=(a,b)=>a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y;
(async()=>{
  const browser=await chromium.launch({headless:true,args:['--no-sandbox']}),output=process.env.TEST_OUTPUT||'/tmp/daqin-display-fix';fs.mkdirSync(output,{recursive:true});
  try{
    const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('dialog',d=>d.accept());
    await p.goto('file://'+path.resolve(__dirname,'../index.html'));await p.locator('#new').click();await p.locator('#pause').click();await p.locator('[data-city="0"]').click();await p.locator('#enter-city').click();
    const settle=()=>p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    for(const [width,height]of [[1280,720],[1920,1080]]){
      await p.setViewportSize({width,height});await settle();
      const map=await p.locator('#map').boundingBox(),panel=await p.locator('#details').boundingBox(),mini=await p.locator('#minimap').boundingBox();
      assert.equal(overlap(map,panel),false,'sidebar must not cover the canvas');assert.equal(overlap(panel,mini),false);
      assert.ok(mini.x>=map.x&&mini.y>=map.y&&mini.x+mini.width<=map.x+map.width&&mini.y+mini.height<=map.y+map.height);
      assert.equal(await p.locator('#enter-city').isVisible(),false,'no redundant enter button inside the city');
      const before=await p.evaluate(()=>DaqinDiagnostics.layout());assert.equal(before.units.length,8);
      const xs=before.units.map(u=>u.x),ys=before.units.map(u=>u.y);
      await p.mouse.move(map.x+Math.min(...xs)-15,map.y+Math.min(...ys)-35);await p.mouse.down();await p.mouse.move(map.x+Math.max(...xs)+15,map.y+Math.max(...ys)+15,{steps:5});await p.mouse.up();await settle();
      const layout=await p.evaluate(()=>DaqinDiagnostics.layout());assert.equal(layout.labels.length,8);
      for(const label of layout.labels){assert.ok(label.x>=0&&label.y>=0);for(const other of layout.labels)if(label.id!==other.id)assert.equal(overlap({x:label.x,y:label.y,width:label.w,height:label.h},{x:other.x,y:other.y,width:other.w,height:other.h}),false,'count badges must not overlap');}
      assert.ok(layout.units.every(u=>Math.abs(u.size/layout.transform.scale-28)<.01),'representatives keep one compact, uniform size relative to terrain');
      const fit=layout.transform;assert.ok(fit.x<=.01&&fit.y<=.01&&fit.x+fit.w>=map.width-.01&&fit.y+fit.h>=map.height-.01,'city covers the battlefield without empty margins');
      await p.screenshot({path:path.join(output,`${width}-city.png`)});
      const rect=await p.locator('#map').boundingBox();
      await p.screenshot({path:path.join(output,`${width}-terrain.png`),clip:rect});
      const pixelCheck=spawnSync('python3',['-c',"from PIL import Image\nimport sys\nim=Image.open(sys.argv[1]).convert('RGB')\nratio=sum(r<12 and g<22 and b<32 for r,g,b in im.getdata())/(im.width*im.height)\nprint('opaque dark fraction:',round(ratio,4))\nassert ratio<0.08, 'city terrain is still erased by opaque fog'",path.join(output,`${width}-terrain.png`)],{encoding:'utf8'});
      assert.equal(pixelCheck.status,0,pixelCheck.stdout+pixelCheck.stderr);console.log(`${width}×${height}: ${pixelCheck.stdout.trim()}, 8 nonoverlapping badges, panel/minimap fit`);
      // Count badges themselves are usable hit targets even when sprites are close together.
      const badge=layout.labels.at(-1);await p.mouse.click(rect.x+badge.x+badge.w/2,rect.y+badge.y+badge.h/2);await settle();assert.equal((await p.evaluate(()=>DaqinDiagnostics.layout())).labels.filter(l=>l.id===badge.id).length,1);
    }
    const r=await p.locator('#map').boundingBox();await p.mouse.move(r.x+r.width/2,r.y+r.height/2);await p.mouse.down({button:'middle'});await p.mouse.move(r.x+r.width-30,r.y+r.height-30);await p.mouse.up({button:'middle'});await settle();
    const edge=(await p.evaluate(()=>DaqinDiagnostics.layout())).transform;assert.ok(edge.x<=.01&&edge.y<=.01&&edge.x+edge.w>=r.width-.01&&edge.y+edge.h>=r.height-.01,'panning stops at city edges');
    const mm=await p.locator('#minimap').boundingBox();await p.mouse.click(mm.x+mm.width/2,mm.y+mm.height/2);await settle();
    await p.mouse.move(r.x+r.width*.66,r.y+r.height*.53);await p.mouse.wheel(0,-700);await settle();await p.screenshot({path:path.join(output,'zoom-city.png')});
    await p.locator('[data-city="2"]').click();await settle();assert.equal((await p.evaluate(()=>DaqinDiagnostics.layout())).units.length,0);assert.equal((await p.evaluate(()=>DaqinDiagnostics.visible())).fields[2],undefined);await p.screenshot({path:path.join(output,'unscouted-city.png')});
    // Active combat still hides an enemy that is behind the palace while rendering the whole static city.
    await p.goto('about:blank');await p.goto('file://'+path.resolve(__dirname,'../index.html'));await p.locator('#start[open]').waitFor();
    await p.evaluate(()=>{const s=Daqin.create();s.humans=[0,1,2];Daqin.send(s,0,2,[65,35,40],null);while(!s.battles.length)Daqin.tick(s);const enemy=s.battles[0].units.find(u=>u.side===1);enemy.x=90.5;enemy.y=10.5;s.paused=true;localStorage.setItem('daqin-save-v4',Daqin.serialize(s));});
    await p.locator('#continue').click();await p.locator('[data-city="2"]').click();await p.locator('#enter-city').click();await settle();const projected=await p.evaluate(()=>DaqinDiagnostics.visible().fields[2]);assert.ok(projected.units.every(u=>u.side===0));assert.equal((await p.evaluate(()=>DaqinDiagnostics.layout())).units.length,projected.units.length);await p.screenshot({path:path.join(output,'siege-fog.png')});
    assert.deepEqual(errors,[]);console.log('zoom, badge selection, unscouted city, active siege visibility, no page errors: passed');console.log('screenshots: '+output);
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
