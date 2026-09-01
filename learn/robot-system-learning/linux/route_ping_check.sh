#!/bin/bash

target="$1"

if [[ -z "$target" ]]; then
    printf '%s\n' '[ROUTE PING ERROR] target IPv4 address is required' >&2
    exit 1
fi

printf '[ROUTE CHECK] target=%s\n' "$target"
route_output="$(ip route get "$target" 2>&1)"
route_status="$?"

if (( route_status != 0 )); then
    printf '%s\n' "$route_output" >&2
    printf '[ROUTE PING ERROR] route lookup failed; target=%s\n' "$target" >&2
    exit "$route_status"
fi

printf '%s\n' "$route_output"
printf '[PING CHECK] target=%s\n' "$target"
ping -c 3 -W 1 "$target"
ping_status="$?"

if (( ping_status != 0 )); then
    printf '[ROUTE PING ERROR] ping failed; target=%s status=%s\n' \
        "$target" "$ping_status" >&2
    exit "$ping_status"
fi

printf '[ROUTE PING COMPLETE] target=%s\n' "$target"
