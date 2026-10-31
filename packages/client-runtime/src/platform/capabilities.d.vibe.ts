import { type AuthClientPresentationMetadata, type DesktopSshEnvironmentBootstrap, type DesktopSshEnvironmentTarget, EnvironmentId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import type * as Option from "effect/Option";
import type { ConnectionAttemptError } from "../connection/model.vibe";
export interface PreparedSshEnvironment {
    readonly bootstrap: DesktopSshEnvironmentBootstrap;
    readonly bearerToken: string;
}
export interface ProvisionedSshEnvironment extends PreparedSshEnvironment {
    readonly environmentId: EnvironmentId;
    readonly label: string;
}
/** Stable for one signed-in session, including same-account token refreshes. */
export interface CloudSessionIdentity {
    readonly accountId: string;
}
declare const CloudSession_base: Context.ServiceClass<CloudSession, "@t3tools/client-runtime/platform/capabilities/CloudSession", {
    readonly identity: Effect.Effect<Option.Option<CloudSessionIdentity>>;
    readonly clerkToken: Effect.Effect<string, ConnectionAttemptError>;
}>;
export declare class CloudSession extends CloudSession_base {
}
declare const RelayDeviceIdentity_base: Context.ServiceClass<RelayDeviceIdentity, "@t3tools/client-runtime/platform/capabilities/RelayDeviceIdentity", {
    readonly deviceId: Effect.Effect<Option.Option<string>, ConnectionAttemptError>;
}>;
export declare class RelayDeviceIdentity extends RelayDeviceIdentity_base {
}
declare const AnalyticsDevice_base: Context.Reference<{
    readonly id: Effect.Effect<Option.Option<string>>;
}>;
/**
 * A random id this client keeps across launches. Environments it connects to
 * record its hash, so two environments opened from one device share an owner
 * in analytics even when nobody is signed in.
 */
export declare class AnalyticsDevice extends AnalyticsDevice_base {
}
declare const ClientPresentation_base: Context.ServiceClass<ClientPresentation, "@t3tools/client-runtime/platform/capabilities/ClientPresentation", {
    readonly metadata: AuthClientPresentationMetadata;
}>;
export declare class ClientPresentation extends ClientPresentation_base {
}
declare const PrimaryEnvironmentAuth_base: Context.ServiceClass<PrimaryEnvironmentAuth, "@t3tools/client-runtime/platform/capabilities/PrimaryEnvironmentAuth", {
    readonly bearerToken: Effect.Effect<Option.Option<string>, ConnectionAttemptError>;
}>;
export declare class PrimaryEnvironmentAuth extends PrimaryEnvironmentAuth_base {
}
declare const SshEnvironmentGateway_base: Context.ServiceClass<SshEnvironmentGateway, "@t3tools/client-runtime/platform/capabilities/SshEnvironmentGateway", {
    /**
     * With `expectedEnvironmentId`, a server that is a different machine fails
     * before its one-time pairing credential is spent.
     */
    readonly provision: (target: DesktopSshEnvironmentTarget, expectedEnvironmentId?: EnvironmentId) => Effect.Effect<ProvisionedSshEnvironment, ConnectionAttemptError>;
    /**
     * Starts or reuses the remote server for a saved connection. Returns
     * `bearerToken`, the token this client saved from an earlier pairing, while
     * the host still accepts it with the standard scopes, and pairs again only
     * when it does not, so a reconnect adds no session on the host.
     */
    readonly prepare: (input: {
        readonly connectionId: string;
        readonly expectedEnvironmentId: EnvironmentId;
        readonly target: DesktopSshEnvironmentTarget;
        readonly bearerToken?: string;
    }) => Effect.Effect<PreparedSshEnvironment, ConnectionAttemptError>;
    readonly disconnect: (target: DesktopSshEnvironmentTarget) => Effect.Effect<void, ConnectionAttemptError>;
}>;
export declare class SshEnvironmentGateway extends SshEnvironmentGateway_base {
}
export {};
