import type { DatabaseStorageStatus } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Stream from "effect/Stream";
import * as SqlClient from "effect/sql/SqlClient";
import * as ServerConfig from "../config.ts";
import * as ProjectionMaintenance from "../orchestration-v2/ProjectionMaintenance.ts";
declare const DatabaseStorage_base: Context.ServiceClass<DatabaseStorage, "t3/persistence/DatabaseStorage", {
    /** Return free pages to the filesystem on databases with incremental auto_vacuum. */
    readonly reclaim: Effect.Effect<void>;
    /** Current file accounting, re-published after each maintenance pass. Null until first read. */
    readonly status: Stream.Stream<DatabaseStorageStatus | null>;
}>;
export declare class DatabaseStorage extends DatabaseStorage_base {
}
export declare const layer: Layer.Layer<DatabaseStorage, never, FileSystem.FileSystem | Path.Path | ProjectionMaintenance.ProjectionMaintenanceV2 | ServerConfig.ServerConfig | SqlClient.SqlClient>;
export {};
