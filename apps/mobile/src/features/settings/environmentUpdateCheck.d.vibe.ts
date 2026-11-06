import { AsyncResult, Atom } from "effect/reactivity";
export interface EnvironmentReleaseCheck {
    readonly fromVersion: string;
    readonly targetVersion: string | null;
}
/**
 * Looks up the newest T3 Code release for one environment. The atom is not
 * kept alive, so leaving the screen interrupts the lookup and aborts its fetch.
 * The argument reads the server version, which an outdated server only
 * reports through a separate description request.
 */
export declare const environmentReleaseCheckAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.AtomResultFn<() => Promise<string>, {
    fromVersion: string;
    targetVersion: string | null;
}, Error>;
export declare function releaseCheckValue(result: AsyncResult.AsyncResult<EnvironmentReleaseCheck, Error>): EnvironmentReleaseCheck | null;
export declare function releaseCheckError(result: AsyncResult.AsyncResult<EnvironmentReleaseCheck, Error>): string | null;
