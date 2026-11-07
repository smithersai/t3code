import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ElectronWindow from "../electron/ElectronWindow.vibe";
/** @throws {never} */
export declare const isWebLink: (value: string) => boolean;
/** @throws {never} */
export declare const isWebPageFile: (path: string) => boolean;
declare const DesktopWebLinks_base: Context.ServiceClass<DesktopWebLinks, "@t3tools/desktop/app/DesktopWebLinks", {
    readonly receive: (url: string) => Effect.Effect<void>;
    readonly setRendererReady: (ready: boolean) => Effect.Effect<void>;
}>;
export declare class DesktopWebLinks extends DesktopWebLinks_base {
}
export declare const layer: Layer.Layer<DesktopWebLinks, never, ElectronWindow.ElectronWindow>;
export {};
