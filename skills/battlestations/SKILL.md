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

### 0. Detect Current Session

**Always use the current session** — never hardcode a session number.

```bash
CURRENT_SESSION=$(tmux display-message -p '#S')
```

### 1. Kill Any Existing Battlestations Window

```bash
tmux kill-window -t "${CURRENT_SESSION}:battlestations" 2>/dev/null || true
```

### 2. Create the Window in Current Session

```bash
tmux new-window -t "${CURRENT_SESSION}":5 -n 'battlestations'
tmux set-option -t "${CURRENT_SESSION}":5 aggressive-resize on
tmux set-option -t "${CURRENT_SESSION}":5 pane-border-status top 2>/dev/null || true
tmux set-option -t "${CURRENT_SESSION}":5 pane-border-format " #{pane_index} " 2>/dev/null || true
tmux set-option -t "${CURRENT_SESSION}":5 status-style "bg=black,fg=green" 2>/dev/null || true
```

### 3. Build the 2x2 Layout (all scoped to current session)

**CRITICAL:** Use pane IDs (`%NN`) instead of numeric indices — indices shift as you split.

```bash
# Split left/right
tmux split-window -h -t "${CURRENT_SESSION}":battlestations

# Get pane IDs BEFORE further splits
PANE_IDS=($(tmux list-panes -t "${CURRENT_SESSION}":battlestations -F '#{pane_id}'))

# Split each half top/bottom
tmux split-window -v -t "${PANE_IDS[0]}"
tmux split-window -v -t "${PANE_IDS[1]}"

# Re-read pane IDs (4 now)
PANE_IDS=($(tmux list-panes -t "${CURRENT_SESSION}":battlestations -F '#{pane_id}'))
```

### 4. Launch Programs (all scoped to current session)

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

### 5. You're Done

The battlestation is now **window 5** in your current session. Switch to it with `Ctrl+B 5` or `Ctrl+B N`.

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
- `Ctrl+B` + `Arrow keys` — switch panes
- `Ctrl+B` + `5` (or `N`) — switch to battlestation window
- `Ctrl+B` + `X` — close pane (confirm carefully!)
```

## Tips

- **CRITICAL:** Always detect current session with `$(tmux display-message -p '#S')` — never hardcode
- **CRITICAL:** Use pane IDs (`%NN`) not numeric indices — indices shift on splits
- **CRITICAL:** Scope all commands to the current session — never run bare `tmux` commands
- Switch to battlestation: `Ctrl+B 5` or `Ctrl+B N`
- Kill and rebuild: `tmux kill-window -t <current-session>:battlestations` then ask again
