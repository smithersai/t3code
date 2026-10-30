import * as Schema from "effect/Schema";
export declare const ThreadLinkedPullRequest: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ThreadLinkedPullRequest = typeof ThreadLinkedPullRequest.Type;
/** stack-dismissed hides an unlinked native member and prevents sync from re-adding it. */
export declare const ThreadPullRequestLinkSource: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
export type ThreadPullRequestLinkSource = typeof ThreadPullRequestLinkSource.Type;
export declare const ThreadPullRequestSnapshot: Schema.Struct<{
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly isDraft: Schema.Boolean;
    readonly updatedAt: Schema.NullOr<Schema.String>;
    readonly syncedAt: Schema.String;
    readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly author: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>>;
    readonly additions: Schema.optional<Schema.Int>;
    readonly deletions: Schema.optional<Schema.Int>;
    readonly changedFiles: Schema.optional<Schema.Int>;
    readonly reviewDecision: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>>;
    readonly checksState: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["passing", "failing", "pending"]>>>;
    readonly mergeability: Schema.optional<Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>>;
}>;
export type ThreadPullRequestSnapshot = typeof ThreadPullRequestSnapshot.Type;
export declare const ThreadPullRequestStackLayer: Schema.Struct<{
    readonly number: Schema.Int;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
}>;
export type ThreadPullRequestStackLayer = typeof ThreadPullRequestStackLayer.Type;
/** Layers run bottom to top. */
export declare const ThreadPullRequestStack: Schema.Struct<{
    readonly kind: Schema.Literal<"native">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly layers: Schema.$Array<Schema.Struct<{
        readonly number: Schema.Int;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    }>>;
}>;
export type ThreadPullRequestStack = typeof ThreadPullRequestStack.Type;
export declare const ThreadPullRequestKey: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
}>;
export type ThreadPullRequestKey = typeof ThreadPullRequestKey.Type;
export declare const ThreadPullRequestWatch: Schema.Struct<{
    readonly startedAt: Schema.String;
    readonly headSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly failedChecks: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly passed: Schema.Boolean;
    readonly passedChecks: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    /** Checks still pending when required ones passed early, owed one wake once all settle. */
    readonly owedChecks: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly remarksThrough: Schema.String;
    /** Reported remarks at remarksThrough, so late arrivals at that timestamp still count. */
    readonly remarkIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly conflicting: Schema.Boolean;
    /** Consecutive comment-only wakes; limited to prevent bot loops. */
    readonly wakes: Schema.Int;
    /**
     * When the head was first read without any check, until a check shows up or the agent is told
     * none did. Null once either happened; absent on watches saved before it existed.
     */
    readonly checksAwaitedSince: Schema.optional<Schema.NullOr<Schema.String>>;
}>;
export type ThreadPullRequestWatch = typeof ThreadPullRequestWatch.Type;
export declare const ThreadPullRequestLink: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** An actual browser or clone URL; older agent display URLs may be synthesized. */
    readonly repositoryWebUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
    readonly linkedAt: Schema.String;
    readonly snapshot: Schema.NullOr<Schema.Struct<{
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly isDraft: Schema.Boolean;
        readonly updatedAt: Schema.NullOr<Schema.String>;
        readonly syncedAt: Schema.String;
        readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly author: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>>;
        readonly additions: Schema.optional<Schema.Int>;
        readonly deletions: Schema.optional<Schema.Int>;
        readonly changedFiles: Schema.optional<Schema.Int>;
        readonly reviewDecision: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>>;
        readonly checksState: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["passing", "failing", "pending"]>>>;
        readonly mergeability: Schema.optional<Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>>;
    }>>;
    readonly stack: Schema.NullOr<Schema.Struct<{
        readonly kind: Schema.Literal<"native">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly layers: Schema.$Array<Schema.Struct<{
            readonly number: Schema.Int;
            readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        }>>;
    }>>;
    readonly watch: Schema.optional<Schema.Struct<{
        readonly startedAt: Schema.String;
        readonly headSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly failedChecks: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly passed: Schema.Boolean;
        readonly passedChecks: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        /** Checks still pending when required ones passed early, owed one wake once all settle. */
        readonly owedChecks: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly remarksThrough: Schema.String;
        /** Reported remarks at remarksThrough, so late arrivals at that timestamp still count. */
        readonly remarkIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly conflicting: Schema.Boolean;
        /** Consecutive comment-only wakes; limited to prevent bot loops. */
        readonly wakes: Schema.Int;
        /**
         * When the head was first read without any check, until a check shows up or the agent is told
         * none did. Null once either happened; absent on watches saved before it existed.
         */
        readonly checksAwaitedSince: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
    /** Resume from the ended watch to avoid duplicate notifications. */
    readonly endedWatch: Schema.optional<Schema.Struct<{
        readonly startedAt: Schema.String;
        readonly headSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly failedChecks: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly passed: Schema.Boolean;
        readonly passedChecks: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
        /** Checks still pending when required ones passed early, owed one wake once all settle. */
        readonly owedChecks: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly remarksThrough: Schema.String;
        /** Reported remarks at remarksThrough, so late arrivals at that timestamp still count. */
        readonly remarkIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly conflicting: Schema.Boolean;
        /** Consecutive comment-only wakes; limited to prevent bot loops. */
        readonly wakes: Schema.Int;
        /**
         * When the head was first read without any check, until a check shows up or the agent is told
         * none did. Null once either happened; absent on watches saved before it existed.
         */
        readonly checksAwaitedSince: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
}>;
export type ThreadPullRequestLink = typeof ThreadPullRequestLink.Type;
