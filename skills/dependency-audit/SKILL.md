---
name: dependency-audit
description: Check for outdated or vulnerable packages. Proposes safe updates with risk assessment and migration notes.
---

# Dependency Audit Skill

Audits project dependencies for outdated packages, known vulnerabilities, and proposes safe updates.

## Workflow

### 1. Inventory
- List all dependencies and devDependencies
- Note current versions
- Identify direct vs. transitive dependencies

### 2. Check
- Are there known CVEs? (check security advisories)
- Are there major version updates available?
- Are there popular alternatives to deprecated packages?
- Are there abandoned/unmaintained packages?

### 3. Assess Risk

For each update candidate:
- **Breaking changes:** What APIs changed?
- **Migration effort:** How much work to update?
- **Security impact:** Does this fix vulnerabilities?
- **Community health:** Is the package actively maintained?

### 4. Plan Updates

Group updates by risk:
- **Safe:** Patch/minor updates, no breaking changes
- **Medium:** Minor updates with some changes, requires review
- **Risky:** Major version updates, requires testing and migration

### 5. Execute

- Update safe dependencies first
- Run tests after each update
- Update lock files
- Document breaking changes in commit messages

## Output Format

```markdown
## Dependency Audit Report

**Total Dependencies:** N
**Vulnerable:** N
**Outdated (Major):** N
**Outdated (Minor/Patch):** N

### Critical Updates Needed
| Package | Current | Latest | CVEs | Risk |
|---------|---------|--------|------|------|
| ... | ... | ... | ... | ... |

### Recommended Updates
| Package | Current → New | Type | Breaking? | Notes |
|---------|--------------|------|-----------|-------|

### Deprecated Packages
- [Package]: [What to use instead]

### Update Plan
1. [Safe updates — do now]
2. [Medium updates — review first]
3. [Risky updates — plan migration]
```

## Tips

- Always test after updating dependencies
- Use tools like `npm audit`, `yarn audit`, `cargo audit` for CVE checking
- Consider using Dependabot or Renovate for automated updates
- Pin major versions to avoid surprise breaking changes
- Document why certain outdated packages are kept (e.g., no good alternative)
