import type { CheckpointId, CheckpointRef, CheckpointScopeId, MessageId, OrchestrationV2ThreadProjection, RunId } from "@t3tools/contracts";
export interface ThreadCheckpointSummary {
    readonly checkpointId?: CheckpointId;
    readonly scopeId?: CheckpointScopeId;
    readonly runId: RunId;
    readonly checkpointTurnCount: number;
    readonly checkpointRef: CheckpointRef;
    readonly status: "ready" | "missing" | "error" | "stale";
    readonly files: ReadonlyArray<{
        readonly path: string;
        readonly kind: string;
        readonly additions: number;
        readonly deletions: number;
    }>;
    readonly assistantMessageId: MessageId | null;
    readonly completedAt: string;
}
export declare function deriveThreadCheckpointSummaries(projection: Pick<OrchestrationV2ThreadProjection, "checkpoints" | "messages">): ReadonlyArray<ThreadCheckpointSummary>;
