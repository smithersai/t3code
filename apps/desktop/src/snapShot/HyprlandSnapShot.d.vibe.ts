import type { DesktopCaptureHelperState } from "@t3tools/contracts";
import type { LinuxWindowSnapshot } from "./LinuxSnapShot.vibe";
export { isHyprlandCaptureSession } from "./linuxCaptureSession.ts";
export declare const HYPRLAND_CAPTURE_EXECUTABLE = "t3-hyprland-snap-shot";
export type HyprlandCapturePaths = {
    readonly bundle: string;
    readonly dataHome: string;
};
/** @throws {never} */
export declare function hyprlandCaptureExecutable(paths: HyprlandCapturePaths): string;
/**
 * Omarchy owns its defaults; instructions always point at a user-owned config.
 * @throws {never}
 */
export declare function hyprlandCaptureShortcut(appId: string, home: string, configHome?: string): Promise<{
    shortcutBinding: string;
    shortcutConfigPath: string;
}>;
export declare class HyprlandCaptureSetup {
    private readonly paths;
    /** @throws {never} */
    constructor(paths: HyprlandCapturePaths);
    /** @throws {never} */
    state(): Promise<DesktopCaptureHelperState>;
    /** @throws {never} */
    perform(action: "install-hyprland-helper" | "remove-hyprland-helper"): Promise<void>;
}
/** @throws {never} */
export declare function captureHyprlandWindow(paths: HyprlandCapturePaths, options?: {
    readonly flash: boolean;
    readonly animate: boolean;
}): Promise<LinuxWindowSnapshot>;
