import * as Schema from "effect/Schema";
import type { ResolvedSharePayload, SharePayload } from "expo-sharing";
import type { DraftComposerAttachment } from "../../lib/composerImages";
export interface IncomingShareDraft {
    readonly schemaVersion: 1;
    readonly id: string;
    readonly createdAt: string;
    readonly destination?: IncomingShareDestination;
    readonly text: string;
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly warnings: ReadonlyArray<string>;
}
export interface IncomingShareDestination {
    readonly environmentId: string;
    readonly projectId: string;
}
export declare const IncomingShareDraftSchema: Schema.Struct<{
    readonly schemaVersion: Schema.Literal<1>;
    readonly id: Schema.String;
    readonly createdAt: Schema.String;
    readonly destination: Schema.optional<Schema.Struct<{
        readonly environmentId: Schema.String;
        readonly projectId: Schema.String;
    }>>;
    readonly text: Schema.String;
    readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>;
    readonly warnings: Schema.$Array<Schema.String>;
}>;
export declare function decodeIncomingShareDraft(value: unknown): IncomingShareDraft;
/** Delete only inside app-owned roots; iOS shares may reference the sender's original. */
export declare function isShareFileUriUnderOwnedRoots(uri: string, ownedRootUris: ReadonlyArray<string>): boolean;
export interface IncomingShareFileReader {
    readonly readBase64: (uri: string) => Promise<string>;
    readonly removeOwnedFile: (uri: string) => Promise<void> | void;
    readonly persistFile?: (uri: string, name: string) => Promise<string>;
    readonly readSize?: (uri: string) => Promise<number | null>;
}
export declare function selectIncomingShareAttachments(input: {
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly maxFileAttachmentBytes: number | null;
}): {
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly warnings: ReadonlyArray<string>;
};
export declare function selectIncomingShareAttachmentsForServer(input: {
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly serverConfig: {
        readonly environment: {
            readonly capabilities: {
                readonly attachmentUploads?: boolean;
                readonly fileAttachments?: {
                    readonly maxUploadBytes: number;
                };
            };
        };
    } | null;
}): {
    readonly status: "pending";
} | {
    readonly status: "ready";
    readonly attachments: ReadonlyArray<DraftComposerAttachment>;
    readonly warnings: ReadonlyArray<string>;
};
/** @throws {never} */
export declare function buildIncomingShareDraft(input: {
    readonly payloads: ReadonlyArray<SharePayload>;
    readonly resolvedPayloads: ReadonlyArray<ResolvedSharePayload>;
    readonly fileReader: IncomingShareFileReader;
    readonly id: string;
    readonly createdAt: string;
}): Promise<IncomingShareDraft>;
export declare function hasIncomingShareContent(draft: IncomingShareDraft): boolean;
