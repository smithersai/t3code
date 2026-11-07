import { AsyncResult, Atom } from "effect/reactivity";
import * as RelayEnvironmentDiscovery from "../relay/discovery.ts";
/** @throws {never} */
export declare function createRelayEnvironmentDiscoveryAtoms<R, E>(runtime: Atom.AtomRuntime<RelayEnvironmentDiscovery.RelayEnvironmentDiscovery | R, E>): {
    stateAtom: Atom.Atom<AsyncResult.AsyncResult<RelayEnvironmentDiscovery.RelayEnvironmentDiscoveryState, E | import("effect/Cause").NoSuchElementError>>;
    stateValueAtom: Atom.Atom<RelayEnvironmentDiscovery.RelayEnvironmentDiscoveryState>;
    refresh: import("./runtime.ts").AtomCommand<void, void, E>;
};
