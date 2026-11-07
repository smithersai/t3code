import type { CopyTextWithHapticOptions } from "./copyTextWithHaptic.vibe.platform.js";
export { CopyTextClipboardWriteError, CopyTextHapticFeedbackError, tryCopyTextWithHaptic } from "./copyTextWithHaptic.vibe.platform.js";
/** @throws {never} */
export declare function copyTextWithHaptic(value: string, options?: CopyTextWithHapticOptions): void;
