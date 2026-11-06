import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import type { PullRequestAction, PullRequestActor, PullRequestComment, PullRequestCommit, PullRequestInvolvement, PullRequestLabel, PullRequestListFilters, PullRequestListState, PullRequestMergeCapabilities, PullRequestMergeMethod, PullRequestReaction, PullRequestReactionContent, PullRequestReviewCommentDraft, PullRequestReviewThread, PullRequestReviewVerdict, PullRequestReviewerCandidateList } from "@t3tools/contracts";
import * as GitLabCli from "./GitLabCli.vibe";
import { type GitLabMergeRequestDetail, type GitLabMergeRequestListItem } from "./gitLabMergeRequestJson.vibe";
import type { ProviderListCursor } from "@t3tools/source-control-core/server/PullRequestProvider";
declare const GitLabMergeRequestReadError_base: Schema.Class<GitLabMergeRequestReadError, Schema.TaggedStruct<"GitLabMergeRequestReadError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly operation: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabMergeRequestReadError extends GitLabMergeRequestReadError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabViewerUnavailableError_base: Schema.Class<GitLabViewerUnavailableError, Schema.TaggedStruct<"GitLabViewerUnavailableError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabViewerUnavailableError extends GitLabViewerUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabDiffRefsUnavailableError_base: Schema.Class<GitLabDiffRefsUnavailableError, Schema.TaggedStruct<"GitLabDiffRefsUnavailableError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly number: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabDiffRefsUnavailableError extends GitLabDiffRefsUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabDiffCursorError_base: Schema.Class<GitLabDiffCursorError, Schema.TaggedStruct<"GitLabDiffCursorError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabDiffCursorError extends GitLabDiffCursorError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabDiffCommitError_base: Schema.Class<GitLabDiffCommitError, Schema.TaggedStruct<"GitLabDiffCommitError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabDiffCommitError extends GitLabDiffCommitError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabDiffCommitParentUnavailableError_base: Schema.Class<GitLabDiffCommitParentUnavailableError, Schema.TaggedStruct<"GitLabDiffCommitParentUnavailableError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly commit: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabDiffCommitParentUnavailableError extends GitLabDiffCommitParentUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabDiffFileContentsUnavailableError_base: Schema.Class<GitLabDiffFileContentsUnavailableError, Schema.TaggedStruct<"GitLabDiffFileContentsUnavailableError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly path: Schema.String;
    readonly reason: Schema.Literals<readonly ["oversized", "binary"]>;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabDiffFileContentsUnavailableError extends GitLabDiffFileContentsUnavailableError_base {
    get detail(): string;
    get message(): string;
}
export type GitLabPullRequestCliError = GitLabCli.GitLabCliError | GitLabMergeRequestReadError | GitLabDiffCursorError | GitLabDiffCommitError | GitLabDiffCommitParentUnavailableError | GitLabDiffFileContentsUnavailableError | GitLabDiffRefsUnavailableError | GitLabViewerUnavailableError;
export interface GitLabMergeRequestListBatch {
    readonly items: ReadonlyArray<GitLabMergeRequestListItem>;
    readonly truncated: boolean;
    readonly cursorAdvance: number;
}
export interface GitLabMergeRequestDiffSlice {
    readonly patch: string;
    readonly truncated: boolean;
    readonly nextCursor: string | null;
}
declare const GitLabPullRequestCli_base: Context.ServiceClass<GitLabPullRequestCli, "@t3tools/source-control-gitlab/server/GitLabPullRequestCli", {
    readonly getViewerUsername: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string, GitLabPullRequestCliError>;
    readonly listMergeRequests: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly involvement: PullRequestInvolvement;
        readonly viewer: string;
        readonly limit: number;
        readonly query?: string | undefined;
        readonly cursor?: ProviderListCursor | undefined;
        readonly filters?: PullRequestListFilters | undefined;
    }) => Effect.Effect<GitLabMergeRequestListBatch, GitLabPullRequestCliError>;
    readonly getMergeRequestDetail: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<GitLabMergeRequestDetail, GitLabPullRequestCliError>;
    readonly listNotes: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly comments: readonly PullRequestComment[];
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly listCommits: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<readonly PullRequestCommit[], GitLabPullRequestCliError>;
    readonly getMergeRequestDiff: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly cursor?: string | undefined;
        readonly commit?: string | undefined;
    }) => Effect.Effect<GitLabMergeRequestDiffSlice, GitLabPullRequestCliError>;
    readonly getMergeRequestDiffFileContents: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly commit?: string | undefined;
        readonly changeType: "change" | "rename-pure" | "rename-changed" | "new" | "deleted";
        readonly oldPath: string;
        readonly newPath: string;
    }) => Effect.Effect<{
        readonly oldContents: string;
        readonly newContents: string;
    }, GitLabPullRequestCliError>;
    readonly getProjectMergeCapabilities: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<PullRequestMergeCapabilities, GitLabPullRequestCliError>;
    readonly getFileRevisions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly paths: readonly string[];
    }) => Effect.Effect<ReadonlyMap<string, string>, GitLabPullRequestCliError>;
    readonly listReviewerCandidates: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestReviewerCandidateList, GitLabPullRequestCliError>;
    readonly listProjectLabels: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly search?: string | undefined;
    }) => Effect.Effect<{
        readonly items: readonly PullRequestLabel[];
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly listProjectUsers: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly search?: string | undefined;
    }) => Effect.Effect<{
        readonly items: readonly PullRequestActor[];
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly setReviewerRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly reviewers: readonly {
            readonly id: string;
        }[];
        readonly requested: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly runMergeRequestAction: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly updateMergeRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly description?: string | undefined;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly commentOnMergeRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly updateNote: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly noteId: string;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly listDiscussions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly threads: readonly PullRequestReviewThread[];
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly submitReview: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly verdict: PullRequestReviewVerdict;
        readonly body: string;
        readonly comments: readonly PullRequestReviewCommentDraft[];
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly replyToDiscussion: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly discussionId: string;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly setDiscussionResolution: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly discussionId: string;
        readonly resolved: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly listReactions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly reactions: readonly PullRequestReaction[];
        readonly reactionsByNoteId: ReadonlyMap<string, readonly PullRequestReaction[]>;
    }, GitLabPullRequestCliError>;
    readonly setReaction: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly noteId?: string | undefined;
        readonly content: PullRequestReactionContent;
        readonly reacted: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
}>;
export declare class GitLabPullRequestCli extends GitLabPullRequestCli_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getViewerUsername: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string, GitLabPullRequestCliError>;
    readonly listMergeRequests: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly involvement: PullRequestInvolvement;
        readonly viewer: string;
        readonly limit: number;
        readonly query?: string | undefined;
        readonly cursor?: ProviderListCursor | undefined;
        readonly filters?: PullRequestListFilters | undefined;
    }) => Effect.Effect<GitLabMergeRequestListBatch, GitLabPullRequestCliError>;
    readonly getMergeRequestDetail: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<GitLabMergeRequestDetail, GitLabPullRequestCliError>;
    readonly listNotes: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly comments: ReadonlyArray<PullRequestComment>;
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly listCommits: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<ReadonlyArray<PullRequestCommit>, GitLabPullRequestCliError>;
    readonly getMergeRequestDiff: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly cursor?: string | undefined;
        readonly commit?: string | undefined;
    }) => Effect.Effect<GitLabMergeRequestDiffSlice, GitLabPullRequestCliError>;
    readonly getMergeRequestDiffFileContents: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly commit?: string | undefined;
        readonly changeType: "change" | "rename-pure" | "rename-changed" | "new" | "deleted";
        readonly oldPath: string;
        readonly newPath: string;
    }) => Effect.Effect<{
        readonly oldContents: string;
        readonly newContents: string;
    }, GitLabPullRequestCliError>;
    readonly getProjectMergeCapabilities: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<PullRequestMergeCapabilities, GitLabPullRequestCliError>;
    readonly getFileRevisions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly paths: ReadonlyArray<string>;
    }) => Effect.Effect<ReadonlyMap<string, string>, GitLabPullRequestCliError>;
    readonly listReviewerCandidates: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<PullRequestReviewerCandidateList, GitLabPullRequestCliError>;
    readonly listProjectLabels: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly search?: string | undefined;
    }) => Effect.Effect<{
        readonly items: ReadonlyArray<PullRequestLabel>;
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly listProjectUsers: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly search?: string | undefined;
    }) => Effect.Effect<{
        readonly items: ReadonlyArray<PullRequestActor>;
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly setReviewerRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly reviewers: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly requested: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly runMergeRequestAction: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly updateMergeRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly description?: string | undefined;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly commentOnMergeRequest: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly updateNote: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly noteId: string;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly listDiscussions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly threads: ReadonlyArray<PullRequestReviewThread>;
        readonly truncated: boolean;
    }, GitLabPullRequestCliError>;
    readonly submitReview: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly verdict: PullRequestReviewVerdict;
        readonly body: string;
        readonly comments: ReadonlyArray<PullRequestReviewCommentDraft>;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly replyToDiscussion: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly discussionId: string;
        readonly body: string;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly setDiscussionResolution: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly discussionId: string;
        readonly resolved: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
    readonly listReactions: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
    }) => Effect.Effect<{
        readonly reactions: ReadonlyArray<PullRequestReaction>;
        readonly reactionsByNoteId: ReadonlyMap<string, ReadonlyArray<PullRequestReaction>>;
    }, GitLabPullRequestCliError>;
    readonly setReaction: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly number: number;
        readonly noteId?: string | undefined;
        readonly content: PullRequestReactionContent;
        readonly reacted: boolean;
    }) => Effect.Effect<void, GitLabPullRequestCliError>;
}, never, GitLabCli.GitLabCli>;
export declare const layer: Layer.Layer<GitLabPullRequestCli, never, GitLabCli.GitLabCli>;
export {};
