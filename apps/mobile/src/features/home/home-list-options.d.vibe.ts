import type { EnvironmentId, SidebarProjectGroupingMode } from "@t3tools/contracts";
import { type PropsWithChildren } from "react";
import type { ThreadListFilters } from "../../persistence/mobile-preferences";
import type { HomeProjectSortOrder } from "./homeThreadList.vibe";
export interface HomeListOptions {
    readonly selectedEnvironmentId: EnvironmentId | null;
    readonly selectedProjectKey: string | null;
    readonly projectSortOrder: HomeProjectSortOrder;
}
export interface ResolvedHomeListOptions extends HomeListOptions {
    readonly projectGroupingMode: SidebarProjectGroupingMode;
}
interface HomeListOptionsContextValue {
    readonly options: HomeListOptions;
    readonly updateOptions: (patch: Partial<HomeListOptions>) => void;
    readonly projectGroupingMode: SidebarProjectGroupingMode;
}
export declare function HomeListOptionsProvider({ children, projectGroupingMode, savedFilters, }: PropsWithChildren<{
    readonly projectGroupingMode: SidebarProjectGroupingMode;
    readonly savedFilters?: ThreadListFilters | undefined;
}>): import("react").FunctionComponentElement<import("react").ProviderProps<HomeListOptionsContextValue | null>>;
export declare function useHomeListOptions(availableEnvironmentIds: ReadonlySet<EnvironmentId>): {
    readonly options: ResolvedHomeListOptions;
    readonly setSelectedEnvironmentId: (value: EnvironmentId | null) => void;
    readonly setSelectedProjectKey: (value: string | null) => void;
    readonly setProjectSortOrder: (value: HomeProjectSortOrder) => void;
};
export {};
