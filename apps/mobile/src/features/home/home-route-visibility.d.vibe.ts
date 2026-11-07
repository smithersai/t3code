import type { Atom } from "effect/reactivity";
export declare function recordHomeTransitionStart(closing: boolean): void;
export declare function recordHomeTransitionEnd(closing: boolean): void;
/** Popping a sheet or a deep-linked route above Home has no appear event. */
export declare function recordHomeFocus(): void;
export declare function useHomeRouteVisible(): boolean;
export declare function useAtomValueWhileVisible<A>(atom: Atom.Atom<A>, visible: boolean): A;
