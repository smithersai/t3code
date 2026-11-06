import type { EnvironmentShellStatus } from "@t3tools/client-runtime/state/shell";
import type { MessageId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare const threadOutboxShellStatusesAtom: Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, EnvironmentShellStatus>>;
/** Do not deliver tasks still open in an editor or whose latest edits failed to save; their queued payloads are stale. */
export declare const editingQueuedMessageIdsAtom: Atom.Writable<Readonly<Record<string & import("effect/Brand").Brand<"MessageId">, true>>, Readonly<Record<string & import("effect/Brand").Brand<"MessageId">, true>>>;
export declare const dispatchingQueuedMessageIdAtom: Atom.Writable<(string & import("effect/Brand").Brand<"MessageId">) | null, (string & import("effect/Brand").Brand<"MessageId">) | null>;
export declare function holdEditingQueuedMessage(messageId: MessageId): void;
export declare function releaseEditingQueuedMessage(messageId: MessageId): void;
export declare function useThreadOutboxMessages(): Record<string, readonly import("./thread-outbox-model.vibe").QueuedThreadMessage[]>;
export declare const queuedThreadKeysAtom: Atom.Atom<ReadonlySet<string>>;
export declare function useQueuedThreadKeys(): ReadonlySet<string>;
