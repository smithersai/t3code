import type { AtomCommandFailure, AtomCommandResult, AtomCommandSuccess } from "@t3tools/client-runtime/state/runtime";
import { VcsActionUnavailableError, type RunVcsStackedActionInput } from "@t3tools/client-runtime/state/vcs";
import { EnvironmentAuthorizationError, type EnvironmentId, type GitResolvePullRequestResult, type SourceControlCloneProtocol, type SourceControlProviderKind, type SourceControlRepositoryVisibility, type ThreadId } from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";
export type SourceControlActionKind = "init" | "pull" | "publishRepository" | "runStackedAction" | "preparePullRequestThread";
export interface SourceControlActionScope {
    readonly environmentId: EnvironmentId | null;
    readonly cwd: string | null;
}
interface SourceControlActionState<TArgs extends ReadonlyArray<unknown>, R extends AtomCommandResult<unknown, unknown>> {
    readonly isPending: boolean;
    readonly isAllowed: boolean;
    readonly error: unknown;
    readonly run: (...args: TArgs) => Promise<AtomCommandResult<AtomCommandSuccess<R>, AtomCommandFailure<R> | VcsActionUnavailableError | EnvironmentAuthorizationError>>;
    readonly resetError: () => void;
}
export declare function useSourceControlActionRunning(scope: SourceControlActionScope, kinds: ReadonlyArray<SourceControlActionKind>): boolean;
export declare function useVcsInitAction(scope: SourceControlActionScope): SourceControlActionState<[], AsyncResult.Failure<never, VcsActionUnavailableError> | AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").VcsProcessExitError | import("@t3tools/contracts").VcsProcessMissingExitCodeError | import("@t3tools/contracts").VcsProcessOutputLimitError | import("@t3tools/contracts").VcsProcessOutputReadError | import("@t3tools/contracts").VcsProcessSpawnError | import("@t3tools/contracts").VcsProcessStdinWriteError | import("@t3tools/contracts").VcsProcessTimeoutError | import("@t3tools/contracts").VcsRepositoryDetectionError | import("@t3tools/contracts").VcsUnsupportedOperationError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
export declare function useVcsPullAction(scope: SourceControlActionScope): SourceControlActionState<[], AsyncResult.Failure<never, VcsActionUnavailableError> | AtomCommandResult<{
    readonly status: "pulled" | "skipped_up_to_date";
    readonly refName: string;
    readonly upstreamRef: string | null;
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").GitCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
export declare function useGitStackedAction(scope: SourceControlActionScope): SourceControlActionState<[input: RunVcsStackedActionInput], AtomCommandResult<{
    readonly action: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
    readonly branch: {
        readonly status: "created" | "skipped_not_requested";
        readonly name?: string | undefined;
    };
    readonly commit: {
        readonly status: "created" | "skipped_no_changes" | "skipped_not_requested";
        readonly commitSha?: string | undefined;
        readonly subject?: string | undefined;
    };
    readonly push: {
        readonly status: "pushed" | "skipped_not_requested" | "skipped_up_to_date";
        readonly branch?: string | undefined;
        readonly upstreamBranch?: string | undefined;
        readonly setUpstream?: boolean | undefined;
    };
    readonly pr: {
        readonly status: "created" | "opened_existing" | "skipped_not_requested";
        readonly url?: string | undefined;
        readonly number?: number | undefined;
        readonly baseBranch?: string | undefined;
        readonly headBranch?: string | undefined;
        readonly title?: string | undefined;
    };
    readonly toast: {
        readonly title: string;
        readonly description?: string | undefined;
        readonly cta: {
            readonly kind: "none";
        } | {
            readonly kind: "open_pr";
            readonly label: string;
            readonly url: string;
        } | {
            readonly kind: "run_action";
            readonly label: string;
            readonly action: {
                readonly kind: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
            };
        };
    };
}, unknown>>;
export declare function useSourceControlPublishRepositoryAction(scope: SourceControlActionScope): SourceControlActionState<[input: {
    provider: SourceControlProviderKind;
    repository: string;
    visibility: SourceControlRepositoryVisibility;
    remoteName: string;
    protocol: SourceControlCloneProtocol;
}], AsyncResult.Failure<never, VcsActionUnavailableError> | AtomCommandResult<{
    readonly repository: {
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly nameWithOwner: string;
        readonly url: string;
        readonly sshUrl: string;
    };
    readonly remoteName: string;
    readonly remoteUrl: string;
    readonly branch: string;
    readonly upstreamBranch?: string | undefined;
    readonly status: "pushed" | "remote_added";
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
export declare function usePreparePullRequestThreadAction(scope: SourceControlActionScope): SourceControlActionState<[input: {
    reference: string;
    mode: "local" | "worktree";
    threadId?: ThreadId;
}], AsyncResult.Failure<never, VcsActionUnavailableError> | AtomCommandResult<{
    readonly pullRequest: {
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly baseBranch: string;
        readonly headBranch: string;
        readonly state: "closed" | "merged" | "open";
    };
    readonly branch: string;
    readonly worktreePath: string | null;
    readonly isOnPullRequestHead: boolean;
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").GitCommandError | import("@t3tools/contracts").GitManagerError | import("@t3tools/contracts").GitPullRequestMaterializationError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlProviderError | import("@t3tools/contracts").TextGenerationError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
export interface PullRequestResolutionTarget {
    readonly environmentId: EnvironmentId | null;
    readonly cwd: string | null;
    readonly reference: string | null;
}
export declare function readCachedPullRequestResolution(target: PullRequestResolutionTarget): GitResolvePullRequestResult | null;
export declare function usePullRequestResolutionState(target: PullRequestResolutionTarget): {
    data: {
        readonly pullRequest: {
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly baseBranch: string;
            readonly headBranch: string;
            readonly state: "closed" | "merged" | "open";
        };
    } | null;
    error: string | null;
    isPending: boolean;
    isFetching: boolean;
    refresh: () => void;
};
export {};
