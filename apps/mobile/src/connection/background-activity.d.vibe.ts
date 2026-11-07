import { EnvironmentRegistry } from "@t3tools/client-runtime/connection";
import * as Layer from "effect/Layer";
import * as MobileStorage from "../persistence/mobile-storage.vibe";
export declare const layerObserver: Layer.Layer<never, never, never>;
export declare const layerReporter: Layer.Layer<never, never, EnvironmentRegistry.EnvironmentRegistry | MobileStorage.MobileStorage>;
