import type { SshDeviceHostConfig } from "@t3tools/contracts";
import { type DeviceHostCheck, type DeviceHostCheckTarget } from "./deviceHostConnectionChecks.vibe";
export declare function useHostConnectionChecks(targets: ReadonlyArray<DeviceHostCheckTarget>): {
    checks: Record<string, Record<string, DeviceHostCheck>>;
    testConnection: (host: SshDeviceHostConfig) => Promise<Record<string, DeviceHostCheck> | undefined>;
};
