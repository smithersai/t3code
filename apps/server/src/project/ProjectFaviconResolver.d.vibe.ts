import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as WorkspacePaths from "../workspace/WorkspacePaths.vibe";
import * as T3ProjectFileLoader from "./T3ProjectFileLoader.vibe";
declare const ProjectFaviconResolutionError_base: Schema.Class<ProjectFaviconResolutionError, Schema.TaggedStruct<"ProjectFaviconResolutionError", {
    readonly operation: Schema.Literals<readonly ["normalize-workspace", "resolve-path", "stat-candidate", "read-source"]>;
    readonly workspaceRoot: Schema.String;
    readonly relativePath: Schema.optional<Schema.String>;
    readonly absolutePath: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectFaviconResolutionError extends ProjectFaviconResolutionError_base {
    get message(): string;
}
export declare const isMissingWorkspaceRoot: (error: ProjectFaviconResolutionError) => boolean;
declare const ProjectFaviconResolver_base: Context.ServiceClass<ProjectFaviconResolver, "t3/project/ProjectFaviconResolver", {
    readonly resolvePath: (cwd: string, faviconPath?: string) => Effect.Effect<string | null, ProjectFaviconResolutionError>;
    /** Forgets cached lookups for a workspace whose files changed, such as a finished clone. */
    readonly invalidate: (cwd: string) => Effect.Effect<void>;
}>;
export declare class ProjectFaviconResolver extends ProjectFaviconResolver_base {
}
export declare const make: Effect.Effect<{
    readonly resolvePath: (cwd: string, faviconPath?: string) => Effect.Effect<string | null, ProjectFaviconResolutionError>;
    /** Forgets cached lookups for a workspace whose files changed, such as a finished clone. */
    readonly invalidate: (cwd: string) => Effect.Effect<void>;
}, never, FileSystem.FileSystem | Path.Path | T3ProjectFileLoader.T3ProjectFileLoader | WorkspacePaths.WorkspacePaths>;
export declare const layer: Layer.Layer<ProjectFaviconResolver, never, FileSystem.FileSystem | Path.Path | T3ProjectFileLoader.T3ProjectFileLoader | WorkspacePaths.WorkspacePaths>;
export {};
