import * as Effect from "effect/Effect";
import { HttpServer } from "effect/http";
import * as NetAddress from "effect/net/NetAddress";
import * as ServerConfig from "./config.ts";
import * as EnvironmentAuth from "./auth/EnvironmentAuth.ts";
export { VIRTUAL_INTERFACE, formatHostForUrl, isPrivateNetworkAddress, isWildcardHost, resolveHeadlessConnectionString } from "./startupAccess.vibe.platform.js";
export interface HeadlessServeAccessInfo {
    readonly connectionString: string;
    readonly token: string;
    readonly pairingUrl: string;
}
export declare const isLoopbackHost: (host: string | undefined) => boolean;
/**
 * A private-network listener binds every interface but serves only
 * connections that stay on loopback, a LAN, or the tailnet. Both ends must be
 * private: a cloud VM or a router port forward hands public clients to a
 * private local address.
 */
export declare const acceptsPrivateNetworkConnection: (socket: {
    readonly localAddress?: string | undefined;
    readonly remoteAddress?: string | undefined;
}) => boolean;
export declare const loopbackUrlHostForAddress: (address: NetAddress.InetAddress) => string;
export declare const buildPairingUrl: (connectionString: string, token: string) => string;
export declare const renderTerminalQrCode: (value: string, margin?: number) => string;
export declare const formatHeadlessServeOutput: (accessInfo: HeadlessServeAccessInfo) => string;
export declare const issueHeadlessServeAccessInfo: () => Effect.Effect<{
    connectionString: string;
    token: string;
    pairingUrl: string;
}, EnvironmentAuth.ServerAuthAuthenticatedAccessTokenIssueError | EnvironmentAuth.ServerAuthAuthenticatedSessionIssueError | EnvironmentAuth.ServerAuthBootstrapCredentialValidationError | EnvironmentAuth.ServerAuthCloudHealthJwtSigningError | EnvironmentAuth.ServerAuthCloudLinkJwtSigningError | EnvironmentAuth.ServerAuthCloudMintJwtSigningError | EnvironmentAuth.ServerAuthCloudMintPublicKeyMissingError | EnvironmentAuth.ServerAuthCloudRelayIssuerMissingError | EnvironmentAuth.ServerAuthDpopReplayKeyCalculationError | EnvironmentAuth.ServerAuthDpopReplayStateRecordError | EnvironmentAuth.ServerAuthLinkedCloudAccountMissingError | EnvironmentAuth.ServerAuthLinkedCloudAccountReadError | EnvironmentAuth.ServerAuthLinkedCloudAccountVerificationError | EnvironmentAuth.ServerAuthOtherSessionsRevocationError | EnvironmentAuth.ServerAuthPairingLinkCreationError | EnvironmentAuth.ServerAuthPairingLinkRevocationError | EnvironmentAuth.ServerAuthPairingLinksListError | EnvironmentAuth.ServerAuthSessionCredentialValidationError | EnvironmentAuth.ServerAuthSessionRevocationError | EnvironmentAuth.ServerAuthSessionTokenIssueError | EnvironmentAuth.ServerAuthSessionsListError | EnvironmentAuth.ServerAuthWebSocketTokenIssueError, EnvironmentAuth.EnvironmentAuth | HttpServer.HttpServer | ServerConfig.ServerConfig>;
