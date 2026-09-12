#!/bin/bash

protocol="$1"
port="$2"

if [[ -z "$protocol" || -z "$port" ]]; then
    printf '%s\n' '[SOCKET CHECK ERROR] protocol and port are required' >&2
    exit 1
fi

if [[ ! "$port" =~ ^[0-9]+$ ]] || (( port < 1 || port > 65535 )); then
    printf '[SOCKET CHECK ERROR] invalid port: %s\n' "$port" >&2
    exit 1
fi

case "$protocol" in
    tcp)
        socket_output="$(ss -H -lnt "sport = :$port" 2>&1)"
        ss_status="$?"
        ;;
    udp)
        socket_output="$(ss -H -lnu "sport = :$port" 2>&1)"
        ss_status="$?"
        ;;
    *)
        printf '[SOCKET CHECK ERROR] unsupported protocol: %s\n' "$protocol" >&2
        exit 1
        ;;
esac

if (( ss_status != 0 )); then
    printf '%s\n' "$socket_output" >&2
    printf '[SOCKET CHECK ERROR] ss query failed; protocol=%s port=%s\n' \
        "$protocol" "$port" >&2
    exit "$ss_status"
fi

if [[ -z "$socket_output" ]]; then
    printf '[SOCKET CHECK ERROR] no matching socket; protocol=%s port=%s\n' \
        "$protocol" "$port" >&2
    exit 1
fi

printf '[SOCKET FOUND] protocol=%s port=%s\n' "$protocol" "$port"
printf '%s\n' "$socket_output"
