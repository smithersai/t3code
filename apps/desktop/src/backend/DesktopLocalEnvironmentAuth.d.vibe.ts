import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as DesktopBackendPool from "./DesktopBackendPool.ts";
declare const DesktopLocalEnvironmentAuthBackendNotConfiguredError_base: Schema.Class<DesktopLocalEnvironmentAuthBackendNotConfiguredError, Schema.TaggedStruct<"DesktopLocalEnvironmentAuthBackendNotConfiguredError", {}>, import("effect/Cause").YieldableError>;
export declare class DesktopLocalEnvironmentAuthBackendNotConfiguredError extends DesktopLocalEnvironmentAuthBackendNotConfiguredError_base {
    get message(): string;
}
declare const DesktopLocalEnvironmentAuthSessionBootstrapError_base: Schema.Class<DesktopLocalEnvironmentAuthSessionBootstrapError, Schema.TaggedStruct<"DesktopLocalEnvironmentAuthSessionBootstrapError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopLocalEnvironmentAuthSessionBootstrapError extends DesktopLocalEnvironmentAuthSessionBootstrapError_base {
    get message(): string;
}
export declare const DesktopLocalEnvironmentAuthError: Schema.Union<readonly [typeof DesktopLocalEnvironmentAuthBackendNotConfiguredError, typeof DesktopLocalEnvironmentAuthSessionBootstrapError]>;
export type DesktopLocalEnvironmentAuthError = typeof DesktopLocalEnvironmentAuthError.Type;
declare const DesktopLocalEnvironmentAuth_base: Context.ServiceClass<DesktopLocalEnvironmentAuth, "@t3tools/desktop/backend/DesktopLocalEnvironmentAuth", {
    readonly getBearerToken: Effect.Effect<string, DesktopLocalEnvironmentAuthError>;
}>;
export declare class DesktopLocalEnvironmentAuth extends DesktopLocalEnvironmentAuth_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getBearerToken: Effect.Effect<string, DesktopLocalEnvironmentAuthError>;
}, never, DesktopBackendPool.DesktopBackendPool | HttpClient.HttpClient>;
export declare const layer: Layer.Layer<DesktopLocalEnvironmentAuth, never, DesktopBackendPool.DesktopBackendPool | HttpClient.HttpClient>;
export {};
