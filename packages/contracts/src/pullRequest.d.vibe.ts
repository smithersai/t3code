import * as Schema from "effect/Schema";
import * as Effect from "effect/Effect";
import * as HttpServerRespondable from "effect/http/HttpServerRespondable";
import * as HttpServerResponse from "effect/http/HttpServerResponse";
import { ForwardCompatibleArray } from "./baseSchemas.js";
export declare const PullRequestInvolvement: Schema.Literals<readonly ["all", "reviewing", "authored"]>;
export type PullRequestInvolvement = typeof PullRequestInvolvement.Type;
export declare const PullRequestState: Schema.Literals<readonly ["open", "closed", "merged"]>;
export type PullRequestState = typeof PullRequestState.Type;
export declare const PullRequestListState: Schema.Literals<readonly ["all", "open", "closed", "merged"]>;
export type PullRequestListState = typeof PullRequestListState.Type;
export declare const PullRequestReviewDecision: Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>;
export type PullRequestReviewDecision = typeof PullRequestReviewDecision.Type;
export declare const PullRequestListFilters: Schema.Struct<{
    readonly draft: Schema.optional<Schema.Literals<readonly ["only", "hide"]>>;
    readonly review: Schema.optional<Schema.Literals<readonly ["approved", "changes-requested", "review-required", "none"]>>;
    readonly checks: Schema.optional<Schema.Literals<readonly ["passing", "failing"]>>;
    /** GitHub label qualifiers: every group must match; any name within a group suffices. */
    readonly labels: Schema.optional<Schema.$Array<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
    readonly excludedLabels: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly author: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestListFilters = typeof PullRequestListFilters.Type;
export declare const PullRequestChecksState: Schema.Literals<readonly ["passing", "failing", "pending"]>;
export type PullRequestChecksState = typeof PullRequestChecksState.Type;
export declare const PullRequestMergeability: Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>;
export type PullRequestMergeability = typeof PullRequestMergeability.Type;
export declare const PullRequestMergeMethod: Schema.Literals<readonly ["merge", "squash", "rebase"]>;
export type PullRequestMergeMethod = typeof PullRequestMergeMethod.Type;
export declare const PullRequestAction: Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>;
export type PullRequestAction = typeof PullRequestAction.Type;
export declare const PullRequestUpdateMethod: Schema.Literals<readonly ["merge", "rebase"]>;
export type PullRequestUpdateMethod = typeof PullRequestUpdateMethod.Type;
export declare const PullRequestBaseComparison: Schema.Literals<readonly ["up-to-date", "behind", "unknown"]>;
export type PullRequestBaseComparison = typeof PullRequestBaseComparison.Type;
export declare const PullRequestActor: Schema.Struct<{
    readonly isBot: Schema.optional<Schema.Boolean>;
    readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.NullOr<Schema.String>;
    readonly avatarUrl: Schema.NullOr<Schema.String>;
}>;
export type PullRequestActor = typeof PullRequestActor.Type;
export declare const PullRequestLabel: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly color: Schema.NullOr<Schema.String>;
}>;
export type PullRequestLabel = typeof PullRequestLabel.Type;
export declare const PullRequestCheckStatus: Schema.Literals<readonly ["pending", "action-required", "success", "failure", "skipped", "neutral", "cancelled"]>;
export type PullRequestCheckStatus = typeof PullRequestCheckStatus.Type;
export declare const PullRequestCheck: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly status: Schema.Literals<readonly ["pending", "action-required", "success", "failure", "skipped", "neutral", "cancelled"]>;
    readonly description: Schema.NullOr<Schema.String>;
    readonly url: Schema.NullOr<Schema.String>;
    readonly required: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestCheck = typeof PullRequestCheck.Type;
export declare const PullRequestReactionContent: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
export type PullRequestReactionContent = typeof PullRequestReactionContent.Type;
export declare const PullRequestReaction: Schema.Struct<{
    readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
    readonly count: Schema.Int;
    /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
    readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly viewerHasReacted: Schema.Boolean;
}>;
export type PullRequestReaction = typeof PullRequestReaction.Type;
export declare const PullRequestCommentKind: Schema.Literals<readonly ["issue-comment", "review-comment", "review"]>;
export type PullRequestCommentKind = typeof PullRequestCommentKind.Type;
export declare const PullRequestComment: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["issue-comment", "review-comment", "review"]>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly body: Schema.String;
    readonly createdAt: Schema.String;
    readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly url: Schema.NullOr<Schema.String>;
    readonly path: Schema.NullOr<Schema.String>;
    readonly reviewState: Schema.NullOr<Schema.String>;
    readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
        readonly count: Schema.Int;
        /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
        readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly viewerHasReacted: Schema.Boolean;
    }>>>;
    readonly canEdit: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestComment = typeof PullRequestComment.Type;
export declare const PullRequestDiffSide: Schema.Literals<readonly ["left", "right"]>;
export type PullRequestDiffSide = typeof PullRequestDiffSide.Type;
export declare const PullRequestReviewVerdict: Schema.Literals<readonly ["comment", "approve", "request-changes"]>;
export type PullRequestReviewVerdict = typeof PullRequestReviewVerdict.Type;
export declare const PullRequestThreadComment: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly body: Schema.String;
    readonly createdAt: Schema.String;
    readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly url: Schema.NullOr<Schema.String>;
    readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
        readonly count: Schema.Int;
        /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
        readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly viewerHasReacted: Schema.Boolean;
    }>>>;
    readonly canEdit: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestThreadComment = typeof PullRequestThreadComment.Type;
export declare const PullRequestReviewThread: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly line: Schema.NullOr<Schema.Int>;
    readonly side: Schema.Literals<readonly ["left", "right"]>;
    readonly isResolved: Schema.Boolean;
    readonly isOutdated: Schema.Boolean;
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>;
        readonly body: Schema.String;
        readonly createdAt: Schema.String;
        readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
            readonly count: Schema.Int;
            /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
            readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly viewerHasReacted: Schema.Boolean;
        }>>>;
        readonly canEdit: Schema.optional<Schema.Boolean>;
    }>>;
    readonly commentCount: Schema.optional<Schema.Int>;
    readonly nextCommentsCursor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Can only narrow repository-wide resolve permission. Absent when unreported. */
    readonly canResolve: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestReviewThread = typeof PullRequestReviewThread.Type;
export declare const PullRequestReviewerKind: Schema.Literals<readonly ["user", "team"]>;
export type PullRequestReviewerKind = typeof PullRequestReviewerKind.Type;
export declare const PullRequestReviewerCandidate: Schema.Struct<{
    readonly isBot: Schema.optional<Schema.Boolean>;
    readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.NullOr<Schema.String>;
    readonly avatarUrl: Schema.NullOr<Schema.String>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["user", "team"]>;
    readonly isRequested: Schema.Boolean;
}>;
export type PullRequestReviewerCandidate = typeof PullRequestReviewerCandidate.Type;
export declare const PullRequestReviewerCandidateList: Schema.Struct<{
    readonly candidates: Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["user", "team"]>;
        readonly isRequested: Schema.Boolean;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type PullRequestReviewerCandidateList = typeof PullRequestReviewerCandidateList.Type;
export declare const PullRequestLabelCandidate: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly color: Schema.NullOr<Schema.String>;
    readonly description: Schema.NullOr<Schema.String>;
    readonly isApplied: Schema.Boolean;
}>;
export type PullRequestLabelCandidate = typeof PullRequestLabelCandidate.Type;
export declare const PullRequestLabelCandidateList: Schema.Struct<{
    readonly candidates: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly isApplied: Schema.Boolean;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type PullRequestLabelCandidateList = typeof PullRequestLabelCandidateList.Type;
export declare const PullRequestCommit: Schema.Struct<{
    readonly oid: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly messageHeadline: Schema.String;
    readonly committedDate: Schema.String;
    readonly additions: Schema.optional<Schema.Int>;
    readonly deletions: Schema.optional<Schema.Int>;
    readonly authors: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>>;
}>;
export type PullRequestCommit = typeof PullRequestCommit.Type;
export declare const PullRequestReviewCapabilities: Schema.Struct<{
    readonly inlineComment: Schema.Boolean;
    /**
     * An inline comment can cover a range of lines rather than its last one. Absent, as from a
     * server that predates it, means one line.
     */
    readonly rangeComment: Schema.optional<Schema.Boolean>;
    readonly reply: Schema.Boolean;
    readonly resolve: Schema.Boolean;
    readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
}>;
export type PullRequestReviewCapabilities = typeof PullRequestReviewCapabilities.Type;
export declare const PullRequestEditCapabilities: Schema.Struct<{
    readonly changeRequest: Schema.Boolean;
    readonly comment: Schema.Boolean;
}>;
export type PullRequestEditCapabilities = typeof PullRequestEditCapabilities.Type;
export declare const PullRequestReviewerCapabilities: Schema.Struct<{
    readonly request: Schema.Boolean;
    readonly listCandidates: Schema.Boolean;
}>;
export type PullRequestReviewerCapabilities = typeof PullRequestReviewerCapabilities.Type;
export declare const PullRequestViewedFilesStore: Schema.Literals<readonly ["host", "environment"]>;
export type PullRequestViewedFilesStore = typeof PullRequestViewedFilesStore.Type;
export declare const PullRequestCapabilities: Schema.Struct<{
    readonly diff: Schema.Boolean;
    readonly comment: Schema.Boolean;
    readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
    readonly mergeMethods: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
    readonly deleteBranch: Schema.optional<Schema.Boolean>;
    /**
     * Absent where it cannot at all, which is every host that has not said otherwise — so a
     * provider that says nothing offers nothing.
     */
    readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
    readonly search: Schema.Boolean;
    readonly reactions: Schema.optional<Schema.Boolean>;
    readonly viewedFiles: Schema.optional<Schema.Literals<readonly ["host", "environment"]>>;
    readonly review: Schema.Struct<{
        readonly inlineComment: Schema.Boolean;
        /**
         * An inline comment can cover a range of lines rather than its last one. Absent, as from a
         * server that predates it, means one line.
         */
        readonly rangeComment: Schema.optional<Schema.Boolean>;
        readonly reply: Schema.Boolean;
        readonly resolve: Schema.Boolean;
        readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
    }>;
    readonly reviewers: Schema.Struct<{
        readonly request: Schema.Boolean;
        readonly listCandidates: Schema.Boolean;
    }>;
    readonly edit: Schema.optional<Schema.Struct<{
        readonly changeRequest: Schema.Boolean;
        readonly comment: Schema.Boolean;
    }>>;
    readonly stacks: Schema.optional<Schema.Boolean>;
    readonly stackActions: Schema.optional<Schema.Boolean>;
    readonly labels: Schema.optional<Schema.Boolean>;
    /**
     * Every head gets at least one check, so a head that has gone a while without any means none
     * reported rather than that the repository runs none. Absent means an empty list says nothing.
     */
    readonly checksAlwaysReport: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestCapabilities = typeof PullRequestCapabilities.Type;
/** Unreported host permissions are granted. */
export declare const PullRequestViewerPermissions: Schema.Struct<{
    readonly stackRebase: Schema.optional<Schema.Boolean>;
    readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
    readonly comment: Schema.Boolean;
    readonly resolve: Schema.Boolean;
    readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
    readonly requestReviewers: Schema.Boolean;
    readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
    readonly labels: Schema.optional<Schema.Boolean>;
    readonly editChangeRequest: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestViewerPermissions = typeof PullRequestViewerPermissions.Type;
export declare const PullRequestMergeCapabilities: Schema.Struct<{
    readonly merge: Schema.Boolean;
    readonly squash: Schema.Boolean;
    readonly rebase: Schema.Boolean;
}>;
export type PullRequestMergeCapabilities = typeof PullRequestMergeCapabilities.Type;
export declare const PullRequestStackMembership: Schema.Struct<{
    readonly number: Schema.Int;
    readonly position: Schema.Int;
    readonly size: Schema.Int;
    readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestStackMembership = typeof PullRequestStackMembership.Type;
export declare const PullRequestListEntry: Schema.Struct<{
    readonly stack: Schema.optional<Schema.Struct<{
        readonly number: Schema.Int;
        readonly position: Schema.Int;
        readonly size: Schema.Int;
        readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.Boolean;
    readonly mergeability: Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>;
    /** Zero until fetched through `PullRequestListStatsInput`; GitHub listings omit counts. */
    readonly additions: Schema.Int;
    readonly deletions: Schema.Int;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly observedAt: Schema.optional<Schema.Finite>;
    readonly viewerReviewRequested: Schema.Boolean;
    readonly labels: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>;
    readonly reviewDecision: Schema.optional<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>;
    readonly checksState: Schema.optional<Schema.Literals<readonly ["passing", "failing", "pending"]>>;
}>;
export type PullRequestListEntry = typeof PullRequestListEntry.Type;
export declare const PullRequestListCursors: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>;
export type PullRequestListCursors = typeof PullRequestListCursors.Type;
export declare const PullRequestListInput: Schema.Struct<{
    readonly state: Schema.Literals<readonly ["all", "open", "closed", "merged"]>;
    readonly involvement: Schema.optional<Schema.Literals<readonly ["all", "reviewing", "authored"]>>;
    readonly filters: Schema.optional<Schema.Struct<{
        readonly draft: Schema.optional<Schema.Literals<readonly ["only", "hide"]>>;
        readonly review: Schema.optional<Schema.Literals<readonly ["approved", "changes-requested", "review-required", "none"]>>;
        readonly checks: Schema.optional<Schema.Literals<readonly ["passing", "failing"]>>;
        /** GitHub label qualifiers: every group must match; any name within a group suffices. */
        readonly labels: Schema.optional<Schema.$Array<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
        readonly excludedLabels: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly author: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
    readonly projectIds: Schema.optional<Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>>;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly limit: Schema.optional<Schema.Int>;
    readonly cursors: Schema.optional<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly query: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestListInput = typeof PullRequestListInput.Type;
export declare const PullRequestProviderSummary: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly searchesOnHost: Schema.Boolean;
    readonly actions: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>>;
    readonly projectCount: Schema.Int;
    readonly configured: Schema.Boolean;
    readonly detail: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestProviderSummary = typeof PullRequestProviderSummary.Type;
export declare const PullRequestListProjectError: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestListProjectError = typeof PullRequestListProjectError.Type;
export declare const PullRequestListResult: Schema.Struct<{
    /** Unreadable hosts are absent; JSON codecs reject optional record values. */
    readonly viewers: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly providers: Schema.$Array<Schema.Struct<{
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly searchesOnHost: Schema.Boolean;
        readonly actions: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>>;
        readonly projectCount: Schema.Int;
        readonly configured: Schema.Boolean;
        readonly detail: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    /** Re-sort after appending: one repository's older slice may outrank another's existing rows. */
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly stack: Schema.optional<Schema.Struct<{
            readonly number: Schema.Int;
            readonly position: Schema.Int;
            readonly size: Schema.Int;
            readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly isDraft: Schema.Boolean;
        readonly mergeability: Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>;
        /** Zero until fetched through `PullRequestListStatsInput`; GitHub listings omit counts. */
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
        readonly createdAt: Schema.String;
        readonly updatedAt: Schema.String;
        readonly observedAt: Schema.optional<Schema.Finite>;
        readonly viewerReviewRequested: Schema.Boolean;
        readonly labels: Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly color: Schema.NullOr<Schema.String>;
        }>>;
        readonly reviewDecision: Schema.optional<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>;
        readonly checksState: Schema.optional<Schema.Literals<readonly ["passing", "failing", "pending"]>>;
    }>>;
    readonly errors: Schema.$Array<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly truncated: Schema.Boolean;
    readonly nextCursors: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestListResult = typeof PullRequestListResult.Type;
export declare const PullRequestRef: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
}>;
export type PullRequestRef = typeof PullRequestRef.Type;
export declare const PullRequestRoutingIdentityInput: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestRoutingIdentityInput = typeof PullRequestRoutingIdentityInput.Type;
export declare const PullRequestRoutingIdentityResult: Schema.Struct<{
    readonly accountId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly viewer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestRoutingIdentityResult = typeof PullRequestRoutingIdentityResult.Type;
export declare const PullRequestRoutingResult: Schema.Struct<{
    readonly accountId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly viewer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestRoutingResult = typeof PullRequestRoutingResult.Type;
export declare const PullRequestLinkedThreadsResult: Schema.Struct<{
    readonly threads: Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly title: Schema.String;
        readonly archivedAt: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type PullRequestLinkedThreadsResult = typeof PullRequestLinkedThreadsResult.Type;
export declare const PullRequestPreview: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.Boolean;
    readonly createdAt: Schema.String;
}>;
export type PullRequestPreview = typeof PullRequestPreview.Type;
export declare const PullRequestSummary: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.optional<Schema.Boolean>;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly updatedAt: Schema.String;
    readonly observedAt: Schema.optional<Schema.Finite>;
    readonly author: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>>;
    readonly additions: Schema.optional<Schema.Int>;
    readonly deletions: Schema.optional<Schema.Int>;
    readonly changedFiles: Schema.optional<Schema.Int>;
    readonly reviewDecision: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>>;
    readonly checksState: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["passing", "failing", "pending"]>>>;
    readonly mergeability: Schema.optional<Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>>;
    /** Null when the host says the pull request is in no stack; absent when the read did not ask. */
    readonly stack: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly number: Schema.Int;
        readonly position: Schema.Int;
        readonly size: Schema.Int;
        readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
}>;
export type PullRequestSummary = typeof PullRequestSummary.Type;
export declare const PullRequestStack: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly layers: Schema.$Array<Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.optional<Schema.String>;
        readonly isDraft: Schema.optional<Schema.Boolean>;
        readonly headSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    }>>;
}>;
export type PullRequestStack = typeof PullRequestStack.Type;
export declare const PullRequestDiffStat: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly additions: Schema.Int;
    readonly deletions: Schema.Int;
}>;
export type PullRequestDiffStat = typeof PullRequestDiffStat.Type;
export declare const PullRequestListStatsInput: Schema.Struct<{
    readonly refs: Schema.$Array<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly allowStale: Schema.optional<Schema.Boolean>;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
    }>>;
}>;
export type PullRequestListStatsInput = typeof PullRequestListStatsInput.Type;
export declare const PullRequestListStatsResult: Schema.Struct<{
    readonly stats: Schema.$Array<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>>;
}>;
export type PullRequestListStatsResult = typeof PullRequestListStatsResult.Type;
export declare const PullRequestFilterOptionKind: Schema.Literals<readonly ["labels", "authors"]>;
export type PullRequestFilterOptionKind = typeof PullRequestFilterOptionKind.Type;
/** Scoped like `PullRequestListInput`, so the options come from the repositories it lists. */
export declare const PullRequestFilterOptionsInput: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["labels", "authors"]>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
    readonly projectIds: Schema.optional<Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>>;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly query: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestFilterOptionsInput = typeof PullRequestFilterOptionsInput.Type;
export declare const PullRequestFilterOptions: Schema.Struct<{
    readonly labels: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>;
    readonly authors: Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type PullRequestFilterOptions = typeof PullRequestFilterOptions.Type;
/**
 * A separate request rather than a flag on the reads, so an explicit "refresh" one person
 * presses is the only thing that spends host requests — every ordinary read shares.
 */
export declare const PullRequestInvalidateInput: Schema.Struct<{
    readonly reference: Schema.optional<Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly allowStale: Schema.optional<Schema.Boolean>;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
    }>>;
    readonly filesViewedOnly: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestInvalidateInput = typeof PullRequestInvalidateInput.Type;
export declare const PullRequestReportStateInput: Schema.Struct<{
    readonly reference: Schema.Struct<{
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly allowStale: Schema.optional<Schema.Boolean>;
        readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly number: Schema.Int;
    }>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.optional<Schema.Boolean>;
}>;
export type PullRequestReportStateInput = typeof PullRequestReportStateInput.Type;
export declare const PullRequestDetail: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly capabilities: Schema.Struct<{
        readonly diff: Schema.Boolean;
        readonly comment: Schema.Boolean;
        readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
        readonly mergeMethods: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
        readonly deleteBranch: Schema.optional<Schema.Boolean>;
        /**
         * Absent where it cannot at all, which is every host that has not said otherwise — so a
         * provider that says nothing offers nothing.
         */
        readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
        readonly search: Schema.Boolean;
        readonly reactions: Schema.optional<Schema.Boolean>;
        readonly viewedFiles: Schema.optional<Schema.Literals<readonly ["host", "environment"]>>;
        readonly review: Schema.Struct<{
            readonly inlineComment: Schema.Boolean;
            /**
             * An inline comment can cover a range of lines rather than its last one. Absent, as from a
             * server that predates it, means one line.
             */
            readonly rangeComment: Schema.optional<Schema.Boolean>;
            readonly reply: Schema.Boolean;
            readonly resolve: Schema.Boolean;
            readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
        }>;
        readonly reviewers: Schema.Struct<{
            readonly request: Schema.Boolean;
            readonly listCandidates: Schema.Boolean;
        }>;
        readonly edit: Schema.optional<Schema.Struct<{
            readonly changeRequest: Schema.Boolean;
            readonly comment: Schema.Boolean;
        }>>;
        readonly stacks: Schema.optional<Schema.Boolean>;
        readonly stackActions: Schema.optional<Schema.Boolean>;
        readonly labels: Schema.optional<Schema.Boolean>;
        /**
         * Every head gets at least one check, so a head that has gone a while without any means none
         * reported rather than that the repository runs none. Absent means an empty list says nothing.
         */
        readonly checksAlwaysReport: Schema.optional<Schema.Boolean>;
    }>;
    readonly viewerPermissions: Schema.Struct<{
        readonly stackRebase: Schema.optional<Schema.Boolean>;
        readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
        readonly comment: Schema.Boolean;
        readonly resolve: Schema.Boolean;
        readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
        readonly requestReviewers: Schema.Boolean;
        readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
        readonly labels: Schema.optional<Schema.Boolean>;
        readonly editChangeRequest: Schema.optional<Schema.Boolean>;
    }>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly body: Schema.String;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.Boolean;
    readonly mergeability: Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>;
    readonly additions: Schema.Int;
    readonly deletions: Schema.Int;
    readonly changedFiles: Schema.Int;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headRepositoryNameWithOwner: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly headSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly observedAt: Schema.optional<Schema.Finite>;
    readonly mergedAt: Schema.NullOr<Schema.String>;
    readonly closedAt: Schema.NullOr<Schema.String>;
    readonly reviewers: Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly labels: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>;
    readonly checks: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["pending", "action-required", "success", "failure", "skipped", "neutral", "cancelled"]>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly required: Schema.optional<Schema.Boolean>;
    }>>;
    readonly mergeCapabilities: Schema.Struct<{
        readonly merge: Schema.Boolean;
        readonly squash: Schema.Boolean;
        readonly rebase: Schema.Boolean;
    }>;
    readonly viewer: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseComparison: Schema.optional<Schema.Literals<readonly ["up-to-date", "behind", "unknown"]>>;
    readonly behindBy: Schema.optional<Schema.Int>;
    /** Absent means the host does not report auto-merge state, not that it is off. */
    readonly autoMergeEnabled: Schema.optional<Schema.Boolean>;
    readonly autoMergeMethod: Schema.optional<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
    readonly workflowApprovalsRequired: Schema.optional<Schema.Int>;
}>;
export type PullRequestDetail = typeof PullRequestDetail.Type;
export declare const PullRequestChecks: Schema.Struct<{
    readonly observedAt: Schema.optional<Schema.Finite>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly checks: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["pending", "action-required", "success", "failure", "skipped", "neutral", "cancelled"]>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly required: Schema.optional<Schema.Boolean>;
    }>>;
}>;
export type PullRequestChecks = typeof PullRequestChecks.Type;
export declare const PullRequestActivity: Schema.Struct<{
    readonly author: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>>;
    readonly reviewers: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>>;
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["issue-comment", "review-comment", "review"]>;
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>;
        readonly body: Schema.String;
        readonly createdAt: Schema.String;
        readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly path: Schema.NullOr<Schema.String>;
        readonly reviewState: Schema.NullOr<Schema.String>;
        readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
            readonly count: Schema.Int;
            /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
            readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly viewerHasReacted: Schema.Boolean;
        }>>>;
        readonly canEdit: Schema.optional<Schema.Boolean>;
    }>>;
    readonly commentCount: Schema.Int;
    readonly commentsTruncated: Schema.Boolean;
    readonly reviewThreadsTruncated: Schema.optional<Schema.Boolean>;
    readonly reviewThreads: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly line: Schema.NullOr<Schema.Int>;
        readonly side: Schema.Literals<readonly ["left", "right"]>;
        readonly isResolved: Schema.Boolean;
        readonly isOutdated: Schema.Boolean;
        readonly comments: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly author: Schema.NullOr<Schema.Struct<{
                readonly isBot: Schema.optional<Schema.Boolean>;
                readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.NullOr<Schema.String>;
                readonly avatarUrl: Schema.NullOr<Schema.String>;
            }>>;
            readonly body: Schema.String;
            readonly createdAt: Schema.String;
            readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
                readonly count: Schema.Int;
                /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
                readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly viewerHasReacted: Schema.Boolean;
            }>>>;
            readonly canEdit: Schema.optional<Schema.Boolean>;
        }>>;
        readonly commentCount: Schema.optional<Schema.Int>;
        readonly nextCommentsCursor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Can only narrow repository-wide resolve permission. Absent when unreported. */
        readonly canResolve: Schema.optional<Schema.Boolean>;
    }>>;
    readonly commits: Schema.$Array<Schema.Struct<{
        readonly oid: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly messageHeadline: Schema.String;
        readonly committedDate: Schema.String;
        readonly additions: Schema.optional<Schema.Int>;
        readonly deletions: Schema.optional<Schema.Int>;
        readonly authors: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>>;
    }>>;
    readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
        readonly count: Schema.Int;
        /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
        readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly viewerHasReacted: Schema.Boolean;
    }>>>;
}>;
export type PullRequestActivity = typeof PullRequestActivity.Type;
export declare const PullRequestDetailView: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly capabilities: Schema.Struct<{
        readonly diff: Schema.Boolean;
        readonly comment: Schema.Boolean;
        readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
        readonly mergeMethods: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
        readonly deleteBranch: Schema.optional<Schema.Boolean>;
        /**
         * Absent where it cannot at all, which is every host that has not said otherwise — so a
         * provider that says nothing offers nothing.
         */
        readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
        readonly search: Schema.Boolean;
        readonly reactions: Schema.optional<Schema.Boolean>;
        readonly viewedFiles: Schema.optional<Schema.Literals<readonly ["host", "environment"]>>;
        readonly review: Schema.Struct<{
            readonly inlineComment: Schema.Boolean;
            /**
             * An inline comment can cover a range of lines rather than its last one. Absent, as from a
             * server that predates it, means one line.
             */
            readonly rangeComment: Schema.optional<Schema.Boolean>;
            readonly reply: Schema.Boolean;
            readonly resolve: Schema.Boolean;
            readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
        }>;
        readonly reviewers: Schema.Struct<{
            readonly request: Schema.Boolean;
            readonly listCandidates: Schema.Boolean;
        }>;
        readonly edit: Schema.optional<Schema.Struct<{
            readonly changeRequest: Schema.Boolean;
            readonly comment: Schema.Boolean;
        }>>;
        readonly stacks: Schema.optional<Schema.Boolean>;
        readonly stackActions: Schema.optional<Schema.Boolean>;
        readonly labels: Schema.optional<Schema.Boolean>;
        /**
         * Every head gets at least one check, so a head that has gone a while without any means none
         * reported rather than that the repository runs none. Absent means an empty list says nothing.
         */
        readonly checksAlwaysReport: Schema.optional<Schema.Boolean>;
    }>;
    readonly viewerPermissions: Schema.Struct<{
        readonly stackRebase: Schema.optional<Schema.Boolean>;
        readonly actions: ForwardCompatibleArray<Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>>;
        readonly comment: Schema.Boolean;
        readonly resolve: Schema.Boolean;
        readonly verdicts: ForwardCompatibleArray<Schema.Literals<readonly ["comment", "approve", "request-changes"]>>;
        readonly requestReviewers: Schema.Boolean;
        readonly updateMethods: Schema.optional<ForwardCompatibleArray<Schema.Literals<readonly ["merge", "rebase"]>>>;
        readonly labels: Schema.optional<Schema.Boolean>;
        readonly editChangeRequest: Schema.optional<Schema.Boolean>;
    }>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly workspaceRoot: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly body: Schema.String;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.Boolean;
    readonly mergeability: Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>;
    readonly additions: Schema.Int;
    readonly deletions: Schema.Int;
    readonly changedFiles: Schema.Int;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headRepositoryNameWithOwner: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly headSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly observedAt: Schema.optional<Schema.Finite>;
    readonly mergedAt: Schema.NullOr<Schema.String>;
    readonly closedAt: Schema.NullOr<Schema.String>;
    readonly labels: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly color: Schema.NullOr<Schema.String>;
    }>>;
    readonly checks: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["pending", "action-required", "success", "failure", "skipped", "neutral", "cancelled"]>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly required: Schema.optional<Schema.Boolean>;
    }>>;
    readonly mergeCapabilities: Schema.Struct<{
        readonly merge: Schema.Boolean;
        readonly squash: Schema.Boolean;
        readonly rebase: Schema.Boolean;
    }>;
    readonly viewer: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseComparison: Schema.optional<Schema.Literals<readonly ["up-to-date", "behind", "unknown"]>>;
    readonly behindBy: Schema.optional<Schema.Int>;
    /** Absent means the host does not report auto-merge state, not that it is off. */
    readonly autoMergeEnabled: Schema.optional<Schema.Boolean>;
    readonly autoMergeMethod: Schema.optional<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
    readonly workflowApprovalsRequired: Schema.optional<Schema.Int>;
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["issue-comment", "review-comment", "review"]>;
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>;
        readonly body: Schema.String;
        readonly createdAt: Schema.String;
        readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly path: Schema.NullOr<Schema.String>;
        readonly reviewState: Schema.NullOr<Schema.String>;
        readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
            readonly count: Schema.Int;
            /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
            readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly viewerHasReacted: Schema.Boolean;
        }>>>;
        readonly canEdit: Schema.optional<Schema.Boolean>;
    }>>;
    readonly commentCount: Schema.Int;
    readonly commentsTruncated: Schema.Boolean;
    readonly reviewThreadsTruncated: Schema.optional<Schema.Boolean>;
    readonly reviewThreads: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly line: Schema.NullOr<Schema.Int>;
        readonly side: Schema.Literals<readonly ["left", "right"]>;
        readonly isResolved: Schema.Boolean;
        readonly isOutdated: Schema.Boolean;
        readonly comments: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly author: Schema.NullOr<Schema.Struct<{
                readonly isBot: Schema.optional<Schema.Boolean>;
                readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.NullOr<Schema.String>;
                readonly avatarUrl: Schema.NullOr<Schema.String>;
            }>>;
            readonly body: Schema.String;
            readonly createdAt: Schema.String;
            readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
                readonly count: Schema.Int;
                /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
                readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly viewerHasReacted: Schema.Boolean;
            }>>>;
            readonly canEdit: Schema.optional<Schema.Boolean>;
        }>>;
        readonly commentCount: Schema.optional<Schema.Int>;
        readonly nextCommentsCursor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Can only narrow repository-wide resolve permission. Absent when unreported. */
        readonly canResolve: Schema.optional<Schema.Boolean>;
    }>>;
    readonly commits: Schema.$Array<Schema.Struct<{
        readonly oid: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly messageHeadline: Schema.String;
        readonly committedDate: Schema.String;
        readonly additions: Schema.optional<Schema.Int>;
        readonly deletions: Schema.optional<Schema.Int>;
        readonly authors: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>>;
    }>>;
    readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
        readonly count: Schema.Int;
        /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
        readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly viewerHasReacted: Schema.Boolean;
    }>>>;
    readonly author: Schema.NullOr<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
    readonly reviewers: Schema.$Array<Schema.Struct<{
        readonly isBot: Schema.optional<Schema.Boolean>;
        readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.NullOr<Schema.String>;
        readonly avatarUrl: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type PullRequestDetailView = typeof PullRequestDetailView.Type;
/** GitHub refuses diffs past 300 files, so callers must page large changes. */
export declare const PullRequestDiffInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly cursor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly commit: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestDiffInput = typeof PullRequestDiffInput.Type;
export declare const PullRequestOmittedFileStat: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly additions: Schema.Number;
    readonly deletions: Schema.Number;
}>;
export type PullRequestOmittedFileStat = typeof PullRequestOmittedFileStat.Type;
export declare const PullRequestDiffResult: Schema.Struct<{
    readonly patch: Schema.String;
    /** Content omitted within this slice; nextCursor separately indicates more slices. */
    readonly truncated: Schema.Boolean;
    readonly nextCursor: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly omittedFileStats: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly additions: Schema.Number;
        readonly deletions: Schema.Number;
    }>>>;
}>;
export type PullRequestDiffResult = typeof PullRequestDiffResult.Type;
export declare const PullRequestDiffFileContentsInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly commit: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly changeType: Schema.Literals<readonly ["change", "rename-pure", "rename-changed", "new", "deleted"]>;
    readonly oldPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly newPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestDiffFileContentsInput = typeof PullRequestDiffFileContentsInput.Type;
export declare const PullRequestDiffFileContentsResult: Schema.Struct<{
    readonly oldContents: Schema.String;
    readonly newContents: Schema.String;
}>;
export type PullRequestDiffFileContentsResult = typeof PullRequestDiffFileContentsResult.Type;
export declare const PullRequestFileViewedState: Schema.Literals<readonly ["unviewed", "viewed", "dismissed"]>;
export type PullRequestFileViewedState = typeof PullRequestFileViewedState.Type;
export declare const PullRequestFileViewed: Schema.Struct<{
    readonly path: Schema.String;
    readonly state: Schema.Literals<readonly ["unviewed", "viewed", "dismissed"]>;
}>;
export type PullRequestFileViewed = typeof PullRequestFileViewed.Type;
export declare const PullRequestFilesViewedResult: Schema.Struct<{
    /** Only the files the host reported a state for. A file missing from this list is unviewed. */
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly state: Schema.Literals<readonly ["unviewed", "viewed", "dismissed"]>;
    }>>;
    readonly truncated: Schema.Boolean;
}>;
export type PullRequestFilesViewedResult = typeof PullRequestFilesViewedResult.Type;
/**
 * A change's line counts split by what the changed files are, judged from their paths. Null when
 * the host gives no per-file counts, or has more files than one read covers: a split of part of
 * the change would not add up to the totals shown beside it.
 */
export declare const PullRequestChangeBreakdown: Schema.NullOr<Schema.Struct<{
    readonly code: Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    readonly tests: Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    readonly mocks: Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    readonly generated: Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    readonly docs: Schema.withDecodingDefault<Schema.Struct<{
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
    }>, never>;
}>>;
export type PullRequestChangeBreakdown = typeof PullRequestChangeBreakdown.Type;
export declare const PullRequestSetFilesViewedInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly viewed: Schema.Boolean;
    }>>;
}>;
export type PullRequestSetFilesViewedInput = typeof PullRequestSetFilesViewedInput.Type;
export declare const PullRequestStackHead: Schema.Struct<{
    readonly number: Schema.Int;
    readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestStackHead = typeof PullRequestStackHead.Type;
export declare const PullRequestActionInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    /** Native stack scope; only send to environments advertising pullRequestStackActions. */
    readonly stackNumber: Schema.optional<Schema.Int>;
    readonly expectedStackHeads: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly number: Schema.Int;
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly action: Schema.Literals<readonly ["merge", "ready", "draft", "close", "reopen", "delete-branch", "update-branch", "enable-auto-merge", "disable-auto-merge", "revert", "approve-workflows"]>;
    readonly mergeMethod: Schema.optional<Schema.Literals<readonly ["merge", "squash", "rebase"]>>;
    readonly updateMethod: Schema.optional<Schema.Literals<readonly ["merge", "rebase"]>>;
}>;
export type PullRequestActionInput = typeof PullRequestActionInput.Type;
export declare const PullRequestCommentInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly body: Schema.String;
}>;
export type PullRequestCommentInput = typeof PullRequestCommentInput.Type;
export declare const PullRequestUpdateInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly body: Schema.optional<Schema.String>;
}>;
export type PullRequestUpdateInput = typeof PullRequestUpdateInput.Type;
/** Comment kind selects the endpoint; GitHub uses separate mutations for conversation and line comments. */
export declare const PullRequestCommentUpdateInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly commentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["issue-comment", "review-comment"]>;
    readonly body: Schema.String;
}>;
export type PullRequestCommentUpdateInput = typeof PullRequestCommentUpdateInput.Type;
export declare const PullRequestReviewPosition: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"added">;
    readonly newLine: Schema.Int;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"deleted">;
    readonly oldLine: Schema.Int;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"context">;
    readonly oldLine: Schema.Int;
    readonly newLine: Schema.Int;
    readonly side: Schema.Literals<readonly ["left", "right"]>;
}>]>;
export type PullRequestReviewPosition = typeof PullRequestReviewPosition.Type;
export declare const PullRequestReviewCommentDraft: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** GitLab needs both names for renamed-file comments; hosts using one path ignore this. */
    readonly oldPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly position: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"added">;
        readonly newLine: Schema.Int;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"deleted">;
        readonly oldLine: Schema.Int;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"context">;
        readonly oldLine: Schema.Int;
        readonly newLine: Schema.Int;
        readonly side: Schema.Literals<readonly ["left", "right"]>;
    }>]>;
    /**
     * The first line of a comment on a range, which ends at `position`. Sent only to a host whose
     * capabilities include `review.rangeComment`.
     */
    readonly startPosition: Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"added">;
        readonly newLine: Schema.Int;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"deleted">;
        readonly oldLine: Schema.Int;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"context">;
        readonly oldLine: Schema.Int;
        readonly newLine: Schema.Int;
        readonly side: Schema.Literals<readonly ["left", "right"]>;
    }>]>>;
    readonly body: Schema.String;
}>;
export type PullRequestReviewCommentDraft = typeof PullRequestReviewCommentDraft.Type;
export declare const PullRequestSubmitReviewInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly verdict: Schema.Literals<readonly ["comment", "approve", "request-changes"]>;
    readonly body: Schema.String;
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        /** GitLab needs both names for renamed-file comments; hosts using one path ignore this. */
        readonly oldPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly position: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"added">;
            readonly newLine: Schema.Int;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"deleted">;
            readonly oldLine: Schema.Int;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"context">;
            readonly oldLine: Schema.Int;
            readonly newLine: Schema.Int;
            readonly side: Schema.Literals<readonly ["left", "right"]>;
        }>]>;
        /**
         * The first line of a comment on a range, which ends at `position`. Sent only to a host whose
         * capabilities include `review.rangeComment`.
         */
        readonly startPosition: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"added">;
            readonly newLine: Schema.Int;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"deleted">;
            readonly oldLine: Schema.Int;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"context">;
            readonly oldLine: Schema.Int;
            readonly newLine: Schema.Int;
            readonly side: Schema.Literals<readonly ["left", "right"]>;
        }>]>>;
        readonly body: Schema.String;
    }>>;
}>;
export type PullRequestSubmitReviewInput = typeof PullRequestSubmitReviewInput.Type;
export declare const PullRequestThreadCommentsInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cursor: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PullRequestThreadCommentsInput = typeof PullRequestThreadCommentsInput.Type;
export declare const PullRequestThreadCommentsResult: Schema.Struct<{
    readonly comments: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly author: Schema.NullOr<Schema.Struct<{
            readonly isBot: Schema.optional<Schema.Boolean>;
            readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.NullOr<Schema.String>;
            readonly avatarUrl: Schema.NullOr<Schema.String>;
        }>>;
        readonly body: Schema.String;
        readonly createdAt: Schema.String;
        readonly editedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly url: Schema.NullOr<Schema.String>;
        readonly reactions: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
            readonly count: Schema.Int;
            /** Excludes the viewer's login when viewerHasReacted; count still includes them. */
            readonly actors: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly viewerHasReacted: Schema.Boolean;
        }>>>;
        readonly canEdit: Schema.optional<Schema.Boolean>;
    }>>;
    readonly nextCursor: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestThreadCommentsResult = typeof PullRequestThreadCommentsResult.Type;
export declare const PullRequestThreadReplyInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly body: Schema.String;
}>;
export type PullRequestThreadReplyInput = typeof PullRequestThreadReplyInput.Type;
export declare const PullRequestThreadResolutionInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly resolved: Schema.Boolean;
}>;
export type PullRequestThreadResolutionInput = typeof PullRequestThreadResolutionInput.Type;
export declare const PullRequestReactionInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly subjectId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly content: Schema.Literals<readonly ["thumbs-up", "thumbs-down", "laugh", "hooray", "confused", "heart", "rocket", "eyes"]>;
    readonly reacted: Schema.Boolean;
}>;
export type PullRequestReactionInput = typeof PullRequestReactionInput.Type;
export declare const PullRequestReviewerRequestInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly reviewers: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["user", "team"]>;
    }>>;
    readonly requested: Schema.Boolean;
}>;
export type PullRequestReviewerRequestInput = typeof PullRequestReviewerRequestInput.Type;
export declare const PullRequestLabelChangeInput: Schema.Struct<{
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expectedAccountId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly allowStale: Schema.optional<Schema.Boolean>;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly number: Schema.Int;
    readonly labels: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly applied: Schema.Boolean;
}>;
export type PullRequestLabelChangeInput = typeof PullRequestLabelChangeInput.Type;
/**
 * The names keep their `cli-` prefix for wire compatibility; for a host read with a credential
 * rather than a tool they mean "no credential" and "a refused credential".
 */
export declare const PullRequestUnavailableReason: Schema.Literals<readonly ["cli-missing", "cli-unauthenticated", "provider-unsupported"]>;
export type PullRequestUnavailableReason = typeof PullRequestUnavailableReason.Type;
/**
 * `author:me` names whoever is signed in to the host being read, GitHub's `@me` spelled either
 * way. A host's own search would answer it, but the page and the server both re-check an author
 * against the row's login, so the name is resolved before either comparison rather than being
 * matched as the literal login "me".
 */
export declare function resolvePullRequestAuthorFilter(author: string, viewer: string | null | undefined): string;
declare const PullRequestUnavailableError_base: Schema.Class<PullRequestUnavailableError, Schema.TaggedStruct<"PullRequestUnavailableError", {
    readonly reason: Schema.Literals<readonly ["cli-missing", "cli-unauthenticated", "provider-unsupported"]>;
    readonly provider: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
    /**
     * What the host needs on the server, in its own words. Absent from older servers, which
     * shipped no such field, and for a host that names nothing.
     */
    readonly requirement: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestUnavailableError extends PullRequestUnavailableError_base {
    [HttpServerRespondable.symbol](): Effect.Effect<HttpServerResponse.HttpServerResponse, import("effect/http/HttpBody").HttpBodyError, never>;
    get message(): string;
}
declare const PullRequestOperationError_base: Schema.Class<PullRequestOperationError, Schema.TaggedStruct<"PullRequestOperationError", {
    readonly operation: Schema.String;
    readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reason: Schema.optional<Schema.Literal<"not-found">>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestOperationError extends PullRequestOperationError_base {
    [HttpServerRespondable.symbol](): Effect.Effect<HttpServerResponse.HttpServerResponse, import("effect/http/HttpBody").HttpBodyError, never>;
    get message(): string;
}
export {};
