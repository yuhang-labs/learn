#!/bin/bash

output_file="${1:-day4_system_check.log}"
required_commands=(date uname hostname df free uptime)

check_command() {
    local command_name="$1"

    if command -v "$command_name" >/dev/null 2>&1; then
        echo "[OK] $command_name"
        return 0
    fi

    echo "[ERROR] missing command: $command_name" >&2
    return 1
}

if [ "${DAY4_TEST_MISSING:-0}" = "1" ]; then
    required_commands+=(day4_missing_command)
fi

for command_name in "${required_commands[@]}"; do
    check_command "$command_name" || exit 1
done

{
    echo "=== Robot System Diagnostic ==="
    echo "Time: $(date '+%F %T')"
    echo "Host: $(hostname)"
    echo "Kernel: $(uname -r)"
    echo "Architecture: $(uname -m)"
    echo
    echo "--- Root Filesystem ---"
    df -h /
    echo
    echo "--- Memory ---"
    free -h
    echo
    echo "--- Uptime And Load ---"
    uptime
} > "$output_file" 2>&1

echo "Report saved to: $output_file"