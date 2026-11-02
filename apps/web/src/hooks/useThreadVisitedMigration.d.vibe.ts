import type { AtomRegistry } from "effect/reactivity";
/**
 * Hands visit times recorded locally (before servers tracked visits) to each
 * server once. Subscribed outside render: it only acts on threads it has not
 * seen, so a shell update must not re-render anything.
 */
export declare function startThreadVisitedMigration(registry: AtomRegistry.AtomRegistry): () => void;
