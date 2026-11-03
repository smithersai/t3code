import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type { ProviderTextGeneration } from "@t3tools/provider-core/server/textGeneration";
import * as ProviderInstanceRegistry from "../provider/ProviderInstanceRegistry.ts";
import * as SourceControlProviderRegistry from "../sourceControl/SourceControlProviderRegistry.ts";
export type { BranchNameGenerationInput, BranchNameGenerationResult, CommitMessageGenerationInput, CommitMessageGenerationResult, PrContentGenerationInput, PrContentGenerationResult, ReviewGuideGenerationInput, ReviewGuideGenerationResult, ThreadTitleGenerationInput, ThreadTitleGenerationResult, } from "@t3tools/provider-core/server/textGeneration";
declare const TextGeneration_base: Context.ServiceClass<TextGeneration, "t3/textGeneration/TextGeneration", ProviderTextGeneration>;
export declare class TextGeneration extends TextGeneration_base {
}
/** @public */
export declare const make: Effect.Effect<ProviderTextGeneration, never, ProviderInstanceRegistry.ProviderInstanceRegistry | SourceControlProviderRegistry.SourceControlProviderRegistry>;
export declare const layer: Layer.Layer<TextGeneration, never, ProviderInstanceRegistry.ProviderInstanceRegistry | SourceControlProviderRegistry.SourceControlProviderRegistry>;
