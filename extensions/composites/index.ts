/**
 * Composite Tools - High-level tools that orchestrate subagent chains
 *
 * These tools wrap the built-in subagent extension to provide
 * ready-made workflows for common tasks.
 *
 * Each composite tool internally invokes the `subagent` tool with
 * the appropriate agent chain, so the LLM sees them as first-class
 * tools rather than prompt templates.
 *
 * Tools:
 *   - debug: scout → planner → worker
 *   - refactor: scout → planner → worker
 *   - test-gen: scout → planner → worker
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

const SubagentParams = Type.Object({
	agent: Type.Optional(Type.String({ description: "Name of the agent to invoke (for single mode)" })),
	task: Type.Optional(Type.String({ description: "Task to delegate (for single mode)" })),
	tasks: Type.Optional(
		Type.Array(
			Type.Object({
				agent: Type.String(),
				task: Type.String(),
			}),
		),
	),
	chain: Type.Optional(
		Type.Array(
			Type.Object({
				agent: Type.String(),
				task: Type.String(),
			}),
		),
	),
	agentScope: Type.Optional(Type.String({ description: 'Agent scope: "user", "project", or "both". Default: "user".' })),
	confirmProjectAgents: Type.Optional(Type.Boolean()),
	cwd: Type.Optional(Type.String()),
});

const DebugParams = Type.Object({
	query: Type.String({ description: "Description of the bug or issue to debug" }),
});

const RefactorParams = Type.Object({
	query: Type.String({ description: "Description of the refactoring task" }),
});

const TestGenParams = Type.Object({
	query: Type.String({ description: "Description of the code to generate tests for" }),
});

function getSubagentTool(ctx: { cwd: string }): { name: string; parameters: unknown } {
	return {
		name: "subagent",
		parameters: SubagentParams,
	};
}

/**
 * Build a chain with {previous} placeholders for output handoff.
 */
function buildChain(agents: string[], task: string): Array<{ agent: string; task: string }> {
	return agents.map((agent, index) => ({
		agent,
		task: index === 0 ? task : `{previous}`,
	}));
}

export default function (pi: ExtensionAPI) {
	// --- Debug Tool ---
	pi.registerTool({
		name: "debug",
		label: "Debug",
		description: [
			"Debug a bug or issue using a structured subagent workflow.",
			"Chains: scout (find bug pattern) → planner (design fix strategy) → worker (implement fix).",
			"Each step receives the previous step's output. Runs in isolated context.",
		].join(" "),
		parameters: DebugParams,

		async execute(_toolCallId, params, signal, _onUpdate, ctx) {
			const chain = buildChain(["scout", "planner", "worker"], params.query);

			const result = await ctx.exec(getSubagentTool(ctx), {
				chain,
				agentScope: "user",
			}, signal);

			return result;
		},

		renderCall(args, theme, _context) {
			const preview = args.query.length > 60 ? `${args.query.slice(0, 60)}...` : args.query;
			return theme.fg("toolTitle", theme.bold("debug ")) + theme.fg("accent", preview);
		},
	});

	// --- Refactor Tool ---
	pi.registerTool({
		name: "refactor",
		label: "Refactor",
		description: [
			"Refactor code using a structured subagent workflow.",
			"Chains: scout (map dependencies) → planner (design refactor) → worker (execute with safety checks).",
			"Each step receives the previous step's output. Runs in isolated context.",
		].join(" "),
		parameters: RefactorParams,

		async execute(_toolCallId, params, signal, _onUpdate, ctx) {
			const chain = buildChain(["scout", "planner", "worker"], params.query);

			const result = await ctx.exec(getSubagentTool(ctx), {
				chain,
				agentScope: "user",
			}, signal);

			return result;
		},

		renderCall(args, theme, _context) {
			const preview = args.query.length > 60 ? `${args.query.slice(0, 60)}...` : args.query;
			return theme.fg("toolTitle", theme.bold("refactor ")) + theme.fg("accent", preview);
		},
	});

	// --- Test Gen Tool ---
	pi.registerTool({
		name: "test-gen",
		label: "Test Gen",
		description: [
			"Generate tests using a structured subagent workflow.",
			"Chains: scout (find existing tests and code patterns) → planner (design test strategy) → worker (write tests).",
			"Each step receives the previous step's output. Runs in isolated context.",
		].join(" "),
		parameters: TestGenParams,

		async execute(_toolCallId, params, signal, _onUpdate, ctx) {
			const chain = buildChain(["scout", "planner", "worker"], params.query);

			const result = await ctx.exec(getSubagentTool(ctx), {
				chain,
				agentScope: "user",
			}, signal);

			return result;
		},

		renderCall(args, theme, _context) {
			const preview = args.query.length > 60 ? `${args.query.slice(0, 60)}...` : args.query;
			return theme.fg("toolTitle", theme.bold("test-gen ")) + theme.fg("accent", preview);
		},
	});
}
