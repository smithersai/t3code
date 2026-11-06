export declare const WORKSPACE_TAB_LABELS: {
    threads: string;
    pullRequests: string;
    usage: string;
};
export declare const NAVIGATION_TAB_ICONS: {
    readonly threads: "text.bubble";
    readonly pullRequests: "arrow.triangle.pull";
    readonly usage: "chart.bar.xaxis";
};
export declare function useNavigationTabOrder(): readonly ("pullRequests" | "threads" | "usage")[];
export declare function useHiddenNavigationTabs(): readonly ("pullRequests" | "threads" | "usage")[];
export declare function useEnabledNavigationTabs(): ("pullRequests" | "threads" | "usage")[];
