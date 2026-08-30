# pi-config TODO

Potential improvements and customizations for the pi coding agent configuration.

---

## 🧩 Extensions (TypeScript)

### High Priority
- [ ] **Session history viewer** — `/sessions` command to list and switch between recent sessions

### Medium Priority
- [ ] **Terminal output capture** — Auto-format and highlight long command outputs in the TUI
- [ ] **Clipboard sync** — Copy TUI output to system clipboard with a keybinding

### Low Priority
- [ ] **Smart diff extension** — Auto-stage only changed files in the current working directory instead of `git add -A`
- [ ] **Context-aware suggestions** — Extension that reads project files (README, package.json, etc.) and injects into system prompt on session start
- [ ] **File watcher** — Notify when files change outside the session (e.g., another editor)
- [ ] **Multi-repo support** — Better handling when working across multiple git repos
- [ ] **Command quick-jump** — `/cd <dir>` to change working directory mid-session
- [ ] **Session export** — Export session to markdown or JSON with `/export`
- [ ] **Web search tool** — Extension that wraps `curl`/`wget` for quick web lookups
- [ ] **Code snippet library** — `/snip <name>` to save and retrieve code snippets
- [ ] **Environment variable manager** — `/env` to view/set env vars for the session
- [ ] **AI code review bot** — Auto-trigger code review on push/PR events

---

## 🎓 Skills

### High Priority
- [ ] **Debug skill** — Structured debugging workflow: reproduce → isolate → fix → verify
- [ ] **Refactor skill** — Step-by-step refactoring with safety checks (tests, backups)
- [ ] **Documentation skill** — Generate/update README, API docs, inline comments

### Low Priority
- [ ] **Setup/new-project skill** — Scaffold a new project with best practices for the stack
- [ ] **Testing skill** — Write unit/integration tests following project conventions
- [ ] **Dependency audit skill** — Check for outdated/vulnerable packages and propose updates
- [ ] **Database migration skill** — Safe database schema changes with rollback plans
- [ ] **Deployment skill** — Step-by-step deploy with health checks
- [ ] **Performance profiling skill** — Identify bottlenecks and optimize hot paths
- [ ] **Accessibility audit skill** — Check for WCAG compliance issues

---

## 🎓 Skills (continued)

### New Skills (migrated from prompt templates)
- [ ] **Explain** — Explain a code block, function, or error in plain language
- [ ] **Deep dive** — Deep dive into why a solution works
- [ ] **Compare** — Compare two approaches/libraries/frameworks
- [ ] **Security audit** — Focused security review of a codebase section
- [ ] **Changelog** — Generate a changelog from git history
- [ ] **TODO extraction** — Extract TODOs and follow-up items from a diff
- [ ] **Translate** — Translate code/comments between languages
- [ ] **Summarize** — Summarize a file, directory, or codebase
- [ ] **Best practices** — List best practices for a given technology
- [ ] **Evaluate** — Critically evaluate a plan, idea, or proposal (assumptions, risks, gaps, alternatives)

### Existing Skills (already created)
- [ ] **Debug** — Structured debugging workflow: reproduce → isolate → fix → verify
- [ ] **Refactor** — Step-by-step refactoring with safety checks (tests, backups)
- [ ] **Documentation** — Generate/update README, API docs, inline comments
- [ ] **Setup/new-project** — Scaffold a new project with best practices for the stack
- [ ] **Testing** — Write unit/integration tests following project conventions
- [ ] **Dependency audit** — Check for outdated/vulnerable packages and propose updates
- [ ] **Database migration** — Safe database schema changes with rollback plans
- [ ] **Deployment** — Step-by-step deploy with health checks
- [ ] **Performance profiling** — Identify bottlenecks and optimize hot paths
- [ ] **Accessibility audit** — Check for WCAG compliance issues

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

## 🤔 Nice-to-Have Ideas

- [ ] **AI-generated commit messages** — Use the prompt template + LLM for better messages instead of just taking the first line
- [ ] **Session tags** — Tag sessions with labels for filtering (`#bug`, `#feature`, `#learning`)
- [ ] **Voice input** — Extension for speech-to-text input
- [ ] **Code golf mode** — `/golf` for minimal/optimized solutions
- [ ] **Pair programming mode** — Structured turn-taking for collaborative work
- [ ] **Learning mode** — Pi explains every step in detail for educational purposes
- [ ] **Project onboarding** — `/onboard` to generate a project overview from the codebase

---

## ✅ Completed

| Date | Item | Notes |
|------|------|-------|
| 2025-08-29 | Initial TODO list created | Audit of existing config |
