#!/bin/bash

log_file="${1:-}"

if [ -z "$log_file" ] || [ ! -f "$log_file" ]; then
    echo "[ANALYZER ERROR] log file not found: $log_file" >&2
    exit 3
fi

error_count=$(grep -F -c -- '[ERROR]' "$log_file")
warning_count=$(grep -F -c -- '[WARN]' "$log_file")

echo "Log file: $log_file"
echo "ERROR count: $error_count"
echo "WARN count: $warning_count"

if [ "$error_count" -gt 0 ]; then
    echo "--- ERROR evidence ---"
    grep -Fn -C 1 -- '[ERROR]' "$log_file"
    echo "[STATUS] ERROR"
    exit 2
fi

if [ "$warning_count" -gt 0 ]; then
    echo "--- WARN evidence ---"
    grep -Fn -C 1 -- '[WARN]' "$log_file"
    echo "[STATUS] WARN"
    exit 1
fi

echo "[STATUS] HEALTHY"
exit 0