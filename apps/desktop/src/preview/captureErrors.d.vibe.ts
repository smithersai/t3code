import { PreviewCaptureFailure } from "@t3tools/contracts";
import type { PreviewManagerError } from "./Manager.ts";
/**
 * Classify before Electron replaces a rejected IPC Error with its message.
 * @throws {never}
 */
export declare function normalizeCaptureFailure(error: PreviewManagerError, stage: PreviewCaptureFailure["stage"]): PreviewCaptureFailure;
