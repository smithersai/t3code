import { type ModelSelection, ProviderDriverKind, ProviderInstanceId, type ServerProvider } from "@t3tools/contracts";
import { UnifiedSettings } from "@t3tools/contracts/settings";
import { ModelEsque } from "./components/chat/providerIconUtils.ts";
import { type ProviderInstanceEntry } from "./providerInstances.ts";
export declare const MAX_CUSTOM_MODEL_LENGTH = 256;
export interface AppModelOption {
    slug: string;
    name: string;
    shortName?: string;
    subProvider?: string;
    aliases?: ReadonlyArray<string>;
    badge?: "new";
    isCustom: boolean;
    isDefault?: boolean;
    isLegacy?: boolean;
    isUnavailable?: boolean;
}
export declare function getAppModelOptionsForInstance(settings: UnifiedSettings, entry: ProviderInstanceEntry, selectedModel?: string | null): AppModelOption[];
export declare function resolveAppModelSelection(provider: ProviderDriverKind, settings: UnifiedSettings, providers: ReadonlyArray<ServerProvider>, selectedModel: string | null | undefined): string;
export declare function resolveAppModelSelectionForInstance(instanceId: ProviderInstanceId, settings: UnifiedSettings, providers: ReadonlyArray<ServerProvider>, selectedModel: string | null | undefined, resolutionOptions?: {
    readonly preserveUnavailableSelection?: boolean;
}): string | null;
export declare function resolveEffectiveDefaultModelSelection(settings: UnifiedSettings, providers: ReadonlyArray<ServerProvider>, selection: ModelSelection): ModelSelection;
export declare function getCustomModelOptionsByInstance(settings: UnifiedSettings, providers: ReadonlyArray<ServerProvider>, selectedInstanceId?: ProviderInstanceId | null, selectedModel?: string | null): ReadonlyMap<ProviderInstanceId, ReadonlyArray<ModelEsque>>;
export declare function selectsPlanAgent(options: ModelSelection["options"]): boolean;
export declare function resolveAppModelSelectionState(settings: UnifiedSettings, providers: ReadonlyArray<ServerProvider>): ModelSelection;
