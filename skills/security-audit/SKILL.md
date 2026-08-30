---
name: security-audit
description: Focused security review of code, configuration, or infrastructure. Identifies vulnerabilities, insecure patterns, and proposes specific fixes.
---

# Security Audit Skill

Systematic security review of code, configuration, or infrastructure.

## Workflow

### 1. Scope
- What's being audited? (code, config, infrastructure, dependencies)
- What's the threat model? (internal users, external attackers, data exposure)

### 2. Check

**Input Validation:**
- Are all inputs sanitized?
- Is output encoding applied?
- Are type checks enforced?

**Authentication & Authorization:**
- Are credentials stored securely?
- Is authorization checked on every endpoint?
- Are sessions/tokens handled properly?

**Data Handling:**
- Are secrets, passwords, API keys handled securely?
- Is sensitive data encrypted at rest and in transit?
- Are there any data leaks in logs or error messages?

**Dependencies:**
- Are there known CVEs in dependencies?
- Are dependencies up to date?

**Common Vulnerabilities (OWASP Top 10):**
- SQL injection, XSS, CSRF
- Insecure deserialization
- Security misconfiguration
- Insecure direct object references

### 3. Report

For each finding:
- Severity (Critical / High / Medium / Low)
- Location (file, line, function)
- Description of the vulnerability
- Potential impact
- Specific remediation steps

### 4. Verify
- All critical and high findings are addressed
- Fixes don't introduce new vulnerabilities
- Security checks are automated where possible

## Output Format

```markdown
## Security Audit Report

**Scope:** [What was audited]
**Date:** [When]
**Overall Risk:** [Low/Medium/High/Critical]

### Findings
| # | Severity | Location | Issue | Fix |
|---|----------|----------|-------|-----|
| 1 | 🔴 Critical | file.ts:42 | SQL injection | Use parameterized queries |

### Summary
- Critical: N
- High: N
- Medium: N
- Low: N

### Recommendations
1. [Immediate actions]
2. [Short-term improvements]
3. [Long-term practices]
```

## Tips

- Prioritize by exploitability and impact
- Include exploit examples for critical findings
- Suggest specific fixes, not just problems
- Consider both code and configuration
- Recommend automated security checks for CI
