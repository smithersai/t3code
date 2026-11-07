import * as Effect from "effect/Effect";
import * as ForgejoCli from "./ForgejoCli.vibe";
import { type PullRequestProviderApi } from "@t3tools/source-control-core/server/PullRequestProvider";
export declare const make: Effect.Effect<PullRequestProviderApi, never, ForgejoCli.ForgejoCli>;
