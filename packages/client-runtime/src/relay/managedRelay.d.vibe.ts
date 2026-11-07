import { type RelayClientEnvironmentRecord, type RelayClientDeviceRecord, type RelayDeviceRegistrationRequest, RelayDpopAccessTokenScope, type RelayEnvironmentConnectResponse, type RelayEnvironmentLinkChallengeRequest, type RelayEnvironmentLinkChallengeResponse, type RelayEnvironmentLinkRequest, type RelayEnvironmentLinkResponse, type RelayEnvironmentStatusResponse, type RelayAgentActivitySnapshotResponse, type RelayLiveActivityRegistrationRequest, type RelayOkResponse, type RelayPublicClientId } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import type * as HttpMethod from "effect/http/HttpMethod";
export interface ManagedRelayDpopProofInput {
    readonly method: HttpMethod.HttpMethod;
    readonly url: string;
    readonly accessToken?: string;
}
declare const ManagedRelayDpopKeyLoadError_base: Schema.Class<ManagedRelayDpopKeyLoadError, Schema.TaggedStruct<"ManagedRelayDpopKeyLoadError", {
    readonly keyStore: Schema.Literals<readonly ["expo-secure-store", "indexed-db"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayDpopKeyLoadError extends ManagedRelayDpopKeyLoadError_base {
    get message(): string;
}
declare const ManagedRelayDpopProofCreationError_base: Schema.Class<ManagedRelayDpopProofCreationError, Schema.TaggedStruct<"ManagedRelayDpopProofCreationError", {
    readonly method: Schema.String;
    readonly url: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayDpopProofCreationError extends ManagedRelayDpopProofCreationError_base {
    get message(): string;
}
export declare const ManagedRelayDpopSignerError: Schema.Union<readonly [typeof ManagedRelayDpopKeyLoadError, typeof ManagedRelayDpopProofCreationError]>;
export type ManagedRelayDpopSignerError = typeof ManagedRelayDpopSignerError.Type;
export declare const ManagedRelayRequestAction: Schema.Literals<readonly ["exchange relay DPoP access token", "list relay-managed environments", "list relay client devices", "create relay environment link challenge", "link relay environment", "unlink relay environment", "get relay environment status", "connect relay environment", "register relay mobile device", "unregister relay mobile device", "register relay live activity", "read relay agent activity snapshot"]>;
export type ManagedRelayRequestAction = typeof ManagedRelayRequestAction.Type;
export declare const ManagedRelayRequestActivity: Schema.Literals<readonly ["Relay DPoP access token exchange", "Relay environment listing", "Relay client device listing", "Relay environment link challenge", "Relay environment linking", "Relay environment unlinking", "Relay environment status request", "Relay environment connection", "Relay mobile device registration", "Relay mobile device unregistration", "Relay Live Activity registration", "Relay agent activity snapshot"]>;
export type ManagedRelayRequestActivity = typeof ManagedRelayRequestActivity.Type;
declare const ManagedRelayRequestTimeoutError_base: Schema.Class<ManagedRelayRequestTimeoutError, Schema.TaggedStruct<"ManagedRelayRequestTimeoutError", {
    readonly activity: Schema.Literals<readonly ["Relay DPoP access token exchange", "Relay environment listing", "Relay client device listing", "Relay environment link challenge", "Relay environment linking", "Relay environment unlinking", "Relay environment status request", "Relay environment connection", "Relay mobile device registration", "Relay mobile device unregistration", "Relay Live Activity registration", "Relay agent activity snapshot"]>;
    readonly timeoutMs: Schema.Number;
    readonly traceId: Schema.NullOr<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayRequestTimeoutError extends ManagedRelayRequestTimeoutError_base {
    get message(): string;
}
declare const ManagedRelayUrlInvalidError_base: Schema.Class<ManagedRelayUrlInvalidError, Schema.TaggedStruct<"ManagedRelayUrlInvalidError", {
    readonly relayUrl: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayUrlInvalidError extends ManagedRelayUrlInvalidError_base {
    get message(): string;
}
declare const ManagedRelayRequestFailedError_base: Schema.Class<ManagedRelayRequestFailedError, Schema.TaggedStruct<"ManagedRelayRequestFailedError", {
    readonly action: Schema.Literals<readonly ["exchange relay DPoP access token", "list relay-managed environments", "list relay client devices", "create relay environment link challenge", "link relay environment", "unlink relay environment", "get relay environment status", "connect relay environment", "register relay mobile device", "unregister relay mobile device", "register relay live activity", "read relay agent activity snapshot"]>;
    readonly transportFailed: Schema.optionalKey<Schema.Boolean>;
    readonly cause: Schema.Defect;
    readonly relayError: Schema.optional<Schema.Union<readonly [typeof import("@t3tools/contracts/relay").RelayAuthInvalidError, typeof import("@t3tools/contracts/relay").RelayEnvironmentLinkProofExpiredError, typeof import("@t3tools/contracts/relay").RelayEnvironmentLinkProofInvalidError, typeof import("@t3tools/contracts/relay").RelayEnvironmentConnectNotAuthorizedError, typeof import("@t3tools/contracts/relay").RelayEnvironmentEndpointUnavailableError, typeof import("@t3tools/contracts/relay").RelayEnvironmentEndpointTimedOutError, typeof import("@t3tools/contracts/relay").RelayEnvironmentLinkFailedError, typeof import("@t3tools/contracts/relay").RelayEnvironmentLinkUnavailableError, typeof import("@t3tools/contracts/relay").RelayEnvironmentLinkLimitExceededError, typeof import("@t3tools/contracts/relay").RelayAgentActivityPublishProofExpiredError, typeof import("@t3tools/contracts/relay").RelayAgentActivityPublishProofInvalidError, typeof import("@t3tools/contracts/relay").RelayInternalError]>>;
    readonly status: Schema.optional<Schema.Number>;
    readonly traceId: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayRequestFailedError extends ManagedRelayRequestFailedError_base {
    get message(): string;
}
declare const ManagedRelayAccessTokenScopesUnexpectedError_base: Schema.Class<ManagedRelayAccessTokenScopesUnexpectedError, Schema.TaggedStruct<"ManagedRelayAccessTokenScopesUnexpectedError", {
    readonly requestedScopes: Schema.$Array<Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>>;
    readonly grantedScope: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayAccessTokenScopesUnexpectedError extends ManagedRelayAccessTokenScopesUnexpectedError_base {
    get message(): string;
}
declare const ManagedRelayTokenProofCreationError_base: Schema.Class<ManagedRelayTokenProofCreationError, Schema.TaggedStruct<"ManagedRelayTokenProofCreationError", {
    readonly method: Schema.String;
    readonly url: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayTokenProofCreationError extends ManagedRelayTokenProofCreationError_base {
    get message(): string;
}
declare const ManagedRelayRequestProofCreationError_base: Schema.Class<ManagedRelayRequestProofCreationError, Schema.TaggedStruct<"ManagedRelayRequestProofCreationError", {
    readonly method: Schema.String;
    readonly url: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayRequestProofCreationError extends ManagedRelayRequestProofCreationError_base {
    get message(): string;
}
export declare const ManagedRelayClientError: Schema.Union<readonly [typeof ManagedRelayUrlInvalidError, typeof ManagedRelayRequestFailedError, typeof ManagedRelayRequestTimeoutError, typeof ManagedRelayAccessTokenScopesUnexpectedError, typeof ManagedRelayDpopKeyLoadError, typeof ManagedRelayTokenProofCreationError, typeof ManagedRelayRequestProofCreationError]>;
export type ManagedRelayClientError = typeof ManagedRelayClientError.Type;
declare const ManagedRelayDpopSigner_base: Context.ServiceClass<ManagedRelayDpopSigner, "@t3tools/client-runtime/relay/managedRelay/ManagedRelayDpopSigner", {
    readonly thumbprint: Effect.Effect<string, ManagedRelayDpopKeyLoadError>;
    readonly createProof: (input: ManagedRelayDpopProofInput) => Effect.Effect<string, ManagedRelayDpopProofCreationError>;
}>;
export declare class ManagedRelayDpopSigner extends ManagedRelayDpopSigner_base {
}
export declare const MANAGED_RELAY_REQUEST_TIMEOUT_MS = 10000;
export interface ManagedRelayAccessTokenCacheEntry {
    readonly accountId: string;
    readonly clientId: RelayPublicClientId;
    readonly relayUrl: string;
    readonly thumbprint: string;
    readonly scopes: ReadonlyArray<RelayDpopAccessTokenScope>;
    readonly accessToken: string;
    readonly expiresAtMillis: number;
}
export interface ManagedRelayAccessTokenStore {
    readonly load: Effect.Effect<ReadonlyArray<ManagedRelayAccessTokenCacheEntry>>;
    readonly save: (entries: ReadonlyArray<ManagedRelayAccessTokenCacheEntry>) => Effect.Effect<void>;
    readonly clear: Effect.Effect<void>;
}
export interface ManagedRelayAuthorization {
    readonly accessToken: string;
    readonly proof: string;
    readonly thumbprint: string;
}
export interface ManagedRelayClientLayerOptions {
    readonly relayUrl: string;
    readonly clientId: RelayPublicClientId;
    readonly accessTokenStore?: ManagedRelayAccessTokenStore;
}
declare const ManagedRelayClient_base: Context.ServiceClass<ManagedRelayClient, "@t3tools/client-runtime/relay/managedRelay/ManagedRelayClient", {
    readonly relayUrl: string;
    readonly listEnvironments: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<readonly RelayClientEnvironmentRecord[], ManagedRelayClientError>;
    readonly listDevices: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<readonly RelayClientDeviceRecord[], ManagedRelayClientError>;
    readonly createEnvironmentLinkChallenge: (input: {
        readonly clerkToken: string;
        readonly payload: RelayEnvironmentLinkChallengeRequest;
    }) => Effect.Effect<RelayEnvironmentLinkChallengeResponse, ManagedRelayClientError>;
    readonly linkEnvironment: (input: {
        readonly clerkToken: string;
        readonly payload: RelayEnvironmentLinkRequest;
    }) => Effect.Effect<RelayEnvironmentLinkResponse, ManagedRelayClientError>;
    readonly unlinkEnvironment: (input: {
        readonly clerkToken: string;
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly getEnvironmentStatus: (input: {
        readonly clerkToken: string;
        readonly scopes: readonly RelayDpopAccessTokenScope[];
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
    }) => Effect.Effect<RelayEnvironmentStatusResponse, ManagedRelayClientError>;
    readonly connectEnvironment: (input: {
        readonly clerkToken: string;
        readonly scopes: readonly RelayDpopAccessTokenScope[];
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
        readonly deviceId?: string;
    }) => Effect.Effect<RelayEnvironmentConnectResponse, ManagedRelayClientError>;
    readonly registerDevice: (input: {
        readonly clerkToken: string;
        readonly payload: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly unregisterDevice: (input: {
        readonly clerkToken: string;
        readonly deviceId: string;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly registerLiveActivity: (input: {
        readonly clerkToken: string;
        readonly payload: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly getAgentActivitySnapshot: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<RelayAgentActivitySnapshotResponse, ManagedRelayClientError>;
    readonly resetTokenCache: Effect.Effect<void>;
}>;
export declare class ManagedRelayClient extends ManagedRelayClient_base {
}
/** @public */
export declare const make: (options: ManagedRelayClientLayerOptions) => Effect.Effect<{
    readonly relayUrl: string;
    readonly listEnvironments: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<ReadonlyArray<RelayClientEnvironmentRecord>, ManagedRelayClientError>;
    readonly listDevices: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<ReadonlyArray<RelayClientDeviceRecord>, ManagedRelayClientError>;
    readonly createEnvironmentLinkChallenge: (input: {
        readonly clerkToken: string;
        readonly payload: RelayEnvironmentLinkChallengeRequest;
    }) => Effect.Effect<RelayEnvironmentLinkChallengeResponse, ManagedRelayClientError>;
    readonly linkEnvironment: (input: {
        readonly clerkToken: string;
        readonly payload: RelayEnvironmentLinkRequest;
    }) => Effect.Effect<RelayEnvironmentLinkResponse, ManagedRelayClientError>;
    readonly unlinkEnvironment: (input: {
        readonly clerkToken: string;
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly getEnvironmentStatus: (input: {
        readonly clerkToken: string;
        readonly scopes: ReadonlyArray<RelayDpopAccessTokenScope>;
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
    }) => Effect.Effect<RelayEnvironmentStatusResponse, ManagedRelayClientError>;
    readonly connectEnvironment: (input: {
        readonly clerkToken: string;
        readonly scopes: ReadonlyArray<RelayDpopAccessTokenScope>;
        readonly environmentId: RelayClientEnvironmentRecord["environmentId"];
        readonly deviceId?: string;
    }) => Effect.Effect<RelayEnvironmentConnectResponse, ManagedRelayClientError>;
    readonly registerDevice: (input: {
        readonly clerkToken: string;
        readonly payload: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly unregisterDevice: (input: {
        readonly clerkToken: string;
        readonly deviceId: string;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly registerLiveActivity: (input: {
        readonly clerkToken: string;
        readonly payload: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<RelayOkResponse, ManagedRelayClientError>;
    readonly getAgentActivitySnapshot: (input: {
        readonly clerkToken: string;
    }) => Effect.Effect<RelayAgentActivitySnapshotResponse, ManagedRelayClientError>;
    readonly resetTokenCache: Effect.Effect<void>;
}, never, import("effect/http/HttpClient").HttpClient | ManagedRelayDpopSigner>;
export declare const layer: (options: ManagedRelayClientLayerOptions) => Layer.Layer<ManagedRelayClient, never, import("effect/http/HttpClient").HttpClient | ManagedRelayDpopSigner>;
export {};
