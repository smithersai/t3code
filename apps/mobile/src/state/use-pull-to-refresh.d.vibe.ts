import { type AsyncResult, type Atom } from "effect/reactivity";
export declare function usePullToRefresh<A, E>(atom: Atom.Atom<AsyncResult.AsyncResult<A, E>> | null): {
    refreshing: boolean;
    onRefresh: (beforeRefresh?: (signal: AbortSignal) => Promise<unknown>) => void;
};
