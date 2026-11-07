import type { AuthAccessSnapshot, AuthAccessStreamEvent } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { EnvironmentRegistry } from "../connection/registry.vibe";
export declare const EMPTY_AUTH_ACCESS_SNAPSHOT: AuthAccessSnapshot;
/** @throws {never} */
export declare function applyAuthAccessStreamEvent(current: AuthAccessSnapshot, event: AuthAccessStreamEvent): AuthAccessSnapshot;
/** @throws {never} */
export declare function createAuthEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    accessChanges: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: null;
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly version: 1;
        readonly revision: number;
        readonly type: "snapshot";
        readonly payload: {
            readonly pairingLinks: readonly {
                readonly scopes: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
                readonly permissions?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
                readonly id: string;
                readonly subject: string;
                readonly label?: string;
                readonly createdAt: import("effect/DateTime").Utc;
                readonly expiresAt: import("effect/DateTime").Utc;
            }[];
            readonly clientSessions: readonly {
                readonly scopes: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
                readonly permissions?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
                readonly sessionId: string & import("effect/Brand").Brand<"AuthSessionId">;
                readonly subject: string;
                readonly method: "bearer-access-token" | "browser-session-cookie" | "dpop-access-token";
                readonly client: {
                    readonly label?: string;
                    readonly ipAddress?: string;
                    readonly userAgent?: string;
                    readonly deviceType: "bot" | "desktop" | "mobile" | "tablet" | "unknown";
                    readonly os?: string;
                    readonly browser?: string;
                };
                readonly issuedAt: import("effect/DateTime").Utc;
                readonly expiresAt: import("effect/DateTime").Utc;
                readonly lastConnectedAt: import("effect/DateTime").Utc | null;
                readonly connected: boolean;
                readonly current: boolean;
            }[];
        };
    } | {
        readonly version: 1;
        readonly revision: number;
        readonly type: "pairingLinkUpserted";
        readonly payload: {
            readonly scopes: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
            readonly permissions?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
            readonly id: string;
            readonly subject: string;
            readonly label?: string;
            readonly createdAt: import("effect/DateTime").Utc;
            readonly expiresAt: import("effect/DateTime").Utc;
        };
    } | {
        readonly version: 1;
        readonly revision: number;
        readonly type: "pairingLinkRemoved";
        readonly payload: {
            readonly id: string;
        };
    } | {
        readonly version: 1;
        readonly revision: number;
        readonly type: "clientUpserted";
        readonly payload: {
            readonly scopes: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
            readonly permissions?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
            readonly sessionId: string & import("effect/Brand").Brand<"AuthSessionId">;
            readonly subject: string;
            readonly method: "bearer-access-token" | "browser-session-cookie" | "dpop-access-token";
            readonly client: {
                readonly label?: string;
                readonly ipAddress?: string;
                readonly userAgent?: string;
                readonly deviceType: "bot" | "desktop" | "mobile" | "tablet" | "unknown";
                readonly os?: string;
                readonly browser?: string;
            };
            readonly issuedAt: import("effect/DateTime").Utc;
            readonly expiresAt: import("effect/DateTime").Utc;
            readonly lastConnectedAt: import("effect/DateTime").Utc | null;
            readonly connected: boolean;
            readonly current: boolean;
        };
    } | {
        readonly version: 1;
        readonly revision: number;
        readonly type: "clientRemoved";
        readonly payload: {
            readonly sessionId: string & import("effect/Brand").Brand<"AuthSessionId">;
        };
    }, E | import("@t3tools/contracts").AuthAccessStreamError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("effect/Cause").NoSuchElementError | import("effect/rpc/RpcClientError").RpcClientError>>;
};
