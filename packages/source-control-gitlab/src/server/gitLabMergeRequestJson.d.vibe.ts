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
/** @throws {never} */
export declare function decodeMergeRequestListJson(raw: string): Result.Result<GitLabMergeRequestListBatch, DecodeFailure>;
/** @throws {never} */
export declare function decodeMergeRequestDetailJson(raw: string): Result.Result<GitLabMergeRequestDetail, DecodeFailure>;
/** @throws {never} */
export declare function decodeViewerJson(raw: string): Result.Result<string | null, DecodeFailure>;
/** @throws {never} */
export declare function decodeProjectUsersJson(raw: string): Result.Result<GitLabProjectUsers, DecodeFailure>;
export interface GitLabProjectLabels {
    readonly labels: ReadonlyArray<PullRequestLabel>;
    readonly rawCount: number;
}
/** @throws {never} */
export declare function decodeProjectLabelsJson(raw: string): Result.Result<GitLabProjectLabels, DecodeFailure>;
/** @throws {never} */
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
/** @throws {never} */
export declare function decodeDiscussionsJson(raw: string): Result.Result<GitLabDiscussions, DecodeFailure>;
/** @throws {never} */
export declare function decodeDiffRefsJson(raw: string): Result.Result<GitLabDiffRefs | null, DecodeFailure>;
/** @throws {never} */
export declare function decodeNotesJson(raw: string): Result.Result<{
    readonly comments: ReadonlyArray<PullRequestComment>;
    readonly rawCount: number;
}, DecodeFailure>;
/** @throws {never} */
export declare function decodeCommitsJson(raw: string): Result.Result<ReadonlyArray<PullRequestCommit>, DecodeFailure>;
/** @throws {never} */
export declare function decodeCommitDiffRefsJson(raw: string): Result.Result<GitLabDiffRefs | null, DecodeFailure>;
export interface GitLabMergeRequestPatch {
    readonly patch: string;
    readonly truncated: boolean;
    readonly rawCount: number;
}
/** @throws {never} */
export declare function decodeMergeRequestDiffsJson(raw: string): Result.Result<GitLabMergeRequestPatch, DecodeFailure>;
/**
 * Older GitLab instances return all files in a non-paginated merge request wrapper.
 * @throws {never}
 */
export declare function decodeMergeRequestChangesJson(raw: string): Result.Result<GitLabMergeRequestPatch, DecodeFailure>;
/** @throws {never} */
export declare function gitLabAwardName(content: PullRequestReactionContent): string;
export declare const AWARD_EMOJI_GRAPHQL_QUERY = "query($fullPath: ID!, $iid: String!, $cursor: String) {\n  currentUser { username }\n  project(fullPath: $fullPath) {\n    mergeRequest(iid: $iid) {\n      awardEmoji { nodes { name user { username } } }\n      notes(first: 100, after: $cursor) {\n        pageInfo { hasNextPage endCursor }\n        nodes { id awardEmoji { nodes { name user { username } } } }\n      }\n    }\n  }\n}";
export interface GitLabAwardEmojiPage {
    readonly reactions: ReadonlyArray<PullRequestReaction>;
    readonly reactionsByNoteId: ReadonlyMap<string, ReadonlyArray<PullRequestReaction>>;
    readonly nextCursor: string | null;
}
/** @throws {never} */
export declare function decodeAwardEmojiJson(raw: string): Result.Result<GitLabAwardEmojiPage, DecodeFailure>;
/** @throws {never} */
export declare function decodeOwnAwardIdJson(raw: string, input: {
    readonly content: PullRequestReactionContent;
    readonly viewer: string;
}): Result.Result<number | null, DecodeFailure>;
export declare const REPOSITORY_BLOBS_GRAPHQL_QUERY = "query($fullPath: ID!, $ref: String!, $paths: [String!]!) {\n  project(fullPath: $fullPath) {\n    repository {\n      blobs(ref: $ref, paths: $paths) {\n        nodes { path oid }\n      }\n    }\n  }\n}";
/**
 * Null means unknown, not deleted; preserve viewed marks.
 * @throws {never}
 */
export declare function decodeRepositoryBlobsJson(raw: string): Result.Result<ReadonlyMap<string, string> | null, DecodeFailure>;
export {};
