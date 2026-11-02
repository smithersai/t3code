declare function refreshPrimarySessionState(): void;
export declare function usePrimarySessionState(): {
    data: {
        readonly authenticated: boolean;
        readonly auth: {
            readonly policy: "desktop-managed-local" | "loopback-browser" | "remote-reachable" | "unsafe-no-auth";
            readonly bootstrapMethods: readonly ("desktop-bootstrap" | "one-time-token")[];
            readonly sessionMethods: readonly ("bearer-access-token" | "browser-session-cookie" | "dpop-access-token")[];
            readonly sessionCookieName: string;
            readonly serverUpdateScope?: "environment:maintain";
        };
        readonly scopes?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        readonly permissions?: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        readonly sessionMethod?: "bearer-access-token" | "browser-session-cookie" | "dpop-access-token";
        readonly expiresAt?: import("effect/DateTime").Utc;
    } | null;
    error: string | null;
    isPending: boolean;
    refresh: typeof refreshPrimarySessionState;
};
export {};
