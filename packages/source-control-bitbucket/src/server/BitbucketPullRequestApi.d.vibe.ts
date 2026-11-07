import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import type { PullRequestAction, PullRequestCheck, PullRequestComment, PullRequestCommit, PullRequestListState, PullRequestMergeMethod, PullRequestMergeability, PullRequestReviewCommentDraft, PullRequestReviewThread, PullRequestReviewVerdict, PullRequestReviewerCandidateList } from "@t3tools/contracts";
import * as BitbucketApi from "./BitbucketApi.vibe";
import { type BitbucketDiffStat, type BitbucketPullRequest } from "./bitbucketPullRequestJson.vibe";
import type { ProviderListCursor } from "@t3tools/source-control-core/server/PullRequestProvider";
declare const BitbucketPullRequestReadError_base: Schema.Class<BitbucketPullRequestReadError, Schema.TaggedStruct<"BitbucketPullRequestReadError", {
    readonly operation: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketPullRequestReadError extends BitbucketPullRequestReadError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketViewerUnavailableError_base: Schema.Class<BitbucketViewerUnavailableError, Schema.TaggedStruct<"BitbucketViewerUnavailableError", {}>, import("effect/Cause").YieldableError>;
export declare class BitbucketViewerUnavailableError extends BitbucketViewerUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketRepositoryUnsupportedError_base: Schema.Class<BitbucketRepositoryUnsupportedError, Schema.TaggedStruct<"BitbucketRepositoryUnsupportedError", {
    readonly repository: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRepositoryUnsupportedError extends BitbucketRepositoryUnsupportedError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketDiffCommitError_base: Schema.Class<BitbucketDiffCommitError, Schema.TaggedStruct<"BitbucketDiffCommitError", {}>, import("effect/Cause").YieldableError>;
export declare class BitbucketDiffCommitError extends BitbucketDiffCommitError_base {
    get detail(): string;
    get message(): string;
}
export type BitbucketPullRequestApiError = BitbucketApi.BitbucketApiError | BitbucketPullRequestReadError | BitbucketViewerUnavailableError | BitbucketRepositoryUnsupportedError | BitbucketDiffCommitError;
export interface BitbucketPullRequestBatch {
    readonly items: ReadonlyArray<BitbucketPullRequest>;
    readonly truncated: boolean;
}
declare const BitbucketPullRequestApi_base: Context.ServiceClass<BitbucketPullRequestApi, "@t3tools/source-control-bitbucket/server/BitbucketPullRequestApi", {
    readonly getViewer: () => Effect.Effect<string, BitbucketPullRequestApiError>;
    readonly listPullRequests: (input: {
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly limit: number;
        readonly query?: string | undefined;
        readonly cursor?: ProviderListCursor | undefined;
        /** Matched against the login a row shows, which is the nickname or else the display name. */
        readonly author?: string | undefined;
        readonly draft?: boolean | undefined;
    }) => Effect.Effect<BitbucketPullRequestBatch, BitbucketPullRequestApiError>;
    readonly getPullRequest: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<BitbucketPullRequest, BitbucketPullRequestApiError>;
    readonly getRepositoryPermission: (input: {
        readonly repository: string;
    }) => Effect.Effect<boolean, BitbucketPullRequestApiError>;
    readonly getPullRequestDiff: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commit?: string | undefined;
    }) => Effect.Effect<{
        readonly patch: string;
        readonly truncated: boolean;
    }, BitbucketPullRequestApiError>;
    readonly getDiffStat: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<BitbucketDiffStat, BitbucketPullRequestApiError>;
    /** Truncated patches cannot identify absent paths as deleted. */
    readonly getFileRevisions: (input: {
        readonly repository: string;
        readonly number: number;
        readonly paths: readonly string[];
    }) => Effect.Effect<{
        readonly revisions: ReadonlyMap<string, string>;
        readonly complete: boolean;
    }, BitbucketPullRequestApiError>;
    readonly getMergeability: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestMergeability, BitbucketPullRequestApiError>;
    readonly listComments: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly comments: readonly PullRequestComment[];
        readonly threads: readonly PullRequestReviewThread[];
        readonly truncated: boolean;
    }, BitbucketPullRequestApiError>;
    readonly listCommits: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<readonly PullRequestCommit[], BitbucketPullRequestApiError>;
    readonly listChecks: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<readonly PullRequestCheck[], BitbucketPullRequestApiError>;
    readonly listReviewerCandidates: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestReviewerCandidateList, BitbucketPullRequestApiError>;
    readonly setReviewerRequest: (input: {
        readonly repository: string;
        readonly number: number;
        readonly reviewers: readonly {
            readonly id: string;
        }[];
        readonly requested: boolean;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly runAction: (input: {
        readonly repository: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly updateChangeRequest: (input: {
        readonly repository: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly body?: string | undefined;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly comment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly updateComment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly submitReview: (input: {
        readonly repository: string;
        readonly number: number;
        readonly verdict: PullRequestReviewVerdict;
        readonly body: string;
        readonly comments: readonly PullRequestReviewCommentDraft[];
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly replyToComment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly setCommentResolution: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly resolved: boolean;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
}>;
export declare class BitbucketPullRequestApi extends BitbucketPullRequestApi_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getViewer: () => Effect.Effect<string, BitbucketPullRequestApiError>;
    readonly listPullRequests: (input: {
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly limit: number;
        readonly query?: string | undefined;
        readonly cursor?: ProviderListCursor | undefined;
        /** Matched against the login a row shows, which is the nickname or else the display name. */
        readonly author?: string | undefined;
        readonly draft?: boolean | undefined;
    }) => Effect.Effect<BitbucketPullRequestBatch, BitbucketPullRequestApiError>;
    readonly getPullRequest: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<BitbucketPullRequest, BitbucketPullRequestApiError>;
    readonly getRepositoryPermission: (input: {
        readonly repository: string;
    }) => Effect.Effect<boolean, BitbucketPullRequestApiError>;
    readonly getPullRequestDiff: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commit?: string | undefined;
    }) => Effect.Effect<{
        readonly patch: string;
        readonly truncated: boolean;
    }, BitbucketPullRequestApiError>;
    readonly getDiffStat: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<BitbucketDiffStat, BitbucketPullRequestApiError>;
    /** Truncated patches cannot identify absent paths as deleted. */
    readonly getFileRevisions: (input: {
        readonly repository: string;
        readonly number: number;
        readonly paths: ReadonlyArray<string>;
    }) => Effect.Effect<{
        readonly revisions: ReadonlyMap<string, string>;
        readonly complete: boolean;
    }, BitbucketPullRequestApiError>;
    readonly getMergeability: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestMergeability, BitbucketPullRequestApiError>;
    readonly listComments: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly comments: ReadonlyArray<PullRequestComment>;
        readonly threads: ReadonlyArray<PullRequestReviewThread>;
        readonly truncated: boolean;
    }, BitbucketPullRequestApiError>;
    readonly listCommits: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<ReadonlyArray<PullRequestCommit>, BitbucketPullRequestApiError>;
    readonly listChecks: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<ReadonlyArray<PullRequestCheck>, BitbucketPullRequestApiError>;
    readonly listReviewerCandidates: (input: {
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestReviewerCandidateList, BitbucketPullRequestApiError>;
    readonly setReviewerRequest: (input: {
        readonly repository: string;
        readonly number: number;
        readonly reviewers: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly requested: boolean;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly runAction: (input: {
        readonly repository: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly updateChangeRequest: (input: {
        readonly repository: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly body?: string | undefined;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly comment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly updateComment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly submitReview: (input: {
        readonly repository: string;
        readonly number: number;
        readonly verdict: PullRequestReviewVerdict;
        readonly body: string;
        readonly comments: ReadonlyArray<PullRequestReviewCommentDraft>;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly replyToComment: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly body: string;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
    readonly setCommentResolution: (input: {
        readonly repository: string;
        readonly number: number;
        readonly commentId: string;
        readonly resolved: boolean;
    }) => Effect.Effect<void, BitbucketPullRequestApiError>;
}, never, BitbucketApi.BitbucketApi>;
export declare const layer: Layer.Layer<BitbucketPullRequestApi, never, BitbucketApi.BitbucketApi>;
export {};
