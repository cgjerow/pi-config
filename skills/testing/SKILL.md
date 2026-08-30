---
name: testing
description: Write unit, integration, and end-to-end tests following project conventions. Ensure code quality and prevent regressions.
---

# Testing Skill

Writes tests that are meaningful, maintainable, and follow project conventions.

## Workflow

### 1. Analyze
- What code needs testing? (new code, changed code, untested code)
- What are the key behaviors to verify?
- What's the existing test framework and conventions?

### 2. Plan
- What types of tests are needed?
  - **Unit tests:** Individual functions/methods in isolation
  - **Integration tests:** Multiple components working together
  - **E2E tests:** Full user workflows
- What are the edge cases and error paths?

### 3. Write

**Test Structure (AAA pattern):**
- **Arrange:** Set up test data and preconditions
- **Act:** Execute the code under test
- **Assert:** Verify the outcome

**Test Naming:**
- `describe('Feature')` → `it('should do X when Y')`
- Be specific about the behavior being tested

**Test Quality:**
- One assertion per test (or closely related assertions)
- Test behavior, not implementation
- Use realistic but minimal test data
- Cover happy path, edge cases, and error paths

### 4. Verify
- All tests pass locally
- Test coverage is meaningful (not just high lines covered)
- Tests are fast and deterministic
- No flaky tests

## Output Format

```
## Testing Report

**Code Tested:** [What was tested]
**Tests Added:** [Number and types]
**Coverage:** [What's covered / what's not]
**Status:** [All passing / failures]
```

## Tips

- Write tests alongside code, not after
- Test the contract, not the implementation details
- Mock external dependencies (APIs, databases, filesystem)
- Use fixtures for shared test data
- If a test is hard to write, the code might need refactoring
