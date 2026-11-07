import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.vibe";
import * as Persistence from "../platform/persistence.vibe";
/** @throws {never} */
export declare function createSourceControlEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | Persistence.EnvironmentCacheStore | R, E>): {
    discovery: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly versionControlSystems: readonly {
            readonly label: string;
            readonly executable?: string | undefined;
            readonly status: "available" | "missing";
            readonly version: import("effect/Option").Option<string>;
            readonly installHint: string;
            readonly detail: import("effect/Option").Option<string>;
            readonly kind: "git" | "jj" | "unknown";
            readonly implemented: boolean;
        }[];
        readonly sourceControlProviders: readonly {
            readonly label: string;
            readonly executable?: string | undefined;
            readonly status: "available" | "missing";
            readonly version: import("effect/Option").Option<string>;
            readonly installHint: string;
            readonly detail: import("effect/Option").Option<string>;
            readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly auth: {
                readonly status: "authenticated" | "unauthenticated" | "unknown";
                readonly account: import("effect/Option").Option<string>;
                readonly host: import("effect/Option").Option<string>;
                readonly detail: import("effect/Option").Option<string>;
                readonly accounts?: readonly {
                    readonly host: string;
                    readonly account: string;
                    readonly active: boolean;
                    readonly authenticated: boolean;
                    readonly error?: string;
                    readonly environmentVariable?: string;
                }[];
            };
        }[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError>>;
    repository: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly repository: string;
            readonly cwd?: string | undefined;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly nameWithOwner: string;
        readonly url: string;
        readonly sshUrl: string;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError>>;
    cloneRepository: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly provider?: (string & import("effect/Brand").Brand<"SourceControlProviderKind">) | undefined;
                readonly repository?: string | undefined;
                readonly remoteUrl?: string | undefined;
                readonly destinationPath: string;
                readonly protocol?: "auto" | "https" | "ssh" | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly cwd: string;
            readonly remoteUrl: string;
            readonly repository: {
                readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
                readonly nameWithOwner: string;
                readonly url: string;
                readonly sshUrl: string;
            } | null;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    startProjectClone: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
                readonly title: string;
                readonly createdAt: string;
                readonly provider?: (string & import("effect/Brand").Brand<"SourceControlProviderKind">) | undefined;
                readonly repository?: string | undefined;
                readonly remoteUrl?: string | undefined;
                readonly destinationPath: string;
                readonly protocol?: "auto" | "https" | "ssh" | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly cwd: string;
            readonly remoteUrl: string;
            readonly repository: {
                readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
                readonly nameWithOwner: string;
                readonly url: string;
                readonly sshUrl: string;
            } | null;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").OrchestrationDispatchCommandError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    cancelProjectClone: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly applied: boolean;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    retryProjectClone: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly applied: boolean;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    projectClones: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<readonly {
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly remoteUrl: string;
        readonly destinationPath: string;
        readonly repository: {
            readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly nameWithOwner: string;
            readonly url: string;
            readonly sshUrl: string;
        } | null;
        readonly phase: "cancelled" | "done" | "failed" | "running";
        readonly stage: "checkout" | "connecting" | "counting" | "receiving" | "resolving";
        readonly percent: number | null;
        readonly detail: string | null;
        readonly stalled?: boolean;
        readonly error: string | null;
        readonly startedAt: string;
        readonly endedAt: string | null;
        readonly sequence: number;
    }[], E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
    publishRepository: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly cwd: string;
                readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
                readonly repository: string;
                readonly visibility: "private" | "public";
                readonly remoteName?: string | undefined;
                readonly protocol?: "auto" | "https" | "ssh" | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.vibe.platform.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlRepositoryError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
