import { Context } from "effect";
import { type DesktopTheme } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
declare const ElectronThemeSetSourceError_base: Schema.Class<ElectronThemeSetSourceError, Schema.TaggedStruct<"ElectronThemeSetSourceError", {
    readonly source: Schema.Literals<readonly ["light", "dark", "system"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronThemeSetSourceError extends ElectronThemeSetSourceError_base {
    get message(): string;
}
declare const ElectronTheme_base: Context.ServiceClass<ElectronTheme, "@t3tools/desktop/electron/ElectronTheme", {
    readonly shouldUseDarkColors: Effect.Effect<boolean>;
    readonly setSource: (theme: DesktopTheme) => Effect.Effect<void, ElectronThemeSetSourceError>;
    readonly onUpdated: (listener: () => void) => Effect.Effect<void, never, Scope.Scope>;
}>;
export declare class ElectronTheme extends ElectronTheme_base {
}
/** @public */
export declare const make: {
    readonly shouldUseDarkColors: Effect.Effect<boolean>;
    readonly setSource: (theme: DesktopTheme) => Effect.Effect<void, ElectronThemeSetSourceError>;
    readonly onUpdated: (listener: () => void) => Effect.Effect<void, never, Scope.Scope>;
};
export declare const layer: Layer.Layer<ElectronTheme, never, never>;
export {};
