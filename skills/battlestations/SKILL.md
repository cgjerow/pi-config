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

### 1. Detect or Create Tmux Session

Check if already in a tmux session. If not, start one.

```bash
if [ -z "$TMUX" ]; then
    tmux new-session -d -s battlestations
    tmux attach -t battlestations
    exit
fi
```

### 2. Build the Layout

```bash
# Split horizontally: top half gets 2 panes, bottom gets pi session
tmux split-window -v          # Split into top/bottom
tmux send-keys -t 0 'clock -a -u 0' C-m   # Top-left: clock
tmux split-window -h          # Split top half left/right
tmux send-keys -t 1 'clock -a -u 0' C-m   # Top-right: clock
tmux send-keys -t 2 'htop' C-m                # Middle-left: htop
tmux send-keys -t 3 'nvim' C-m                # Middle-right: nvim
tmux select-pane -t 4                           # Focus bottom
```

### 3. Start the Pi Session

In the bottom pane, launch `pi`:

```bash
tmux send-keys -t 4 'pi' C-m
tmux select-pane -t 4
```

### 4. Polish

- Set a dark/terminal-friendly theme
- Configure nice pane borders
- Set reasonable window sizes
- Make sure the clock uses `clock` command (from `bsdmainutils` or `util-linux`)

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

- Use `tmux set-option -g pane-border-status top` for pane headers if supported
- Add `set -g status-style bg=black,fg=green` for a slick status bar
- Consider `tmux-set-buffer` for custom status lines
- Keep the battlestation session named `battlestations` for easy reattachment: `tmux attach -t battlestations`
