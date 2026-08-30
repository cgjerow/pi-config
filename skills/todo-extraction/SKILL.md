---
name: todo-extraction
description: Extract TODOs, follow-up items, and action items from a diff, code review, or conversation. Organize by priority and type.
---

# TODO Extraction Skill

Extracts and organizes TODOs, follow-up items, and action items from diffs, code reviews, or conversations.

## Workflow

### 1. Scan
- Look for explicit TODOs, FIXMEs, HACKs, XXXs in comments
- Look for implicit follow-ups: "this needs tests", "edge case not handled"
- Look for incomplete implementations or stubs

### 2. Categorize
- **Must do:** Blocking issues, bugs, security concerns
- **Should do:** Important improvements, missing tests
- **Nice to have:** Polish, optimization, documentation

### 3. Organize
- Group related items together
- Identify dependencies between items
- Suggest owners or next steps where applicable

### 4. Prioritize
- Rank by impact and urgency
- Consider effort vs. value
- Flag items that block other work

## Output Format

```markdown
## Action Items

### 🔴 Must Do
| # | Item | Context | Blocks |
|---|------|---------|--------|
| 1 | [Item] | [Where found] | [What it blocks] |

### 🟡 Should Do
| # | Item | Context | Effort |
|---|------|---------|--------|
| 1 | [Item] | [Where found] | [Low/Med/High] |

### 🔵 Nice to Have
| # | Item | Context |
|---|------|---------|
| 1 | [Item] | [Where found] |

## Summary
- **Must Do:** N items
- **Should Do:** N items
- **Nice to Have:** N items

## Notes
[Any observations or recommendations]
```

## Tips

- Be thorough — catch both explicit and implicit items
- Prioritize by impact, not just visibility
- Group related items together
- Suggest which items can be done in parallel
- Reference specific file/line locations
