import * as Schema from "effect/Schema";
/** Server stores the value under a one-use SecretRef; the thread learns only status. */
export declare const SecretRequestAnswerInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly turnItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly answer: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"save">;
        readonly secret: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"decline">;
    }>]>;
}>;
export type SecretRequestAnswerInput = typeof SecretRequestAnswerInput.Type;
export declare const SecretRequestFailureReason: Schema.Literals<("agent_stopped" | "already_answered" | "consume_failed" | "invalid_ref" | "load_failed" | "not_a_file_request" | "not_found" | "read_failed" | "record_failed" | "ref_expired" | "ref_unavailable" | "store_failed")[]>;
export type SecretRequestFailureReason = typeof SecretRequestFailureReason.Type;
declare const SecretRequestError_base: Schema.Class<SecretRequestError, Schema.TaggedStruct<"SecretRequestError", {
    readonly reason: Schema.Literals<("agent_stopped" | "already_answered" | "consume_failed" | "invalid_ref" | "load_failed" | "not_a_file_request" | "not_found" | "read_failed" | "record_failed" | "ref_expired" | "ref_unavailable" | "store_failed")[]>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class SecretRequestError extends SecretRequestError_base {
    get message(): string;
}
export {};
