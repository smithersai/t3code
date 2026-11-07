import type { SshDeviceHostConfig } from "@t3tools/contracts";
import { type DeviceHostCheckTarget } from "./deviceHostConnectionChecks.vibe";
/** @throws {never} */
export declare function DeviceHostEditor({ host, isNew, targets, busy, onSave, onClose, }: {
    host: SshDeviceHostConfig;
    isNew: boolean;
    targets: ReadonlyArray<DeviceHostCheckTarget>;
    busy: boolean;
    /** @throws {never} */
    onSave: (host: SshDeviceHostConfig) => void;
    /** @throws {never} */
    onClose: () => void;
}): import("react").JSX.Element;
