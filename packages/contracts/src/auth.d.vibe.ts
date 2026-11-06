import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.vibe";
export declare const ServerAuthPolicy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
export type ServerAuthPolicy = typeof ServerAuthPolicy.Type;
export declare const ServerAuthBootstrapMethod: Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>;
export type ServerAuthBootstrapMethod = typeof ServerAuthBootstrapMethod.Type;
export declare const ServerAuthSessionMethod: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
export type ServerAuthSessionMethod = typeof ServerAuthSessionMethod.Type;
export declare const AuthOrchestrationReadScope: "orchestration:read";
export declare const AuthOrchestrationOperateScope: "orchestration:operate";
export declare const AuthSettingsWriteScope: "settings:write";
export declare const AuthProvidersManageScope: "providers:manage";
export declare const AuthEnvironmentMaintainScope: "environment:maintain";
export declare const AuthPreviewOperateScope: "preview:operate";
export declare const AuthDiagnosticsReadScope: "diagnostics:read";
export declare const AuthTerminalReadScope: "terminal:read";
export declare const AuthTerminalOperateScope: "terminal:operate";
export declare const AuthSourceControlWriteScope: "source-control:write";
export declare const AuthFilesystemReadScope: "filesystem:read";
export declare const AuthFilesystemWriteScope: "filesystem:write";
export declare const AuthAccessReadScope: "access:read";
export declare const AuthAccessWriteScope: "access:write";
export declare const AuthRelayReadScope: "relay:read";
export declare const AuthRelayWriteScope: "relay:write";
export declare const AuthEnvironmentScope: Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>;
export type AuthEnvironmentScope = typeof AuthEnvironmentScope.Type;
export declare const AuthEnvironmentScopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
export type AuthEnvironmentScopes = typeof AuthEnvironmentScopes.Type;
export declare const AuthGrantScope: Schema.Literals<("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[]>;
export type AuthGrantScope = typeof AuthGrantScope.Type;
export declare const AuthGrantScopes: Schema.$Array<Schema.Literals<("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[]>>;
export type AuthGrantScopes = typeof AuthGrantScopes.Type;
/** @throws {never} */
export declare function authScopeResponse(scopes: ReadonlyArray<AuthEnvironmentScope>): {
    scopes: ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
    permissions: readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
};
/**
 * Keep permission denials decodable by clients with the original scope enum.
 * @throws {never}
 */
export declare function authScopeRequiredResponse(requiredPermission: AuthEnvironmentScope): {
    requiredScope: "access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read";
    requiredPermission: "access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read";
};
export interface SessionGrantInput {
    readonly authenticated: boolean;
    readonly scopes?: ReadonlyArray<AuthEnvironmentScope> | undefined;
    readonly permissions?: ReadonlyArray<AuthEnvironmentScope> | undefined;
    readonly auth?: {
        readonly serverUpdateScope?: string | undefined;
    } | undefined;
}
/** @throws {never} */
export declare function sessionGrantsScope(session: SessionGrantInput, scope: AuthEnvironmentScope): boolean;
/** @throws {never} */
export declare function sessionHasLegacyPermissions(session: SessionGrantInput): boolean;
export declare const AuthStandardClientScopes: readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "source-control:write", "filesystem:read", "filesystem:write", "relay:read", "access:read", "access:write", "relay:write"];
export declare const AuthTokenExchangeGrantType: "urn:ietf:params:oauth:grant-type:token-exchange";
export declare const AuthAccessTokenType: "urn:ietf:params:oauth:token-type:access_token";
export declare const AuthEnvironmentBootstrapTokenType: "urn:t3:params:oauth:token-type:environment-bootstrap";
export declare const ServerAuthDescriptor: Schema.Struct<{
    readonly policy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
    readonly bootstrapMethods: Schema.$Array<Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>>;
    readonly sessionMethods: Schema.$Array<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
    readonly sessionCookieName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Older servers omit this and authorize self-updates with orchestration:operate. */
    readonly serverUpdateScope: Schema.optionalKey<Schema.Literal<"environment:maintain">>;
}>;
export type ServerAuthDescriptor = typeof ServerAuthDescriptor.Type;
export declare const AuthBrowserSessionRequest: Schema.Struct<{
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AuthBrowserSessionRequest = typeof AuthBrowserSessionRequest.Type;
export declare const AuthBrowserSessionResult: Schema.Struct<{
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly authenticated: Schema.Literal<true>;
    readonly sessionMethod: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
    readonly expiresAt: Schema.DateTimeUtc;
}>;
export type AuthBrowserSessionResult = typeof AuthBrowserSessionResult.Type;
export declare const AuthClientMetadataDeviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
export type AuthClientMetadataDeviceType = typeof AuthClientMetadataDeviceType.Type;
export declare const AuthClientPresentationMetadata: Schema.Struct<{
    readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceType: Schema.optionalKey<Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>>;
    readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly osMajorVersion: Schema.optionalKey<Schema.Int>;
    readonly deviceModel: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly surface: Schema.optionalKey<Schema.Literals<readonly ["web", "desktop", "mobile", "cli"]>>;
    readonly webDeployment: Schema.optionalKey<Schema.Literals<readonly ["hosted", "server"]>>;
    readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly appVersion: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AuthClientPresentationMetadata = typeof AuthClientPresentationMetadata.Type;
export declare const AuthTokenExchangeRequest: Schema.Struct<{
    readonly grant_type: Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">;
    readonly subject_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subject_token_type: Schema.Literal<"urn:t3:params:oauth:token-type:environment-bootstrap">;
    readonly requested_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly scope: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly client_label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly client_device_type: Schema.optionalKey<Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>>;
    readonly client_os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AuthTokenExchangeRequest = typeof AuthTokenExchangeRequest.Type;
export declare const AuthAccessTokenResult: Schema.Struct<{
    readonly access_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly issued_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly token_type: Schema.Literals<readonly ["Bearer", "DPoP"]>;
    readonly expires_in: Schema.Number;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AuthAccessTokenResult = typeof AuthAccessTokenResult.Type;
export declare const AuthWebSocketTicketResult: Schema.Struct<{
    readonly ticket: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.DateTimeUtc;
}>;
export type AuthWebSocketTicketResult = typeof AuthWebSocketTicketResult.Type;
/**
 * Media routes share a ticket across requests; RPC uses a separate ticket.
 * Use a path segment so the DPoP mint proof covers it; `htu` excludes query parameters,
 * which could be stripped to change the ticket's use.
 * Older clients mint at the bare path and receive tickets valid for either use.
 */
export declare const AuthWebSocketTicketUse: Schema.Literals<readonly ["rpc", "media"]>;
export type AuthWebSocketTicketUse = typeof AuthWebSocketTicketUse.Type;
export declare const AuthWebSocketTicketParams: Schema.Struct<{
    readonly use: Schema.Literals<readonly ["rpc", "media"]>;
}>;
export declare const AuthPairingCredentialResult: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expiresAt: Schema.DateTimeUtc;
}>;
export type AuthPairingCredentialResult = typeof AuthPairingCredentialResult.Type;
export declare const AuthPairingLink: Schema.Struct<{
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly createdAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.DateTimeUtc;
}>;
export type AuthPairingLink = typeof AuthPairingLink.Type;
export declare const AuthClientMetadata: Schema.Struct<{
    readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
    readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AuthClientMetadata = typeof AuthClientMetadata.Type;
export declare const AuthClientSession: Schema.Struct<{
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
    readonly client: Schema.Struct<{
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
        readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly issuedAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.DateTimeUtc;
    readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
    readonly connected: Schema.Boolean;
    readonly current: Schema.Boolean;
}>;
export type AuthClientSession = typeof AuthClientSession.Type;
export declare const AuthAccessSnapshot: Schema.Struct<{
    readonly pairingLinks: Schema.$Array<Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
    }>>;
    readonly clientSessions: Schema.$Array<Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
        readonly client: Schema.Struct<{
            readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
            readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly issuedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
        readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly connected: Schema.Boolean;
        readonly current: Schema.Boolean;
    }>>;
}>;
export type AuthAccessSnapshot = typeof AuthAccessSnapshot.Type;
export declare const AuthAccessStreamSnapshotEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"snapshot">;
    readonly payload: Schema.Struct<{
        readonly pairingLinks: Schema.$Array<Schema.Struct<{
            readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
            readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly createdAt: Schema.DateTimeUtc;
            readonly expiresAt: Schema.DateTimeUtc;
        }>>;
        readonly clientSessions: Schema.$Array<Schema.Struct<{
            readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
            readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
            readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
            readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
            readonly client: Schema.Struct<{
                readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
                readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly issuedAt: Schema.DateTimeUtc;
            readonly expiresAt: Schema.DateTimeUtc;
            readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
            readonly connected: Schema.Boolean;
            readonly current: Schema.Boolean;
        }>>;
    }>;
}>;
export type AuthAccessStreamSnapshotEvent = typeof AuthAccessStreamSnapshotEvent.Type;
export declare const AuthAccessStreamPairingLinkUpsertedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"pairingLinkUpserted">;
    readonly payload: Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
    }>;
}>;
export type AuthAccessStreamPairingLinkUpsertedEvent = typeof AuthAccessStreamPairingLinkUpsertedEvent.Type;
export declare const AuthAccessStreamPairingLinkRemovedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"pairingLinkRemoved">;
    readonly payload: Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type AuthAccessStreamPairingLinkRemovedEvent = typeof AuthAccessStreamPairingLinkRemovedEvent.Type;
declare const AuthAccessStreamError_base: Schema.Class<AuthAccessStreamError, Schema.TaggedStruct<"AuthAccessStreamError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AuthAccessStreamError extends AuthAccessStreamError_base {
}
declare const EnvironmentAuthorizationError_base: Schema.Class<EnvironmentAuthorizationError, Schema.TaggedStruct<"EnvironmentAuthorizationError", {
    readonly message: Schema.String;
    readonly requiredScope: Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>;
    readonly requiredPermission: Schema.optionalKey<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentAuthorizationError extends EnvironmentAuthorizationError_base {
}
export declare const AuthAccessStreamClientUpsertedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"clientUpserted">;
    readonly payload: Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
        readonly client: Schema.Struct<{
            readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
            readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly issuedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
        readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly connected: Schema.Boolean;
        readonly current: Schema.Boolean;
    }>;
}>;
export type AuthAccessStreamClientUpsertedEvent = typeof AuthAccessStreamClientUpsertedEvent.Type;
export declare const AuthAccessStreamClientRemovedEvent: Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"clientRemoved">;
    readonly payload: Schema.Struct<{
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    }>;
}>;
export type AuthAccessStreamClientRemovedEvent = typeof AuthAccessStreamClientRemovedEvent.Type;
export declare const AuthAccessStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"snapshot">;
    readonly payload: Schema.Struct<{
        readonly pairingLinks: Schema.$Array<Schema.Struct<{
            readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
            readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly createdAt: Schema.DateTimeUtc;
            readonly expiresAt: Schema.DateTimeUtc;
        }>>;
        readonly clientSessions: Schema.$Array<Schema.Struct<{
            readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
            readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
            readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
            readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
            readonly client: Schema.Struct<{
                readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
                readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>;
            readonly issuedAt: Schema.DateTimeUtc;
            readonly expiresAt: Schema.DateTimeUtc;
            readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
            readonly connected: Schema.Boolean;
            readonly current: Schema.Boolean;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"pairingLinkUpserted">;
    readonly payload: Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"pairingLinkRemoved">;
    readonly payload: Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"clientUpserted">;
    readonly payload: Schema.Struct<{
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
        readonly subject: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
        readonly client: Schema.Struct<{
            readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ipAddress: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly userAgent: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
            readonly os: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly browser: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly issuedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
        readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly connected: Schema.Boolean;
        readonly current: Schema.Boolean;
    }>;
}>, Schema.Struct<{
    readonly version: Schema.Literal<1>;
    readonly revision: Schema.Number;
    readonly type: Schema.Literal<"clientRemoved">;
    readonly payload: Schema.Struct<{
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    }>;
}>]>;
export type AuthAccessStreamEvent = typeof AuthAccessStreamEvent.Type;
export declare const AuthRevokePairingLinkInput: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AuthRevokePairingLinkInput = typeof AuthRevokePairingLinkInput.Type;
export declare const AuthRevokeClientSessionInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
}>;
export type AuthRevokeClientSessionInput = typeof AuthRevokeClientSessionInput.Type;
export declare const AuthCreatePairingCredentialInput: Schema.Struct<{
    readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly scopes: Schema.optionalKey<Schema.$Array<Schema.Literals<("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[]>>>;
}>;
export type AuthCreatePairingCredentialInput = typeof AuthCreatePairingCredentialInput.Type;
export declare const AuthSessionState: Schema.Struct<{
    readonly authenticated: Schema.Boolean;
    readonly auth: Schema.Struct<{
        readonly policy: Schema.Literals<readonly ["desktop-managed-local", "loopback-browser", "remote-reachable", "unsafe-no-auth"]>;
        readonly bootstrapMethods: Schema.$Array<Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>>;
        readonly sessionMethods: Schema.$Array<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
        readonly sessionCookieName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        /** Older servers omit this and authorize self-updates with orchestration:operate. */
        readonly serverUpdateScope: Schema.optionalKey<Schema.Literal<"environment:maintain">>;
    }>;
    readonly scopes: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly permissions: Schema.optionalKey<ForwardCompatibleArray<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly sessionMethod: Schema.optionalKey<Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>>;
    readonly expiresAt: Schema.optionalKey<Schema.DateTimeUtc>;
}>;
export type AuthSessionState = typeof AuthSessionState.Type;
export declare const AuthMcpClientAccess: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
export type AuthMcpClientAccess = typeof AuthMcpClientAccess.Type;
/**
 * The scopes an agent session gets for an access level, and a pairing code must carry.
 * @throws {never}
 */
export declare const mcpClientScopes: (access: AuthMcpClientAccess) => ReadonlyArray<AuthGrantScope>;
export declare const AuthMcpProtectedResourceMetadata: Schema.Struct<{
    readonly resource: Schema.String;
    readonly authorization_servers: Schema.$Array<Schema.String>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly bearer_methods_supported: Schema.$Array<Schema.Literal<"header">>;
    readonly resource_name: Schema.String;
}>;
export type AuthMcpProtectedResourceMetadata = typeof AuthMcpProtectedResourceMetadata.Type;
export declare const AuthMcpAuthorizationServerMetadata: Schema.Struct<{
    readonly issuer: Schema.String;
    readonly authorization_endpoint: Schema.String;
    readonly token_endpoint: Schema.String;
    readonly registration_endpoint: Schema.String;
    readonly response_types_supported: Schema.$Array<Schema.Literal<"code">>;
    readonly grant_types_supported: Schema.$Array<Schema.Literal<"authorization_code">>;
    readonly code_challenge_methods_supported: Schema.$Array<Schema.Literal<"S256">>;
    readonly token_endpoint_auth_methods_supported: Schema.$Array<Schema.Literal<"none">>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly authorization_response_iss_parameter_supported: Schema.Boolean;
}>;
export type AuthMcpAuthorizationServerMetadata = typeof AuthMcpAuthorizationServerMetadata.Type;
/**
 * The `software_id` another T3 Code environment registers with when it links
 * to this one. Its session is then a peer link: the work it starts here stays
 * within that link. Claiming it only ever adds limits.
 */
export declare const MCP_PEER_LINK_SOFTWARE_ID = "t3code-peer-link";
export declare const AuthMcpClientRegistration: Schema.Struct<{
    readonly client_name: Schema.optionalKey<Schema.String>;
    readonly software_id: Schema.optionalKey<Schema.String>;
    readonly redirect_uris: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly token_endpoint_auth_method: Schema.optionalKey<Schema.String>;
}>;
export type AuthMcpClientRegistration = typeof AuthMcpClientRegistration.Type;
export declare const AuthMcpRegisteredClient: Schema.Struct<{
    readonly client_id: Schema.String;
    readonly client_name: Schema.String;
    readonly redirect_uris: Schema.$Array<Schema.String>;
    readonly grant_types: Schema.$Array<Schema.Literal<"authorization_code">>;
    readonly response_types: Schema.$Array<Schema.Literal<"code">>;
    readonly token_endpoint_auth_method: Schema.Literal<"none">;
}>;
export type AuthMcpRegisteredClient = typeof AuthMcpRegisteredClient.Type;
declare const AuthMcpRegistrationError_base: Schema.Class<AuthMcpRegistrationError, Schema.Struct<{
    readonly error: Schema.Literals<readonly ["invalid_client_metadata", "invalid_redirect_uri"]>;
    readonly error_description: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AuthMcpRegistrationError extends AuthMcpRegistrationError_base {
    get message(): string;
}
/** Fields are optional here because the server validates them. */
export declare const AuthMcpAuthorizationRequest: Schema.Struct<{
    readonly response_type: Schema.optionalKey<Schema.String>;
    readonly client_id: Schema.optionalKey<Schema.String>;
    readonly redirect_uri: Schema.optionalKey<Schema.String>;
    readonly code_challenge: Schema.optionalKey<Schema.String>;
    readonly code_challenge_method: Schema.optionalKey<Schema.String>;
    readonly state: Schema.optionalKey<Schema.String>;
    readonly resource: Schema.optionalKey<Schema.String>;
}>;
export type AuthMcpAuthorizationRequest = typeof AuthMcpAuthorizationRequest.Type;
/** Server-validated request details, trusted by the client only for display. */
export declare const AuthMcpApprovalDetails: Schema.Struct<{
    /** Self-declared by the client, so shown as such. */
    readonly clientName: Schema.String;
    readonly redirectHost: Schema.String;
    readonly environmentHost: Schema.String;
    readonly csrfToken: Schema.optionalKey<Schema.String>;
    /** Only scopes held by this session qualify; others need a pairing code. Absent with `csrfToken`. */
    readonly oneClickAccess: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>>;
}>;
export type AuthMcpApprovalDetails = typeof AuthMcpApprovalDetails.Type;
export declare const AuthMcpApprovalRedirect: Schema.Struct<{
    readonly redirectTo: Schema.String;
}>;
export type AuthMcpApprovalRedirect = typeof AuthMcpApprovalRedirect.Type;
export declare const AuthMcpApprovalDecision: Schema.Union<readonly [Schema.TaggedStruct<"deny", {}>, Schema.TaggedStruct<"pairing-code", {
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly code: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.TaggedStruct<"browser-session", {
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly csrfToken: Schema.String;
}>]>;
export type AuthMcpApprovalDecision = typeof AuthMcpApprovalDecision.Type;
export declare const AuthMcpApprovalDecisionRequest: Schema.Struct<{
    readonly authorization: Schema.Struct<{
        readonly response_type: Schema.optionalKey<Schema.String>;
        readonly client_id: Schema.optionalKey<Schema.String>;
        readonly redirect_uri: Schema.optionalKey<Schema.String>;
        readonly code_challenge: Schema.optionalKey<Schema.String>;
        readonly code_challenge_method: Schema.optionalKey<Schema.String>;
        readonly state: Schema.optionalKey<Schema.String>;
        readonly resource: Schema.optionalKey<Schema.String>;
    }>;
    readonly decision: Schema.Union<readonly [Schema.TaggedStruct<"deny", {}>, Schema.TaggedStruct<"pairing-code", {
        readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly code: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.TaggedStruct<"browser-session", {
        readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly csrfToken: Schema.String;
    }>]>;
}>;
export type AuthMcpApprovalDecisionRequest = typeof AuthMcpApprovalDecisionRequest.Type;
declare const AuthMcpApprovalError_base: Schema.Class<AuthMcpApprovalError, Schema.TaggedStruct<"AuthMcpApprovalError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AuthMcpApprovalError extends AuthMcpApprovalError_base {
}
export declare const AuthMcpTokenRequest: Schema.Struct<{
    readonly grant_type: Schema.optionalKey<Schema.String>;
    readonly code: Schema.optionalKey<Schema.String>;
    readonly redirect_uri: Schema.optionalKey<Schema.String>;
    readonly client_id: Schema.optionalKey<Schema.String>;
    readonly code_verifier: Schema.optionalKey<Schema.String>;
    readonly resource: Schema.optionalKey<Schema.String>;
}>;
export type AuthMcpTokenRequest = typeof AuthMcpTokenRequest.Type;
export declare const AuthMcpTokenResult: Schema.Struct<{
    readonly access_token: Schema.String;
    readonly token_type: Schema.Literal<"Bearer">;
    readonly expires_in: Schema.Number;
    readonly scope: Schema.String;
}>;
export type AuthMcpTokenResult = typeof AuthMcpTokenResult.Type;
declare const AuthMcpTokenError_base: Schema.Class<AuthMcpTokenError, Schema.Struct<{
    readonly error: Schema.Literals<readonly ["invalid_request", "invalid_client", "invalid_grant", "unsupported_grant_type"]>;
    readonly error_description: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AuthMcpTokenError extends AuthMcpTokenError_base {
    get message(): string;
}
export {};
