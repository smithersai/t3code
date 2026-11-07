import type { EnvironmentId as EnvironmentIdType } from "@t3tools/contracts";
import { AsyncResult, Atom } from "effect/reactivity";
import * as EnvironmentRegistry from "../connection/registry.vibe";
import type { ConnectionCatalogEntry } from "../connection/catalog.vibe";
import { type PullRequestRoutingPermission } from "../connection/pullRequestRoutingPermissions.vibe";
export interface EnvironmentCatalogState {
    readonly isReady: boolean;
    readonly entries: ReadonlyMap<EnvironmentIdType, ConnectionCatalogEntry>;
}
/** @throws {never} */
export declare function enabledEnvironmentIds(catalog: EnvironmentCatalogState): Generator<EnvironmentIdType>;
/** @throws {never} */
export declare function createEnvironmentCatalogAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry.EnvironmentRegistry | R, E>): {
    catalogAtom: Atom.Atom<AsyncResult.AsyncResult<EnvironmentCatalogState, E | import("effect/Cause").NoSuchElementError>>;
    catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    pullRequestRoutingPermissionsValueAtom: Atom.Atom<never[] | readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly connectionKey: string;
        readonly permission: "off" | "read" | "read-write";
    }[]>;
    setPullRequestRoutingPermission: import("./runtime.ts").AtomCommand<{
        readonly environmentId: EnvironmentIdType;
        readonly permission: PullRequestRoutingPermission;
    }, undefined, E | EnvironmentRegistry.EnvironmentNotRegisteredError | import("../connection/model.vibe").ConnectionAttemptError>;
    networkStatusAtom: Atom.Atom<AsyncResult.AsyncResult<import("../connection/model.vibe").NetworkStatus, E | import("effect/Cause").NoSuchElementError>>;
    networkStatusValueAtom: Atom.Atom<import("../connection/model.vibe").NetworkStatus>;
    stateAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<AsyncResult.AsyncResult<import("../connection/model.vibe").SupervisorConnectionState, E | import("effect/Cause").NoSuchElementError>>;
    sessionGenerationAtom: (environmentId: EnvironmentIdType) => Atom.Atom<number>;
    register: import("./runtime.ts").AtomCommand<import("../connection/catalog.vibe").BearerConnectionRegistration | import("../connection/catalog.vibe").RelayConnectionRegistration | import("../connection/catalog.vibe").SshConnectionRegistration, boolean, E | import("../platform/persistence.vibe").ConnectionPersistenceError>;
    remove: import("./runtime.ts").AtomCommand<string & import("effect/Brand").Brand<"EnvironmentId">, void, E | import("../platform/persistence.vibe").ConnectionPersistenceError | EnvironmentRegistry.EnvironmentNotRegisteredError | EnvironmentRegistry.PlatformEnvironmentRemovalError | import("../connection/model.vibe").ConnectionAttemptError>;
    removeRoute: import("./runtime.ts").AtomCommand<{
        readonly environmentId: EnvironmentIdType;
        readonly routeId: string;
    }, void, E | import("../platform/persistence.vibe").ConnectionPersistenceError | EnvironmentRegistry.EnvironmentNotRegisteredError | EnvironmentRegistry.PlatformEnvironmentRemovalError | import("../connection/model.vibe").ConnectionAttemptError>;
    reorderRoutes: import("./runtime.ts").AtomCommand<{
        readonly environmentId: EnvironmentIdType;
        readonly routeIds: ReadonlyArray<string>;
    }, void, E | import("../connection/model.vibe").ConnectionBlockedError | import("../platform/persistence.vibe").ConnectionPersistenceError | EnvironmentRegistry.EnvironmentNotRegisteredError | EnvironmentRegistry.PlatformEnvironmentRemovalError>;
    removeRelayEnvironments: import("./runtime.ts").AtomCommand<void, void, E | import("../platform/persistence.vibe").ConnectionPersistenceError | EnvironmentRegistry.PlatformEnvironmentRemovalError | import("../connection/model.vibe").ConnectionAttemptError>;
    retryNow: import("./runtime.ts").AtomCommand<string & import("effect/Brand").Brand<"EnvironmentId">, void, E>;
    setEnabled: import("./runtime.ts").AtomCommand<{
        readonly environmentId: EnvironmentIdType;
        readonly enabled: boolean;
    }, void, E | import("../connection/model.vibe").ConnectionBlockedError | import("../platform/persistence.vibe").ConnectionPersistenceError | EnvironmentRegistry.EnvironmentNotRegisteredError>;
};
