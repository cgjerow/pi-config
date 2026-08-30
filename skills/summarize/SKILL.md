---
name: summarize
description: Summarize a file, directory, or codebase. Use when onboarding to a new project or reviewing unfamiliar code.
---

# Summarize Skill

Summarizes files, directories, or entire codebases for quick understanding.

## Usage

Provide a file path, directory, or codebase. The skill will produce:

1. **Overview** — What this codebase/project does
2. **Structure** — Key directories and their purposes
3. **Entry points** — How to run it, main modules
4. **Dependencies** — Key external packages
5. **Architecture** — High-level design patterns used

## Output Format

```markdown
## Overview
[One-paragraph summary]

## Project Structure
```
key-dir/     — purpose
src/
  main/      — purpose
  utils/     — purpose
```

## Entry Points
- [How to run/build]
- [Main modules]

## Key Dependencies
- [Package]: [Purpose]

## Architecture
- [Patterns used]
- [Design decisions]
```

## Tips

- Adjust depth based on scope (file vs whole repo)
- Focus on what's unusual or project-specific
- Include how to get the project running
