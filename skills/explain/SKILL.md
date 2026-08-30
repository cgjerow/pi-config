---
name: explain
description: Explain a code block, function, or error in plain language. Breaks down what code does, how it works, and key concepts.
---

# Explain Skill

Explains code, functions, classes, or error messages in clear, accessible language.

## Workflow

### 1. Analyze
- Read the code or error message carefully
- Identify the purpose and logic
- Note any non-obvious patterns or techniques

### 2. Explain

**What It Does:**
- Plain-language summary of the purpose
- What inputs it takes and what it produces

**How It Works:**
- Step-by-step breakdown of the logic
- Control flow and data flow
- Key algorithms or patterns used

**Key Concepts:**
- Important APIs, libraries, or language features
- Design patterns employed
- Trade-offs in the implementation

**Edge Cases:**
- Unusual behaviors or special cases
- Potential pitfalls

### 3. Contextualize
- Where would this typically be used?
- How does it fit into the larger system?
- What are common mistakes with this pattern?

## Output Format

```markdown
## What It Does
[Plain language summary]

## How It Works
1. [Step 1]
2. [Step 2]
3. [Step 3]
...

## Key Concepts
- [Concept 1]: [Brief explanation]
- [Concept 2]: [Brief explanation]

## Edge Cases
- [Edge case 1]: [What happens]
- [Edge case 2]: [What happens]

## Common Mistakes
- [Mistake 1]: [How to avoid]
```

## Tips

- Adjust depth based on the user's apparent expertise level
- Use analogies for complex concepts
- If explaining an error, include how to fix it
- Point out good practices or anti-patterns
- Keep it concise — explain the important stuff
