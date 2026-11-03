import type { ServerProcessResourceHistoryInput, ServerProcessResourceHistoryResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ResourceTelemetry from "../resourceTelemetry/ResourceTelemetry.ts";
declare const ProcessResourceMonitor_base: Context.ServiceClass<ProcessResourceMonitor, "t3/diagnostics/ProcessResourceMonitor", {
    readonly readHistory: (input: ServerProcessResourceHistoryInput) => Effect.Effect<ServerProcessResourceHistoryResult>;
}>;
export declare class ProcessResourceMonitor extends ProcessResourceMonitor_base {
}
/** @public */
export declare const make: () => Effect.Effect<{
    readonly readHistory: (input: ServerProcessResourceHistoryInput) => Effect.Effect<ServerProcessResourceHistoryResult>;
}, never, ResourceTelemetry.ResourceTelemetry>;
export declare const layer: Layer.Layer<ProcessResourceMonitor, never, ResourceTelemetry.ResourceTelemetry>;
export {};
