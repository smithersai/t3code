import { Atom } from "effect/reactivity";
import type { QueuedThreadMessage } from "./thread-outbox-model.vibe";
export declare const acknowledgedThreadMessagesAtom: Atom.Writable<readonly QueuedThreadMessage[], readonly QueuedThreadMessage[]>;
export declare function retainAcknowledgedThreadMessage(message: QueuedThreadMessage): void;
export declare function forgetAcknowledgedThreadMessage(message: QueuedThreadMessage): void;
