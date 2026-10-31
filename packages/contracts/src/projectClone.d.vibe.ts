import * as Schema from "effect/Schema";
export declare const PROJECT_CLONE_DETAIL_MAX_LENGTH = 200;
export declare const PROJECT_CLONE_ERROR_MAX_LENGTH = 1000;
export declare const ProjectCloneStage: Schema.Literals<readonly ["connecting", "counting", "receiving", "resolving", "checkout"]>;
export type ProjectCloneStage = typeof ProjectCloneStage.Type;
export declare const ProjectClonePhase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
export type ProjectClonePhase = typeof ProjectClonePhase.Type;
export declare const ProjectCloneSnapshot: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly destinationPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.NullOr<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly phase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
    readonly stage: Schema.Literals<readonly ["connecting", "counting", "receiving", "resolving", "checkout"]>;
    readonly percent: Schema.NullOr<Schema.Int>;
    readonly detail: Schema.NullOr<Schema.String>;
    /** Git has printed nothing for a while; `detail` is no longer current. Older servers omit it. */
    readonly stalled: Schema.optionalKey<Schema.Boolean>;
    readonly error: Schema.NullOr<Schema.String>;
    readonly startedAt: Schema.String;
    readonly endedAt: Schema.NullOr<Schema.String>;
    readonly sequence: Schema.Int;
}>;
export type ProjectCloneSnapshot = typeof ProjectCloneSnapshot.Type;
export declare const ProjectCloneSubscribeInput: Schema.Struct<{}>;
export type ProjectCloneSubscribeInput = typeof ProjectCloneSubscribeInput.Type;
export declare const ProjectCloneListEvent: Schema.$Array<Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly destinationPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.NullOr<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly phase: Schema.Literals<readonly ["running", "done", "failed", "cancelled"]>;
    readonly stage: Schema.Literals<readonly ["connecting", "counting", "receiving", "resolving", "checkout"]>;
    readonly percent: Schema.NullOr<Schema.Int>;
    readonly detail: Schema.NullOr<Schema.String>;
    /** Git has printed nothing for a while; `detail` is no longer current. Older servers omit it. */
    readonly stalled: Schema.optionalKey<Schema.Boolean>;
    readonly error: Schema.NullOr<Schema.String>;
    readonly startedAt: Schema.String;
    readonly endedAt: Schema.NullOr<Schema.String>;
    readonly sequence: Schema.Int;
}>>;
export type ProjectCloneListEvent = typeof ProjectCloneListEvent.Type;
export declare const ProjectCloneStartInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly provider: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
    readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly remoteUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly destinationPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly protocol: Schema.optional<Schema.Literals<readonly ["auto", "ssh", "https"]>>;
}>;
export type ProjectCloneStartInput = typeof ProjectCloneStartInput.Type;
export declare const ProjectCloneStartResult: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.NullOr<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type ProjectCloneStartResult = typeof ProjectCloneStartResult.Type;
export declare const ProjectCloneActionInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>;
export type ProjectCloneActionInput = typeof ProjectCloneActionInput.Type;
export declare const ProjectCloneActionResult: Schema.Struct<{
    readonly applied: Schema.Boolean;
}>;
export type ProjectCloneActionResult = typeof ProjectCloneActionResult.Type;
export declare function projectCloneDisplayName(snapshot: Pick<ProjectCloneSnapshot, "repository" | "destinationPath">): string;
export declare function projectCloneProgressSummary(snapshot: Pick<ProjectCloneSnapshot, "stage" | "percent" | "detail" | "stalled">): string;
