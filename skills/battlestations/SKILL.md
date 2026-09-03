---
name: battlestations
description: Turn the current tmux session into a sick battlestation with clocks, htop, nvim, and the pi session.
---

# Battlestations Skill

Transform the current tmux session into a fully-loaded command center.

## Layout

The battlestation uses a 4-pane 2x2 tmux grid:

```
┌───────────────┬───────────────┐
│               │               │
│   CLOCK       │    CLOCK      │
│               │               │
├───────────────┼───────────────┤
│               │               │
│    HTOP       │     NVIM      │
│               │               │
└───────────────┴───────────────┘
```

The pi session is used from whichever pane you're in — this is your tmux session's main purpose.

## Workflow

### 0. Safety First

**Never** run raw `tmux` commands without scoping to the `battlestations` session. All commands MUST use `-t battlestations` to avoid bleeding into the user's existing sessions.

### 1. Kill Any Existing Battlestations Session

```bash
tmux kill-session -t battlestations 2>/dev/null || true
```

### 2. Create the Session and Window

```bash
tmux new-session -d -s battlestations -n cc
tmux set-option -t battlestations aggressive-resize on
```

### 3. Build the 2x2 Layout (all scoped to `-t battlestations`)

**CRITICAL:** Use pane IDs (`%NN`) instead of numeric indices — indices shift as you split.

```bash
# Split left/right
tmux split-window -h -t battlestations:cc

# Get pane IDs BEFORE further splits
PANE_IDS=($(tmux list-panes -t battlestations:cc -F '#{pane_id}'))

# Split each half top/bottom
tmux split-window -v -t "${PANE_IDS[0]}"
tmux split-window -v -t "${PANE_IDS[1]}"

# Re-read pane IDs (4 now)
PANE_IDS=($(tmux list-panes -t battlestations:cc -F '#{pane_id}'))
```

### 4. Launch Programs (all scoped to `-t battlestations`)

```bash
# Top-left: clock
tmux send-keys -t "${PANE_IDS[0]}" 'clock -a -u 0' C-m

# Top-right: clock
tmux send-keys -t "${PANE_IDS[1]}" 'clock -a -u 0' C-m

# Bottom-left: htop
tmux send-keys -t "${PANE_IDS[2]}" 'htop' C-m

# Bottom-right: nvim
tmux send-keys -t "${PANE_IDS[3]}" 'nvim' C-m

# Focus top-left
tmux select-pane -t "${PANE_IDS[0]}"
```

### 5. Polish

- Set a dark/terminal-friendly theme
- Configure nice pane borders
- Set reasonable window sizes
- Make sure the clock uses `clock` command (from `bsdmainutils` or `util-linux`)

### 6. Attach

```bash
tmux attach -t battlestations
```

## Fallbacks

If `clock` isn't available:
```bash
# Alternative: use a simple bash clock loop
while true; do date '+%H:%M:%S  %A, %B %d, %Y'; sleep 1; done
```

If `htop` isn't available:
```bash
top -o CPU
```

If `nvim` isn't available:
```bash
vim
```

## Output Format

```markdown
## Battlestation Deployed 🖥️

**Layout (2x2 grid):**
| Clock       | Clock       |
| htop        | nvim        |

**Keybindings:**
- `Ctrl+B` — tmux prefix
- `Ctrl+B` then `Arrow keys` — switch panes
- `Ctrl+B` then `X` — close pane (confirm carefully!)

**Reattach:** `tmux attach -t battlestations`
**Rebuild:** `tmux kill-session -t battlestations` then ask again
```

## Tips

- Use `tmux set-option -t battlestations pane-border-status top` for pane headers if supported
- Add `tmux set-option -t battlestations status-style "bg=black,fg=green"` for a slick status bar
- **CRITICAL:** Every `tmux` command MUST use `-t battlestations` — never run bare `tmux` commands
- Reattach anytime: `tmux attach -t battlestations`
- Kill and rebuild: `tmux kill-session -t battlestations && run the skill again`
