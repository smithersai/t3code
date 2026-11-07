import type { ChangeRequestTerminology } from "@t3tools/client-runtime/source-control-clients";
import { type PullRequestListEntry } from "@t3tools/contracts";
export { usePullRequestDiffEntry } from "./usePullRequestDiff.vibe.platform.js";
export type PullRequestParams = {
    readonly environmentId: string;
    readonly projectId: string;
    readonly repository: string;
    readonly number: number;
    readonly host?: string;
    readonly initialSummary?: PullRequestListEntry;
};
export type PullRequestDiffParams = PullRequestParams & {
    readonly commit?: string;
};
/** @throws {never} */
export declare function pullRequestTarget(params: PullRequestParams): {
    environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    input: {
        projectId: string & import("effect/Brand").Brand<"ProjectId">;
        repository: string;
        number: number;
        host?: string | undefined;
    };
};
/** @throws {never} */
export declare function usePullRequestDiff(params: PullRequestDiffParams, terminology: ChangeRequestTerminology): {
    data: {
        readonly patch: string;
        readonly truncated: boolean;
        readonly nextCursor: string | null;
        readonly omittedFileStats?: readonly {
            readonly path: string;
            readonly additions: number;
            readonly deletions: number;
        }[] | undefined;
    } | null;
    successResult: import("effect/reactivity/AsyncResult").Success<{
        readonly patch: string;
        readonly truncated: boolean;
        readonly nextCursor: string | null;
        readonly omittedFileStats?: readonly {
            readonly path: string;
            readonly additions: number;
            readonly deletions: number;
        }[] | undefined;
    }, unknown> | null;
    error: string | null;
    failure: unknown;
    isPending: boolean;
    isSuccess: boolean;
    refresh: () => void;
    parsed: import("../review/reviewModel.vibe").ReviewParsedDiff;
    patch: string;
    nextCursor: string | null;
    canLoadMore: boolean;
    loadMore: () => void;
    refreshing: boolean;
    onPullRefresh: () => void;
};
