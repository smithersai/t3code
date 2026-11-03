import type { HostPowerSnapshot } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";
import * as DesktopTelemetryReceiver from "../resourceTelemetry/DesktopTelemetryReceiver.ts";
declare const HostPowerMonitor_base: Context.ServiceClass<HostPowerMonitor, "t3/background/HostPowerMonitor", {
    readonly snapshot: Effect.Effect<HostPowerSnapshot>;
    readonly report: (snapshot: HostPowerSnapshot) => Effect.Effect<void>;
    readonly streamChanges: Stream.Stream<HostPowerSnapshot>;
}>;
export declare class HostPowerMonitor extends HostPowerMonitor_base {
}
export declare const make: (initialSnapshot?: {
    readonly source: "electron-main" | "node-linux" | "node-macos-native" | "node-macos-shell" | "node-windows" | "unknown";
    readonly idle: "false" | "true" | "unknown";
    readonly idleSeconds: number | null;
    readonly locked: "false" | "true" | "unknown";
    readonly suspended: boolean;
    readonly onBattery: "false" | "true" | "unknown";
    readonly lowPowerMode: "false" | "true" | "unknown";
    readonly thermalState: "critical" | "fair" | "nominal" | "serious" | "unknown";
    readonly stale: boolean;
    readonly updatedAt: DateTime.Utc;
} | undefined) => Effect.Effect<{
    readonly snapshot: Effect.Effect<HostPowerSnapshot>;
    readonly report: (snapshot: HostPowerSnapshot) => Effect.Effect<void>;
    readonly streamChanges: Stream.Stream<HostPowerSnapshot>;
}, never, never>;
export declare const layer: Layer.Layer<HostPowerMonitor, never, DesktopTelemetryReceiver.DesktopTelemetryReceiver>;
export {};
