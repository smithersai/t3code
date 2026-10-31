import * as Schema from "effect/Schema";
export declare const ASSISTANT_CITATION_MAX_TEXT_LENGTH = 8000;
export declare const ASSISTANT_CITATION_MAX_COMMENT_LENGTH = 8000;
export declare const ASSISTANT_CITATION_CONTEXT_LENGTH = 32;
/** Positions are UTF-16 offsets, not Markdown offsets. */
export declare const AssistantCitation: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
    readonly text: Schema.String;
    readonly comment: Schema.optional<Schema.String>;
    readonly start: Schema.Int;
    readonly end: Schema.Int;
    readonly prefix: Schema.String;
    readonly suffix: Schema.String;
}>;
export type AssistantCitation = typeof AssistantCitation.Type;
