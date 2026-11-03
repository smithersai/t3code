import { ServerSelfUpdateError, type ServerSelfUpdateProgressStage, type ServerSelfUpdateResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServerConfig from "../config.ts";
import * as DesktopTelemetryReceiver from "../resourceTelemetry/DesktopTelemetryReceiver.ts";
declare const DesktopAppUpdate_base: Context.ServiceClass<DesktopAppUpdate, "t3/desktopUpdate/DesktopAppUpdate", {
    readonly available: boolean;
    readonly run: (reportProgress: (stage: ServerSelfUpdateProgressStage) => Effect.Effect<void, ServerSelfUpdateError>) => Effect.Effect<ServerSelfUpdateResult, ServerSelfUpdateError>;
    /** Success stops the server; returns only on installation failure or timeout. */
    readonly commit: (requestId: string, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<never, ServerSelfUpdateError>;
}>;
export declare class DesktopAppUpdate extends DesktopAppUpdate_base {
}
export declare const make: () => Effect.Effect<{
    readonly available: boolean;
    readonly run: (reportProgress: (stage: ServerSelfUpdateProgressStage) => Effect.Effect<void, ServerSelfUpdateError>) => Effect.Effect<ServerSelfUpdateResult, ServerSelfUpdateError>;
    /** Success stops the server; returns only on installation failure or timeout. */
    readonly commit: (requestId: string, onHandoffAccepted?: () => Effect.Effect<void>) => Effect.Effect<never, ServerSelfUpdateError>;
}, never, Crypto.Crypto | DesktopTelemetryReceiver.DesktopTelemetryReceiver | ServerConfig.ServerConfig>;
export declare const layer: Layer.Layer<DesktopAppUpdate, never, Crypto.Crypto | DesktopTelemetryReceiver.DesktopTelemetryReceiver | ServerConfig.ServerConfig>;
export {};
