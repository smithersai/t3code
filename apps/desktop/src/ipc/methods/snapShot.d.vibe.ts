import { DesktopSnapShotAnimationDestination } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import type * as Electron from "electron";
import * as ElectronWindow from "../../electron/ElectronWindow.ts";
import * as ElectronDialog from "../../electron/ElectronDialog.vibe";
import * as DesktopSnapShot from "../../snapShot/DesktopSnapShot.ts";
import * as DesktopIpc from "../DesktopIpc.vibe";
declare const SnapShotIpcUnauthorizedSenderError_base: Schema.Class<SnapShotIpcUnauthorizedSenderError, Schema.TaggedStruct<"SnapShotIpcUnauthorizedSenderError", {}>, import("effect/Cause").YieldableError>;
declare class SnapShotIpcUnauthorizedSenderError extends SnapShotIpcUnauthorizedSenderError_base {
    get message(): string;
}
/** @throws {never} */
export declare function snapShotRelativeFrame(frame: DesktopSnapShotAnimationDestination["viewportFrame"], bounds: Electron.Rectangle, zoom: number): Electron.Rectangle | undefined;
export declare const getSnapShotState: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopSnapShot.DesktopSnapShot>;
export declare const requestSnapShotPermissions: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const setupSnapShot: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotSetupError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const previewSnapShotConfig: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotSetupError | ElectronDialog.ElectronDialogPickFilesError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronDialog.ElectronDialog | ElectronWindow.ElectronWindow>;
export declare const applySnapShotConfig: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotSetupError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const checkSnapShotShortcut: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const setSnapShotShortcutSuppressed: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const listPendingSnapShots: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const readSnapShot: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const setSnapShotAnimationDestination: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const dismissSnapShotAnimation: DesktopIpc.DesktopIpcMethod<Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export declare const acknowledgeSnapShot: DesktopIpc.DesktopIpcMethod<DesktopSnapShot.DesktopSnapShotError | Schema.SchemaError | SnapShotIpcUnauthorizedSenderError, DesktopSnapShot.DesktopSnapShot | ElectronWindow.ElectronWindow>;
export {};
