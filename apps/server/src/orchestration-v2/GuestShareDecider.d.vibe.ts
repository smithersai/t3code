import { type GuestMessageAttribution, type GuestMessageId, type OrchestrationMessageContext, type OrchestrationV2AppThread, type OrchestrationV2ServerCommand, type ThreadGuestShare } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Result from "effect/Result";
export type GuestShareCommand = Extract<OrchestrationV2ServerCommand, {
    readonly type: "thread.guest-share.open" | "thread.guest-share.redeem" | "thread.guest-share.close" | "thread.guest-message.submit" | "thread.guest-message.dismiss";
}>;
/** Failures a guest may be told about. Any other dispatch failure reaches them as "rejected". */
export declare const GUEST_FAILURE: {
    readonly inactive: "This guest link is no longer active.";
    readonly used: "This guest link was already used.";
    readonly busy: "Wait for the owner to answer your earlier messages.";
    readonly filesBusy: "Wait for the owner to answer your earlier messages before you attach more files.";
};
/**
 * Stored files a share change leaves behind: those of waiting messages that were dismissed or
 * dropped with the share. A sent message keeps its files, which its thread message now holds.
 * @throws {never}
 */
export declare function releasedGuestAttachmentIds(before: ThreadGuestShare | null, after: ThreadGuestShare | null): ReadonlyArray<string>;
/**
 * Applies a guest share command to the thread. The orchestrator runs commands one at a time, so
 * checking state here is what makes a link redeem once and a message send once.
 * @throws {never}
 */
export declare function decideGuestShareCommand(input: {
    readonly thread: OrchestrationV2AppThread;
    readonly command: GuestShareCommand;
    readonly now: DateTime.Utc;
}): Result.Result<OrchestrationV2AppThread, string>;
/**
 * Marks a guest message sent. `text` is what the agent receives: it names the guest so the agent
 * does not mistake it for the owner's words, and so a guest cannot start a slash command.
 * `guest` lets clients show the guest's own text with their name beside it.
 * @throws {never}
 */
export declare function decideGuestMessageSend(input: {
    readonly thread: OrchestrationV2AppThread;
    readonly guestMessageId: GuestMessageId;
    readonly now: DateTime.Utc;
}): Result.Result<{
    readonly thread: OrchestrationV2AppThread;
    readonly text: string;
    readonly guest: GuestMessageAttribution;
}, string>;
/**
 * The owner cancelled a queued send, so the agent never got the message. It shows as dismissed,
 * which the guest can see, instead of sent with no reply ever coming. A share that changed since
 * the send is left alone.
 * @throws {never}
 */
export declare function guestShareAfterCancelledSend(thread: OrchestrationV2AppThread, guest: Pick<GuestMessageAttribution, "guestMessageId" | "shareId">, now: DateTime.Utc): OrchestrationV2AppThread;
/**
 * Guest attribution comes only from `decideGuestMessageSend`; a client cannot claim it.
 * @throws {never}
 */
export declare function withoutGuestAttribution<C extends {
    readonly context?: OrchestrationMessageContext | undefined;
}>(command: C): C;
