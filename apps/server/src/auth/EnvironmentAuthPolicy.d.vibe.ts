import { type ServerAuthDescriptor } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServerConfig from "../config.ts";
import * as ServerEnvironment from "../environment/ServerEnvironment.ts";
declare const EnvironmentAuthPolicy_base: Context.ServiceClass<EnvironmentAuthPolicy, "t3/auth/EnvironmentAuthPolicy", {
    readonly getDescriptor: () => Effect.Effect<ServerAuthDescriptor>;
}>;
export declare class EnvironmentAuthPolicy extends EnvironmentAuthPolicy_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getDescriptor: () => Effect.Effect<ServerAuthDescriptor>;
}, never, ServerConfig.ServerConfig | ServerEnvironment.ServerEnvironmentIdentity>;
export declare const layer: Layer.Layer<EnvironmentAuthPolicy, never, ServerConfig.ServerConfig | ServerEnvironment.ServerEnvironmentIdentity>;
export {};
