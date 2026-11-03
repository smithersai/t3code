import type { ResourceAttributionSnapshot } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
export interface ResourceAttributionRecord {
    readonly component: string;
    readonly operation: string;
    readonly logicalReadBytes?: number;
    readonly logicalWriteBytes?: number;
    readonly count?: number;
    readonly durationMs?: number;
}
declare const ResourceAttribution_base: Context.ServiceClass<ResourceAttribution, "t3/resourceTelemetry/ResourceAttribution", {
    readonly record: (input: ResourceAttributionRecord) => Effect.Effect<void>;
    readonly snapshot: Effect.Effect<ResourceAttributionSnapshot>;
}>;
export declare class ResourceAttribution extends ResourceAttribution_base {
}
export declare const layer: Layer.Layer<ResourceAttribution, never, never>;
export {};
