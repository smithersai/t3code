import type { EnvironmentIdentificationMode } from "@t3tools/contracts";
export type SidebarStageBackdropVariant = "nightly" | "dev";
export type EnvironmentIdentificationPillLabel = "Dev" | "Nightly";
/** @throws {never} */
export declare function resolveSidebarStageBackdropVariant(stageLabel: string, mode?: EnvironmentIdentificationMode): SidebarStageBackdropVariant | null;
/** @throws {never} */
export declare function resolveEnvironmentIdentificationPillLabel(stageLabel: string): EnvironmentIdentificationPillLabel | null;
/** @throws {never} */
export declare function useEnvironmentStageLabel(): string;
/** @throws {never} */
export declare function useSidebarStageBackdropVariant(mode: EnvironmentIdentificationMode): SidebarStageBackdropVariant | null;
/** @throws {never} */
export declare function SidebarStageBackdrop({ variant }: {
    variant: SidebarStageBackdropVariant;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function StageBackdropButtonArt({ variant }: {
    variant: SidebarStageBackdropVariant;
}): import("react").JSX.Element;
