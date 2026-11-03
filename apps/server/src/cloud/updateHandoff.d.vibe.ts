import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as ServerConfig from "../config.ts";
export declare const pendingServiceUpdateExists: Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export declare const pendingUpdateHandoffExists: Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export declare const desktopUpdateRestartPending: Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
