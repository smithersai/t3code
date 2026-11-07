import { RelayEnvironmentConnectNotAuthorizedReason, type RelayEnvironmentConnectResponse, type RelayEnvironmentStatusResponse, type RelayManagedEndpoint } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import * as FetchHttpClient from "effect/http/FetchHttpClient";
import * as HttpClient from "effect/http/HttpClient";
import * as EnvironmentLinks from "./EnvironmentLinks.vibe";
import * as ManagedEndpointAllocations from "./ManagedEndpointAllocations.vibe";
import * as RelayConfiguration from "../Config.vibe";
declare const EnvironmentConnectNotAuthorized_base: Schema.Class<EnvironmentConnectNotAuthorized, Schema.TaggedStruct<"EnvironmentConnectNotAuthorized", {
    readonly environmentId: Schema.String;
    readonly operation: Schema.Literals<readonly ["connect", "status"]>;
    readonly reason: Schema.Literals<readonly ["client_proof_key_thumbprint_missing", "environment_link_not_found", "endpoint_provider_not_managed", "managed_endpoint_allocation_not_found", "managed_endpoint_base_domain_not_configured", "managed_endpoint_allocation_not_ready", "managed_endpoint_hostname_invalid", "managed_endpoint_mismatch"]>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentConnectNotAuthorized extends EnvironmentConnectNotAuthorized_base {
    get message(): string;
}
declare const EnvironmentMintRequestFailed_base: Schema.Class<EnvironmentMintRequestFailed, Schema.TaggedStruct<"EnvironmentMintRequestFailed", {
    readonly environmentId: Schema.String;
    readonly operation: Schema.Literals<readonly ["connect", "status"]>;
    readonly cause: Schema.Defect;
    readonly endpointFailure: Schema.optionalKey<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>>;
    readonly endpointStatus: Schema.optionalKey<Schema.Number>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentMintRequestFailed extends EnvironmentMintRequestFailed_base {
    get message(): string;
}
declare const EnvironmentMintRequestTimedOut_base: Schema.Class<EnvironmentMintRequestTimedOut, Schema.TaggedStruct<"EnvironmentMintRequestTimedOut", {
    readonly environmentId: Schema.String;
    readonly timeoutMs: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentMintRequestTimedOut extends EnvironmentMintRequestTimedOut_base {
    get message(): string;
}
declare const EnvironmentMintResponseInvalid_base: Schema.Class<EnvironmentMintResponseInvalid, Schema.TaggedStruct<"EnvironmentMintResponseInvalid", {
    readonly environmentId: Schema.String;
    readonly operation: Schema.Literals<readonly ["connect", "status"]>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentMintResponseInvalid extends EnvironmentMintResponseInvalid_base {
    get message(): string;
}
export type EnvironmentConnectorError = EnvironmentConnectNotAuthorized | EnvironmentMintRequestFailed | EnvironmentMintRequestTimedOut | EnvironmentMintResponseInvalid | EnvironmentLinks.EnvironmentLinkLookupPersistenceError | ManagedEndpointAllocations.ManagedEndpointAllocationPersistenceError;
export declare const ENVIRONMENT_MINT_REQUEST_TIMEOUT_MS = 10000;
declare const EnvironmentConnector_base: Context.ServiceClass<EnvironmentConnector, "t3code-relay/environments/EnvironmentConnector", {
    readonly connect: (input: {
        readonly userId: string;
        readonly environmentId: string;
        readonly clientProofKeyThumbprint: string;
        readonly deviceId?: string;
    }) => Effect.Effect<RelayEnvironmentConnectResponse, EnvironmentConnectorError>;
    readonly status: (input: {
        readonly userId: string;
        readonly environmentId: string;
    }) => Effect.Effect<RelayEnvironmentStatusResponse, EnvironmentConnectorError>;
}>;
export declare class EnvironmentConnector extends EnvironmentConnector_base {
}
export declare const withoutRedirects: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, FetchHttpClient.RequestInit>>;
export interface ManagedEndpointValidationFailure {
    readonly reason: Exclude<RelayEnvironmentConnectNotAuthorizedReason, "client_proof_key_thumbprint_missing" | "environment_link_not_found">;
    readonly attributes?: Record<string, string | boolean>;
}
/** @throws {never} */
export declare function validateManagedEndpoint(input: {
    readonly link: EnvironmentLinks.RelayLinkedEnvironmentRecord;
    readonly allocation: ManagedEndpointAllocations.ManagedEndpointAllocation | null;
    readonly baseDomain: string | undefined;
}): Result.Result<RelayManagedEndpoint, ManagedEndpointValidationFailure>;
export declare const layer: Layer.Layer<EnvironmentConnector, never, Crypto.Crypto | EnvironmentLinks.EnvironmentLinks | HttpClient.HttpClient | ManagedEndpointAllocations.ManagedEndpointAllocations | RelayConfiguration.RelayConfiguration>;
export {};
