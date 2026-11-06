import type * as EffectAcpSchema from "effect-acp/compat";
import { type ProviderApprovalOption, type RuntimeMode } from "@t3tools/contracts";
import type { GrokSettings } from "../settings.vibe";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as EffectAcpErrors from "effect-acp/errors";
import * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
type GrokAcpRuntimeGrokSettings = Pick<GrokSettings, "binaryPath">;
interface GrokAcpRuntimeInput extends Omit<AcpSessionRuntime.AcpSessionRuntimeOptions, "authMethodId" | "clientCapabilities" | "spawn"> {
    readonly grokSettings: GrokAcpRuntimeGrokSettings | null | undefined;
    readonly environment?: NodeJS.ProcessEnv;
    readonly runtimeMode?: RuntimeMode;
}
export declare const GROK_SUPPORTED_RUNTIME_MODES: readonly ["approval-required", "auto", "full-access"];
/** @throws {never} */
export declare function grokAcpSpawnArgs(runtimeMode?: RuntimeMode): ReadonlyArray<string>;
export declare const GROK_ACP_CANCEL_META: {
    readonly cancelTrigger: "ctrl_c";
};
export declare const GROK_ACP_INITIALIZE_META: {
    readonly clientType: "extension";
};
/** @throws {never} */
export declare function grokApprovalOptions(request: EffectAcpSchema.RequestPermissionRequest): ReadonlyArray<ProviderApprovalOption>;
export declare const makeGrokAcpRuntime: (input: GrokAcpRuntimeInput) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntime["Service"], EffectAcpErrors.AcpError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | Scope.Scope>;
export declare const GROK_DEFAULT_MODEL_SLUG = "grok-build";
/** @throws {never} */
export declare function resolveGrokAcpBaseModelId(model: string | null | undefined): string;
/** @throws {never} */
export declare function isValidGrokReasoningEffortToken(value: string): boolean;
/** @throws {never} */
export declare function currentGrokModelIdFromSessionSetup(sessionSetupResult: EffectAcpSchema.LoadSessionResponse | EffectAcpSchema.NewSessionResponse | EffectAcpSchema.ResumeSessionResponse): string | undefined;
/** @throws {never} */
export declare function currentGrokReasoningEffortFromSessionSetup(sessionSetupResult: EffectAcpSchema.LoadSessionResponse | EffectAcpSchema.NewSessionResponse | EffectAcpSchema.ResumeSessionResponse): string | undefined;
export declare function applyGrokAcpModelSelection<E>(input: {
    readonly runtime: Pick<AcpSessionRuntime.AcpSessionRuntime["Service"], "setSessionModel">;
    readonly currentModelId: string | undefined;
    readonly currentReasoningEffort?: string | undefined;
    readonly requestedModelId: string | undefined;
    readonly requestedReasoningEffort?: string | undefined;
    /** @throws {never} */
    readonly mapError: (cause: EffectAcpErrors.AcpError) => E;
}): Effect.Effect<string | undefined, E>;
export {};
