import * as Layer from "effect/Layer";
import { Atom, AtomRegistry, Reactivity } from "effect/reactivity";
export interface AcceptingHotModule {
    /** @throws {never} */
    readonly accept: (callback?: 
    /** @throws {never} */
    () => void) => void;
}
/** @throws {never} */
export declare function hotSwappableAtomRuntime<R, E>(options: {
    readonly id: string;
    readonly hotModule: AcceptingHotModule | undefined;
    readonly registry: AtomRegistry.AtomRegistry;
    readonly layer: Layer.Layer<R, E, AtomRegistry.AtomRegistry | Reactivity.Reactivity>;
}): Atom.AtomRuntime<R, E>;
