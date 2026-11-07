import { type ReactNode } from "react";
import { type ProviderInstanceConfig, type ProviderInstanceEnvironmentVariable, type ProviderInstanceId, type AcpRegistryUrlAuthAction, type EnvironmentId, type ProjectId, type ServerProvider, type ServerProviderModel } from "@t3tools/contracts";
import { type CustomModelDefinition } from "@t3tools/shared/model";
import type { ProviderClientDefinition, ProviderEnvironmentField } from "@t3tools/provider-core/client";
/** @throws {never} */
export declare function deriveProviderModelsForDisplay(input: {
    readonly liveModels: ReadonlyArray<ServerProviderModel> | undefined;
    readonly customModels: ReadonlyArray<CustomModelDefinition>;
}): ReadonlyArray<ServerProviderModel>;
/** @throws {never} */
export declare function nextProviderEnvironmentWithFieldValue(environment: ReadonlyArray<ProviderInstanceEnvironmentVariable> | undefined, field: ProviderEnvironmentField, value: string): ReadonlyArray<ProviderInstanceEnvironmentVariable>;
/** @throws {never} */
export declare function ProviderEnvironmentSection(props: {
    readonly environment: ReadonlyArray<ProviderInstanceEnvironmentVariable>;
    /** @throws {never} */
    readonly onChange: (environment: ReadonlyArray<ProviderInstanceEnvironmentVariable>) => void;
}): import("react").JSX.Element;
interface ProjectOverrideControl {
    readonly value: boolean | undefined;
    readonly effectiveEnabled: boolean;
    /** @throws {never} */
    readonly onChange: (next: boolean) => void;
    /** @throws {never} */
    readonly onReset: () => void;
}
interface ProviderInstanceCardProps {
    readonly instanceId: ProviderInstanceId;
    readonly instance: ProviderInstanceConfig;
    readonly driverOption: ProviderClientDefinition | undefined;
    readonly liveProvider: ServerProvider | undefined;
    readonly mode: "list" | "editor";
    readonly selected?: boolean | undefined;
    readonly onSelect?: (
    /** @throws {never} */
    () => void) | undefined;
    readonly readOnly?: boolean | undefined;
    readonly canWriteSettings?: boolean;
    /** @throws {never} */
    readonly onUpdate: (nextInstance: ProviderInstanceConfig) => void;
    readonly onDelete?: (
    /** @throws {never} */
    () => void) | undefined;
    readonly headerAction?: ReactNode | undefined;
    readonly setup?: ReactNode;
    readonly runtime?: ReactNode;
    readonly hiddenModels: ReadonlyArray<string>;
    readonly favoriteModels: ReadonlyArray<string>;
    readonly modelOrder: ReadonlyArray<string>;
    /** @throws {never} */
    readonly onHiddenModelsChange: (next: ReadonlyArray<string>, affectedModels?: ReadonlyArray<string>) => void;
    /** @throws {never} */
    readonly onFavoriteModelsChange: (next: ReadonlyArray<string>) => void;
    /** @throws {never} */
    readonly onToggleFavorite: (model: string) => void;
    /** @throws {never} */
    readonly onModelOrderChange: (next: ReadonlyArray<string>) => void;
    readonly onRunUpdate?: (
    /** @throws {never} */
    () => void) | undefined;
    readonly onInstallRecommended?: (
    /** @throws {never} */
    () => void) | undefined;
    readonly isUpdating?: boolean | undefined;
    readonly onAcceptUrlAuth?: (
    /** @throws {never} */
    (action: AcpRegistryUrlAuthAction) => void) | undefined;
    readonly environmentId?: EnvironmentId | undefined;
    readonly projectOverride?: ProjectOverrideControl | undefined;
    readonly acpProjects?: ReadonlyArray<{
        readonly id: ProjectId;
        readonly title: string;
        readonly workspaceRoot: string;
    }> | undefined;
}
/** Unknown drivers stay read-only to preserve fork config. projectOverride switches affect only the
 * project, not instance.enabled.
 * @throws {never}
 */
export declare function ProviderInstanceCard({ instanceId, instance, driverOption, liveProvider, mode, selected, onSelect, readOnly, canWriteSettings, onUpdate, onDelete, headerAction, setup, runtime, hiddenModels, favoriteModels, modelOrder, onHiddenModelsChange, onFavoriteModelsChange, onToggleFavorite, onModelOrderChange, onRunUpdate, onInstallRecommended, isUpdating, onAcceptUrlAuth, environmentId, acpProjects, projectOverride, }: ProviderInstanceCardProps): import("react").JSX.Element;
export {};
