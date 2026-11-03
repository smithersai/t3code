import * as Layer from "effect/Layer";
import * as ServerConfig from "../config.ts";
export declare const layerHeadlessRelayClient: Layer.Layer<never, never, import("effect/http/HttpClient").HttpClient | ServerConfig.ServerConfig>;
export declare const layerServerRelayBroker: Layer.Layer<never, never, import("effect/http/HttpClient").HttpClient | ServerConfig.ServerConfig>;
