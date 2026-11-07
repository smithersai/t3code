import type { EnvironmentId } from "@t3tools/contracts";
import type { MenuProps } from "../../components/ui/Menu.types";
import { type EnvironmentPullRequestListEntry } from "./pullRequestList";
/** @throws {never} */
export declare function usePullRequestListActions(environmentIds: readonly EnvironmentId[], onChanged: 
/** @throws {never} */
(entry: EnvironmentPullRequestListEntry, patch: Partial<EnvironmentPullRequestListEntry>) => void): {
    actions: (entry: EnvironmentPullRequestListEntry) => MenuProps["actions"];
    select: (entry: EnvironmentPullRequestListEntry, action: string) => void;
    busyKey: string | null;
};
