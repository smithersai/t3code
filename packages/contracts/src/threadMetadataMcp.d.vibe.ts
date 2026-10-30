import * as Schema from "effect/Schema";
export declare function hasOnlyPairedSurrogates(value: string): boolean;
export declare const ThreadMetadataMcpAction: Schema.Literals<readonly ["rename", "regenerate_title"]>;
export type ThreadMetadataMcpAction = typeof ThreadMetadataMcpAction.Type;
export declare const ThreadMetadataMcpUpdateInput: Schema.Struct<{
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly action: Schema.Literals<readonly ["rename", "regenerate_title"]>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ThreadMetadataMcpUpdateInput = typeof ThreadMetadataMcpUpdateInput.Type;
export declare const ThreadMetadataMcpUpdateResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly action: Schema.Literals<readonly ["rename", "regenerate_title"]>;
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly sequence: Schema.Int;
    readonly title: Schema.String;
    readonly titleRegeneration: Schema.NullOr<Schema.Struct<{
        readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
        readonly startedAt: Schema.String;
    }>>;
    readonly linkedPullRequest: Schema.NullOr<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly updatedAt: Schema.String;
}>;
export type ThreadMetadataMcpUpdateResult = typeof ThreadMetadataMcpUpdateResult.Type;
