import * as Schema from "effect/Schema";
import { CodexAuthCallbackError } from "../../app/CodexAuthCallback.ts";
import * as ElectronShell from "../../electron/ElectronShell.ts";
import * as ElectronWindow from "../../electron/ElectronWindow.ts";
import * as DesktopIpc from "../DesktopIpc.ts";
export declare const receiveProviderAuthCallback: DesktopIpc.DesktopIpcMethod<CodexAuthCallbackError | Schema.SchemaError, ElectronShell.ElectronShell | ElectronWindow.ElectronWindow>;
export declare const cancelProviderAuthCallback: DesktopIpc.DesktopIpcMethod<CodexAuthCallbackError | Schema.SchemaError, never>;
