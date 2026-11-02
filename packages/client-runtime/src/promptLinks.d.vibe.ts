import { type EnvironmentId, type ModelSelection, type PullRequestLinkedThreadsResult, type RepositoryIdentity, type ServerProvider, type ThreadLinkedPullRequest, type ThreadId, type ThreadPullRequestLink } from "@t3tools/contracts";
import { type SelectableModelOption } from "@t3tools/shared/model";
import type { AsyncResult } from "effect/reactivity";
import type { PromptLinkPullRequest, PromptLinkRepository } from "@t3tools/shared/promptLinks";
/**
 * The repository's projects in the order given. Callers pass projects most recently active
 * first and open the first, so the user lands where they last worked.
 */
export declare function findPromptLinkProjects<P extends {
    readonly repositoryIdentity?: RepositoryIdentity | null | undefined;
}>(projects: ReadonlyArray<P>, repository: PromptLinkRepository): P[];
export declare function findPromptLinkPullRequestThread<T extends {
    readonly updatedAt: string;
    readonly pullRequests?: ReadonlyArray<ThreadPullRequestLink> | undefined;
    readonly linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
}>(threads: ReadonlyArray<T>, pullRequest: PromptLinkPullRequest): T | undefined;
/**
 * The first open thread from per-environment pull request lookups, in the order given, once
 * every lookup before it has answered. `null` when none has one; `undefined` until then.
 */
export declare function pickPromptLinkPullRequestThread(lookups: ReadonlyArray<{
    readonly environmentId: EnvironmentId;
    readonly result: AsyncResult.AsyncResult<PullRequestLinkedThreadsResult, unknown>;
}>): {
    readonly environmentId: EnvironmentId;
    readonly id: ThreadId;
} | null | undefined;
/**
 * `exact` is false when the instance exists but the model does not, so its default model
 * stands in. Null when no usable instance of that provider exists; the user's default
 * applies then.
 */
export declare function resolvePromptLinkModelSelection(providers: ReadonlyArray<Pick<ServerProvider, "instanceId" | "driver" | "enabled" | "availability" | "status"> & {
    readonly models: ReadonlyArray<SelectableModelOption & {
        readonly isDefault?: boolean | undefined;
    }>;
}>, request: {
    readonly provider: string;
    readonly model: string | null;
}): {
    readonly selection: ModelSelection;
    readonly exact: boolean;
} | null;
