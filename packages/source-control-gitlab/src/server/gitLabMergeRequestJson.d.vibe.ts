import * as Cause from "effect/Cause";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import type { PullRequestActor, PullRequestCheck, PullRequestComment, PullRequestCommit, PullRequestLabel, PullRequestMergeability, PullRequestMergeCapabilities, PullRequestMergeMethod, PullRequestReaction, PullRequestReactionContent, PullRequestReviewerCandidate, PullRequestReviewThread, PullRequestState } from "@t3tools/contracts";
export interface GitLabMergeRequestListItem {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly author: PullRequestActor | null;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly mergeability: PullRequestMergeability;
    readonly additions: number;
    readonly deletions: number;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly reviewRequestLogins: ReadonlyArray<string>;
    readonly labels: ReadonlyArray<PullRequestLabel>;
}
export interface GitLabMergeRequestDetail extends GitLabMergeRequestListItem {
    readonly body: string;
    readonly changedFiles: number;
    readonly mergedAt: string | null;
    readonly closedAt: string | null;
    readonly reviewers: ReadonlyArray<PullRequestActor>;
    readonly checks: ReadonlyArray<PullRequestCheck>;
    readonly viewerCanMerge: boolean;
    readonly reviewerIds: ReadonlyArray<number>;
    readonly autoMergeEnabled?: boolean;
    readonly autoMergeMethod?: PullRequestMergeMethod;
    /** Absent means not counted, not up to date. */
    readonly divergedCommits?: number;
    readonly headSha?: string;
}
type DecodeFailure = Cause.Cause<Schema.SchemaError>;
export interface GitLabProjectUsers {
    readonly candidates: ReadonlyArray<PullRequestReviewerCandidate>;
    /** Count before decoding to avoid ending pagination on skipped rows. */
    readonly rawCount: number;
}
export interface GitLabMergeRequestListBatch {
    readonly items: ReadonlyArray<GitLabMergeRequestListItem>;
    readonly rawIndexes: ReadonlyArray<number>;
    readonly rawCount: number;
}
export declare function decodeMergeRequestListJson(raw: string): Result.Result<GitLabMergeRequestListBatch, DecodeFailure>;
export declare function decodeMergeRequestDetailJson(raw: string): Result.Result<GitLabMergeRequestDetail, DecodeFailure>;
export declare function decodeViewerJson(raw: string): Result.Result<string | null, DecodeFailure>;
export declare function decodeProjectUsersJson(raw: string): Result.Result<GitLabProjectUsers, DecodeFailure>;
export interface GitLabProjectLabels {
    readonly labels: ReadonlyArray<PullRequestLabel>;
    readonly rawCount: number;
}
export declare function decodeProjectLabelsJson(raw: string): Result.Result<GitLabProjectLabels, DecodeFailure>;
export declare function decodeProjectMergeCapabilitiesJson(raw: string): Result.Result<PullRequestMergeCapabilities, DecodeFailure>;
export interface GitLabDiffRefs {
    readonly baseSha: string;
    readonly headSha: string;
    readonly startSha: string;
}
export interface GitLabDiscussions {
    readonly threads: ReadonlyArray<PullRequestReviewThread>;
    readonly rawCount: number;
}
export declare function decodeDiscussionsJson(raw: string): Result.Result<GitLabDiscussions, DecodeFailure>;
export declare function decodeDiffRefsJson(raw: string): Result.Result<GitLabDiffRefs | null, DecodeFailure>;
export declare function decodeNotesJson(raw: string): Result.Result<{
    readonly comments: ReadonlyArray<PullRequestComment>;
    readonly rawCount: number;
}, DecodeFailure>;
export declare function decodeCommitsJson(raw: string): Result.Result<ReadonlyArray<PullRequestCommit>, DecodeFailure>;
export declare function decodeCommitDiffRefsJson(raw: string): Result.Result<GitLabDiffRefs | null, DecodeFailure>;
export interface GitLabMergeRequestPatch {
    readonly patch: string;
    readonly truncated: boolean;
    readonly rawCount: number;
}
export declare function decodeMergeRequestDiffsJson(raw: string): Result.Result<GitLabMergeRequestPatch, DecodeFailure>;
/** Older GitLab instances return all files in a non-paginated merge request wrapper. */
export declare function decodeMergeRequestChangesJson(raw: string): Result.Result<GitLabMergeRequestPatch, DecodeFailure>;
export declare function gitLabAwardName(content: PullRequestReactionContent): string;
export declare const AWARD_EMOJI_GRAPHQL_QUERY = "query($fullPath: ID!, $iid: String!, $cursor: String) {\n  currentUser { username }\n  project(fullPath: $fullPath) {\n    mergeRequest(iid: $iid) {\n      awardEmoji { nodes { name user { username } } }\n      notes(first: 100, after: $cursor) {\n        pageInfo { hasNextPage endCursor }\n        nodes { id awardEmoji { nodes { name user { username } } } }\n      }\n    }\n  }\n}";
export interface GitLabAwardEmojiPage {
    readonly reactions: ReadonlyArray<PullRequestReaction>;
    readonly reactionsByNoteId: ReadonlyMap<string, ReadonlyArray<PullRequestReaction>>;
    readonly nextCursor: string | null;
}
export declare function decodeAwardEmojiJson(raw: string): Result.Result<GitLabAwardEmojiPage, DecodeFailure>;
export declare function decodeOwnAwardIdJson(raw: string, input: {
    readonly content: PullRequestReactionContent;
    readonly viewer: string;
}): Result.Result<number | null, DecodeFailure>;
export declare const REPOSITORY_BLOBS_GRAPHQL_QUERY = "query($fullPath: ID!, $ref: String!, $paths: [String!]!) {\n  project(fullPath: $fullPath) {\n    repository {\n      blobs(ref: $ref, paths: $paths) {\n        nodes { path oid }\n      }\n    }\n  }\n}";
/** Null means unknown, not deleted; preserve viewed marks. */
export declare function decodeRepositoryBlobsJson(raw: string): Result.Result<ReadonlyMap<string, string> | null, DecodeFailure>;
export {};
