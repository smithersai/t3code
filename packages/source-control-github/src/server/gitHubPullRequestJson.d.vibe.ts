import * as Cause from "effect/Cause";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import { GraphQL } from "effect/graphql";
import type { PullRequestStackMembership, PullRequestActor, PullRequestPreview, PullRequestCheck, PullRequestChecksState, PullRequestComment, PullRequestCommit, PullRequestFileViewedState, PullRequestLabel, PullRequestMergeCapabilities, PullRequestMergeMethod, PullRequestOmittedFileStat, PullRequestMergeability, PullRequestReaction, PullRequestReactionContent, PullRequestReviewCommentDraft, PullRequestReviewDecision, PullRequestReviewThread, PullRequestReviewVerdict, PullRequestReviewerCandidateList, PullRequestReviewerKind, PullRequestLabelCandidateList, PullRequestState, PullRequestThreadComment } from "@t3tools/contracts";
import type * as GitHubSchema from "../../schema/github.graphql.ts";
import type { PullRequestSummaryRepositoryPullRequestPullRequest as SummarizedPullRequest, PullRequestWatchFingerprintRepositoryPullRequestPullRequest as WatchedPullRequest } from "./pullRequestBatches.graphql.ts";
import type { ActorAvatars, LabelCandidates, PullRequestActivity, PullRequestCommitStats, PullRequestCheckContexts, PullRequestCore, PullRequestFilesViewed, PullRequestFileStats, PullRequestHeads, PullRequestPreview as PullRequestPreviewQuery, PullRequestSubject, RepositoryAuthors, RepositoryLabels, ReviewerCandidates, ViewerPermissions } from "./pullRequestReads.graphql.ts";
import type { ReviewDismissals, ReviewThreadComments, ReviewThreads } from "./pullRequestReviews.graphql.ts";
/** Check runs use status/conclusion; commit statuses use a single state. */
interface CheckFields {
    readonly name?: string | null | undefined;
    readonly context?: string | null | undefined;
    readonly status?: string | null | undefined;
    readonly conclusion?: string | null | undefined;
    readonly state?: string | null | undefined;
    readonly description?: string | null | undefined;
    readonly detailsUrl?: string | null | undefined;
    readonly targetUrl?: string | null | undefined;
    /** Empty for app-owned runs; absent for commit statuses. */
    readonly workflowName?: string | null | undefined;
    readonly startedAt?: string | null | undefined;
    readonly completedAt?: string | null | undefined;
    /** Branch protection requires this check; asked for on github.com only. */
    readonly isRequired?: boolean | null | undefined;
}
interface PageInfoFields {
    readonly hasNextPage?: boolean | undefined;
    readonly endCursor?: string | null | undefined;
}
/** @throws {never} */
export declare function gitHubReactionContent(content: PullRequestReactionContent): GitHubSchema.ReactionContent;
/** @throws {never} */
export declare function toActorAvatars(result: ActorAvatars.Result): ReadonlyMap<string, string>;
/** @throws {never} */
export declare function toPullRequestPreview(result: PullRequestPreviewQuery.Result): Omit<PullRequestPreview, "projectId" | "repository"> | null;
/** Search rejects first > 100 with EXCESSIVE_PAGINATION. */
export declare const PULL_REQUEST_SEARCH_MAX_ROWS = 100;
/** @throws {never} */
export declare function pageRows(rows: number): number;
/** @throws {never} */
export declare function toPullRequestNodeId(result: {
    readonly repository: {
        readonly pullRequest: {
            readonly id: string;
        } | null;
    } | null;
}): string | null;
/** @throws {never} */
export declare function isSubjectOfPullRequest(result: PullRequestSubject.Result): boolean;
declare const ReviewSubmissionSchema: Schema.Struct<{
    readonly event: Schema.Literals<readonly ["COMMENT", "APPROVE", "REQUEST_CHANGES"]>;
    readonly body: Schema.String;
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly start_line: Schema.optional<Schema.Int>;
        readonly start_side: Schema.optional<Schema.Literals<readonly ["LEFT", "RIGHT"]>>;
        readonly line: Schema.Int;
        readonly side: Schema.Literals<readonly ["LEFT", "RIGHT"]>;
        readonly body: Schema.String;
    }>>;
}>;
/** @throws {never} */
export declare function buildReviewSubmission(input: {
    readonly verdict: PullRequestReviewVerdict;
    readonly body: string;
    readonly comments: ReadonlyArray<PullRequestReviewCommentDraft>;
}): typeof ReviewSubmissionSchema.Type;
export interface GitHubPullRequestListItem {
    readonly stack?: PullRequestStackMembership;
    readonly authorId: string | null;
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly author: PullRequestActor | null;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly mergeability: PullRequestMergeability;
    readonly reviewDecision: PullRequestReviewDecision | null;
    readonly additions: number;
    readonly deletions: number;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly reviewRequestLogins: ReadonlyArray<string>;
    readonly hasTeamReviewRequest: boolean;
    readonly labels: ReadonlyArray<PullRequestLabel>;
    readonly checksState: PullRequestChecksState | null;
}
export interface GitHubPullRequestDetail extends GitHubPullRequestListItem {
    readonly isCrossRepository?: boolean;
    readonly headRepositoryOwner: string | null;
    readonly headRepositoryNameWithOwner?: string | null;
    readonly headSha?: string | null;
    readonly body: string;
    readonly changedFiles: number;
    readonly mergedAt: string | null;
    readonly closedAt: string | null;
    readonly checks: ReadonlyArray<PullRequestCheck>;
    readonly autoMergeEnabled?: boolean;
    readonly autoMergeMethod?: PullRequestMergeMethod;
}
export interface GitHubWorkflowRunApproval {
    readonly id: number;
    readonly name: string;
    readonly url: string | null;
}
export interface GitHubPullRequestHead {
    readonly number: number;
    readonly headSha: string;
    readonly isCrossRepository?: boolean;
    readonly headRepositoryOwner: string | null;
}
export interface GitHubPullRequestActivity {
    readonly author: PullRequestActor | null;
    readonly comments: ReadonlyArray<PullRequestComment>;
    readonly commits: ReadonlyArray<PullRequestCommit>;
}
export declare const LenientPullRequestSearch: GraphQL.Operation<"query", "PullRequestSearch", Schema.Struct<{
    q: Schema.String;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    readonly search: Schema.Struct<{
        readonly pageInfo: Schema.Struct<{
            readonly hasNextPage: Schema.Boolean;
            readonly endCursor: Schema.NullOr<Schema.String>;
        }>;
        readonly nodes: Schema.NullOr<Schema.$Array<Schema.Unknown>>;
    }>;
}>, never>;
export declare const LenientPullRequestList: GraphQL.Operation<"query", "PullRequestList", Schema.Struct<{
    owner: Schema.String;
    name: Schema.String;
    states: Schema.optional<Schema.NullOr<Schema.$Array<Schema.Literals<readonly ["CLOSED", "MERGED", "OPEN"]>>>>;
    first: Schema.Number;
    after: Schema.optional<Schema.NullOr<Schema.String>>;
    stacks: Schema.Boolean;
    stats: Schema.Boolean;
}>, Schema.Struct<{
    readonly repository: Schema.NullOr<Schema.Struct<{
        readonly pullRequests: Schema.Struct<{
            readonly pageInfo: Schema.Struct<{
                readonly hasNextPage: Schema.Boolean;
                readonly endCursor: Schema.NullOr<Schema.String>;
            }>;
            readonly nodes: Schema.NullOr<Schema.$Array<Schema.Unknown>>;
        }>;
    }>>;
}>, never>;
type DecodeFailure = Cause.Cause<Schema.SchemaError>;
/**
 * Count skipped invalid rows in rawCount to avoid ending pagination early.
 * @throws {never}
 */
export declare function toPullRequestRows(connection: {
    readonly pageInfo: PageInfoFields;
    readonly nodes: ReadonlyArray<unknown> | null;
} | null | undefined): {
    readonly rows: ReadonlyArray<{
        readonly item: GitHubPullRequestListItem;
        readonly repository: string | null;
    }>;
    readonly rawCount: number;
    readonly hasNextPage: boolean;
    readonly endCursor: string | null;
};
export interface GitHubPullRequestSearchItem extends GitHubPullRequestListItem {
    readonly repository: string;
}
/** @throws {never} */
export declare function toStackMembership(raw: {
    readonly stack?: {
        readonly number: number;
        readonly size: number;
        readonly baseRefName: string;
    } | null;
    readonly stackEntry?: {
        readonly position: number;
    } | null;
}): PullRequestStackMembership | undefined;
/**
 * Invalid selectors can fail an entire aliased request, not just their own lookup.
 * @throws {never}
 */
export declare function pullRequestLookup(changeRequest: {
    readonly repository: string;
    readonly number: number;
}): {
    readonly owner: string;
    readonly name: string;
    readonly number: number;
} | null;
export interface GitHubPullRequestSummary {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly closedAt: string | null;
    readonly mergedAt: string | null;
    readonly updatedAt: string;
    readonly author: PullRequestActor | null;
    readonly additions: number;
    readonly deletions: number;
    readonly changedFiles: number;
    readonly reviewDecision: PullRequestReviewDecision | null;
    readonly checksState: PullRequestChecksState | null;
    readonly mergeability: PullRequestMergeability;
    /** Null means no stack; absent means not requested. */
    readonly stack?: PullRequestStackMembership | null;
}
/** @throws {never} */
export declare function toPullRequestSummary(pr: SummarizedPullRequest): GitHubPullRequestSummary;
export interface GitHubPullRequestWatchFingerprint {
    readonly status: string;
    readonly remarks: string;
}
/** @throws {never} */
export declare function toPullRequestWatchFingerprint(pr: WatchedPullRequest): GitHubPullRequestWatchFingerprint;
export interface GitHubPullRequestCore extends GitHubPullRequestDetail {
    readonly reviewRequestTeams: ReadonlyArray<PullRequestActor>;
    readonly viewerAccess: GitHubViewerAccess & GitHubRepositoryAccess;
    readonly comparison: GitHubBaseComparison | null;
    readonly checksTruncated: boolean;
}
/** @throws {never} */
export declare function toPullRequestCore(result: PullRequestCore.Result): GitHubPullRequestCore | null;
/** @throws {never} */
export declare function decodePullRequestDetailJson(raw: string): Result.Result<GitHubPullRequestDetail, DecodeFailure>;
export interface GitHubWorkflowRunPage {
    readonly runs: ReadonlyArray<GitHubWorkflowRunApproval>;
    readonly rawCount: number;
}
/** @throws {never} */
export declare function decodeWorkflowRunsJson(raw: string): Result.Result<GitHubWorkflowRunPage, DecodeFailure>;
/** @throws {never} */
export declare function toPullRequestHeads(result: PullRequestHeads.Result): {
    readonly heads: ReadonlyArray<GitHubPullRequestHead>;
    readonly nextCursor: string | null;
};
export interface GitHubPullRequestActivityPage {
    readonly nonMergeCommitIds: ReadonlyArray<string>;
    readonly author?: PullRequestActor | null;
    readonly commits?: ReadonlyArray<PullRequestCommit>;
    readonly remarks: ReadonlyArray<PullRequestComment>;
    readonly nextCommentsCursor: string | null;
    readonly nextReviewsCursor: string | null;
}
/** @throws {never} */
export declare function toPullRequestActivityPage(result: PullRequestActivity.Result): GitHubPullRequestActivityPage | null;
/** @throws {never} */
export declare function toPullRequestCommitStats(result: PullRequestCommitStats.Result): Map<string, {
    readonly additions: number;
    readonly deletions: number;
}>;
/** A check context as the rollup reports it; opaque outside this module. */
export type GitHubCheckContext = CheckFields;
/** @throws {never} */
export declare function toPullRequestCheckContextsPage(result: PullRequestCheckContexts.Result): {
    readonly headSha: string;
    readonly contexts: ReadonlyArray<GitHubCheckContext>;
    readonly nextCursor: string | null;
} | null;
/** @throws {never} */
export declare function pullRequestChecksFromContexts(contexts: ReadonlyArray<GitHubCheckContext>): {
    readonly checks: ReadonlyArray<PullRequestCheck>;
    readonly checksState: PullRequestChecksState | null;
};
export interface GitHubReviewThreadComments {
    readonly comments: ReadonlyArray<PullRequestComment>;
    readonly dismissalsByReviewId: ReadonlyMap<string, string>;
    readonly reviewThreads: ReadonlyArray<PullRequestReviewThread>;
    readonly commentCount: number;
    readonly truncated: boolean;
    readonly reviewThreadsTruncated: boolean;
    readonly reactions: ReadonlyArray<PullRequestReaction>;
    readonly reactionsById: ReadonlyMap<string, ReadonlyArray<PullRequestReaction>>;
    readonly editedAtById: ReadonlyMap<string, string>;
    readonly reviewers: ReadonlyArray<PullRequestActor>;
    readonly avatarsByLogin: ReadonlyMap<string, string>;
    readonly botLogins: ReadonlySet<string>;
    /**
     * Empty wherever the read never happened (an install too old for the field, a degraded page),
     * which the caller reads as "keep the `gh pr view` list" rather than as "this pull request has
     * no commits".
     */
    readonly commits: ReadonlyArray<PullRequestCommit>;
    readonly viewer: {
        readonly canUpdate: boolean;
        readonly didAuthor: boolean;
    };
}
export interface GitHubReviewThreadEntry {
    readonly thread: PullRequestReviewThread;
    readonly commentCount: number;
    readonly nextCommentCursor: string | null;
}
export interface GitHubReviewThreadPage {
    readonly threads: ReadonlyArray<GitHubReviewThreadEntry>;
    readonly nextCursor: string | null;
    readonly reactions: ReadonlyArray<PullRequestReaction>;
    readonly reactionsById: ReadonlyMap<string, ReadonlyArray<PullRequestReaction>>;
    readonly editedAtById: ReadonlyMap<string, string>;
    readonly reviewers: ReadonlyArray<PullRequestActor>;
    readonly avatarsByLogin: ReadonlyMap<string, string>;
    readonly botLogins: ReadonlySet<string>;
    readonly commits: ReadonlyArray<PullRequestCommit>;
    readonly viewer: {
        readonly canUpdate: boolean;
        readonly didAuthor: boolean;
    };
    readonly dismissalsByReviewId: ReadonlyMap<string, string>;
    readonly nextDismissalCursor: string | null;
}
/** @throws {never} */
export declare function reviewThreadConversation(threads: ReadonlyArray<PullRequestReviewThread>): ReadonlyArray<PullRequestComment>;
/** @throws {never} */
export declare function toReviewDismissalsPage(result: ReviewDismissals.Result): {
    readonly dismissalsByReviewId: ReadonlyMap<string, string>;
    readonly nextCursor: string | null;
} | null;
/** @throws {never} */
export declare function toReviewThreadPage(result: ReviewThreads.Result): GitHubReviewThreadPage | null;
/** @throws {never} */
export declare function toReviewThreadCommentsPage(result: ReviewThreadComments.Result): {
    readonly belongsToPullRequest: boolean;
    readonly comments: ReadonlyArray<PullRequestThreadComment>;
    readonly nextCursor: string | null;
};
export interface GitHubRepositoryAccess {
    readonly mergeCapabilities: PullRequestMergeCapabilities;
    readonly autoMergeAllowed: boolean;
    readonly canWrite: boolean;
}
/** States in which `gh pr merge --auto` merges at once instead of arming auto-merge. */
export declare const IMMEDIATELY_MERGEABLE: ReadonlySet<string>;
/**
 * GitHub answers null only to a GitHub App installation, and no API says what an installation
 * may do, so null is granted and GitHub refuses whatever the app was not given.
 * @throws {never}
 */
export declare function toCanWrite(viewerPermission: string | null | undefined): boolean;
export interface GitHubBaseComparison {
    readonly behindBy: number | null;
    readonly viewerCanUpdate: boolean;
}
/**
 * assignableUsers avoids push/read:org requirements. Keep requested outsiders/apps removable.
 * @throws {never}
 */
export declare function toReviewerCandidates(result: ReviewerCandidates.Result): PullRequestReviewerCandidateList | null;
declare const ReviewerRequestSchema: Schema.Struct<{
    readonly reviewers: Schema.$Array<Schema.String>;
    readonly team_reviewers: Schema.$Array<Schema.String>;
}>;
/** @throws {never} */
export declare function buildReviewerRequest(reviewers: ReadonlyArray<{
    readonly id: string;
    readonly kind: PullRequestReviewerKind;
}>): typeof ReviewerRequestSchema.Type;
/**
 * Keep applied labels removable even when absent from the repository page.
 * @throws {never}
 */
export declare function toLabelCandidates(result: LabelCandidates.Result): PullRequestLabelCandidateList | null;
/** @throws {never} */
export declare function toRepositoryLabels(result: RepositoryLabels.Result): {
    readonly items: ReadonlyArray<PullRequestLabel>;
    readonly truncated: boolean;
} | null;
/** @throws {never} */
export declare function toRepositoryAuthors(result: RepositoryAuthors.Result): {
    readonly items: ReadonlyArray<PullRequestActor>;
    readonly truncated: boolean;
} | null;
/** @throws {never} */
export declare function buildLabelRequest(labels: ReadonlyArray<string>): {
    readonly labels: ReadonlyArray<string>;
};
export interface GitHubViewerAccess {
    readonly canWrite: boolean;
    readonly canDeleteBranch?: boolean;
    readonly canTriage: boolean;
    readonly canUpdate: boolean;
    readonly didAuthor: boolean;
    /** Permitted and update needed; false also covers current branches. Absent if unread. */
    readonly canUpdateBranch?: boolean;
    /** Detail-only readiness; omitted by the lightweight action permission read. */
    readonly canMergeNow?: boolean;
}
/** @throws {never} */
export declare function toViewerPermissions(result: ViewerPermissions.Result): (GitHubViewerAccess & GitHubRepositoryAccess) | null;
export interface GitHubPullRequestFilesPatch {
    readonly patch: string;
    readonly truncated: boolean;
    readonly rawCount: number;
    readonly omittedFileStats: ReadonlyArray<PullRequestOmittedFileStat>;
}
/**
 * The files API omits diff --git headers; assemble them for unified-patch viewers.
 * @throws {never}
 */
export declare function decodePullRequestFilesJson(raw: string): Result.Result<GitHubPullRequestFilesPatch, DecodeFailure>;
/** @throws {never} */
export declare function decodeCommitFilesJson(raw: string): Result.Result<GitHubPullRequestFilesPatch, DecodeFailure>;
export interface GitHubPullRequestFilesViewedPage {
    readonly files: ReadonlyArray<{
        readonly path: string;
        readonly state: PullRequestFileViewedState;
    }>;
    readonly nextCursor: string | null;
}
/** @throws {never} */
export declare function toPullRequestFilesViewedPage(result: PullRequestFilesViewed.Result): GitHubPullRequestFilesViewedPage;
export interface GitHubPullRequestFileStat {
    readonly path: string;
    readonly additions: number;
    readonly deletions: number;
}
export interface GitHubPullRequestFileStatsPage {
    readonly files: ReadonlyArray<GitHubPullRequestFileStat>;
    readonly nextCursor: string | null;
}
/** @throws {never} */
export declare function toPullRequestFileStatsPage(result: PullRequestFileStats.Result): GitHubPullRequestFileStatsPage;
export interface GitHubPullRequestStackLayer {
    readonly title?: string;
    readonly isDraft?: boolean;
    readonly headSha?: string;
    readonly number: number;
    readonly headBranch: string;
    readonly state: PullRequestState;
}
export interface GitHubPullRequestStack {
    readonly id: string;
    readonly number: number;
    readonly url: string;
    readonly base: string;
    readonly layers: ReadonlyArray<GitHubPullRequestStackLayer>;
}
/** @throws {never} */
export declare function decodePullRequestStacksJson(raw: string): Result.Result<GitHubPullRequestStack | null, DecodeFailure>;
export {};
