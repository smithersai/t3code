import { type KdeCapturePaths } from "./KdeSnapShot.ts";
import { type HyprlandCapturePaths } from "./HyprlandSnapShot.ts";
import type { FeedbackOptions, LinuxWindowSnapshot } from "./LinuxSnapShot.vibe.platform.js";
export type { LinuxCaptureBackend, LinuxCaptureFeedback, LinuxWindowMetadata, LinuxWindowSnapshot } from "./LinuxSnapShot.vibe.platform.js";
export { readPortalPng } from "./linuxCaptureSession.ts";
/** @throws {never} */
export declare function getLinuxCaptureSupport(appId: string): Promise<{
    linuxBackend: import("./LinuxSnapShot.vibe.platform.js").LinuxCaptureBackend;
    linuxFeedbackAvailable: boolean;
}>;
/**
 * Undefined means capability missing, not denied: only that case may open the picker.
 * @throws {never}
 */
export declare function captureLinuxWindow(appId: string, options?: FeedbackOptions, kdePaths?: KdeCapturePaths, hyprlandPaths?: HyprlandCapturePaths): Promise<LinuxWindowSnapshot | undefined>;
