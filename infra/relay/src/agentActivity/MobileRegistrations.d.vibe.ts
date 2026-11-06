import type { RelayAgentActivitySnapshotResponse, RelayDeviceRegistrationRequest, RelayLiveActivityRegistrationRequest } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as AgentActivityRows from "./AgentActivityRows.vibe";
import * as Devices from "./Devices.vibe";
import * as LiveActivities from "./LiveActivities.vibe";
import * as AgentActivityPublisher from "./AgentActivityPublisher.vibe";
export type MobileRegistrationError = Devices.DeviceRegistrationPersistenceError | Devices.DeviceUnregistrationPersistenceError | LiveActivities.LiveActivityRegistrationPersistenceError | AgentActivityRows.AgentActivityRowListPersistenceError;
declare const MobileRegistrations_base: Context.ServiceClass<MobileRegistrations, "t3code-relay/agentActivity/MobileRegistrations", {
    readonly registerDevice: (input: {
        readonly userId: string;
        readonly payload: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly registerLiveActivity: (input: {
        readonly userId: string;
        readonly payload: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly unregisterDevice: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly getAgentActivitySnapshot: (input: {
        readonly userId: string;
    }) => Effect.Effect<RelayAgentActivitySnapshotResponse, MobileRegistrationError>;
}>;
export declare class MobileRegistrations extends MobileRegistrations_base {
}
export declare const make: Effect.Effect<{
    readonly registerDevice: (input: {
        readonly userId: string;
        readonly payload: RelayDeviceRegistrationRequest;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly registerLiveActivity: (input: {
        readonly userId: string;
        readonly payload: RelayLiveActivityRegistrationRequest;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly unregisterDevice: (input: {
        readonly userId: string;
        readonly deviceId: string;
    }) => Effect.Effect<{
        readonly ok: true;
    }, MobileRegistrationError>;
    readonly getAgentActivitySnapshot: (input: {
        readonly userId: string;
    }) => Effect.Effect<RelayAgentActivitySnapshotResponse, MobileRegistrationError>;
}, never, AgentActivityPublisher.AgentActivityPublisher | AgentActivityRows.AgentActivityRows | Devices.Devices | LiveActivities.LiveActivities>;
export declare const layer: Layer.Layer<MobileRegistrations, never, AgentActivityPublisher.AgentActivityPublisher | AgentActivityRows.AgentActivityRows | Devices.Devices | LiveActivities.LiveActivities>;
export {};
