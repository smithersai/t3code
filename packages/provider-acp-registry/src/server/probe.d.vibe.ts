import { AcpRegistryOperationError, AcpRegistryProbeResult, type AcpRegistryProbeAuthMethod, type AcpRegistryProbeModel, type AcpRegistryUrlAuthAction, type ProviderInstanceId, type ServerProviderSkill, type ServerProviderSlashCommand } from "@t3tools/contracts";
import { AcpRegistrySettings } from "../settings.vibe";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import type * as EffectAcpErrors from "effect-acp/errors";
import type * as EffectAcpSchema from "effect-acp/compat";
import * as AcpRegistrySupport from "./AcpRegistrySupport.ts";
import { acpProviderOptionDescriptors } from "@t3tools/provider-acp/server/sessionConfig";
import * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
/** @throws {never} */
export declare function normalizeAcpRegistryWebUrl(value: string): string | undefined;
export interface AcpRegistryAuthSpawnContext {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
}
/** @throws {never} */
export declare function normalizeAcpRegistryAuthMethods(methods: ReadonlyArray<EffectAcpSchema.AuthMethod> | undefined, spawn?: AcpRegistryAuthSpawnContext): ReadonlyArray<AcpRegistryProbeAuthMethod>;
export interface AcpRegistryAvailableCommands {
    readonly slashCommands: ReadonlyArray<ServerProviderSlashCommand>;
    readonly skills: ReadonlyArray<ServerProviderSkill>;
}
export interface AcpRegistryLiveConfiguration {
    readonly models: ReadonlyArray<AcpRegistryProbeModel>;
    readonly currentModelId: string | null;
    readonly configOptions: AcpRegistryProbeResult["configOptions"];
}
/** @throws {never} */
export declare function normalizeAcpRegistryLiveConfiguration(configOptions: ReadonlyArray<EffectAcpSchema.SessionConfigOption>, modeState?: Parameters<typeof acpProviderOptionDescriptors>[0]["modeState"], modelState?: EffectAcpSchema.SessionModelState | null): AcpRegistryLiveConfiguration;
/** @throws {never} */
export declare function normalizeAcpRegistryCommands(commands: ReadonlyArray<EffectAcpSchema.AvailableCommand>): AcpRegistryAvailableCommands;
/** @throws {never} */
export declare function acpRegistryProbeResult(instanceId: ProviderInstanceId, started: AcpSessionRuntime.AcpSessionRuntimeStartResult, icon?: string | null, spawn?: AcpRegistryAuthSpawnContext): AcpRegistryProbeResult;
/** @throws {never} */
export declare function acpRegistryProbeFailure(error: EffectAcpErrors.AcpError, authMethods?: ReadonlyArray<AcpRegistryProbeAuthMethod>, authAction?: AcpRegistryUrlAuthAction): AcpRegistryOperationError;
export interface AcpRegistryConfigurationProbeInput {
    readonly instanceId: ProviderInstanceId;
    readonly settings: AcpRegistrySettings;
    readonly cwd: string;
    readonly environment: NodeJS.ProcessEnv;
}
type AcpRegistryManagementInput = AcpRegistryConfigurationProbeInput;
export interface AcpRegistryConfigurationProbeResult {
    readonly probe: AcpRegistryProbeResult;
    readonly slashCommands: ReadonlyArray<ServerProviderSlashCommand>;
    readonly skills: ReadonlyArray<ServerProviderSkill>;
}
export type AcpRegistryConfigurationProbe<Requirements = never> = (input: AcpRegistryConfigurationProbeInput) => Effect.Effect<AcpRegistryConfigurationProbeResult, AcpRegistryOperationError, Requirements>;
export declare const probeAcpRegistryConfiguration: (input: AcpRegistryConfigurationProbeInput) => Effect.Effect<AcpRegistryConfigurationProbeResult, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const listAcpRegistrySessions: (input: AcpRegistryConfigurationProbeInput & {
    readonly cursor?: string;
}) => Effect.Effect<{
    readonly sessions: readonly {
        readonly sessionId: string;
        readonly cwd: string;
        readonly additionalDirectories: readonly string[];
        readonly title: string | null;
        readonly updatedAt: string | null;
        readonly importedThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
    }[];
    readonly nextCursor: string | null;
    readonly canLoad: boolean;
    readonly canResume: boolean;
    readonly canDelete: boolean;
}, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const deleteAcpRegistrySession: (input: AcpRegistryConfigurationProbeInput & {
    readonly sessionId: string;
}) => Effect.Effect<void, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const listAcpRegistryProviders: (input: AcpRegistryConfigurationProbeInput) => Effect.Effect<{
    readonly providers: readonly {
        readonly providerId: string;
        readonly supported: readonly string[];
        readonly required: boolean;
        readonly current: {
            readonly apiType: string;
            readonly baseUrl: string;
        } | null;
    }[];
}, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const setAcpRegistryProvider: (input: AcpRegistryManagementInput & EffectAcpSchema.SetProviderRequest) => Effect.Effect<void, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const disableAcpRegistryProvider: (input: AcpRegistryConfigurationProbeInput & {
    readonly providerId: string;
}) => Effect.Effect<void, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export declare const logoutAcpRegistry: (input: AcpRegistryConfigurationProbeInput) => Effect.Effect<void, AcpRegistryOperationError, AcpRegistrySupport.AcpRegistryCatalog | ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
export {};
