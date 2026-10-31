import * as Schema from "effect/Schema";
export declare const McpAppCallToolInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly arguments: Schema.$Record<Schema.String, Schema.Unknown>;
}>;
export type McpAppCallToolInput = typeof McpAppCallToolInput.Type;
export declare const McpAppCallToolResult: Schema.Struct<{
    readonly content: Schema.$Array<Schema.Unknown>;
    readonly structuredContent: Schema.optional<Schema.Unknown>;
    readonly isError: Schema.optional<Schema.Boolean>;
    readonly _meta: Schema.optional<Schema.Unknown>;
}>;
export type McpAppCallToolResult = typeof McpAppCallToolResult.Type;
export declare const McpAppToolInfoInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type McpAppToolInfoInput = typeof McpAppToolInfoInput.Type;
export declare const McpAppToolInfo: Schema.Struct<{
    readonly callable: Schema.Boolean;
    readonly readOnly: Schema.Boolean;
    readonly title: Schema.optional<Schema.String>;
    readonly tool: Schema.optional<Schema.Unknown>;
}>;
export type McpAppToolInfo = typeof McpAppToolInfo.Type;
export declare const McpAppReadResourceInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly uri: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type McpAppReadResourceInput = typeof McpAppReadResourceInput.Type;
export declare const McpAppReadResourceResult: Schema.Struct<{
    readonly contents: Schema.$Array<Schema.Unknown>;
}>;
export type McpAppReadResourceResult = typeof McpAppReadResourceResult.Type;
/** Replaces prior context; no content clears it. */
export declare const McpAppUpdateModelContextInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly conversationThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly content: Schema.optional<Schema.$Array<Schema.Unknown>>;
    readonly structuredContent: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
}>;
export type McpAppUpdateModelContextInput = typeof McpAppUpdateModelContextInput.Type;
export declare const McpAppRequestErrorReason: Schema.Literals<readonly ["not-an-app", "provider-unsupported", "session-stopped", "tool-not-callable", "unsupported-content", "request-failed"]>;
export type McpAppRequestErrorReason = typeof McpAppRequestErrorReason.Type;
declare const McpAppRequestError_base: Schema.Class<McpAppRequestError, Schema.TaggedStruct<"McpAppRequestError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly reason: Schema.Literals<readonly ["not-an-app", "provider-unsupported", "session-stopped", "tool-not-callable", "unsupported-content", "request-failed"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class McpAppRequestError extends McpAppRequestError_base {
    get message(): string;
}
export {};
