import type { ProjectCloneSnapshot, ProjectCloneStartInput, ProjectCloneStartResult, ProjectId } from "@t3tools/contracts";
import { OrchestrationDispatchCommandError, SourceControlRepositoryError } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as SourceControlRepositoryService from "../sourceControl/SourceControlRepositoryService.ts";
declare const ProjectCloneTracker_base: Context.ServiceClass<ProjectCloneTracker, "t3/project/ProjectCloneTracker", {
    readonly start: (input: ProjectCloneStartInput, hooks: ProjectCloneHooks) => Effect.Effect<ProjectCloneStartResult, SourceControlRepositoryError | OrchestrationDispatchCommandError>;
    /** Interrupts a running clone and deletes the partial checkout. */
    readonly cancel: (projectId: ProjectId) => Effect.Effect<boolean>;
    readonly retry: (projectId: ProjectId) => Effect.Effect<boolean, SourceControlRepositoryError>;
    /** Stops tracking, interrupts any running clone and removes unfinished checkouts. */
    readonly discard: (projectId: ProjectId) => Effect.Effect<void>;
    readonly get: (projectId: ProjectId) => Effect.Effect<ProjectCloneSnapshot | null>;
    readonly stream: Stream.Stream<readonly ProjectCloneSnapshot[]>;
}>;
export declare class ProjectCloneTracker extends ProjectCloneTracker_base {
}
export interface ProjectCloneHooks {
    readonly createProject: (input: {
        readonly projectId: ProjectId;
        readonly title: string;
        readonly workspaceRoot: string;
        readonly createdAt: string;
    }) => Effect.Effect<void, OrchestrationDispatchCommandError>;
    readonly onCloned: (input: {
        readonly projectId: ProjectId;
        readonly workspaceRoot: string;
    }) => Effect.Effect<void>;
}
/** @public */
export declare const make: Effect.Effect<{
    readonly start: (input: ProjectCloneStartInput, hooks: ProjectCloneHooks) => Effect.Effect<ProjectCloneStartResult, SourceControlRepositoryError | OrchestrationDispatchCommandError>;
    /** Interrupts a running clone and deletes the partial checkout. */
    readonly cancel: (projectId: ProjectId) => Effect.Effect<boolean>;
    readonly retry: (projectId: ProjectId) => Effect.Effect<boolean, SourceControlRepositoryError>;
    /** Stops tracking, interrupts any running clone and removes unfinished checkouts. */
    readonly discard: (projectId: ProjectId) => Effect.Effect<void>;
    readonly get: (projectId: ProjectId) => Effect.Effect<ProjectCloneSnapshot | null>;
    readonly stream: Stream.Stream<ReadonlyArray<ProjectCloneSnapshot>>;
}, never, Scope.Scope | SourceControlRepositoryService.SourceControlRepositoryService>;
/**
 * Every dispatch transport (WebSocket, HTTP) runs this before normalizing so no
 * client can start a thread on an empty tree, and no attachment copies are made
 * for a command that is about to be refused.
 */
export declare const rejectCommandsDuringClone: (tracker: {
    readonly start: (input: ProjectCloneStartInput, hooks: ProjectCloneHooks) => Effect.Effect<ProjectCloneStartResult, (SourceControlRepositoryError | OrchestrationDispatchCommandError)>;
    readonly cancel: (projectId: ProjectId) => Effect.Effect<boolean>;
    readonly retry: (projectId: ProjectId) => Effect.Effect<boolean, SourceControlRepositoryError>;
    readonly discard: (projectId: ProjectId) => Effect.Effect<void>;
    readonly get: (projectId: ProjectId) => Effect.Effect<(ProjectCloneSnapshot | null)>;
    readonly stream: Stream.Stream<ReadonlyArray<ProjectCloneSnapshot>>;
}, command: {
    readonly type: string;
    readonly projectId?: ProjectId;
    readonly bootstrap?: unknown;
}) => Effect.Effect<void, OrchestrationDispatchCommandError>;
export declare const layer: Layer.Layer<ProjectCloneTracker, never, SourceControlRepositoryService.SourceControlRepositoryService>;
export {};
