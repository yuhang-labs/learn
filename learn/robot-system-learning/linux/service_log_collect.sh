#!/bin/bash

unit_name="$1"
since_time="$2"
output_file="$3"

if [[ -z "$unit_name" || -z "$since_time" || -z "$output_file" ]]; then
    printf '%s\n' '[LOG COLLECTION ERROR] unit, since time and output file are required' >&2
    exit 1
fi

{
    printf '[LOG COLLECTION] unit=%s since=%s\n' "$unit_name" "$since_time"
    journalctl --user -u "$unit_name" --since "$since_time" --no-pager
} > "$output_file" 2>&1

collect_status="$?"

if (( collect_status != 0 )); then
    printf '[LOG COLLECTION ERROR] failed; report=%s\n' "$output_file" >&2
    exit "$collect_status"
fi

printf '[LOG COLLECTION COMPLETE] report=%s\n' "$output_file"
