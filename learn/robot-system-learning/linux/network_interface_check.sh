#!/bin/bash

interface_name="$1"

if [[ -z "$interface_name" ]]; then
    printf '%s\n' '[NETWORK CHECK ERROR] interface name is required' >&2
    exit 1
fi

if ! ip link show dev "$interface_name" >/dev/null 2>&1; then
    printf '[NETWORK CHECK ERROR] interface not found: %s\n' "$interface_name" >&2
    exit 1
fi

printf '[NETWORK LINK] interface=%s\n' "$interface_name"
ip -brief link show dev "$interface_name"

printf '[NETWORK ADDRESS] interface=%s\n' "$interface_name"
ip -brief addr show dev "$interface_name"
