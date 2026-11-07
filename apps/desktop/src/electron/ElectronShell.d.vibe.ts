import { type SystemSettingsPane } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
/** @throws {never} */
export declare function parseSafeExternalUrl(rawUrl: unknown): Option.Option<string>;
declare const ElectronShell_base: Context.ServiceClass<ElectronShell, "@t3tools/desktop/electron/ElectronShell", {
    readonly openExternal: (rawUrl: unknown) => Effect.Effect<boolean>;
    readonly openSystemSettings: (pane: SystemSettingsPane) => Effect.Effect<boolean>;
    readonly copyText: (text: string) => Effect.Effect<void>;
}>;
export declare class ElectronShell extends ElectronShell_base {
}
/** @public */
export declare const make: {
    readonly openExternal: (rawUrl: unknown) => Effect.Effect<boolean>;
    readonly openSystemSettings: (pane: SystemSettingsPane) => Effect.Effect<boolean>;
    readonly copyText: (text: string) => Effect.Effect<void>;
};
export declare const layer: Layer.Layer<ElectronShell, never, never>;
export {};
