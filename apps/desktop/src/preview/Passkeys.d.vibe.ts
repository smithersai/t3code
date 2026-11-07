import type { Session, WebContents } from "electron";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
declare const PreviewPasskeysConfigureError_base: Schema.Class<PreviewPasskeysConfigureError, Schema.TaggedStruct<"PreviewPasskeysConfigureError", {
    readonly keychainAccessGroup: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewPasskeysConfigureError extends PreviewPasskeysConfigureError_base {
    get message(): string;
}
declare const PreviewPasskeys_base: Context.ServiceClass<PreviewPasskeys, "@t3tools/desktop/preview/Passkeys/PreviewPasskeys", {
    readonly bridgeEnabled: boolean;
    /** Runs after app ready. */
    readonly configure: Effect.Effect<void>;
    /** @throws {never} */
    readonly installSessionHandlers: (session: Session) => void;
    /** @throws {never} */
    readonly attachGuest: (guest: WebContents) => 
    /** @throws {never} */
    () => void;
}>;
export declare class PreviewPasskeys extends PreviewPasskeys_base {
}
export declare const layer: Layer.Layer<PreviewPasskeys, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export {};
