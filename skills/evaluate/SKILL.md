---
name: evaluate
description: Critically evaluate a plan, idea, or proposal. Identifies risks, gaps, assumptions, and alternative approaches. Use before committing to a direction.
---

# Evaluate Skill

Critically evaluates plans, ideas, proposals, or designs. Acts as a devil's advocate to surface risks and blind spots.

## Usage

Provide the plan, idea, design, or proposal you want evaluated. The skill will:

1. **Identify assumptions** — What's being taken for granted
2. **Surface risks** — What could go wrong
3. **Find gaps** — What's missing or underspecified
4. **Challenge alternatives** — Are there better approaches?
5. **Assess feasibility** — Effort vs. impact analysis

## Output Format

```markdown
## Assumptions
| Assumption | Risk if Wrong | Mitigation |
|------------|--------------|------------|
| [A1] | [Impact] | [How to verify] |

## Risks
- 🔴 **High:** [Risk] — [Mitigation]
- 🟡 **Medium:** [Risk] — [Mitigation]
- 🔵 **Low:** [Risk] — [Mitigation]

## Gaps
- [What's missing or underspecified]

## Alternatives
| Approach | Pros | Cons | When to prefer |
|----------|------|------|----------------|
| [Current] | ... | ... | ... |
| [Alternative 1] | ... | ... | ... |

## Feasibility
- **Effort:** [Low/Medium/High]
- **Complexity:** [Low/Medium/High]
- **Time to value:** [Short/Medium/Long]

## Recommendation
[Go / No-go / Go with modifications]

## Why
[Summary reasoning]
```

## Tips

- Be constructive, not dismissive — the goal is to improve the plan, not kill it
- Distinguish between showstoppers and minor concerns
- If the plan is solid, say so and explain why
- Consider the context: what's good enough for a prototype vs. production?
