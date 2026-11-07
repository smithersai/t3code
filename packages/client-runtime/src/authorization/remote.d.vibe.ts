import { type AuthClientPresentationMetadata, type ClientConnectionMethod, type AuthEnvironmentScope, type AuthWebSocketTicketUse } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { type RemoteEnvironmentRequestError } from "../rpc/http.ts";
export { RemoteEnvironmentAuthUndeclaredStatusError } from "../rpc/http.ts";
export type RemoteEnvironmentAuthError = RemoteEnvironmentRequestError;
/** Hashes of who is connecting. Only hashes leave the client. */
export interface ClientOwnerParams {
    readonly connect?: string;
    readonly device?: string;
}
/**
 * Tells the environment, for analytics, which T3 Connect account and device
 * are connecting, so it can count the environment as theirs.
 */
export declare const readClientOwnerParams: Effect.Effect<{
    connect?: string;
    device?: string;
}, never, never>;
/** @throws {never} */
export declare const appendClientConnectionParams: (url: URL, clientMetadata: AuthClientPresentationMetadata | undefined, connectionMethod?: ClientConnectionMethod, owners?: ClientOwnerParams) => void;
export declare const exchangeRemoteDpopAccessToken: (input: {
    readonly httpBaseUrl: string;
    readonly credential: string;
    readonly scopes?: ReadonlyArray<AuthEnvironmentScope>;
    readonly clientMetadata?: AuthClientPresentationMetadata;
    readonly dpopProof: string;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
    readonly access_token: string;
    readonly issued_token_type: "urn:ietf:params:oauth:token-type:access_token";
    readonly token_type: "Bearer" | "DPoP";
    readonly expires_in: number;
    readonly scope: string;
}, RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
export declare const bootstrapRemoteBearerSession: (input: {
    readonly httpBaseUrl: string;
    readonly credential: string;
    readonly scopes?: ReadonlyArray<AuthEnvironmentScope>;
    readonly clientMetadata?: AuthClientPresentationMetadata;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
    readonly access_token: string;
    readonly issued_token_type: "urn:ietf:params:oauth:token-type:access_token";
    readonly token_type: "Bearer" | "DPoP";
    readonly expires_in: number;
    readonly scope: string;
}, RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
export declare const fetchRemoteSessionState: (input: {
    readonly httpBaseUrl: string;
    readonly bearerToken: string;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
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
}, RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
export declare const issueRemoteWebSocketTicket: (input: {
    readonly httpBaseUrl: string;
    readonly bearerToken: string;
    readonly use?: AuthWebSocketTicketUse;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
    readonly ticket: string;
    readonly expiresAt: import("effect/DateTime").Utc;
}, RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
export declare const issueRemoteDpopWebSocketTicket: <E = never>(input: {
    readonly httpBaseUrl: string;
    readonly accessToken: string;
    readonly dpopProof: string;
    readonly use?: AuthWebSocketTicketUse;
    /** Proof for the bare path, used only when the server lacks the `/:use` route. */
    readonly fallbackProof?: Effect.Effect<string, E>;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
    readonly ticket: string;
    readonly expiresAt: import("effect/DateTime").Utc;
}, E | RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
export declare const resolveRemoteWebSocketConnectionUrl: (input: {
    readonly wsBaseUrl: string;
    readonly httpBaseUrl: string;
    readonly bearerToken: string;
    readonly clientMetadata?: AuthClientPresentationMetadata;
    readonly connectionMethod?: ClientConnectionMethod;
    readonly timeoutMs?: number;
}) => Effect.Effect<string, RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
/**
 * A DPoP client's RPC ticket is bound to its key, so the upgrade carries a
 * proof too. A WebSocket cannot set headers, so it rides in the `dpop` query
 * parameter and names the socket URL as the HTTP request the server sees.
 */
export declare const resolveRemoteDpopWebSocketConnectionUrl: <E>(input: {
    readonly wsBaseUrl: string;
    readonly httpBaseUrl: string;
    readonly accessToken: string;
    readonly createProof: (input: {
        readonly method: "GET" | "POST";
        readonly url: string;
        readonly accessToken: string;
    }) => Effect.Effect<string, E>;
    readonly clientMetadata?: AuthClientPresentationMetadata;
    readonly connectionMethod?: ClientConnectionMethod;
    readonly timeoutMs?: number;
}) => Effect.Effect<string, E | RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
