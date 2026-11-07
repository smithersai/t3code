import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as Electron from "electron";
declare const ElectronDialogPickFolderError_base: Schema.Class<ElectronDialogPickFolderError, Schema.TaggedStruct<"ElectronDialogPickFolderError", {
    readonly ownerWindowId: Schema.NullOr<Schema.Number>;
    readonly defaultPath: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronDialogPickFolderError extends ElectronDialogPickFolderError_base {
    get message(): string;
}
declare const ElectronDialogPickFilesError_base: Schema.Class<ElectronDialogPickFilesError, Schema.TaggedStruct<"ElectronDialogPickFilesError", {
    readonly ownerWindowId: Schema.NullOr<Schema.Number>;
    readonly defaultPath: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronDialogPickFilesError extends ElectronDialogPickFilesError_base {
    get message(): string;
}
declare const ElectronDialogShowMessageBoxError_base: Schema.Class<ElectronDialogShowMessageBoxError, Schema.TaggedStruct<"ElectronDialogShowMessageBoxError", {
    readonly type: Schema.NullOr<Schema.Literals<readonly ["none", "info", "error", "question", "warning"]>>;
    readonly titleLength: Schema.NullOr<Schema.Number>;
    readonly messageLength: Schema.Number;
    readonly detailLength: Schema.NullOr<Schema.Number>;
    readonly buttonCount: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronDialogShowMessageBoxError extends ElectronDialogShowMessageBoxError_base {
    get message(): string;
}
declare const ElectronDialogShowErrorBoxError_base: Schema.Class<ElectronDialogShowErrorBoxError, Schema.TaggedStruct<"ElectronDialogShowErrorBoxError", {
    readonly titleLength: Schema.Number;
    readonly contentLength: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronDialogShowErrorBoxError extends ElectronDialogShowErrorBoxError_base {
    get message(): string;
}
export declare const ElectronDialogError: Schema.Union<readonly [typeof ElectronDialogPickFolderError, typeof ElectronDialogPickFilesError, typeof ElectronDialogShowMessageBoxError, typeof ElectronDialogShowErrorBoxError]>;
export type ElectronDialogError = typeof ElectronDialogError.Type;
export interface ElectronDialogPickFolderInput {
    readonly owner: Option.Option<Electron.BrowserWindow>;
    readonly defaultPath: Option.Option<string>;
}
export interface ElectronDialogPickFilesInput {
    readonly owner: Option.Option<Electron.BrowserWindow>;
    readonly defaultPath: Option.Option<string>;
    readonly filters: readonly Electron.FileFilter[];
    readonly multiple: boolean;
}
declare const ElectronDialog_base: Context.ServiceClass<ElectronDialog, "@t3tools/desktop/electron/ElectronDialog", {
    readonly pickFolder: (input: ElectronDialogPickFolderInput) => Effect.Effect<Option.Option<string>, ElectronDialogPickFolderError>;
    readonly pickFiles: (input: ElectronDialogPickFilesInput) => Effect.Effect<readonly string[], ElectronDialogPickFilesError>;
    /** Pass `owner` to attach the box to that window so it cannot fall behind it. */
    readonly showMessageBox: (options: Electron.MessageBoxOptions, owner?: Electron.BrowserWindow) => Effect.Effect<Electron.MessageBoxReturnValue, ElectronDialogShowMessageBoxError>;
    readonly showErrorBox: (title: string, content: string) => Effect.Effect<void>;
}>;
export declare class ElectronDialog extends ElectronDialog_base {
}
/** @public */
export declare const make: {
    readonly pickFolder: (input: ElectronDialogPickFolderInput) => Effect.Effect<Option.Option<string>, ElectronDialogPickFolderError>;
    readonly pickFiles: (input: ElectronDialogPickFilesInput) => Effect.Effect<readonly string[], ElectronDialogPickFilesError>;
    /** Pass `owner` to attach the box to that window so it cannot fall behind it. */
    readonly showMessageBox: (options: Electron.MessageBoxOptions, owner?: Electron.BrowserWindow) => Effect.Effect<Electron.MessageBoxReturnValue, ElectronDialogShowMessageBoxError>;
    readonly showErrorBox: (title: string, content: string) => Effect.Effect<void>;
};
export declare const layer: Layer.Layer<ElectronDialog, never, never>;
export {};
