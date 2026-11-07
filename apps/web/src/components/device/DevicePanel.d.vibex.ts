import type { ScopedThreadRef } from "@t3tools/contracts";
import { type RightPanelSurface } from "~/rightPanelStore";
import { type PreviewPanelMode } from "../preview/PreviewPanelShell";
/** @throws {never} */
export declare function DevicePanel(props: {
    readonly mode: PreviewPanelMode;
    readonly threadRef: ScopedThreadRef;
    readonly surface: Extract<RightPanelSurface, {
        kind: "device";
    }>;
    readonly visible: boolean;
    /** @throws {never} */
    readonly onDismissSetup: () => void;
}): import("react").JSX.Element;
