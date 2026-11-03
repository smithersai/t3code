import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import * as ServerConfig from "../config.ts";
import * as ProjectStore from "../orchestration-v2/ProjectStore.ts";
import * as ServerSettings from "../serverSettings.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
declare const UnknownWorkspaceError_base: Schema.Class<UnknownWorkspaceError, Schema.TaggedStruct<"UnknownWorkspaceError", {
    readonly cwd: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class UnknownWorkspaceError extends UnknownWorkspaceError_base {
    get message(): string;
}
/** Resolve candidate and root consistently before checking containment. */
export declare const isWithinRoot: (path: Path.Path, candidate: string, root: string) => boolean;
declare const KnownWorkspaces_base: Context.ServiceClass<KnownWorkspaces, "t3/workspace/KnownWorkspaces", {
    /** Takes a symlink-resolved path. */
    readonly contains: (realPath: string) => Effect.Effect<boolean>;
    /** Fails unless `cwd` exists and resolves inside a known workspace. */
    readonly assertContains: (cwd: string) => Effect.Effect<void, UnknownWorkspaceError>;
}>;
export declare class KnownWorkspaces extends KnownWorkspaces_base {
}
/** @public */
export declare const make: Effect.Effect<{
    /** Takes a symlink-resolved path. */
    readonly contains: (realPath: string) => Effect.Effect<boolean>;
    /** Fails unless `cwd` exists and resolves inside a known workspace. */
    readonly assertContains: (cwd: string) => Effect.Effect<void, UnknownWorkspaceError>;
}, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | Path.Path | ProjectStore.ProjectStoreV2 | ServerConfig.ServerConfig | ServerSettings.ServerSettingsService | SqlClient.SqlClient>;
export declare const layer: Layer.Layer<KnownWorkspaces, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | Path.Path | ProjectStore.ProjectStoreV2 | ServerConfig.ServerConfig | ServerSettings.ServerSettingsService | SqlClient.SqlClient>;
export {};
