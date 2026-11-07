import type { AtomCommand, AtomCommandOptions, AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import { EnvironmentAuthorizationError, type EnvironmentId } from "@t3tools/contracts";
export declare const ORCHESTRATION_OPERATE_DENIED_MESSAGE = "This connection cannot change threads or projects.";
export declare function useOrchestrationCommand<W extends {
    readonly environmentId: EnvironmentId;
}, A, E>(command: AtomCommand<W, A, E>, options?: string | AtomCommandOptions): (value: W) => Promise<AtomCommandResult<A, E | EnvironmentAuthorizationError>>;
