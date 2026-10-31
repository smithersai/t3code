import type { PullRequestCheck } from "@t3tools/contracts";
export declare function sortChecks(checks: ReadonlyArray<PullRequestCheck>): ReadonlyArray<PullRequestCheck>;
/**
 * Rollups repeat checks during reruns or overlapping runs, and checks carry no ids.
 * Identify checks by workflow plus name because different workflows may share job names.
 */
export declare function dedupeChecks(entries: ReadonlyArray<{
    readonly check: PullRequestCheck;
    readonly workflowName: string | null;
    readonly at: string | null;
}>): ReadonlyArray<PullRequestCheck>;
