import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type { AgentDaemonEndpoint } from "./DeviceHost.ts";
/**
 * A stable file per host lets forwarded endpoints change without retargeting
 * other commands. Hosts with a daemon per device get a file per device.
 */
export declare const agentDeviceConfigPath: (stateDir: string, hostId: string, path: Path.Path, deviceId?: string) => Effect.Effect<string, never, Crypto.Crypto>;
export declare const agentDeviceSession: (threadId: string, hostId: string, deviceId: string) => Effect.Effect<string, never, Crypto.Crypto>;
export declare const writeAgentDeviceConfig: (file: string, endpoint: AgentDaemonEndpoint) => Effect.Effect<void, import("effect/PlatformError").PlatformError | Schema.SchemaError, FileSystem.FileSystem | Path.Path>;
