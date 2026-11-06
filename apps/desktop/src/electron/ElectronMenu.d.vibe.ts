import type { ContextMenuItem } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as Electron from "electron";
export interface ElectronMenuPosition {
    readonly x: number;
    readonly y: number;
}
export interface ElectronMenuContextInput {
    readonly window: Electron.BrowserWindow;
    readonly items: readonly ContextMenuItem[];
    readonly position: Option.Option<ElectronMenuPosition>;
}
export interface ElectronMenuTemplateInput {
    readonly window: Electron.BrowserWindow;
    readonly template: readonly Electron.MenuItemConstructorOptions[];
    readonly frame?: Electron.WebFrameMain;
}
declare const ElectronMenuOperationError_base: Schema.Class<ElectronMenuOperationError, Schema.TaggedStruct<"ElectronMenuOperationError", {
    readonly operation: Schema.Literals<readonly ["set-application-menu", "popup-template", "show-context-menu"]>;
    readonly platform: Schema.String;
    readonly windowId: Schema.NullOr<Schema.Number>;
    readonly itemCount: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronMenuOperationError extends ElectronMenuOperationError_base {
    get message(): string;
}
declare const ElectronMenu_base: Context.ServiceClass<ElectronMenu, "@t3tools/desktop/electron/ElectronMenu", {
    readonly setApplicationMenu: (template: readonly Electron.MenuItemConstructorOptions[]) => Effect.Effect<void>;
    readonly showContextMenu: (input: ElectronMenuContextInput) => Effect.Effect<Option.Option<string>>;
    readonly popupTemplate: (input: ElectronMenuTemplateInput) => Effect.Effect<void>;
}>;
export declare class ElectronMenu extends ElectronMenu_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly setApplicationMenu: (template: readonly Electron.MenuItemConstructorOptions[]) => Effect.Effect<void>;
    readonly showContextMenu: (input: ElectronMenuContextInput) => Effect.Effect<Option.Option<string>>;
    readonly popupTemplate: (input: ElectronMenuTemplateInput) => Effect.Effect<void>;
}, never, never>;
export declare const layer: Layer.Layer<ElectronMenu, never, never>;
export {};
