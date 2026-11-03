import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import { HttpClient } from "effect/http";
import * as Schema from "effect/Schema";
import * as ProcessRunner from "../processRunner.ts";
export declare const BOOT_SERVICE_UNIT_FILE = "t3code.service";
export declare const BOOT_SERVICE_LAUNCHD_LABEL = "com.t3tools.t3code.service";
export declare const BOOT_SERVICE_PLIST_FILE = "com.t3tools.t3code.service.plist";
export declare const BOOT_SERVICE_LOG_FILE = "boot-service.log";
export declare function bootServiceBaseDirOf(contents: string): string | undefined;
/** The executable an installed unit or plist starts: the launcher's runtime. */
export declare function bootServiceProgramOf(contents: string): string | undefined;
export interface BootServicePlan {
    readonly program: ReadonlyArray<string>;
    readonly baseDir: string;
    readonly logPath: string;
    readonly unitPath: string;
    /** The manager accepted a detached install; its outcome is written to `logPath`. */
    readonly handedOff?: boolean;
}
/** Service units cannot rely on the user's shell or PATH. */
export declare function renderBootServiceUnit(plan: BootServicePlan): string;
/** Launch agents cannot rely on the user's shell or PATH. */
export declare function renderBootServicePlist(plan: BootServicePlan, options: {
    readonly homeDir: string;
    readonly environmentPath: string;
}): string;
export interface BootServiceStep {
    readonly step: string;
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    /** Non-zero exit is logged and ignored. */
    readonly optional?: boolean;
    readonly timeout?: Duration.Input;
}
export interface BootServiceManager {
    readonly kind: "systemd" | "launchd";
    readonly unitPath: string;
    readonly render: (plan: BootServicePlan) => string;
    readonly stop: ReadonlyArray<BootServiceStep>;
    readonly activate: ReadonlyArray<BootServiceStep>;
    readonly restart: ReadonlyArray<BootServiceStep>;
    /** Queue a restart owned by the manager, since stopping would kill the caller. */
    readonly handoff?: ReadonlyArray<BootServiceStep>;
    readonly deactivate: ReadonlyArray<BootServiceStep>;
    readonly finalize: ReadonlyArray<BootServiceStep>;
}
declare const BootServiceUnsupportedError_base: Schema.Class<BootServiceUnsupportedError, Schema.TaggedStruct<"BootServiceUnsupportedError", {
    readonly platform: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BootServiceUnsupportedError extends BootServiceUnsupportedError_base {
    get message(): string;
}
declare const BootServiceCommandError_base: Schema.Class<BootServiceCommandError, Schema.TaggedStruct<"BootServiceCommandError", {
    readonly step: Schema.String;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly stdoutLength: Schema.optional<Schema.Number>;
    readonly stderrLength: Schema.optional<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class BootServiceCommandError extends BootServiceCommandError_base {
    get message(): string;
}
declare const BootServiceInstallError_base: Schema.Class<BootServiceInstallError, Schema.TaggedStruct<"BootServiceInstallError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BootServiceInstallError extends BootServiceInstallError_base {
    get message(): string;
}
declare const BootServiceProblem: Schema.Literals<readonly ["user-manager-unavailable", "linger-unavailable", "linger-disabled", "service-disabled", "service-stopped", "restart-pending"]>;
type BootServiceProblem = typeof BootServiceProblem.Type;
export declare function formatBootServiceProblem(problem: BootServiceProblem): string;
declare const BootServicePrerequisiteError_base: Schema.Class<BootServicePrerequisiteError, Schema.TaggedStruct<"BootServicePrerequisiteError", {
    readonly problem: Schema.Literals<readonly ["user-manager-unavailable", "linger-unavailable", "linger-disabled", "service-disabled", "service-stopped", "restart-pending"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class BootServicePrerequisiteError extends BootServicePrerequisiteError_base {
    get message(): string;
}
declare const BootServiceUpdatePendingError_base: Schema.Class<BootServiceUpdatePendingError, Schema.TaggedStruct<"BootServiceUpdatePendingError", {}>, import("effect/Cause").YieldableError>;
export declare class BootServiceUpdatePendingError extends BootServiceUpdatePendingError_base {
    get message(): string;
}
declare const BootServiceDowngradeRefusedError_base: Schema.Class<BootServiceDowngradeRefusedError, Schema.TaggedStruct<"BootServiceDowngradeRefusedError", {
    readonly installedVersion: Schema.String;
    readonly targetVersion: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BootServiceDowngradeRefusedError extends BootServiceDowngradeRefusedError_base {
    get message(): string;
}
export type BootServiceError = BootServiceUnsupportedError | BootServiceCommandError | BootServiceInstallError | BootServicePrerequisiteError | BootServiceUpdatePendingError | BootServiceDowngradeRefusedError;
export interface BootServiceStatus {
    readonly supported: boolean;
    readonly installed: boolean;
    readonly current: boolean;
    readonly installedVersion?: string;
    readonly installedBaseDir?: string;
    readonly problems?: ReadonlyArray<BootServiceProblem>;
    readonly unitPath: string;
    readonly logPath: string;
}
declare const BootService_base: Context.ServiceClass<BootService, "t3/cloud/bootService", {
    readonly install: (options?: {
        readonly allowDowngrade?: boolean;
        readonly start?: boolean;
    }) => Effect.Effect<BootServicePlan, BootServiceError>;
    /**
     * Only when the unit serves this base dir: the unit name is per user, so
     * another home's service is left alone, which resolves `skipped`. From
     * inside the service the restart can only be `queued` with the service
     * manager, since the stop ends this process.
     */
    readonly restart: Effect.Effect<"restarted" | "queued" | "skipped", BootServiceError>;
    /**
     * Runs the operation with this home's service stopped; other homes are left alone.
     * Restores a previously enabled or loaded service even if stopping failed.
     * The operation's failure takes precedence over a restart failure.
     */
    readonly withStopped: <A, E, R>(operation: Effect.Effect<A, E, R>) => Effect.Effect<A, E | BootServiceError, R>;
    readonly uninstall: Effect.Effect<boolean, BootServiceError>;
    readonly status: Effect.Effect<BootServiceStatus, BootServiceError>;
}>;
export declare class BootService extends BootService_base {
}
export interface BootServiceHost {
    readonly execPath: string;
}
export declare const make: (input: {
    readonly baseDir: string;
    readonly logsDir: string;
    readonly cliVersion: string;
    readonly host?: BootServiceHost;
}) => Effect.Effect<{
    readonly install: (options?: {
        readonly allowDowngrade?: boolean;
        readonly start?: boolean;
    }) => Effect.Effect<BootServicePlan, BootServiceError>;
    /**
     * Only when the unit serves this base dir: the unit name is per user, so
     * another home's service is left alone, which resolves `skipped`. From
     * inside the service the restart can only be `queued` with the service
     * manager, since the stop ends this process.
     */
    readonly restart: Effect.Effect<"restarted" | "queued" | "skipped", BootServiceError>;
    /**
     * Runs the operation with this home's service stopped; other homes are left alone.
     * Restores a previously enabled or loaded service even if stopping failed.
     * The operation's failure takes precedence over a restart failure.
     */
    readonly withStopped: <A, E, R>(operation: Effect.Effect<A, E, R>) => Effect.Effect<A, E | BootServiceError, R>;
    readonly uninstall: Effect.Effect<boolean, BootServiceError>;
    readonly status: Effect.Effect<BootServiceStatus, BootServiceError>;
}, Config.ConfigError, FileSystem.FileSystem | HttpClient.HttpClient | Path.Path | ProcessRunner.ProcessRunner>;
export declare const layer: (input: {
    readonly baseDir: string;
    readonly logsDir: string;
    readonly cliVersion: string;
    readonly host?: BootServiceHost;
}) => Layer.Layer<BootService, Config.ConfigError, FileSystem.FileSystem | HttpClient.HttpClient | Path.Path | ProcessRunner.ProcessRunner>;
export {};
