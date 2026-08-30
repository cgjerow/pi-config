---
name: accessibility-audit
description: Check for WCAG compliance issues. Reviews code and UI for accessibility barriers and proposes fixes.
---

# Accessibility Audit Skill

Reviews code and UI for accessibility (a11y) issues and proposes fixes to improve WCAG compliance.

## Workflow

### 1. Scope
- What's being audited? (web page, component, entire app)
- What WCAG level? (A, AA, AAA)
- What user agents to consider? (screen readers, keyboard-only, etc.)

### 2. Check

**Perceivable:**
- [ ] All images have alt text
- [ ] Color contrast meets minimum ratios (4.5:1 for text, 3:1 for UI)
- [ ] Content can be presented in different ways without losing meaning
- [ ] Videos have captions/transcripts
- [ ] No content relies solely on color

**Operable:**
- [ ] All functionality is keyboard accessible
- [ ] No keyboard traps
- [ ] Sufficient time to read and interact
- [ ] Content doesn't auto-play for more than 5 seconds
- [ ] Navigation is consistent and predictable

**Understandable:**
- [ ] Language is declared correctly
- [ ] Pages have descriptive titles
- [ ] Forms have labels and instructions
- [ ] Error messages are clear and helpful
- [ ] Consistent navigation and identification

**Robust:**
- [ ] Valid HTML markup
- [ ] ARIA attributes used correctly
- [ ] Compatible with assistive technologies
- [ ] Custom components have proper roles and states

### 3. Report

For each issue:
- Severity (Critical / Major / Minor)
- WCAG criterion violated
- Location (file, component, element)
- Description of the issue
- How to reproduce
- Specific fix

### 4. Verify
- All critical and major issues are fixed
- Keyboard navigation works
- Screen reader testing (if possible)
- Automated tooling passes

## Output Format

```markdown
## Accessibility Audit Report

**Scope:** [What was audited]
**WCAG Level:** [A/AA/AAA]
**Tools Used:** [axe, Lighthouse, etc.]

### Findings
| # | Severity | WCAG | Location | Issue | Fix |
|---|----------|------|----------|-------|-----|
| 1 | 🔴 Critical | 1.4.3 | button.ts | Color contrast 2.1:1 | Increase to 4.5:1 |

### Summary
- Critical: N
- Major: N
- Minor: N

### WCAG Criteria Checklist
| Criterion | Status |
|-----------|--------|
| 1.1.1 Non-text Content | ❌ |
| 1.4.3 Contrast (Minimum) | ❌ |
| 2.1.1 Keyboard | ✅ |

### Priority Fixes
1. [Most impactful fix]
2. [Second fix]
3. [Third fix]

### Automated Tool Results
[Results from axe, Lighthouse, etc.]
```

## Tips

- Use automated tools (axe, Lighthouse) as a starting point, not the end
- Test with a keyboard only — can you navigate everything?
- Test with a screen reader if possible
- Consider cognitive accessibility: is the language clear?
- Involve users with disabilities in testing
- Accessibility is not just technical — it's about real user experience
- Fix critical issues first (screen readers, keyboard traps)
