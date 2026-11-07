import type { DeviceHubAccess } from "@t3tools/client-runtime/state/deviceHubAccess";
import { AsyncResult, Atom } from "effect/reactivity";
import { type DeviceAxElement, type DeviceEventLogEntry, type DeviceForegroundInfo, type DeviceHubTarget } from "./deviceHubApi";
import { type AndroidFoldState } from "./deviceFold";
/** `undefined` until the hub reports an app; the device detail's app fills in until then. */
export declare const deviceForegroundAtom: (arg: DeviceHubTarget) => Atom.Atom<DeviceForegroundInfo | null | undefined>;
export declare const deviceEventLogAtom: (arg: DeviceHubTarget) => Atom.Atom<readonly DeviceEventLogEntry[]>;
export declare const deviceAxElementsAtom: (arg: DeviceHubTarget) => Atom.Atom<AsyncResult.AsyncResult<readonly DeviceAxElement[], import("effect/Cause").NoSuchElementError>>;
export interface AndroidFoldView {
    readonly fold: AndroidFoldState | null;
    /** Hinge angle the 3D phone shows, including an optimistic one while a change is in flight. */
    readonly angle: number | null;
}
export declare const foldAngle: (fold: AndroidFoldState) => number;
/**
 * The fold controls and the 3D phone share one view of a device's fold. Keyed by
 * host and device, not by hub access, so a renewed ticket keeps the known posture.
 */
export declare const androidFoldViewAtom: (arg: string) => Atom.Writable<AndroidFoldView, AndroidFoldView>;
/**
 * Reads the fold while mounted and records it in the device's fold view. The
 * screen size is part of the key because folding resizes the screen, so a new
 * size means the posture may have changed. An expired ticket stops retrying:
 * renewed access is a new key and reads again.
 */
export declare const androidFoldReadAtom: (arg: {
    readonly deviceKey: string;
    readonly access: DeviceHubAccess;
    readonly deviceId: string;
    readonly screenWidth: number;
    readonly screenHeight: number;
}) => Atom.Atom<AsyncResult.AsyncResult<void, {
    expired: boolean;
}>>;
export declare const NOOP_ATOM: Atom.Writable<AsyncResult.Initial<void, never>, AsyncResult.Initial<void, never>>;
export declare const NO_FOREGROUND_ATOM: Atom.Writable<DeviceForegroundInfo | null | undefined, DeviceForegroundInfo | null | undefined>;
