import type { DevicePlatform, EnvironmentId } from "@t3tools/contracts";
import { type ReactNode } from "react";
import type { DeviceHardwareButton } from "@t3tools/client-runtime/device/stream";
export interface DeviceViewControls {
    readonly phone: boolean;
    readonly streaming: boolean;
    readonly phoneUnavailableReason: string | null;
    /** @throws {never} */
    readonly showPhone: () => void;
    /** @throws {never} */
    readonly showFlat: () => void;
    /** @throws {never} */
    readonly resetView: () => void;
    readonly foldingControls?: ReactNode;
    readonly keyboard: {
        readonly attached: boolean;
        /** @throws {never} */
        readonly toggle: () => void;
    } | null;
    readonly handle: DeviceStreamHandle | null;
}
export interface DeviceStreamHandle {
    /** @throws {never} */
    readonly pressButton: (button: DeviceHardwareButton) => void;
    /** @throws {never} */
    readonly rotate: () => void;
    readonly inputConnected: boolean;
}
/** @throws {never} */
export declare function DeviceStreamView(props: {
    readonly environmentId: EnvironmentId;
    readonly platform: DevicePlatform;
    readonly deviceId: string;
    readonly deviceName?: string;
    readonly deviceDescription?: string;
    readonly visible: boolean;
    readonly hostId: string;
    readonly allowPhoneView?: boolean;
    /** @throws {never} */
    readonly renderControls?: (view: DeviceViewControls) => ReactNode;
    readonly axOverlay?: boolean;
    /** Lets a parent read this view's own stream state, such as its screen size. */
    readonly viewId?: string;
}): import("react").JSX.Element;
