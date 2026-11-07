import type { ThreadPendingApproval, ThreadPendingUserInput, ThreadUserInputQuestion } from "@t3tools/client-runtime/state/thread-requests";
import type { ThreadCheckpointSummary } from "@t3tools/client-runtime/state/thread-checkpoints";
import { type ToolGroupSummaryKind, type WorkLogPresentationEntry, type WorkLogToolLifecycleStatus } from "@t3tools/client-runtime/work-log/presentation";
import { type T3McpToolLogo } from "@t3tools/shared/t3McpToolPresentation";
import type { ChatAttachment, MessageId, OrchestrationV2Actor, OrchestrationV2CreationSource, OrchestrationV2ExecutionNode, OrchestrationMessageContext, OrchestrationV2ProjectedTurnItem, OrchestrationV2RunAttempt, OrchestrationV2RunStatus, OrchestrationV2TurnItem, OrchestrationV2UserMessageInputIntent, RunAttemptId, ScheduledTaskId, TurnItemId } from "@t3tools/contracts";
import { RunId, ThreadId } from "@t3tools/contracts";
import type { HtmlRenderReference } from "@t3tools/shared/htmlRender";
import type { McpAppReference } from "@t3tools/shared/mcpApp";
export type PendingApproval = ThreadPendingApproval;
export type PendingUserInput = ThreadPendingUserInput;
export interface PendingUserInputDraftAnswer {
    readonly selectedOptionValues?: ReadonlyArray<string>;
    readonly customAnswer?: string;
    readonly attachmentCount?: number;
    readonly attachmentsBlocked?: boolean;
}
export interface ThreadFeedActivity {
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly attemptId: RunAttemptId | null;
    readonly summary: string;
    readonly detail: string | null;
    readonly canExpand: boolean;
    readonly fetchesDetail: boolean;
    readonly getFullDetail: () => string | null;
    readonly getCopyText: () => string;
    readonly icon: "agent" | "alert" | "browser" | "computer" | "code" | "check" | "command" | "edit" | "eye" | "globe" | "search" | "stop" | "hammer" | "lock" | "message" | "warning" | "wrench" | "zap";
    readonly logo: T3McpToolLogo | null;
    readonly toolLike: boolean;
    readonly prominent: boolean;
    readonly status: "success" | "failure" | "neutral" | null;
    readonly lifecycleStatus: WorkLogToolLifecycleStatus;
    readonly workEntry: WorkLogPresentationEntry;
    readonly groupedToolDetail?: boolean;
    readonly live?: boolean;
    /** Lone calls carry the group header's label and id until a second call joins. */
    readonly groupStandIn?: {
        readonly groupId: string;
        readonly label: string;
    };
    readonly projectedItem: OrchestrationV2ProjectedTurnItem;
}
export interface ThreadFeedMessage {
    readonly context?: import("@t3tools/contracts").OrchestrationMessageContext | undefined;
    readonly id: MessageId;
    readonly role: "user" | "assistant";
    readonly text: string;
    readonly attachments: ReadonlyArray<ChatAttachment>;
    readonly runId: RunId | null;
    readonly streaming: boolean;
    readonly inputIntent?: OrchestrationV2UserMessageInputIntent;
    readonly createdBy?: OrchestrationV2Actor;
    readonly creationSource?: OrchestrationV2CreationSource;
    readonly scheduledTaskId?: ScheduledTaskId;
    readonly senderThreadId?: ThreadId;
    readonly idleCompaction?: import("@t3tools/contracts").OrchestrationV2IdleCompaction;
    readonly visibility: OrchestrationV2ProjectedTurnItem["visibility"];
    readonly sourceThreadId: ThreadId;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly projectedItem?: OrchestrationV2ProjectedTurnItem;
    readonly checkpointSummary?: ThreadCheckpointSummary;
}
export interface LocalThreadMessage {
    readonly id: MessageId;
    readonly role: string;
    readonly text: string;
    readonly context?: OrchestrationMessageContext | undefined;
    readonly attachments?: ReadonlyArray<ChatAttachment> | undefined;
    readonly streaming: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
}
type RawThreadFeedEntry = {
    readonly type: "message";
    readonly id: string;
    readonly createdAt: string;
    readonly message: ThreadFeedMessage;
} | {
    readonly type: "activity";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly activity: ThreadFeedActivity;
} | {
    readonly type: "html-render";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly render: HtmlRenderReference;
} | {
    readonly type: "mcp-app";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    /** The thread and item that own the app; a fork's inherited app is its source's. */
    readonly sourceThreadId: ThreadId;
    readonly itemId: TurnItemId;
    readonly revision: string;
    readonly app: McpAppReference;
};
export type ThreadFeedEntry = ThreadFeedEntryContent & {
    readonly continuesWorkLog?: boolean;
    readonly checkpointSummary?: ThreadCheckpointSummary;
};
type ThreadFeedEntryContent = Extract<RawThreadFeedEntry, {
    type: "message" | "html-render" | "mcp-app";
}> | {
    readonly type: "activity-group";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly activities: ReadonlyArray<ThreadFeedActivity>;
} | {
    readonly type: "work-toggle";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
    readonly groupId: string;
    readonly hiddenCount: number;
    readonly expanded: boolean;
    readonly summary: string;
    readonly summaryKind: ToolGroupSummaryKind;
    readonly toolSurface?: WorkLogPresentationEntry["toolSurface"];
    readonly toolIcon?: WorkLogPresentationEntry["toolIcon"];
    readonly summaryToolIcon?: "browser" | "device" | "t3-code" | "pull-request";
    readonly hasFailure: boolean;
    readonly live: boolean;
    readonly shimmer: boolean;
    readonly thought?: string;
} | {
    readonly type: "run-fold";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId;
    readonly label: string;
    readonly expanded: boolean;
} | {
    readonly type: "thinking";
    readonly id: string;
    readonly createdAt: string;
    readonly runId: RunId | null;
};
export interface ThreadFeedLatestRun {
    readonly runId: RunId;
    readonly status: OrchestrationV2RunStatus;
    readonly startedAt: string | null;
    readonly completedAt: string | null;
    readonly turnEnded?: boolean;
}
export interface AgentSpawnSummary {
    readonly title: string;
    readonly status: string;
    readonly tone: "working" | "completed" | "failed" | "stopped";
    readonly members: ReadonlyArray<{
        readonly title: string;
        readonly status: string;
        readonly tone: "working" | "completed" | "failed" | "stopped";
        readonly detail: string | undefined;
        readonly updatedAt: string;
    }>;
}
export declare function workEntryRowLabel(entry: WorkLogPresentationEntry, expanded?: boolean): string;
type ThreadFeedActivityGroup = Extract<ThreadFeedEntry, {
    readonly type: "activity-group";
}>;
export declare function isContextCompactionActivityGroup(entry: ThreadFeedActivityGroup): boolean;
export declare function threadFeedCompactionLabels(feed: ReadonlyArray<ThreadFeedEntry>): Map<string, {
    title: string;
    compacting: string;
}>;
export declare function isContextHandoffActivityGroup(entry: ThreadFeedActivityGroup): boolean;
export declare function isSecretRequestActivityGroup(entry: ThreadFeedActivityGroup): boolean;
export declare function isLinkRequestActivityGroup(entry: ThreadFeedActivityGroup): boolean;
export declare function formatItemFullDetail(row: OrchestrationV2ProjectedTurnItem, item: OrchestrationV2TurnItem): string;
export declare function threadFeedRunIsUnsettled(run: ThreadFeedLatestRun | null): run is ThreadFeedLatestRun;
export declare function threadFeedActivityIsVisible(activity: Pick<ThreadFeedActivity, "prominent" | "status" | "toolLike"> & Partial<Pick<ThreadFeedActivity, "lifecycleStatus">>): boolean;
export declare function failedFeedRunIds(feed: ReadonlyArray<ThreadFeedEntry>, latestRun: ThreadFeedLatestRun | null): Set<string & import("effect/Brand").Brand<"RunId">>;
/**
 * The key a run fold uses for the message `entryId`: its run, or for an
 * imported message with no run, the runless key of the user message before
 * it. Null for user messages, which never fold.
 */
export declare function messageFoldRunId(feed: ReadonlyArray<ThreadFeedEntry>, entryId: string): RunId | null;
interface ThreadFeedPresentationBuild {
    readonly feed: ReadonlyArray<ThreadFeedEntry>;
    readonly latestRun: ThreadFeedLatestRun | null;
    readonly expandedRunIds: ReadonlySet<RunId>;
    readonly expandedWorkGroupIds: ReadonlySet<string>;
    readonly activeWorkStartedAt: string | null;
    readonly runlessWorkActive: boolean;
    readonly rows: ReadonlyArray<ThreadFeedEntry>;
    /** Feed entry `entry` is a user message whose rows start at `rowsLength`. */
    readonly restarts: ReadonlyArray<{
        readonly entry: number;
        readonly rowsLength: number;
    }>;
    /** Where each run's entries begin, so a reused prefix never shares a run with the rest. */
    readonly firstEntryByRun: ReadonlyMap<RunId, number>;
}
export declare function deriveThreadFeedPresentation(feed: ReadonlyArray<ThreadFeedEntry>, latestRun: ThreadFeedLatestRun | null, expandedRunIds: ReadonlySet<RunId>, expandedWorkGroupIds?: ReadonlySet<string>, activeWorkStartedAt?: string | null, runlessWorkActive?: boolean, cache?: ThreadFeedCache): ThreadFeedEntry[];
export declare const LIVE_ACTIVITY_ROW_ID = "live-activity-row";
export declare function setPendingUserInputCustomAnswer(question: ThreadUserInputQuestion, draft: PendingUserInputDraftAnswer | undefined, customAnswer: string): PendingUserInputDraftAnswer;
export declare function isPendingUserInputOptionSelected(question: ThreadUserInputQuestion, draft: PendingUserInputDraftAnswer | undefined, optionValue: string): boolean;
export declare function togglePendingUserInputOptionSelection(question: ThreadUserInputQuestion, draft: PendingUserInputDraftAnswer | undefined, optionValue: string): PendingUserInputDraftAnswer;
export declare function buildPendingUserInputAnswers(questions: ReadonlyArray<ThreadUserInputQuestion>, draftAnswers: Record<string, PendingUserInputDraftAnswer>): Record<string, string | ReadonlyArray<string>> | null;
interface ThreadFeedBuild {
    readonly rows: ReadonlyArray<OrchestrationV2ProjectedTurnItem>;
    readonly attempts: ReadonlyArray<OrchestrationV2RunAttempt> | undefined;
    readonly nodes: ReadonlyArray<OrchestrationV2ExecutionNode> | undefined;
    readonly checkpointSummaries: ReadonlyArray<ThreadCheckpointSummary> | undefined;
    readonly foldedAnswerMessageIds: ReadonlySet<string>;
    readonly delegatedChildrenByRun: ReadonlyMap<RunId, ReadonlySet<string>>;
    readonly feed: ReadonlyArray<ThreadFeedEntry>;
    /** Grouping is empty before `row`: the rows before it produced `feed.slice(0, feedLength)`. */
    readonly restarts: ReadonlyArray<{
        readonly row: number;
        readonly feedLength: number;
    }>;
}
/**
 * Keep one cache per on-screen feed across renders to reuse unchanged prefixes during streaming.
 * Sharing it between threads would make their results evict each other.
 */
export interface ThreadFeedCache {
    feedBuild: ThreadFeedBuild | null;
    presentation: ThreadFeedPresentationBuild | null;
}
export declare function createThreadFeedCache(): ThreadFeedCache;
export declare function buildThreadFeed(visibleTurnItems: ReadonlyArray<OrchestrationV2ProjectedTurnItem>, options?: {
    readonly anchoredMessages?: ReadonlyArray<LocalThreadMessage>;
    readonly attempts?: ReadonlyArray<OrchestrationV2RunAttempt>;
    readonly nodes?: ReadonlyArray<OrchestrationV2ExecutionNode>;
    readonly checkpointSummaries?: ReadonlyArray<ThreadCheckpointSummary>;
    readonly cache?: ThreadFeedCache;
}): ThreadFeedEntry[];
export {};
