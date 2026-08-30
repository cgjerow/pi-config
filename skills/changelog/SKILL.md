---
name: changelog
description: Generate a changelog from git history or commit messages. Use before releases.
---

# Changelog Skill

Generates a structured changelog from git history.

## Usage

Run this skill in a git repo. It will:

1. Analyze recent commits (default: since last tag, or last N commits)
2. Group changes by type (feat, fix, chore, etc.)
3. Format into a standard changelog

## Output Format

```markdown
## [Version] - YYYY-MM-DD

### Added
- [Feature 1]
- [Feature 2]

### Changed
- [Change 1]

### Fixed
- [Fix 1]

### Removed
- [Removal 1]

### Security
- [Security fix 1]
```

## Workflow

1. `git log --oneline <range>` to see commits
2. Classify each commit into categories
3. Write descriptive, user-facing changelog entries
4. Reference related issues/PRs if applicable

## Tips

- Write entries from the user's perspective (what changed for them)
- Keep entries concise but informative
- Use conventional commits if available for auto-classification
- Include breaking changes prominently
