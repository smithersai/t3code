import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as ServerConfig from "../config.ts";
/**
 * A marker only matters while its proof can pass the time check (about 10 minutes
 * for DPoP, 7 for cloud proofs). After that, the time check rejects a replay by
 * itself.
 */
export declare const REPLAY_MARKER_MAX_AGE: Duration.Duration;
/** Prunes only <marker prefix>*.bin, excluding other secrets and temporary files. */
export declare const pruneExpiredReplayMarkers: () => Effect.Effect<void, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export declare const layer: Layer.Layer<never, never, FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
