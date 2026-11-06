import { Atom, AsyncResult } from "effect/reactivity";
import type { FileBackedComposerAttachment } from "./composerImages";
import { type AttachmentPreviewFile } from "./attachmentDownload";
/** @throws {never} */
export declare function loadLocalAttachmentPreview(attachment: FileBackedComposerAttachment, signal: AbortSignal): Promise<AttachmentPreviewFile | null>;
export declare function localAttachmentPreviewAtom(attachment: FileBackedComposerAttachment | null): Atom.Atom<AsyncResult.AsyncResult<AttachmentPreviewFile, Error>>;
export interface LocalAttachmentPreviewState {
    readonly uri: string | null;
    readonly error: Error | null;
}
export declare function localAttachmentPreviewState(result: AsyncResult.AsyncResult<AttachmentPreviewFile, Error>): LocalAttachmentPreviewState;
export declare function useLocalAttachmentPreview(attachment: FileBackedComposerAttachment | null): LocalAttachmentPreviewState;
