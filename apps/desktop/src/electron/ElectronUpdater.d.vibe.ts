import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import { autoUpdater } from "electron-updater";
type AutoUpdater = typeof autoUpdater;
export type ElectronUpdaterFeedUrl = Parameters<AutoUpdater["setFeedURL"]>[0];
declare const ElectronUpdaterCheckForUpdatesError_base: Schema.Class<ElectronUpdaterCheckForUpdatesError, Schema.TaggedStruct<"ElectronUpdaterCheckForUpdatesError", {
    readonly channel: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronUpdaterCheckForUpdatesError extends ElectronUpdaterCheckForUpdatesError_base {
    get message(): string;
}
declare const ElectronUpdaterDownloadUpdateError_base: Schema.Class<ElectronUpdaterDownloadUpdateError, Schema.TaggedStruct<"ElectronUpdaterDownloadUpdateError", {
    readonly channel: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronUpdaterDownloadUpdateError extends ElectronUpdaterDownloadUpdateError_base {
    get message(): string;
}
declare const ElectronUpdaterQuitAndInstallError_base: Schema.Class<ElectronUpdaterQuitAndInstallError, Schema.TaggedStruct<"ElectronUpdaterQuitAndInstallError", {
    readonly channel: Schema.NullOr<Schema.String>;
    readonly isSilent: Schema.Boolean;
    readonly isForceRunAfter: Schema.Boolean;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronUpdaterQuitAndInstallError extends ElectronUpdaterQuitAndInstallError_base {
    get message(): string;
}
export declare const ElectronUpdaterError: Schema.Union<readonly [typeof ElectronUpdaterCheckForUpdatesError, typeof ElectronUpdaterDownloadUpdateError, typeof ElectronUpdaterQuitAndInstallError]>;
export type ElectronUpdaterError = typeof ElectronUpdaterError.Type;
declare const ElectronUpdater_base: Context.ServiceClass<ElectronUpdater, "@t3tools/desktop/electron/ElectronUpdater", {
    readonly setFeedURL: (options: ElectronUpdaterFeedUrl) => Effect.Effect<void>;
    readonly setAutoDownload: (value: boolean) => Effect.Effect<void>;
    readonly setAutoInstallOnAppQuit: (value: boolean) => Effect.Effect<void>;
    readonly setChannel: (channel: string) => Effect.Effect<void>;
    readonly setAllowPrerelease: (value: boolean) => Effect.Effect<void>;
    readonly allowDowngrade: Effect.Effect<boolean>;
    readonly setAllowDowngrade: (value: boolean) => Effect.Effect<void>;
    readonly setFullChangelog: (value: boolean) => Effect.Effect<void>;
    readonly setDisableDifferentialDownload: (value: boolean) => Effect.Effect<void>;
    readonly checkForUpdates: Effect.Effect<void, ElectronUpdaterCheckForUpdatesError>;
    readonly downloadUpdate: Effect.Effect<void, ElectronUpdaterDownloadUpdateError>;
    readonly quitAndInstall: (options: {
        readonly isSilent: boolean;
        readonly isForceRunAfter: boolean;
    }) => Effect.Effect<void, ElectronUpdaterQuitAndInstallError>;
    readonly on: <Args extends ReadonlyArray<unknown>>(eventName: string, listener: (...args: Args) => void) => Effect.Effect<void, never, Scope.Scope>;
}>;
export declare class ElectronUpdater extends ElectronUpdater_base {
}
/** @public */
export declare const make: {
    readonly setFeedURL: (options: ElectronUpdaterFeedUrl) => Effect.Effect<void>;
    readonly setAutoDownload: (value: boolean) => Effect.Effect<void>;
    readonly setAutoInstallOnAppQuit: (value: boolean) => Effect.Effect<void>;
    readonly setChannel: (channel: string) => Effect.Effect<void>;
    readonly setAllowPrerelease: (value: boolean) => Effect.Effect<void>;
    readonly allowDowngrade: Effect.Effect<boolean>;
    readonly setAllowDowngrade: (value: boolean) => Effect.Effect<void>;
    readonly setFullChangelog: (value: boolean) => Effect.Effect<void>;
    readonly setDisableDifferentialDownload: (value: boolean) => Effect.Effect<void>;
    readonly checkForUpdates: Effect.Effect<void, ElectronUpdaterCheckForUpdatesError>;
    readonly downloadUpdate: Effect.Effect<void, ElectronUpdaterDownloadUpdateError>;
    readonly quitAndInstall: (options: {
        readonly isSilent: boolean;
        readonly isForceRunAfter: boolean;
    }) => Effect.Effect<void, ElectronUpdaterQuitAndInstallError>;
    readonly on: <Args extends ReadonlyArray<unknown>>(eventName: string, listener: (...args: Args) => void) => Effect.Effect<void, never, Scope.Scope>;
};
export declare const layer: Layer.Layer<ElectronUpdater, never, never>;
export {};
