import { type DesktopUpdateActionResult, type DesktopUpdateChannel, type DesktopUpdateCheckResult, type DesktopUpdateState } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as DesktopBackendPool from "../backend/DesktopBackendPool.vibe";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import * as DesktopState from "../app/DesktopState.vibe";
import * as ElectronUpdater from "../electron/ElectronUpdater.vibe";
import * as ElectronWindow from "../electron/ElectronWindow.vibe";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.vibe";
interface DesktopPreparedUpdateInstallResult extends DesktopUpdateActionResult {
    readonly failed: boolean;
}
export declare const DESKTOP_UPDATE_INSTALL_RECORD_FILE = "desktop-update-install.json";
declare const DesktopUpdateActionInProgressError_base: Schema.Class<DesktopUpdateActionInProgressError, Schema.TaggedStruct<"DesktopUpdateActionInProgressError", {
    readonly action: Schema.Literals<readonly ["check", "download", "install", "channel"]>;
    readonly requestedChannel: Schema.Literals<readonly ["latest", "nightly"]>;
}>, Cause.YieldableError>;
export declare class DesktopUpdateActionInProgressError extends DesktopUpdateActionInProgressError_base {
    get message(): string;
}
declare const DesktopUpdateChannelPersistenceError_base: Schema.Class<DesktopUpdateChannelPersistenceError, Schema.TaggedStruct<"DesktopUpdateChannelPersistenceError", {
    readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
    readonly cause: Schema.instanceOf<DesktopAppSettings.DesktopSettingsWriteError, unknown>;
}>, Cause.YieldableError>;
export declare class DesktopUpdateChannelPersistenceError extends DesktopUpdateChannelPersistenceError_base {
    get message(): string;
}
declare const DesktopUpdatePollerError_base: Schema.Class<DesktopUpdatePollerError, Schema.TaggedStruct<"DesktopUpdatePollerError", {
    readonly poller: Schema.Literals<readonly ["startup", "poll"]>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class DesktopUpdatePollerError extends DesktopUpdatePollerError_base {
    get message(): string;
}
declare const DesktopUpdateEventHandlingError_base: Schema.Class<DesktopUpdateEventHandlingError, Schema.TaggedStruct<"DesktopUpdateEventHandlingError", {
    readonly event: Schema.Literals<readonly ["update-available", "download-progress", "update-downloaded"]>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class DesktopUpdateEventHandlingError extends DesktopUpdateEventHandlingError_base {
    get message(): string;
}
declare const DesktopUpdaterReportedError_base: Schema.Class<DesktopUpdaterReportedError, Schema.TaggedStruct<"DesktopUpdaterReportedError", {
    readonly operation: Schema.Literals<readonly ["check", "download", "install", "channel", "background"]>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class DesktopUpdaterReportedError extends DesktopUpdaterReportedError_base {
    get message(): string;
}
declare const DesktopUpdateUnexpectedActionError_base: Schema.Class<DesktopUpdateUnexpectedActionError, Schema.TaggedStruct<"DesktopUpdateUnexpectedActionError", {
    readonly action: Schema.Literals<readonly ["download", "install"]>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class DesktopUpdateUnexpectedActionError extends DesktopUpdateUnexpectedActionError_base {
    get message(): string;
}
export type DesktopUpdateConfigureError = never;
export declare const DesktopUpdateSetChannelError: Schema.Union<readonly [typeof DesktopUpdateActionInProgressError, typeof DesktopUpdateChannelPersistenceError]>;
export type DesktopUpdateSetChannelError = typeof DesktopUpdateSetChannelError.Type;
declare const DesktopUpdates_base: Context.ServiceClass<DesktopUpdates, "@t3tools/desktop/updates/DesktopUpdates", {
    readonly getState: Effect.Effect<DesktopUpdateState>;
    readonly isActionActive: Effect.Effect<boolean>;
    readonly isInstallActive: Effect.Effect<boolean>;
    readonly subscribe: Effect.Effect<{
        readonly latest: DesktopUpdateState;
        readonly changes: Stream.Stream<DesktopUpdateState>;
    }, never, Scope.Scope>;
    readonly emitState: Effect.Effect<void>;
    readonly disabledReason: Effect.Effect<Option.Option<string>>;
    readonly configure: Effect.Effect<void, DesktopUpdateConfigureError, Scope.Scope>;
    readonly setChannel: (channel: DesktopUpdateChannel) => Effect.Effect<DesktopUpdateState, DesktopUpdateSetChannelError>;
    readonly check: (reason: string) => Effect.Effect<DesktopUpdateCheckResult>;
    readonly download: Effect.Effect<DesktopUpdateActionResult>;
    readonly install: Effect.Effect<DesktopUpdateActionResult>;
    readonly installPrepared: (expectedVersion: string) => Effect.Effect<DesktopPreparedUpdateInstallResult>;
}>;
export declare class DesktopUpdates extends DesktopUpdates_base {
}
/** @throws {never} */
export declare function describeUpdateErrorCause(cause: unknown): string;
/** @public */
export declare const make: Effect.Effect<{
    readonly getState: Effect.Effect<DesktopUpdateState>;
    readonly isActionActive: Effect.Effect<boolean>;
    readonly isInstallActive: Effect.Effect<boolean>;
    readonly subscribe: Effect.Effect<{
        readonly latest: DesktopUpdateState;
        readonly changes: Stream.Stream<DesktopUpdateState>;
    }, never, Scope.Scope>;
    readonly emitState: Effect.Effect<void>;
    readonly disabledReason: Effect.Effect<Option.Option<string>>;
    readonly configure: Effect.Effect<void, DesktopUpdateConfigureError, Scope.Scope>;
    readonly setChannel: (channel: DesktopUpdateChannel) => Effect.Effect<DesktopUpdateState, DesktopUpdateSetChannelError>;
    readonly check: (reason: string) => Effect.Effect<DesktopUpdateCheckResult>;
    readonly download: Effect.Effect<DesktopUpdateActionResult>;
    readonly install: Effect.Effect<DesktopUpdateActionResult>;
    readonly installPrepared: (expectedVersion: string) => Effect.Effect<DesktopPreparedUpdateInstallResult>;
}, import("effect/Config").ConfigError, DesktopAppSettings.DesktopAppSettings | DesktopBackendPool.DesktopBackendPool | DesktopEnvironment.DesktopEnvironment | DesktopState.DesktopState | ElectronUpdater.ElectronUpdater | ElectronWindow.ElectronWindow | FileSystem.FileSystem>;
export declare const layer: Layer.Layer<DesktopUpdates, import("effect/Config").ConfigError, DesktopAppSettings.DesktopAppSettings | DesktopBackendPool.DesktopBackendPool | DesktopEnvironment.DesktopEnvironment | DesktopState.DesktopState | ElectronUpdater.ElectronUpdater | ElectronWindow.ElectronWindow | FileSystem.FileSystem>;
export {};
