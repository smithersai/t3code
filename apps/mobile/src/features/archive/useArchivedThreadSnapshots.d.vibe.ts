import { type ArchivedSnapshotEntry } from "@t3tools/client-runtime/state/threads";
import type { EnvironmentId } from "@t3tools/contracts";
export declare function refreshArchivedThreadsForEnvironment(environmentId: EnvironmentId): void;
export declare function useArchivedThreadSnapshots(environmentIds: ReadonlyArray<EnvironmentId>): {
    readonly snapshots: ReadonlyArray<ArchivedSnapshotEntry>;
    readonly error: string | null;
    readonly isLoading: boolean;
    readonly refresh: () => void;
};
