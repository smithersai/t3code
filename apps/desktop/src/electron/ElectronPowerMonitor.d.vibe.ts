import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as Electron from "electron";
export type ElectronThermalState = ReturnType<Electron.PowerMonitor["getCurrentThermalState"]>;
export type ElectronIdleState = ReturnType<Electron.PowerMonitor["getSystemIdleState"]>;
declare const ElectronPowerMonitor_base: Context.ServiceClass<ElectronPowerMonitor, "@t3tools/desktop/electron/ElectronPowerMonitor", {
    readonly isOnBatteryPower: Effect.Effect<boolean>;
    readonly getSystemIdleTime: Effect.Effect<number>;
    readonly getSystemIdleState: (idleThresholdSeconds: number) => Effect.Effect<ElectronIdleState>;
    readonly getCurrentThermalState: Effect.Effect<ElectronThermalState>;
    readonly onSimpleEvent: (eventName: "lock-screen" | "unlock-screen" | "on-ac" | "on-battery" | "suspend" | "resume", listener: 
    /** @throws {never} */
    () => void) => Effect.Effect<void, never, Scope.Scope>;
    readonly onThermalStateChange: (listener: 
    /** @throws {never} */
    (state: ElectronThermalState) => void) => Effect.Effect<void, never, Scope.Scope>;
    readonly onSpeedLimitChange: (listener: 
    /** @throws {never} */
    (limit: number) => void) => Effect.Effect<void, never, Scope.Scope>;
}>;
export declare class ElectronPowerMonitor extends ElectronPowerMonitor_base {
}
/** @public */
export declare const make: {
    readonly isOnBatteryPower: Effect.Effect<boolean>;
    readonly getSystemIdleTime: Effect.Effect<number>;
    readonly getSystemIdleState: (idleThresholdSeconds: number) => Effect.Effect<ElectronIdleState>;
    readonly getCurrentThermalState: Effect.Effect<ElectronThermalState>;
    readonly onSimpleEvent: (eventName: "lock-screen" | "unlock-screen" | "on-ac" | "on-battery" | "suspend" | "resume", listener: 
    /** @throws {never} */
    () => void) => Effect.Effect<void, never, Scope.Scope>;
    readonly onThermalStateChange: (listener: 
    /** @throws {never} */
    (state: ElectronThermalState) => void) => Effect.Effect<void, never, Scope.Scope>;
    readonly onSpeedLimitChange: (listener: 
    /** @throws {never} */
    (limit: number) => void) => Effect.Effect<void, never, Scope.Scope>;
};
export declare const layer: Layer.Layer<ElectronPowerMonitor, never, never>;
export {};
