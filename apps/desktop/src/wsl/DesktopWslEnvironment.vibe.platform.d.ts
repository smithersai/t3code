import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import { ChildProcessSpawner } from "effect/process";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import { type WslDistro } from "./wslPathParsing.ts";
export interface EnsureWslNodePtyOptions {
    readonly allowBuild?: boolean;
    readonly nodeEngineRange?: string | null;
}
export interface WslRuntimeArchive {
    readonly windowsPath: string;
    readonly runtimeId: string;
    readonly sha256: string;
}
export type PrepareWslRuntimeResult = {
    readonly ok: true;
    readonly linuxAppRoot: string;
} | {
    readonly ok: false;
    readonly reason: string;
};
export type EnsureWslNodePtyResult = {
    readonly ok: true;
    readonly nodePath: string;
    readonly resolvedPath: string;
} | {
    readonly ok: false;
    readonly reason: string;
    readonly fatal: boolean;
    readonly retryLimit?: number;
};
export type ProbeWslRuntimeResult = {
    readonly ok: true;
    readonly resolvedPath: string;
} | {
    readonly ok: false;
    readonly reason: string;
};
declare const DesktopWslDistroListError_base: Schema.Class<DesktopWslDistroListError, Schema.TaggedStruct<"DesktopWslDistroListError", {
    readonly reason: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopWslDistroListError extends DesktopWslDistroListError_base {
    get message(): string;
}
declare const DesktopWslEnvironment_base: Context.ServiceClass<DesktopWslEnvironment, "@t3tools/desktop/wsl/DesktopWslEnvironment", {
    readonly isAvailable: Effect.Effect<boolean>;
    readonly listDistros: Effect.Effect<readonly WslDistro[]>;
    readonly probeDistros: Effect.Effect<readonly WslDistro[], DesktopWslDistroListError>;
    readonly preWarm: (distro: string | null) => Effect.Effect<void>;
    readonly windowsToWslPath: (distro: string | null, windowsPath: string) => Effect.Effect<Option.Option<string>>;
    readonly getUserHome: (distro: string | null) => Effect.Effect<Option.Option<string>>;
    readonly getDistroIp: (distro: string | null) => Effect.Effect<Option.Option<string>>;
    readonly prepareRuntime: (distro: string | null, archive: WslRuntimeArchive) => Effect.Effect<PrepareWslRuntimeResult>;
    readonly pruneRuntimes: (distro: string | null, runtimeId: string) => Effect.Effect<void>;
    readonly invalidateRuntime: (distro: string | null, runtimeId: string) => Effect.Effect<void>;
    readonly probeRuntime: (distro: string | null, linuxAppRoot: string) => Effect.Effect<ProbeWslRuntimeResult>;
    readonly ensureNodePty: (distro: string | null, linuxAppRoot: string, options?: EnsureWslNodePtyOptions) => Effect.Effect<EnsureWslNodePtyResult>;
}>;
export declare class DesktopWslEnvironment extends DesktopWslEnvironment_base {
}
export interface ShellResult {
    readonly exitCode: number;
    readonly stdout: string;
    readonly stderr: string;
    readonly transportFailure: "timeout" | "spawn" | "process" | null;
}
export declare const buildWslRuntimeInstallScript: (linuxArchivePath: string, runtimeId: string, archiveSha256: string) => string;
export declare const buildWslRuntimePruneScript: (runtimeId: string) => string;
export declare const buildWslRuntimeInvalidateScript: (runtimeId: string) => string;
export declare const parseWslRuntimeRoot: (stdout: string) => string | null;
export declare const buildWslRuntimeProbeScript: (linuxAppRoot: string) => string;
export interface ToolchainReport {
    readonly missingTools: ReadonlyArray<string>;
    readonly nodeVersion: string | null;
}
export declare const parseResolvedPath: (stdout: string) => string | null;
export declare const layer: Layer.Layer<DesktopWslEnvironment, never, ChildProcessSpawner.ChildProcessSpawner | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export {};
