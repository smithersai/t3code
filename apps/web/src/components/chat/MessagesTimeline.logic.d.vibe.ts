export { worktreeSetupAgentStarted } from "@t3tools/client-runtime/worktree-setup";
import type { HandoffTimelineRun } from "@t3tools/client-runtime/handoff";
import { contextCompactionTokenCounts, type ToolGroupSummaryKind } from "@t3tools/client-runtime/work-log/presentation";
export { toolGroupAction } from "@t3tools/client-runtime/work-log/presentation";
import { type TimelineEntry, type WorkLogEntry } from "../../session-logic.vibe";
import { type ChatMessage, type ProposedPlan, type ThreadShell, type TurnDiffSummary } from "../../types.ts";
import { type WorktreeSetupSnapshot, type OrchestrationV2ProjectedTurnItem, type RunAttemptId, RunId, type ThreadId, type TurnItemId } from "@t3tools/contracts";
import type { ThreadRunSummary } from "@t3tools/client-runtime/state/shell";
import { type T3McpToolPresentation } from "@t3tools/shared/t3McpToolPresentation";
import { type HtmlRenderReference } from "@t3tools/shared/htmlRender";
import { type McpAppReference } from "@t3tools/shared/mcpApp";
export declare function workEntryDisplayLabel(entry: WorkLogEntry, workspaceRoot: string | undefined): string;
export declare function threadReadTargetId(entry: Pick<WorkLogEntry, "structuredPayload">): string | null;
export declare function threadReadTargetTitle(shell: Pick<ThreadShell, "title" | "archivedAt" | "deletedAt"> | null): string | null;
export declare function threadReadLabelPrefix(label: string): string | null;
export declare function workEntryReadOutput(entry: Pick<WorkLogEntry, "changedFiles" | "detail" | "viewedImagePath" | "structuredPayload" | "toolData">, workspaceRoot: string | undefined): string | null;
export declare function liveWorkEntryLabel(entry: WorkLogEntry, workspaceRoot: string | undefined, active: boolean): string;
export declare function workEntryIsVisibleInGroup(entry: WorkLogEntry, expandedToolGroupEntry?: boolean): boolean;
export declare const TIMELINE_MINIMAP_MIN_ITEMS = 2;
export interface WorkGroupScrollAnchor {
    readonly entryId: string;
    readonly offset: number;
}
export declare function resolveWorkGroupScrollIndex(entries: ReadonlyArray<{
    readonly id: string;
}>, anchor: WorkGroupScrollAnchor | undefined): {
    index: number;
    viewOffset: number;
} | undefined;
export declare function shouldFollowWorkGroupAppend(previous: ReadonlyArray<{
    readonly id: string;
}>, entries: ReadonlyArray<{
    readonly id: string;
}>, distanceFromEnd: number): boolean;
export interface TimelineEndState {
    readonly isAtEnd?: boolean;
    readonly isNearEnd?: boolean;
    readonly contentLength?: number;
    readonly scroll?: number;
    readonly scrollLength?: number;
}
export declare function resolveTimelineIsAtEnd(state: TimelineEndState | undefined): boolean | undefined;
export declare function resolveTimelineMinimapHeightStyle(itemCount: number): string;
export declare function resolveTimelineMinimapTopPercent(index: number, itemCount: number): number;
export declare function resolveTimelineMinimapIndexFromPointer(input: {
    readonly itemCount: number;
    readonly railTop: number;
    readonly railHeight: number;
    readonly pointerY: number;
}): number | null;
/** Recheck the rendered buffer: LegendList's unbuffered range can lag during scrolling. */
export declare function resolveTimelineMinimapVisibleRange(state: {
    readonly startBuffered: number | null | undefined;
    readonly endBuffered: number | null | undefined;
    readonly scroll: number;
    readonly scrollLength: number;
    readonly positionAtIndex: (index: number) => number | undefined;
    readonly sizeAtIndex: (index: number) => number | undefined;
}): {
    start: number | null;
    end: number | null;
};
export declare function isTimelineMinimapRowVisible(rowIndex: number, visibleStart: number | null | undefined, visibleEnd: number | null | undefined): boolean;
export declare function resolveTimelineMinimapCurrentIndex(input: {
    readonly visibleStart: number | null | undefined;
    readonly visibleEnd: number | null | undefined;
    readonly rowIndices: ReadonlyArray<number>;
}): number | null;
export declare function resolveTimelineMinimapHasPersistentGutter(viewportWidth: number, contentWidth: number): boolean;
export declare function resolveTimelineMinimapHitStripWidth(viewportWidth: number, contentWidth: number): number;
export declare function resolveTimelineMinimapNavigationInteractive(collapsedWidth: number): boolean;
export declare function resolveTimelineMinimapInteractiveWidth(collapsedWidth: number, expanded: boolean): number | string;
export interface TimelineDurationMessage {
    id: string;
    role: "user" | "assistant" | "system";
    createdAt: string;
    updatedAt: string;
    streaming: boolean;
}
export type TimelineLatestRun = Pick<ThreadRunSummary, "runId" | "status" | "startedAt" | "completedAt" | "turnEnded">;
export type MessagesTimelineRow = MessagesTimelineRowContent & {
    readonly continuesWorkLog?: boolean;
};
type MessagesTimelineRowContent = {
    kind: "worktree-setup";
    id: string;
    createdAt: string | null;
    snapshot: WorktreeSetupSnapshot;
    embedded: boolean;
} | {
    kind: "work";
    id: string;
    createdAt: string;
    groupedEntries: WorkLogEntry[];
    isExpandedToolGroup: boolean;
    displayLabel?: string;
} | {
    kind: "work-live";
    id: string;
    createdAt: string;
    entry: WorkLogEntry;
    groupedEntries: WorkLogEntry[];
    groupId: string;
    expanded: boolean;
    active: boolean;
    thought?: WorkLogEntry;
} | {
    kind: "working";
    id: string;
    createdAt: string | null;
    /** A running compaction owns the working row, so its divider appears only once it ends. */
    compacting?: string;
} | {
    kind: "thinking";
    id: string;
    createdAt: string | null;
    groupId?: string;
    expanded?: boolean;
} | {
    kind: "work-toggle";
    id: string;
    createdAt: string;
    runId?: RunId | null;
    groupId: string;
    hiddenCount: number;
    expanded: boolean;
    summary: string;
    summaryKind: ToolGroupSummaryKind;
    toolSurface?: WorkLogEntry["toolSurface"];
    toolIcon?: WorkLogEntry["toolIcon"];
    summaryToolIcon?: "browser" | "device" | "t3-code" | "pull-request";
    hasFailure: boolean;
} | {
    kind: "turn-fold";
    id: string;
    createdAt: string;
    runId: RunId;
    label: string;
    expanded: boolean;
} | {
    kind: "attempt-fold";
    id: string;
    createdAt: string;
    runId: RunId;
    attemptId: RunAttemptId;
    label: string;
    expanded: boolean;
} | {
    kind: "context-compaction";
    id: string;
    createdAt: string;
    label: string;
    tokenCounts: ReturnType<typeof contextCompactionTokenCounts>;
    active: boolean;
    /** Replaces "Context compacted" when T3 Code compacted without being asked. */
    title?: string;
    failed?: true;
    /** The provider's reason, when a failed compaction gave one. */
    failure?: string;
} | {
    kind: "message";
    id: string;
    createdAt: string;
    message: ChatMessage;
    projectedItem?: OrchestrationV2ProjectedTurnItem;
    durationStart: string;
    showAssistantMeta: boolean;
    showAssistantCopyButton: boolean;
    assistantCopyStreaming: boolean;
    assistantTurnDiffSummary?: TurnDiffSummary | undefined;
    revertTurnCount?: number | undefined;
} | {
    kind: "assistant-meta";
    projectedItem?: OrchestrationV2ProjectedTurnItem;
    id: string;
    createdAt: string;
    message: ChatMessage;
    showAssistantCopyButton: boolean;
    assistantCopyStreaming: boolean;
} | {
    kind: "event";
    id: string;
    createdAt: string;
    projectedItem: OrchestrationV2ProjectedTurnItem;
    subagents?: ReadonlyArray<OrchestrationV2ProjectedTurnItem>;
    resourceSummary?: boolean;
} | {
    kind: "proposed-plan";
    id: string;
    createdAt: string;
    proposedPlan: ProposedPlan;
} | {
    kind: "html-render";
    id: string;
    createdAt: string;
    htmlRender: HtmlRenderReference;
} | {
    kind: "mcp-app";
    id: string;
    createdAt: string;
    sourceThreadId: ThreadId;
    itemId: TurnItemId;
    revision: string;
    mcpApp: McpAppReference;
};
export interface StableMessagesTimelineRowsState {
    byId: Map<string, MessagesTimelineRow>;
    result: MessagesTimelineRow[];
}
export declare function computeMessageDurationStart(messages: ReadonlyArray<TimelineDurationMessage>): Map<string, string>;
export type TimelineToolPresentation = T3McpToolPresentation;
export declare function resolveAssistantMessageCopyState({ text, showCopyButton, streaming, }: {
    text: string | null;
    showCopyButton: boolean;
    streaming: boolean;
}): {
    text: string | null;
    visible: boolean;
};
export declare function deriveMessagesTimelineRows(input: {
    timelineEntries: ReadonlyArray<TimelineEntry>;
    latestRun?: TimelineLatestRun | null;
    runningRunId?: RunId | null;
    expandedRunIds?: ReadonlySet<RunId>;
    expandedAttemptIds?: ReadonlySet<RunAttemptId>;
    expandedWorkGroupIds?: ReadonlySet<string>;
    isWorking: boolean;
    /** Native subagent work has no app run; runless entries form the live response. */
    runlessWorkActive?: boolean;
    activeTurnStartedAt?: string | null;
    turnDiffSummaries: ReadonlyArray<TurnDiffSummary>;
    supportsConversationRollback: boolean;
    threadStartCheckpointReady?: boolean;
    availableRevertTurnCounts?: ReadonlySet<number> | undefined;
    liveAgentTaskIds?: ReadonlySet<string> | undefined;
    worktreeSetup?: WorktreeSetupSnapshot | null;
}): MessagesTimelineRow[];
export type MessagesTimelineRowsInput = Parameters<typeof deriveMessagesTimelineRows>[0];
export interface MessagesTimelineRowsProjection {
    readonly input: MessagesTimelineRowsInput;
    readonly rows: MessagesTimelineRow[];
}
/**
 * Runless (imported V1) turns and work after a steer fold under synthetic
 * keys, so the entry's own run id is not enough to open them.
 */
export declare function timelineEntryTurnFoldRunId(input: Pick<MessagesTimelineRowsInput, "timelineEntries" | "latestRun" | "isWorking" | "runlessWorkActive" | "runningRunId">, entryId: string): RunId | null;
export declare function timelineTurnFoldRunIdsByEntryId(input: Pick<MessagesTimelineRowsInput, "timelineEntries" | "latestRun" | "isWorking" | "runlessWorkActive" | "runningRunId">): ReadonlyMap<string, RunId>;
export declare function deriveMessagesTimelineRowsWithState(input: MessagesTimelineRowsInput, previous?: MessagesTimelineRowsProjection | null): MessagesTimelineRowsProjection;
export declare function computeStableMessagesTimelineRows(rows: MessagesTimelineRow[], previous: StableMessagesTimelineRowsState): StableMessagesTimelineRowsState;
export declare function shouldCollapseUserMessage(text: string): boolean;
export declare function handoffRunsSignature(runs: ReadonlyArray<HandoffTimelineRun>): string;
export declare function sameRowsInput(left: MessagesTimelineRowsInput, right: MessagesTimelineRowsInput): boolean;
