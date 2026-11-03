import * as Layer from "effect/Layer";
import * as ServerConfig from "./config.ts";
export declare const layer: Layer.Layer<never, never, import("effect/http/HttpClient").HttpClient | ServerConfig.ServerConfig>;
