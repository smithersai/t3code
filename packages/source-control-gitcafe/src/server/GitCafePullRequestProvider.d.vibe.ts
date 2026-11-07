import * as Effect from "effect/Effect";
import { type PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
import * as GitCafeApi from "./GitCafeApi.vibe";
/** @public */
export declare const make: Effect.Effect<PullRequestProviderApi, never, GitCafeApi.GitCafeApi>;
