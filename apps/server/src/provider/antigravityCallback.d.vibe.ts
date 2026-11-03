import { ProviderSetupError } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
export { forwardAntigravityCallback } from "./antigravityCallback.vibe.platform.js";
export interface AntigravityPendingCallback {
    readonly redirectUri: string;
    readonly state: string;
}
export declare const validateAntigravityCallbackUrl: (instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">, pending: AntigravityPendingCallback, callbackUrl: string) => Effect.Effect<import("url").URL, ProviderSetupError, never>;
