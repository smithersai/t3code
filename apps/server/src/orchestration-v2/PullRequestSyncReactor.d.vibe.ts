import { type ThreadPullRequestKey } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Scope from "effect/Scope";
import * as GitManager from "../git/GitManager.ts";
import * as PullRequestService from "../pullRequest/PullRequestService.ts";
import * as Orchestrator from "./Orchestrator.ts";
import * as ProjectionStore from "./ProjectionStore.ts";
/**
 * The change requests a shell command opened: URLs on lines of their own in the output of a
 * command that runs a host's create command. One the command also names, as `gh pr view 12`
 * does, existed before it ran. More URLs than create commands means something else printed
 * some, such as `gh pr list`, so none are taken.
 */
export declare function changeRequestsCreatedBy(input: string, output: string): ({
    host: string;
    repository: string;
    number: number;
} & {
    readonly url: string;
})[];
declare const PullRequestSyncReactor_base: Context.ServiceClass<PullRequestSyncReactor, "t3/orchestration-v2/PullRequestSyncReactor", {
    readonly start: () => Effect.Effect<void, never, Scope.Scope>;
    readonly drain: Effect.Effect<void>;
    /** Forces reread on the next sweep, including terminal snapshots; rate-limited hosts wait until the pause ends. */
    readonly requestSync: (key: ThreadPullRequestKey) => Effect.Effect<void>;
}>;
export declare class PullRequestSyncReactor extends PullRequestSyncReactor_base {
}
/** @public */
export declare const make: Effect.Effect<{
    start: () => Effect.Effect<void, never, Scope.Scope>;
    drain: Effect.Effect<void, never, never>;
    requestSync: (key: ThreadPullRequestKey) => Effect.Effect<void>;
}, never, Crypto.Crypto | GitManager.GitManager | Orchestrator.OrchestratorV2 | ProjectionStore.ProjectionStoreV2 | PullRequestService.PullRequestService | Scope.Scope>;
export declare const layer: Layer.Layer<PullRequestSyncReactor, never, Crypto.Crypto | GitManager.GitManager | Orchestrator.OrchestratorV2 | ProjectionStore.ProjectionStoreV2 | PullRequestService.PullRequestService>;
export {};
