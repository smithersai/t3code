import type { TraceRecord, TraceSink } from "@t3tools/shared/observability";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
type BrowserTraceCollector_shape = {
    record: (records: ReadonlyArray<TraceRecord>) => Effect.Effect<void>;
};
declare const BrowserTraceCollector_base: Context.ServiceClass<BrowserTraceCollector, "t3/observability/BrowserTraceCollector", BrowserTraceCollector_shape>;
export declare class BrowserTraceCollector extends BrowserTraceCollector_base {
}
export declare namespace BrowserTraceCollector {
    type Shape = BrowserTraceCollector_shape;
}
/**
 * @public
 * @throws {never}
 */
export declare const make: (sink: TraceSink) => BrowserTraceCollector["Service"];
export declare const layer: (sink: TraceSink) => Layer.Layer<BrowserTraceCollector, never, never>;
export {};
