import { EnvironmentId } from "@t3tools/contracts";
import { Atom, type AtomRegistry } from "effect/reactivity";
/**
 * Whether the last finished limits refresh for an environment failed. Not kept
 * alive: the limits view mounts it, and leaving the view forgets old failures.
 */
export declare const limitsRefreshFailedAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Writable<boolean, boolean>;
/** @throws {never} */
export declare function refreshEnvironmentLimits(registry: AtomRegistry.AtomRegistry, environmentId: EnvironmentId, options?: {
    readonly automatic?: boolean;
    readonly afterPending?: boolean;
}): Promise<void>;
export declare function environmentIdsKey(environmentIds: Iterable<EnvironmentId>): string;
/** Keyed by a sorted, comma-joined id list so equal selections share one atom. */
export declare const limitsAutoRefreshSetAtom: (arg: string) => Atom.Atom<void>;
export declare const limitsRefreshFailuresAtom: (arg: string) => Atom.Atom<(string & import("effect/Brand").Brand<"EnvironmentId">)[]>;
