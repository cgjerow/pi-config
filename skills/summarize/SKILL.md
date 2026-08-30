---
name: summarize
description: Summarize a file, directory, or codebase. Produces an overview of structure, purpose, entry points, and architecture for quick understanding.
---

# Summarize Skill

Summarizes files, directories, or entire codebases for quick understanding.

## Workflow

### 1. Explore
- Scan the file or directory structure
- Identify key files and their purposes
- Note configuration files, build scripts, entry points

### 2. Analyze

**For a Single File:**
- What does this file do?
- What are the key exports/classes/functions?
- What does it depend on?

**For a Directory:**
- What's the purpose of each subdirectory?
- What are the main modules?
- How do the pieces fit together?

**For a Codebase:**
- What does this project do?
- What's the tech stack?
- How do you run it?
- What are the key architectural decisions?

### 3. Structure the Summary

Include:
- **Overview:** One-paragraph description
- **Structure:** Key directories and their purposes
- **Entry Points:** How to run/build
- **Dependencies:** Key external packages
- **Architecture:** High-level design patterns

### 4. Verify
- Does the summary match the actual code?
- Are there any outdated descriptions?
- Is anything important missing?

## Output Format

```markdown
## Summary: [File/Directory/Project Name]

### Overview
[One-paragraph summary]

### Structure
```
key-dir/       — purpose
src/
  main/        — purpose
  utils/       — purpose
tests/
  ...
```

### Entry Points
- **Run:** [Command]
- **Build:** [Command]
- **Test:** [Command]
- **Main module:** [Path]

### Key Dependencies
- [Package]: [Purpose]
- [Package]: [Purpose]

### Architecture
- [Pattern 1]: [Brief description]
- [Pattern 2]: [Brief description]

### Notable Files
- [file]: [Why it matters]
- [file]: [Why it matters]
```

## Tips

- Adjust depth based on scope (file vs whole repo)
- Focus on what's unusual or project-specific
- Include how to get the project running
- Highlight key design decisions
- Note any conventions or patterns used consistently
