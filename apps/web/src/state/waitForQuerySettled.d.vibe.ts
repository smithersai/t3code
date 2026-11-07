import { AsyncResult, type Atom, type AtomRegistry } from "effect/reactivity";
/**
 * Resolves with the first defined `settle` result for a query atom's value.
 * Resolves `undefined` once `signal` aborts or the query fails, because a
 * failed query can no longer report the state the caller is waiting for.
 * Subscribing keeps the atom mounted, so the subscription ends on every exit.
 */
export declare function waitForQuerySettled<A, E, R>(input: {
    readonly registry: AtomRegistry.AtomRegistry;
    readonly atom: Atom.Atom<AsyncResult.AsyncResult<A, E>>;
    readonly settle: (value: A | null) => R | undefined;
    readonly signal: AbortSignal;
}): Promise<R | undefined>;
