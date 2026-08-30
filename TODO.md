# pi-config TODO

Potential improvements and customizations for the pi coding agent configuration.

> **Note:** Pi's extensibility model is unified — everything is an extension (TypeScript). Integrations (Google Drive, GitHub, Slack, etc.), tools, commands, UI components, and event handlers all live in `extensions/`.

---

## 🧩 Extensions (TypeScript)

### Integrations
External service integrations via custom tools.

- [ ] **Google Drive** — Read/write files, list folders, share docs
- [ ] **GitHub** — Create issues, manage PRs, check CI status
- [ ] **Slack/Discord** — Send notifications, read channels
- [ ] **Jira** — Create/update tickets, check sprint status
- [ ] **Notion** — Read/write pages, databases
- [ ] **Email** — Send emails, read inbox (IMAP)
- [ ] **Calendar** — Create events, check availability

### Built-in Enhancements
Extensions that improve pi's core capabilities.

- [ ] **Session history viewer** — `/sessions` command to list and switch between recent sessions
- [ ] **Terminal output capture** — Auto-format and highlight long command outputs in the TUI
- [ ] **Clipboard sync** — Copy TUI output to system clipboard with a keybinding
- [ ] **Smart diff extension** — Auto-stage only changed files instead of `git add -A`
- [ ] **Context-aware suggestions** — Read project files (README, package.json) and inject into system prompt on session start
- [ ] **File watcher** — Notify when files change outside the session (e.g., another editor)
- [ ] **Multi-repo support** — Better handling when working across multiple git repos
- [ ] **Command quick-jump** — `/cd <dir>` to change working directory mid-session
- [ ] **Session export** — Export session to markdown or JSON with `/export`
- [ ] **Web search tool** — Extension that wraps `curl`/`wget` for quick web lookups
- [ ] **Code snippet library** — `/snip <name>` to save and retrieve code snippets
- [ ] **Environment variable manager** — `/env` to view/set env vars for the session
- [ ] **AI code review bot** — Auto-trigger code review on push/PR events

---

## ✅ Skills (all created)

All 20 skills are defined in `skills/` with consistent structure (workflow, output format, tips).

### Core Development (High)
- [x] **Debug** — Structured debugging: reproduce → isolate → fix → verify
- [x] **Refactor** — Step-by-step refactoring with safety checks
- [x] **Documentation** — Generate/update README, API docs, inline comments
- [x] **Testing** — Write unit/integration tests following project conventions
- [x] **Security audit** — Focused security review of code/config/infra
- [x] **Explain** — Explain code, functions, or errors in plain language

### Analysis & Decision-Making (Medium)
- [x] **Deep dive** — Thorough technical explanation of why something works
- [x] **Compare** — Structured comparison of approaches/libraries/frameworks
- [x] **Evaluate** — Critical evaluation of plans/ideas (assumptions, risks, gaps)
- [x] **Changelog** — Generate changelog from git history
- [x] **Dependency audit** — Check for outdated/vulnerable packages
- [x] **Best practices** — List best practices for a given technology

### Operations & Maintenance (Medium/Low)
- [x] **Setup/new-project** — Scaffold a new project with best practices
- [x] **Deployment** — Step-by-step deploy with health checks
- [x] **Database migration** — Safe schema changes with rollback plans
- [x] **Performance profiling** — Identify bottlenecks and optimize
- [x] **Accessibility audit** — Check WCAG compliance

### Utility (Low)
- [x] **TODO extraction** — Extract TODOs from diffs/reviews/conversations
- [x] **Translate** — Translate code/comments between languages
- [x] **Summarize** — Summarize files, directories, or codebases

---

## 🎨 Themes

### High Priority
- [ ] **Catppuccin Latte** — Light mode variant of Catppuccin Mocha
- [ ] **Catppuccin Frappé** — Mid-tone dark variant
- [ ] **Catppuccin Macchiato** — Richer dark variant

### Medium Priority
- [ ] **One Dark / One Light** — Popular Atom theme
- [ ] **Dracula** — High-contrast dark theme
- [ ] **Gruvbox Dark** — Warm retro theme
- [ ] **Nord** — Arctic blue theme
- [ ] **Tokyo Night** — Modern dark theme

### Low Priority
- [ ] **Dynamic theme** — Auto-switches between light/dark based on system preference
- [ ] **High contrast accessibility theme** — For improved readability
- [ ] **Dimmed theme** — Lower brightness for night use

---

## ⌨️ Keybindings

### High Priority
- [ ] Add `/` trigger keybinding for quick prompt access
- [ ] Add `ctrl+c` to cancel/abort current operation
- [ ] Add `ctrl+l` to clear the TUI screen

### Medium Priority
- [ ] Session navigation: `ctrl+up/down` to switch sessions
- [ ] Quick undo: `ctrl+z` to revert last tool output
- [ ] Paste from clipboard: `ctrl+v` in text input mode

### Low Priority
- [ ] Custom keybinding for running `setup.sh`
- [ ] Bookmark keybinding for saving session state
- [ ] Expand/collapse tool output sections

---

## 🔧 Models & Providers

### High Priority
- [ ] Add a secondary model provider (e.g., OpenRouter, Together) for fallback when local model is slow
- [ ] Add model switching extension — `/model <name>` to swap models mid-session
- [ ] Configure model-specific system prompts (different prompts per model)

### Medium Priority
- [ ] Add quantized model variants for different hardware profiles
- [ ] Add cost tracking dashboard extension
- [ ] Add model benchmarking skill

### Low Priority
- [ ] Multi-model routing (simple tasks → fast model, complex → capable model)
- [ ] Offline-first mode with local embeddings

---

## 🏗️ Infrastructure

### High Priority
- [ ] **Cross-platform setup.sh** — Make `setup.sh` work on Linux (currently macOS-specific)
- [ ] **Backup script** — Export and archive session history
- [ ] **Config validation** — Script to verify all symlinks are intact after updates

### Medium Priority
- [ ] **Docker setup** — Containerized pi-config for reproducible environments
- [ ] **Multi-machine support** — Per-machine config overrides (e.g., different API keys)
- [ ] **CI check** — GitHub Actions to validate config structure

### Low Priority
- [ ] **Config sync** — Auto-sync across machines via git
- [ ] **Version bump script** — Automated changelog for config changes

---

## 📚 Documentation

### High Priority
- [ ] **AGENTS.md** — Add examples of each skill/extension with usage
- [ ] **Extension API reference** — Document available hooks and types in `extensions/`
- [ ] **Theme schema guide** — Document all color tokens and how to customize

### Medium Priority
- [ ] **Migration guide** — How to upgrade from older pi-config versions
- [ ] **Troubleshooting FAQ** — Common issues and fixes
- [ ] **Contributing guide** — How others can contribute to the config

---

## ✅ Completed

| Date | Item | Notes |
|------|------|-------|
| 2025-08-29 | Initial TODO list created | Audit of existing config |
| 2025-08-29 | Skills-first policy | Documented in AGENTS.md |
| 2025-08-29 | 20 skills defined | All with consistent structure |
| 2025-08-29 | TODO cleaned up | Merged duplicates, added integrations |
| 2025-08-29 | Subagent extension | Agents + composites installed |
