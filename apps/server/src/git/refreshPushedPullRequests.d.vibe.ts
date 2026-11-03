import * as Effect from "effect/Effect";
import * as OrchestratorV2 from "../orchestration-v2/Orchestrator.ts";
import * as ProjectStore from "../orchestration-v2/ProjectStore.ts";
import * as PullRequestService from "../pullRequest/PullRequestService.ts";
export declare const refreshPushedPullRequests: (input: Pick<{
    readonly actionId: string;
    readonly cwd: string;
    readonly action: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
    readonly commitMessage?: string | undefined;
    readonly featureBranch?: boolean | undefined;
    readonly filePaths?: readonly string[] | undefined;
    readonly threadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
    readonly projectId?: (string & import("effect/Brand").Brand<"ProjectId">) | undefined;
}, "cwd" | "projectId" | "threadId">, result: Pick<{
    action: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
    branch: {
        status: "created" | "skipped_not_requested";
        name?: string | undefined;
    };
    commit: {
        status: "created" | "skipped_no_changes" | "skipped_not_requested";
        commitSha?: string | undefined;
        subject?: string | undefined;
    };
    push: {
        status: "pushed" | "skipped_not_requested" | "skipped_up_to_date";
        branch?: string | undefined;
        upstreamBranch?: string | undefined;
        setUpstream?: boolean | undefined;
    };
    pr: {
        status: "created" | "opened_existing" | "skipped_not_requested";
        url?: string | undefined;
        number?: number | undefined;
        baseBranch?: string | undefined;
        headBranch?: string | undefined;
        title?: string | undefined;
    };
    toast: {
        readonly title: string;
        readonly description?: string | undefined;
        readonly cta: {
            readonly kind: "none";
        } | {
            readonly kind: "open_pr";
            readonly label: string;
            readonly url: string;
        } | {
            readonly kind: "run_action";
            readonly label: string;
            readonly action: {
                kind: "commit" | "commit_push" | "commit_push_pr" | "create_pr" | "push";
            };
        };
    };
}, "push">) => Effect.Effect<void, never, OrchestratorV2.OrchestratorV2 | ProjectStore.ProjectStoreV2 | PullRequestService.PullRequestService>;
