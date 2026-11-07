import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare const environmentIdsKey: (environmentIds: ReadonlyArray<EnvironmentId>) => string;
/** Key by environment ids so equal input lists reuse the atom and snapshot. */
export declare function environmentAtomList<A>(label: string, atom: (environmentId: EnvironmentId) => Atom.Atom<A>): (arg: string) => Atom.Atom<A[]>;
