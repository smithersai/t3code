import { appAtomRegistry } from "./atom-registry.vibe";
import { createThreadOutboxManager } from "./thread-outbox-manager.vibe";
import type { QueuedThreadMessage } from "./thread-outbox-model.vibe";
import { expoThreadOutboxStorage, flushThreadOutboxWrites } from "./thread-outbox-storage.vibe";

export * from "./thread-outbox-model.vibe";

export const threadOutboxManager = createThreadOutboxManager({
  registry: appAtomRegistry,
  storage: expoThreadOutboxStorage,
});

/** Drain queued mutations too; optimistic publication precedes the durable file write. */
export async function flushThreadOutbox(): Promise<void> {
  await threadOutboxManager.serialize(async () => {});
  await flushThreadOutboxWrites();
}

export function enqueueThreadOutboxMessage(message: QueuedThreadMessage): Promise<void> {
  return threadOutboxManager.enqueue(message);
}

export function confirmThreadOutboxMessageQueued(message: QueuedThreadMessage): Promise<boolean> {
  return threadOutboxManager.confirmQueued(message);
}

/** Returns false if removed or if expectedRevision differs from threadOutboxRevision; otherwise rewrites the message. */
export function updateThreadOutboxMessage(
  message: QueuedThreadMessage,
  expectedRevision?: number,
): Promise<boolean> {
  return threadOutboxManager.update(message, expectedRevision);
}

export function threadOutboxRevision(messageId: QueuedThreadMessage["messageId"]): number {
  return threadOutboxManager.revisionOf(messageId);
}

// Removal needs draft-state ownership to release files; keep that dependency outside this module.
