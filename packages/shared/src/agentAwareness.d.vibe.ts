import type { EnvironmentId, OrchestrationV2ThreadShell, Project, ThreadId } from "@t3tools/contracts";
export type AgentAwarenessPhase = "starting" | "running" | "waiting_for_approval" | "waiting_for_input" | "completed" | "failed" | "stale";
export interface AgentAwarenessState {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly projectTitle: string;
    readonly threadTitle: string;
    readonly phase: AgentAwarenessPhase;
    readonly headline: string;
    readonly detail?: string;
    readonly modelTitle: string;
    readonly updatedAt: string;
    readonly deepLink: string;
}
export interface ProjectThreadAwarenessV2Input {
    readonly environmentId: EnvironmentId;
    readonly project: Pick<Project, "title">;
    readonly thread: Pick<OrchestrationV2ThreadShell, "activityRunStatus" | "id" | "lineage" | "latestRunStopRequested" | "modelSelection" | "pendingBackgroundTasks" | "pendingRuntimeRequest" | "settledOverride" | "status" | "title" | "updatedAt">;
}
export declare function projectThreadAwarenessV2(input: ProjectThreadAwarenessV2Input): AgentAwarenessState | null;
