/** Reconcile closes removed/replaced scopes before creating replacements: at most one live instance per id. */
import type { ProviderInstanceConfigMap } from "@t3tools/contracts";
import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
export interface ProviderInstanceRegistryMutatorShape {
    readonly reconcile: (configMap: ProviderInstanceConfigMap) => Effect.Effect<void>;
}
declare const ProviderInstanceRegistryMutator_base: Context.ServiceClass<ProviderInstanceRegistryMutator, "t3/provider/ProviderInstanceRegistryMutator", ProviderInstanceRegistryMutatorShape>;
export declare class ProviderInstanceRegistryMutator extends ProviderInstanceRegistryMutator_base {
}
export {};
