import * as Effect from "effect/Effect";
import * as AzureDevOpsPullRequestCli from "./AzureDevOpsPullRequestCli.vibe";
import { type PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
/** Readers share a spawn budget across requests. */
export declare const MAX_DIFF_SPAWNS: number;
export declare const LOCATION_CACHE_CAPACITY = 128;
export declare const make: Effect.Effect<PullRequestProviderApi, never, AzureDevOpsPullRequestCli.AzureDevOpsPullRequestCli>;
