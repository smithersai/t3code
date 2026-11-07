import * as Schema from "effect/Schema";
export declare const TurnCountRange: Schema.Struct<{
    readonly fromTurnCount: Schema.Int;
    readonly toTurnCount: Schema.Int;
}>;
export declare const ThreadTurnDiff: Schema.Struct<{
    readonly fromTurnCount: Schema.Int;
    readonly toTurnCount: Schema.Int;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly diff: Schema.String;
}>;
export declare const OrchestrationGetTurnDiffInput: Schema.Struct<{
    readonly fromTurnCount: Schema.Int;
    readonly toTurnCount: Schema.Int;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly ignoreWhitespace: Schema.optionalKey<Schema.Boolean>;
}>;
export type OrchestrationGetTurnDiffInput = typeof OrchestrationGetTurnDiffInput.Type;
export declare const OrchestrationGetTurnDiffResult: Schema.Struct<{
    readonly fromTurnCount: Schema.Int;
    readonly toTurnCount: Schema.Int;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly diff: Schema.String;
}>;
export type OrchestrationGetTurnDiffResult = typeof OrchestrationGetTurnDiffResult.Type;
export declare const OrchestrationGetFullThreadDiffInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly toTurnCount: Schema.Int;
    readonly ignoreWhitespace: Schema.optionalKey<Schema.Boolean>;
}>;
export type OrchestrationGetFullThreadDiffInput = typeof OrchestrationGetFullThreadDiffInput.Type;
export declare const OrchestrationGetFullThreadDiffResult: Schema.Struct<{
    readonly fromTurnCount: Schema.Int;
    readonly toTurnCount: Schema.Int;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly diff: Schema.String;
}>;
export type OrchestrationGetFullThreadDiffResult = typeof OrchestrationGetFullThreadDiffResult.Type;
declare const OrchestrationGetTurnDiffError_base: Schema.Class<OrchestrationGetTurnDiffError, Schema.TaggedStruct<"OrchestrationGetTurnDiffError", {
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class OrchestrationGetTurnDiffError extends OrchestrationGetTurnDiffError_base {
}
declare const OrchestrationGetFullThreadDiffError_base: Schema.Class<OrchestrationGetFullThreadDiffError, Schema.TaggedStruct<"OrchestrationGetFullThreadDiffError", {
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class OrchestrationGetFullThreadDiffError extends OrchestrationGetFullThreadDiffError_base {
}
export {};
