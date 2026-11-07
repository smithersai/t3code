import { AsyncResult, Atom } from "effect/reactivity";
export interface EnvironmentQueryView<A> {
    readonly data: A | null;
    readonly successResult: AsyncResult.Success<A, unknown> | null;
    readonly error: string | null;
    readonly failure: unknown;
    readonly isPending: boolean;
    readonly isSuccess: boolean;
    readonly refresh: () => void;
}
export declare function useEnvironmentQuery<A, E>(atom: Atom.Atom<AsyncResult.AsyncResult<A, E>> | null): EnvironmentQueryView<A>;
