import * as Schema from "effect/Schema";
export declare const McpAttachmentInput: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"file">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sizeBytes: Schema.Int;
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
}>]>;
