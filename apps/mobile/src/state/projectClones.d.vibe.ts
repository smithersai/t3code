import type { ProjectCloneSnapshot, ScopedProjectRef } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
/** pending means the clone stream has not loaded; treating it as absent would briefly enable Start. */
export type ProjectCloneState = ProjectCloneSnapshot | "pending" | null;
export declare const environmentProjectCloneListAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
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
    readonly stalled?: boolean | undefined;
    readonly error: string | null;
    readonly startedAt: string;
    readonly endedAt: string | null;
    readonly sequence: number;
}[]>;
export declare function useProjectClone(ref: ScopedProjectRef | null): ProjectCloneState;
