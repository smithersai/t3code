import { Command } from "effect/cli";
export declare const servicePreflightCommand: Command.Command<"__service-preflight", {
    readonly databasePath: string;
    readonly launcherProtocol: number;
}, {}, never, never>;
