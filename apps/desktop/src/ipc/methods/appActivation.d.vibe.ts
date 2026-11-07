import * as Schema from "effect/Schema";
import * as DesktopAppActivation from "../../app/DesktopAppActivation.vibe";
import * as DesktopIpc from "../DesktopIpc.vibe";
export declare const setReady: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopAppActivation.DesktopAppActivation>;
export declare const complete: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopAppActivation.DesktopAppActivation>;
