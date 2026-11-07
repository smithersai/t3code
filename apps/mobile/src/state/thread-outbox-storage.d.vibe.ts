import * as Schema from "effect/Schema";
import { type QueuedThreadMessage } from "./thread-outbox-model.vibe";
/**
 * Waits for in-flight writes before app-update restart.
 * @throws {never}
 */
export declare function flushThreadOutboxWrites(): Promise<void>;
declare const ThreadOutboxStorageError_base: Schema.Class<ThreadOutboxStorageError, Schema.TaggedStruct<"ThreadOutboxStorageError", {
    readonly operation: Schema.Literals<readonly ["load", "read-message", "write", "remove"]>;
    readonly environmentId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly messageId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">>;
    readonly fileName: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadOutboxStorageError extends ThreadOutboxStorageError_base {
    get message(): string;
}
export interface ThreadOutboxLoadResult {
    readonly messages: ReadonlyArray<QueuedThreadMessage>;
    readonly errors: ReadonlyArray<ThreadOutboxStorageError>;
}
export interface ThreadOutboxStorage {
    readonly load: () => Promise<ThreadOutboxLoadResult>;
    readonly write: (message: QueuedThreadMessage) => Promise<void>;
    readonly remove: (message: QueuedThreadMessage) => Promise<void>;
}
export declare const expoThreadOutboxStorage: ThreadOutboxStorage;
export {};
