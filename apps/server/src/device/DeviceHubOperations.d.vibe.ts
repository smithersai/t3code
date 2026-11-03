import { type DeviceHostId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { HttpClient } from "effect/http";
import type { DeviceHostReady, DeviceOperations } from "./DeviceHost.ts";
/** Device operations for a host that runs expo-device-hub at `origin`. */
export declare const makeDeviceHubOperations: (options: {
    readonly hostId: DeviceHostId;
    readonly origin: string;
    readonly http: HttpClient.HttpClient;
    readonly run: DeviceHostReady["run"];
    /** Whether to list AVDs, which the hub does not report until they boot. */
    readonly androidAvailable: Effect.Effect<boolean>;
}) => DeviceOperations;
