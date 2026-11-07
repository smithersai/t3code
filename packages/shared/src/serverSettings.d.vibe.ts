import type { ModelPreferences } from "@t3tools/contracts/settings";
import { type ModelSelection, type ProjectId, ProviderDriverKind, ProviderInstanceId, type ServerProvider, ServerSettings, type ServerSettingsPatch } from "@t3tools/contracts";
/** @throws {never} */
export declare function resolveProjectAgentBrowserAccess(settings: Pick<ServerSettings, "enableAgentBrowserAccess" | "projectAgentBrowserAccessOverrides" | "projectSettingsOverrides">, projectId: ProjectId): boolean;
/** @throws {never} */
export declare function resolveProjectAutoPull(settings: Pick<ServerSettings, "defaultAutoPull" | "projectAutoPullOverrides" | "projectSettingsOverrides">, projectId: ProjectId, legacyAutoPull: boolean | undefined): boolean;
/** @throws {never} */
export declare function isModelSelectionProviderEnabled(settings: ServerSettings, selection: ModelSelection): boolean;
/**
 * Only project-scoped callers may include configured instances when falling back; machine-level callers leave it unset.
 * @throws {never}
 */
export declare function fallbackTextGenerationModelSelection(providerInstances: ServerSettings["providerInstances"], isEnabled: 
/** @throws {never} */
(instanceId: ProviderInstanceId, driver: ProviderDriverKind) => boolean, options?: {
    readonly includeConfiguredInstances?: boolean;
    readonly defaultModelSelection?: ModelSelection | null;
}): ModelSelection | null;
/** @throws {never} */
export declare function resolveSourceControlWriterModelSelection(settings: ServerSettings, providers: ReadonlyArray<ServerProvider> | undefined, projectId: ProjectId | null): ModelSelection;
/** @throws {never} */
export declare function resolveReviewGuideModelSelection(settings: ServerSettings, providers: ReadonlyArray<ServerProvider> | undefined, projectId: ProjectId | null): ModelSelection;
export interface PersistedServerObservabilitySettings {
    readonly otlpTracesUrl: string | undefined;
    readonly otlpMetricsUrl: string | undefined;
    readonly otlpLogsUrl: string | undefined;
}
/** @throws {never} */
export declare function parsePersistedServerObservabilitySettings(raw: string): PersistedServerObservabilitySettings;
/** @throws {never} */
export declare function deriveLegacyProjectOverrides(settings: Pick<ServerSettings, "projectSettingsOverrides">): Pick<ServerSettings, "projectAgentBrowserAccessOverrides" | "projectAutoPullOverrides" | "projectScriptOverrides">;
/** @throws {never} */
export declare function applyServerSettingsPatch(current: ServerSettings, rawPatch: ServerSettingsPatch): ServerSettings;
/** @throws {never} */
export declare function resolveModelPreferences(settings: Pick<ServerSettings, "favorites" | "providerModelPreferences">, legacy?: Partial<ModelPreferences>): ModelPreferences;
/**
 * Empty legacy values do not claim ownership before another client can migrate its saved list.
 * @throws {never}
 */
export declare function modelPreferencesMigrationPatch(settings: Pick<ServerSettings, "favorites" | "providerModelPreferences">, legacy: Partial<ModelPreferences>): ServerSettingsPatch | null;
