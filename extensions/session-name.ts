/**
 * Session Name Extension
 *
 * Automatically names sessions based on the current project.
 * Makes it easier to find sessions later.
 *
 * Auto-discovered in ~/.pi/agent/extensions/
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.on("session_start", async (_event, ctx) => {
		// Get the current working directory name
		const { stdout: cwd } = await pi.exec("pwd", []);
		const dirName = cwd.trim().split("/").pop() || "unknown";

		// Only rename if it's a git repo with a meaningful name
		const { stdout: gitDir, code } = await pi.exec("git", ["rev-parse", "--show-cdup"]);

		if (code === 0 && gitDir.trim() !== "") {
			// We're in a subdirectory of a git repo
			const { stdout: root } = await pi.exec("git", ["rev-parse", "--show-toplevel"]);
			const repoName = root.trim().split("/").pop() || dirName;

			// Set a more descriptive session name
			const sessionName = `${repoName}: ${dirName}`;
			ctx.sessionManager.setSessionName(sessionName);
		}
	});
}
