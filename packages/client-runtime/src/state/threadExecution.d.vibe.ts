import { type ModelSelection, type OrchestrationV2ExecutionNode, type OrchestrationV2NotificationSource, type OrchestrationV2PendingBackgroundTask, type OrchestrationV2ProviderGoal, type OrchestrationV2ThreadProjection, type ServerProviderModel, type ThreadId } from "@t3tools/contracts";
import { type ThreadRunSummary, type ThreadRuntimeSummary, type ThreadStructure, type ThreadStructureRuntime } from "./models.vibe";
export declare function deriveLatestThreadRun(projection: ThreadStructure): ThreadRunSummary | null;
export declare function deriveThreadActivityRun(projection: ThreadStructure): ThreadRunSummary | null;
/**
 * Provider-native subagent threads never get app runs: their work is a runless
 * root turn whose status follows the subagent.
 */
export declare function deriveRunlessWorkStartedAt(projection: ThreadStructure): string | null;
export interface ProviderSubagentStatus {
    readonly status: OrchestrationV2ExecutionNode["status"];
    readonly startedAt: string | null;
    readonly completedAt: string | null;
}
export declare function deriveProviderSubagentStatus(projection: ThreadStructure): ProviderSubagentStatus | null;
export declare function deriveReportedModelSelection(projection: ThreadStructure): ModelSelection | null;
export declare const REASONING_EFFORT_OPTION_IDS: ReadonlyArray<string>;
export declare function formatModelSelectionEffort(selection: ModelSelection, models?: ReadonlyArray<ServerProviderModel>, reportedSelection?: ModelSelection | null): string | null;
export declare function formatProviderSubagentStatus(status: ProviderSubagentStatus | null, nowMs: number): string;
export declare function deriveThreadRuntime(projection: ThreadStructure & Pick<OrchestrationV2ThreadProjection, "updatedAt">): ThreadRuntimeSummary | null;
/** The runtime summary a thread's structure determines: all of it but `updatedAt`. */
export declare function deriveThreadStructureRuntime(projection: ThreadStructure): ThreadStructureRuntime | null;
export declare function threadRuntimeHasInterruptibleRun(runtime: ThreadStructureRuntime | null | undefined): boolean;
type BackgroundWorkKind = OrchestrationV2PendingBackgroundTask["kind"];
export interface PendingBackgroundWorkItem {
    readonly taskId: string;
    readonly kind: BackgroundWorkKind;
    readonly label: string;
    readonly childThreadId: ThreadId | undefined;
}
export interface PendingBackgroundWorkPresentation {
    readonly title: string;
    readonly items: ReadonlyArray<PendingBackgroundWorkItem>;
    readonly waiting: boolean;
}
export declare function presentPendingBackgroundWork(tasks: ReadonlyArray<OrchestrationV2PendingBackgroundTask>): PendingBackgroundWorkPresentation | null;
export interface ProviderGoalPresentation {
    readonly title: string;
    readonly objective: string;
    readonly usage: string | null;
    readonly canResume: boolean;
}
export declare function presentProviderGoal(goal: OrchestrationV2ProviderGoal, working: boolean): ProviderGoalPresentation;
export declare function notificationChildThreadId(source: OrchestrationV2NotificationSource): ThreadId | undefined;
export {};
