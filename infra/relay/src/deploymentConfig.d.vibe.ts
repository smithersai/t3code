import type { RelayManagedEndpoint } from "@t3tools/contracts/relay";
import * as Schema from "effect/Schema";
export declare const MANAGED_ENDPOINT_ZONE_OWNER_STAGE = "prod";
declare const RelayPublicDomainLabelTooLongError_base: Schema.Class<RelayPublicDomainLabelTooLongError, Schema.TaggedStruct<"RelayPublicDomainLabelTooLongError", {
    readonly stage: Schema.String;
    readonly label: Schema.String;
    readonly maxLength: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class RelayPublicDomainLabelTooLongError extends RelayPublicDomainLabelTooLongError_base {
    get message(): string;
}
/** @throws {never} */
export declare function relayResourceNameForStage(name: string, stage: string): string;
/** @throws {never} */
export declare function relayOwnsManagedEndpointZone(stage: string): boolean;
/** @throws {never} */
export declare function relayPublicDomainForStage(stage: string, zoneName: string): string;
/** @throws {never} */
export declare function managedEndpointDigestInput(stage: string, userId: string, environmentId: string): string;
/** @throws {never} */
export declare function managedEndpointHostname(stage: string, baseDomain: string, hash: string): string;
/** @throws {never} */
export declare function isManagedEndpointHostname(hostname: string, baseDomain: string): boolean;
/** @throws {never} */
export declare function managedEndpointForHostname(hostname: string): RelayManagedEndpoint;
/** @throws {never} */
export declare function managedEndpointTunnelNamePrefix(stage: string): string;
/** @throws {never} */
export declare function managedEndpointTunnelName(stage: string, hash: string): string;
/** Tunnel-name hash covers user and environment; public environment ids alone do not identify an authorized link. */
export declare const MANAGED_ENDPOINT_KEY_PATTERN: RegExp;
/** @throws {never} */
export declare function managedEndpointTunnelNameForKey(stage: string, endpointKey: string): string;
export {};
