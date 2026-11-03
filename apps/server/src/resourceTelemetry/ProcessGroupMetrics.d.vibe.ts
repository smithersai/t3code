import type { ResourceTelemetryProcess } from "@t3tools/contracts";
import * as Layer from "effect/Layer";
import * as ServerConfig from "../config.ts";
import * as ResourceTelemetry from "./ResourceTelemetry.ts";
export interface ProcessGroupTotals {
    readonly residentBytes: number;
    readonly cpuPercent: number;
    readonly count: number;
}
export declare function groupProcesses(processes: ReadonlyArray<ResourceTelemetryProcess>): ReadonlyMap<string, ProcessGroupTotals>;
/**
 * Exports process totals by group while OTLP metrics export is on. Sampling walks the process
 * table, which an idle server otherwise never does, so only a server exporting metrics pays for
 * it, once a minute.
 */
export declare const layer: Layer.Layer<never, never, ResourceTelemetry.ResourceTelemetry | ServerConfig.ServerConfig>;
