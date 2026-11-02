import { Atom } from "effect/reactivity";
import type { EnvironmentId, ProjectCloneSnapshot, ScopedProjectRef } from "@t3tools/contracts";
export declare const environmentProjectClonesAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    readonly remoteUrl: string;
    readonly destinationPath: string;
    readonly repository: {
        readonly provider: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
        readonly nameWithOwner: string;
        readonly url: string;
        readonly sshUrl: string;
    } | null;
    readonly phase: "cancelled" | "done" | "failed" | "running";
    readonly stage: "checkout" | "connecting" | "counting" | "receiving" | "resolving";
    readonly percent: number | null;
    readonly detail: string | null;
    readonly stalled?: boolean;
    readonly error: string | null;
    readonly startedAt: string;
    readonly endedAt: string | null;
    readonly sequence: number;
}[]>;
export declare function useProjectClone(ref: ScopedProjectRef | null): ProjectCloneSnapshot | null;
export declare function useEnvironmentProjectClones(environmentId: EnvironmentId): ReadonlyArray<ProjectCloneSnapshot>;
/**
 * Keeps a clone's progress out of toasts once the user is looking at its
 * project, whose composer shows the same progress. Failures still toast
 * whenever the project is not on screen.
 */
export declare function silenceProjectCloneToasts(ref: ScopedProjectRef): void;
export declare function isProjectCloneToastSilenced(ref: ScopedProjectRef): boolean;
