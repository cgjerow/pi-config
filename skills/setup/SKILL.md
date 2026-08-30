---
name: setup
description: Scaffold a new project with best practices for the stack. Sets up project structure, tooling, configuration, and initial tests.
---

# Setup Skill

Scaffolds new projects with sensible defaults, best practices, and proper tooling.

## Workflow

### 1. Gather Requirements
- What language/framework?
- What's the project type? (web app, CLI, library, API, etc.)
- Any specific requirements? (database, auth, testing framework)
- Team size and experience level?

### 2. Choose Stack
- Framework and version
- Package manager (npm, pnpm, yarn, cargo, etc.)
- Database (if applicable)
- Testing framework
- Linting and formatting tools

### 3. Scaffold

**Project Structure:**
```
project/
├── src/           # Source code
├── tests/         # Test files
├── public/        # Static assets (if web)
├── docs/          # Documentation
├── .github/       # CI/CD config
├── .gitignore
├── README.md
├── package.json / Cargo.toml / etc.
└── ...
```

**Essential Setup:**
- Initialize package manager and install dependencies
- Configure linting (ESLint, biome, etc.)
- Configure formatting (Prettier, black, etc.)
- Configure testing framework
- Set up TypeScript/types if applicable
- Create basic CI/CD pipeline
- Add pre-commit hooks

**Initial Code:**
- Basic entry point
- Health check / "Hello World"
- Basic test structure
- Configuration files

### 4. Verify
- Project builds successfully
- Tests run
- Linting passes
- Documentation is generated
- README is complete with setup instructions

## Output Format

```markdown
## Project Setup Report

**Project:** [Name and type]
**Stack:** [Framework + key tools]
**Structure:** [Key directories]
**Scripts:** [npm run commands available]
**Next Steps:** [What to do after setup]
```

## Tips

- Start minimal — add complexity as needed
- Choose batteries-included frameworks for quick starts
- Configure tooling that catches errors early
- Include a CONTRIBUTING.md for team projects
- Set up CI from day one, not later
- Document the project structure in the README
