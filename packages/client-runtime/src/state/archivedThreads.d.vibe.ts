import { EnvironmentId, type OrchestrationV2ArchivedShellSnapshot } from "@t3tools/contracts";
import { AsyncResult, Atom } from "effect/reactivity";
export interface ArchivedSnapshotEntry {
    readonly environmentId: EnvironmentId;
    readonly snapshot: OrchestrationV2ArchivedShellSnapshot;
}
export interface ArchivedThreadSnapshotsState {
    readonly snapshots: ReadonlyArray<ArchivedSnapshotEntry>;
    readonly error: string | null;
    readonly isLoading: boolean;
}
export declare function makeArchivedThreadsEnvironmentKey(environmentIds: ReadonlyArray<EnvironmentId>): string;
export declare function createArchivedThreadSnapshotsAtomFamily<E>(options: {
    readonly getSnapshotAtom: (environmentId: EnvironmentId) => Atom.Atom<AsyncResult.AsyncResult<OrchestrationV2ArchivedShellSnapshot, E>>;
    readonly labelPrefix: string;
}): (arg: string) => Atom.Atom<ArchivedThreadSnapshotsState>;
