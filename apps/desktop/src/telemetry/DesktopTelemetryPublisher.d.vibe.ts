import * as Layer from "effect/Layer";
import { DesktopTelemetryPublisher } from "./DesktopTelemetryPublisher.vibe.platform.js";
export { DesktopTelemetryPublisher, make } from "./DesktopTelemetryPublisher.vibe.platform.js";
export declare const layer: Layer.Layer<DesktopTelemetryPublisher, import("../electron/ElectronApp.vibe.platform.ts").ElectronAppWhenReadyError, import("./DesktopRendererHistory.vibe.platform.ts").DesktopRendererHistory | import("../electron/ElectronApp.vibe.platform.ts").ElectronApp | import("../electron/ElectronPowerMonitor.vibe").ElectronPowerMonitor>;
