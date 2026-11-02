import { Atom } from "effect/reactivity";
import { type KnownTerminalSession, type TerminalSessionState } from "@t3tools/client-runtime/state/terminal";
import { EnvironmentId, ThreadId, TerminalAttachInput, type TerminalSummary } from "@t3tools/contracts";
export declare function selectKnownTerminalSessions(metadata: ReadonlyArray<TerminalSummary> | null, environmentId: EnvironmentId | null, threadId: ThreadId | null): ReadonlyArray<KnownTerminalSession>;
/**
 * One shown terminal's session: its attach (or read-only observe) buffer
 * combined with the metadata summary. Surfaces subscribe to it imperatively so
 * output chunks never re-render React.
 */
export declare function attachedTerminalSessionAtom(environmentId: EnvironmentId | null, terminal: TerminalAttachInput | null): Atom.Atom<TerminalSessionState>;
export declare function useKnownTerminalSessions(input: {
    readonly environmentId: EnvironmentId | null;
    readonly threadId: ThreadId | null;
}): ReadonlyArray<KnownTerminalSession> | null;
export declare function useThreadRunningTerminalIds(input: {
    readonly environmentId: EnvironmentId | null;
    readonly threadId: ThreadId | null;
}): ReadonlyArray<string>;
