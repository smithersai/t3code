import { type CustomModelSetting, type ModelCapabilities, type ModelSelection, type ServerProviderModel, type ServerProviderUpdateRequiredModel } from "@t3tools/contracts";
import { type ClaudeCodeCompatibility, type ClaudeCodeProfile } from "./ClaudeModelManifest.vibe";
import * as ModelCatalog from "@t3tools/provider-core/server/ModelCatalog";
export interface ClaudeCatalogModel {
    readonly model: ServerProviderModel;
    readonly runtime: ClaudeCodeProfile;
    readonly compatibility: ClaudeCodeCompatibility;
}
export interface ClaudeModelCatalog {
    readonly models: ReadonlyArray<ClaudeCatalogModel>;
}
/**
 * Resolve the fallback on each read so its new-model badges can expire.
 * @throws {never}
 */
export declare function resolveClaudeModelCatalog(catalog: ModelCatalog.ProviderCatalog | undefined): ClaudeModelCatalog;
export declare const BUNDLED_CLAUDE_MODEL_CATALOG: ClaudeModelCatalog;
/** @throws {never} */
export declare function scopeClaudeModelCatalog(catalog: ClaudeModelCatalog, customModels: ReadonlyArray<CustomModelSetting>): ClaudeModelCatalog;
/** @throws {never} */
export declare function resolveClaudeModelSlug(catalog: ClaudeModelCatalog, slugOrAlias: string): string;
/** @throws {never} */
export declare function getClaudeCatalogModelCapabilities(catalog: ClaudeModelCatalog, slugOrAlias: string | null | undefined): ModelCapabilities;
/** @throws {never} */
export declare function resolveClaudeModelsForVersion(catalog: ClaudeModelCatalog, version: string | null | undefined): ReadonlyArray<ClaudeCatalogModel["model"]>;
/** @throws {never} */
export declare function resolveClaudeUpdateRequiredModels(catalog: ClaudeModelCatalog, version: string | null | undefined): ReadonlyArray<ServerProviderUpdateRequiredModel>;
/** @throws {never} */
export declare function formatClaudeVersionUpgradeMessage(catalog: ClaudeModelCatalog, version: string | null): string | undefined;
/** @throws {never} */
export declare function resolveClaudeCatalogEffort(catalog: ClaudeModelCatalog, model: string | null | undefined, raw: string | null | undefined): string | undefined;
/** @throws {never} */
export declare function normalizeClaudeCatalogEffort(catalog: ClaudeModelCatalog, effort: string | null | undefined, model: string | null | undefined): string | undefined;
/** @throws {never} */
export declare function isClaudeCatalogUltracodeEffort(effort: string | null | undefined): boolean;
/** @throws {never} */
export declare function resolveClaudeCatalogApiModelId(catalog: ClaudeModelCatalog, modelSelection: ModelSelection): string;
/** @throws {never} */
export declare function resolveClaudeCatalogContextWindowTokens(catalog: ClaudeModelCatalog, modelSelection: ModelSelection | undefined): number | undefined;
