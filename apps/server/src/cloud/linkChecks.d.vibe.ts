import type { RelayEnvironmentLinkProofPayload, RelayLinkProofRequest, RelayManagedEndpointOrigin, RelayManagedEndpointRuntimeConfig } from "@t3tools/contracts/relay";
import type { HttpServerRequest } from "effect/http";
export declare function requestAbsoluteUrl(request: HttpServerRequest.HttpServerRequest): string | null;
export declare function hasForwardedAuthorityHeaders(request: HttpServerRequest.HttpServerRequest): boolean;
export declare function parseManagedEndpointLocalOrigin(localOrigin: string): {
    httpBaseUrl: string;
    wsBaseUrl: string;
    origin: {
        localHttpHost: string;
        localHttpPort: number;
    };
};
export declare function isAllowedEndpointOrigin(input: {
    readonly origin: RelayManagedEndpointOrigin;
    readonly requestUrl: string;
    readonly allowNonLoopbackRequestHost?: boolean;
}): boolean;
export declare function isSupportedLinkProviderKind(request: RelayLinkProofRequest): boolean;
export declare function linkProofScopes(request: RelayLinkProofRequest): RelayEnvironmentLinkProofPayload["scopes"];
export declare function hasExactScope(input: {
    readonly scopes: ReadonlyArray<string>;
    readonly expected: string;
}): boolean;
export declare function hasBoundedCloudProofLifetime(input: {
    readonly iat: number;
    readonly exp: number;
    readonly nowSeconds: number;
}): boolean;
export declare function managedEndpointRuntimeConfigsMatch(left: RelayManagedEndpointRuntimeConfig, right: RelayManagedEndpointRuntimeConfig): boolean;
