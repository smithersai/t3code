import type { DesktopCaptureHelperState } from "@t3tools/contracts";
import type { LinuxWindowSnapshot } from "./LinuxSnapShot.vibe";
export { isKdeCaptureSession } from "./linuxCaptureSession.ts";
export declare const KDE_CAPTURE_EXECUTABLE = "t3-kde-snap-shot";
export type KdeCapturePaths = {
    readonly bundle: string;
    readonly dataHome: string;
};
/** @throws {never} */
export declare function kdeCapturePaths(paths: KdeCapturePaths): {
    executable: string;
    desktop: string;
};
export declare class KdeCaptureSetup {
    private readonly paths;
    /** @throws {never} */
    constructor(paths: KdeCapturePaths);
    /** @throws {never} */
    state(): Promise<DesktopCaptureHelperState>;
    /** @throws {never} */
    perform(action: "install-kde-helper" | "remove-kde-helper"): Promise<void>;
}
/** @throws {never} */
export declare function captureKdeWindow(paths: KdeCapturePaths, options?: {
    readonly flash: boolean;
    readonly animate: boolean;
}): Promise<LinuxWindowSnapshot>;
