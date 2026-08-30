# AGENTS.md

## Configuration Convention

**All configuration is version-controlled and managed through this repo.**

`pi-config/` is the single source of truth for all pi coding agent configuration. Each subdirectory is symlinked into `~/.pi/agent/` via `setup.sh`:

```
pi-config/              ← version controlled (this repo)
├── skills/             → ~/.pi/agent/skills/
├── extensions/         → ~/.pi/agent/extensions/
├── prompts/            → ~/.pi/agent/prompts/
├── themes/             → ~/..pi/agent/themes/
├── keybindings.json    → ~/.pi/agent/keybindings.json
└── setup.sh

~/.pi/agent/            ← symlinked, do not edit directly
```

### Default Operating Procedure

When asked to create or modify any pi configuration (skills, extensions, prompts, themes, keybindings, etc.):

1. **Create/modify the file in `pi-config/`** — never in `~/.pi/agent/` directly
2. **Update `setup.sh`** if a new top-level item needs symlinking
3. **Run `setup.sh`** to update symlinks
4. **Commit** the changes to this repo

This ensures all agent behavior is reproducible, portable, and under version control.

### What Goes Here

| Item | Location |
|------|----------|
| Skills | `skills/` |
| Extensions (TypeScript) | `extensions/` |
| Prompt templates | `prompts/` |
| TUI themes | `themes/` |
| Keybindings | `keybindings.json` |
| Models | `models.json` (API keys via env vars) |
| Settings | `settings.json` |

### Skills vs Prompt Templates

**Prefer skills over prompt templates.** Skills provide structured workflows with checklists, safety steps, and consistent output formats. Prompt templates are simpler — they expand into a base prompt that you can tweak.

When creating a new capability, start with a skill. Use a prompt template only for lightweight, quick-reference prompts that don't need structure.

Existing prompt templates that duplicate skill functionality should be migrated to skills and removed from `prompts/`.

### What Does NOT Go Here

Machine-specific or secret data is git-ignored:
- `settings.json`
- `auth.json`
- `models.json`
- `sessions/`
