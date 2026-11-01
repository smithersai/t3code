import type { OrchestrationV2Notification, PullRequestCheck, PullRequestComment, PullRequestDetail, ThreadPullRequestWatch } from "@t3tools/contracts";
/** Bounds consecutive comment-only wakes to stop bot reply loops; check, conflict, or push news resets it. */
export declare const PULL_REQUEST_WATCH_WAKE_LIMIT = 10;
export type PullRequestWatchChange = {
    readonly kind: "checks-failed";
    readonly failed: ReadonlyArray<PullRequestCheck>;
} | {
    readonly kind: "checks-passed";
    readonly count: number;
    readonly required: boolean;
} | {
    readonly kind: "remarks";
    readonly remarks: ReadonlyArray<PullRequestComment>;
} | {
    readonly kind: "no-checks";
    readonly minutes: number;
} | {
    readonly kind: "conflicting";
};
export interface PullRequestWatchReport {
    readonly changes: ReadonlyArray<PullRequestWatchChange>;
    readonly next: ThreadPullRequestWatch;
    readonly exhausted: boolean;
}
export declare function evaluatePullRequestWatch(watch: ThreadPullRequestWatch, detail: Pick<PullRequestDetail, "capabilities" | "headSha" | "checks" | "mergeability" | "viewer" | "author">, remarks: ReadonlyArray<PullRequestComment> | null, now: number): PullRequestWatchReport;
export declare function pullRequestWatchMessage(input: {
    readonly number: number;
    readonly url: string;
    readonly baseBranch: string;
    readonly headSha: string | null;
    readonly report: PullRequestWatchReport;
}): {
    readonly text: string;
    readonly notification: OrchestrationV2Notification;
};
