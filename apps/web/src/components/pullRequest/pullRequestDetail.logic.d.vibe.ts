import { PullRequestDetail, type PullRequestAction, type PullRequestActor, type PullRequestBaseComparison, type PullRequestCheck, type PullRequestChecksState as ContractPullRequestChecksState, type PullRequestComment, type PullRequestCommit, type PullRequestContextMetadata, type PullRequestDetailView, type PullRequestMergeability, type PullRequestReaction, type PullRequestMergeMethod, type PullRequestRef, type RepositoryIdentity, type PullRequestReviewThread, type PullRequestState, type PullRequestUpdateMethod, SourceControlProviderKind, type ThreadLinkedPullRequest, type ThreadPullRequestLink, type VcsRef } from "@t3tools/contracts";
import { type ReviewCommentContext } from "~/reviewCommentContext";
export declare const PULL_REQUEST_MERGE_METHOD_LABELS: Record<PullRequestMergeMethod, string>;
export declare function allowsSinglePullRequestMerge(input: {
    supportsStackActions: boolean;
    hasStack: boolean;
    stackPending: boolean;
    stackError: string | null;
}): boolean;
export declare function resolvePullRequestMergeMethod(allowed: ReadonlyArray<PullRequestMergeMethod>, current: PullRequestMergeMethod | null, projectDefault: PullRequestMergeMethod | undefined, lastSelected: PullRequestMergeMethod): PullRequestMergeMethod;
export type PullRequestPrimaryControl = "resolve" | "ready" | "merge" | "enable-auto-merge" | "auto-merge-armed" | "merged" | "closed" | null;
export declare function resolvePullRequestPrimaryControl(input: {
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly mergeability: PullRequestMergeability;
    readonly checksState: ContractPullRequestChecksState | null;
    readonly autoMergeEnabled: boolean | undefined;
    readonly hasMergeMethod: boolean;
    readonly canMerge: boolean;
    readonly canMarkReady: boolean;
    readonly canEnableAutoMerge: boolean;
}): PullRequestPrimaryControl;
export declare function pullRequestCheckoutCommand(provider: SourceControlProviderKind, number: number, headBranch: string, headRepositoryNameWithOwner?: string | null, repositoryUrl?: string | null): string | null;
export declare function loadingPullRequestCheckoutCommand(reference: PullRequestRef, identity: RepositoryIdentity | null | undefined): string | null;
export declare function shouldRefreshPullRequestActivity(previous: {
    readonly key: string;
    readonly updatedAt: string;
} | null, next: {
    readonly key: string;
    readonly updatedAt: string;
}): boolean;
export declare function mergePullRequestThreadComments<T extends {
    readonly id: string;
}>(base: ReadonlyArray<T>, loaded: ReadonlyArray<T>): ReadonlyArray<T>;
export declare function editPullRequestThreadComment<T extends {
    readonly id: string;
    readonly body: string;
}>(comments: ReadonlyArray<T>, commentId: string, body: string): ReadonlyArray<T>;
type LegacyLinkedPullRequest = Pick<ThreadLinkedPullRequest, "repository" | "number">;
/** Include every stack link and project identity; another checkout is a different branch. */
export declare function pullRequestPanelContext(thread: {
    readonly projectId: string | null;
    readonly pullRequests?: ReadonlyArray<ThreadPullRequestLink> | undefined;
    readonly linkedPullRequest?: LegacyLinkedPullRequest | null | undefined;
    readonly branchPullRequest?: LegacyLinkedPullRequest | null | undefined;
}, surface: {
    readonly projectId: string;
    readonly host?: string | undefined;
    readonly repository: string;
    readonly number: number;
}): "page" | "thread";
export declare function threadPullRequestPanelTarget(thread: {
    readonly projectId: string;
    readonly pullRequests?: ReadonlyArray<ThreadPullRequestLink> | undefined;
    readonly linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
    readonly branchPullRequest?: ThreadLinkedPullRequest | null | undefined;
}): {
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    readonly repository: string;
    readonly number: number;
    readonly url: string;
} | {
    projectId: string;
    host: string;
    repository: string;
    number: number;
    url: string;
} | null;
export declare function pullRequestHandoffLabels(inThisThread: boolean): {
    fixFinding: string;
    fixCheck: string;
    fixFindings: string;
};
export declare function pullRequestActionMenuHasGroup(showsDraftToggle: boolean, showsAutoMerge: boolean, showsMergeMethods: boolean): boolean;
export declare function isStackedPullRequestBase(baseBranch: string, refs: ReadonlyArray<Pick<VcsRef, "name" | "isDefault" | "isRemote" | "remoteName">>): boolean;
export type PullRequestActionableDetail = Pick<PullRequestDetail, "state" | "isDraft" | "mergeability" | "capabilities" | "viewerPermissions" | "mergeCapabilities">;
export declare function allowedPullRequestMergeMethods(detail: Pick<PullRequestActionableDetail, "capabilities" | "mergeCapabilities"> | null): ReadonlyArray<PullRequestMergeMethod>;
export declare function isPullRequestConflicting(detail: Pick<PullRequestActionableDetail, "state" | "mergeability"> | null): boolean;
export type PullRequestChecksState = "none" | "pending" | "failing" | "passing";
export declare function classifyPullRequestChecks(checks: ReadonlyArray<PullRequestCheck>): PullRequestChecksState;
export declare function describePullRequestChecks(checks: ReadonlyArray<PullRequestCheck>): string;
export declare function groupPullRequestChecks(checks: ReadonlyArray<PullRequestCheck>): {
    attention: {
        readonly name: string;
        readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
        readonly description: string | null;
        readonly url: string | null;
        readonly required?: boolean | undefined;
    }[];
    running: {
        readonly name: string;
        readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
        readonly description: string | null;
        readonly url: string | null;
        readonly required?: boolean | undefined;
    }[];
    completed: {
        readonly name: string;
        readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
        readonly description: string | null;
        readonly url: string | null;
        readonly required?: boolean | undefined;
    }[];
};
export type ThreadPanelPullRequestAction = "resolve" | "ready" | "fix" | "merge";
export declare function resolveThreadPanelPullRequestAction(detail: (PullRequestActionableDetail & Pick<PullRequestDetail, "checks">) | null): ThreadPanelPullRequestAction | null;
export declare function orderPullRequestComments<T extends {
    readonly createdAt: string;
}>(comments: ReadonlyArray<T>, order: "newest" | "oldest"): ReadonlyArray<T>;
export type PullRequestReviewOutcome = "approved" | "changes-requested" | "dismissed";
/** Normalize host verdict formats; ignore non-verdict review states. */
export declare function pullRequestReviewOutcome(reviewState: string | null): PullRequestReviewOutcome | null;
export declare function newestPullRequestCommitAt(commits: ReadonlyArray<PullRequestCommit>): string | null;
export declare function isPullRequestVerdictStale(at: string, newestCommitAt: string | null): boolean;
export interface PullRequestReviewOutcomeEntry {
    readonly key: string;
    readonly actor: PullRequestActor | null;
    readonly outcome: PullRequestReviewOutcome;
    readonly at: string;
    readonly stale: boolean;
}
export declare function latestPullRequestReviewOutcomes(comments: ReadonlyArray<PullRequestComment>, commits?: ReadonlyArray<PullRequestCommit>): ReadonlyArray<PullRequestReviewOutcomeEntry>;
export interface PullRequestTimelineEvent {
    readonly id: string;
    readonly at: string;
    readonly kind: "opened" | "commit" | "comment" | "review" | "merged" | "closed";
    readonly title: string;
    readonly body: string | null;
    readonly markdown: boolean;
    readonly url: string | null;
    readonly actor: PullRequestActor | null;
    readonly commitAuthors: ReadonlyArray<PullRequestActor>;
    readonly additions: number | null;
    readonly deletions: number | null;
    readonly path: string | null;
    readonly reviewState: string | null;
    readonly reactions: ReadonlyArray<PullRequestReaction>;
    readonly comment?: PullRequestComment;
    readonly thread?: PullRequestTimelineThread;
}
export interface PullRequestReplyAvailability {
    readonly moreReplies: number;
    readonly hasMoreReplies: boolean;
    readonly url: string | null;
}
export interface PullRequestTimelineThread extends Pick<PullRequestReviewThread, "path" | "line" | "isResolved" | "isOutdated">, PullRequestReplyAvailability {
    readonly replies: ReadonlyArray<PullRequestTimelineEvent>;
}
export type PullRequestTimelineRow = {
    readonly kind: "event";
    readonly event: PullRequestTimelineEvent;
} | {
    readonly kind: "comments";
    readonly events: ReadonlyArray<PullRequestTimelineEvent>;
};
export declare function groupPullRequestTimelineConversations(events: ReadonlyArray<PullRequestTimelineEvent>): ReadonlyArray<PullRequestTimelineRow>;
/** Marker-only bodies are empty; otherwise retain text, including fenced HTML comments. */
export declare function visibleBody(body: string): string | null;
export type PullRequestConversationItem = {
    readonly kind: "comment";
    readonly id: string;
    readonly createdAt: string;
    readonly comment: PullRequestComment;
} | ({
    readonly kind: "thread";
    readonly id: string;
    readonly createdAt: string;
    readonly root: PullRequestComment;
    readonly replies: ReadonlyArray<PullRequestComment>;
    readonly thread: PullRequestReviewThread;
} & PullRequestReplyAvailability);
export declare function pullRequestConversationItems(comments: ReadonlyArray<PullRequestComment>, reviewThreads: ReadonlyArray<PullRequestReviewThread>): ReadonlyArray<PullRequestConversationItem>;
export declare function pullRequestConversationItemComments(item: PullRequestConversationItem): ReadonlyArray<PullRequestComment>;
export declare function isPullRequestCommentFinished(comment: PullRequestComment, thread?: PullRequestReviewThread): boolean;
export declare function filterPullRequestConversationItems(items: ReadonlyArray<PullRequestConversationItem>, filter: {
    readonly bots: boolean;
    readonly resolved: boolean;
}): ReadonlyArray<PullRequestConversationItem>;
export declare function pagePullRequestConversationItems(items: ReadonlyArray<PullRequestConversationItem>, count: number): {
    readonly shown: ReadonlyArray<PullRequestConversationItem>;
    readonly hidden: number;
};
/**
 * Merged wins over closed: GitHub sets both timestamps on a merge, and reporting "closed" for a
 * merged pull request would misstate what happened.
 */
export declare function buildPullRequestTimeline(detail: Pick<PullRequestDetailView, "provider" | "createdAt" | "author" | "commits" | "comments" | "mergedAt" | "closedAt"> & Partial<Pick<PullRequestDetailView, "reviewThreads">>): ReadonlyArray<PullRequestTimelineEvent>;
export interface FixFindingsHandoff {
    readonly prompt: string;
    readonly reviewComments: ReadonlyArray<ReviewCommentContext>;
}
export declare function stripPullRequestHandoffReferences(prompt: string, comments: ReadonlyArray<ReviewCommentContext>, retainedIds?: ReadonlySet<string>): string;
export declare function handoffPrompt(existing: {
    readonly prompt: string;
    /** Store only the handoff contribution so later handoffs preserve user text. */
    readonly lastHandoffPrompt: string | undefined;
}, incoming: string): string;
export declare function handoffReviewComments(existing: ReadonlyArray<ReviewCommentContext>, incoming: ReadonlyArray<ReviewCommentContext>): ReviewCommentContext[];
/** Review bodies and check output are attacker-controlled on public repositories. */
export declare function buildFixFindingsHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly reviewThreads: ReadonlyArray<PullRequestReviewThread>;
    readonly comments: ReadonlyArray<PullRequestComment>;
    readonly checks: ReadonlyArray<PullRequestCheck>;
    readonly commentsTruncated: boolean;
}): FixFindingsHandoff;
export type PullRequestFinding = {
    readonly kind: "thread";
    readonly thread: PullRequestReviewThread;
} | {
    readonly kind: "check";
    readonly check: PullRequestCheck;
} | {
    readonly kind: "comment";
    readonly comment: PullRequestComment;
};
export declare function pullRequestFindingKey(finding: PullRequestFinding): string;
export declare function buildFixFindingHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly finding: PullRequestFinding;
}): FixFindingsHandoff;
export declare function buildResolveConflictsPrompt(input: {
    readonly number: number;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
}): string;
/** User chips need a separate namespace to survive later handoffs. */
export declare function buildPullRequestReferenceContext(input: PullRequestContextMetadata): ReviewCommentContext;
export declare function buildAskAboutPullRequestHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
}): FixFindingsHandoff;
export declare function buildExplainPullRequestHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
}): FixFindingsHandoff;
export declare function buildAddSelectionToAgentHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly comment: ReviewCommentContext;
    readonly request: string;
}): FixFindingsHandoff;
export declare function buildAskAboutGuideStopHandoff(input: {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly stop: {
        readonly index: number;
        readonly title: string;
        readonly summary: string;
        readonly attention: string | null;
        readonly excerpts: ReadonlyArray<{
            readonly path: string;
            readonly side: "new" | "old";
            readonly start: number;
            readonly end: number;
        }>;
    };
    readonly question: string;
}): FixFindingsHandoff;
export declare function isPullRequestNotFound(failure: unknown): boolean;
export declare function readableFailure(failure: unknown, hint: string): string;
export declare function checkoutFailureDescription(failure: unknown): string;
export declare function resolveBaseFreshness(detail: {
    readonly state: PullRequestState;
    readonly mergeability: PullRequestMergeability;
    readonly baseComparison?: PullRequestBaseComparison | undefined;
    readonly behindBy?: number | undefined;
    readonly capabilities: {
        readonly updateMethods?: ReadonlyArray<PullRequestUpdateMethod> | undefined;
    };
    readonly viewerPermissions: {
        readonly updateMethods?: ReadonlyArray<PullRequestUpdateMethod> | undefined;
    };
}): {
    readonly behindBy: number | null;
    readonly methods: ReadonlyArray<PullRequestUpdateMethod>;
} | null;
export declare function pullRequestActionNeedsHostRefresh(action: PullRequestAction): boolean;
export declare function canDeletePullRequestBranch(detail: Pick<PullRequestDetail, "state"> & {
    readonly capabilities: Pick<PullRequestDetail["capabilities"], "actions" | "deleteBranch">;
    readonly viewerPermissions: Pick<PullRequestDetail["viewerPermissions"], "actions">;
}): boolean;
type SnapshotStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;
export declare function resolvePullRequestReferenceHost(reference: PullRequestRef, identity: RepositoryIdentity | null | undefined): PullRequestRef;
export interface PullRequestDetailSnapshotRef {
    readonly host?: string | undefined;
    readonly projectId: string;
    readonly repository: string;
    readonly number: number;
}
export declare function readPullRequestDetailSnapshot(storage: SnapshotStorage | undefined, environmentId: string, reference: PullRequestDetailSnapshotRef): PullRequestDetail | null;
export declare function writePullRequestDetailSnapshot(storage: SnapshotStorage | undefined, environmentId: string, reference: PullRequestDetailSnapshotRef, detail: PullRequestDetail): void;
export declare function resolveDisplayedPullRequestDetail(input: {
    readonly live: PullRequestDetail | null;
    readonly cached: PullRequestDetail | null;
    readonly reference: PullRequestDetailSnapshotRef;
}): PullRequestDetail | null;
export {};
