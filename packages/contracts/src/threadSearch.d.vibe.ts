import * as Schema from "effect/Schema";
export declare const OrchestrationThreadSearchSource: Schema.Literals<readonly ["user", "assistant"]>;
export type OrchestrationThreadSearchSource = typeof OrchestrationThreadSearchSource.Type;
/** Longer queries are cut to this before they are sent. */
export declare const THREAD_SEARCH_QUERY_MAX_LENGTH = 200;
export declare const OrchestrationSearchThreadsInput: Schema.Struct<{
    readonly query: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly limit: Schema.optionalKey<Schema.Int>;
}>;
export type OrchestrationSearchThreadsInput = typeof OrchestrationSearchThreadsInput.Type;
export declare const OrchestrationThreadSearchMatch: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly source: Schema.Literals<readonly ["user", "assistant"]>;
    readonly snippet: Schema.String;
    readonly messageCreatedAt: Schema.NullOr<Schema.String>;
    /**
     * How well the message matches: 1 for whole words, 0.8 when a word only
     * starts one, 0.3 when one only appears inside words, 0.25 more when the
     * words are written together as typed, else 0.1 more when they are near.
     * Older servers omit it.
     */
    readonly quality: Schema.optionalKey<Schema.Finite>;
    /** How many of the thread's newest messages match. Older servers omit it. */
    readonly hits: Schema.optionalKey<Schema.Int>;
    /** The message the snippet is from. Older servers omit it. */
    readonly messageId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
}>;
export type OrchestrationThreadSearchMatch = typeof OrchestrationThreadSearchMatch.Type;
export declare const OrchestrationSearchThreadsResult: Schema.Struct<{
    readonly matches: Schema.$Array<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly source: Schema.Literals<readonly ["user", "assistant"]>;
        readonly snippet: Schema.String;
        readonly messageCreatedAt: Schema.NullOr<Schema.String>;
        /**
         * How well the message matches: 1 for whole words, 0.8 when a word only
         * starts one, 0.3 when one only appears inside words, 0.25 more when the
         * words are written together as typed, else 0.1 more when they are near.
         * Older servers omit it.
         */
        readonly quality: Schema.optionalKey<Schema.Finite>;
        /** How many of the thread's newest messages match. Older servers omit it. */
        readonly hits: Schema.optionalKey<Schema.Int>;
        /** The message the snippet is from. Older servers omit it. */
        readonly messageId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
    }>>;
}>;
export type OrchestrationSearchThreadsResult = typeof OrchestrationSearchThreadsResult.Type;
declare const OrchestrationSearchThreadsError_base: Schema.Class<OrchestrationSearchThreadsError, Schema.TaggedStruct<"OrchestrationSearchThreadsError", {
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class OrchestrationSearchThreadsError extends OrchestrationSearchThreadsError_base {
}
export {};
