import type { VcsRefTarget } from "@t3tools/client-runtime/state/vcs";
import type { EnvironmentId, OrchestrationV2ProjectedTurnItem, ProjectId, ThreadPullRequestLink } from "@t3tools/contracts";
import { type EnvironmentThreadSearchMatch, type ThreadSearchScope } from "@t3tools/client-runtime/state/thread-search";
import { type CheckpointDiffTarget } from "./queryTargets";
export interface ComposerPathSearchTarget {
    readonly environmentId: EnvironmentId | null;
    readonly cwd: string | null;
    readonly query: string | null;
}
/** @throws {never} */
export declare function useDebouncedValue<A>(value: A, delayMs: number): A;
/** @throws {never} */
export declare function useComposerPullRequestSearch(input: {
    environmentId: EnvironmentId | null;
    projectId: ProjectId | null;
    repository: string | null;
    threadPullRequests?: ReadonlyArray<ThreadPullRequestLink> | undefined;
    query: string | null;
}): {
    entries: readonly ({
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
    } | {
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
    } | {
        projectId: string;
        repository: string;
        number: number;
        url: string;
        title: string;
        headBranch: string;
        baseBranch: string;
        state: "closed" | "merged" | "open";
        isDraft: boolean;
        updatedAt: string;
    })[];
    isPending: boolean;
    error: string | null;
};
/**
 * Server matches for a thread search: message hits, and on environments that leave older settled
 * threads out of the shell, the rows of the best older matches, mounted into the thread list while
 * they show so the caller's own ranking finds them.
 * @throws {never}
 */
export declare function useThreadSearch(environmentIds: ReadonlyArray<EnvironmentId>, query: string, scope?: ThreadSearchScope): {
    readonly matches: ReadonlyArray<EnvironmentThreadSearchMatch>;
    /** The query `matches` are for, which lags the typed one while a search runs. */
    readonly query: string;
    readonly isPending: boolean;
};
/** @throws {never} */
export declare function useBranches(input: {
    readonly environmentId: EnvironmentId | null;
    readonly cwd: string | null;
    readonly query?: string | null;
}): import("./query.vibe").EnvironmentQueryView<{
    readonly isAtRepositoryRoot?: boolean | undefined;
    readonly refs: readonly {
        readonly name: string;
        readonly isRemote?: boolean | undefined;
        readonly remoteName?: string | undefined;
        readonly upstreamRef?: string | undefined;
        readonly current: boolean;
        readonly isDefault: boolean;
        readonly worktreePath: string | null;
    }[];
    readonly isRepo: boolean;
    readonly hasPrimaryRemote: boolean;
    readonly nextCursor: number | null;
    readonly totalCount: number;
}>;
/** @throws {never} */
export declare function usePaginatedBranches(target: VcsRefTarget): {
    data: {
        readonly isAtRepositoryRoot?: boolean | undefined;
        readonly refs: readonly {
            readonly name: string;
            readonly isRemote?: boolean | undefined;
            readonly remoteName?: string | undefined;
            readonly upstreamRef?: string | undefined;
            readonly current: boolean;
            readonly isDefault: boolean;
            readonly worktreePath: string | null;
        }[];
        readonly isRepo: boolean;
        readonly hasPrimaryRemote: boolean;
        readonly nextCursor: number | null;
        readonly totalCount: number;
    } | null;
    refs: readonly {
        readonly name: string;
        readonly isRemote?: boolean | undefined;
        readonly remoteName?: string | undefined;
        readonly upstreamRef?: string | undefined;
        readonly current: boolean;
        readonly isDefault: boolean;
        readonly worktreePath: string | null;
    }[];
    error: string | null;
    isPending: boolean;
    isFetchingNextPage: boolean;
    refresh: () => void;
    loadNext: () => void;
};
/** @throws {never} */
export declare function useComposerPathSearch(target: ComposerPathSearchTarget): {
    entries: readonly {
        readonly path: string;
        readonly kind: "directory" | "file";
        readonly ignored?: boolean | undefined;
    }[];
    error: string | null;
    isPending: boolean;
    refresh: 
    /** @throws {never} */
    () => void;
};
/** @throws {never} */
export declare function useCheckpointDiff(target: CheckpointDiffTarget): import("./query.vibe").EnvironmentQueryView<{
    readonly fromTurnCount: number;
    readonly toTurnCount: number;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly diff: string;
}>;
/** @throws {never} */
export declare function useTurnItemDetail(target: {
    readonly environmentId: EnvironmentId;
    readonly row: OrchestrationV2ProjectedTurnItem;
} | null): import("./query.vibe").EnvironmentQueryView<{
    readonly item: {
        readonly source: {
            readonly kind: "command";
        } | {
            readonly kind: "command";
        } | {
            readonly kind: "monitor";
        } | {
            readonly kind: "background_task";
        } | {
            readonly kind: "system";
        } | {
            readonly kind: "subagent";
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        } | {
            readonly kind: "delegated_task";
            readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        };
        readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
        readonly summary: string;
        readonly detail?: string | undefined;
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "notification";
    } | {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "user_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
        readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
        readonly workflowScript?: boolean | undefined;
        readonly inputIntent: "promoted_queued_to_steer" | "queued_turn" | "steer" | "turn_start";
        readonly text: string;
        readonly textOmitted?: true | undefined;
        readonly context?: {
            readonly version: 1;
            readonly guest?: {
                readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                readonly name: string;
                readonly text: string;
                readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
            } | undefined;
            readonly records: readonly ({
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "image";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "file";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "terminal";
                readonly terminalId: string;
                readonly terminalLabel: string;
                readonly lineStart: number;
                readonly lineEnd: number;
                readonly text: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
                readonly kind: "element";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "mention";
                readonly path: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "skill";
                readonly name: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "thread";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "environment";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: string;
                readonly payload: unknown;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "preview-annotation";
                readonly annotationId: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly comment: string;
                readonly targetSummary: string;
                readonly styleChanges: readonly string[];
                readonly elements?: readonly {
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                }[] | undefined;
                readonly elementIds?: readonly string[] | undefined;
                readonly regionCount?: number | undefined;
                readonly strokeCount?: number | undefined;
                readonly styleChangeDetails?: readonly {
                    readonly targetId: string;
                    readonly selector: string | null;
                    readonly property: string;
                    readonly previousValue: string;
                    readonly value: string;
                }[] | undefined;
                readonly screenshotContextId?: (string & import("effect/Brand").Brand<"ComposerContextId">) | undefined;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "review-comment";
                readonly sectionId: string;
                readonly sectionTitle: string;
                readonly filePath: string;
                readonly startIndex: number;
                readonly endIndex: number;
                readonly rangeLabel: string;
                readonly text: string;
                readonly diff: string;
                readonly fenceLanguage?: string | undefined;
                readonly pullRequest?: {
                    readonly number: number;
                    readonly title: string;
                    readonly url: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly state: "closed" | "merged" | "open";
                    readonly isDraft: boolean;
                } | undefined;
            })[];
        } | undefined;
        readonly attachments: readonly ({
            readonly type: string;
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
        } | {
            readonly type: "image";
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
            readonly source?: {
                readonly kind: "snap-shot";
                readonly capturedAt: string;
                readonly appName: string;
                readonly windowTitle: string;
                readonly accessibleText?: string | undefined;
                readonly accessibility?: {
                    readonly format: "flat-text";
                    readonly text: string;
                    readonly truncated: boolean;
                } | {
                    readonly format: "element-tree";
                    readonly coordinateSpace: "captured-image";
                    readonly imageSize: {
                        readonly width: number;
                        readonly height: number;
                    };
                    readonly truncated: boolean;
                    readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                } | undefined;
                readonly appIdentifier?: string | undefined;
                readonly appIconDataUrl?: string | undefined;
            } | undefined;
        } | {
            readonly type: "file";
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
            readonly source?: {
                readonly _tag: "pasted-text";
            } | undefined;
        })[];
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "assistant_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly text: string;
        readonly textOmitted?: true | undefined;
        readonly attachments?: readonly ({
            readonly type: string;
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
        } | {
            readonly type: "image";
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
            readonly source?: {
                readonly kind: "snap-shot";
                readonly capturedAt: string;
                readonly appName: string;
                readonly windowTitle: string;
                readonly accessibleText?: string | undefined;
                readonly accessibility?: {
                    readonly format: "flat-text";
                    readonly text: string;
                    readonly truncated: boolean;
                } | {
                    readonly format: "element-tree";
                    readonly coordinateSpace: "captured-image";
                    readonly imageSize: {
                        readonly width: number;
                        readonly height: number;
                    };
                    readonly truncated: boolean;
                    readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                } | undefined;
                readonly appIdentifier?: string | undefined;
                readonly appIconDataUrl?: string | undefined;
            } | undefined;
        } | {
            readonly type: "file";
            readonly id: string;
            readonly name: string;
            readonly mimeType: string;
            readonly sizeBytes: number;
            readonly source?: {
                readonly _tag: "pasted-text";
            } | undefined;
        })[] | undefined;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "reasoning";
        readonly text: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "proposed_plan";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly markdown: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "todo_list";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly steps: readonly {
            readonly id: string;
            readonly text: string;
            readonly status: "completed" | "pending" | "running";
            readonly durationAnchorAt?: string | undefined;
            readonly durationMs?: number | undefined;
        }[];
        readonly explanation?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "user_input_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly questions: readonly {
            readonly id: string;
            readonly header: string;
            readonly question: string;
            readonly options: readonly {
                readonly label: string;
                readonly description: string;
                readonly value?: string | undefined;
                readonly preview?: string | undefined;
            }[];
            readonly multiSelect?: boolean | undefined;
            readonly allowCustomAnswer?: boolean | undefined;
            readonly initialAnswer?: string | undefined;
            readonly required?: boolean | undefined;
        }[];
        readonly questionAnswer?: {
            readonly requestId: string;
            readonly questionTextById?: {
                readonly [x: string]: string;
            } | undefined;
            readonly answers: {
                readonly [x: string]: unknown;
            };
            readonly attachmentsByQuestionId: {
                readonly [x: string]: readonly ({
                    readonly type: "image";
                    readonly id: string;
                    readonly name: string;
                    readonly mimeType: string;
                    readonly sizeBytes: number;
                    readonly source?: {
                        readonly kind: "snap-shot";
                        readonly capturedAt: string;
                        readonly appName: string;
                        readonly windowTitle: string;
                        readonly accessibleText?: string | undefined;
                        readonly accessibility?: {
                            readonly format: "flat-text";
                            readonly text: string;
                            readonly truncated: boolean;
                        } | {
                            readonly format: "element-tree";
                            readonly coordinateSpace: "captured-image";
                            readonly imageSize: {
                                readonly width: number;
                                readonly height: number;
                            };
                            readonly truncated: boolean;
                            readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                        } | undefined;
                        readonly appIdentifier?: string | undefined;
                        readonly appIconDataUrl?: string | undefined;
                    } | undefined;
                } | {
                    readonly type: "file";
                    readonly id: string;
                    readonly name: string;
                    readonly mimeType: string;
                    readonly sizeBytes: number;
                    readonly source?: {
                        readonly _tag: "pasted-text";
                    } | undefined;
                })[];
            };
        } | undefined;
        readonly responseMode?: "message" | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "file_change";
        readonly fileName: string;
        readonly additions?: number | undefined;
        readonly deletions?: number | undefined;
        readonly diffStr?: string | undefined;
        readonly oldStr?: string | undefined;
        readonly newStr?: string | undefined;
        readonly changes?: readonly {
            readonly operation: string;
            readonly path: string;
            readonly oldPath?: string | undefined;
            readonly fileType?: string | undefined;
            readonly mimeType?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "command_execution";
        readonly input: string;
        readonly output?: string | undefined;
        readonly outputOmitted?: boolean | undefined;
        readonly outputIndicatesFailure?: boolean | undefined;
        readonly exitCode?: number | undefined;
        readonly monitor?: boolean | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "file_search";
        readonly pattern?: string | undefined;
        readonly results?: readonly {
            readonly fileName: string;
            readonly line?: number | undefined;
            readonly column?: number | undefined;
            readonly preview?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "web_search";
        readonly patterns?: readonly string[] | undefined;
        readonly results?: readonly {
            readonly title?: string | undefined;
            readonly url?: string | undefined;
            readonly snippet?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "approval_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly requestKind: "command" | "file-change" | "file-read" | "mcp-elicitation" | "permission";
        readonly prompt?: string | undefined;
        readonly reason?: string | undefined;
        readonly fullAccessOverride?: "ask_rule" | "provider_check" | undefined;
        readonly appName?: string | undefined;
        readonly options?: readonly {
            readonly decision: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline";
            readonly label: string;
            readonly warning?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "checkpoint";
        readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly files: readonly {
            readonly path: string;
            readonly kind: string;
            readonly additions: number;
            readonly deletions: number;
        }[];
        readonly filesOmitted?: true | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "run_interrupt_request";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "run_interrupt_result";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "system_notice";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "error";
        readonly failure: {
            readonly class: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error";
            readonly message: string;
            readonly code: string | null;
            readonly retryable: boolean | null;
            readonly resetAt?: string | null | undefined;
        };
        readonly retry?: {
            readonly attempt: number;
            readonly maxAttempts: number | null;
            readonly retryDelayMs: number | null;
        } | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "compaction";
        readonly driver: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | null;
        readonly summary?: string | undefined;
        readonly beforeTokenCount?: number | undefined;
        readonly afterTokenCount?: number | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "handoff";
        readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
        readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly fromProviderInstanceIds: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[];
        readonly toProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly fromModelSelections?: readonly {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[] | undefined;
        }[] | undefined;
        readonly toModel?: string | undefined;
        readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
        readonly summary?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "fork";
        readonly source: {
            readonly type: "run";
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: string & import("effect/Brand").Brand<"RunId">;
        } | {
            readonly type: "node";
            readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        } | {
            readonly type: "provider_thread";
            readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
            readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
        };
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly providerThreadId?: (string & import("effect/Brand").Brand<"ProviderThreadId">) | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "thread_created";
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly targetProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly targetModel: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "secret_request";
        readonly label: string;
        readonly reason: string;
        readonly placeholder?: string | undefined;
        readonly delivery?: "file" | undefined;
        readonly secretStatus: "cancelled" | "declined" | "pending" | "saved";
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "link_request";
        readonly url?: string | undefined;
        readonly reason: string;
        readonly environmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly label?: string | undefined;
        readonly hint?: string | undefined;
        readonly requestedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly linkStatus: "cancelled" | "declined" | "failed" | "linked" | "pending";
        readonly linkedEnvironmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly linkedLabel?: string | undefined;
        readonly linkedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly failure?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "subagent";
        readonly subagentId: string & import("effect/Brand").Brand<"NodeId">;
        readonly origin: "app_owned" | "provider_native";
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly remoteChild?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly label: string;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly stoppedThere?: boolean | undefined;
            readonly stopCount?: number | undefined;
        } | undefined;
        readonly prompt: string;
        readonly progress?: string | undefined;
        readonly result: string | null;
        readonly promptOmitted?: true | undefined;
        readonly resultOmitted?: true | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: import("effect/DateTime").Utc | null;
        readonly completedAt: import("effect/DateTime").Utc | null;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly type: "dynamic_tool";
        readonly toolName: string | null;
        readonly viewedImagePath?: string | undefined;
        readonly input: unknown;
        readonly output?: unknown;
        readonly outputOmitted?: boolean | undefined;
    } | null;
}>;
