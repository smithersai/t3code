import { EnvironmentId, ProjectId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const ProjectThreadTaskRequiredError_base: Schema.Class<ProjectThreadTaskRequiredError, Schema.TaggedStruct<"ProjectThreadTaskRequiredError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly environmentMode: Schema.Literals<readonly ["local", "worktree"]>;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectThreadTaskRequiredError extends ProjectThreadTaskRequiredError_base {
    get message(): string;
}
declare const ProjectThreadBaseBranchRequiredError_base: Schema.Class<ProjectThreadBaseBranchRequiredError, Schema.TaggedStruct<"ProjectThreadBaseBranchRequiredError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>, import("effect/Cause").YieldableError>;
export declare class ProjectThreadBaseBranchRequiredError extends ProjectThreadBaseBranchRequiredError_base {
    get message(): string;
}
export declare const ProjectThreadCreationValidationError: Schema.Union<readonly [typeof ProjectThreadTaskRequiredError, typeof ProjectThreadBaseBranchRequiredError]>;
export type ProjectThreadCreationValidationError = typeof ProjectThreadCreationValidationError.Type;
export declare function resolveProjectThreadCreationBranch(input: {
    readonly workspaceMode: "local" | "worktree";
    readonly selectedBranch: string | null;
    readonly currentCheckoutBranch: string | null;
}): string | null;
export declare function validateProjectThreadCreation(input: {
    readonly environmentId: EnvironmentId;
    readonly projectId: ProjectId;
    readonly environmentMode: "local" | "worktree";
    readonly branch: string | null;
    readonly initialMessageText: string;
}): ProjectThreadCreationValidationError | null;
export {};
