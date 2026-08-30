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

---

## Subagent Extension

The `subagent` extension delegates tasks to specialized subagents running in **isolated `pi` processes** with their own context windows. This prevents polluting the main conversation with intermediate work.

### How It Works

Each subagent is a separate `pi` process with:
- Its own system prompt (defined in an agent `.md` file)
- Optional tool restrictions (subset of tools)
- Optional model selection (defaults to parent session's model)
- Independent context window (no carryover from the main session)

### Execution Modes

| Mode | Params | Description |
|------|--------|-------------|
| Single | `{ agent, task }` | One agent, one task |
| Parallel | `{ tasks: [...] }` | Multiple agents concurrently (max 8, 4 concurrent) |
| Chain | `{ chain: [...] }` | Sequential with `{previous}` placeholder for output handoff |

### Agent Definitions

Agents are markdown files with YAML frontmatter:

```markdown
---
name: agent-name
description: What this agent does
tools: read, grep, find, ls, bash
model: claude-haiku-4-5
---

System prompt for the agent goes here.
```

**Locations:**
| Location | Scope | Loaded when |
|----------|-------|-------------|
| `~/.pi/agent/agents/*.md` | User-level | Always |
| `.pi/agents/*.md` | Project-level | `agentScope: "both"` or `"project"` (with trust confirmation) |

Project agents override user agents with the same name when `agentScope: "both"`.

### Built-in Agents

| Agent | Purpose | Model | Tools |
|-------|---------|-------|-------|
| `scout` | Fast codebase recon, returns compressed context | Haiku | read, grep, find, ls, bash |
| `planner` | Creates implementation plans from context | Sonnet | read, grep, find, ls |
| `reviewer` | Code review (read-only bash) | Sonnet | read, grep, find, ls, bash |
| `worker` | General-purpose, full capabilities | Sonnet | all |

### Workflow Prompts

| Prompt | Flow | Use case |
|--------|------|----------|
| `/implement <query>` | scout → planner → worker | Full implementation |
| `/scout-and-plan <query>` | scout → planner | Just the plan, no changes |
| `/implement-and-review <query>` | worker → reviewer → worker | Implement + review + fix |

### Creating Custom Agents

1. Create `skills/<name>/SKILL.md` for the skill definition
2. Create `agents/<name>.md` with frontmatter + system prompt
3. Optionally create a workflow prompt in `prompts/` for multi-step chains

**Example: test-gen agent**
```markdown
---
name: test-gen
description: Writes unit tests for given code
tools: read, write, bash
---

You are a test generation specialist. Write comprehensive unit tests...
```

### Security Model

Project-local agents are repo-controlled prompts that can instruct the model to read files, run bash commands, etc. The extension prompts for confirmation before running project-local agents in untrusted projects. Set `confirmProjectAgents: false` to skip confirmation for trusted repos.

### Output Display

- **Collapsed view** (default): Status icon, last 5-10 items, usage stats
- **Expanded view** (Ctrl+O): Full task text, all tool calls, final output as Markdown
- **Parallel streaming**: Live status for all tasks, "2/3 done, 1 running" updates
- **Chain streaming**: Shows completed steps + current step progress
