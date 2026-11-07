import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
export declare const ensureAgentDeviceShim: (input: {
    readonly entryPath: string;
    readonly stateDir: string;
}) => Effect.Effect<string, import("@t3tools/shared/nodeRuntime").NodeRuntimeUnavailableError | import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;
