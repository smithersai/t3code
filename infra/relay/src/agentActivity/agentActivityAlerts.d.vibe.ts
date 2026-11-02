import type { RelayAgentActivityAggregateRow, RelayAgentActivityAggregateState, RelayAgentAwarenessPreferences } from "@t3tools/contracts/relay";
export interface AgentActivityAlert {
    readonly title: string;
    readonly body: string;
}
export declare const TERMINAL_NOTIFICATION_FRESHNESS_MS: number;
export declare function isFreshTerminalNotification(updatedAt: string, nowMs: number): boolean;
type TransitionInput = {
    readonly previousAggregate: RelayAgentActivityAggregateState | null;
    readonly nextAggregate: RelayAgentActivityAggregateState;
    readonly preferences: RelayAgentAwarenessPreferences | null;
};
export declare function rowPhasesChanged(previousAggregate: RelayAgentActivityAggregateState, nextAggregate: RelayAgentActivityAggregateState): boolean;
export declare function alertAllowedForPhase(preferences: RelayAgentAwarenessPreferences | null, phase: string): boolean;
export declare function attentionTransitionRows(input: TransitionInput): {
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly projectTitle: string;
    readonly threadTitle: string;
    readonly modelTitle: string;
    readonly phase: "completed" | "failed" | "running" | "stale" | "starting" | "waiting_for_approval" | "waiting_for_input";
    readonly status: string;
    readonly updatedAt: string;
    readonly deepLink: string;
}[];
export declare function newlyTerminalRows(previousAggregate: RelayAgentActivityAggregateState | null, nextAggregate: RelayAgentActivityAggregateState, includeUnobserved?: boolean): ReadonlyArray<RelayAgentActivityAggregateRow>;
export declare function terminalTransitionRows(input: TransitionInput & {
    readonly nowMs: number;
    readonly includeUnobserved?: boolean;
}): {
    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly projectTitle: string;
    readonly threadTitle: string;
    readonly modelTitle: string;
    readonly phase: "completed" | "failed" | "running" | "stale" | "starting" | "waiting_for_approval" | "waiting_for_input";
    readonly status: string;
    readonly updatedAt: string;
    readonly deepLink: string;
}[];
export declare function alertForActivityRows(rows: ReadonlyArray<RelayAgentActivityAggregateRow>): AgentActivityAlert | null;
export declare function alertForAttentionTransition(input: TransitionInput): AgentActivityAlert | null;
export declare function alertForNewlyTerminal(input: TransitionInput & {
    readonly nowMs: number;
    readonly includeUnobserved?: boolean;
}): AgentActivityAlert | null;
export declare function alertForTerminalAggregate(input: {
    readonly aggregate: RelayAgentActivityAggregateState | null;
    readonly preferences: RelayAgentAwarenessPreferences | null;
}): AgentActivityAlert | null;
export declare function shouldAlertForActivity(input: {
    readonly phase: RelayAgentActivityAggregateRow["phase"];
    readonly updatedAt: string;
    readonly preferences: RelayAgentAwarenessPreferences | null;
    readonly nowMs: number;
}): boolean;
export {};
