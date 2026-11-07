import { type CustomModelSetting, type ModelCapabilities, type ServerProviderModel, type ServerProviderSlashCommand } from "@t3tools/contracts";
import type * as EffectAcpSchema from "effect-acp/compat";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
export declare const GROK_PRESENTATION: {
    readonly displayName: "Grok";
    readonly supportsConversationRollback: false;
    readonly showInteractionModeToggle: false;
    readonly supportedRuntimeModes: readonly ["approval-required", "auto", "full-access"];
};
export declare function grokModelsFromSettings(customModels: ReadonlyArray<CustomModelSetting> | undefined, builtInModels?: ReadonlyArray<ServerProviderModel>): ReadonlyArray<ServerProviderModel>;
export declare function nonEmptyString(value: unknown): string | undefined;
export declare function isRecord(value: unknown): value is Record<string, unknown>;
export declare function grokReasoningOptionsFromModel(model: EffectAcpSchema.ModelInfo): {
    readonly options: ReadonlyArray<{
        value: string;
        label: string;
        description?: string;
        isDefault?: boolean;
    }>;
    readonly currentValue: string | undefined;
};
export declare function buildGrokModelCapabilities(model: EffectAcpSchema.ModelInfo): ModelCapabilities;
export declare function buildGrokModelsFromSessionModelState(modelState: EffectAcpSchema.SessionModelState | null | undefined): ReadonlyArray<ServerProviderModel>;
export interface GrokModelsCliOutput {
    readonly authenticated: boolean | null;
    readonly models: ReadonlyArray<ServerProviderModel>;
}
/** Exit status is always 0; only output text indicates login state. */
export declare function parseGrokModelsCliOutput(output: string): GrokModelsCliOutput;
export declare function displayNameFromGrokModelSlug(slug: string): string;
export declare function grokSlashCommandsFromInitialize(initialized: EffectAcpSchema.InitializeResponse): ReadonlyArray<ServerProviderSlashCommand>;
export declare const checkGrokProviderStatus: (grokSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, environment?: NodeJS.ProcessEnv | undefined, cwd?: string | undefined) => Effect.Effect<ServerProviderDraft, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
