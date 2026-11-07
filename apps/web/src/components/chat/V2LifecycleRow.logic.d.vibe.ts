import type { OrchestrationV2Subagent } from "@t3tools/contracts";
/** Claude can reuse resumed agent ids. Active agents supersede outcomes; settled agents must start after notification. */
export declare function subagentResumedSince(agent: Pick<OrchestrationV2Subagent, "status" | "startedAt">, notifiedAt: string): boolean;
