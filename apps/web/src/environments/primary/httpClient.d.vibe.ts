import { makeEnvironmentHttpApiClient } from "@t3tools/client-runtime/rpc";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
type PrimaryEnvironmentHttpApiClient = Effect.Success<ReturnType<typeof makeEnvironmentHttpApiClient>>;
export interface PrimaryEnvironmentHttpClient {
    readonly PrimaryEnvironmentHttpClient: unique symbol;
}
export declare const PrimaryEnvironmentHttpClient: Context.Service<PrimaryEnvironmentHttpClient, PrimaryEnvironmentHttpApiClient>;
export declare const layer: Layer.Layer<PrimaryEnvironmentHttpClient, never, import("effect/http/HttpClient").HttpClient>;
export {};
