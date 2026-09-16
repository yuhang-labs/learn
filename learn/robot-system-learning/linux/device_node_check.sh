#!/bin/bash

device_path="$1"

if [[ -z "$device_path" ]]; then
    printf '%s\n' '[DEVICE CHECK ERROR] device path is required' >&2
    exit 1
fi

case "$device_path" in
    /dev/*)
        ;;
    *)
        printf '[DEVICE CHECK ERROR] path must be under /dev: %s\n' \
            "$device_path" >&2
        exit 1
        ;;
esac

if [[ ! -e "$device_path" ]]; then
    printf '[DEVICE CHECK ERROR] device node not found: %s\n' \
        "$device_path" >&2
    exit 1
fi

if [[ -c "$device_path" ]]; then
    device_type='character'
elif [[ -b "$device_path" ]]; then
    device_type='block'
else
    printf '[DEVICE CHECK ERROR] path is not a device node: %s\n' \
        "$device_path" >&2
    exit 1
fi

readable='no'
writable='no'
[[ -r "$device_path" ]] && readable='yes'
[[ -w "$device_path" ]] && writable='yes'

printf '[DEVICE FOUND] path=%s type=%s readable=%s writable=%s\n' \
    "$device_path" "$device_type" "$readable" "$writable"
ls -l -- "$device_path"
