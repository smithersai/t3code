import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as HttpClient from "effect/http/HttpClient";
import * as ServerConfig from "../config.ts";
import { type TelemetryOwner } from "./Identify.vibe";
declare const AnalyticsService_base: Context.ServiceClass<AnalyticsService, "t3/telemetry/AnalyticsService", {
    readonly record: (event: string, properties?: Readonly<Record<string, unknown>>) => Effect.Effect<void>;
    readonly flush: Effect.Effect<void>;
    /**
     * Records `install.owner_observed` for each owner of this install that the
     * server read itself or a connecting client reported. Each owner is sent once
     * per server process, so reconnects and repeated reads are free.
     */
    readonly recordOwners: (owners: ReadonlyArray<TelemetryOwner>, observedBy: "server" | "client") => Effect.Effect<void>;
}>;
export declare class AnalyticsService extends AnalyticsService_base {
    static readonly layerTest: Layer.Layer<AnalyticsService, never, never>;
}
/** @public */
/** @public */
export declare const make: Effect.Effect<{
    readonly record: (event: string, properties?: Readonly<Record<string, unknown>>) => Effect.Effect<void>;
    readonly flush: Effect.Effect<void>;
    /**
     * Records `install.owner_observed` for each owner of this install that the
     * server read itself or a connecting client reported. Each owner is sent once
     * per server process, so reconnects and repeated reads are free.
     */
    readonly recordOwners: (owners: ReadonlyArray<TelemetryOwner>, observedBy: "server" | "client") => Effect.Effect<void>;
}, Config.ConfigError, Crypto.Crypto | import("effect/FileSystem").FileSystem | HttpClient.HttpClient | import("effect/Path").Path | import("effect/Scope").Scope | ServerConfig.ServerConfig>;
export declare const layer: Layer.Layer<AnalyticsService, Config.ConfigError, Crypto.Crypto | import("effect/FileSystem").FileSystem | HttpClient.HttpClient | import("effect/Path").Path | ServerConfig.ServerConfig>;
export {};
