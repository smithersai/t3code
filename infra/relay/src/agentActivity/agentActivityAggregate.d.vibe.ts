import type { RelayAgentActivityAggregateState, RelayAgentActivityState } from "@t3tools/contracts/relay";
/** @throws {never} */
export declare function statusForPhase(phase: RelayAgentActivityState["phase"]): string;
export declare const TERMINAL_AGENT_ACTIVITY_DISPLAY_TTL_MS: number;
/** @throws {never} */
export declare function makeAggregateState(input: {
    readonly activeStates: ReadonlyArray<RelayAgentActivityState>;
    readonly terminalState: RelayAgentActivityState | null;
    readonly nowMs: number;
}): RelayAgentActivityAggregateState | null;
/** @throws {never} */
export declare function activityPhasePriority(phase: RelayAgentActivityState["phase"]): number;
