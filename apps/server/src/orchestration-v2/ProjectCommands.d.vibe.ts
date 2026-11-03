import { type CommandId, type EventId, type ModelSelection, type ProjectIconOverride, ProjectId, type ProjectScript, type ThreadEnvMode } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import type { UnsequencedProjectEvent } from "../persistence/OrchestrationEventStore.ts";
import type { ProjectRow } from "./ProjectStore.ts";
export interface ProjectCreateCommand {
    readonly type: "project.create";
    readonly commandId: CommandId;
    readonly projectId: ProjectId;
    readonly title: string;
    readonly workspaceRoot: string;
    readonly scripts?: ReadonlyArray<ProjectScript>;
}
export interface ProjectMetaUpdateCommand {
    readonly type: "project.meta.update";
    readonly commandId: CommandId;
    readonly projectId: ProjectId;
    readonly title?: string;
    readonly workspaceRoot?: string;
    readonly defaultModelSelection?: ModelSelection | null;
    readonly defaultThreadEnvMode?: ThreadEnvMode | null;
    readonly autoPull?: boolean;
    readonly faviconPath?: string | null;
    readonly projectIcon?: ProjectIconOverride | null;
    readonly scripts?: ReadonlyArray<ProjectScript>;
}
export interface ProjectDeleteCommand {
    readonly type: "project.delete";
    readonly commandId: CommandId;
    readonly projectId: ProjectId;
}
export type ProjectCommand = ProjectCreateCommand | ProjectMetaUpdateCommand | ProjectDeleteCommand;
declare const ProjectCommandInvariantError_base: Schema.Class<ProjectCommandInvariantError, Schema.TaggedStruct<"ProjectCommandInvariantError", {
    readonly commandType: Schema.String;
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectCommandInvariantError extends ProjectCommandInvariantError_base {
    get message(): string;
}
declare const ProjectCommandMissingProjectError_base: Schema.Class<ProjectCommandMissingProjectError, Schema.TaggedStruct<"ProjectCommandMissingProjectError", {
    readonly commandType: Schema.String;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectCommandMissingProjectError extends ProjectCommandMissingProjectError_base {
    get message(): string;
}
declare const ProjectWorkspaceConflictError_base: Schema.Class<ProjectWorkspaceConflictError, Schema.TaggedStruct<"ProjectWorkspaceConflictError", {
    readonly workspaceRoot: Schema.String;
    readonly conflictingProjectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectWorkspaceConflictError extends ProjectWorkspaceConflictError_base {
    get message(): string;
}
export declare const ProjectCommandRejection: Schema.Union<readonly [typeof ProjectCommandInvariantError, typeof ProjectCommandMissingProjectError, typeof ProjectWorkspaceConflictError]>;
export type ProjectCommandRejection = typeof ProjectCommandRejection.Type;
export declare const encodeProjectCommandRejection: (input: ProjectCommandInvariantError | ProjectCommandMissingProjectError | ProjectWorkspaceConflictError, options?: import("effect/SchemaAST").ParseOptions) => string;
export declare const decodeProjectCommandRejection: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => import("effect/Option").Option<ProjectCommandInvariantError | ProjectCommandMissingProjectError | ProjectWorkspaceConflictError>;
export interface ProjectCommandState {
    readonly project: ProjectRow | undefined;
    readonly workspaceOwner: ProjectRow | undefined;
}
/** Read state and commit the planned event under the project lock. */
export declare function planProjectCommand(input: {
    readonly command: ProjectCommand;
    readonly state: ProjectCommandState;
    readonly eventId: EventId;
    readonly now: DateTime.Utc;
}): Result.Result<UnsequencedProjectEvent, ProjectCommandRejection>;
export {};
