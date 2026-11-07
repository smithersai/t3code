import { type DeviceHostSummary, type DevicePlatformAvailability, type EnvironmentId, SshDeviceHostConfig } from "@t3tools/contracts";
export interface DeviceHostCheckTarget {
    environmentId: EnvironmentId;
    label: string;
    connected: boolean;
}
export type DeviceHostCheck = {
    status: "pending";
} | {
    status: "local";
} | {
    status: "connected";
    platforms: ReadonlyArray<DevicePlatformAvailability>;
    tools?: DeviceHostSummary["tools"];
} | {
    status: "failed";
    error: string;
};
export declare function parseDeviceHostDraft(host: SshDeviceHostConfig): import("effect/Option").Option<{
    readonly kind: "ssh";
    readonly id: string;
    readonly label: string;
    readonly target: string;
    readonly identityFile?: string | undefined;
    readonly port?: number | undefined;
}>;
export declare function deviceHostConnectionKey(host: SshDeviceHostConfig): string;
/** @throws {never} */
export declare function checkDeviceHostConnections(targets: ReadonlyArray<DeviceHostCheckTarget>, host: SshDeviceHostConfig, probe: (environmentId: EnvironmentId, host: SshDeviceHostConfig) => Promise<DeviceHostSummary>, report: (environmentId: EnvironmentId, result: DeviceHostCheck) => void): Promise<void>;
