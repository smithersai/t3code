import type { EnvironmentId, PreviewRuntime, PreviewSessionSnapshot } from "@t3tools/contracts";
export declare function previewRuntimeFor(environmentId: EnvironmentId): PreviewRuntime | undefined;
export declare function alternatePreviewRuntime(environmentId: EnvironmentId, primaryEnvironmentId: EnvironmentId | null, serverBrowser: boolean, snapshot: Pick<PreviewSessionSnapshot, "runtime"> | null | undefined): PreviewRuntime | null;
export declare function isPreviewAvailableFor(environmentId: EnvironmentId): boolean;
export declare function usePreviewAvailable(environmentId: EnvironmentId | null): boolean;
export declare function rendersServerTabNatively(environmentId: EnvironmentId, primaryEnvironmentId: EnvironmentId | null, snapshot: Pick<PreviewSessionSnapshot, "runtime" | "headless"> | null | undefined): boolean;
export declare function useRendersServerTabNatively(environmentId: EnvironmentId, snapshot: Pick<PreviewSessionSnapshot, "runtime" | "headless"> | null | undefined): boolean;
