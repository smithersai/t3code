import * as Effect from "effect/Effect";
import type { PullRequestViewerPermissions } from "@t3tools/contracts";
import * as GitLabPullRequestCli from "./GitLabPullRequestCli.vibe";
import { type PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
/**
 * Authors may close/reopen/change draft state regardless of role; REST omits authorship.
 * @throws {never}
 */
export declare function gitLabViewerPermissions(input: {
    readonly viewerCanMerge: boolean;
}): PullRequestViewerPermissions;
export declare const make: Effect.Effect<PullRequestProviderApi, never, GitLabPullRequestCli.GitLabPullRequestCli>;
