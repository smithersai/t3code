import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as EffectAcpErrors from "effect-acp/errors";
import type * as EffectAcpSchema from "effect-acp/compat";
export interface AcpTerminalOutputSnapshot {
    readonly output: string;
    readonly truncated: boolean;
    readonly exitStatus: EffectAcpSchema.TerminalExitStatus | undefined;
}
export interface AcpClientTerminals {
    readonly create: (request: EffectAcpSchema.CreateTerminalRequest) => Effect.Effect<EffectAcpSchema.CreateTerminalResponse, EffectAcpErrors.AcpRequestError>;
    readonly output: (request: EffectAcpSchema.TerminalOutputRequest) => Effect.Effect<EffectAcpSchema.TerminalOutputResponse, EffectAcpErrors.AcpRequestError>;
    readonly waitForExit: (request: EffectAcpSchema.WaitForTerminalExitRequest) => Effect.Effect<EffectAcpSchema.WaitForTerminalExitResponse, EffectAcpErrors.AcpRequestError>;
    readonly kill: (request: EffectAcpSchema.KillTerminalRequest) => Effect.Effect<EffectAcpSchema.KillTerminalResponse, EffectAcpErrors.AcpRequestError>;
    readonly release: (request: EffectAcpSchema.ReleaseTerminalRequest) => Effect.Effect<EffectAcpSchema.ReleaseTerminalResponse, EffectAcpErrors.AcpRequestError>;
    /** Buffered output for embedded tool-call content; survives release. */
    readonly readOutputSnapshot: (sessionId: string, terminalId: string) => AcpTerminalOutputSnapshot | undefined;
    readonly readCommandLine: (terminalId: string) => string | undefined;
    readonly disposeAll: Effect.Effect<void>;
}
export interface AcpClientTerminalsOptions {
    /** Devin sends shell source in command, rather than an executable plus args. */
    readonly shellCommands?: boolean | undefined;
    readonly defaultCwd: string;
    readonly environment?: NodeJS.ProcessEnv | undefined;
    readonly environmentForSession?: ((sessionId: string) => NodeJS.ProcessEnv | undefined) | undefined;
    readonly forceKillAfter?: Duration.Input | undefined;
}
export declare const makeAcpClientTerminals: (options: AcpClientTerminalsOptions) => Effect.Effect<AcpClientTerminals, never, ChildProcessSpawner.ChildProcessSpawner>;
export declare function resolveEmbeddedTerminalContent(notification: EffectAcpSchema.SessionNotification, readOutputSnapshot: AcpClientTerminals["readOutputSnapshot"]): EffectAcpSchema.SessionNotification;
