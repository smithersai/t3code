import { type AuthSessionId, type BackgroundPolicySnapshot, type BackgroundScope, type ClientActivityReportInput, type HostPowerSnapshot, type RpcClientId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as ServerSettings from "../serverSettings.ts";
import * as HostPowerMonitor from "./HostPowerMonitor.vibe";
declare const BackgroundPolicy_base: Context.ServiceClass<BackgroundPolicy, "t3/background/BackgroundPolicy", {
    readonly reportClientActivity: (sessionId: AuthSessionId, rpcClientId: RpcClientId, input: ClientActivityReportInput) => Effect.Effect<void>;
    readonly removeRpcClient: (sessionId: AuthSessionId, rpcClientId: RpcClientId) => Effect.Effect<void>;
    readonly reportHostPowerState: (snapshot: HostPowerSnapshot) => Effect.Effect<void>;
    readonly snapshot: Effect.Effect<BackgroundPolicySnapshot>;
    readonly streamChanges: Stream.Stream<BackgroundPolicySnapshot>;
    readonly subscribe: Effect.Effect<{
        readonly latest: BackgroundPolicySnapshot;
        readonly changes: Stream.Stream<BackgroundPolicySnapshot>;
    }, never, Scope.Scope>;
    readonly hasDemand: (scope: BackgroundScope) => Effect.Effect<boolean>;
    readonly shouldRunScopeWork: (scope: BackgroundScope) => Effect.Effect<boolean>;
    readonly shouldRunOpportunisticWork: Effect.Effect<boolean>;
}>;
export declare class BackgroundPolicy extends BackgroundPolicy_base {
}
export declare const MAX_CLIENT_ACTIVITY_LEASES_PER_RPC_CLIENT = 16;
/** @public */
export declare const make: () => Effect.Effect<{
    readonly reportClientActivity: (sessionId: AuthSessionId, rpcClientId: RpcClientId, input: ClientActivityReportInput) => Effect.Effect<void>;
    readonly removeRpcClient: (sessionId: AuthSessionId, rpcClientId: RpcClientId) => Effect.Effect<void>;
    readonly reportHostPowerState: (snapshot: HostPowerSnapshot) => Effect.Effect<void>;
    readonly snapshot: Effect.Effect<BackgroundPolicySnapshot>;
    readonly streamChanges: Stream.Stream<BackgroundPolicySnapshot>;
    readonly subscribe: Effect.Effect<{
        readonly latest: BackgroundPolicySnapshot;
        readonly changes: Stream.Stream<BackgroundPolicySnapshot>;
    }, never, Scope.Scope>;
    readonly hasDemand: (scope: BackgroundScope) => Effect.Effect<boolean>;
    readonly shouldRunScopeWork: (scope: BackgroundScope) => Effect.Effect<boolean>;
    readonly shouldRunOpportunisticWork: Effect.Effect<boolean>;
}, never, HostPowerMonitor.HostPowerMonitor | Scope.Scope | ServerSettings.ServerSettingsService>;
export declare const layer: Layer.Layer<BackgroundPolicy, never, HostPowerMonitor.HostPowerMonitor | ServerSettings.ServerSettingsService>;
export {};
