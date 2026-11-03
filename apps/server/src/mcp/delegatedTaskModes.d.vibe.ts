import { type ModelSelection, OrchestratorMcpFailure, type OrchestratorMcpDelegateTaskInput, type OrchestratorMcpInteractionMode, type OrchestratorMcpRuntimeMode, type ProviderInteractionMode, type RuntimeMode } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
/** How much a runtime mode allows, narrowest first. */
export declare function runtimeModeRank(mode: RuntimeMode): number;
/** How much an interaction mode allows: plan, then default. */
export declare function interactionModeRank(mode: ProviderInteractionMode): number;
/**
 * The mode a child runs at: the one asked for, never broader than its parent's.
 * An inherited mode the target provider does not offer steps down to the
 * broadest one it does; an explicitly requested one is refused instead.
 */
export declare function resolveRuntimeMode(parentMode: RuntimeMode, requested: OrchestratorMcpRuntimeMode | undefined, target?: {
    readonly modelSelection: ModelSelection;
    readonly supportedRuntimeModes: ReadonlyArray<RuntimeMode> | undefined;
}): Effect.Effect<RuntimeMode, OrchestratorMcpFailure>;
/** The same, for interaction modes. */
export declare function resolveInteractionMode(parentMode: ProviderInteractionMode, requested: OrchestratorMcpInteractionMode | undefined): Effect.Effect<ProviderInteractionMode, OrchestratorMcpFailure>;
/** The task as its child receives it, with the role the caller asked for. */
export declare function taskPrompt(input: OrchestratorMcpDelegateTaskInput): string;
