import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
declare const WorkspaceRootNotExistsError_base: Schema.Class<WorkspaceRootNotExistsError, Schema.TaggedStruct<"WorkspaceRootNotExistsError", {
    readonly workspaceRoot: Schema.String;
    readonly normalizedWorkspaceRoot: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class WorkspaceRootNotExistsError extends WorkspaceRootNotExistsError_base {
    get message(): string;
}
declare const WorkspaceRootCreateFailedError_base: Schema.Class<WorkspaceRootCreateFailedError, Schema.TaggedStruct<"WorkspaceRootCreateFailedError", {
    readonly workspaceRoot: Schema.String;
    readonly normalizedWorkspaceRoot: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class WorkspaceRootCreateFailedError extends WorkspaceRootCreateFailedError_base {
    get message(): string;
}
declare const WorkspaceRootStatFailedError_base: Schema.Class<WorkspaceRootStatFailedError, Schema.TaggedStruct<"WorkspaceRootStatFailedError", {
    readonly workspaceRoot: Schema.String;
    readonly normalizedWorkspaceRoot: Schema.String;
    readonly phase: Schema.Literals<readonly ["validate-existing", "verify-created"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class WorkspaceRootStatFailedError extends WorkspaceRootStatFailedError_base {
    get message(): string;
}
declare const WorkspaceRootNotDirectoryError_base: Schema.Class<WorkspaceRootNotDirectoryError, Schema.TaggedStruct<"WorkspaceRootNotDirectoryError", {
    readonly workspaceRoot: Schema.String;
    readonly normalizedWorkspaceRoot: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class WorkspaceRootNotDirectoryError extends WorkspaceRootNotDirectoryError_base {
    get message(): string;
}
declare const WorkspacePathOutsideRootError_base: Schema.Class<WorkspacePathOutsideRootError, Schema.TaggedStruct<"WorkspacePathOutsideRootError", {
    readonly workspaceRoot: Schema.String;
    readonly relativePath: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class WorkspacePathOutsideRootError extends WorkspacePathOutsideRootError_base {
    get message(): string;
}
export declare const WorkspacePathsError: Schema.Union<readonly [typeof WorkspaceRootNotExistsError, typeof WorkspaceRootCreateFailedError, typeof WorkspaceRootStatFailedError, typeof WorkspaceRootNotDirectoryError, typeof WorkspacePathOutsideRootError]>;
export type WorkspacePathsError = typeof WorkspacePathsError.Type;
type WorkspacePaths_shape = {
    normalizeWorkspaceRoot: (workspaceRoot: string, options?: {
        readonly createIfMissing?: boolean;
    }) => Effect.Effect<string, WorkspaceRootNotExistsError | WorkspaceRootCreateFailedError | WorkspaceRootStatFailedError | WorkspaceRootNotDirectoryError>;
    resolveRelativePathWithinRoot: (input: {
        workspaceRoot: string;
        relativePath: string;
    }) => Effect.Effect<{
        absolutePath: string;
        relativePath: string;
    }, WorkspacePathOutsideRootError>;
};
declare const WorkspacePaths_base: Context.ServiceClass<WorkspacePaths, "t3/workspace/WorkspacePaths", WorkspacePaths_shape>;
export declare class WorkspacePaths extends WorkspacePaths_base {
}
export declare namespace WorkspacePaths {
    type Shape = WorkspacePaths_shape;
}
export declare const layer: Layer.Layer<WorkspacePaths, never, FileSystem.FileSystem | Path.Path>;
export {};
