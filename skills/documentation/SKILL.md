---
name: documentation
description: Generate and update documentation — README files, API docs, inline comments, and architecture overviews. Keep codebases well-documented.
---

# Documentation Skill

Creates and updates documentation to keep codebases accessible and maintainable.

## Workflow

### 1. Assess
- What documentation exists? What's missing?
- Who is the audience? (developers, users, contributors)
- What's the most needed documentation right now?

### 2. Create/Update

**README:**
- Project description and purpose
- Installation/Getting started
- Usage examples
- Configuration options
- Contributing guidelines

**API Documentation:**
- Function/class signatures with parameter descriptions
- Return types and behavior
- Usage examples
- Error conditions

**Inline Comments:**
- Explain *why*, not *what* (the code shows what)
- Document non-obvious logic
- Link to external resources when helpful

**Architecture Docs:**
- System overview diagram (text-based)
- Key design decisions and trade-offs
- Module relationships
- Data flow

### 3. Verify
- Documentation matches current code
- Examples actually work
- Links are valid
- Language is clear and consistent

## Output Format

```
## Documentation Report

**Type:** [README / API / Inline / Architecture]
**Scope:** [What was documented]
**Changes:** [What was added/updated]
**Audience:** [Who this is for]
```

## Tips

- Write for the person who will read this in 6 months (including future you)
- Keep examples simple and runnable
- Auto-generate API docs from type signatures when possible
- Document the "why" behind decisions, not just the "what"
- Review documentation as part of PR reviews
