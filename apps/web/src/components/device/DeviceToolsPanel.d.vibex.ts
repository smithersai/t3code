import type { DeviceHubAccess } from "@t3tools/client-runtime/state/deviceHubAccess";
import type { DeviceSummary } from "@t3tools/contracts";
import type { DeviceControls } from "./useDeviceControls.vibe";
/** @throws {never} */
export declare function DeviceToolsPanel(props: {
    readonly controls: DeviceControls;
    readonly hostDiagnostics: string | undefined;
    readonly device: DeviceSummary;
    readonly access: DeviceHubAccess | null;
    readonly axOverlay: boolean;
    /** @throws {never} */
    readonly onAxOverlayChange: (enabled: boolean) => void;
    /** @throws {never} */
    readonly onClose: () => void;
    readonly className?: string;
}): import("react").JSX.Element;
