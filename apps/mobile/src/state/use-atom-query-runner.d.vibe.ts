import { type AtomQueryOptions, type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import { AsyncResult, type Atom } from "effect/reactivity";
export declare function useAtomQueryRunner<T, A, E>(family: (target: T) => Atom.Atom<AsyncResult.AsyncResult<A, E>>, options?: string | AtomQueryOptions): (target: T) => Promise<AtomCommandResult<A, E>>;
