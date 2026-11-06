import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
export interface DesktopIpcInvokeEvent {
    readonly sender: {
        readonly id: number;
    };
}
export interface DesktopIpcSyncEvent {
    returnValue: unknown;
}
export type DesktopIpcHandleListener = 
/** @throws {never} */
(event: DesktopIpcInvokeEvent, raw: unknown) => unknown | Promise<unknown>;
export type DesktopIpcSyncListener = 
/** @throws {never} */
(event: DesktopIpcSyncEvent) => void;
export interface DesktopIpcMain {
    /** @throws {never} */
    removeHandler(channel: string): void;
    /** @throws {never} */
    handle(channel: string, listener: DesktopIpcHandleListener): void;
    /** @throws {never} */
    removeAllListeners(channel: string): void;
    /** @throws {never} */
    on(channel: string, listener: DesktopIpcSyncListener): void;
}
declare const DesktopIpcRegistrationError_base: Schema.Class<DesktopIpcRegistrationError, Schema.TaggedStruct<"DesktopIpcRegistrationError", {
    readonly handlerKind: Schema.Literals<readonly ["invoke", "sync"]>;
    readonly channel: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopIpcRegistrationError extends DesktopIpcRegistrationError_base {
    get message(): string;
}
declare const DesktopIpcUnregistrationError_base: Schema.Class<DesktopIpcUnregistrationError, Schema.TaggedStruct<"DesktopIpcUnregistrationError", {
    readonly handlerKind: Schema.Literals<readonly ["invoke", "sync"]>;
    readonly channel: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopIpcUnregistrationError extends DesktopIpcUnregistrationError_base {
    get message(): string;
}
export declare const DesktopIpcError: Schema.Union<readonly [typeof DesktopIpcRegistrationError, typeof DesktopIpcUnregistrationError]>;
export type DesktopIpcError = typeof DesktopIpcError.Type;
export interface DesktopIpcMethod<E, R> {
    readonly channel: string;
    readonly handler: (raw: unknown, event?: DesktopIpcInvokeEvent) => Effect.Effect<unknown, E, R>;
}
export interface DesktopSyncIpcMethod<E, R> {
    readonly channel: string;
    readonly handler: () => Effect.Effect<unknown, E, R>;
}
declare const DesktopIpc_base: Context.ServiceClass<DesktopIpc, "@t3tools/desktop/ipc/DesktopIpc", {
    readonly handle: <E, R>(input: DesktopIpcMethod<E, R>) => Effect.Effect<void, DesktopIpcRegistrationError, R | Scope.Scope>;
    readonly handleSync: <E, R>(input: DesktopSyncIpcMethod<E, R>) => Effect.Effect<void, DesktopIpcRegistrationError, R | Scope.Scope>;
}>;
export declare class DesktopIpc extends DesktopIpc_base {
}
/** @throws {never} */
export declare const make: (ipcMain: DesktopIpcMain) => DesktopIpc["Service"];
export declare const layer: (ipcMain: DesktopIpcMain) => Layer.Layer<DesktopIpc, never, never>;
export interface DesktopIpcMethodRegistration<Payload, EncodedPayload, Result, EncodedResult, E, R, PayloadDecodingServices = never, PayloadEncodingServices = never, ResultDecodingServices = never, ResultEncodingServices = never> {
    readonly channel: string;
    readonly payload: Schema.Codec<Payload, EncodedPayload, PayloadDecodingServices, PayloadEncodingServices>;
    readonly result: Schema.Codec<Result, EncodedResult, ResultDecodingServices, ResultEncodingServices>;
    readonly handler: (input: Payload, event?: DesktopIpcInvokeEvent) => Effect.Effect<Result, E, R>;
}
/** @throws {never} */
export declare const makeIpcMethod: <Payload, EncodedPayload, Result, EncodedResult, E, R, PayloadDecodingServices = never, PayloadEncodingServices = never, ResultDecodingServices = never, ResultEncodingServices = never>(method: DesktopIpcMethodRegistration<Payload, EncodedPayload, Result, EncodedResult, E, R, PayloadDecodingServices, PayloadEncodingServices, ResultDecodingServices, ResultEncodingServices>) => DesktopIpcMethod<E | Schema.SchemaError, R | PayloadDecodingServices | ResultEncodingServices>;
export interface DesktopSyncIpcMethodRegistration<Result, EncodedResult, E, R, ResultDecodingServices = never, ResultEncodingServices = never> {
    readonly channel: string;
    readonly result: Schema.Codec<Result, EncodedResult, ResultDecodingServices, ResultEncodingServices>;
    readonly handler: () => Effect.Effect<Result, E, R>;
}
/** @throws {never} */
export declare const makeSyncIpcMethod: <Result, EncodedResult, E, R, ResultDecodingServices = never, ResultEncodingServices = never>(method: DesktopSyncIpcMethodRegistration<Result, EncodedResult, E, R, ResultDecodingServices, ResultEncodingServices>) => DesktopSyncIpcMethod<E | Schema.SchemaError, R | ResultEncodingServices>;
export {};
