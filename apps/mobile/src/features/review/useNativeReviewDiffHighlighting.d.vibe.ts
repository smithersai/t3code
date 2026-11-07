import type { HighlightScheme } from "../../lib/highlights";
import type { NativeReviewDiffRow } from "../diffs/nativeReviewDiffSurface";
import type { NativeReviewDiffFile } from "../diffs/nativeReviewDiffTypes";
import { type NativeReviewVisibleRange } from "./reviewDiffHighlightScheduler";
/** @throws {never} */
export declare function useNativeReviewDiffHighlighting(input: {
    readonly files: ReadonlyArray<NativeReviewDiffFile>;
    readonly rows: ReadonlyArray<NativeReviewDiffRow>;
    readonly scheme: HighlightScheme;
    readonly collapsedFileIds: ReadonlySet<string>;
    readonly resetKey: string;
    readonly enabled: boolean;
}): {
    rejectTokenPatch: (payload: Readonly<Record<string, unknown>>) => void;
    acknowledgeTokenPatch: (payload: Readonly<Record<string, unknown>>) => void;
    tokensPatchJson: string;
    updateVisibleRange: (nextRange: NativeReviewVisibleRange) => void;
};
