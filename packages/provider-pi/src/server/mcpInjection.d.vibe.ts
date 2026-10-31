import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import type { McpProviderSessionConfig } from "@t3tools/provider-core/server/mcpSession";
export type PiLaunchArgsResolution = {
    readonly ok: true;
    readonly args: ReadonlyArray<string>;
} | {
    readonly ok: false;
    readonly message: string;
};
export declare function resolvePiLaunchArgs(launchArgs: string): PiLaunchArgsResolution;
export declare const materializePiT3McpExtension: (cacheDir: string) => Effect.Effect<string, import("effect/PlatformError").PlatformError, FileSystem.FileSystem>;
export declare function buildPiRpcLaunch(input: {
    readonly launchArgs: ReadonlyArray<string>;
    readonly environment: NodeJS.ProcessEnv;
    readonly mcpSession: McpProviderSessionConfig | undefined;
    readonly extensionPath: string | undefined;
    readonly sessionPath?: string | undefined;
    readonly ephemeral?: boolean;
    readonly disableExtensions?: boolean;
    readonly disableTools?: boolean;
    readonly runtimeMode?: "approval-required" | "auto-accept-edits" | "auto" | "full-access";
}): {
    readonly args: ReadonlyArray<string>;
    readonly env: NodeJS.ProcessEnv;
    readonly hasT3Mcp: boolean;
};
