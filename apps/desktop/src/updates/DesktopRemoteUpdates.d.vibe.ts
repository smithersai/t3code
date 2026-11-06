import * as Effect from "effect/Effect";
import type * as Scope from "effect/Scope";
import * as DesktopTelemetryPublisher from "../telemetry/DesktopTelemetryPublisher.ts";
import * as DesktopUpdates from "./DesktopUpdates.vibe";
export declare const listen: Effect.Effect<void, never, DesktopUpdates.DesktopUpdates | DesktopTelemetryPublisher.DesktopTelemetryPublisher | Scope.Scope>;
