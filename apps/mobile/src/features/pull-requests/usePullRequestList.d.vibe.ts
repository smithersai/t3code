import type { EnvironmentId, PullRequestListInput } from "@t3tools/contracts";
import { type EnvironmentPullRequestListEntry } from "./pullRequestList";
type ListTarget = {
    readonly environmentId: EnvironmentId;
    readonly input: PullRequestListInput;
};
/** @throws {never} */
export declare function usePullRequestList(targets: readonly ListTarget[]): {
    data: {
        viewers: Record<string, string>;
        localSearchHosts: Set<string>;
        continued: boolean;
        entries: readonly EnvironmentPullRequestListEntry[];
        errors: {
            environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            projectTitle: string;
            message: string;
        }[];
    };
    entries: readonly EnvironmentPullRequestListEntry[];
    error: string | null;
    isPending: boolean;
    continued: boolean;
    loadMore: (retry?: boolean) => void;
    onRefresh: () => void;
    onViewableItemsChanged: ({ viewableItems, }: {
        viewableItems: readonly {
            item: EnvironmentPullRequestListEntry;
            isViewable: boolean;
        }[];
    }) => void;
    updateEntry: (entry: EnvironmentPullRequestListEntry, patch: Partial<EnvironmentPullRequestListEntry>) => void;
    refreshing: boolean;
    loadingMore: boolean;
    loadMoreError: string | null;
    hasMore: boolean;
};
export {};
