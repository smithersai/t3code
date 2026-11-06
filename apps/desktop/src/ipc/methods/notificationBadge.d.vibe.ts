import * as Effect from "effect/Effect";
import * as ElectronApp from "../../electron/ElectronApp.ts";
import * as DesktopIpc from "../DesktopIpc.vibe";
export declare const installNotificationBadge: () => Effect.Effect<void, DesktopIpc.DesktopIpcRegistrationError, DesktopIpc.DesktopIpc | ElectronApp.ElectronApp | import("effect/Scope").Scope>;
