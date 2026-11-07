import type { EnvironmentId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { Atom, type AtomRegistry } from "effect/reactivity";
import * as Persistence from "../platform/persistence.vibe";
export interface VcsRefsInvalidationTarget {
    readonly environmentId: EnvironmentId;
}
export interface CachedVcsRefsInvalidationTarget extends VcsRefsInvalidationTarget {
    readonly cwd: string;
}
export interface VcsRefsCacheState {
    readonly revision: number;
    readonly persistedCacheReadable: boolean;
}
/** @throws {never} */
export declare function vcsRefsCacheStateAtom(target: VcsRefsInvalidationTarget): Atom.Writable<VcsRefsCacheState, VcsRefsCacheState>;
/** @throws {never} */
export declare function invalidateVcsRefs(registry: AtomRegistry.AtomRegistry, target: VcsRefsInvalidationTarget, persistedCacheReadable?: boolean): void;
export declare function withVcsRefsPersistenceLock<A, E, R>(environmentId: EnvironmentId, effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R>;
/**
 * Clearing first prevents the restarted stream from rehydrating the invalidated
 * snapshot. A refresh that wins the lock is cleared afterward; one that loses
 * observes the new revision and cannot repersist its pre-mutation result.
 */
export declare const invalidateCachedVcsRefs: (registry: AtomRegistry.AtomRegistry, target: CachedVcsRefsInvalidationTarget) => Effect.Effect<void, never, Persistence.EnvironmentCacheStore>;
