import type { ModelCapabilities, ProviderDriverKind, ServerProviderModel } from "@t3tools/contracts";
import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import type { ServerProviderDraft } from "./snapshotProbe.vibe";
export interface ProviderCatalogModel {
    readonly slug: string;
    readonly name: string;
    readonly shortName?: string;
    readonly subProvider?: string;
    readonly aliases?: ReadonlyArray<string>;
    readonly status: "current" | "legacy";
    readonly badge?: "new";
    readonly capabilities: ModelCapabilities | null;
    readonly adapter: unknown;
    readonly profileAdapter: unknown;
}
export interface ProviderCatalog {
    readonly models: ReadonlyArray<ProviderCatalogModel>;
    readonly defaultChatModel: string | undefined;
}
declare const ModelCatalog_base: Context.ServiceClass<ModelCatalog, "@t3tools/provider-core/server/ModelCatalog", {
    readonly current: (driverKind: ProviderDriverKind) => Effect.Effect<ProviderCatalog | undefined>;
    /** @throws {never} */
    readonly bundled: (driverKind: ProviderDriverKind) => ProviderCatalog | undefined;
    readonly refreshInBackground: Effect.Effect<void>;
}>;
export declare class ModelCatalog extends ModelCatalog_base {
}
/** @throws {never} */
export declare const catalogServerModel: (catalog: ProviderCatalog, entry: ProviderCatalogModel) => ServerProviderModel;
export interface CatalogMatching {
    /** @throws {never} */
    readonly family?: (slug: string) => string;
}
/** @throws {never} */
export declare function classifyCatalogModels(models: ReadonlyArray<ServerProviderModel>, catalog: ProviderCatalog | undefined, matching?: CatalogMatching): ReadonlyArray<ServerProviderModel>;
/** @throws {never} */
export declare function applyCatalogDefault(models: ReadonlyArray<ServerProviderModel>, catalog: ProviderCatalog | undefined, matching?: CatalogMatching): ReadonlyArray<ServerProviderModel>;
/** @throws {never} */
export declare function applyModelCatalog(draft: ServerProviderDraft, catalog: ProviderCatalog | undefined, matching?: CatalogMatching): ServerProviderDraft;
export {};
