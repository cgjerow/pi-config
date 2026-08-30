---
name: evaluate
description: Critically evaluate a plan, idea, or proposal. Identifies risks, gaps, assumptions, and alternative approaches. Use before committing to a direction.
---

# Evaluate Skill

Critically evaluates plans, ideas, proposals, or designs. Acts as a devil's advocate to surface risks and blind spots.

## Workflow

### 1. Understand
- What is the plan or idea?
- What are the goals and constraints?
- What decisions need to be made?

### 2. Identify Assumptions
- What is being taken for granted?
- Which assumptions are critical to the plan's success?
- How can each assumption be verified?

### 3. Surface Risks
- What could go wrong?
- What are the failure modes?
- What are the worst-case scenarios?
- How likely is each risk?

### 4. Find Gaps
- What's missing or underspecified?
- What edge cases aren't considered?
- What dependencies or prerequisites are overlooked?

### 5. Challenge Alternatives
- Are there better approaches?
- What are the trade-offs of each option?
- Is there a simpler alternative?

### 6. Assess Feasibility
- How much effort is this?
- What's the complexity?
- What's the time to value?
- Does the effort match the impact?

## Output Format

```markdown
## Evaluation Report

**Plan:** [Brief description]
**Date:** [When evaluated]

### Assumptions
| Assumption | Risk if Wrong | How to Verify |
|------------|--------------|---------------|
| [A1] | [Impact] | [Method] |

### Risks
| # | Severity | Risk | Mitigation |
|---|----------|------|-----------|
| 1 | 🔴 High | [Risk] | [Mitigation] |

### Gaps
- [What's missing or underspecified]
- [What needs more detail]

### Alternatives
| Approach | Pros | Cons | When to prefer |
|----------|------|------|----------------|
| [Current] | ... | ... | ... |
| [Alternative 1] | ... | ... | ... |

### Feasibility
- **Effort:** [Low/Medium/High]
- **Complexity:** [Low/Medium/High]
- **Time to value:** [Short/Medium/Long]

### Recommendation
**[Go / No-go / Go with modifications]**

### Why
[Summary reasoning — what tips the balance]
```

## Tips

- Be constructive, not dismissive — the goal is to improve the plan
- Distinguish between showstoppers and minor concerns
- If the plan is solid, say so and explain why
- Consider the context: what's good enough for a prototype vs. production?
- Focus on the biggest risks first
