/**
 * Permission Gate Extension
 *
 * Blocks dangerous commands (rm -rf, sudo, etc.) and requires
 * user confirmation before executing them.
 *
 * Auto-discovered in ~/.pi/agent/extensions/
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

// Dangerous patterns that require confirmation
const DANGEROUS_PATTERNS = [
	{ pattern: /rm\s+-rf\s+/, action: "rm -rf", severity: "high" },
	{ pattern: /rm\s+--rf\s+/, action: "rm --rf", severity: "high" },
	{ pattern: /sudo\s+rm/, action: "sudo rm", severity: "high" },
	{ pattern: /dd\s+if=/, action: "dd", severity: "critical" },
	{ pattern: /mkfs/, action: "mkfs", severity: "critical" },
	{ pattern: /:\(\)\{\s*:\|\:&\s*\}/, action: "fork bomb", severity: "critical" },
	{ pattern: /\btruncate\s+--size\s+0\s+\/etc\//, action: "truncate /etc/", severity: "critical" },
];

export default function (pi: ExtensionAPI) {
	pi.on("tool_call", async (event, ctx) => {
		if (event.toolName !== "bash") return;

		const command = event.input?.command || "";
		for (const { pattern, action, severity } of DANGEROUS_PATTERNS) {
			if (pattern.test(command)) {
				const ok = await ctx.ui.confirm(
					`⚠️ Dangerous command detected: ${action}`,
					`This will execute: ${command}\n\nSeverity: ${severity}\n\nAllow?`,
				);
				if (!ok) {
					return { block: true, reason: `Blocked by permission gate: ${action}` };
				}
				break;
			}
		}
	});
}
