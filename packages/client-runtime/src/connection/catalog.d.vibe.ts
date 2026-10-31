import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import { BearerConnectionTarget, type ConnectionTarget, PrimaryConnectionTarget, RelayConnectionTarget, SshConnectionTarget } from "./model.vibe";
declare const BearerConnectionProfile_base: Schema.Class<BearerConnectionProfile, Schema.TaggedStruct<"BearerConnectionProfile", {
    readonly connectionId: Schema.String;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly httpBaseUrl: Schema.String;
    readonly wsBaseUrl: Schema.String;
    readonly learned: Schema.optionalKey<Schema.Literal<true>>;
    readonly authorization: Schema.optionalKey<Schema.Literal<"t3-connect">>;
    /**
     * "tailscale" on a learned route the server found on its Tailscale
     * interface. A bare 100.64.0.0/10 address could belong to any VPN.
     */
    readonly network: Schema.optionalKey<Schema.Literal<"tailscale">>;
}>, {}>;
export declare class BearerConnectionProfile extends BearerConnectionProfile_base {
}
declare const SshConnectionProfile_base: Schema.Class<SshConnectionProfile, Schema.TaggedStruct<"SshConnectionProfile", {
    readonly connectionId: Schema.String;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly target: Schema.Struct<{
        readonly alias: Schema.String;
        readonly hostname: Schema.String;
        readonly username: Schema.NullOr<Schema.String>;
        readonly port: Schema.NullOr<Schema.Number>;
    }>;
}>, {}>;
export declare class SshConnectionProfile extends SshConnectionProfile_base {
}
export declare const ConnectionProfile: Schema.Union<readonly [typeof BearerConnectionProfile, typeof SshConnectionProfile]>;
export type ConnectionProfile = typeof ConnectionProfile.Type;
export interface ConnectionRoute {
    readonly target: ConnectionTarget;
    readonly profile: Option.Option<ConnectionProfile>;
}
export interface ConnectionCatalogEntry {
    readonly target: ConnectionTarget;
    readonly profile: Option.Option<ConnectionProfile>;
    readonly alternateRoutes?: ReadonlyArray<ConnectionRoute>;
    readonly enabled: boolean;
    readonly unsupportedReason?: string;
    readonly serverUpdateRequired?: boolean;
}
declare const BearerConnectionCredential_base: Schema.Class<BearerConnectionCredential, Schema.TaggedStruct<"BearerConnectionCredential", {
    readonly token: Schema.String;
}>, {}>;
export declare class BearerConnectionCredential extends BearerConnectionCredential_base {
}
export declare const ConnectionCredential: Schema.Union<readonly [typeof BearerConnectionCredential]>;
export type ConnectionCredential = typeof ConnectionCredential.Type;
declare const PrimaryConnectionRegistration_base: Schema.Class<PrimaryConnectionRegistration, Schema.TaggedStruct<"PrimaryConnectionRegistration", {
    readonly target: typeof PrimaryConnectionTarget;
}>, {}>;
export declare class PrimaryConnectionRegistration extends PrimaryConnectionRegistration_base {
}
declare const RelayConnectionRegistration_base: Schema.Class<RelayConnectionRegistration, Schema.TaggedStruct<"RelayConnectionRegistration", {
    readonly target: typeof RelayConnectionTarget;
}>, {}>;
export declare class RelayConnectionRegistration extends RelayConnectionRegistration_base {
}
declare const BearerConnectionRegistration_base: Schema.Class<BearerConnectionRegistration, Schema.TaggedStruct<"BearerConnectionRegistration", {
    readonly target: typeof BearerConnectionTarget;
    readonly profile: typeof BearerConnectionProfile;
    readonly credential: typeof BearerConnectionCredential;
}>, {}>;
export declare class BearerConnectionRegistration extends BearerConnectionRegistration_base {
}
declare const SshConnectionRegistration_base: Schema.Class<SshConnectionRegistration, Schema.TaggedStruct<"SshConnectionRegistration", {
    readonly target: typeof SshConnectionTarget;
    readonly profile: typeof SshConnectionProfile;
    /** The token from pairing over SSH, which later connects reuse. */
    readonly credential: typeof BearerConnectionCredential;
}>, {}>;
export declare class SshConnectionRegistration extends SshConnectionRegistration_base {
}
export declare const ConnectionRegistration: Schema.Union<readonly [typeof RelayConnectionRegistration, typeof BearerConnectionRegistration, typeof SshConnectionRegistration]>;
export type ConnectionRegistration = typeof ConnectionRegistration.Type;
/**
 * The primary stays on same-origin cookie auth
 * (`PrimaryConnectionRegistration`); secondary local backends live on a
 * separate loopback origin and authenticate with a bearer token minted from
 * their bootstrap credential (`BearerConnectionRegistration`).
 */
export declare const PlatformConnectionRegistration: Schema.Union<readonly [typeof PrimaryConnectionRegistration, typeof BearerConnectionRegistration]>;
export type PlatformConnectionRegistration = typeof PlatformConnectionRegistration.Type;
export declare function connectionRegistrationCatalogEntry(registration: ConnectionRegistration | PrimaryConnectionRegistration): ConnectionCatalogEntry;
export {};
