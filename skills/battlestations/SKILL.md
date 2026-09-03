---
name: battlestations
description: Turn the current tmux session into a sick battlestation with clocks, htop, nvim, and the pi session.
---

# Battlestations Skill

Transform the current tmux session into a fully-loaded command center.

## Layout

The battlestation uses a 4-pane tmux layout:

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   CLOCK (top)       │      CLOCK (top)    │
│                     │                     │
├─────────────────────┼─────────────────────┤
│                     │                     │
│   HTOP              │     NVIM            │
│                     │                     │
├─────────────────────┴─────────────────────┤
│                                           │
│           PI SESSION (bottom)             │
│                                           │
└───────────────────────────────────────────┘
```

## Workflow

### 0. Safety First

**Never** run raw `tmux` commands without scoping to the `battlestations` session. All commands MUST use `-t battlestations` to avoid bleeding into the user's existing sessions.

### 1. Kill Any Existing Battlestations Session

```bash
tmux kill-session -t battlestations 2>/dev/null || true
```

### 2. Create the Session and Window

```bash
tmux new-session -d -s battlestations -n command-center
tmux set-option -t battlestations aggressive-resize on
```

### 3. Build the Layout (all scoped to `-t battlestations`)

```bash
# Split vertically: top half / bottom half
tmux split-window -v -t battlestations:command-center

# Split the TOP pane horizontally
tmux split-window -h -t battlestations:command-center.0

# Split the BOTTOM pane vertically
# (first get the bottom pane ID)
tmux split-window -v -t battlestations:command-center.1
```

### 4. Launch Programs (all scoped to `-t battlestations`)

```bash
# Top-left: clock
tmux send-keys -t battlestations:command-center.0 'clock -a -u 0' C-m

# Top-right: clock
tmux send-keys -t battlestations:command-center.1 'clock -a -u 0' C-m

# Middle-left: htop
tmux send-keys -t battlestations:command-center.2 'htop' C-m

# Middle-right: nvim
tmux send-keys -t battlestations:command-center.3 'nvim' C-m

# Bottom: pi session
tmux send-keys -t battlestations:command-center.4 'pi' C-m
tmux select-pane -t battlestations:command-center.4
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

**Layout:**
| Top-Left    | Top-Right   |
|-------------|-------------|
| Clock       | Clock       |
| Middle-Left | Middle-Right|
| htop        | nvim        |
| Bottom      | pi session  |

**Keybindings:**
- `Ctrl+B` — tmux prefix
- `Ctrl+B` then `Arrow keys` — switch panes
- `Ctrl+B` then `X` — close pane (confirm carefully!)

**Tip:** The bottom pane is your pi session — that's where the magic happens.
```

## Tips

- Use `tmux set-option -t battlestations pane-border-status top` for pane headers if supported
- Add `tmux set-option -t battlestations status-style "bg=black,fg=green"` for a slick status bar
- **CRITICAL:** Every `tmux` command MUST use `-t battlestations` — never run bare `tmux` commands
- Reattach anytime: `tmux attach -t battlestations`
- Kill and rebuild: `tmux kill-session -t battlestations && run the skill again`
