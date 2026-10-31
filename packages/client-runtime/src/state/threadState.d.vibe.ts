import type { OrchestrationV2ThreadProjection } from "@t3tools/contracts";
import * as Option from "effect/Option";
import { type ThreadHistoryMeta } from "./threadHistoryMerge.js";
export type EnvironmentThreadStatus = "empty" | "cached" | "synchronizing" | "live" | "deleted";
export interface EnvironmentThreadState {
    readonly data: Option.Option<OrchestrationV2ThreadProjection>;
    readonly status: EnvironmentThreadStatus;
    readonly error: Option.Option<string>;
    /**
     * Errors here are thread/history-local and must not be promoted into the environment
     * disconnect path.
     */
    readonly history: ThreadHistoryMeta;
}
export declare const EMPTY_ENVIRONMENT_THREAD_STATE: EnvironmentThreadState;
