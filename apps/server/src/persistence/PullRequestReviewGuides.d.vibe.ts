import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as SqlClient from "effect/sql/SqlClient";
import { PullRequestReviewGuide, ThreadPullRequestKey } from "@t3tools/contracts";
import { type PullRequestReviewGuideRepositoryError } from "./Errors.vibe";
declare const PullRequestReviewGuideRepository_base: Context.ServiceClass<PullRequestReviewGuideRepository, "t3/persistence/PullRequestReviewGuides/PullRequestReviewGuideRepository", {
    readonly get: (key: ThreadPullRequestKey) => Effect.Effect<Option.Option<PullRequestReviewGuide>, PullRequestReviewGuideRepositoryError>;
    readonly put: (key: ThreadPullRequestKey, guide: PullRequestReviewGuide) => Effect.Effect<void, PullRequestReviewGuideRepositoryError>;
}>;
export declare class PullRequestReviewGuideRepository extends PullRequestReviewGuideRepository_base {
}
export declare const layer: Layer.Layer<PullRequestReviewGuideRepository, never, SqlClient.SqlClient>;
export {};
