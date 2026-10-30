import { type CheckpointId, type MessageId, type NodeId, type OrchestrationV2Checkpoint, type OrchestrationV2Subagent, type OrchestrationV2ThreadProjection, type OrchestrationV2TurnItem } from "@t3tools/contracts";
/**
 * For clients that opt in, the server blanks a turn item's body that its record already carries
 * (message text, checkpoint files, a subagent's prompt and result) and marks the field. The client
 * copies the value back from the record. Only a body equal to the record's is blanked, so the
 * restore is exact.
 */
export interface DedupedBodySource {
    readonly messageText: (id: MessageId) => string | undefined;
    readonly checkpointFiles: (id: CheckpointId) => OrchestrationV2Checkpoint["files"] | undefined;
    readonly subagent: (id: NodeId) => WithSubagentBodies | undefined;
}
type SubagentBodies = Pick<OrchestrationV2Subagent, "prompt" | "result">;
type WithSubagentBodies = SubagentBodies & {
    readonly promptOmitted?: true;
    readonly resultOmitted?: true;
};
/** For subagent items and for a repeated `subagent.updated`, whose `previous` was sent earlier. */
export declare function dedupeSubagentBodies<T extends WithSubagentBodies>(value: T, previous: SubagentBodies | undefined): T;
/**
 * A marked body whose record is missing, or whose record field is itself still marked, stays
 * blank and marked; the server only blanks bodies it sent, so either means a server bug.
 */
export declare function restoreSubagentBodies<T extends WithSubagentBodies>(value: T, previous: WithSubagentBodies | undefined): T;
export declare function dedupeTurnItemBodies(item: OrchestrationV2TurnItem, source: DedupedBodySource): OrchestrationV2TurnItem;
export declare function restoreTurnItemBodies(item: OrchestrationV2TurnItem, source: DedupedBodySource): OrchestrationV2TurnItem;
export declare function dedupeSnapshotBodies(projection: OrchestrationV2ThreadProjection): OrchestrationV2ThreadProjection;
/** Call on every decoded snapshot before reducers or caches see it. */
export declare function restoreSnapshotBodies(projection: OrchestrationV2ThreadProjection): OrchestrationV2ThreadProjection;
export {};
