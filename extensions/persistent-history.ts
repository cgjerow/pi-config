/**
 * Persistent History Extension
 *
 * Saves command history to disk so it survives across sessions and crashes,
 * similar to terminal up-arrow history.
 *
 * Features:
 * - Saves each submitted command to ~/.pi/history.txt
 * - On session start, restores pending text from last command if editor is empty
 * - Enables cross-session history persistence
 *
 * Usage: pi --extension persistent-history
 */

import { CustomEditor, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { matchesKey, type TUI, type Theme, type Keybindings } from "@earendil-works/pi-tui";
import { appendFileSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const HISTORY_DIR = join(homedir(), ".pi");
const HISTORY_FILE = join(HISTORY_DIR, "history.txt");
const MAX_HISTORY_LINES = 1000;

/** Load history entries from disk (oldest first) */
function loadHistory(): string[] {
	if (!existsSync(HISTORY_FILE)) return [];
	try {
		const content = readFileSync(HISTORY_FILE, "utf-8");
		return content.split("\n").filter(line => line.length > 0);
	} catch {
		return [];
	}
}

/** Save a single entry to the history file, then trim if needed */
function saveHistoryEntry(text: string): void {
	if (!text.trim()) return;

	try {
		// Ensure directory exists
		mkdirSync(HISTORY_DIR, { recursive: true });

		// Append the entry
		appendFileSync(HISTORY_FILE, text + "\n");

		// Trim history file to MAX_HISTORY_LINES
		const lines = loadHistory();
		if (lines.length > MAX_HISTORY_LINES) {
			const trimmed = lines.slice(lines.length - MAX_HISTORY_LINES);
			writeFileSync(HISTORY_FILE, trimmed.join("\n") + "\n");
		}
	} catch (err) {
		// Silently fail - history persistence is best-effort
		console.error("[persistent-history] Failed to save history entry:", err);
	}
}

/** Get the last history entry (most recent command) */
function getLastEntry(): string | null {
	const lines = loadHistory();
	return lines.length > 0 ? lines[lines.length - 1] : null;
}

class PersistentHistoryEditor extends CustomEditor {
	constructor(tui: TUI, theme: Theme, kb: Keybindings) {
		super(tui, theme, kb);
	}

	handleInput(data: string): void {
		// Detect Enter key and save to history BEFORE calling super,
		// so the text is captured even if super processes it immediately
		if (matchesKey(data, "enter")) {
			const text = this.getText();
			if (text.trim()) {
				saveHistoryEntry(text);
			}
		}
		super.handleInput(data);
	}
}

export default function (pi: ExtensionAPI) {
	pi.on("session_start", (_event, ctx) => {
		// Replace the default editor with our history-aware version
		ctx.ui.setEditorComponent((tui, theme, kb) =>
			new PersistentHistoryEditor(tui, theme, kb)
		);

		// Restore pending text from last history entry if editor is empty
		// This gives immediate access to the last command without needing up-arrow
		const lastEntry = getLastEntry();
		if (lastEntry && ctx.ui.getEditorText().trim().length === 0) {
			ctx.ui.setEditorText(lastEntry);
		}
	});
}
