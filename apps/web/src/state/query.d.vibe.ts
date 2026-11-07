import * as Cause from "effect/Cause";
import { AsyncResult, Atom } from "effect/reactivity";
export interface EnvironmentQueryView<A, E = unknown> {
    readonly data: A | null;
    readonly dataUpdatedAt: number;
    readonly error: string | null;
    readonly failure: E | null;
    readonly isPending: boolean;
    readonly isSuccess: boolean;
    readonly refresh: () => void;
}
export declare function formatEnvironmentQueryError(cause: Cause.Cause<unknown>): string;
export declare function useEnvironmentQuery<A, E>(atom: Atom.Atom<AsyncResult.AsyncResult<A, E>> | null): EnvironmentQueryView<A, E>;
/** Keep select outside the component; a new function rebuilds the derived atom on every render. */
export declare function useEnvironmentQuerySelector<A, E, B>(atom: Atom.Atom<AsyncResult.AsyncResult<A, E>> | null, select: (result: AsyncResult.AsyncResult<A, E>) => B): B;
type QueryResultAtom = Atom.Atom<AsyncResult.AsyncResult<unknown, unknown>>;
export declare function useEnvironmentQueryIsNewer(query: QueryResultAtom | null, than: QueryResultAtom | null): boolean;
/** Returns refresh and call-time pending state without subscribing to it. */
export declare function useEnvironmentQueryRefresh<A, E>(atom: Atom.Atom<AsyncResult.AsyncResult<A, E>> | null): {
    readonly refresh: () => void;
    readonly isPending: () => boolean;
};
export {};
