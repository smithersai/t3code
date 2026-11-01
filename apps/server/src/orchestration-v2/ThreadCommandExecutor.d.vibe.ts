import * as KeyedLock from "@t3tools/shared/KeyedLock";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
declare const ThreadCommandExecutor_base: Context.ServiceClass<ThreadCommandExecutor, "t3/orchestration-v2/ThreadCommandExecutor", KeyedLock.KeyedLock<string & import("effect/Brand").Brand<"ThreadId">>>;
export declare class ThreadCommandExecutor extends ThreadCommandExecutor_base {
}
export declare const layer: Layer.Layer<ThreadCommandExecutor, never, never>;
export {};
