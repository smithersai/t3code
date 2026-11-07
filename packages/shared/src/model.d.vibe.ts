import { type CustomModelSetting, ModelCapabilities, type ModelSelection, ProviderDriverKind, ProviderInstanceId, type ProviderOptionDescriptor, type ProviderOptionSelection } from "@t3tools/contracts";
/** @throws {never} */
export declare function modelSelectionCommandType(currentInstanceId: ProviderInstanceId, selection: ModelSelection): "provider.switch" | "thread.model-selection.set";
export interface SelectableModelOption {
    slug: string;
    name: string;
    aliases?: ReadonlyArray<string> | undefined;
}
/** @throws {never} */
export declare function createModelCapabilities(input: {
    optionDescriptors: ReadonlyArray<ProviderOptionDescriptor>;
}): ModelCapabilities;
/** @throws {never} */
export declare function getModelSelectionStringOptionValue(modelSelection: ModelSelection | null | undefined, id: string): string | undefined;
/** @throws {never} */
export declare function getModelSelectionBooleanOptionValue(modelSelection: ModelSelection | null | undefined, id: string): boolean | undefined;
/** @throws {never} */
export declare function modelSelectionsEqual(left: ModelSelection, right: ModelSelection): boolean;
/**
 * Whether a composer's draft model pick is what the thread already runs. Web sends
 * `fastMode: false` for models with a fast toggle while mobile omits it, so off counts as unset.
 * @throws {never}
 */
export declare function draftModelPickMatchesThread(pick: ModelSelection, thread: ModelSelection): boolean;
/** @throws {never} */
export declare function getProviderOptionDescriptors(input: {
    caps: ModelCapabilities;
    selections?: ReadonlyArray<ProviderOptionSelection> | null | undefined;
}): ReadonlyArray<ProviderOptionDescriptor>;
/** @throws {never} */
export declare function getProviderOptionStatedValue(id: string, selection?: ModelSelection | null, reportedSelection?: ModelSelection | null): string | boolean | undefined;
/** @throws {never} */
export declare function getProviderOptionCurrentValue(descriptor: ProviderOptionDescriptor | null | undefined, selection?: ModelSelection | null, reportedSelection?: ModelSelection | null): string | boolean | undefined;
/** @throws {never} */
export declare function getProviderOptionCurrentLabel(descriptor: ProviderOptionDescriptor | null | undefined, selection?: ModelSelection | null, reportedSelection?: ModelSelection | null): string | undefined;
/** @throws {never} */
export declare function buildProviderOptionSelectionsFromDescriptors(descriptors: ReadonlyArray<ProviderOptionDescriptor> | null | undefined): Array<ProviderOptionSelection> | undefined;
/** @throws {never} */
export declare function buildExplicitProviderOptionSelectionsFromDescriptors(descriptors: ReadonlyArray<ProviderOptionDescriptor> | null | undefined, selections: ReadonlyArray<ProviderOptionSelection> | null | undefined): Array<ProviderOptionSelection> | undefined;
/** @throws {never} */
export declare function isClaudeUltrathinkPrompt(text: string | null | undefined): boolean;
/** @throws {never} */
export declare function codexModelFamily(slug: string): string;
/** @throws {never} */
export declare function formatCodexModelName(name: string): string;
/** @throws {never} */
export declare function formatModelSlugName(slug: string): string;
/** @throws {never} */
export declare function normalizeModelSlug(model: string | null | undefined, provider?: ProviderDriverKind): string | null;
/**
 * Custom model identifiers are provider-owned, so only trim them; never expand aliases.
 * @throws {never}
 */
export declare function normalizeCustomModelSlug(model: string | null | undefined): string | null;
export interface CustomModelDefinition {
    readonly slug: string;
    readonly name: string;
    readonly capabilities: ModelCapabilities | null;
}
/** @throws {never} */
export declare function readCustomModelEntries(value: unknown): CustomModelDefinition[];
/** @throws {never} */
export declare function toCustomModelSetting(entry: CustomModelDefinition): CustomModelSetting;
/** @throws {never} */
export declare function resolveSelectableModel(provider: ProviderDriverKind, value: string | null | undefined, options: ReadonlyArray<SelectableModelOption>): string | null;
/** @throws {never} */
export declare function createModelSelection(instanceId: ProviderInstanceId, model: string, options?: ReadonlyArray<ProviderOptionSelection> | null): ModelSelection;
/** @throws {never} */
export declare function resolvePromptInjectedEffort(caps: ModelCapabilities, rawEffort: string | null | undefined): string | null;
/** @throws {never} */
export declare function applyClaudePromptEffortPrefix(text: string, effort: string | null | undefined): string;
