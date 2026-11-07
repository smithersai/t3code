import { type ServerSettings } from "@t3tools/contracts";
import type { EnvironmentPresentation } from "../../state/environments.vibe";
import type { ProjectOverrideEntry, ScopedSettingsTarget } from "./scopedSettings.vibe";
interface InheritanceLayer {
    readonly key: "project" | "environment" | "t3.json" | "built-in";
    readonly label: string;
    readonly value: string;
    readonly effective: boolean;
    readonly set: boolean;
}
/**
 * Matches resolveProjectSettings order.
 * @throws {never}
 */
export declare function settingInheritanceLayers(target: ScopedSettingsTarget, environmentSettings: ServerSettings, key: keyof ServerSettings): readonly InheritanceLayer[];
export type SettingInheritanceState = "default" | "environment" | "inherited" | "overridden" | "mixed";
export interface SettingOverridingProject extends ProjectOverrideEntry {
    readonly label: string;
    /** @throws {never} */
    readonly open: () => void;
}
/** @throws {never} */
export declare function SettingInheritance({ state, summary, targets, environments, keys, overridingProjects, onClearOverrides, }: {
    state: SettingInheritanceState;
    summary: string;
    targets: readonly ScopedSettingsTarget[];
    environments: readonly Pick<EnvironmentPresentation, "environmentId" | "label" | "displayUrl" | "serverConfig">[];
    keys: readonly (keyof ServerSettings)[];
    overridingProjects?: readonly SettingOverridingProject[];
    /** @throws {never} */
    onClearOverrides?: (entries: readonly ProjectOverrideEntry[]) => void;
}): import("react").JSX.Element | null;
export {};
