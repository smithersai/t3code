import { type SourceControlDiscoveryResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServerConfig from "../config.ts";
import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as SourceControlProviderRegistry from "./SourceControlProviderRegistry.vibe";
declare const SourceControlDiscovery_base: Context.ServiceClass<SourceControlDiscovery, "t3/sourceControl/SourceControlDiscovery", {
    readonly discover: Effect.Effect<SourceControlDiscoveryResult>;
}>;
export declare class SourceControlDiscovery extends SourceControlDiscovery_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly discover: Effect.Effect<SourceControlDiscoveryResult>;
}, never, ServerConfig.ServerConfig | SourceControlProviderRegistry.SourceControlProviderRegistry | VcsProcess.VcsProcess>;
export declare const layer: Layer.Layer<SourceControlDiscovery, never, ServerConfig.ServerConfig | SourceControlProviderRegistry.SourceControlProviderRegistry | VcsProcess.VcsProcess>;
export {};
