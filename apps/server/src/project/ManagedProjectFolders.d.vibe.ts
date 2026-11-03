import { ProjectId, type ThreadId } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ServerConfig from "../config.ts";
import * as GitWorkflow from "../git/GitWorkflowService.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as ProjectService from "./ProjectService.ts";
declare const ScratchUnavailableError_base: Schema.Class<ScratchUnavailableError, Schema.TaggedStruct<"ScratchUnavailableError", {}>, Cause.YieldableError>;
export declare class ScratchUnavailableError extends ScratchUnavailableError_base {
    get message(): string;
}
declare const ScratchFolderError_base: Schema.Class<ScratchFolderError, Schema.TaggedStruct<"ScratchFolderError", {
    readonly folder: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class ScratchFolderError extends ScratchFolderError_base {
    get message(): string;
}
declare const ScratchProjectError_base: Schema.Class<ScratchProjectError, Schema.TaggedStruct<"ScratchProjectError", {
    readonly workspaceRoot: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class ScratchProjectError extends ScratchProjectError_base {
    get message(): string;
}
export type ScratchError = ScratchUnavailableError | ScratchFolderError | ScratchProjectError;
declare const NamedProjectFolderError_base: Schema.Class<NamedProjectFolderError, Schema.TaggedStruct<"NamedProjectFolderError", {
    readonly folder: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class NamedProjectFolderError extends NamedProjectFolderError_base {
    get message(): string;
}
declare const NamedProjectCreateError_base: Schema.Class<NamedProjectCreateError, Schema.TaggedStruct<"NamedProjectCreateError", {
    readonly workspaceRoot: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class NamedProjectCreateError extends NamedProjectCreateError_base {
    get message(): string;
}
export type NamedProjectError = NamedProjectFolderError | NamedProjectCreateError;
declare const ManagedProjectFolders_base: Context.ServiceClass<ManagedProjectFolders, "t3/project/ManagedProjectFolders", {
    readonly scratchRoot: Effect.Effect<Option.Option<string>>;
    readonly ensureScratchProject: Effect.Effect<{
        readonly projectId: ProjectId;
    }, ScratchError>;
    readonly isScratchProject: (projectId: ProjectId) => Effect.Effect<boolean>;
    readonly folderForThread: (input: {
        readonly projectId: ProjectId;
        readonly threadId: ThreadId;
        readonly text: string;
    }) => Effect.Effect<Option.Option<string>, ScratchFolderError>;
    readonly namedProjectsRoot: string;
    /** Removes failed/cancelled creations' folders only while no project owns them. */
    readonly createNamedProject: (input: {
        readonly name: string;
    }) => Effect.Effect<{
        readonly projectId: ProjectId;
        readonly workspaceRoot: string;
        readonly commitError?: string;
    }, NamedProjectError>;
}>;
export declare class ManagedProjectFolders extends ManagedProjectFolders_base {
}
export declare const layer: Layer.Layer<ManagedProjectFolders, never, Crypto.Crypto | FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | GitWorkflow.GitWorkflowService | Path.Path | ProjectService.ProjectService | ServerConfig.ServerConfig>;
export {};
