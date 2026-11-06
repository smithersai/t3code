import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as RelayConfiguration from "../Config.vibe";
import * as EnvironmentLinks from "../environments/EnvironmentLinks.vibe";
import * as ManagedEndpointAllocations from "../environments/ManagedEndpointAllocations.vibe";
import * as HookInbox from "./HookInbox.vibe";
/** @throws {never} */
export declare const endpointKeyForTunnelName: (namespace: string, tunnelName: string) => string | null;
type PersistenceError = EnvironmentLinks.EnvironmentLinkEnvironmentLookupPersistenceError | ManagedEndpointAllocations.ManagedEndpointAllocationPersistenceError;
interface HookEndpoint {
    readonly httpBaseUrl: string;
    readonly environmentId: string;
    readonly holdWhileOffline: boolean;
}
declare const HeldHooks_base: Context.ServiceClass<HeldHooks, "t3code-relay/hooks/HeldHooks", {
    /** Hash user and environment so endpoint keys cannot be claimed by another account. */
    readonly resolveEndpoint: (endpointKey: string) => Effect.Effect<HookEndpoint | null, PersistenceError>;
    readonly setHoldWhileOffline: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly holdWebhooksWhileOffline: boolean;
    }) => Effect.Effect<void, PersistenceError | HookInbox.HookInboxError>;
    readonly wake: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
    }) => Effect.Effect<boolean, PersistenceError | HookInbox.HookInboxError>;
}>;
export declare class HeldHooks extends HeldHooks_base {
}
export declare const layer: Layer.Layer<HeldHooks, never, EnvironmentLinks.EnvironmentLinks | HookInbox.HookInbox | ManagedEndpointAllocations.ManagedEndpointAllocations | RelayConfiguration.RelayConfiguration>;
export {};
