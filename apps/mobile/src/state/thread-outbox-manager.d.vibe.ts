import { EnvironmentId, MessageId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import { Atom, type AtomRegistry } from "effect/reactivity";
import { type QueuedThreadMessage } from "./thread-outbox-model.vibe";
import type { ThreadOutboxStorage } from "./thread-outbox-storage.vibe";
declare const ThreadOutboxManagerError_base: Schema.Class<ThreadOutboxManagerError, Schema.TaggedStruct<"ThreadOutboxManagerError", {
    readonly operation: Schema.Literals<readonly ["load", "enqueue", "update", "remove", "clear-environment-load", "clear-environment-remove"]>;
    readonly environmentId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly messageId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadOutboxManagerError extends ThreadOutboxManagerError_base {
    get message(): string;
}
export interface ThreadOutboxManagerOptions {
    readonly registry: AtomRegistry.AtomRegistry;
    readonly storage: ThreadOutboxStorage;
    /** @throws {never} */
    readonly warn?: (message: string, error: unknown) => void;
}
/** @throws {never} */
export declare function createThreadOutboxManager(options: ThreadOutboxManagerOptions): {
    queuedMessagesByThreadKeyAtom: Atom.Writable<Record<string, readonly QueuedThreadMessage[]>, Record<string, readonly QueuedThreadMessage[]>>;
    serialize: <A>(mutation: 
    /** @throws {never} */
    () => Promise<A>) => Promise<A>;
    load: () => Promise<boolean>;
    enqueue: (message: QueuedThreadMessage) => Promise<void>;
    confirmQueued: (message: QueuedThreadMessage) => Promise<boolean>;
    /** @throws {never} */
    revisionOf: (messageId: MessageId) => number;
    update: (message: QueuedThreadMessage, expectedRevision?: number) => Promise<boolean>;
    remove: (message: QueuedThreadMessage, expectedRevision?: number, canRemove?: 
    /** @throws {never} */
    () => boolean) => Promise<QueuedThreadMessage | null>;
    clearEnvironment: (environmentId: EnvironmentId) => Promise<ReadonlyArray<QueuedThreadMessage>>;
};
export {};
