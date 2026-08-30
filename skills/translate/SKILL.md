---
name: translate
description: Translate code, comments, or documentation between programming languages or natural languages. Preserves semantics and follows idiomatic patterns.
---

# Translate Skill

Translates code, comments, or documentation between programming languages or natural languages.

## Workflow

### 1. Analyze Source
- Understand the original code/comments fully
- Identify the semantics and intent
- Note any language-specific features or patterns

### 2. Translate

**Code Translation:**
- Preserve functionality and behavior
- Follow idiomatic patterns of the target language
- Adapt to ecosystem conventions (naming, file structure, etc.)
- Use equivalent libraries/APIs in the target ecosystem

**Comment/Doc Translation:**
- Translate meaning, not just words
- Adapt examples to the target language if applicable
- Preserve technical accuracy

### 3. Verify
- Does the translated code compile/run?
- Are there any functionality differences?
- Are edge cases handled the same way?
- Are there performance implications?

### 4. Document Changes
- Note any adaptations or non-equivalent features
- Highlight differences in approach between languages
- Suggest improvements beyond direct translation

## Output Format

```markdown
## Translation Report

**From:** [Source language/context]
**To:** [Target language/context]

### Translated Code
```[language]
[Code]
```

### Notes
- [Key differences or adaptations]
- [Package/library equivalents]
- [Caveats or gotchas]
- [Performance implications]

### Improvements Beyond Translation
- [Suggestions for idiomatic improvements]
```

## Tips

- This isn't just syntax translation — adapt to idiomatic patterns
- Consider performance implications of the translation
- Note any functionality that doesn't have a direct equivalent
- Use the target language's standard library when possible
- Preserve the original intent, not just the literal code
