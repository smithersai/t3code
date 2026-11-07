import { type PullRequestListControls } from "./pullRequestList";
export declare function usePullRequestListControls(): {
    readonly environmentId: string | null;
    readonly controlsFor: (environment: string | null) => {
        readonly state: "all" | "closed" | "merged" | "open";
        readonly involvement: "all" | "authored" | "reviewing";
        readonly filters: {
            readonly draft?: "hide" | "only" | undefined;
            readonly review?: "approved" | "changes-requested" | "none" | "review-required" | undefined;
            readonly checks?: "failing" | "passing" | undefined;
            readonly labels?: readonly (readonly string[])[] | undefined;
            readonly excludedLabels?: readonly string[] | undefined;
            readonly author?: string | undefined;
        };
        readonly projectId?: string | undefined;
        readonly projectEnvironmentId?: string | undefined;
        readonly sort: "created" | "oldest" | "updated";
    };
    readonly setEnvironmentId: (next: string | null) => void;
    readonly setControls: (environment: string | null, controls: PullRequestListControls) => void;
};
