---
name: todo-extraction
description: Extract TODOs, follow-up items, and action items from a diff, code review, or conversation. Use after reviewing changes.
---

# TODO Extraction Skill

Extracts and organizes TODOs, follow-up items, and action items from diffs, code reviews, or conversations.

## Usage

Provide a diff, code review output, or conversation context. The skill will:

1. Identify all TODOs and follow-up items
2. Categorize them by priority and type
3. Suggest owners or next steps

## Output Format

```markdown
## Action Items

### Must Do
- [ ] [Item] — [Owner/Context] — [Deadline if any]

### Should Do
- [ ] [Item] — [Context]

### Nice to Have
- [ ] [Item] — [Context]

## Notes
[Any observations or recommendations]
```

## Workflow

1. Scan the provided context for explicit TODOs, FIXMEs, HACKs
2. Identify implicit follow-ups (e.g., "this needs tests", "edge case not handled")
3. Categorize by urgency and effort
4. Suggest next steps

## Tips

- Be thorough — catch both explicit and implicit items
- Prioritize by impact, not just visibility
- Group related items together
