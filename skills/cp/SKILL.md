---
name: cp
description: Copy the most relevant thing from the current task to the system clipboard. Use when the user says only "cp" or otherwise asks to copy the actual deliverable rather than a status message.
---

# CP Skill

Use this skill when the user wants the most relevant thing from the current task copied to the clipboard.

The target is the actual deliverable, not the most recent text and not a meta response like "done", "created", or "updated".

## Trigger

Prefer this workflow when the user's message is exactly `cp`.

## Workflow

1. Identify the best thing to copy from the current task context.

   Prioritize the underlying deliverable, in order:
   - the substantive artifact the user asked for, even if it was created earlier in the exchange
   - the contents of a file, document, prompt, code block, command, query, or other asset produced for the task
   - a path or URL only when the path or URL itself is the deliverable
   - a concise synthesized value only if the useful thing was implied but not written explicitly

   Strong preference rules:
   - Prefer the created document over a later status message saying it was created
   - Prefer the generated code over a later note saying it was implemented
   - Prefer the actual command, query, or snippet over commentary about it
   - Prefer substance over recency

2. If the deliverable lives in a file, read that file and copy its contents rather than copying the filename, unless the user clearly wanted the path.

3. If multiple candidates are plausible, ask a short clarifying question instead of guessing.

4. Copy the chosen text exactly as-is, preserving whitespace and formatting.

5. Use the helper script in this skill directory to place the content on the system clipboard.

   Recommended pattern:

   ```bash
   tmp_file="$(mktemp)"
   cat > "$tmp_file" <<'EOF'
   <text to copy exactly>
   EOF
   ./copy-to-clipboard.sh "$tmp_file"
   rm -f "$tmp_file"
   ```

6. Reply tersely with a confirmation, such as:
   - `Copied to clipboard.`
   - `Copied command to clipboard.`
   - `Copied latest code snippet to clipboard.`

## Guardrails

- Do not add commentary to the copied text.
- Do not reformat code, commands, JSON, markdown, or URLs before copying.
- Do not copy a confirmation message when a richer deliverable exists.
- Do not copy secrets unless the user explicitly asked for that exact secret to be copied.
- If the user asks to copy a specific thing, use that instead of inferring.
- If there is no clear candidate in the task context, ask what should be copied.
