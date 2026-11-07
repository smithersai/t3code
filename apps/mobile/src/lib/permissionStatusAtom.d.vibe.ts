import { Atom } from "effect/reactivity";
/**
 * A system permission as the app last saw it. Reads it when first mounted and
 * again each time the app returns to the foreground, where the user may have
 * changed it in system Settings. Writing stores the outcome of a request.
 */
export declare function makePermissionStatusAtom<S>(options: {
    readonly label: string;
    readonly initial: S;
    readonly read: () => Promise<S>;
}): Atom.Writable<S, S>;
