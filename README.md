# pi-config

My pi coding agent configuration — skills, extensions, prompt templates, and themes.

## Structure

```
pi-config/
├── skills/           # Custom skills (auto-discovered in ~/.pi/agent/skills/)
├── extensions/       # TypeScript extensions (auto-discovered in ~/.pi/agent/extensions/)
├── templates/        # Prompt templates (auto-discovered in ~/.pi/agent/prompts/)
├── themes/           # TUI themes (auto-discovered in ~/.pi/agent/themes/)
├── setup.sh          # Symlink everything into ~/.pi/agent/
└── .gitignore        # Skips secrets and session data
```

## Setup

```bash
bash ~/pi-config/setup.sh
```

This symlinks each subdirectory into `~/.pi/agent/` so pi auto-discovers them.

## What's Here

### Skills
Self-contained capability packages that pi loads on-demand. Access via `/skill:<name>`.

### Extensions
TypeScript modules that extend pi's behavior — custom tools, event hooks, UI components.
Auto-discovered in `~/.pi/agent/extensions/` and hot-reloadable with `/reload`.

### Prompt Templates
Markdown snippets that expand into full prompts. Type `/template-name` to invoke.

### Themes
JSON files defining TUI colors. Set in `/settings` or `settings.json`.

## Adding Things

### New Skill
```bash
mkdir -p skills/my-skill
# Create skills/my-skill/SKILL.md with frontmatter + instructions
```

### New Extension
```bash
touch extensions/my-extension.ts
# Write TypeScript using ExtensionAPI
```

### New Template
```bash
touch templates/my-template.md
# Markdown with --- frontmatter ---
```

### New Theme
```bash
touch themes/my-theme.json
# JSON with color tokens
```

Then run `setup.sh` again if needed (symlinks are idempotent).

## Separation of Concerns

- **Version controlled**: skills, extensions, templates, themes (your agent behavior)
- **Git ignored**: `settings.json`, `auth.json`, `models.json`, `sessions/` (machine-specific secrets/data)
- **Not here**: pi itself (installed via `npm -g`), API keys, session history
