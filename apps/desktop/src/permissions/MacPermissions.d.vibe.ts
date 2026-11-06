import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Electron from "electron";
import * as DesktopEnvironment from "../app/DesktopEnvironment.ts";
import type { MacPermission } from "./MacPermission.ts";
declare const MacPermissions_base: Context.ServiceClass<MacPermissions, "@t3tools/desktop/permissions/MacPermissions", {
    readonly showHelper: (permission: MacPermission, owner: Electron.BrowserWindow | null, isGranted?: 
    /** @throws {never} */
    () => boolean | Promise<boolean>) => Effect.Effect<void>;
}>;
export declare class MacPermissions extends MacPermissions_base {
}
export declare const layer: Layer.Layer<MacPermissions, never, DesktopEnvironment.DesktopEnvironment | Path.Path>;
export {};
