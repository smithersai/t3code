import { type OrchestrationV2ThreadProjection, type OrchestrationV2ThreadShell, type ThreadId } from "@t3tools/contracts";
export type ThreadRelationshipKind = "parent" | "fork" | "subagent" | "transfer";
export interface ThreadRelationshipNode {
    readonly threadId: ThreadId;
    readonly thread: OrchestrationV2ThreadShell | null;
    readonly missing: boolean;
}
export interface ThreadRelationshipEdge {
    readonly sourceThreadId: ThreadId;
    readonly targetThreadId: ThreadId;
    readonly kind: ThreadRelationshipKind;
    readonly status: string | null;
}
export interface ThreadRelationshipGraph {
    readonly nodes: ReadonlyMap<ThreadId, ThreadRelationshipNode>;
    readonly edges: ReadonlyArray<ThreadRelationshipEdge>;
}
export interface ThreadRelationshipWalkRow {
    readonly threadId: ThreadId;
    readonly fromThreadId: ThreadId;
    readonly depth: number;
    readonly edge: ThreadRelationshipEdge;
}
export declare function resolveMergeBackTargetThreadId(projection: Pick<OrchestrationV2ThreadProjection, "thread"> | null): ThreadId | null;
export declare function deriveThreadRelationshipGraph(input: {
    readonly threads: ReadonlyArray<OrchestrationV2ThreadShell>;
    readonly projection: OrchestrationV2ThreadProjection | null;
}): ThreadRelationshipGraph;
export declare function relatedThreadIds(graph: ThreadRelationshipGraph, threadId: ThreadId): ReadonlyArray<ThreadId>;
export declare function walkThreadRelationships(graph: ThreadRelationshipGraph, threadId: ThreadId): ReadonlyArray<ThreadRelationshipWalkRow>;
export declare function immediateThreadRelationships(graph: ThreadRelationshipGraph, threadId: ThreadId): ReadonlyArray<ThreadRelationshipWalkRow>;
export declare function isParentThreadRelationship(edge: ThreadRelationshipEdge, currentThreadId: ThreadId): boolean;
export declare function threadRelationshipRowStatus(graph: ThreadRelationshipGraph, row: Pick<ThreadRelationshipWalkRow, "threadId" | "edge">): string | null;
/**
 * Web pins the parent and distinct merge-back target before newest-created-first ordering.
 * Mobile does not share this exception; do not reuse it as the canonical relationship order.
 */
export declare function orderWebThreadLineageRows(input: {
    readonly graph: ThreadRelationshipGraph;
    readonly rows: ReadonlyArray<ThreadRelationshipWalkRow>;
    readonly currentThreadId: ThreadId;
    readonly mergeTargetThreadId: ThreadId | null;
}): ReadonlyArray<ThreadRelationshipWalkRow>;
