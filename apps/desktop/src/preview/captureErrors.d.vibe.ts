import { PreviewCaptureFailure } from "@t3tools/contracts";
import type { PreviewManagerError } from "./Manager.js";
/** Classify before Electron replaces a rejected IPC Error with its message. */
export declare function normalizeCaptureFailure(error: PreviewManagerError, stage: PreviewCaptureFailure["stage"]): PreviewCaptureFailure;
