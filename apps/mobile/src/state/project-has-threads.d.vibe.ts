import type { EnvironmentId, ProjectId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
/**
 * Whether a project has any thread, loaded or only counted as older settled.
 * A per-project boolean, so readers re-render when it flips, not on every
 * thread-shell change (which is frequent while agents work).
 */
export declare function makeProjectHasThreadsAtom(sources: {
    readonly threadRefsByProject: (environmentId: EnvironmentId) => Atom.Atom<ReadonlyMap<ProjectId, ReadonlyArray<unknown>>>;
    readonly olderSettled: (environmentId: EnvironmentId) => Atom.Atom<{
        readonly counts: ReadonlyMap<ProjectId, number>;
    } | null>;
}): (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => (arg: string & import("effect/Brand").Brand<"ProjectId">) => Atom.Atom<boolean>;
export declare function useProjectHasThreads(project: {
    readonly environmentId: EnvironmentId;
    readonly id: ProjectId;
} | null): boolean;
