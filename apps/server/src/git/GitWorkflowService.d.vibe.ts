import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as FileSystem from "effect/FileSystem";
import { GitCommandError, type VcsSwitchRefInput, type VcsSwitchRefResult, type VcsCreateRefInput, type VcsCreateRefResult, type VcsCreateWorktreeInput, type VcsCreateWorktreeResult, type VcsListRefsInput, type VcsListRefsResult, type GitManagerServiceError, type GitPreparePullRequestThreadInput, type GitPreparePullRequestThreadResult, type GitPullRequestRefInput, type VcsPullResult, type VcsRemoveWorktreeInput, type GitResolvePullRequestResult, type GitRunStackedActionInput, type GitRunStackedActionResult, type VcsStatusInput, type VcsStatusLocalResult, type VcsStatusRemoteResult, type VcsStatusResult } from "@t3tools/contracts";
import * as GitManager from "./GitManager.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.ts";
declare const GitWorkflowService_base: Context.ServiceClass<GitWorkflowService, "t3/git/GitWorkflowService", {
    readonly isRepository: (cwd: string) => Effect.Effect<boolean, GitManagerServiceError>;
    readonly hasCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly hasRefNamed: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly status: (input: VcsStatusInput) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly localStatus: (input: VcsStatusInput) => Effect.Effect<VcsStatusLocalResult, GitManagerServiceError>;
    readonly remoteStatus: (input: VcsStatusInput, options?: GitManager.GitRemoteStatusOptions) => Effect.Effect<VcsStatusRemoteResult | null, GitManagerServiceError>;
    readonly invalidateLocalStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly invalidateRemoteStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly invalidateStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly pullCurrentBranch: (cwd: string) => Effect.Effect<VcsPullResult, GitCommandError>;
    readonly runStackedAction: (input: GitRunStackedActionInput, options?: GitManager.GitRunStackedActionOptions) => Effect.Effect<GitRunStackedActionResult, GitManagerServiceError>;
    readonly resolvePullRequest: (input: GitPullRequestRefInput) => Effect.Effect<GitResolvePullRequestResult, GitManagerServiceError>;
    readonly preparePullRequestThread: (input: GitPreparePullRequestThreadInput) => Effect.Effect<GitPreparePullRequestThreadResult, GitManagerServiceError>;
    readonly listRefs: (input: VcsListRefsInput) => Effect.Effect<VcsListRefsResult, GitCommandError>;
    readonly createWorktree: (input: VcsCreateWorktreeInput, options?: GitVcsDriver.CreateWorktreeOptions) => Effect.Effect<VcsCreateWorktreeResult, GitCommandError>;
    readonly listLocalBranchNames: (cwd: string) => Effect.Effect<string[], GitCommandError>;
    readonly fetchRemote: (input: {
        readonly cwd: string;
        readonly remoteName: string;
        readonly refName?: string;
    }) => Effect.Effect<void, GitCommandError>;
    readonly remoteExists: (input: {
        readonly cwd: string;
        readonly remoteName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly remoteBranchExists: (input: {
        readonly cwd: string;
        readonly remoteName: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly resolveRemoteTrackingCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
        readonly fallbackRemoteName: string;
    }) => Effect.Effect<{
        readonly commitSha: string;
        readonly remoteRefName: string;
    }, GitCommandError>;
    readonly resolveWorktreeBaseRemote: GitVcsDriver.GitVcsDriver["Service"]["resolveWorktreeBaseRemote"];
    readonly fetchWorktreeBaseCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<{
        readonly commitSha: string;
        readonly remoteRefName: string;
    } | null, GitCommandError>;
    readonly removeWorktree: (input: VcsRemoveWorktreeInput) => Effect.Effect<void, GitCommandError>;
    readonly pruneWorktrees: (input: {
        readonly cwd: string;
    }) => Effect.Effect<void, GitCommandError>;
    readonly deleteLocalBranch: (input: GitVcsDriver.GitDeleteLocalBranchInput) => Effect.Effect<void, GitCommandError>;
    readonly createRef: (input: VcsCreateRefInput) => Effect.Effect<VcsCreateRefResult, GitCommandError>;
    readonly switchRef: (input: VcsSwitchRefInput) => Effect.Effect<VcsSwitchRefResult, GitCommandError>;
    readonly renameBranch: (input: {
        readonly exactName?: boolean;
        readonly cwd: string;
        readonly oldBranch: string;
        readonly newBranch: string;
    }) => Effect.Effect<{
        readonly branch: string;
    }, GitManagerServiceError>;
}>;
export declare class GitWorkflowService extends GitWorkflowService_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly isRepository: (cwd: string) => Effect.Effect<boolean, GitManagerServiceError>;
    readonly hasCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly hasRefNamed: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly status: (input: VcsStatusInput) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly localStatus: (input: VcsStatusInput) => Effect.Effect<VcsStatusLocalResult, GitManagerServiceError>;
    readonly remoteStatus: (input: VcsStatusInput, options?: GitManager.GitRemoteStatusOptions) => Effect.Effect<VcsStatusRemoteResult | null, GitManagerServiceError>;
    readonly invalidateLocalStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly invalidateRemoteStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly invalidateStatus: (cwd: string) => Effect.Effect<void, never>;
    readonly pullCurrentBranch: (cwd: string) => Effect.Effect<VcsPullResult, GitCommandError>;
    readonly runStackedAction: (input: GitRunStackedActionInput, options?: GitManager.GitRunStackedActionOptions) => Effect.Effect<GitRunStackedActionResult, GitManagerServiceError>;
    readonly resolvePullRequest: (input: GitPullRequestRefInput) => Effect.Effect<GitResolvePullRequestResult, GitManagerServiceError>;
    readonly preparePullRequestThread: (input: GitPreparePullRequestThreadInput) => Effect.Effect<GitPreparePullRequestThreadResult, GitManagerServiceError>;
    readonly listRefs: (input: VcsListRefsInput) => Effect.Effect<VcsListRefsResult, GitCommandError>;
    readonly createWorktree: (input: VcsCreateWorktreeInput, options?: GitVcsDriver.CreateWorktreeOptions) => Effect.Effect<VcsCreateWorktreeResult, GitCommandError>;
    readonly listLocalBranchNames: (cwd: string) => Effect.Effect<string[], GitCommandError>;
    readonly fetchRemote: (input: {
        readonly cwd: string;
        readonly remoteName: string;
        readonly refName?: string;
    }) => Effect.Effect<void, GitCommandError>;
    readonly remoteExists: (input: {
        readonly cwd: string;
        readonly remoteName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly remoteBranchExists: (input: {
        readonly cwd: string;
        readonly remoteName: string;
        readonly refName: string;
    }) => Effect.Effect<boolean, GitCommandError>;
    readonly resolveRemoteTrackingCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
        readonly fallbackRemoteName: string;
    }) => Effect.Effect<{
        readonly commitSha: string;
        readonly remoteRefName: string;
    }, GitCommandError>;
    readonly resolveWorktreeBaseRemote: GitVcsDriver.GitVcsDriver["Service"]["resolveWorktreeBaseRemote"];
    readonly fetchWorktreeBaseCommit: (input: {
        readonly cwd: string;
        readonly refName: string;
    }) => Effect.Effect<{
        readonly commitSha: string;
        readonly remoteRefName: string;
    } | null, GitCommandError>;
    readonly removeWorktree: (input: VcsRemoveWorktreeInput) => Effect.Effect<void, GitCommandError>;
    readonly pruneWorktrees: (input: {
        readonly cwd: string;
    }) => Effect.Effect<void, GitCommandError>;
    readonly deleteLocalBranch: (input: GitVcsDriver.GitDeleteLocalBranchInput) => Effect.Effect<void, GitCommandError>;
    readonly createRef: (input: VcsCreateRefInput) => Effect.Effect<VcsCreateRefResult, GitCommandError>;
    readonly switchRef: (input: VcsSwitchRefInput) => Effect.Effect<VcsSwitchRefResult, GitCommandError>;
    readonly renameBranch: (input: {
        readonly exactName?: boolean;
        readonly cwd: string;
        readonly oldBranch: string;
        readonly newBranch: string;
    }) => Effect.Effect<{
        readonly branch: string;
    }, GitManagerServiceError>;
}, never, FileSystem.FileSystem | GitManager.GitManager | GitVcsDriver.GitVcsDriver | VcsDriverRegistry.VcsDriverRegistry>;
export declare const layer: Layer.Layer<GitWorkflowService, never, FileSystem.FileSystem | GitManager.GitManager | GitVcsDriver.GitVcsDriver | VcsDriverRegistry.VcsDriverRegistry>;
export {};
