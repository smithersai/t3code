import * as Schema from "effect/Schema";
import { ProviderDriverKind } from "./providerInstance.vibe";
export declare const ProviderOptionDescriptorType: Schema.Literals<readonly ["select", "boolean"]>;
export type ProviderOptionDescriptorType = typeof ProviderOptionDescriptorType.Type;
export declare const ProviderOptionChoice: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly isDefault: Schema.optional<Schema.Boolean>;
}>;
export type ProviderOptionChoice = typeof ProviderOptionChoice.Type;
export declare const SelectProviderOptionDescriptor: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"select">;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly isDefault: Schema.optional<Schema.Boolean>;
    }>>;
    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
}>;
export type SelectProviderOptionDescriptor = typeof SelectProviderOptionDescriptor.Type;
export declare const BooleanProviderOptionDescriptor: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"boolean">;
    readonly currentValue: Schema.optional<Schema.Boolean>;
}>;
export type BooleanProviderOptionDescriptor = typeof BooleanProviderOptionDescriptor.Type;
export declare const ProviderOptionDescriptor: Schema.Union<readonly [Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"select">;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly isDefault: Schema.optional<Schema.Boolean>;
    }>>;
    readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
}>, Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly type: Schema.Literal<"boolean">;
    readonly currentValue: Schema.optional<Schema.Boolean>;
}>]>;
export type ProviderOptionDescriptor = typeof ProviderOptionDescriptor.Type;
export declare const ProviderOptionSelectionValue: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
export type ProviderOptionSelectionValue = typeof ProviderOptionSelectionValue.Type;
export declare const ProviderOptionSelection: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
}>;
export type ProviderOptionSelection = typeof ProviderOptionSelection.Type;
export declare const ProviderOptionSelections: Schema.Union<readonly [Schema.$Array<Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
}>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
}>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>;
export type ProviderOptionSelections = typeof ProviderOptionSelections.Type;
export declare const ModelCapabilities: Schema.Struct<{
    readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"select">;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly isDefault: Schema.optional<Schema.Boolean>;
        }>>;
        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>, Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.optional<Schema.Boolean>;
    }>]>>>;
}>;
export type ModelCapabilities = typeof ModelCapabilities.Type;
export declare const CustomModelEntry: Schema.Struct<{
    readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly capabilities: Schema.optional<Schema.Struct<{
        readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"select">;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly isDefault: Schema.optional<Schema.Boolean>;
            }>>;
            readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>, Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"boolean">;
            readonly currentValue: Schema.optional<Schema.Boolean>;
        }>]>>>;
    }>>;
}>;
export type CustomModelEntry = typeof CustomModelEntry.Type;
export declare const CustomModelSetting: Schema.Union<readonly [Schema.String, Schema.Struct<{
    readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly capabilities: Schema.optional<Schema.Struct<{
        readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"select">;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly isDefault: Schema.optional<Schema.Boolean>;
            }>>;
            readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        }>, Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly type: Schema.Literal<"boolean">;
            readonly currentValue: Schema.optional<Schema.Boolean>;
        }>]>>>;
    }>>;
}>]>;
export type CustomModelSetting = typeof CustomModelSetting.Type;
export declare const DEFAULT_MODEL = "gpt-6-astra";
/** First model present in model/list wins; otherwise use Codex's isDefault. */
export declare const PREFERRED_DEFAULT_CODEX_MODELS: ReadonlyArray<string>;
export declare const DEFAULT_TEXT_GENERATION_MODEL = "gpt-6-luna";
/** Keep the official Antigravity session's current model. Never send this ID to ACP. */
export declare const ANTIGRAVITY_DEFAULT_MODEL = "antigravity-default";
export declare const DEFAULT_TEXT_GENERATION_REASONING_EFFORT = "low";
/** Let Muse pick the account's default model. Never send this ID to Muse. */
export declare const MUSE_DEFAULT_MODEL = "default";
export declare const DEFAULT_MODEL_BY_PROVIDER: Partial<Record<ProviderDriverKind, string>>;
export declare const DEFAULT_TEXT_GENERATION_MODEL_BY_PROVIDER: Partial<Record<ProviderDriverKind, string>>;
export declare const MODEL_SLUG_ALIASES_BY_PROVIDER: Partial<Record<ProviderDriverKind, Record<string, string>>>;
export declare const PROVIDER_DISPLAY_NAMES: Partial<Record<ProviderDriverKind, string>>;
