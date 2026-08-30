---
name: refactor
description: Step-by-step refactoring with safety checks. Identifies code smells, proposes improvements, and ensures changes are safe with tests and backups.
---

# Refactor Skill

A safe, structured approach to refactoring code without changing external behavior.

## Workflow

### 1. Analyze
- Identify the code to refactor and the goal (readability, performance, DRY, etc.)
- Identify the scope: what touches this code?
- Check for existing tests — if none, write them first

### 2. Plan
- Propose the refactoring strategy
- Identify risks: breaking changes, edge cases, dependencies
- Define acceptance criteria: what should look/feel the same after?

### 3. Execute
- Make small, incremental changes
- Run tests after each change
- Commit frequently with descriptive messages
- Use version control to enable easy rollback

### 4. Verify
- All existing tests pass
- Manual verification of key behaviors
- No new linting errors or type errors
- Performance is not degraded

## Safety Checklist

- [ ] Tests exist and cover the refactored code
- [ ] Changes are small and incremental
- [ ] Each step compiles/runs
- [ ] No scope creep — stick to the refactoring goal
- [ ] Git history allows easy rollback

## Output Format

```
## Refactor Report

**Goal:** [What we're improving]
**Changes:** [What was changed]
**Before:** [Key snippet]
**After:** [Key snippet]
**Tests:** [Status — passing/failing]
**Risk:** [Low/Medium/High]
```

## Tips

- Refactor in small steps, not one big change
- Use the compiler/linter as your safety net
- If a refactor feels risky, break it into smaller steps
- Document *why* you're refactoring, not just what changed
