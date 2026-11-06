import type { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function createMcpAppEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    callTool: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly name: string;
                readonly arguments: {
                    readonly [x: string]: unknown;
                };
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly content: readonly unknown[];
            readonly structuredContent?: unknown;
            readonly isError?: boolean | undefined;
            readonly _meta?: unknown;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").McpAppRequestError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    toolInfo: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly name: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly callable: boolean;
            readonly readOnly: boolean;
            readonly title?: string | undefined;
            readonly tool?: unknown;
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").McpAppRequestError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    /** The tool definition an app reads from its host context. */
    toolInfoQuery: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly name: string;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly callable: boolean;
        readonly readOnly: boolean;
        readonly title?: string | undefined;
        readonly tool?: unknown;
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").McpAppRequestError | import("effect/rpc/RpcClientError").RpcClientError>>;
    readResource: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly uri: string;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<{
            readonly contents: readonly unknown[];
        }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").McpAppRequestError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    updateModelContext: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: import("@t3tools/contracts").EnvironmentId;
            readonly input: {
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly conversationThreadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly content?: readonly unknown[] | undefined;
                readonly structuredContent?: {
                    readonly [x: string]: unknown;
                } | undefined;
            };
        }) => Promise<import("./runtime.ts").AtomCommandResult<void, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../connection/registry.ts").EnvironmentNotRegisteredError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | import("@t3tools/contracts").McpAppRequestError | import("effect/rpc/RpcClientError").RpcClientError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: import("@t3tools/contracts").EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
