import type { NativeReviewDiffRow, NativeReviewDiffTheme } from "../diffs/nativeReviewDiffSurface";
import type { NativeReviewDiffFile } from "../diffs/nativeReviewDiffTypes";
import type { ResolvedMobileCodeSurface } from "../../lib/appearancePreferences";
import { type MobileThemeId, type MobileThemeVariables } from "../../lib/mobileTheme";
import { type TerminalAppearanceScheme } from "../terminal/terminalTheme";
import { type ReviewParsedDiff, type ReviewRenderableLineRow } from "./reviewModel";
import type { ReviewInlineComment } from "./reviewCommentSelection";
export declare const NATIVE_REVIEW_DIFF_CONTENT_WIDTH = 2800;
export declare function buildNativeReviewSnippetRows(comment: Pick<ReviewInlineComment, "id" | "diff" | "fenceLanguage">): NativeReviewDiffRow[];
export declare function createNativeReviewDiffStyle(codeSurface: ResolvedMobileCodeSurface, wordWrap: boolean): {
    readonly wordWrap: boolean;
    readonly rowHeight: number;
    readonly contentWidth: 2800;
    readonly changeBarWidth: 4;
    readonly gutterWidth: number;
    readonly codePadding: number;
    readonly textVerticalInset: number;
    readonly fileHeaderHeight: 56;
    readonly fileHeaderHorizontalMargin: 8;
    readonly fileHeaderVerticalMargin: 6;
    readonly fileHeaderCornerRadius: 10;
    readonly fileHeaderHorizontalPadding: 10;
    readonly fileHeaderPathRightPadding: 118;
    readonly fileHeaderCountColumnWidth: 38;
    readonly fileHeaderCountGap: 5;
    readonly codeFontSize: number;
    readonly codeFontWeight: "regular";
    readonly lineNumberFontSize: number;
    readonly lineNumberFontWeight: "regular";
    readonly hunkFontSize: 11;
    readonly hunkFontWeight: "medium";
    readonly fileHeaderFontSize: 11;
    readonly fileHeaderFontWeight: "semibold";
    readonly fileHeaderMetaFontSize: 10;
    readonly fileHeaderMetaFontWeight: "semibold";
    readonly fileHeaderSubtextFontSize: 11;
    readonly fileHeaderSubtextFontWeight: "medium";
    readonly fileHeaderStatusFontSize: 9;
    readonly fileHeaderStatusFontWeight: "bold";
    readonly emptyStateFontSize: 12;
    readonly emptyStateFontWeight: "medium";
};
export interface NativeReviewDiffData {
    readonly rows: ReadonlyArray<NativeReviewDiffRow>;
    readonly files: ReadonlyArray<NativeReviewDiffFile>;
    readonly commentTargetsByRowId: ReadonlyMap<string, NativeReviewDiffCommentTarget>;
    readonly rowIdByCommentLineId: ReadonlyMap<string, string>;
    readonly additions: number;
    readonly deletions: number;
}
export interface NativeReviewDiffCommentTarget {
    readonly filePath: string;
    readonly lines: ReadonlyArray<ReviewRenderableLineRow>;
    readonly lineIndex: number;
}
export interface BuildNativeReviewDiffDataInput {
    readonly parsedDiff: ReviewParsedDiff;
    readonly comments?: ReadonlyArray<ReviewInlineComment>;
}
export declare function createNativeReviewDiffTheme(scheme: TerminalAppearanceScheme, themeId: MobileThemeId, appTheme: MobileThemeVariables): NativeReviewDiffTheme;
export declare function buildNativeReviewDiffData(input: BuildNativeReviewDiffDataInput): NativeReviewDiffData;
export declare function buildNativeReviewDiffData(parsedDiff: ReviewParsedDiff): NativeReviewDiffData;
export declare function getCachedNativeReviewDiffData(input: BuildNativeReviewDiffDataInput): NativeReviewDiffData;
