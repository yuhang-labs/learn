#!/bin/bash

search_dir="${1:-.}"
keyword="${2:-ERROR}"

if [ ! -d "$search_dir" ]; then
    echo "[ERROR] directory not found: $search_dir" >&2
    exit 2
fi

mapfile -d '' -t log_files < <(
    find "$search_dir" -maxdepth 2 -type f -name '*.log' -print0
)

if [ "${#log_files[@]}" -eq 0 ]; then
    echo "[INFO] no log files found in: $search_dir"
    exit 3
fi

echo "[INFO] searched log files: ${#log_files[@]}"

grep -Hn -- "$keyword" "${log_files[@]}"
grep_status=$?

case "$grep_status" in
    0)
        echo "[OK] keyword found: $keyword"
        exit 0
        ;;
    1)
        echo "[INFO] no matching line: $keyword"
        exit 1
        ;;
    *)
        echo "[ERROR] grep failed with status: $grep_status" >&2
        exit "$grep_status"
        ;;
esac