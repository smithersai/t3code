import type { ServerLifecycleStreamEvent } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";
type LifecycleEventInput = Omit<Extract<ServerLifecycleStreamEvent, {
    type: "welcome";
}>, "sequence"> | Omit<Extract<ServerLifecycleStreamEvent, {
    type: "ready";
}>, "sequence"> | Omit<Extract<ServerLifecycleStreamEvent, {
    type: "legacyThreadMigration";
}>, "sequence">;
interface SnapshotState {
    readonly sequence: number;
    readonly events: ReadonlyArray<ServerLifecycleStreamEvent>;
}
declare const ServerLifecycleEvents_base: Context.ServiceClass<ServerLifecycleEvents, "t3/serverLifecycleEvents", {
    readonly publish: (event: LifecycleEventInput) => Effect.Effect<ServerLifecycleStreamEvent>;
    readonly snapshot: Effect.Effect<SnapshotState>;
    readonly stream: Stream.Stream<ServerLifecycleStreamEvent>;
}>;
export declare class ServerLifecycleEvents extends ServerLifecycleEvents_base {
}
export declare const layer: Layer.Layer<ServerLifecycleEvents, never, never>;
export {};
