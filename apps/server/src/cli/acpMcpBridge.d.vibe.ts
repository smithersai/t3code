import { Command } from "effect/cli";
/** The credential stays in the environment, never on the command line. */
export declare const acpMcpBridgeCommand: Command.Command<"acp-mcp-bridge", {}, {}, never, never>;
export declare const acpMcpCallCommand: Command.Command<"acp-mcp-call", {
    readonly tool: string;
    readonly argumentsJson: string;
}, {}, never, never>;
