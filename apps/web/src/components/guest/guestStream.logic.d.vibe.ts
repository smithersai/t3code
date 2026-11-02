import { GuestStreamEvent, type GuestMessageId, type GuestShareView, type OrchestrationV2ProjectedTurnItem, type OrchestrationV2ThreadProjection, type ThreadGuestMessage } from "@t3tools/contracts";
export interface GuestStreamState {
    readonly view: GuestShareView | null;
    /** The thread as the owner's client holds it, built with the same reducer. */
    readonly projection: OrchestrationV2ThreadProjection | null;
    readonly sequence: number;
    /** Set while the snapshot is a window of a longer history, as the owner's client tracks it. */
    readonly partial: {
        readonly latestLocalTurnOrdinal: number | null;
    } | null;
    readonly ended: boolean;
    /**
     * Messages this page saw waiting that have no transcript row yet. Survives reconnects, and a
     * message leaves once its row arrives, so a later bounded snapshot cannot bring it back.
     */
    readonly awaitingRowIds: ReadonlySet<GuestMessageId>;
}
export declare const initialGuestStreamState: GuestStreamState;
/** Returns null for anything the server would never send, so a bad frame is skipped, not fatal. */
export declare const parseGuestStreamEvent: (data: string) => GuestStreamEvent | null;
/**
 * Applies the owner's thread stream the way the owner's client does (see
 * EnvironmentThreadState in client-runtime): a snapshot replaces the thread, and later events
 * pass through the same projection reducer, once each.
 */
export declare function applyGuestStreamEvent(state: GuestStreamState, event: GuestStreamEvent): GuestStreamState;
/**
 * The guest's messages to show after the transcript, oldest first. Pending ones always show. A
 * sent or dismissed one shows only while it awaits a row (see `awaitingRowIds`): a queued send, or
 * a dismissal to report. The transcript is a bounded window, so any other resolved message is old
 * history, not something to place at the end.
 */
export declare function unplacedGuestMessages(messages: ReadonlyArray<ThreadGuestMessage>, items: ReadonlyArray<OrchestrationV2ProjectedTurnItem>, awaitingRowIds: ReadonlySet<GuestMessageId>): ReadonlyArray<ThreadGuestMessage>;
/** "23h left" or "5m left", rounded down, for the guest page header. */
export declare function formatGuestExpiry(expiresAt: string, nowMs: number): string;
/**
 * The share an invite (`<shareId>.<signature>`) opens. Only used to name the share in the page
 * URL and to find this browser's session for it; the server checks the signature.
 */
export declare function inviteShareId(credential: string): string | null;
/** Where the guest page loads a file of the shared thread or of a waiting message. */
export declare const guestAttachmentUrl: (shareId: string, attachmentId: string) => string;
/**
 * Why these files cannot go with one message, or null. The server checks the same limits; this
 * only says so before the upload.
 */
export declare function guestFilesProblem(files: ReadonlyArray<Pick<File, "type" | "size">>): string | null;
/**
 * Image URLs for the thread's messages, which the timeline shows as previews. The map keeps its
 * identity while the rows do, because the timeline rebuilds its entries when it changes.
 */
export declare function createGuestAttachmentUrls(shareId: string): (items: ReadonlyArray<OrchestrationV2ProjectedTurnItem>) => ReadonlyMap<string, string>;
