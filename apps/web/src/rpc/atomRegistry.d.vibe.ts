import { type Atom, AtomRegistry } from "effect/reactivity";
export declare const appAtomRegistry: AtomRegistry.AtomRegistry;
export declare function AppAtomRegistryProvider({ children }: React.PropsWithChildren): import("react").FunctionComponentElement<import("react").ProviderProps<AtomRegistry.AtomRegistry>>;
/**
 * Calls `listener` with each value after the current one. A bare `subscribe` never computes a
 * derived atom nobody has read, so it never learns its parents and never fires.
 */
export declare function subscribeAtomChanges<A>(atom: Atom.Atom<A>, listener: (value: A) => void): () => void;
