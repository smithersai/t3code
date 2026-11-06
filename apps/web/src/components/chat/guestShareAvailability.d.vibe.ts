import { Atom } from "effect/reactivity";
/**
 * Whether this environment offers "Share with guest": the user may create links there, and its
 * Guest links beta is on (Settings > Labs). The server refuses links while the beta is off.
 */
export declare const canShareWithGuestAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<boolean>;
