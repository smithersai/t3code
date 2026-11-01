import { Command } from "effect/cli";
/** Single-executable builds lack Node, so they use this subcommand instead of claudeHistoryWorker.mjs. */
export declare const claudeHistoryCommand: Command.Command<"__claude-history", {
    readonly method: string;
    readonly sessionId: string;
    readonly options: import("effect/Option").Option<string>;
}, {}, never, never>;
