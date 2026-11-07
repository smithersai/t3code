import { EnvironmentId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as SubscriptionRef from "effect/SubscriptionRef";
import * as ClientCapabilities from "#vibelang/emitted/src/platform/capabilities";
import { type ConnectionCatalogEntry, type ConnectionRegistration, type PlatformConnectionRegistration, type PrimaryConnectionRegistration } from "#vibelang/emitted/src/connection/catalog";
import * as ConnectionCredentialStore from "#vibelang/emitted/src/connection/credentialStore";
import * as ConnectionProfileStore from "#vibelang/emitted/src/connection/profileStore";
import * as Connectivity from "#vibelang/emitted/src/connection/connectivity";
import type { ConnectionAttemptError, NetworkStatus, SupervisorConnectionState } from "./model.vibe";
import { ConnectionBlockedError } from "#vibelang/emitted/src/connection/model";
import * as Persistence from "#vibelang/emitted/src/platform/persistence";
import * as EnvironmentSupervisor from "./supervisor.ts";
import * as ConnectionDriver from "./driver.vibe";
import * as ConnectionWakeups from "#vibelang/emitted/src/connection/wakeups";
export declare function unsupportedState(entry: ConnectionCatalogEntry): Pick<ConnectionCatalogEntry, "unsupportedReason" | "serverUpdateRequired">;
declare const EnvironmentNotRegisteredError_base: Schema.Class<EnvironmentNotRegisteredError, Schema.TaggedStruct<"EnvironmentNotRegisteredError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentNotRegisteredError extends EnvironmentNotRegisteredError_base {
    get message(): string;
}
declare const PlatformEnvironmentRemovalError_base: Schema.Class<PlatformEnvironmentRemovalError, Schema.TaggedStruct<"PlatformEnvironmentRemovalError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>, import("effect/Cause").YieldableError>;
export declare class PlatformEnvironmentRemovalError extends PlatformEnvironmentRemovalError_base {
    get message(): string;
}
declare const EnvironmentRegistry_base: Context.ServiceClass<EnvironmentRegistry, "@t3tools/client-runtime/connection/registry/EnvironmentRegistry", {
    readonly entries: SubscriptionRef.SubscriptionRef<ReadonlyMap<EnvironmentId, ConnectionCatalogEntry>>;
    readonly networkStatus: SubscriptionRef.SubscriptionRef<NetworkStatus>;
    readonly start: Effect.Effect<void>;
    /**
     * Succeeds with `false` and changes nothing when the environment is
     * platform-managed, since the host owns that entry.
     */
    readonly register: (registration: ConnectionRegistration) => Effect.Effect<boolean, Persistence.ConnectionPersistenceError>;
    readonly registerPlatform: (registration: PrimaryConnectionRegistration) => Effect.Effect<void>;
    readonly reconcilePlatform: (registrations: ReadonlyArray<PlatformConnectionRegistration>) => Effect.Effect<void>;
    readonly remove: (environmentId: EnvironmentId) => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError>;
    /**
     * Removing an environment's last route removes the environment, the same as
     * `remove`.
     */
    readonly removeRoute: (environmentId: EnvironmentId, routeId: string) => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError>;
    readonly reorderRoutes: (environmentId: EnvironmentId, routeIds: ReadonlyArray<string>) => Effect.Effect<void, Persistence.ConnectionPersistenceError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError | ConnectionBlockedError>;
    readonly removeRelayEnvironments: () => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | PlatformEnvironmentRemovalError>;
    readonly retryNow: (environmentId: EnvironmentId) => Effect.Effect<void>;
    readonly setEnabled: (environmentId: EnvironmentId, enabled: boolean) => Effect.Effect<void, EnvironmentNotRegisteredError | Persistence.ConnectionPersistenceError | ConnectionBlockedError>;
    readonly setCompatibility: (environmentId: EnvironmentId, error: ConnectionBlockedError | null) => Effect.Effect<void, Persistence.ConnectionPersistenceError>;
    readonly state: (environmentId: EnvironmentId) => Effect.Effect<SupervisorConnectionState, EnvironmentNotRegisteredError>;
    readonly stateChanges: (environmentId: EnvironmentId) => Stream.Stream<SupervisorConnectionState, EnvironmentNotRegisteredError>;
    readonly run: <A, E, R>(environmentId: EnvironmentId, effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E | EnvironmentNotRegisteredError, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
    readonly runStream: <A, E, R>(environmentId: EnvironmentId, stream: Stream.Stream<A, E, R>) => Stream.Stream<A, E | EnvironmentNotRegisteredError, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
    readonly followStream: <A, E, R>(environmentId: EnvironmentId, stream: Stream.Stream<A, E, R>) => Stream.Stream<A, E, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
}>;
export declare class EnvironmentRegistry extends EnvironmentRegistry_base {
}
export interface EnvironmentServiceScope {
    readonly entry: ConnectionCatalogEntry;
    readonly supervisor: EnvironmentSupervisor.EnvironmentSupervisor["Service"];
    readonly scope: Scope.Closeable;
}
/** @public */
export declare const make: Effect.Effect<{
    readonly entries: SubscriptionRef.SubscriptionRef<ReadonlyMap<EnvironmentId, ConnectionCatalogEntry>>;
    readonly networkStatus: SubscriptionRef.SubscriptionRef<NetworkStatus>;
    readonly start: Effect.Effect<void>;
    /**
     * Succeeds with `false` and changes nothing when the environment is
     * platform-managed, since the host owns that entry.
     */
    readonly register: (registration: ConnectionRegistration) => Effect.Effect<boolean, Persistence.ConnectionPersistenceError>;
    readonly registerPlatform: (registration: PrimaryConnectionRegistration) => Effect.Effect<void>;
    readonly reconcilePlatform: (registrations: ReadonlyArray<PlatformConnectionRegistration>) => Effect.Effect<void>;
    readonly remove: (environmentId: EnvironmentId) => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError>;
    /**
     * Removing an environment's last route removes the environment, the same as
     * `remove`.
     */
    readonly removeRoute: (environmentId: EnvironmentId, routeId: string) => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError>;
    readonly reorderRoutes: (environmentId: EnvironmentId, routeIds: ReadonlyArray<string>) => Effect.Effect<void, Persistence.ConnectionPersistenceError | EnvironmentNotRegisteredError | PlatformEnvironmentRemovalError | ConnectionBlockedError>;
    readonly removeRelayEnvironments: () => Effect.Effect<void, Persistence.ConnectionPersistenceError | ConnectionAttemptError | PlatformEnvironmentRemovalError>;
    readonly retryNow: (environmentId: EnvironmentId) => Effect.Effect<void>;
    readonly setEnabled: (environmentId: EnvironmentId, enabled: boolean) => Effect.Effect<void, EnvironmentNotRegisteredError | Persistence.ConnectionPersistenceError | ConnectionBlockedError>;
    readonly setCompatibility: (environmentId: EnvironmentId, error: ConnectionBlockedError | null) => Effect.Effect<void, Persistence.ConnectionPersistenceError>;
    readonly state: (environmentId: EnvironmentId) => Effect.Effect<SupervisorConnectionState, EnvironmentNotRegisteredError>;
    readonly stateChanges: (environmentId: EnvironmentId) => Stream.Stream<SupervisorConnectionState, EnvironmentNotRegisteredError>;
    readonly run: <A, E, R>(environmentId: EnvironmentId, effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E | EnvironmentNotRegisteredError, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
    readonly runStream: <A, E, R>(environmentId: EnvironmentId, stream: Stream.Stream<A, E, R>) => Stream.Stream<A, E | EnvironmentNotRegisteredError, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
    readonly followStream: <A, E, R>(environmentId: EnvironmentId, stream: Stream.Stream<A, E, R>) => Stream.Stream<A, E, Exclude<R, EnvironmentSupervisor.EnvironmentSupervisor>>;
}, Persistence.ConnectionPersistenceError | ConnectionAttemptError, ConnectionCredentialStore.ConnectionCredentialStore | ConnectionDriver.ConnectionDriver | ConnectionProfileStore.ConnectionProfileStore | Persistence.ConnectionRegistrationStore | Persistence.ConnectionTargetStore | ConnectionWakeups.ConnectionWakeups | Connectivity.Connectivity | Persistence.EnvironmentCacheStore | Scope.Scope | ClientCapabilities.SshEnvironmentGateway>;
export {};
