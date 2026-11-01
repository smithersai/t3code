import { type VcsError } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import type { ProjectionRepositoryError } from "../persistence/Errors.ts";
export declare const CheckpointDiffOperation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
export type CheckpointDiffOperation = typeof CheckpointDiffOperation.Type;
declare const CheckpointDiffResultInvalidError_base: Schema.Class<CheckpointDiffResultInvalidError, Schema.TaggedStruct<"CheckpointDiffResultInvalidError", {
    readonly operation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>, import("effect/Cause").YieldableError>;
export declare class CheckpointDiffResultInvalidError extends CheckpointDiffResultInvalidError_base {
    get message(): string;
}
declare const CheckpointThreadNotFoundError_base: Schema.Class<CheckpointThreadNotFoundError, Schema.TaggedStruct<"CheckpointThreadNotFoundError", {
    readonly operation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>, import("effect/Cause").YieldableError>;
export declare class CheckpointThreadNotFoundError extends CheckpointThreadNotFoundError_base {
    get message(): string;
}
declare const CheckpointWorkspacePathMissingError_base: Schema.Class<CheckpointWorkspacePathMissingError, Schema.TaggedStruct<"CheckpointWorkspacePathMissingError", {
    readonly operation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>, import("effect/Cause").YieldableError>;
export declare class CheckpointWorkspacePathMissingError extends CheckpointWorkspacePathMissingError_base {
    get message(): string;
}
declare const CheckpointTurnRangeUnavailableError_base: Schema.Class<CheckpointTurnRangeUnavailableError, Schema.TaggedStruct<"CheckpointTurnRangeUnavailableError", {
    readonly operation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly requestedTurnCount: Schema.Int;
    readonly availableTurnCount: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class CheckpointTurnRangeUnavailableError extends CheckpointTurnRangeUnavailableError_base {
    get message(): string;
}
declare const CheckpointRefUnavailableError_base: Schema.Class<CheckpointRefUnavailableError, Schema.TaggedStruct<"CheckpointRefUnavailableError", {
    readonly operation: Schema.Literals<readonly ["CheckpointDiffQuery.getTurnDiff", "CheckpointDiffQuery.getFullThreadDiff"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly turnCount: Schema.Int;
    readonly checkpoint: Schema.Literals<readonly ["from", "to"]>;
}>, import("effect/Cause").YieldableError>;
export declare class CheckpointRefUnavailableError extends CheckpointRefUnavailableError_base {
    get message(): string;
}
export type CheckpointStoreError = VcsError;
export type CheckpointServiceError = CheckpointStoreError | ProjectionRepositoryError | CheckpointDiffResultInvalidError | CheckpointThreadNotFoundError | CheckpointWorkspacePathMissingError | CheckpointTurnRangeUnavailableError | CheckpointRefUnavailableError;
export {};
