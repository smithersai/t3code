import { type ScopedThreadRef } from "@t3tools/contracts";
import { type ChatFileAttachment } from "../../types";
import { type ExpandedImagePreview } from "./ExpandedImagePreview";
/** @throws {never} */
export declare function GuestShareDialogHost(): import("react").JSX.Element | null;
/**
 * Header status for a shared thread, with the way to end the share.
 * @throws {never}
 */
export declare function GuestShareIndicator({ threadRef }: {
    readonly threadRef: ScopedThreadRef;
}): import("react").JSX.Element | null;
/**
 * A guest's messages wait at the end of the timeline until the owner sends or dismisses each one.
 * Sent ones then show in the timeline as normal user messages with the guest's name.
 * @throws {never}
 */
export declare function GuestPendingMessages({ threadRef, onImageExpand, onFileOpen, }: {
    readonly threadRef: ScopedThreadRef;
    /** @throws {never} */
    readonly onImageExpand: (preview: ExpandedImagePreview) => void;
    /** @throws {never} */
    readonly onFileOpen: (attachment: ChatFileAttachment) => void;
}): import("react").JSX.Element | null;
