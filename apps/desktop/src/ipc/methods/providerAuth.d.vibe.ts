import * as Schema from "effect/Schema";
import { CodexAuthCallbackError } from "../../app/CodexAuthCallback.ts";
import * as ElectronShell from "../../electron/ElectronShell.vibe";
import * as ElectronWindow from "../../electron/ElectronWindow.vibe";
import * as DesktopIpc from "../DesktopIpc.vibe";
export declare const receiveProviderAuthCallback: DesktopIpc.DesktopIpcMethod<CodexAuthCallbackError | Schema.SchemaError, ElectronShell.ElectronShell | ElectronWindow.ElectronWindow>;
export declare const cancelProviderAuthCallback: DesktopIpc.DesktopIpcMethod<CodexAuthCallbackError | Schema.SchemaError, never>;
