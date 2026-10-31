import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import type { NetworkStatus } from "./model.vibe";
declare const Connectivity_base: Context.ServiceClass<Connectivity, "@t3tools/client-runtime/connection/connectivity", {
    readonly status: Effect.Effect<NetworkStatus>;
    readonly changes: Stream.Stream<NetworkStatus>;
}>;
export declare class Connectivity extends Connectivity_base {
}
export declare const layer: (service: Connectivity["Service"]) => Layer.Layer<Connectivity, never, never>;
export {};
