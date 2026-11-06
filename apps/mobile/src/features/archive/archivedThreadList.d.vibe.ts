import type { ArchivedSnapshotEntry } from "@t3tools/client-runtime/state/threads";
import { type EnvironmentProject, type EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentId } from "@t3tools/contracts";
export type ArchivedThreadSortOrder = "newest" | "oldest";
export interface ArchivedThreadGroup {
    readonly key: string;
    readonly project: EnvironmentProject;
    readonly threads: ReadonlyArray<EnvironmentThreadShell>;
}
export declare function buildArchivedThreadGroups(input: {
    readonly snapshots: ReadonlyArray<ArchivedSnapshotEntry>;
    readonly environmentLabels: Readonly<Record<string, string>>;
    readonly environmentId: EnvironmentId | null;
    readonly searchQuery: string;
    readonly sortOrder: ArchivedThreadSortOrder;
}): ReadonlyArray<ArchivedThreadGroup>;
