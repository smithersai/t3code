import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ElectronDialog from "../electron/ElectronDialog.vibe";
import * as ElectronMenu from "../electron/ElectronMenu.vibe";
import * as DesktopEnvironment from "../app/DesktopEnvironment.ts";
import * as DesktopUpdates from "../updates/DesktopUpdates.ts";
import * as DesktopWindow from "./DesktopWindow.ts";
declare const DesktopApplicationMenuActionError_base: Schema.Class<DesktopApplicationMenuActionError, Schema.TaggedStruct<"DesktopApplicationMenuActionError", {
    readonly action: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopApplicationMenuActionError extends DesktopApplicationMenuActionError_base {
    get message(): string;
}
declare const DesktopApplicationMenu_base: Context.ServiceClass<DesktopApplicationMenu, "@t3tools/desktop/window/DesktopApplicationMenu", {
    readonly configure: Effect.Effect<void>;
}>;
export declare class DesktopApplicationMenu extends DesktopApplicationMenu_base {
}
type DesktopApplicationMenuRuntimeServices = DesktopUpdates.DesktopUpdates | DesktopWindow.DesktopWindow | ElectronDialog.ElectronDialog;
/** @public */
export declare const make: Effect.Effect<{
    readonly configure: Effect.Effect<void>;
}, never, DesktopEnvironment.DesktopEnvironment | ElectronMenu.ElectronMenu | DesktopApplicationMenuRuntimeServices>;
export declare const layer: Layer.Layer<DesktopApplicationMenu, never, DesktopEnvironment.DesktopEnvironment | ElectronMenu.ElectronMenu | DesktopApplicationMenuRuntimeServices>;
export {};
