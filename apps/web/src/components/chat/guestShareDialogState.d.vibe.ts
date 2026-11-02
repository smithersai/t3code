import { Atom } from "effect/reactivity";
import type { ScopedThreadRef } from "@t3tools/contracts";
/**
 * Which thread has the guest share dialog open. The thread menu and the command palette both
 * close as their command runs, so the chat view renders the dialog once.
 */
export declare const guestShareDialogThreadAtom: Atom.Writable<{
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
} | null, {
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
} | null>;
export declare function openGuestShareDialog(threadRef: ScopedThreadRef): void;
