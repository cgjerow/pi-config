---
description: Review staged git changes for bugs, security issues, and quality
argument-hint: "[focus areas]"
---

Review the staged git changes (`git diff --cached`). Focus on:

1. **Correctness**: Logic errors, edge cases, error handling
2. **Security**: Input validation, injection risks, secrets exposure
3. **Performance**: N+1 queries, unnecessary allocations, blocking ops
4. **Style**: Consistency with existing codebase, naming clarity
5. **Tests**: Are tests needed? Are existing tests adequate?

If `$1` is provided, focus on that area specifically.

For each issue found, provide:
- File and line number
- What's wrong
- Suggested fix

Prioritize critical issues first. Be concise.
