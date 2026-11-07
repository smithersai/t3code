import { type EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare const peerLinkEnvironment: {
    list: (target: {
        readonly environmentId: EnvironmentId;
        readonly input: {};
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly links: readonly {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly label: string;
            readonly urls: readonly string[];
            readonly access: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only";
            readonly linkedAt: import("effect/DateTime").Utc;
            readonly expiresAt: import("effect/DateTime").Utc;
            readonly lastReachedAt: import("effect/DateTime").Utc | null;
            readonly lastError: string | null;
            readonly status: "expired" | "reachable" | "unreachable";
        }[];
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").PeerLinkError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    link: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly url: string;
                readonly alternateUrls?: readonly string[];
                readonly pairingCode: string;
                readonly access: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only";
                readonly expectedEnvironmentId?: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly expectedLabel?: string;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly label: string;
            readonly urls: readonly string[];
            readonly access: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only";
            readonly linkedAt: import("effect/DateTime").Utc;
            readonly expiresAt: import("effect/DateTime").Utc;
            readonly lastReachedAt: import("effect/DateTime").Utc | null;
            readonly lastError: string | null;
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PeerLinkError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
    unlink: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
            readonly removed: boolean;
        }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").PeerLinkError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
/** Whether `environmentId` offers links, so its threads may name another machine. */
export declare const offersLinkedEnvironmentsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<boolean>;
export declare function usePeerLinkHosts(): import("./environments.vibe").EnvironmentPresentation[];
/**
 * The user's other machines, for picking one to link `environmentId` to,
 * including those only on their T3 Connect account. Reads that environment's
 * links only while `enabled`, since listing them asks every linked machine
 * whether it answers.
 */
export declare function useLinkableMachines(environmentId: EnvironmentId, enabled: boolean): readonly import("@t3tools/client-runtime/link-request").LinkableMachine[];
