#!/bin/bash

target_pid="$1"

if [[ -z "$target_pid" ]]; then
    printf '%s\n' '[PROCESS CHECK ERROR] PID is required' >&2
    exit 1
fi

if [[ ! "$target_pid" =~ ^[0-9]+$ ]]; then
    printf '[PROCESS CHECK ERROR] invalid PID: %s\n' "$target_pid" >&2
    exit 1
fi

if kill -0 "$target_pid" 2>/dev/null; then
    printf '[PROCESS RUNNING] PID=%s\n' "$target_pid"
    ps -p "$target_pid" -o pid,ppid,user,stat,etime,cmd
else
    printf '[PROCESS NOT RUNNING OR NOT ACCESSIBLE] PID=%s\n' "$target_pid"
    exit 1
fi
