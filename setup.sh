#!/bin/bash
# Symlink pi-config into ~/.pi/agent/
# Each directory in pi-config/ gets symlinked into ~/.pi/agent/

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PI_AGENT_DIR="$HOME/.pi/agent"

mkdir -p "$PI_AGENT_DIR"

for dir in skills extensions templates themes; do
    if [ -d "$SCRIPT_DIR/$dir" ]; then
        target="$PI_AGENT_DIR/$dir"
        if [ -L "$target" ] || [ -e "$target" ]; then
            rm -rf "$target"
        fi
        ln -s "$SCRIPT_DIR/$dir" "$target"
        echo "✓ $dir → $target"
    fi
done

echo ""
echo "pi-config symlinked into $PI_AGENT_DIR"
echo "Run 'pi' to load your config."
