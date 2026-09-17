#!/bin/bash

usb_id="$1"

if [[ -z "$usb_id" ]]; then
    printf '%s\n' '[USB CHECK ERROR] VID:PID is required' >&2
    exit 1
fi

if [[ ! "$usb_id" =~ ^[[:xdigit:]]{4}:[[:xdigit:]]{4}$ ]]; then
    printf '[USB CHECK ERROR] invalid VID:PID: %s\n' "$usb_id" >&2
    exit 1
fi

usb_output="$(lsusb 2>&1)"
enumerate_status="$?"

if [[ "$enumerate_status" -ne 0 ]]; then
    printf '%s\n' '[USB CHECK ERROR] USB enumeration failed' >&2
    printf '%s\n' "$usb_output" >&2
    exit 2
fi

match_output="$(printf '%s\n' "$usb_output" | grep -i -F "ID $usb_id ")"

if [[ -z "$match_output" ]]; then
    printf '[USB CHECK ERROR] no enumerated device matched: %s\n' \
        "$usb_id" >&2
    exit 1
fi

printf '[USB FOUND] VID:PID=%s\n' "$usb_id"
printf '%s\n' "$match_output"
