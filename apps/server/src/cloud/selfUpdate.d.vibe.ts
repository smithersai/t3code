import { ServerSelfUpdateError, type ServerSelfUpdateCapability, type ServerSelfUpdateInput, type ServerSelfUpdateProgressStage, type ServerSelfUpdateResult, type ThreadId } from "@t3tools/contracts";
import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Stream from "effect/Stream";
import { HttpClient } from "effect/http";
import * as ServerConfig from "../config.ts";
import * as DesktopAppUpdate from "../desktopUpdate/DesktopAppUpdate.vibe";
import * as ProcessRunner from "../processRunner.ts";
import * as ServiceLauncherClient from "./serviceLauncherClient.ts";
export declare function resolveServerSelfUpdateCapability(input: {
    readonly desktopManaged: boolean;
    readonly launcherManaged: boolean;
}): ServerSelfUpdateCapability | null;
declare const ServerSelfUpdate_base: Context.ServiceClass<ServerSelfUpdate, "t3/cloud/selfUpdate/ServerSelfUpdate", {
    readonly update: (input: ServerSelfUpdateInput, reportProgress?: (stage: ServerSelfUpdateProgressStage) => Effect.Effect<void, ServerSelfUpdateError>, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<ServerSelfUpdateResult, ServerSelfUpdateError>;
    readonly commitDesktopUpdate: (requestId: string, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<never, ServerSelfUpdateError>;
}>;
export declare class ServerSelfUpdate extends ServerSelfUpdate_base {
}
export declare const withRunningThreadContinuation: (input: {
    readonly mode: ServerConfig.RuntimeMode;
    readonly selfUpdate: ServerSelfUpdate["Service"];
    readonly prepare: Effect.Effect<ReadonlyArray<ThreadId>, ServerSelfUpdateError>;
    readonly clear: (threadIds: ReadonlyArray<ThreadId>) => Effect.Effect<void, ServerSelfUpdateError>;
}) => Effect.Effect<{
    readonly update: (input: ServerSelfUpdateInput, reportProgress?: (stage: ServerSelfUpdateProgressStage) => Effect.Effect<void, ServerSelfUpdateError>, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<ServerSelfUpdateResult, ServerSelfUpdateError>;
    readonly commitDesktopUpdate: (requestId: string, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<never, ServerSelfUpdateError>;
}, never, never>;
/**
 * A server starting from the runtime its launcher settled on means runtimes left by earlier
 * updates can go. The boot service says so through its IPC context. The SSH launcher and the
 * install script's `t3` start this home's pinned runtime directly, without one.
 */
export declare const pruneRuntimesOnStart: (input: {
    readonly baseDir: string;
    readonly managed: boolean;
}) => Effect.Effect<string[], never, FileSystem.FileSystem | Path.Path | ProcessRunner.ProcessRunner>;
export declare const make: () => Effect.Effect<{
    readonly update: (input: ServerSelfUpdateInput, reportProgress?: (stage: ServerSelfUpdateProgressStage) => Effect.Effect<void, ServerSelfUpdateError>, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<ServerSelfUpdateResult, ServerSelfUpdateError>;
    readonly commitDesktopUpdate: (requestId: string, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<never, ServerSelfUpdateError>;
}, Config.ConfigError, DesktopAppUpdate.DesktopAppUpdate | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path | ProcessRunner.ProcessRunner | import("effect/Scope").Scope | ServerConfig.ServerConfig | ServiceLauncherClient.ServiceLauncherClient>;
export declare const layer: Layer.Layer<ServerSelfUpdate, Config.ConfigError, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | DesktopAppUpdate.DesktopAppUpdate | FileSystem.FileSystem | HttpClient.HttpClient | Path.Path | ServerConfig.ServerConfig | ServiceLauncherClient.ServiceLauncherClient>;
export declare const updateProgressStream: (selfUpdate: ServerSelfUpdate["Service"], input: ServerSelfUpdateInput) => Stream.Stream<{
    type: "progress";
    stage: "downloading" | "installing";
} | {
    type: "complete";
    result: {
        readonly targetVersion: string;
        readonly method: "boot-service" | "desktop-app" | "respawn";
        readonly updateId?: string;
        readonly desktopUpdateToken?: string;
    };
}, ServerSelfUpdateError, never>;
export {};
