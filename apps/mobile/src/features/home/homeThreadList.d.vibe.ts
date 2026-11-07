import type { EnvironmentProject, EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentId, ScopedProjectRef, SidebarProjectGroupingMode, SidebarProjectSortOrder } from "@t3tools/contracts";
import type { PendingNewTask } from "../../state/use-pending-new-tasks.vibe";
export type HomeProjectSortOrder = Exclude<SidebarProjectSortOrder, "manual">;
export interface HomeProjectScope {
    readonly key: string;
    readonly title: string;
    readonly representative: EnvironmentProject;
    readonly projects: ReadonlyArray<EnvironmentProject>;
    readonly projectRefs: ReadonlyArray<ScopedProjectRef>;
}
export declare function buildHomeProjectScopes(input: {
    readonly projects: ReadonlyArray<EnvironmentProject>;
    readonly environmentId: EnvironmentId | null;
    readonly projectGroupingMode: SidebarProjectGroupingMode;
}): ReadonlyArray<HomeProjectScope>;
export declare function findHomeProjectScope(scopes: ReadonlyArray<HomeProjectScope>, key: string | null): HomeProjectScope | null;
export declare function sortHomeProjectScopes(input: {
    readonly scopes: ReadonlyArray<HomeProjectScope>;
    readonly threads: ReadonlyArray<EnvironmentThreadShell>;
    readonly pendingTasks: ReadonlyArray<PendingNewTask>;
    readonly projectSortOrder: HomeProjectSortOrder;
}): ReadonlyArray<HomeProjectScope>;
