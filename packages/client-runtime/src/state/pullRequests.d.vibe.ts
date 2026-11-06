import { PullRequestReviewGuideResult, PullRequestListResult, PullRequestChecks, type EnvironmentId, type PullRequestListInput, type PullRequestListStatsInput, type PullRequestListStatsResult, type PullRequestDetail, type PullRequestRef, type PullRequestMergeMethod, PullRequestOperationError, type PullRequestSummary, type VcsStatusResult } from "@t3tools/contracts";
import { AsyncResult, Atom, AtomRegistry } from "effect/reactivity";
import { type QueryAnswerHandler } from "./runtime.ts";
import * as PullRequestDiffLoader from "./pullRequestDiffHttp.vibe";
import type { EnvironmentRegistry } from "../connection/registry.ts";
export { type PullRequestDiffLoadError, PullRequestDiffCredentialRejectedError } from "./pullRequestDiffHttp.vibe";
export * as PullRequestDiffLoader from "./pullRequestDiffHttp.vibe";
declare const EnvironmentHttpConnectionNotReadyError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("effect/Cause").YieldableError & {
    readonly _tag: "EnvironmentHttpConnectionNotReadyError";
} & Readonly<A>;
/** @public Required to name the error in consumers' inferred pull request results. */
export declare class EnvironmentHttpConnectionNotReadyError extends EnvironmentHttpConnectionNotReadyError_base<{
    readonly message: string;
}> {
}
/** @throws {never} */
export declare function createLinkedPullRequestSummaryAtomFamily<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>, refreshes?: (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {};
}) => Atom.Atom<AsyncResult.AsyncResult<number, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>, onAnswer?: QueryAnswerHandler<PullRequestRef, PullRequestSummary>): (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly host?: string | undefined;
        readonly expectedAccountId?: string | undefined;
        readonly allowStale?: boolean | undefined;
        readonly repository: string;
        readonly number: number;
    };
}) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    readonly repository: string;
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly state: "closed" | "merged" | "open";
    readonly isDraft?: boolean | undefined;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly closedAt?: string | null | undefined;
    readonly mergedAt?: string | null | undefined;
    readonly updatedAt: string;
    readonly observedAt?: number | undefined;
    readonly author?: {
        readonly isBot?: boolean | undefined;
        readonly login: string;
        readonly name: string | null;
        readonly avatarUrl: string | null;
    } | null | undefined;
    readonly additions?: number | undefined;
    readonly deletions?: number | undefined;
    readonly changedFiles?: number | undefined;
    readonly reviewDecision?: "approved" | "changes-requested" | "review-required" | null | undefined;
    readonly checksState?: "failing" | "passing" | "pending" | null | undefined;
    readonly mergeability?: "conflicting" | "mergeable" | "unknown" | undefined;
    readonly stack?: {
        readonly number: number;
        readonly position: number;
        readonly size: number;
        readonly base: string;
    } | null | undefined;
}, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
/** Lets a client record what each answer says where it lands, rather than watching the data. */
export interface PullRequestAnswerHandlers {
    readonly list?: QueryAnswerHandler<PullRequestListInput, PullRequestListResult>;
    readonly listStats?: QueryAnswerHandler<PullRequestListStatsInput, PullRequestListStatsResult>;
    readonly detail?: QueryAnswerHandler<PullRequestRef, PullRequestDetail>;
    readonly checks?: QueryAnswerHandler<PullRequestRef, PullRequestChecks | null>;
    readonly reviewGuide?: QueryAnswerHandler<PullRequestRef, PullRequestReviewGuideResult>;
}
/** @throws {never} */
export declare function createPullRequestStackAtomFamily<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>, refreshes?: (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {};
}) => Atom.Atom<AsyncResult.AsyncResult<number, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>): (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly host?: string | undefined;
        readonly expectedAccountId?: string | undefined;
        readonly allowStale?: boolean | undefined;
        readonly repository: string;
        readonly number: number;
    };
}) => Atom.Atom<AsyncResult.AsyncResult<{
    readonly id: string;
    readonly number: number;
    readonly url: string;
    readonly base: string;
    readonly layers: readonly {
        readonly number: number;
        readonly title?: string | undefined;
        readonly isDraft?: boolean | undefined;
        readonly headSha?: string | undefined;
        readonly headBranch: string;
        readonly state: "closed" | "merged" | "open";
    }[];
} | null, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
/** @throws {never} */
export declare function pullRequestDetailToVcsStatus(detail: PullRequestDetail | PullRequestSummary): NonNullable<VcsStatusResult["pr"]>;
/** @throws {never} */
export declare function createPullRequestEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | PullRequestDiffLoader.PullRequestDiffLoader | R, E>, onAnswer?: PullRequestAnswerHandlers): {
    refreshes: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<AsyncResult.AsyncResult<number, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
    linkedThreads: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly host?: string | undefined;
            readonly expectedAccountId?: string | undefined;
            readonly allowStale?: boolean | undefined;
            readonly repository: string;
            readonly number: number;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly threads: readonly {
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly archivedAt: string | null;
        }[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    linkedThreadsUncached: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly host?: string | undefined;
            readonly expectedAccountId?: string | undefined;
            readonly allowStale?: boolean | undefined;
            readonly repository: string;
            readonly number: number;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly threads: readonly {
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly archivedAt: string | null;
        }[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    list: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly state: "all" | "closed" | "merged" | "open";
            readonly involvement?: "all" | "authored" | "reviewing" | undefined;
            readonly filters?: {
                readonly draft?: "hide" | "only" | undefined;
                readonly review?: "approved" | "changes-requested" | "none" | "review-required" | undefined;
                readonly checks?: "failing" | "passing" | undefined;
                readonly labels?: readonly (readonly string[])[] | undefined;
                readonly excludedLabels?: readonly string[] | undefined;
                readonly author?: string | undefined;
            } | undefined;
            readonly projectId?: (string & import("effect/Brand").Brand<"ProjectId">) | undefined;
            readonly projectIds?: readonly (string & import("effect/Brand").Brand<"ProjectId">)[] | undefined;
            readonly host?: string | undefined;
            readonly limit?: number | undefined;
            readonly cursors?: {
                readonly [x: string]: string;
            } | undefined;
            readonly query?: string | undefined;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly viewers: {
            readonly [x: string]: string;
        };
        readonly providers: readonly {
            readonly host: string;
            readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly searchesOnHost: boolean;
            readonly actions?: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[] | undefined;
            readonly projectCount: number;
            readonly configured: boolean;
            readonly detail: string | null;
        }[];
        readonly entries: readonly {
            readonly stack?: {
                readonly number: number;
                readonly position: number;
                readonly size: number;
                readonly base: string;
            } | undefined;
            readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly host: string;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly projectTitle: string;
            readonly repository: string;
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly author: {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            } | null;
            readonly headBranch: string;
            readonly baseBranch: string;
            readonly state: "closed" | "merged" | "open";
            readonly isDraft: boolean;
            readonly mergeability: "conflicting" | "mergeable" | "unknown";
            readonly additions: number;
            readonly deletions: number;
            readonly createdAt: string;
            readonly updatedAt: string;
            readonly observedAt?: number | undefined;
            readonly viewerReviewRequested: boolean;
            readonly labels: readonly {
                readonly name: string;
                readonly color: string | null;
            }[];
            readonly reviewDecision?: "approved" | "changes-requested" | "review-required" | undefined;
            readonly checksState?: "failing" | "passing" | "pending" | undefined;
        }[];
        readonly errors: readonly {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly projectTitle: string;
            readonly message: string;
        }[];
        readonly truncated: boolean;
        readonly nextCursors: {
            readonly [x: string]: string;
        };
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    /**
     * Its own query because the listing is quicker without them — measured over twelve
     * repositories, ~4.0s against ~7.1s — so the rows arrive first and their stats a moment
     * later.
     */
    listStats: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly refs: readonly {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
            }[];
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly stats: readonly {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly repository: string;
            readonly number: number;
            readonly additions: number;
            readonly deletions: number;
        }[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    filterOptions: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly kind: "authors" | "labels";
            readonly projectId?: (string & import("effect/Brand").Brand<"ProjectId">) | undefined;
            readonly projectIds?: readonly (string & import("effect/Brand").Brand<"ProjectId">)[] | undefined;
            readonly host?: string | undefined;
            readonly query?: string | undefined;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly labels: readonly {
            readonly name: string;
            readonly color: string | null;
        }[];
        readonly authors: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    detail: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly capabilities: {
            readonly diff: boolean;
            readonly comment: boolean;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly mergeMethods: readonly ("merge" | "rebase" | "squash")[];
            readonly deleteBranch?: boolean | undefined;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly search: boolean;
            readonly reactions?: boolean | undefined;
            readonly viewedFiles?: "environment" | "host" | undefined;
            readonly review: {
                readonly inlineComment: boolean;
                readonly rangeComment?: boolean | undefined;
                readonly reply: boolean;
                readonly resolve: boolean;
                readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            };
            readonly reviewers: {
                readonly request: boolean;
                readonly listCandidates: boolean;
            };
            readonly edit?: {
                readonly changeRequest: boolean;
                readonly comment: boolean;
            } | undefined;
            readonly stacks?: boolean | undefined;
            readonly stackActions?: boolean | undefined;
            readonly labels?: boolean | undefined;
            readonly checksAlwaysReport?: boolean | undefined;
        };
        readonly viewerPermissions: {
            readonly stackRebase?: boolean | undefined;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly comment: boolean;
            readonly resolve: boolean;
            readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            readonly requestReviewers: boolean;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly labels?: boolean | undefined;
            readonly editChangeRequest?: boolean | undefined;
        };
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly projectTitle: string;
        readonly workspaceRoot: string;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly body: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly mergeability: "conflicting" | "mergeable" | "unknown";
        readonly additions: number;
        readonly deletions: number;
        readonly changedFiles: number;
        readonly headBranch: string;
        readonly headRepositoryNameWithOwner?: string | null | undefined;
        readonly headSha?: string | undefined;
        readonly baseBranch: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly observedAt?: number | undefined;
        readonly mergedAt: string | null;
        readonly closedAt: string | null;
        readonly reviewers: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[];
        readonly labels: readonly {
            readonly name: string;
            readonly color: string | null;
        }[];
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
        readonly mergeCapabilities: {
            readonly merge: boolean;
            readonly squash: boolean;
            readonly rebase: boolean;
        };
        readonly viewer?: string | undefined;
        readonly baseComparison?: "behind" | "unknown" | "up-to-date" | undefined;
        readonly behindBy?: number | undefined;
        readonly autoMergeEnabled?: boolean | undefined;
        readonly autoMergeMethod?: "merge" | "rebase" | "squash" | undefined;
        readonly workflowApprovalsRequired?: number | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly capabilities: {
            readonly diff: boolean;
            readonly comment: boolean;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly mergeMethods: readonly ("merge" | "rebase" | "squash")[];
            readonly deleteBranch?: boolean | undefined;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly search: boolean;
            readonly reactions?: boolean | undefined;
            readonly viewedFiles?: "environment" | "host" | undefined;
            readonly review: {
                readonly inlineComment: boolean;
                readonly rangeComment?: boolean | undefined;
                readonly reply: boolean;
                readonly resolve: boolean;
                readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            };
            readonly reviewers: {
                readonly request: boolean;
                readonly listCandidates: boolean;
            };
            readonly edit?: {
                readonly changeRequest: boolean;
                readonly comment: boolean;
            } | undefined;
            readonly stacks?: boolean | undefined;
            readonly stackActions?: boolean | undefined;
            readonly labels?: boolean | undefined;
            readonly checksAlwaysReport?: boolean | undefined;
        };
        readonly viewerPermissions: {
            readonly stackRebase?: boolean | undefined;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly comment: boolean;
            readonly resolve: boolean;
            readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            readonly requestReviewers: boolean;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly labels?: boolean | undefined;
            readonly editChangeRequest?: boolean | undefined;
        };
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly projectTitle: string;
        readonly workspaceRoot: string;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly body: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly mergeability: "conflicting" | "mergeable" | "unknown";
        readonly additions: number;
        readonly deletions: number;
        readonly changedFiles: number;
        readonly headBranch: string;
        readonly headRepositoryNameWithOwner?: string | null | undefined;
        readonly headSha?: string | undefined;
        readonly baseBranch: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly observedAt?: number | undefined;
        readonly mergedAt: string | null;
        readonly closedAt: string | null;
        readonly reviewers: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[];
        readonly labels: readonly {
            readonly name: string;
            readonly color: string | null;
        }[];
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
        readonly mergeCapabilities: {
            readonly merge: boolean;
            readonly squash: boolean;
            readonly rebase: boolean;
        };
        readonly viewer?: string | undefined;
        readonly baseComparison?: "behind" | "unknown" | "up-to-date" | undefined;
        readonly behindBy?: number | undefined;
        readonly autoMergeEnabled?: boolean | undefined;
        readonly autoMergeMethod?: "merge" | "rebase" | "squash" | undefined;
        readonly workflowApprovalsRequired?: number | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly capabilities: {
            readonly diff: boolean;
            readonly comment: boolean;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly mergeMethods: readonly ("merge" | "rebase" | "squash")[];
            readonly deleteBranch?: boolean | undefined;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly search: boolean;
            readonly reactions?: boolean | undefined;
            readonly viewedFiles?: "environment" | "host" | undefined;
            readonly review: {
                readonly inlineComment: boolean;
                readonly rangeComment?: boolean | undefined;
                readonly reply: boolean;
                readonly resolve: boolean;
                readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            };
            readonly reviewers: {
                readonly request: boolean;
                readonly listCandidates: boolean;
            };
            readonly edit?: {
                readonly changeRequest: boolean;
                readonly comment: boolean;
            } | undefined;
            readonly stacks?: boolean | undefined;
            readonly stackActions?: boolean | undefined;
            readonly labels?: boolean | undefined;
            readonly checksAlwaysReport?: boolean | undefined;
        };
        readonly viewerPermissions: {
            readonly stackRebase?: boolean | undefined;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly comment: boolean;
            readonly resolve: boolean;
            readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            readonly requestReviewers: boolean;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly labels?: boolean | undefined;
            readonly editChangeRequest?: boolean | undefined;
        };
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly projectTitle: string;
        readonly workspaceRoot: string;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly body: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly mergeability: "conflicting" | "mergeable" | "unknown";
        readonly additions: number;
        readonly deletions: number;
        readonly changedFiles: number;
        readonly headBranch: string;
        readonly headRepositoryNameWithOwner?: string | null | undefined;
        readonly headSha?: string | undefined;
        readonly baseBranch: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly observedAt?: number | undefined;
        readonly mergedAt: string | null;
        readonly closedAt: string | null;
        readonly reviewers: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[];
        readonly labels: readonly {
            readonly name: string;
            readonly color: string | null;
        }[];
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
        readonly mergeCapabilities: {
            readonly merge: boolean;
            readonly squash: boolean;
            readonly rebase: boolean;
        };
        readonly viewer?: string | undefined;
        readonly baseComparison?: "behind" | "unknown" | "up-to-date" | undefined;
        readonly behindBy?: number | undefined;
        readonly autoMergeEnabled?: boolean | undefined;
        readonly autoMergeMethod?: "merge" | "rebase" | "squash" | undefined;
        readonly workflowApprovalsRequired?: number | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly capabilities: {
            readonly diff: boolean;
            readonly comment: boolean;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly mergeMethods: readonly ("merge" | "rebase" | "squash")[];
            readonly deleteBranch?: boolean | undefined;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly search: boolean;
            readonly reactions?: boolean | undefined;
            readonly viewedFiles?: "environment" | "host" | undefined;
            readonly review: {
                readonly inlineComment: boolean;
                readonly rangeComment?: boolean | undefined;
                readonly reply: boolean;
                readonly resolve: boolean;
                readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            };
            readonly reviewers: {
                readonly request: boolean;
                readonly listCandidates: boolean;
            };
            readonly edit?: {
                readonly changeRequest: boolean;
                readonly comment: boolean;
            } | undefined;
            readonly stacks?: boolean | undefined;
            readonly stackActions?: boolean | undefined;
            readonly labels?: boolean | undefined;
            readonly checksAlwaysReport?: boolean | undefined;
        };
        readonly viewerPermissions: {
            readonly stackRebase?: boolean | undefined;
            readonly actions: readonly ("approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch")[];
            readonly comment: boolean;
            readonly resolve: boolean;
            readonly verdicts: readonly ("approve" | "comment" | "request-changes")[];
            readonly requestReviewers: boolean;
            readonly updateMethods?: readonly ("merge" | "rebase")[] | undefined;
            readonly labels?: boolean | undefined;
            readonly editChangeRequest?: boolean | undefined;
        };
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly projectTitle: string;
        readonly workspaceRoot: string;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly body: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly mergeability: "conflicting" | "mergeable" | "unknown";
        readonly additions: number;
        readonly deletions: number;
        readonly changedFiles: number;
        readonly headBranch: string;
        readonly headRepositoryNameWithOwner?: string | null | undefined;
        readonly headSha?: string | undefined;
        readonly baseBranch: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly observedAt?: number | undefined;
        readonly mergedAt: string | null;
        readonly closedAt: string | null;
        readonly reviewers: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[];
        readonly labels: readonly {
            readonly name: string;
            readonly color: string | null;
        }[];
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
        readonly mergeCapabilities: {
            readonly merge: boolean;
            readonly squash: boolean;
            readonly rebase: boolean;
        };
        readonly viewer?: string | undefined;
        readonly baseComparison?: "behind" | "unknown" | "up-to-date" | undefined;
        readonly behindBy?: number | undefined;
        readonly autoMergeEnabled?: boolean | undefined;
        readonly autoMergeMethod?: "merge" | "rebase" | "squash" | undefined;
        readonly workflowApprovalsRequired?: number | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    preview: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    previewCard: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly repository: string;
        readonly number: number;
        readonly title: string;
        readonly url: string;
        readonly author: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null;
        readonly state: "closed" | "merged" | "open";
        readonly isDraft: boolean;
        readonly createdAt: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    checks: 
    /** @throws {never} */
    ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly observedAt?: number | undefined;
        readonly state: "closed" | "merged" | "open";
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
    } | null, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly observedAt?: number | undefined;
        readonly state: "closed" | "merged" | "open";
        readonly checks: readonly {
            readonly name: string;
            readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
            readonly description: string | null;
            readonly url: string | null;
            readonly required?: boolean | undefined;
        }[];
    } | null, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    activity: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly author?: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null | undefined;
        readonly reviewers?: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[] | undefined;
        readonly comments: readonly {
            readonly id: string;
            readonly kind: "issue-comment" | "review" | "review-comment";
            readonly author: {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            } | null;
            readonly body: string;
            readonly createdAt: string;
            readonly editedAt?: string | null | undefined;
            readonly url: string | null;
            readonly path: string | null;
            readonly reviewState: string | null;
            readonly reactions?: readonly {
                readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                readonly count: number;
                readonly actors: readonly string[];
                readonly viewerHasReacted: boolean;
            }[] | undefined;
            readonly canEdit?: boolean | undefined;
        }[];
        readonly commentCount: number;
        readonly commentsTruncated: boolean;
        readonly reviewThreadsTruncated?: boolean | undefined;
        readonly reviewThreads: readonly {
            readonly id: string;
            readonly path: string;
            readonly line: number | null;
            readonly side: "left" | "right";
            readonly isResolved: boolean;
            readonly isOutdated: boolean;
            readonly comments: readonly {
                readonly id: string;
                readonly author: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null;
                readonly body: string;
                readonly createdAt: string;
                readonly editedAt?: string | null | undefined;
                readonly url: string | null;
                readonly reactions?: readonly {
                    readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                    readonly count: number;
                    readonly actors: readonly string[];
                    readonly viewerHasReacted: boolean;
                }[] | undefined;
                readonly canEdit?: boolean | undefined;
            }[];
            readonly commentCount?: number | undefined;
            readonly nextCommentsCursor?: string | undefined;
            readonly canResolve?: boolean | undefined;
        }[];
        readonly commits: readonly {
            readonly oid: string;
            readonly messageHeadline: string;
            readonly committedDate: string;
            readonly additions?: number | undefined;
            readonly deletions?: number | undefined;
            readonly authors?: readonly {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            }[] | undefined;
        }[];
        readonly reactions?: readonly {
            readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
            readonly count: number;
            readonly actors: readonly string[];
            readonly viewerHasReacted: boolean;
        }[] | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly author?: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null | undefined;
        readonly reviewers?: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[] | undefined;
        readonly comments: readonly {
            readonly id: string;
            readonly kind: "issue-comment" | "review" | "review-comment";
            readonly author: {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            } | null;
            readonly body: string;
            readonly createdAt: string;
            readonly editedAt?: string | null | undefined;
            readonly url: string | null;
            readonly path: string | null;
            readonly reviewState: string | null;
            readonly reactions?: readonly {
                readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                readonly count: number;
                readonly actors: readonly string[];
                readonly viewerHasReacted: boolean;
            }[] | undefined;
            readonly canEdit?: boolean | undefined;
        }[];
        readonly commentCount: number;
        readonly commentsTruncated: boolean;
        readonly reviewThreadsTruncated?: boolean | undefined;
        readonly reviewThreads: readonly {
            readonly id: string;
            readonly path: string;
            readonly line: number | null;
            readonly side: "left" | "right";
            readonly isResolved: boolean;
            readonly isOutdated: boolean;
            readonly comments: readonly {
                readonly id: string;
                readonly author: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null;
                readonly body: string;
                readonly createdAt: string;
                readonly editedAt?: string | null | undefined;
                readonly url: string | null;
                readonly reactions?: readonly {
                    readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                    readonly count: number;
                    readonly actors: readonly string[];
                    readonly viewerHasReacted: boolean;
                }[] | undefined;
                readonly canEdit?: boolean | undefined;
            }[];
            readonly commentCount?: number | undefined;
            readonly nextCommentsCursor?: string | undefined;
            readonly canResolve?: boolean | undefined;
        }[];
        readonly commits: readonly {
            readonly oid: string;
            readonly messageHeadline: string;
            readonly committedDate: string;
            readonly additions?: number | undefined;
            readonly deletions?: number | undefined;
            readonly authors?: readonly {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            }[] | undefined;
        }[];
        readonly reactions?: readonly {
            readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
            readonly count: number;
            readonly actors: readonly string[];
            readonly viewerHasReacted: boolean;
        }[] | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly author?: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null | undefined;
        readonly reviewers?: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[] | undefined;
        readonly comments: readonly {
            readonly id: string;
            readonly kind: "issue-comment" | "review" | "review-comment";
            readonly author: {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            } | null;
            readonly body: string;
            readonly createdAt: string;
            readonly editedAt?: string | null | undefined;
            readonly url: string | null;
            readonly path: string | null;
            readonly reviewState: string | null;
            readonly reactions?: readonly {
                readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                readonly count: number;
                readonly actors: readonly string[];
                readonly viewerHasReacted: boolean;
            }[] | undefined;
            readonly canEdit?: boolean | undefined;
        }[];
        readonly commentCount: number;
        readonly commentsTruncated: boolean;
        readonly reviewThreadsTruncated?: boolean | undefined;
        readonly reviewThreads: readonly {
            readonly id: string;
            readonly path: string;
            readonly line: number | null;
            readonly side: "left" | "right";
            readonly isResolved: boolean;
            readonly isOutdated: boolean;
            readonly comments: readonly {
                readonly id: string;
                readonly author: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null;
                readonly body: string;
                readonly createdAt: string;
                readonly editedAt?: string | null | undefined;
                readonly url: string | null;
                readonly reactions?: readonly {
                    readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                    readonly count: number;
                    readonly actors: readonly string[];
                    readonly viewerHasReacted: boolean;
                }[] | undefined;
                readonly canEdit?: boolean | undefined;
            }[];
            readonly commentCount?: number | undefined;
            readonly nextCommentsCursor?: string | undefined;
            readonly canResolve?: boolean | undefined;
        }[];
        readonly commits: readonly {
            readonly oid: string;
            readonly messageHeadline: string;
            readonly committedDate: string;
            readonly additions?: number | undefined;
            readonly deletions?: number | undefined;
            readonly authors?: readonly {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            }[] | undefined;
        }[];
        readonly reactions?: readonly {
            readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
            readonly count: number;
            readonly actors: readonly string[];
            readonly viewerHasReacted: boolean;
        }[] | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly author?: {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        } | null | undefined;
        readonly reviewers?: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
        }[] | undefined;
        readonly comments: readonly {
            readonly id: string;
            readonly kind: "issue-comment" | "review" | "review-comment";
            readonly author: {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            } | null;
            readonly body: string;
            readonly createdAt: string;
            readonly editedAt?: string | null | undefined;
            readonly url: string | null;
            readonly path: string | null;
            readonly reviewState: string | null;
            readonly reactions?: readonly {
                readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                readonly count: number;
                readonly actors: readonly string[];
                readonly viewerHasReacted: boolean;
            }[] | undefined;
            readonly canEdit?: boolean | undefined;
        }[];
        readonly commentCount: number;
        readonly commentsTruncated: boolean;
        readonly reviewThreadsTruncated?: boolean | undefined;
        readonly reviewThreads: readonly {
            readonly id: string;
            readonly path: string;
            readonly line: number | null;
            readonly side: "left" | "right";
            readonly isResolved: boolean;
            readonly isOutdated: boolean;
            readonly comments: readonly {
                readonly id: string;
                readonly author: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null;
                readonly body: string;
                readonly createdAt: string;
                readonly editedAt?: string | null | undefined;
                readonly url: string | null;
                readonly reactions?: readonly {
                    readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                    readonly count: number;
                    readonly actors: readonly string[];
                    readonly viewerHasReacted: boolean;
                }[] | undefined;
                readonly canEdit?: boolean | undefined;
            }[];
            readonly commentCount?: number | undefined;
            readonly nextCommentsCursor?: string | undefined;
            readonly canResolve?: boolean | undefined;
        }[];
        readonly commits: readonly {
            readonly oid: string;
            readonly messageHeadline: string;
            readonly committedDate: string;
            readonly additions?: number | undefined;
            readonly deletions?: number | undefined;
            readonly authors?: readonly {
                readonly isBot?: boolean | undefined;
                readonly login: string;
                readonly name: string | null;
                readonly avatarUrl: string | null;
            }[] | undefined;
        }[];
        readonly reactions?: readonly {
            readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
            readonly count: number;
            readonly actors: readonly string[];
            readonly viewerHasReacted: boolean;
        }[] | undefined;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    threadComments: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly threadId: string;
                readonly cursor: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly comments: readonly {
                readonly id: string;
                readonly author: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null;
                readonly body: string;
                readonly createdAt: string;
                readonly editedAt?: string | null | undefined;
                readonly url: string | null;
                readonly reactions?: readonly {
                    readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                    readonly count: number;
                    readonly actors: readonly string[];
                    readonly viewerHasReacted: boolean;
                }[] | undefined;
                readonly canEdit?: boolean | undefined;
            }[];
            readonly nextCursor: string | null;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    diff: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly host?: string | undefined;
            readonly expectedAccountId?: string | undefined;
            readonly allowStale?: boolean | undefined;
            readonly repository: string;
            readonly number: number;
            readonly cursor?: string | undefined;
            readonly commit?: string | undefined;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly patch: string;
        readonly truncated: boolean;
        readonly nextCursor: string | null;
        readonly omittedFileStats?: readonly {
            readonly path: string;
            readonly additions: number;
            readonly deletions: number;
        }[] | undefined;
    }, E | EnvironmentHttpConnectionNotReadyError | Error | PullRequestDiffLoader.PullRequestDiffLoadError>>;
    diffFileContents: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly commit?: string | undefined;
                readonly changeType: "change" | "deleted" | "new" | "rename-changed" | "rename-pure";
                readonly oldPath: string;
                readonly newPath: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly oldContents: string;
            readonly newContents: string;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    filesViewed: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly host?: string | undefined;
            readonly expectedAccountId?: string | undefined;
            readonly allowStale?: boolean | undefined;
            readonly repository: string;
            readonly number: number;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly files: readonly {
            readonly path: string;
            readonly state: "dismissed" | "unviewed" | "viewed";
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    changeBreakdown: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly host?: string | undefined;
            readonly expectedAccountId?: string | undefined;
            readonly allowStale?: boolean | undefined;
            readonly repository: string;
            readonly number: number;
        };
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly code: {
            readonly additions: number;
            readonly deletions: number;
        };
        readonly tests: {
            readonly additions: number;
            readonly deletions: number;
        };
        readonly mocks: {
            readonly additions: number;
            readonly deletions: number;
        };
        readonly generated: {
            readonly additions: number;
            readonly deletions: number;
        };
        readonly docs: {
            readonly additions: number;
            readonly deletions: number;
        };
    } | null, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    /**
     * One write in flight per change request: the host applies these in order, and a reader
     * ticking down a file list faster than the round trip would otherwise race their own presses.
     */
    setFilesViewed: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly files: readonly {
                    readonly path: string;
                    readonly viewed: boolean;
                }[];
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    runAction: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly stackNumber?: number | undefined;
                readonly expectedStackHeads?: readonly {
                    readonly number: number;
                    readonly headSha: string;
                }[] | undefined;
                readonly action: "approve-workflows" | "close" | "delete-branch" | "disable-auto-merge" | "draft" | "enable-auto-merge" | "merge" | "ready" | "reopen" | "revert" | "update-branch";
                readonly mergeMethod?: "merge" | "rebase" | "squash" | undefined;
                readonly updateMethod?: "merge" | "rebase" | undefined;
            } & {
                /** @throws {never} */
                readonly resolveMergeMethod?: (detail: PullRequestDetail) => PullRequestMergeMethod;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    update: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly title?: string | undefined;
                readonly body?: string | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    comment: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly body: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    updateComment: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly commentId: string;
                readonly kind: "issue-comment" | "review-comment";
                readonly body: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    submitReview: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly verdict: "approve" | "comment" | "request-changes";
                readonly body: string;
                readonly comments: readonly {
                    readonly path: string;
                    readonly oldPath?: string | undefined;
                    readonly position: {
                        readonly kind: "added";
                        readonly newLine: number;
                    } | {
                        readonly kind: "deleted";
                        readonly oldLine: number;
                    } | {
                        readonly kind: "context";
                        readonly oldLine: number;
                        readonly newLine: number;
                        readonly side: "left" | "right";
                    };
                    readonly startPosition?: {
                        readonly kind: "added";
                        readonly newLine: number;
                    } | {
                        readonly kind: "deleted";
                        readonly oldLine: number;
                    } | {
                        readonly kind: "context";
                        readonly oldLine: number;
                        readonly newLine: number;
                        readonly side: "left" | "right";
                    } | undefined;
                    readonly body: string;
                }[];
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    replyToThread: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly threadId: string;
                readonly body: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    reviewerCandidates: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
            readonly id: string;
            readonly kind: "team" | "user";
            readonly isRequested: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
            readonly id: string;
            readonly kind: "team" | "user";
            readonly isRequested: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
            readonly id: string;
            readonly kind: "team" | "user";
            readonly isRequested: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly isBot?: boolean | undefined;
            readonly login: string;
            readonly name: string | null;
            readonly avatarUrl: string | null;
            readonly id: string;
            readonly kind: "team" | "user";
            readonly isRequested: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    requestReviewers: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly reviewers: readonly {
                    readonly id: string;
                    readonly kind: "team" | "user";
                }[];
                readonly requested: boolean;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    reviewGuide: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly guide: {
            readonly headSha: string;
            readonly generatedAt: string;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            };
            readonly stops: readonly {
                readonly title: string;
                readonly summary: string;
                readonly attention: {
                    readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                    readonly note: string;
                } | null;
                readonly excerpts: readonly {
                    readonly path: string;
                    readonly side: "new" | "old";
                    readonly start: number;
                    readonly end: number;
                    readonly caption: string;
                }[];
                readonly files: readonly {
                    readonly path: string;
                    readonly note?: string;
                }[];
                readonly notes: readonly {
                    readonly path: string;
                    readonly line: number;
                    readonly title: string;
                    readonly body: string;
                }[];
                readonly questions: readonly string[];
            }[];
        } | null;
        readonly run: {
            readonly _tag: "Failed";
            readonly headSha: string;
            readonly failedAt: string;
            readonly detail: string;
        } | {
            readonly _tag: "Running";
            readonly headSha: string;
            readonly startedAt: string;
        } | null;
        readonly currentHeadSha: string | null;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    generateReviewGuide: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly guide: {
                readonly headSha: string;
                readonly generatedAt: string;
                readonly modelSelection: {
                    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                    readonly model: string;
                    readonly options?: readonly {
                        readonly id: string;
                        readonly value: string | boolean;
                    }[];
                };
                readonly stops: readonly {
                    readonly title: string;
                    readonly summary: string;
                    readonly attention: {
                        readonly kind: "accessibility" | "contract" | "product" | "risk" | "tradeoff";
                        readonly note: string;
                    } | null;
                    readonly excerpts: readonly {
                        readonly path: string;
                        readonly side: "new" | "old";
                        readonly start: number;
                        readonly end: number;
                        readonly caption: string;
                    }[];
                    readonly files: readonly {
                        readonly path: string;
                        readonly note?: string;
                    }[];
                    readonly notes: readonly {
                        readonly path: string;
                        readonly line: number;
                        readonly title: string;
                        readonly body: string;
                    }[];
                    readonly questions: readonly string[];
                }[];
            } | null;
            readonly run: {
                readonly _tag: "Failed";
                readonly headSha: string;
                readonly failedAt: string;
                readonly detail: string;
            } | {
                readonly _tag: "Running";
                readonly headSha: string;
                readonly startedAt: string;
            } | null;
            readonly currentHeadSha: string | null;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    labelCandidates: ({ environmentId, input: { projectId, host, repository, number, allowStale, expectedAccountId }, }: Parameters<
    /** @throws {never} */
    (target: {
        readonly environmentId: EnvironmentId;
        readonly input: PullRequestRef;
    }) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly name: string;
            readonly color: string | null;
            readonly description: string | null;
            readonly isApplied: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly name: string;
            readonly color: string | null;
            readonly description: string | null;
            readonly isApplied: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>>[0]) => Atom.Writable<AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly name: string;
            readonly color: string | null;
            readonly description: string | null;
            readonly isApplied: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>, AsyncResult.AsyncResult<{
        readonly candidates: readonly {
            readonly name: string;
            readonly color: string | null;
            readonly description: string | null;
            readonly isApplied: boolean;
        }[];
        readonly truncated: boolean;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
    setLabels: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly labels: readonly string[];
                readonly applied: boolean;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    setThreadResolution: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly threadId: string;
                readonly resolved: boolean;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    setReaction: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly host?: string | undefined;
                readonly expectedAccountId?: string | undefined;
                readonly allowStale?: boolean | undefined;
                readonly repository: string;
                readonly number: number;
                readonly subjectId?: string | undefined;
                readonly content: "confused" | "eyes" | "heart" | "hooray" | "laugh" | "rocket" | "thumbs-down" | "thumbs-up";
                readonly reacted: boolean;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    /**
     * A separate request rather than a flag on a read, so only a person's refresh spends
     * host requests while every silent re-read shares the cache.
     */
    invalidate: {
        label: string;
        run: (registry: AtomRegistry.AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly reference?: {
                    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                    readonly host?: string | undefined;
                    readonly expectedAccountId?: string | undefined;
                    readonly allowStale?: boolean | undefined;
                    readonly repository: string;
                    readonly number: number;
                } | undefined;
                readonly filesViewedOnly?: boolean | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
