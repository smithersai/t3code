import * as Schema from "effect/Schema";
/** Producers clamp free text to these before publishing so encoding never fails. */
export declare const WORKTREE_SETUP_DETAIL_MAX_LENGTH = 200;
export declare const WORKTREE_SETUP_TAIL_LINE_MAX_LENGTH = 400;
export declare const WORKTREE_SETUP_ERROR_MAX_LENGTH = 1000;
export declare const WorktreeSetupStageId: Schema.Literals<readonly ["fetch", "checkout", "submodules", "setup-script", "agent"]>;
export type WorktreeSetupStageId = typeof WorktreeSetupStageId.Type;
export declare const WorktreeSetupStageStatus: Schema.Literals<readonly ["pending", "running", "done", "skipped", "warning", "failed"]>;
export type WorktreeSetupStageStatus = typeof WorktreeSetupStageStatus.Type;
export declare const WorktreeSetupStage: Schema.Struct<{
    readonly id: Schema.Literals<readonly ["fetch", "checkout", "submodules", "setup-script", "agent"]>;
    readonly status: Schema.Literals<readonly ["pending", "running", "done", "skipped", "warning", "failed"]>;
    readonly startedAt: Schema.NullOr<Schema.String>;
    readonly endedAt: Schema.NullOr<Schema.String>;
    readonly percent: Schema.NullOr<Schema.Int>;
    readonly detail: Schema.NullOr<Schema.String>;
    readonly tail: Schema.$Array<Schema.String>;
}>;
export type WorktreeSetupStage = typeof WorktreeSetupStage.Type;
export declare const WorktreeSetupPhase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
export type WorktreeSetupPhase = typeof WorktreeSetupPhase.Type;
export declare const WorktreeSetupSnapshot: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly phase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
    readonly startedAt: Schema.String;
    readonly endedAt: Schema.NullOr<Schema.String>;
    readonly branch: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly setupScript: Schema.NullOr<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly stages: Schema.$Array<Schema.Struct<{
        readonly id: Schema.Literals<readonly ["fetch", "checkout", "submodules", "setup-script", "agent"]>;
        readonly status: Schema.Literals<readonly ["pending", "running", "done", "skipped", "warning", "failed"]>;
        readonly startedAt: Schema.NullOr<Schema.String>;
        readonly endedAt: Schema.NullOr<Schema.String>;
        readonly percent: Schema.NullOr<Schema.Int>;
        readonly detail: Schema.NullOr<Schema.String>;
        readonly tail: Schema.$Array<Schema.String>;
    }>>;
    readonly error: Schema.NullOr<Schema.String>;
    readonly sequence: Schema.Int;
}>;
export type WorktreeSetupSnapshot = typeof WorktreeSetupSnapshot.Type;
export declare const WORKTREE_SETUP_ACTIVITY_KIND = "worktree-setup";
export declare const WorktreeSetupSubscribeInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type WorktreeSetupSubscribeInput = typeof WorktreeSetupSubscribeInput.Type;
export declare const WorktreeSetupStreamEvent: Schema.NullOr<Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly phase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
    readonly startedAt: Schema.String;
    readonly endedAt: Schema.NullOr<Schema.String>;
    readonly branch: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly setupScript: Schema.NullOr<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly stages: Schema.$Array<Schema.Struct<{
        readonly id: Schema.Literals<readonly ["fetch", "checkout", "submodules", "setup-script", "agent"]>;
        readonly status: Schema.Literals<readonly ["pending", "running", "done", "skipped", "warning", "failed"]>;
        readonly startedAt: Schema.NullOr<Schema.String>;
        readonly endedAt: Schema.NullOr<Schema.String>;
        readonly percent: Schema.NullOr<Schema.Int>;
        readonly detail: Schema.NullOr<Schema.String>;
        readonly tail: Schema.$Array<Schema.String>;
    }>>;
    readonly error: Schema.NullOr<Schema.String>;
    readonly sequence: Schema.Int;
}>>;
export type WorktreeSetupStreamEvent = typeof WorktreeSetupStreamEvent.Type;
export declare const WorktreeSetupCancelInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type WorktreeSetupCancelInput = typeof WorktreeSetupCancelInput.Type;
export declare const WorktreeSetupCancelResult: Schema.Struct<{
    readonly cancelled: Schema.Boolean;
}>;
export type WorktreeSetupCancelResult = typeof WorktreeSetupCancelResult.Type;
export declare const WORKTREE_SETUP_STAGE_ORDER: ReadonlyArray<WorktreeSetupStageId>;
export declare function worktreeSetupStageLabel(id: WorktreeSetupStageId): string;
