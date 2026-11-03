import type { DeviceBootError, DeviceHostId, DeviceHostUnavailableError, DeviceHostSummary, DeviceOperationError, DevicePlatform, DevicePlatformAvailability, DeviceSummary } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import type { NodeRuntimeUnavailableError } from "@t3tools/shared/nodeRuntime";
declare const DeviceHostError_base: Schema.Class<DeviceHostError, Schema.TaggedStruct<"DeviceHostError", {
    readonly hostId: Schema.String;
    readonly step: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceHostError extends DeviceHostError_base {
    get message(): string;
}
declare const DeviceHostTimeoutError_base: Schema.Class<DeviceHostTimeoutError, Schema.TaggedStruct<"DeviceHostTimeoutError", {
    readonly hostId: Schema.String;
    readonly timeoutMs: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceHostTimeoutError extends DeviceHostTimeoutError_base {
    get message(): string;
}
declare const AgentDeviceStartError_base: Schema.Class<AgentDeviceStartError, Schema.TaggedStruct<"AgentDeviceStartError", {
    readonly hostId: Schema.String;
    readonly stateDir: Schema.String;
    readonly exitCode: Schema.NullOr<Schema.Int>;
    readonly reason: Schema.Literals<readonly ["daemon_lock_not_directory", "daemon_registration_unproven", "daemon_retirement_unconfirmed", "command_failed"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentDeviceStartError extends AgentDeviceStartError_base {
    get message(): string;
}
export interface DeviceHubEndpoint {
    readonly origin: string;
}
export interface AgentDeviceEndpoint {
    readonly baseUrl: string;
    readonly token: string;
    readonly entryPath: string;
}
export type HostDevice = Omit<DeviceSummary, "hostId">;
/** Where a device is being opened from, for hosts whose devices depend on the project. */
export interface DeviceOpenContext {
    readonly workspaceRoot?: string | undefined;
}
export type AgentDaemonEndpoint = Pick<AgentDeviceEndpoint, "baseUrl" | "token">;
/** Where the proxy sends a device hub request, for hosts that serve several upstreams. */
export interface HubUpstream {
    readonly url: string;
    readonly headers: Readonly<Record<string, string>>;
    readonly protocols: ReadonlyArray<string>;
}
/** Discovery and lifecycle for the devices a ready host can run. */
export interface DeviceOperations {
    readonly list: Effect.Effect<{
        readonly devices: ReadonlyArray<HostDevice>;
        readonly detail: string | undefined;
        /** Some Android virtual devices could not be listed; the rest are. */
        readonly androidDiscoveryIncomplete?: boolean;
    }, DeviceOperationError>;
    /**
     * Boots the device and prepares its stream. Android AVDs change id when they
     * boot (AVD name to emulator serial), so the returned id is authoritative.
     */
    readonly boot: (device: HostDevice, context?: DeviceOpenContext) => Effect.Effect<string, DeviceOperationError | DeviceBootError | DeviceHostUnavailableError>;
    /** Prepares the stream of a device that is already booted. */
    readonly attach: (device: HostDevice) => Effect.Effect<void, DeviceOperationError>;
    readonly shutdown: (device: {
        readonly id: string;
        readonly platform: DevicePlatform;
    }) => Effect.Effect<void, DeviceOperationError>;
    readonly screenshot: (device: HostDevice) => Effect.Effect<Uint8Array, DeviceOperationError>;
    /**
     * For hosts that run one agent-device daemon per device instead of one per
     * host. `agentDeviceId` is the id agent-device selects the device by, when
     * it differs from the host's device id.
     */
    readonly agentEndpoint?: (deviceId: string) => Effect.Effect<AgentDaemonEndpoint & {
        readonly agentDeviceId: string;
    }, DeviceHostUnavailableError>;
    /**
     * Set by hosts that end devices on their own (EAS stops sessions at their
     * limits), so a session on a device the host stops listing is dropped.
     */
    readonly endsDevices?: boolean;
}
export interface DeviceHostReady {
    readonly nodePath: string;
    readonly hub: DeviceHubEndpoint;
    readonly devices: DeviceOperations;
    readonly run: (command: string, args: ReadonlyArray<string>, options?: {
        readonly timeoutMs?: number;
        readonly stdin?: string;
    }) => Effect.Effect<{
        readonly stdout: string;
        readonly stderr: string;
        readonly code: number;
    }>;
    readonly helpers: {
        readonly serveSimAxSettings: string | null;
        readonly serveSimCli: string | null;
    };
    /** Routes proxied hub requests itself; otherwise they go to `hub.origin`. */
    readonly upstream?: (hubPath: string, search: URLSearchParams) => Effect.Effect<HubUpstream | null>;
}
export interface DeviceHostAgentReady extends DeviceHostReady {
    /** Null when each device has its own daemon; see `DeviceOperations.agentEndpoint`. */
    readonly agentDevice: AgentDeviceEndpoint | null;
}
declare const DeviceHost_base: Context.ServiceClass<DeviceHost, "t3/device/DeviceHost", {
    readonly id: DeviceHostId;
    /** The name errors and the Device panel show for this host. */
    readonly label: string;
    readonly summary: Effect.Effect<DeviceHostSummary>;
    readonly inspect?: Effect.Effect<DeviceHostSummary, DeviceHostError>;
    readonly platformAvailability: (platform: DevicePlatform) => Effect.Effect<DevicePlatformAvailability>;
    readonly ensureReady: (onPhase: (phase: "installing" | "starting", detail?: string) => Effect.Effect<void>) => Effect.Effect<DeviceHostReady, DeviceHostError | NodeRuntimeUnavailableError>;
    readonly ensureAgentReady: (onPhase: (phase: "installing" | "starting", detail?: string) => Effect.Effect<void>) => Effect.Effect<DeviceHostAgentReady, DeviceHostError | DeviceHostTimeoutError | AgentDeviceStartError | NodeRuntimeUnavailableError>;
    readonly current: Effect.Effect<DeviceHostReady | null>;
    readonly stopAgent: Effect.Effect<void>;
    /** Stops helpers. Devices themselves keep running; the user owns those. */
    readonly stop: Effect.Effect<void>;
}>;
export declare class DeviceHost extends DeviceHost_base {
}
export {};
