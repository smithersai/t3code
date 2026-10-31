import * as DateTime from "effect/DateTime";
import type { OrchestrationV2AppThread, OrchestrationV2Subagent, OrchestrationV2SubagentWorkflow, OrchestrationV2TurnItem } from "@t3tools/contracts";
export type RuntimeSubagentStatus = "pending" | "running" | "waiting" | "idle" | "completed" | "failed" | "cancelled" | "interrupted";
export interface SubagentUsage {
    readonly totalTokens: number;
    readonly inputTokens?: number;
    readonly cachedInputTokens?: number;
    readonly outputTokens?: number;
    readonly reasoningOutputTokens?: number;
    readonly toolUses?: number;
    readonly durationMs?: number;
}
export interface SubagentActivityEntry {
    readonly at: string;
    readonly summary: string;
}
export interface SubagentWorkflowPhase {
    readonly index: number;
    readonly title: string;
}
export interface SubagentRunHandles {
    readonly runId?: string | undefined;
    readonly scriptPath?: string | undefined;
    readonly transcriptDir?: string | undefined;
    readonly sessionUrl?: string | undefined;
}
export interface RuntimeSubagent {
    readonly id: string;
    readonly kind: "subagent" | "subagent_batch" | "workflow" | "workflow_agent";
    readonly title: string;
    readonly role: string | null;
    readonly model: string | null;
    readonly effort: string | null;
    readonly status: RuntimeSubagentStatus;
    readonly activationCount: number;
    readonly usage: SubagentUsage | null;
    readonly progress: string | null;
    readonly lastToolName: string | null;
    readonly result: string | null;
    readonly error: string | null;
    readonly outputFile: string | null;
    readonly parentAgentId: string | null;
    readonly agentIndex: number | null;
    readonly phaseIndex: number | null;
    readonly phaseTitle: string | null;
    readonly attempt: number | null;
    readonly workflowName: string | null;
    readonly phases: ReadonlyArray<SubagentWorkflowPhase>;
    readonly runHandles: SubagentRunHandles | null;
    readonly childThreadId: string | null;
    readonly recentActivity: ReadonlyArray<SubagentActivityEntry>;
    readonly firstSeenAt: string;
    readonly startedAt: string | null;
    readonly completedAt: string | null;
    readonly updatedAt: string;
}
export declare function isTerminalSubagentStatus(status: RuntimeSubagentStatus): boolean;
export declare function isActiveSubagentStatus(status: RuntimeSubagentStatus): boolean;
export declare function isLiveSubagentTurnItem(item: OrchestrationV2TurnItem): boolean;
export interface SubagentWorkflowGroup {
    readonly workflow: RuntimeSubagent;
    readonly phases: ReadonlyArray<{
        readonly index: number;
        readonly title: string;
        readonly members: ReadonlyArray<RuntimeSubagent>;
        readonly state: "pending" | "running" | "done";
        readonly settledCount: number;
    }>;
    readonly unphasedMembers: ReadonlyArray<RuntimeSubagent>;
}
export declare function projectedSubagentsToRuntime(subagents: ReadonlyArray<{
    readonly id: string;
    readonly title: string | null;
    readonly prompt: string;
    readonly model: string | null;
    readonly status: OrchestrationV2Subagent["status"];
    readonly progress?: string | undefined;
    readonly childThreadId?: string | null | undefined;
    readonly workflow?: OrchestrationV2SubagentWorkflow | undefined;
    readonly result: string | null;
    readonly startedAt: DateTime.Utc | null;
    readonly completedAt: DateTime.Utc | null;
    readonly updatedAt: DateTime.Utc;
}>): ReadonlyArray<RuntimeSubagent>;
export declare function deriveWorkflowGroups(agents: ReadonlyArray<RuntimeSubagent>): ReadonlyArray<SubagentWorkflowGroup>;
/**
 * Whether a user message is the script a provider-native workflow runs. Servers mark every
 * subagent prompt either way; only threads recorded before the mark fall back to the text.
 */
export declare function isWorkflowScriptMessage(message: {
    readonly role: string;
    readonly text: string;
    readonly workflowScript?: boolean | undefined;
}): boolean;
type ProjectedSubagent = Parameters<typeof projectedSubagentsToRuntime>[0][number] & Pick<OrchestrationV2Subagent, "driver" | "providerInstanceId">;
export interface WorkflowOpening {
    readonly messageId: string;
    readonly script: string;
    readonly name: string | null;
    readonly description: string | null;
    readonly driver: OrchestrationV2Subagent["driver"] | null;
    readonly providerInstanceId: OrchestrationV2Subagent["providerInstanceId"] | null;
    /** Null until the parent thread's coordinator row is loaded. */
    readonly group: SubagentWorkflowGroup | null;
}
/**
 * The opening of a workflow coordinator's thread: its first user message is the workflow script,
 * shown as the workflow's plan. The coordinator row lives on the parent thread, so
 * `parentSubagents` is the parent projection's subagents, or null when it is not loaded.
 */
export declare function resolveWorkflowOpening(input: {
    readonly thread: Pick<OrchestrationV2AppThread, "id" | "lineage" | "creationSource">;
    readonly messages: ReadonlyArray<{
        readonly id: string;
        readonly role: string;
        readonly text: string;
        readonly workflowScript?: boolean | undefined;
    }>;
    readonly parentSubagents: ReadonlyArray<ProjectedSubagent> | null;
}): WorkflowOpening | null;
/**
 * The parent thread whose subagent rows describe this thread's workflow, or null when the thread
 * does not open with a workflow script. Gates loading the parent so ordinary subagent threads
 * never subscribe to their parent's detail.
 */
export declare function workflowOpeningParentThreadId(input: {
    readonly thread: Pick<OrchestrationV2AppThread, "lineage" | "creationSource">;
    readonly messages: ReadonlyArray<Parameters<typeof isWorkflowScriptMessage>[0]>;
}): OrchestrationV2AppThread["id"] | null;
/** The opening block's heading: the workflow, what it does, and how its agents stand. */
export declare function workflowOpeningHeadline(opening: WorkflowOpening): {
    readonly title: string;
    readonly description: string | null;
    readonly agents: string | null;
};
export {};
