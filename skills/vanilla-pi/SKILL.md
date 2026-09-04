---
name: vanilla-pi
description: Launch a clean, uncustomized pi session in a new tmux window for debugging base behavior.
---

# Vanilla Pi

Launch a raw pi session with zero customizations for debugging or testing base pi behavior.

## Steps

1. Create the config directory and copy only the models config:
   ```bash
   mkdir -p /tmp/pi-raw-config
   cp ~/.pi/agent/models.json /tmp/pi-raw-config/models.json 2>/dev/null || true
   ```

2. Open a new tmux window in the current session:
   ```bash
   tmux new-window -n 'pi-raw' 'PI_CODING_AGENT_DIR=/tmp/pi-raw-config pi'
   ```

3. Switch to the new window:
   ```bash
   tmux select-window -t 'pi-raw'
   ```

4. Verify the session is clean — the startup header should show no skills, extensions, themes, or AGENTS.md loaded, but models should be available.

5. When done, switch back to the original window (Ctrl+B then ← or your tmux back key).

## Notes

- This bypasses everything in `~/.pi/agent/` **except** `models.json` (your provider/model config).
- Loaded: zero skills, extensions, themes, prompt templates, context files, system prompts, keybindings, or settings.
- The config dir `/tmp/pi-raw-config` is reused across runs. Delete it to reset.
- To run non-interactively instead: `PI_CODING_AGENT_DIR=/tmp/pi-raw-config pi -p "your prompt"`
