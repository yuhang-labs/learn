#!/bin/bash

input_log="${1:-}"
report_file="${2:-/tmp/day8-attention-report.txt}"

if [ -z "$input_log" ] || [ ! -f "$input_log" ]; then
    echo "[PIPELINE ERROR] input log not found: $input_log" >&2
    exit 1
fi

echo "Input log: $input_log"
echo "Report file: $report_file"
echo "--- Attention lines ---"

grep -F -e '[ERROR]' -e '[WARN]' "$input_log" \
    | tee "$report_file"

matched_lines=$(wc -l < "$report_file")
echo "Matched lines: $matched_lines"

if [ "$matched_lines" -eq 0 ]; then
    echo "[RESULT] no warning or error found"
else
    echo "[RESULT] attention required"
fi