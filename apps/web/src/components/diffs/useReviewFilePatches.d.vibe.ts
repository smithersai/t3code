import type { FileDiffMetadata } from "@pierre/diffs";
import type { EnvironmentId, ReviewDiffPreviewInput, ReviewDiffPreviewSource } from "@t3tools/contracts";
import { type RenderablePatch } from "~/lib/diffRendering";
export declare function useReviewFilePatches({ environmentId, cwd, source, baseRef, ignoreWhitespace, theme, previewInput, preview, }: {
    environmentId: EnvironmentId | undefined;
    cwd: string | undefined;
    source: ReviewDiffPreviewSource | null;
    baseRef: string | null;
    ignoreWhitespace: boolean;
    theme: "light" | "dark";
    /** The preview the file list came from; a newer revision of it refreshes loaded patches. */
    previewInput: ReviewDiffPreviewInput | undefined;
    preview: RenderablePatch | null;
}): {
    scope: string;
    fileStates: Map<string, {
        readonly error: boolean;
        readonly truncated: boolean;
    }>;
    isPending: boolean;
    retry: (path: string) => void;
    requestFile: (index: number) => void;
    readyFilePaths: Set<string>;
    renderableFiles: FileDiffMetadata[];
    settledFileCount: number;
    loadNextFiles: () => void;
};
