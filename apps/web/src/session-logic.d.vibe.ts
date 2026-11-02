import type { ThreadStructure, ThreadStructureRuntime } from "@t3tools/client-runtime/state/shell";
import { type AssetResource, type OrchestrationV2Checkpoint, type OrchestrationV2ExecutionNode, type OrchestrationV2PlanArtifact, type OrchestrationV2ProjectedTurnItem, type OrchestrationV2RunAttempt, type OrchestrationV2TurnItem, type PlanId, type RunId, type ToolActivitySurface, type ToolActivityIcon, type ToolActivitySource, type ThreadId, type TurnItemId } from "@t3tools/contracts";
import type { HtmlRenderReference } from "@t3tools/shared/htmlRender";
import type { McpAppReference } from "@t3tools/shared/mcpApp";
import type { ThreadCheckpointSummary } from "@t3tools/client-runtime/state/thread-checkpoints";
import type { ThreadPendingApproval, ThreadPendingUserInput } from "@t3tools/client-runtime/state/thread-requests";
import type { ThreadRunSummary, ThreadRuntimeSummary } from "@t3tools/client-runtime/state/shell";
import { type ChatAttachment, type ChatMessage, type ProposedPlan, type SessionPhase, type TurnDiffSummary } from "./types.ts";
export { formatDuration } from "@t3tools/shared/orchestrationTiming";
export { workEntryDisplayIndicatesToolFailure, workEntryIndicatesToolFailure, } from "@t3tools/client-runtime/work-log/presentation";
export type WorkLogToolLifecycleStatus = "idle" | "inProgress" | "completed" | "failed" | "declined" | "stopped";
export interface WorkLogEntry {
    readonly questionAnswer?: import("@t3tools/contracts").UserInputAttachmentAnswerPayload;
    readonly id: string;
    readonly createdAt: string;
    readonly runId?: RunId | null;
    readonly label: string;
    readonly detail?: string;
    readonly command?: string;
    readonly rawCommand?: string;
    readonly changedFiles?: ReadonlyArray<string>;
    readonly tone: "thinking" | "tool" | "info" | "error";
    readonly toolTitle?: string;
    readonly toolCallId?: string;
    readonly viewedImagePath?: string;
    readonly toolSurface?: ToolActivitySurface;
    readonly toolIcon?: ToolActivityIcon;
    readonly toolSource?: ToolActivitySource;
    readonly sourceActivityKind?: string;
    readonly taskId?: string;
    readonly agentRole?: string;
    readonly toolData?: unknown;
    readonly requestKind?: string;
    readonly itemType?: OrchestrationV2TurnItem["type"];
    readonly toolLifecycleStatus?: WorkLogToolLifecycleStatus;
    readonly structuredPayload?: OrchestrationV2TurnItem;
    readonly sourceItemType?: OrchestrationV2TurnItem["type"];
    readonly projectedItem?: OrchestrationV2ProjectedTurnItem;
}
export type PendingApproval = ThreadPendingApproval;
export type PendingUserInput = ThreadPendingUserInput;
export interface LatestProposedPlanState {
    readonly id: PlanId;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly runId: RunId | null;
    readonly planMarkdown: string;
    readonly status: OrchestrationV2PlanArtifact["status"];
}
export type TimelineAttempt = Pick<OrchestrationV2RunAttempt, "id" | "runId" | "attemptOrdinal" | "rootNodeId" | "status" | "completedAt">;
export type TimelineEntry = ({
    readonly id: string;
    readonly kind: "message";
    readonly createdAt: string;
    readonly message: ChatMessage;
    readonly projectedItem?: OrchestrationV2ProjectedTurnItem;
} | {
    readonly id: string;
    readonly kind: "proposed-plan";
    readonly createdAt: string;
    readonly proposedPlan: ProposedPlan;
} | {
    readonly id: string;
    readonly kind: "html-render";
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly htmlRender: HtmlRenderReference;
} | {
    readonly id: string;
    readonly kind: "mcp-app";
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly sourceThreadId: ThreadId;
    readonly itemId: TurnItemId;
    readonly revision: string;
    readonly mcpApp: McpAppReference;
} | {
    readonly id: string;
    readonly kind: "work";
    readonly createdAt: string;
    readonly entry: WorkLogEntry;
} | {
    readonly id: string;
    readonly kind: "event";
    readonly createdAt: string;
    readonly projectedItem: OrchestrationV2ProjectedTurnItem;
}) & {
    readonly attempt?: TimelineAttempt;
};
export declare function workLogEntryIsToolLike(entry: WorkLogEntry): boolean;
export declare function workEntrySignalsSevereFailure(entry: WorkLogEntry): boolean;
export declare function workEntryIndicatesToolSuccess(entry: WorkLogEntry): boolean;
export declare function workEntryIndicatesToolNeutralStatus(entry: WorkLogEntry): boolean;
export declare function isLatestRunSettled(latestRun: Pick<ThreadRunSummary, "runId" | "startedAt" | "completedAt" | "status"> | null, runtime: Pick<ThreadRuntimeSummary, "status" | "activeRunId"> | null): boolean;
export declare function deriveActiveWorkStartedAt(latestRun: Pick<ThreadRunSummary, "runId" | "startedAt" | "requestedAt" | "completedAt" | "status"> | null, runtime: Pick<ThreadRuntimeSummary, "status" | "activeRunId" | "activityStartedAt"> | null, sendStartedAt: string | null): string | null;
export declare function derivePendingApprovals(approvals: ReadonlyArray<ThreadPendingApproval>): ThreadPendingApproval[];
export declare function derivePendingUserInputs(inputs: ReadonlyArray<ThreadPendingUserInput>): ThreadPendingUserInput[];
export declare function findLatestProposedPlan(projection: ThreadStructure | null, latestRunId: RunId | string | null | undefined): LatestProposedPlanState | null;
export declare function hasActionableProposedPlan(plan: LatestProposedPlanState | null): boolean;
export declare function timelineEntryIsPersistentResourceCard(entry: TimelineEntry): boolean;
export declare function providerErrorPresentation(item: Extract<OrchestrationV2TurnItem, {
    readonly type: "error";
}>): {
    readonly label: string;
    readonly detail: string;
};
/** Preserve visibleTurnItems' committed order; interleave client messages by timestamp. */
export interface TimelineEntriesInput {
    readonly visibleTurnItems: ReadonlyArray<OrchestrationV2ProjectedTurnItem>;
    readonly optimisticMessages: ReadonlyArray<ChatMessage>;
    readonly anchoredMessages?: ReadonlyArray<ChatMessage>;
    readonly attachmentUrlById?: ReadonlyMap<string, string>;
    readonly attempts?: ReadonlyArray<OrchestrationV2RunAttempt>;
    readonly nodes?: ReadonlyArray<OrchestrationV2ExecutionNode>;
    readonly plans?: ReadonlyArray<OrchestrationV2PlanArtifact>;
}
export interface TimelineEntriesProjection {
    readonly input: TimelineEntriesInput;
    readonly entries: TimelineEntry[];
}
export declare function deriveTimelineEntriesFromVisibleTurnItems(input: TimelineEntriesInput): TimelineEntry[];
type AttachmentResource = Extract<AssetResource, {
    readonly _tag: "attachment";
}>;
export declare function selectMessageImageResources(attachments: ChatMessage["attachments"]): ReadonlyArray<AttachmentResource>;
export declare function selectHandoffImageResources(messages: ReadonlyArray<Pick<ChatMessage, "id" | "role" | "attachments">> | undefined, handoffs: Readonly<Record<string, ReadonlyArray<string>>>): ReadonlyArray<AttachmentResource>;
export declare function createMessageAttachmentPreviewProjector(): (message: ChatMessage, previewUrlFor: (attachment: ChatAttachment) => string | undefined) => ChatMessage;
export declare function isStreamingMessageTextUpdate(previous: ChatMessage, next: ChatMessage): boolean;
export declare function isStreamingTurnItemTextUpdate(previous: OrchestrationV2ProjectedTurnItem, next: OrchestrationV2ProjectedTurnItem): boolean;
export declare function deriveTimelineEntriesFromVisibleTurnItemsWithState(input: TimelineEntriesInput, previous?: TimelineEntriesProjection | null): TimelineEntriesProjection;
export declare function deriveRevertTurnCountByUserMessageId(input: {
    readonly timelineEntries: ReadonlyArray<TimelineEntry>;
    readonly checkpoints: ReadonlyArray<ThreadCheckpointSummary>;
    readonly threadStartCheckpointReady: boolean;
    readonly availableRevertTurnCounts?: ReadonlySet<number> | undefined;
    readonly unsettledRunId?: RunId | null;
}): Map<ChatMessage["id"], number>;
export declare function findRevertCheckpoint(checkpoints: ReadonlyArray<OrchestrationV2Checkpoint>, turnCount: number): OrchestrationV2Checkpoint | undefined;
export declare function derivePhase(runtime: ThreadStructureRuntime | null): SessionPhase;
/** Preparing and starting runs can be interrupted; Stop need not wait for running. */
export declare function deriveCanInterruptRunningThread(hasActiveThread: boolean, runtime: ThreadStructureRuntime | null): boolean;
export type { TurnDiffSummary };
