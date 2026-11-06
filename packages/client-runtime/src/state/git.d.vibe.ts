import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function createGitEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    pullRequestResolution: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly cwd: string;
            readonly reference: string;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly pullRequest: {
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly baseBranch: string;
            readonly headBranch: string;
            readonly state: "closed" | "merged" | "open";
        };
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").GitCommandError | import("@t3tools/contracts").GitManagerError | import("@t3tools/contracts").GitPullRequestMaterializationError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlProviderError | import("@t3tools/contracts").TextGenerationError>>;
    preparePullRequestThread: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly cwd: string;
                readonly reference: string;
                readonly mode: "local" | "worktree";
                readonly threadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
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
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").GitCommandError | import("@t3tools/contracts").GitManagerError | import("@t3tools/contracts").GitPullRequestMaterializationError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").SourceControlProviderError | import("@t3tools/contracts").TextGenerationError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
