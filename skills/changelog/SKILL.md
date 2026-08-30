---
name: changelog
description: Generate a structured changelog from git history or commit messages. Use before releases.
---

# Changelog Skill

Generates a structured changelog from git history.

## Workflow

### 1. Gather Commits
- Determine the range: since last tag, since last release, or last N commits
- `git log --oneline <range>` to see all commits
- Classify each commit into categories

### 2. Categorize
Group commits by type:
- **feat:** New features
- **fix:** Bug fixes
- **perf:** Performance improvements
- **refactor:** Code changes that neither fix bugs nor add features
- **docs:** Documentation changes
- **style:** Formatting, missing semicolons, etc.
- **test:** Adding or correcting tests
- **chore:** Build process or auxiliary tool changes
- **ci:** CI configuration changes
- **build:** Build system or external dependency changes
- **revert:** Revert commits
- **breaking:** Breaking changes

### 3. Write Entries
- Write user-facing descriptions (what changed for the user)
- Keep entries concise but informative
- Reference related issues/PRs
- Group related commits together

### 4. Format
- Use standard changelog format (Keep a Changelog)
- Include version number and date
- Highlight breaking changes prominently
- Add migration notes for breaking changes

## Output Format

```markdown
## [Version] - YYYY-MM-DD

### ⚠️ Breaking Changes
- [Breaking change 1]
- [Breaking change 2]

### 🚀 Features
- [Feature 1]
- [Feature 2]

### 🐛 Bug Fixes
- [Fix 1]
- [Fix 2]

### ⚡ Performance
- [Improvement 1]

### 🔧 Refactoring
- [Change 1]

### 📝 Documentation
- [Doc change 1]

### 🧪 Testing
- [Test change 1]

### 📦 Dependencies
- [Dependency update 1]
```

## Tips

- Write entries from the user's perspective
- Use conventional commits for auto-classification
- Include breaking changes at the top
- Add migration guides for breaking changes
- Reference issue/PR numbers
- Keep it readable for non-technical stakeholders
