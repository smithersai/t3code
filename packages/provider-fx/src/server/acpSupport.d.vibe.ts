import type * as EffectAcpSchema from "effect-acp/compat";
import { type ModelSelection, type ProviderOptionDescriptor } from "@t3tools/contracts";
import type { FxSettings } from "../settings.vibe";
import type * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import type * as Scope from "effect/Scope";
import type * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as EffectAcpErrors from "effect-acp/errors";
import * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
import { type AcpPermissionDisposition } from "@t3tools/provider-acp/server/clientPolicy";
import type * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
export declare const FX_DRIVER_KIND: string & import("effect/Brand").Brand<"ProviderDriverKind">;
/** T3's slug for "Default": the model `fx status` reports, never an fx model id. */
export declare const FX_DEFAULT_MODEL_SLUG = "default";
export declare const FX_EFFORT_OPTION_DESCRIPTOR: ProviderOptionDescriptor;
export declare const FX_SUPPORTED_RUNTIME_MODES: readonly ["approval-required", "auto"];
/** fx 0.0.13 answers a cancelled prompt with `stopReason: cancelled`. */
export declare const FX_ACP_CANCEL_BEHAVIOR: "wait-for-prompt";
/**
 * Supervised runs fx's `ask` mode and Auto its automatic review. An explicit
 * approval or sandbox policy must not launch automatic review, which would
 * perform writes the policy meant to confine.
 * @throws {never}
 */
export declare function fxSessionModeForPolicy(policy: ProviderAdapter.ProviderAdapterV2RuntimePolicy): "ask" | "auto";
/**
 * In automatic review fx asks only about what it refused itself, so every prompt reaches the user.
 * @throws {never}
 */
export declare function fxPermissionDisposition(policy: ProviderAdapter.ProviderAdapterV2RuntimePolicy, request: EffectAcpSchema.RequestPermissionRequest): AcpPermissionDisposition;
/**
 * fx 0.0.13 reports `ask` on a new or loaded session but enforces its saved
 * default until a client writes the mode, and the runtime skips writes that
 * match the reported mode. So the first write after start or load always goes
 * out. A mode fx does not advertise fails before anything is sent.
 * @throws {never}
 */
export declare function withFxSessionMode(runtime: AcpSessionRuntime.AcpSessionRuntime["Service"]): AcpSessionRuntime.AcpSessionRuntime["Service"];
/**
 * Writes config id `model` (fx's `provider` option shares its category).
 * "Default" picks the model `fx status` reports when the session lists it.
 * An unlisted model the thread picked is still sent: fx's backends accept or
 * refuse it themselves, so a thread never runs on a model it did not pick.
 */
export declare const applyFxModelSelection: (runtime: AcpSessionRuntime.AcpSessionRuntime["Service"], modelSelection: ModelSelection, defaultModel: Effect.Effect<string | undefined, never, never> | undefined) => Effect.Effect<string | undefined, EffectAcpErrors.AcpError>;
/** The shared option loop writes a stored effort; a thread without one starts at medium. */
export declare const applyFxEffortDefault: (runtime: AcpSessionRuntime.AcpSessionRuntime["Service"], modelSelection: ModelSelection) => Effect.Effect<void, EffectAcpErrors.AcpError>;
interface FxAcpRuntimeInput extends Omit<AcpSessionRuntime.AcpSessionRuntimeOptions, "authMethodId" | "spawn" | "cancelBehavior"> {
    readonly fxSettings: Pick<FxSettings, "binaryPath">;
    readonly environment?: NodeJS.ProcessEnv;
}
export declare const makeFxAcpRuntime: (input: FxAcpRuntimeInput) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntime["Service"], EffectAcpErrors.AcpError, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto | Scope.Scope>;
export {};
