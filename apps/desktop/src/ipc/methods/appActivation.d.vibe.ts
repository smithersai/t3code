import * as Schema from "effect/Schema";
import * as DesktopAppActivation from "../../app/DesktopAppActivation.ts";
import * as DesktopIpc from "../DesktopIpc.ts";
export declare const setReady: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopAppActivation.DesktopAppActivation>;
export declare const complete: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopAppActivation.DesktopAppActivation>;
