import * as Schema from "effect/Schema";
import { SourceControlProviderError } from "./sourceControl.vibe";
export declare const GitStackedAction: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
export type GitStackedAction = typeof GitStackedAction.Type;
export declare const GitActionProgressPhase: Schema.Literals<readonly ["branch", "commit", "push", "pr"]>;
export type GitActionProgressPhase = typeof GitActionProgressPhase.Type;
export declare const GitActionProgressKind: Schema.Literals<readonly ["action_started", "phase_started", "hook_started", "hook_output", "hook_finished", "action_finished", "action_failed"]>;
export type GitActionProgressKind = typeof GitActionProgressKind.Type;
export declare const GitActionProgressStream: Schema.Literals<readonly ["stdout", "stderr"]>;
export type GitActionProgressStream = typeof GitActionProgressStream.Type;
export declare const GitRunStackedActionToastRunAction: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
}>;
export type GitRunStackedActionToastRunAction = typeof GitRunStackedActionToastRunAction.Type;
declare const GitRunStackedActionToastCta: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"none">;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"open_pr">;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.String;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"run_action">;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    }>;
}>]>;
export type GitRunStackedActionToastCta = typeof GitRunStackedActionToastCta.Type;
declare const GitRunStackedActionToast: Schema.Struct<{
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly cta: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"none">;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"open_pr">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"run_action">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly action: Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
        }>;
    }>]>;
}>;
export type GitRunStackedActionToast = typeof GitRunStackedActionToast.Type;
export declare const VcsRef: Schema.Struct<{
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly isRemote: Schema.optional<Schema.Boolean>;
    readonly remoteName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly upstreamRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly current: Schema.Boolean;
    readonly isDefault: Schema.Boolean;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type VcsRef = typeof VcsRef.Type;
declare const GitResolvedPullRequest: Schema.Struct<{
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.String;
    readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
}>;
export type GitResolvedPullRequest = typeof GitResolvedPullRequest.Type;
export declare const VcsStatusInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type VcsStatusInput = typeof VcsStatusInput.Type;
export declare const VcsStatusSubscriptionInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Passive observers receive cached remote status without retaining its refresh loop. */
    readonly includeRemote: Schema.optional<Schema.Boolean>;
}>;
export type VcsStatusSubscriptionInput = typeof VcsStatusSubscriptionInput.Type;
export declare const VcsPullInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type VcsPullInput = typeof VcsPullInput.Type;
export declare const GitRunStackedActionInput: Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly commitMessage: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly featureBranch: Schema.optional<Schema.Boolean>;
    readonly filePaths: Schema.optional<Schema.$Array<Schema.String>>;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly projectId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>;
}>;
export type GitRunStackedActionInput = typeof GitRunStackedActionInput.Type;
export declare const VcsListRefsInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly query: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly cursor: Schema.optional<Schema.Int>;
    readonly includeMatchingRemoteRefs: Schema.optional<Schema.Boolean>;
    readonly refKind: Schema.optional<Schema.Literals<readonly ["all", "local", "remote"]>>;
    readonly refresh: Schema.optional<Schema.Boolean>;
    readonly limit: Schema.optional<Schema.Int>;
}>;
export type VcsListRefsInput = typeof VcsListRefsInput.Type;
export declare const VcsCreateWorktreeInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly newRefName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly baseRefName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly path: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type VcsCreateWorktreeInput = typeof VcsCreateWorktreeInput.Type;
export declare const GitPullRequestRefInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reference: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type GitPullRequestRefInput = typeof GitPullRequestRefInput.Type;
export declare const GitPreparePullRequestThreadInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reference: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly mode: Schema.Literals<readonly ["local", "worktree"]>;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
}>;
export type GitPreparePullRequestThreadInput = typeof GitPreparePullRequestThreadInput.Type;
export declare const VcsRemoveWorktreeInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly force: Schema.optional<Schema.Boolean>;
}>;
export type VcsRemoveWorktreeInput = typeof VcsRemoveWorktreeInput.Type;
export declare const VcsCreateRefInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly switchRef: Schema.optional<Schema.Boolean>;
}>;
export type VcsCreateRefInput = typeof VcsCreateRefInput.Type;
export declare const VcsCreateRefResult: Schema.Struct<{
    readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type VcsCreateRefResult = typeof VcsCreateRefResult.Type;
export declare const VcsSwitchRefInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type VcsSwitchRefInput = typeof VcsSwitchRefInput.Type;
export declare const VcsInitInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.optional<Schema.Literals<readonly ["git", "jj", "unknown"]>>;
}>;
export type VcsInitInput = typeof VcsInitInput.Type;
export declare const VcsStatusLocalResult: Schema.Struct<{
    isRepo: Schema.Boolean;
    sourceControlProvider: Schema.optional<Schema.Struct<{
        readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseUrl: Schema.String;
    }>>;
    hasPrimaryRemote: Schema.Boolean;
    isDefaultRef: Schema.Boolean;
    refName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    hasWorkingTreeChanges: Schema.Boolean;
    workingTree: Schema.Struct<{
        readonly rootPath: Schema.optional<Schema.String>;
        readonly files: Schema.$Array<Schema.Struct<{
            readonly path: Schema.String;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>>;
        readonly insertions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    branchChanges: Schema.optional<Schema.Struct<{
        readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly insertions: Schema.Int;
        readonly deletions: Schema.Int;
    }>>;
}>;
export type VcsStatusLocalResult = typeof VcsStatusLocalResult.Type;
export declare const VcsStatusRemoteResult: Schema.Struct<{
    hasUpstream: Schema.Boolean;
    aheadCount: Schema.Int;
    behindCount: Schema.Int;
    aheadOfDefaultCount: Schema.optional<Schema.Int>;
    pr: Schema.NullOr<Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly headRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly isDraft: Schema.optional<Schema.Boolean>;
        readonly updatedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
}>;
export type VcsStatusRemoteResult = typeof VcsStatusRemoteResult.Type;
export declare const VcsStatusResult: Schema.Struct<{
    readonly isRepo: Schema.Boolean;
    readonly sourceControlProvider: Schema.optional<Schema.Struct<{
        readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseUrl: Schema.String;
    }>>;
    readonly hasPrimaryRemote: Schema.Boolean;
    readonly isDefaultRef: Schema.Boolean;
    readonly refName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly hasWorkingTreeChanges: Schema.Boolean;
    readonly workingTree: Schema.Struct<{
        readonly rootPath: Schema.optional<Schema.String>;
        readonly files: Schema.$Array<Schema.Struct<{
            readonly path: Schema.String;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>>;
        readonly insertions: Schema.Int;
        readonly deletions: Schema.Int;
    }>;
    readonly branchChanges: Schema.optional<Schema.Struct<{
        readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly insertions: Schema.Int;
        readonly deletions: Schema.Int;
    }>>;
    readonly hasUpstream: Schema.Boolean;
    readonly aheadCount: Schema.Int;
    readonly behindCount: Schema.Int;
    readonly aheadOfDefaultCount: Schema.optional<Schema.Int>;
    readonly pr: Schema.NullOr<Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly headRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly isDraft: Schema.optional<Schema.Boolean>;
        readonly updatedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    }>>;
}>;
export type VcsStatusResult = typeof VcsStatusResult.Type;
export declare const VcsStatusStreamEvent: Schema.Union<readonly [Schema.TaggedStruct<"snapshot", {
    readonly local: Schema.Struct<{
        isRepo: Schema.Boolean;
        sourceControlProvider: Schema.optional<Schema.Struct<{
            readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly baseUrl: Schema.String;
        }>>;
        hasPrimaryRemote: Schema.Boolean;
        isDefaultRef: Schema.Boolean;
        refName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        hasWorkingTreeChanges: Schema.Boolean;
        workingTree: Schema.Struct<{
            readonly rootPath: Schema.optional<Schema.String>;
            readonly files: Schema.$Array<Schema.Struct<{
                readonly path: Schema.String;
                readonly insertions: Schema.Int;
                readonly deletions: Schema.Int;
            }>>;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>;
        branchChanges: Schema.optional<Schema.Struct<{
            readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>>;
    }>;
    readonly remote: Schema.NullOr<Schema.Struct<{
        hasUpstream: Schema.Boolean;
        aheadCount: Schema.Int;
        behindCount: Schema.Int;
        aheadOfDefaultCount: Schema.optional<Schema.Int>;
        pr: Schema.NullOr<Schema.Struct<{
            readonly number: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.String;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly headRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
            readonly isDraft: Schema.optional<Schema.Boolean>;
            readonly updatedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        }>>;
    }>>;
}>, Schema.TaggedStruct<"localUpdated", {
    readonly local: Schema.Struct<{
        isRepo: Schema.Boolean;
        sourceControlProvider: Schema.optional<Schema.Struct<{
            readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly baseUrl: Schema.String;
        }>>;
        hasPrimaryRemote: Schema.Boolean;
        isDefaultRef: Schema.Boolean;
        refName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        hasWorkingTreeChanges: Schema.Boolean;
        workingTree: Schema.Struct<{
            readonly rootPath: Schema.optional<Schema.String>;
            readonly files: Schema.$Array<Schema.Struct<{
                readonly path: Schema.String;
                readonly insertions: Schema.Int;
                readonly deletions: Schema.Int;
            }>>;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>;
        branchChanges: Schema.optional<Schema.Struct<{
            readonly baseRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly insertions: Schema.Int;
            readonly deletions: Schema.Int;
        }>>;
    }>;
}>, Schema.TaggedStruct<"remoteUpdated", {
    readonly remote: Schema.NullOr<Schema.Struct<{
        hasUpstream: Schema.Boolean;
        aheadCount: Schema.Int;
        behindCount: Schema.Int;
        aheadOfDefaultCount: Schema.optional<Schema.Int>;
        pr: Schema.NullOr<Schema.Struct<{
            readonly number: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.String;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly headRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
            readonly isDraft: Schema.optional<Schema.Boolean>;
            readonly updatedAt: Schema.optional<Schema.NullOr<Schema.String>>;
        }>>;
    }>>;
}>]>;
export type VcsStatusStreamEvent = typeof VcsStatusStreamEvent.Type;
export declare const VcsListRefsResult: Schema.Struct<{
    readonly isAtRepositoryRoot: Schema.optional<Schema.Boolean>;
    readonly refs: Schema.$Array<Schema.Struct<{
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly isRemote: Schema.optional<Schema.Boolean>;
        readonly remoteName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly upstreamRef: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly current: Schema.Boolean;
        readonly isDefault: Schema.Boolean;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly isRepo: Schema.Boolean;
    readonly hasPrimaryRemote: Schema.Boolean;
    readonly nextCursor: Schema.NullOr<Schema.Int>;
    readonly totalCount: Schema.Int;
}>;
export type VcsListRefsResult = typeof VcsListRefsResult.Type;
export declare const VcsCreateWorktreeResult: Schema.Struct<{
    readonly worktree: Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type VcsCreateWorktreeResult = typeof VcsCreateWorktreeResult.Type;
export declare const GitResolvePullRequestResult: Schema.Struct<{
    readonly pullRequest: Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    }>;
}>;
export type GitResolvePullRequestResult = typeof GitResolvePullRequestResult.Type;
export declare const GitPreparePullRequestThreadResult: Schema.Struct<{
    readonly pullRequest: Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    }>;
    readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** False when local commits or edits prevented a reused worktree from reaching the PR head. */
    readonly isOnPullRequestHead: Schema.withDecodingDefaultKey<Schema.Boolean, never>;
}>;
export type GitPreparePullRequestThreadResult = typeof GitPreparePullRequestThreadResult.Type;
export declare const VcsSwitchRefResult: Schema.Struct<{
    readonly refName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type VcsSwitchRefResult = typeof VcsSwitchRefResult.Type;
export declare const GitRunStackedActionResult: Schema.Struct<{
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly branch: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["created", "skipped_not_requested"]>;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly commit: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["created", "skipped_no_changes", "skipped_not_requested"]>;
        readonly commitSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly subject: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly push: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["pushed", "skipped_not_requested", "skipped_up_to_date"]>;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly upstreamBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly setUpstream: Schema.optional<Schema.Boolean>;
    }>;
    readonly pr: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["created", "opened_existing", "skipped_not_requested"]>;
        readonly url: Schema.optional<Schema.String>;
        readonly number: Schema.optional<Schema.Int>;
        readonly baseBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly headBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly toast: Schema.Struct<{
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly cta: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"none">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"open_pr">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.String;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"run_action">;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly action: Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
            }>;
        }>]>;
    }>;
}>;
export type GitRunStackedActionResult = typeof GitRunStackedActionResult.Type;
export declare const VcsPullResult: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["pulled", "skipped_up_to_date"]>;
    readonly refName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly upstreamRef: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type VcsPullResult = typeof VcsPullResult.Type;
export declare const GitCommandFailureReason: Schema.Literals<readonly ["authentication_failed", "branch_already_exists", "branch_checked_out_in_worktree", "config_locked", "host_key_unverified", "not_a_repository", "path_already_exists", "push_rejected_by_remote", "push_rejected_non_fast_forward", "ref_not_found", "remote_unreachable", "tag_would_be_clobbered"]>;
export type GitCommandFailureReason = typeof GitCommandFailureReason.Type;
declare const GitCommandError_base: Schema.Class<GitCommandError, Schema.TaggedStruct<"GitCommandError", {
    readonly operation: Schema.String;
    readonly command: Schema.String;
    readonly cwd: Schema.String;
    readonly argumentCount: Schema.optional<Schema.Number>;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly stdoutLength: Schema.optional<Schema.Number>;
    readonly stderrLength: Schema.optional<Schema.Number>;
    readonly outputLength: Schema.optional<Schema.Number>;
    readonly reason: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["authentication_failed", "branch_already_exists", "branch_checked_out_in_worktree", "config_locked", "host_key_unverified", "not_a_repository", "path_already_exists", "push_rejected_by_remote", "push_rejected_non_fast_forward", "ref_not_found", "remote_unreachable", "tag_would_be_clobbered"]>>, Schema.Unknown, never, never>>;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class GitCommandError extends GitCommandError_base {
    get message(): string;
}
declare const TextGenerationError_base: Schema.Class<TextGenerationError, Schema.TaggedStruct<"TextGenerationError", {
    readonly operation: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class TextGenerationError extends TextGenerationError_base {
    get message(): string;
}
declare const GitManagerError_base: Schema.Class<GitManagerError, Schema.TaggedStruct<"GitManagerError", {
    readonly operation: Schema.String;
    readonly cwd: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class GitManagerError extends GitManagerError_base {
    get message(): string;
}
declare const GitPullRequestMaterializationError_base: Schema.Class<GitPullRequestMaterializationError, Schema.TaggedStruct<"GitPullRequestMaterializationError", {
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly pullRequestNumber: Schema.Int;
    readonly headRepository: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly localBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitPullRequestMaterializationError extends GitPullRequestMaterializationError_base {
    get message(): string;
}
export declare const GitManagerServiceError: Schema.Union<readonly [typeof GitManagerError, typeof GitPullRequestMaterializationError, typeof GitCommandError, typeof SourceControlProviderError, typeof TextGenerationError]>;
export type GitManagerServiceError = typeof GitManagerServiceError.Type;
export declare const GitActionProgressEvent: Schema.Union<readonly [Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"action_started">;
    readonly phases: Schema.$Array<Schema.Literals<readonly ["branch", "commit", "push", "pr"]>>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"phase_started">;
    readonly phase: Schema.Literals<readonly ["branch", "commit", "push", "pr"]>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"hook_started">;
    readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"hook_output">;
    readonly hookName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly stream: Schema.Literals<readonly ["stdout", "stderr"]>;
    readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"hook_finished">;
    readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly durationMs: Schema.NullOr<Schema.Int>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"action_finished">;
    readonly result: Schema.Struct<{
        readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
        readonly branch: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["created", "skipped_not_requested"]>;
            readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly commit: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["created", "skipped_no_changes", "skipped_not_requested"]>;
            readonly commitSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly subject: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly push: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["pushed", "skipped_not_requested", "skipped_up_to_date"]>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly upstreamBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly setUpstream: Schema.optional<Schema.Boolean>;
        }>;
        readonly pr: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["created", "opened_existing", "skipped_not_requested"]>;
            readonly url: Schema.optional<Schema.String>;
            readonly number: Schema.optional<Schema.Int>;
            readonly baseBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly headBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly toast: Schema.Struct<{
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly cta: Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"none">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"open_pr">;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.String;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"run_action">;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly action: Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
                }>;
            }>]>;
        }>;
    }>;
}>, Schema.Struct<{
    readonly actionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly action: Schema.Literals<readonly ["commit", "push", "create_pr", "commit_push", "commit_push_pr"]>;
    readonly kind: Schema.Literal<"action_failed">;
    readonly phase: Schema.NullOr<Schema.Literals<readonly ["branch", "commit", "push", "pr"]>>;
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type GitActionProgressEvent = typeof GitActionProgressEvent.Type;
export {};
