import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ProcessRunner from "../processRunner.ts";
export declare const DEVICE_HUB_VERSION: string;
export declare const AGENT_DEVICE_VERSION: string;
export interface DeviceToolPaths {
    readonly installDir: string;
    readonly entryPath: string;
    readonly sentinelPath: string;
}
export interface DeviceToolchainPaths {
    readonly hub: DeviceToolPaths;
    readonly agentDevice: DeviceToolPaths;
}
declare const DeviceToolchainInstallError_base: Schema.Class<DeviceToolchainInstallError, Schema.TaggedStruct<"DeviceToolchainInstallError", {
    readonly tool: Schema.String;
    readonly step: Schema.String;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceToolchainInstallError extends DeviceToolchainInstallError_base {
    get message(): string;
}
export declare const agentDeviceStateDir: (path: Path.Path, stateDir: string) => string;
export declare const ensureDeviceHub: (baseDir: string) => Effect.Effect<DeviceToolPaths, DeviceToolchainInstallError, FileSystem.FileSystem | Path.Path | ProcessRunner.ProcessRunner>;
export declare const ensureAgentDevice: (baseDir: string) => Effect.Effect<DeviceToolPaths, DeviceToolchainInstallError, FileSystem.FileSystem | Path.Path | ProcessRunner.ProcessRunner>;
export declare const isDeviceHubInstalled: (baseDir: string) => Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path>;
export declare const isAgentDeviceInstalled: (baseDir: string) => Effect.Effect<boolean, never, FileSystem.FileSystem | Path.Path>;
export declare const deviceToolVersions: (baseDir: string, running?: {
    hub?: string;
    agent?: string;
}) => Effect.Effect<{
    hub: {
        requiredVersion: string;
        installedVersions: string[];
        runningVersion: string | null;
    };
    agent: {
        requiredVersion: string;
        installedVersions: string[];
        runningVersion: string | null;
    };
} | undefined, never, FileSystem.FileSystem | Path.Path>;
export {};
