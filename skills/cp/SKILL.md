---
name: cp
description: Copy the most relevant recent result to the system clipboard. Use when the user says only "cp" or otherwise asks to copy something useful.
---

# CP Skill

Use this skill when the user wants the most relevant current result copied to the clipboard.

## Trigger

Prefer this workflow when the user's message is exactly `cp`.

## Workflow

1. Identify the best thing to copy from the current task context.

   Prioritize, in order:
   - the final artifact or answer from the immediately preceding assistant turn
   - the most reusable code block, command, path, URL, or snippet from the recent exchange
   - a concise synthesized value only if the useful thing was implied but not written explicitly

2. If multiple candidates are plausible, ask a short clarifying question instead of guessing.

3. Copy the chosen text exactly as-is, preserving whitespace and formatting.

4. Use the helper script in this skill directory to place the content on the system clipboard.

   Recommended pattern:

   ```bash
   tmp_file="$(mktemp)"
   cat > "$tmp_file" <<'EOF'
   <text to copy exactly>
   EOF
   ./copy-to-clipboard.sh "$tmp_file"
   rm -f "$tmp_file"
   ```

5. Reply tersely with a confirmation, such as:
   - `Copied to clipboard.`
   - `Copied command to clipboard.`
   - `Copied latest code snippet to clipboard.`

## Guardrails

- Do not add commentary to the copied text.
- Do not reformat code, commands, JSON, or URLs before copying.
- Do not copy secrets unless the user explicitly asked for that exact secret to be copied.
- If the user asks to copy a specific thing, use that instead of inferring.
- If there is no clear candidate in the recent context, ask what should be copied.
