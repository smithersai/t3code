import type { OrchestrationV2Subagent, OrchestrationV2ThreadProjection } from "@t3tools/contracts";
type Projection = OrchestrationV2ThreadProjection;
type Subagent = OrchestrationV2Subagent;
type RunId = Projection["runs"][number]["id"];
export interface ThreadTurnSubagents {
    readonly runId: RunId | null;
    readonly turnActive: boolean;
    /** No later turn has run since these agents' turn. */
    readonly latestTurn: boolean;
    readonly subagents: ReadonlyArray<Subagent>;
    readonly liveCount: number;
    readonly settledCount: number;
}
export interface SubagentPillSegment {
    readonly label: string;
    readonly accessibilityLabel: string;
}
export declare function deriveThreadTurnSubagents(projection: Pick<Projection, "runs" | "subagents">): ThreadTurnSubagents | null;
export declare function resolveSubagentPillSegment(turn: ThreadTurnSubagents | null): SubagentPillSegment | null;
export {};
