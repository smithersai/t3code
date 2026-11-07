import type { OrchestrationV2Subagent } from "@t3tools/contracts";
export declare function subagentCardDetail(detail: string | null): string | null;
export declare function subagentCardElapsed(agents: ReadonlyArray<Pick<OrchestrationV2Subagent, "status" | "startedAt" | "completedAt">>, nowMs: number): string | null;
