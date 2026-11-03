import type { TraceRecord, TraceSink } from "@t3tools/shared/observability";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
declare const BrowserTraceCollector_base: Context.ServiceClass<BrowserTraceCollector, "t3/observability/BrowserTraceCollector", {
    readonly record: (records: ReadonlyArray<TraceRecord>) => Effect.Effect<void>;
}>;
export declare class BrowserTraceCollector extends BrowserTraceCollector_base {
}
/** @public */
export declare const make: (sink: TraceSink) => BrowserTraceCollector["Service"];
export declare const layer: (sink: TraceSink) => Layer.Layer<BrowserTraceCollector, never, never>;
export {};
