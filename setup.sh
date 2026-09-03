#!/bin/bash
# Symlink pi-config into ~/.pi/agent/
# Each directory in pi-config/ gets symlinked into ~/.pi/agent/

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PI_AGENT_DIR="$HOME/.pi/agent"

mkdir -p "$PI_AGENT_DIR"

for dir in skills extensions prompts themes agents; do
    if [ -d "$SCRIPT_DIR/$dir" ]; then
        target="$PI_AGENT_DIR/$dir"
        if [ -L "$target" ] || [ -e "$target" ]; then
            rm -rf "$target"
        fi
        ln -s "$SCRIPT_DIR/$dir" "$target"
        echo "✓ $dir → $target"
    fi
done

# Symlink AGENTS.md (system prompt / context file)
if [ -f "$SCRIPT_DIR/AGENTS.md" ]; then
    target="$PI_AGENT_DIR/AGENTS.md"
    if [ -L "$target" ] || [ -e "$target" ]; then
        rm -f "$target"
    fi
    ln -s "$SCRIPT_DIR/AGENTS.md" "$target"
    echo "✓ AGENTS.md → $target"
fi

# Symlink single-file configs
for file in keybindings.json models.json settings.json; do
    if [ -f "$SCRIPT_DIR/$file" ]; then
        target="$PI_AGENT_DIR/$file"
        if [ -L "$target" ] || [ -e "$target" ]; then
            rm -f "$target"
        fi
        ln -s "$SCRIPT_DIR/$file" "$target"
        echo "✓ $file → $target"
    fi
done

echo ""
echo "pi-config symlinked into $PI_AGENT_DIR"
echo "Run 'pi' to load your config."
