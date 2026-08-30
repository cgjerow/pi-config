---
name: debug
description: "Structured debugging workflow: reproduce -> isolate -> fix -> verify. Use when something is broken or behaving unexpectedly."
---

# Debug Skill

A systematic approach to debugging: reproduce the issue, isolate the root cause, fix it, and verify the fix.

## Workflow

### 1. Reproduce
- Understand the expected behavior vs. actual behavior
- Reproduce the issue reliably
- Gather error messages, logs, stack traces
- Note the conditions under which it happens

### 2. Isolate
- Identify the scope: is it a single file, a module, an integration?
- Use binary search: bisect to find the smallest reproducible case
- Check recent changes: `git log`, `git diff`
- Form a hypothesis about the root cause

### 3. Fix
- Implement the fix based on the root cause
- Keep changes minimal and focused
- Add logging or assertions if helpful

### 4. Verify
- Confirm the original issue is resolved
- Check for regressions in related functionality
- Run tests if available
- Ensure the fix handles edge cases

## Output Format

```
## Debug Report

**Issue:** [What's broken]
**Reproduction:** [How to reproduce]
**Root Cause:** [What's actually wrong]
**Fix:** [What was changed and why]
**Verification:** [How we confirmed it's fixed]

## Lessons Learned
- [Any patterns to watch for]
- [Prevention ideas]
```

## Tips

- Don't jump to fixes — understand the problem first
- The simplest explanation is usually right
- If you can't reproduce it, you can't fix it
- Add a test after fixing to prevent regression
