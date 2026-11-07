import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare function lastReviewGitSectionsAtom(environmentId: EnvironmentId, cwd: string): Atom.Writable<readonly {
    readonly id: string;
    readonly kind: "branch-range" | "working-tree";
    readonly title: string;
    readonly baseRef: string | null;
    readonly headRef: string | null;
    readonly diff: string;
    readonly diffHash: string;
    readonly truncated: boolean;
    readonly files?: readonly {
        readonly path: string;
        readonly previousPath: string | null;
        readonly additions: number;
        readonly deletions: number;
    }[] | undefined;
}[], readonly {
    readonly id: string;
    readonly kind: "branch-range" | "working-tree";
    readonly title: string;
    readonly baseRef: string | null;
    readonly headRef: string | null;
    readonly diff: string;
    readonly diffHash: string;
    readonly truncated: boolean;
    readonly files?: readonly {
        readonly path: string;
        readonly previousPath: string | null;
        readonly additions: number;
        readonly deletions: number;
    }[] | undefined;
}[]>;
export declare const reviewEnvironment: {
    diffPreview: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly cwd: string;
            readonly baseRef?: string | undefined;
            readonly ignoreWhitespace?: boolean | undefined;
            readonly file?: {
                readonly path: string;
                readonly previousPath: string | null;
                readonly sourceKind: "branch-range" | "working-tree";
            } | undefined;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly cwd: string;
        readonly generatedAt: import("effect/DateTime").Utc;
        readonly sources: readonly {
            readonly id: string;
            readonly kind: "branch-range" | "working-tree";
            readonly title: string;
            readonly baseRef: string | null;
            readonly headRef: string | null;
            readonly diff: string;
            readonly diffHash: string;
            readonly truncated: boolean;
            readonly files?: readonly {
                readonly path: string;
                readonly previousPath: string | null;
                readonly additions: number;
                readonly deletions: number;
            }[] | undefined;
        }[];
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").GitCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").VcsProcessExitError | import("@t3tools/contracts").VcsProcessMissingExitCodeError | import("@t3tools/contracts").VcsProcessOutputLimitError | import("@t3tools/contracts").VcsProcessOutputReadError | import("@t3tools/contracts").VcsProcessSpawnError | import("@t3tools/contracts").VcsProcessStdinWriteError | import("@t3tools/contracts").VcsProcessTimeoutError | import("@t3tools/contracts").VcsRepositoryDetectionError | import("@t3tools/contracts").VcsUnsupportedOperationError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    diffFilePatch: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {
            request: {
                readonly cwd: string;
                readonly baseRef?: string | undefined;
                readonly ignoreWhitespace?: boolean | undefined;
                readonly file?: {
                    readonly path: string;
                    readonly previousPath: string | null;
                    readonly sourceKind: "branch-range" | "working-tree";
                } | undefined;
            } & {
                file: NonNullable<import("@t3tools/contracts").ReviewDiffPreviewInput["file"]>;
            };
            cacheKey: string;
            preview?: import("@t3tools/contracts").ReviewDiffPreviewInput;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly id: string;
        readonly kind: "branch-range" | "working-tree";
        readonly title: string;
        readonly baseRef: string | null;
        readonly headRef: string | null;
        readonly diff: string;
        readonly diffHash: string;
        readonly truncated: boolean;
        readonly files?: readonly {
            readonly path: string;
            readonly previousPath: string | null;
            readonly additions: number;
            readonly deletions: number;
        }[] | undefined;
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").GitCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").VcsProcessExitError | import("@t3tools/contracts").VcsProcessMissingExitCodeError | import("@t3tools/contracts").VcsProcessOutputLimitError | import("@t3tools/contracts").VcsProcessOutputReadError | import("@t3tools/contracts").VcsProcessSpawnError | import("@t3tools/contracts").VcsProcessStdinWriteError | import("@t3tools/contracts").VcsProcessTimeoutError | import("@t3tools/contracts").VcsRepositoryDetectionError | import("@t3tools/contracts").VcsUnsupportedOperationError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    diffFileContents: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly cwd: string;
                readonly sourceKind: "branch-range" | "working-tree";
                readonly changeType: "change" | "deleted" | "new" | "rename-changed" | "rename-pure";
                readonly baseRef: string | null;
                readonly headRef: string | null;
                readonly oldPath: string;
                readonly newPath: string;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
            readonly oldContents: string;
            readonly newContents: string;
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").GitCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").VcsProcessExitError | import("@t3tools/contracts").VcsProcessMissingExitCodeError | import("@t3tools/contracts").VcsProcessOutputLimitError | import("@t3tools/contracts").VcsProcessOutputReadError | import("@t3tools/contracts").VcsProcessSpawnError | import("@t3tools/contracts").VcsProcessStdinWriteError | import("@t3tools/contracts").VcsProcessTimeoutError | import("@t3tools/contracts").VcsRepositoryDetectionError | import("@t3tools/contracts").VcsUnsupportedOperationError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
