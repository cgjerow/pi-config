---
name: security-audit
description: Focused security review of a codebase section. Identifies vulnerabilities, insecure patterns, and proposes fixes.
---

# Security Audit Skill

Focused security review of code, configuration, or infrastructure.

## Usage

Provide the code, config files, or infrastructure you want audited. The skill will check:

1. **Input validation** — Are all inputs sanitized?
2. **Authentication/authorization** — Are access controls proper?
3. **Data handling** — Are secrets, passwords, tokens handled securely?
4. **Dependencies** — Known vulnerabilities in packages?
5. **Common CWE top 25** — OWASP-related issues
6. **Configuration** — Insecure defaults, over-privileged access

## Output Format

For each finding:

```
🔴 Critical / 🟡 Warning / 🔵 Info
Finding: [description]
Location: [file:line]
Risk: [what an attacker could do]
Fix: [specific remediation]
```

## Summary Table

| Severity | Count | Items |
|----------|-------|-------|
| Critical | N | [list] |
| Warning | N | [list] |
| Info | N | [list] |

## Tips

- Prioritize by exploitability and impact
- Include exploit examples for critical findings
- Suggest fixes, not just problems
