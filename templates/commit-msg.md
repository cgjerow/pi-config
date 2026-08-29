---
description: Generate a commit message from recent changes
argument-hint: "[convention]"
---

Analyze the unstaged and staged changes to generate a commit message.

Run `git diff --cached` and `git diff` to see all changes.

Generate a commit message following the convention specified in `$1` (default: conventional commits).

Format:

```
<type>(<scope>): <description>

<body if needed>

<footer if needed>
```

Types: feat, fix, docs, style, refactor, perf, test, chore, build, ci

Be specific about what changed and why. Keep the subject line under 72 characters.
