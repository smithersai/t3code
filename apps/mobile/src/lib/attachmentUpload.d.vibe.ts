import { type DraftComposerAttachment } from "./composerImages";
export { composerAttachmentWireMimeType, prepareTurnAttachments, releasePendingAttachmentUploads, withUploadedMobileAttachmentReferences } from "./attachmentUpload.vibe.throwing.js";
export type { PrepareTurnAttachmentsResult, PreparedTurnAttachments, UploadedMobileAttachment } from "./attachmentUpload.vibe.throwing.js";
export declare function validateDraftFileAttachments(input: {
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
}): string | null;
