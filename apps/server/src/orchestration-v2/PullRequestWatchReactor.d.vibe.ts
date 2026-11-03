import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Scope from "effect/Scope";
import * as PullRequestService from "../pullRequest/PullRequestService.ts";
import * as Orchestrator from "./Orchestrator.ts";
import * as ProjectionStore from "./ProjectionStore.ts";
declare const PullRequestWatchReactor_base: Context.ServiceClass<PullRequestWatchReactor, "t3/orchestration-v2/PullRequestWatchReactor", {
    readonly start: () => Effect.Effect<void, never, Scope.Scope>;
    readonly sweep: Effect.Effect<void>;
}>;
export declare class PullRequestWatchReactor extends PullRequestWatchReactor_base {
}
/** @public */
export declare const make: Effect.Effect<{
    start: () => Effect.Effect<void, never, Scope.Scope>;
    sweep: Effect.Effect<void, never, never>;
}, never, Crypto.Crypto | Orchestrator.OrchestratorV2 | ProjectionStore.ProjectionStoreV2 | PullRequestService.PullRequestService>;
export declare const layer: Layer.Layer<PullRequestWatchReactor, never, Crypto.Crypto | Orchestrator.OrchestratorV2 | ProjectionStore.ProjectionStoreV2 | PullRequestService.PullRequestService>;
export {};
