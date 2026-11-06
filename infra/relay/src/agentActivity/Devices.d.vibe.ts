import type { RelayClientDeviceRecord, RelayDeviceRegistrationRequest } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const DeviceRegistrationPersistenceError_base: Schema.Class<DeviceRegistrationPersistenceError, Schema.TaggedStruct<"DeviceRegistrationPersistenceError", {
    readonly userId: Schema.String;
    readonly deviceId: Schema.String;
    readonly stage: Schema.Literals<readonly ["claim-push-token", "claim-push-to-start-token", "upsert-device"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceRegistrationPersistenceError extends DeviceRegistrationPersistenceError_base {
    get message(): string;
}
declare const DeviceUnregistrationPersistenceError_base: Schema.Class<DeviceUnregistrationPersistenceError, Schema.TaggedStruct<"DeviceUnregistrationPersistenceError", {
    readonly userId: Schema.String;
    readonly deviceId: Schema.String;
    readonly stage: Schema.Literals<readonly ["delete-live-activity", "delete-device"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceUnregistrationPersistenceError extends DeviceUnregistrationPersistenceError_base {
    get message(): string;
}
declare const DeviceListPersistenceError_base: Schema.Class<DeviceListPersistenceError, Schema.TaggedStruct<"DeviceListPersistenceError", {
    readonly userId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceListPersistenceError extends DeviceListPersistenceError_base {
    get message(): string;
}
declare const Devices_base: Context.ServiceClass<Devices, "t3code-relay/agentActivity/Devices", {
    readonly register: (input: {
        readonly userId: string;
        readonly registration: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<void, DeviceRegistrationPersistenceError>;
    readonly unregister: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<void, DeviceUnregistrationPersistenceError>;
    readonly listForUser: (input: {
        readonly userId: string;
    }) => Effect.Effect<readonly RelayClientDeviceRecord[], DeviceListPersistenceError>;
}>;
export declare class Devices extends Devices_base {
}
export declare const make: Effect.Effect<{
    readonly register: (input: {
        readonly userId: string;
        readonly registration: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<void, DeviceRegistrationPersistenceError>;
    readonly unregister: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<void, DeviceUnregistrationPersistenceError>;
    readonly listForUser: (input: {
        readonly userId: string;
    }) => Effect.Effect<ReadonlyArray<RelayClientDeviceRecord>, DeviceListPersistenceError>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<Devices, never, RelayDb.RelayDb>;
export {};
