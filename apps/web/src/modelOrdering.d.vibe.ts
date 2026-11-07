import type { ProviderInstanceId } from "@t3tools/contracts";
export interface ModelSlugItem {
    readonly slug: string;
}
export interface ProviderModelItem extends ModelSlugItem {
    readonly instanceId: ProviderInstanceId;
}
export declare function providerModelKey(instanceId: ProviderInstanceId, slug: string): string;
export declare function sortModelsForProviderInstance<T extends ModelSlugItem>(models: ReadonlyArray<T>, options?: {
    readonly modelOrder?: ReadonlyArray<string>;
    readonly favoriteModels?: ReadonlySet<string> | ReadonlyArray<string>;
    readonly groupFavorites?: boolean;
}): T[];
export declare function sortProviderModelItems<T extends ProviderModelItem>(items: ReadonlyArray<T>, options?: {
    readonly favoriteModelKeys?: ReadonlySet<string> | ReadonlyArray<string>;
    readonly groupFavorites?: boolean;
    readonly instanceOrder?: ReadonlyArray<ProviderInstanceId>;
}): T[];
