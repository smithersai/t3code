import { type ProjectScopedServerSettingKey, type ServerSettings, type UnifiedSettings } from "@t3tools/contracts";
import { type ProjectOverrideEntry, type ScopedSettingsPatch } from "./scopedSettings.vibe";
export declare function useScopedSettings<T = UnifiedSettings>(selector?: (settings: UnifiedSettings) => T): T;
export declare function useScopedSettingsMixed(keys: readonly (keyof ServerSettings)[]): boolean;
export declare function useScopedSettingSource(keys: readonly (keyof ServerSettings)[]): import("./scopedSettings.vibe").ScopedSettingSource;
export declare function useUpdateScopedSettings(): (patch: ScopedSettingsPatch) => void;
export declare function useClearScopedSettings(): (keys: readonly ProjectScopedServerSettingKey[]) => void;
export declare function useClearProjectOverrides(): (entries: readonly ProjectOverrideEntry[], keys: readonly ProjectScopedServerSettingKey[]) => void;
export declare function useScopedSettingsWriteAllowed(): boolean;
