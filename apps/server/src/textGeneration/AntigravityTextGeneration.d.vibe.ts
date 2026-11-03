import { type ProviderSetupError } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Scope from "effect/Scope";
import { type AcpError } from "effect-acp/errors";
import type * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
type AntigravityTextRuntime = Pick<AcpSessionRuntime.AcpSessionRuntime["Service"], "start" | "setMode" | "getConfigOptions" | "getEvents" | "setModel" | "prompt" | "cancel" | "handleSessionUpdate" | "handleRequestPermission" | "handleElicitation" | "handleReadTextFile" | "handleWriteTextFile" | "handleCreateTerminal" | "handleTerminalOutput" | "handleTerminalWaitForExit" | "handleTerminalKill" | "handleTerminalRelease" | "handleUnknownExtRequest">;
export interface AntigravityTextGenerationOptions {
    readonly profileDirectory: string;
    readonly defaultModel?: Effect.Effect<string | undefined>;
    readonly makeRuntime: (cwd: string) => Effect.Effect<AntigravityTextRuntime, AcpError | ProviderSetupError, Scope.Scope>;
    readonly withProcess: <A, E, R>(stop: Effect.Effect<void>, task: Effect.Effect<A, E, R>) => Effect.Effect<A, E | ProviderSetupError, R | Scope.Scope>;
}
/** Global hooks and MCP servers can run before a helper can deny a tool request. */
export declare const isAntigravityTextGenerationAvailable: (profileDirectory: string) => Effect.Effect<boolean, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;
export declare const makeAntigravityTextGeneration: (options: AntigravityTextGenerationOptions) => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, FileSystem.FileSystem | Path.Path>;
export {};
