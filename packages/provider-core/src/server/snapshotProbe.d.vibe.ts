import type { CustomModelSetting, ProviderDriverKind, ModelCapabilities, RuntimeMode, ServerProvider, ServerProviderAuth, ServerProviderSkill, ServerProviderSlashCommand, ServerProviderModel, ServerProviderUpdateRequiredModel, ServerProviderState, ServerProviderUsageLimits } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import * as ChildProcess from "effect/process/ChildProcess";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
export declare const isWindowsCommandNotFound: (code: number | null, stderr: string) => Effect.Effect<boolean, never, never>;
export declare const DEFAULT_TIMEOUT_MS = 4000;
export declare const AUTH_PROBE_TIMEOUT_MS = 10000;
export declare const COMPACT_SLASH_COMMAND: {
    name: string;
    description: string;
};
export interface CommandResult {
    readonly stdout: string;
    readonly stderr: string;
    readonly code: number;
}
declare const ProviderCommandNotFoundError_base: Schema.Class<ProviderCommandNotFoundError, Schema.TaggedStruct<"ProviderCommandNotFoundError", {
    readonly binaryPath: Schema.String;
    readonly exitCode: Schema.Number;
    readonly stdoutLength: Schema.Number;
    readonly stderrLength: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderCommandNotFoundError extends ProviderCommandNotFoundError_base {
    get message(): string;
}
export interface ProviderProbeResult {
    readonly installed: boolean;
    readonly version: string | null;
    readonly status: Exclude<ServerProviderState, "disabled">;
    readonly auth: ServerProviderAuth;
    readonly message?: string;
    readonly usageLimits?: ServerProviderUsageLimits;
}
export interface ServerProviderPresentation {
    readonly displayName: string;
    readonly badgeLabel?: string;
    readonly showInteractionModeToggle?: boolean;
    readonly reportsContextWindow?: boolean;
    readonly supportedRuntimeModes?: ReadonlyArray<RuntimeMode>;
    readonly requiresNewThreadForModelChange?: boolean;
    readonly supportsConversationRollback?: boolean;
}
export type ServerProviderDraft = Omit<ServerProvider, "instanceId" | "driver">;
/** @throws {never} */
export declare function nonEmptyTrimmed(value: string | undefined): string | undefined;
/** @throws {never} */
export declare function isCommandMissingCause(error: unknown): boolean;
export declare const spawnAndCollect: (binaryPath: string, command: ChildProcess.Command) => Effect.Effect<CommandResult, PlatformError.PlatformError | ProviderCommandNotFoundError, ChildProcessSpawner.ChildProcessSpawner>;
/** @throws {never} */
export declare function parseGenericCliVersion(output: string): string | null;
/** @throws {never} */
export declare function providerModelsFromSettings(builtInModels: ReadonlyArray<ServerProviderModel>, customModels: ReadonlyArray<CustomModelSetting>, customModelCapabilities: ModelCapabilities | null): ReadonlyArray<ServerProviderModel>;
/** @throws {never} */
export declare function buildSelectOptionDescriptor(input: {
    readonly id: string;
    readonly label: string;
    readonly options: ReadonlyArray<{
        value: string;
        label: string;
        description?: string | undefined;
        isDefault?: boolean | undefined;
    }> | undefined;
    readonly description?: string;
    readonly promptInjectedValues?: ReadonlyArray<string>;
}): {
    id: string;
    label: string;
    type: "select";
    options: {
        id: string;
        label: string;
        description?: string;
        isDefault?: boolean;
    }[];
    currentValue?: string;
    description?: string;
    promptInjectedValues?: string[];
};
/** @throws {never} */
export declare function buildBooleanOptionDescriptor(input: {
    readonly id: string;
    readonly label: string;
    readonly currentValue?: boolean;
    readonly description?: string;
}): {
    id: string;
    label: string;
    type: "boolean";
    description?: string;
    currentValue?: boolean;
};
/** @throws {never} */
export declare function buildServerProvider(input: {
    driver?: ProviderDriverKind;
    presentation: ServerProviderPresentation;
    enabled: boolean;
    checkedAt: string;
    models: ReadonlyArray<ServerProviderModel>;
    updateRequiredModels?: ReadonlyArray<ServerProviderUpdateRequiredModel>;
    slashCommands?: ReadonlyArray<ServerProviderSlashCommand>;
    skills?: ReadonlyArray<ServerProviderSkill>;
    probe: ProviderProbeResult;
}): ServerProviderDraft;
export declare const collectStreamAsString: <E>(stream: Stream.Stream<Uint8Array, E>, options?: {
    readonly maxBytes?: number | undefined;
}) => Effect.Effect<string, E>;
export {};
