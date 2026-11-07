import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
export declare const ApnsEnvironment: Schema.Literals<readonly ["sandbox", "production"]>;
export type ApnsEnvironment = typeof ApnsEnvironment.Type;
export declare const ManagedEndpointCleanupMode: Schema.Literals<readonly ["off", "dry-run", "enabled"]>;
export type ManagedEndpointCleanupMode = typeof ManagedEndpointCleanupMode.Type;
export declare const managedEndpointCleanupModeConfig: Config.Config<"dry-run" | "enabled" | "off">;
export declare const legacyManagedEndpointCleanupModeConfig: Config.Config<"dry-run" | "enabled" | "off">;
export declare const legacyTunnelGraceMinutesConfig: Config.Config<import("effect/Option").Option<number>>;
export interface ApnsCredentials {
    readonly teamId: string;
    readonly keyId: string;
    readonly privateKey: Redacted.Redacted<string>;
    readonly bundleId: string;
    readonly environment: ApnsEnvironment;
}
declare const RelayConfiguration_base: Context.ServiceClass<RelayConfiguration, "t3code-relay/Config/RelayConfiguration", {
    readonly relayIssuer: string;
    readonly apns: ApnsCredentials | null;
    readonly fcmServiceAccount?: Redacted.Redacted<string>;
    readonly clerkSecretKey: Redacted.Redacted<string>;
    readonly clerkPublishableKey: string;
    readonly clerkJwtAudience: string;
    readonly apnsDeliveryJobSigningSecret: Redacted.Redacted<string>;
    readonly cloudMintPrivateKey: Redacted.Redacted<string>;
    readonly cloudMintPublicKey: string;
    readonly managedEndpointBaseDomain: string | undefined;
    readonly managedEndpointNamespace: string | undefined;
    readonly managedEndpointCleanupMode?: ManagedEndpointCleanupMode;
    readonly legacyManagedEndpointCleanupMode?: ManagedEndpointCleanupMode;
    readonly legacyTunnelGraceMinutes?: number;
}>;
export declare class RelayConfiguration extends RelayConfiguration_base {
}
/** @throws {never} */
export declare const make: (configuration: RelayConfiguration["Service"]) => {
    readonly relayIssuer: string;
    readonly apns: ApnsCredentials | null;
    readonly fcmServiceAccount?: Redacted.Redacted<string>;
    readonly clerkSecretKey: Redacted.Redacted<string>;
    readonly clerkPublishableKey: string;
    readonly clerkJwtAudience: string;
    readonly apnsDeliveryJobSigningSecret: Redacted.Redacted<string>;
    readonly cloudMintPrivateKey: Redacted.Redacted<string>;
    readonly cloudMintPublicKey: string;
    readonly managedEndpointBaseDomain: string | undefined;
    readonly managedEndpointNamespace: string | undefined;
    readonly managedEndpointCleanupMode?: ManagedEndpointCleanupMode;
    readonly legacyManagedEndpointCleanupMode?: ManagedEndpointCleanupMode;
    readonly legacyTunnelGraceMinutes?: number;
};
export declare const layer: (configuration: RelayConfiguration["Service"]) => Layer.Layer<RelayConfiguration, never, never>;
export {};
