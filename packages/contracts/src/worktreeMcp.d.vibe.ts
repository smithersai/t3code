import * as Schema from "effect/Schema";
/** Uses the managed worktree folder; handoff detaches the provider, ending this turn and resuming there next run. */
export declare const WorktreeMcpHandoffInput: Schema.Struct<{
    readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly startFromOrigin: Schema.optional<Schema.Boolean>;
    readonly runSetupScript: Schema.optional<Schema.Boolean>;
    readonly continuationPrompt: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type WorktreeMcpHandoffInput = typeof WorktreeMcpHandoffInput.Type;
export declare const WorktreeMcpSetupScriptStatus: Schema.Union<readonly [Schema.Struct<{
    readonly status: Schema.Literal<"started">;
    readonly scriptName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"no-script">;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"skipped">;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"failed">;
    readonly detail: Schema.String;
}>]>;
export type WorktreeMcpSetupScriptStatus = typeof WorktreeMcpSetupScriptStatus.Type;
export declare const WorktreeMcpContinuationStatus: Schema.Union<readonly [Schema.Struct<{
    readonly status: Schema.Literal<"scheduled">;
    readonly delivery: Schema.Literals<readonly ["started", "queued", "steered", "restarted"]>;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"skipped">;
}>, Schema.Struct<{
    readonly status: Schema.Literal<"failed">;
    readonly detail: Schema.String;
}>]>;
export type WorktreeMcpContinuationStatus = typeof WorktreeMcpContinuationStatus.Type;
export declare const WorktreeMcpHandoffResult: Schema.Struct<{
    readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly startedFromOrigin: Schema.Boolean;
    readonly setupScript: Schema.Union<readonly [Schema.Struct<{
        readonly status: Schema.Literal<"started">;
        readonly scriptName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"no-script">;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"skipped">;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"failed">;
        readonly detail: Schema.String;
    }>]>;
    readonly continuation: Schema.Union<readonly [Schema.Struct<{
        readonly status: Schema.Literal<"scheduled">;
        readonly delivery: Schema.Literals<readonly ["started", "queued", "steered", "restarted"]>;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"skipped">;
    }>, Schema.Struct<{
        readonly status: Schema.Literal<"failed">;
        readonly detail: Schema.String;
    }>]>;
    readonly note: Schema.String;
}>;
export type WorktreeMcpHandoffResult = typeof WorktreeMcpHandoffResult.Type;
export declare const WorktreeMcpStatusResult: Schema.Struct<{
    readonly attached: Schema.Boolean;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly branch: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly projectWorkspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly defaultStartFromOrigin: Schema.Boolean;
}>;
export type WorktreeMcpStatusResult = typeof WorktreeMcpStatusResult.Type;
declare const WorktreeMcpFailure_base: Schema.Class<WorktreeMcpFailure, Schema.TaggedStruct<"WorktreeMcpFailure", {
    readonly code: Schema.Literals<readonly ["capability_denied", "thread_not_found", "project_not_found", "already_in_worktree", "handoff_in_progress", "invalid_request", "operation_failed", "thread_credential_required"]>;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class WorktreeMcpFailure extends WorktreeMcpFailure_base {
}
export {};
