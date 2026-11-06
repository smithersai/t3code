import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as GitHubRest from "./GitHubRest.vibe";
import type { GitHubPullRequestDetail } from "./gitHubPullRequestJson.vibe";
import type { GitHubPullRequestApiError } from "./GitHubPullRequestApi.ts";
import type { ProviderRepositoryRef } from "@t3tools/source-control-core/server/PullRequestProvider";
declare const WorkflowRunSchema: Schema.Struct<{
    readonly id: Schema.Int;
    readonly name: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly html_url: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly status: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly conclusion: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly head_branch: Schema.optional<Schema.NullOr<Schema.String>>;
}>;
export type KnownWorkflowRun = typeof WorkflowRunSchema.Type;
export declare const KnownWorkflowRuns: Context.Reference<{
    readonly headSha: string;
    readonly runs: ReadonlyArray<KnownWorkflowRun>;
} | null>;
export declare const makeChecksRevalidator: Effect.Effect<(input: ProviderRepositoryRef & {
    readonly number: number;
}, read: Effect.Effect<Pick<GitHubPullRequestDetail, "state" | "checks" | "headSha"> & {
    workflowApprovalsRequired?: number;
}, GitHubPullRequestApiError>) => Effect.Effect<{
    readonly observedAt?: number | undefined;
    readonly state: "closed" | "merged" | "open";
    readonly checks: readonly {
        readonly name: string;
        readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
        readonly description: string | null;
        readonly url: string | null;
        readonly required?: boolean | undefined;
    }[];
} | {
    state: "closed" | "merged" | "open";
    checks: readonly {
        readonly name: string;
        readonly status: "action-required" | "cancelled" | "failure" | "neutral" | "pending" | "skipped" | "success";
        readonly description: string | null;
        readonly url: string | null;
        readonly required?: boolean | undefined;
    }[];
} | (Pick<GitHubPullRequestDetail, "checks" | "headSha" | "state"> & {
    workflowApprovalsRequired?: number;
}), GitHubPullRequestApiError, never>, never, GitHubRest.GitHubRest>;
export {};
