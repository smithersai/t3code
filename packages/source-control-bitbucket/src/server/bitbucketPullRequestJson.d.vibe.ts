import * as Cause from "effect/Cause";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import type { PullRequestActor, PullRequestCheck, PullRequestComment, PullRequestCommit, PullRequestMergeability, PullRequestReviewerCandidate, PullRequestReviewThread, PullRequestState } from "@t3tools/contracts";
declare const RawCommentSchema: Schema.Struct<{
    readonly id: Schema.Int;
    readonly content: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly raw: Schema.optional<Schema.String>;
    }>>>;
    readonly user: Schema.optional<Schema.NullOr<Schema.Struct<{
        /** Reviewer writes require UUIDs, not displayed handles. */
        readonly uuid: Schema.optional<Schema.NullOr<Schema.String>>;
        /** App accounts omit this; use `display_name`. */
        readonly nickname: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly display_name: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly links: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly avatar: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly href: Schema.optional<Schema.String>;
            }>>>;
        }>>>;
    }>>>;
    readonly created_on: Schema.String;
    readonly deleted: Schema.optional<Schema.Boolean>;
    readonly pending: Schema.optional<Schema.Boolean>;
    readonly parent: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly id: Schema.Int;
    }>>>;
    readonly inline: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly path: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly from: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly to: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly outdated: Schema.optional<Schema.NullOr<Schema.Boolean>>;
    }>>>;
    readonly resolution: Schema.optional<Schema.NullOr<Schema.Unknown>>;
    readonly links: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly html: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly href: Schema.optional<Schema.String>;
        }>>>;
    }>>>;
}>;
export interface BitbucketPullRequest {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly author: PullRequestActor | null;
    readonly headBranch: string;
    readonly headSha: string | null;
    readonly headRepositoryNameWithOwner: string | null;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    /** Listings omit conflict state; detail reads use the conflicts endpoint. */
    readonly mergeability: PullRequestMergeability;
    readonly createdAt: string;
    readonly updatedAt: string;
    /** Merge/decline time; later comments move `updatedAt`. */
    readonly closedAt: string | null;
    readonly body: string;
    readonly reviewRequestLogins: ReadonlyArray<string>;
    readonly reviewers: ReadonlyArray<PullRequestActor>;
    readonly reviewerIds: ReadonlyArray<string>;
    readonly reviews: ReadonlyArray<PullRequestComment>;
}
type DecodeFailure = Cause.Cause<Schema.SchemaError>;
export interface BitbucketPage<A> {
    readonly items: ReadonlyArray<A>;
    readonly next: string | null;
}
export declare function decodePullRequestPageJson(raw: string): Result.Result<BitbucketPage<BitbucketPullRequest>, DecodeFailure>;
export declare function decodePullRequestJson(raw: string): Result.Result<BitbucketPullRequest, DecodeFailure>;
export declare function decodeViewerJson(raw: string): Result.Result<string | null, DecodeFailure>;
export declare function decodeRepositoryPermissionJson(raw: string): Result.Result<boolean, DecodeFailure>;
/** Repository membership requires admin access; reviews can target any workspace member. */
export declare function decodeWorkspaceMembersJson(raw: string): Result.Result<BitbucketPage<PullRequestReviewerCandidate>, DecodeFailure>;
export type BitbucketRawComment = Schema.Schema.Type<typeof RawCommentSchema>;
export interface BitbucketComments {
    readonly comments: ReadonlyArray<PullRequestComment>;
    /** Raw entries for thread assembly across page boundaries. */
    readonly entries: ReadonlyArray<BitbucketRawComment>;
    readonly next: string | null;
}
export declare function buildReviewThreads(comments: ReadonlyArray<BitbucketRawComment>): ReadonlyArray<PullRequestReviewThread>;
export declare function decodeCommentsJson(raw: string): Result.Result<BitbucketComments, DecodeFailure>;
export declare function decodeCommitsJson(raw: string): Result.Result<BitbucketPage<PullRequestCommit>, DecodeFailure>;
export declare function decodeStatusesJson(raw: string): Result.Result<BitbucketPage<PullRequestCheck>, DecodeFailure>;
export interface BitbucketDiffStat {
    readonly additions: number;
    readonly deletions: number;
    readonly changedFiles: number;
}
export interface BitbucketDiffStatPage extends BitbucketDiffStat {
    readonly next: string | null;
}
export declare function decodeDiffstatJson(raw: string): Result.Result<BitbucketDiffStatPage, DecodeFailure>;
export declare function decodeConflictsJson(raw: string): Result.Result<PullRequestMergeability, DecodeFailure>;
export {};
