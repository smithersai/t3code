import * as Schema from "effect/Schema";
export declare const AdvertisedEndpointProviderKind: Schema.Literals<readonly ["core", "private-network", "tunnel", "manual"]>;
export type AdvertisedEndpointProviderKind = typeof AdvertisedEndpointProviderKind.Type;
export declare const AdvertisedEndpointReachability: Schema.Literals<readonly ["loopback", "lan", "private-network", "public"]>;
export type AdvertisedEndpointReachability = typeof AdvertisedEndpointReachability.Type;
export declare const AdvertisedEndpointHostedHttpsCompatibility: Schema.Literals<readonly ["compatible", "mixed-content-blocked", "requires-configuration", "unknown"]>;
export type AdvertisedEndpointHostedHttpsCompatibility = typeof AdvertisedEndpointHostedHttpsCompatibility.Type;
export declare const AdvertisedEndpointStatus: Schema.Literals<readonly ["available", "unavailable", "unknown"]>;
export type AdvertisedEndpointStatus = typeof AdvertisedEndpointStatus.Type;
export declare const AdvertisedEndpointSource: Schema.Literals<readonly ["desktop-core", "desktop-addon", "server", "user"]>;
export type AdvertisedEndpointSource = typeof AdvertisedEndpointSource.Type;
export declare const AdvertisedEndpointProvider: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["core", "private-network", "tunnel", "manual"]>;
    readonly isAddon: Schema.Boolean;
}>;
export type AdvertisedEndpointProvider = typeof AdvertisedEndpointProvider.Type;
export declare const AdvertisedEndpointCompatibility: Schema.Struct<{
    readonly hostedHttpsApp: Schema.Literals<readonly ["compatible", "mixed-content-blocked", "requires-configuration", "unknown"]>;
    readonly desktopApp: Schema.Literals<readonly ["compatible", "unknown"]>;
}>;
export type AdvertisedEndpointCompatibility = typeof AdvertisedEndpointCompatibility.Type;
export declare const AdvertisedEndpoint: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly provider: Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["core", "private-network", "tunnel", "manual"]>;
        readonly isAddon: Schema.Boolean;
    }>;
    readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reachability: Schema.Literals<readonly ["loopback", "lan", "private-network", "public"]>;
    readonly compatibility: Schema.Struct<{
        readonly hostedHttpsApp: Schema.Literals<readonly ["compatible", "mixed-content-blocked", "requires-configuration", "unknown"]>;
        readonly desktopApp: Schema.Literals<readonly ["compatible", "unknown"]>;
    }>;
    readonly source: Schema.Literals<readonly ["desktop-core", "desktop-addon", "server", "user"]>;
    readonly status: Schema.Literals<readonly ["available", "unavailable", "unknown"]>;
    readonly isDefault: Schema.optional<Schema.Boolean>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AdvertisedEndpoint = typeof AdvertisedEndpoint.Type;
