/**
 * Persistent History Extension
 *
 * Saves command history to disk so it survives across sessions and crashes,
 * similar to terminal up-arrow history.
 *
 * Features:
 * - Saves each submitted command to ~/.pi/history.txt
 * - On session start, loads full history into the editor for up/down arrow navigation
 * - Up-arrow navigates history when the editor is empty; preserves standard multiline
 *   editing (cursor moves to previous line) when the editor contains text
 * - Enables cross-session history persistence and iteration
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

/** In-memory history cache - loaded once per session from disk */
let historyCache: string[] | null = null;

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

/** Ensure history is loaded into the in-memory cache */
function ensureHistoryLoaded(): string[] {
	if (historyCache === null) {
		historyCache = loadHistory();
	}
	return historyCache;
}

/** Save a single entry to the history file, then trim if needed */
function saveHistoryEntry(text: string): void {
	if (!text.trim()) return;

	try {
		// Ensure directory exists
		mkdirSync(HISTORY_DIR, { recursive: true });

		// Append the entry
		appendFileSync(HISTORY_FILE, text + "\n");

		// Update in-memory cache
		ensureHistoryLoaded();
		if (historyCache) {
			historyCache.push(text);
		}

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
	const lines = ensureHistoryLoaded();
	return lines.length > 0 ? lines[lines.length - 1] : null;
}

/** Get all history entries (oldest first) */
function getAllHistoryEntries(): string[] {
	return ensureHistoryLoaded();
}

class PersistentHistoryEditor extends CustomEditor {
	private historyLoaded = false;

	constructor(tui: TUI, theme: Theme, kb: Keybindings) {
		super(tui, theme, kb);
		// Load history into the editor's internal history stack immediately,
		// so up/down arrow navigation works from the start.
		this.loadHistoryToEditor();
	}

	/** Populate the editor's internal history stack from disk */
	private loadHistoryToEditor(): void {
		if (this.historyLoaded) return;
		this.historyLoaded = true;

		const entries = getAllHistoryEntries();
		for (const entry of entries) {
			this.addToHistory(entry);
		}
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
	});

	// Reset history cache on shutdown so the next session gets fresh data
	pi.on("session_shutdown", (_event, _ctx) => {
		historyCache = null;
	});
}
