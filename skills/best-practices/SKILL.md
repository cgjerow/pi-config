---
name: best-practices
description: List best practices, conventions, and recommendations for a given technology, framework, or language. Covers principles, pitfalls, and tooling.
---

# Best Practices Skill

Provides best practices, conventions, and recommendations for a given technology, framework, or language.

## Workflow

### 1. Identify Scope
- What technology, framework, or language?
- What version or ecosystem?
- What's the context? (web, mobile, backend, data science, etc.)

### 2. Cover Key Areas

**General Principles:**
- Widely accepted best practices
- Common patterns and anti-patterns
- Design principles that apply

**Language/Framework Specifics:**
- Idiomatic patterns and conventions
- Common gotchas and pitfalls
- Performance best practices

**Security:**
- Common security considerations
- OWASP-related issues for the tech
- Secure configuration defaults

**Testing:**
- Recommended testing approaches
- Common testing patterns
- Test organization

**Tooling:**
- Recommended linters and formatters
- Debugging tools
- Profiling and monitoring

**Project Structure:**
- Common directory layouts
- Module organization
- Separation of concerns

### 3. Provide Context
- Link to official documentation
- Note version-specific considerations
- Mention community consensus vs. opinions

## Output Format

```markdown
## Best Practices: [Technology/Topic]

### General Principles
- [Principle 1]: [Brief explanation]
- [Principle 2]: [Brief explanation]

### Idiomatic Patterns
- [Pattern 1]: [When to use]
- [Pattern 2]: [When to use]

### Common Pitfalls
- [Pitfall 1]: [What to do instead]
- [Pitfall 2]: [What to do instead]

### Recommended Tooling
| Category | Tool | Why |
|----------|------|-----|
| Linting | [Tool] | [Reason] |
| Formatting | [Tool] | [Reason] |
| Testing | [Tool] | [Reason] |

### Project Structure
```
recommended/
structure/
├── src/
├── tests/
├── docs/
└── ...
```

### Version Notes
- [Any version-specific considerations]

### Further Reading
- [Link to official docs]
- [Link to community guides]
```

## Tips

- Be specific to the version/ecosystem the user is working with
- Distinguish between strong consensus and personal opinion
- Include links to official docs where helpful
- Prioritize practices by impact
- Note when practices have changed in newer versions
