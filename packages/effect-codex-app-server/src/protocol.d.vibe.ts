import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
import * as Stdio from "effect/Stdio";
import * as Stream from "effect/Stream";
import * as CodexError from "./errors.vibe";
export interface CodexAppServerProtocolLogEvent {
    readonly direction: "incoming" | "outgoing";
    readonly stage: "raw" | "decoded" | "decode_failed";
    readonly payload: unknown;
}
export interface CodexAppServerIncomingNotification {
    readonly method: string;
    readonly params?: unknown;
}
export interface CodexAppServerIncomingRequest {
    readonly id: string | number;
    readonly method: string;
    readonly params?: unknown;
}
export interface CodexAppServerPatchedProtocolOptions {
    readonly stdio: Stdio.Stdio;
    readonly terminationError?: Effect.Effect<CodexError.CodexAppServerError>;
    readonly logIncoming?: boolean;
    readonly logOutgoing?: boolean;
    readonly maxIncomingMessageBytes?: number;
    readonly logger?: (event: CodexAppServerProtocolLogEvent) => Effect.Effect<void, never>;
    readonly onNotification?: (notification: CodexAppServerIncomingNotification) => Effect.Effect<void, never>;
    readonly onRequest?: (request: CodexAppServerIncomingRequest) => Effect.Effect<unknown, CodexError.CodexAppServerError>;
    readonly onTermination?: (error: CodexError.CodexAppServerError) => Effect.Effect<void, never>;
}
export interface CodexAppServerPatchedProtocol {
    readonly incomingNotifications: Stream.Stream<CodexAppServerIncomingNotification>;
    readonly incomingRequests: Stream.Stream<CodexAppServerIncomingRequest>;
    readonly request: (method: string, payload?: unknown) => Effect.Effect<unknown, CodexError.CodexAppServerError>;
    readonly notify: (method: string, payload?: unknown) => Effect.Effect<void, CodexError.CodexAppServerError>;
    readonly respond: (requestId: string | number, result: unknown) => Effect.Effect<void, CodexError.CodexAppServerError>;
    readonly respondError: (requestId: string | number, error: CodexError.CodexAppServerRequestError) => Effect.Effect<void, CodexError.CodexAppServerError>;
}
export declare const makeCodexAppServerPatchedProtocol: (options: CodexAppServerPatchedProtocolOptions) => Effect.Effect<CodexAppServerPatchedProtocol, never, Scope.Scope>;
