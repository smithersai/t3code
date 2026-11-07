import * as Schema from "effect/Schema";
export declare const DraftComposerImageAttachmentSchema: Schema.Struct<{
    readonly id: Schema.String;
    readonly previewUri: Schema.String;
    readonly type: Schema.Literal<"image">;
    readonly name: Schema.String;
    readonly mimeType: Schema.String;
    readonly sizeBytes: Schema.Number;
    readonly fileUri: Schema.optional<Schema.String>;
    readonly dataUrl: Schema.optional<Schema.String>;
    readonly uploadedAttachmentId: Schema.optional<Schema.String>;
    readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
}>;
export declare const DraftComposerFileAttachmentSchema: Schema.Struct<{
    readonly id: Schema.String;
    readonly type: Schema.Literal<"file">;
    readonly name: Schema.String;
    readonly mimeType: Schema.String;
    readonly sizeBytes: Schema.Number;
    readonly fileUri: Schema.String;
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
    readonly uploadedAttachmentId: Schema.optional<Schema.String>;
    readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
}>;
export declare const DraftComposerAttachmentSchema: Schema.Union<readonly [Schema.Struct<{
    readonly id: Schema.String;
    readonly previewUri: Schema.String;
    readonly type: Schema.Literal<"image">;
    readonly name: Schema.String;
    readonly mimeType: Schema.String;
    readonly sizeBytes: Schema.Number;
    readonly fileUri: Schema.optional<Schema.String>;
    readonly dataUrl: Schema.optional<Schema.String>;
    readonly uploadedAttachmentId: Schema.optional<Schema.String>;
    readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
}>, Schema.Struct<{
    readonly id: Schema.String;
    readonly type: Schema.Literal<"file">;
    readonly name: Schema.String;
    readonly mimeType: Schema.String;
    readonly sizeBytes: Schema.Number;
    readonly fileUri: Schema.String;
    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
    readonly uploadedAttachmentId: Schema.optional<Schema.String>;
    readonly uploadEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
}>]>;
