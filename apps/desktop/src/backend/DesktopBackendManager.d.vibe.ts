import * as Brand from "effect/Brand";
import * as Cause from "effect/Cause";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import { HttpClient } from "effect/http";
import { ChildProcessSpawner } from "effect/process";
import { type DesktopBackendBootstrap as DesktopBackendBootstrapValue, type DesktopTelemetryControlMessage as DesktopTelemetryControlMessageValue } from "@t3tools/contracts";
import * as DesktopObservability from "../app/DesktopObservability.ts";
import * as DesktopTelemetryPublisher from "../telemetry/DesktopTelemetryPublisher.ts";
import * as DesktopBrowserHost from "../preview/DesktopBrowserHost.ts";
import * as DesktopWslEnvironment from "../wsl/DesktopWslEnvironment.ts";
type BackendProcessLayerServices = ChildProcessSpawner.ChildProcessSpawner | HttpClient.HttpClient;
type BackendProcessRunRequirements = BackendProcessLayerServices | Scope.Scope;
export type BackendProcessOutputStream = "stdout" | "stderr";
export interface BackendProcessContext {
    readonly executablePath: string;
    readonly entryPath: string;
    readonly cwd: string;
    readonly httpBaseUrl: URL;
}
export type DesktopBackendBootstrapDelivery = "fd3" | "stdin";
export interface DesktopBackendStartConfig extends BackendProcessContext {
    readonly args: ReadonlyArray<string>;
    readonly env: Record<string, string | undefined>;
    /** False passes env verbatim, preventing the Windows T3CODE_HOME from leaking into WSL. */
    readonly extendEnv: boolean;
    readonly bootstrap: DesktopBackendBootstrapValue;
    readonly bootstrapDelivery: DesktopBackendBootstrapDelivery;
    readonly httpBaseUrl: URL;
    readonly captureOutput: boolean;
    readonly preflightFailure: Option.Option<PreflightFailure>;
    readonly runningDistro?: string;
    readonly wslRuntimeId?: string;
}
export interface PreflightFailure {
    readonly reason: string;
    readonly fatal: boolean;
    readonly retryLimit?: number;
}
interface BackendProcessExit {
    readonly code: Option.Option<number>;
    readonly reason: string;
}
declare const BackendReadinessTimeoutError_base: Schema.Class<BackendReadinessTimeoutError, Schema.TaggedStruct<"BackendReadinessTimeoutError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly readinessUrl: Schema.URL;
    readonly timeoutMs: Schema.Number;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendReadinessTimeoutError extends BackendReadinessTimeoutError_base {
    get message(): string;
}
declare const BackendProcessBootstrapEncodeError_base: Schema.Class<BackendProcessBootstrapEncodeError, Schema.TaggedStruct<"BackendProcessBootstrapEncodeError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendProcessBootstrapEncodeError extends BackendProcessBootstrapEncodeError_base {
    get message(): string;
}
declare const BackendProcessSpawnError_base: Schema.Class<BackendProcessSpawnError, Schema.TaggedStruct<"BackendProcessSpawnError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendProcessSpawnError extends BackendProcessSpawnError_base {
    get message(): string;
}
declare const BackendProcessOutputReadError_base: Schema.Class<BackendProcessOutputReadError, Schema.TaggedStruct<"BackendProcessOutputReadError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly pid: Schema.Number;
    readonly streamName: Schema.Literals<readonly ["stdout", "stderr"]>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendProcessOutputReadError extends BackendProcessOutputReadError_base {
    get message(): string;
}
declare const BackendProcessOutputHandlingError_base: Schema.Class<BackendProcessOutputHandlingError, Schema.TaggedStruct<"BackendProcessOutputHandlingError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly pid: Schema.Number;
    readonly streamName: Schema.Literals<readonly ["stdout", "stderr"]>;
    readonly chunkByteLength: Schema.Number;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendProcessOutputHandlingError extends BackendProcessOutputHandlingError_base {
    get message(): string;
}
export type BackendProcessOutputError = BackendProcessOutputReadError | BackendProcessOutputHandlingError;
declare const BackendProcessExitStatusError_base: Schema.Class<BackendProcessExitStatusError, Schema.TaggedStruct<"BackendProcessExitStatusError", {
    readonly executablePath: Schema.String;
    readonly entryPath: Schema.String;
    readonly cwd: Schema.String;
    readonly httpBaseUrl: Schema.URL;
    readonly pid: Schema.Number;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class BackendProcessExitStatusError extends BackendProcessExitStatusError_base {
    get message(): string;
}
export declare const BackendProcessError: Schema.Union<readonly [typeof BackendProcessBootstrapEncodeError, typeof BackendProcessSpawnError, typeof BackendProcessExitStatusError]>;
export type BackendProcessError = typeof BackendProcessError.Type;
interface RunBackendProcessOptions extends DesktopBackendStartConfig {
    readonly desktopTelemetryStream: Stream.Stream<Uint8Array>;
    readonly desktopBrowserStream?: Stream.Stream<Uint8Array>;
    readonly onDesktopBrowserCommand?: (line: string) => Effect.Effect<void>;
    readonly onDesktopTelemetryControl?: (message: DesktopTelemetryControlMessageValue) => Effect.Effect<void>;
    readonly readinessTimeout?: Duration.Duration;
    readonly outputDrainTimeout?: Duration.Duration;
    readonly onStarted?: (pid: number) => Effect.Effect<void>;
    readonly onExitObserved?: () => Effect.Effect<void>;
    readonly onReady?: () => Effect.Effect<void>;
    readonly onReadinessFailure?: (error: BackendReadinessTimeoutError) => Effect.Effect<void>;
    readonly onOutput?: (streamName: BackendProcessOutputStream, chunk: Uint8Array) => Effect.Effect<void, Error>;
    readonly onOutputFailure?: (error: BackendProcessOutputError) => Effect.Effect<void>;
}
export interface DesktopBackendSnapshot {
    readonly desiredRunning: boolean;
    readonly ready: boolean;
    readonly activePid: Option.Option<number>;
    readonly restartAttempt: number;
    readonly restartScheduled: boolean;
}
export type BackendInstanceId = string & Brand.Brand<"BackendInstanceId">;
export declare const BackendInstanceId: Brand.Constructor<BackendInstanceId>;
export declare const PRIMARY_INSTANCE_ID: BackendInstanceId;
export interface BackendStartupFailure {
    readonly reason: string;
    /** Tail of the last run's stdout and stderr. */
    readonly output: string;
}
export interface DesktopBackendInstance {
    readonly id: BackendInstanceId;
    readonly label: Effect.Effect<string>;
    readonly start: Effect.Effect<void>;
    readonly stop: (options?: {
        readonly timeout?: Duration.Duration;
    }) => Effect.Effect<void>;
    readonly currentConfig: Effect.Effect<Option.Option<DesktopBackendStartConfig>>;
    readonly snapshot: Effect.Effect<DesktopBackendSnapshot>;
    readonly waitForReady: (timeout: Duration.Duration) => Effect.Effect<boolean>;
}
export interface BackendInstanceSpec {
    readonly id: BackendInstanceId;
    readonly label: Effect.Effect<string>;
    readonly configResolve: Effect.Effect<DesktopBackendStartConfig, PlatformError.PlatformError>;
    /** Receives the ready run's resolved URL; reading current config could race a subsequent restart. */
    readonly onReady?: (httpBaseUrl: URL) => Effect.Effect<void>;
    readonly onShutdown?: () => Effect.Effect<void>;
    readonly onPreflightFailed?: (failure: PreflightFailure) => Effect.Effect<boolean>;
    readonly onStateDirOwned?: () => Effect.Effect<void>;
    /** Fires on each repeated crash or readiness timeout until the backend becomes ready. */
    readonly onStartupFailure?: (failure: BackendStartupFailure) => Effect.Effect<void>;
}
export declare const runBackendProcess: (options: RunBackendProcessOptions) => Effect.Effect<BackendProcessExit, BackendProcessError, BackendProcessRunRequirements>;
export declare const makeBackendInstance: (spec: BackendInstanceSpec) => Effect.Effect<DesktopBackendInstance, never, ChildProcessSpawner.ChildProcessSpawner | DesktopObservability.DesktopBackendOutputLogFactory | DesktopBrowserHost.DesktopBrowserHost | DesktopTelemetryPublisher.DesktopTelemetryPublisher | DesktopWslEnvironment.DesktopWslEnvironment | FileSystem.FileSystem | HttpClient.HttpClient | Scope.Scope>;
export {};
