import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
export interface AgentScopeShape {
    readonly wrap: (input: {
        readonly command: string;
        readonly args: ReadonlyArray<string>;
        readonly name: string;
        readonly threadId?: string | undefined;
        readonly env?: NodeJS.ProcessEnv | undefined;
        /** Terminals may survive restarts; agents must remain eligible for orphan cleanup. */
        readonly survivesRestart?: boolean | undefined;
        /**
         * Keep a shared process running after a tool OOM when supported.
         * Falls back to ordinary scope behavior on older systemd.
         */
        readonly shared?: boolean | undefined;
    }) => Effect.Effect<AgentScopeCommand>;
    readonly oomKilled: (threadId: string) => Effect.Effect<boolean>;
    /**
     * Reaps processes left after the owning agent exits, including setsid
     * descendants outside its process group. Preserves systemd OOM diagnosis.
     */
    readonly stop: (unit: string) => Effect.Effect<void>;
    /**
     * Forgets the thread's scope. The session manager calls it before it opens
     * a provider session, so a scope only answers for the session that launched
     * it, even when the next session runs without one (Cursor, OpenCode).
     */
    readonly clear: (threadId: string) => Effect.Effect<void>;
}
export interface AgentScopeCommand {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    /** The systemd scope the command runs in, for `stop`. */
    readonly unit?: string | undefined;
}
export declare const AgentScope: Context.Reference<AgentScopeShape>;
export declare const AgentScopeThreadId: Context.Reference<string | undefined>;
export declare const AGENT_OOM_SCORE_ADJ = 800;
export declare const RAISE_OOM_SCORE_LINE = "{ echo 800 >/proc/self/oom_score_adj; } 2>/dev/null";
export interface AgentSystemdScope {
    readonly systemdRun: string;
    readonly slice: string;
    readonly unit: string;
    readonly runtimeDir: string;
    readonly options: ReadonlyArray<string>;
}
/** Exec at every step preserves the agent PID, stdio, and signals; systemd-run places it and descendants in the scope. */
export declare function agentScopeCommand(input: {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    readonly scope?: AgentSystemdScope | undefined;
}): AgentScopeCommand;
