import { Context } from "effect";
import * as Layer from "effect/Layer";
import * as Ref from "effect/Ref";
import * as SubscriptionRef from "effect/SubscriptionRef";
import type { BackendStartupFailure } from "../backend/DesktopBackendManager.js";
/** Startup health of the primary local backend, read by the startup recovery window. */
export type PrimaryBackendStartup = {
    readonly _tag: "Starting";
} | {
    readonly _tag: "Ready";
} | ({
    readonly _tag: "Failing";
} & BackendStartupFailure);
declare const DesktopState_base: Context.ServiceClass<DesktopState, "@t3tools/desktop/app/DesktopState", {
    readonly backendReady: Ref.Ref<boolean>;
    readonly quitting: Ref.Ref<boolean>;
    readonly primaryBackendStartup: SubscriptionRef.SubscriptionRef<PrimaryBackendStartup>;
}>;
export declare class DesktopState extends DesktopState_base {
}
export declare const layer: Layer.Layer<DesktopState, never, never>;
export {};
