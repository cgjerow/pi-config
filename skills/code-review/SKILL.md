---
name: code-review
description: Perform a thorough code review focusing on bugs, security, performance, and maintainability. Use when reviewing PRs, staged changes, or any code changes before merging.
---

# Code Review Skill

A structured approach to reviewing code changes.

## Review Checklist

### 1. Correctness
- Does the code do what it's supposed to?
- Are there edge cases not handled?
- Are error paths covered?

### 2. Security
- Input validation and sanitization
- SQL injection, XSS, CSRF vectors
- Secrets or credentials in code
- Privilege escalation risks

### 3. Performance
- Unnecessary loops or N+1 queries
- Memory leaks or unbounded caches
- Blocking operations that should be async

### 4. Maintainability
- Clear naming and structure
- DRY principle
- Readability for future developers
- Proper error messages

### 5. Testing
- Are there tests?
- Do tests cover edge cases?
- Are tests meaningful or just passing?

## Output Format

For each issue found, provide:

```
🐛 Bug / ⚠️ Security / 📈 Performance / 💡 Suggestion
File: path/to/file.ts:42
Line: [code snippet]
Issue: [description]
Fix: [suggested fix]
```

## Workflow

1. Get the diff: `git diff HEAD` or `git diff --cached`
2. Review systematically through the checklist
3. Report findings grouped by severity
4. Offer to apply fixes if the user asks
