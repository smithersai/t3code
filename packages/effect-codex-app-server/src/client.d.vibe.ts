import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as Stdio from "effect/Stdio";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as CodexRpc from "./_generated/meta.gen.ts";
import * as CodexError from "./errors.vibe";
import * as CodexProtocol from "./protocol.vibe";
export interface CodexAppServerClientOptions {
    readonly logIncoming?: boolean;
    readonly logOutgoing?: boolean;
    readonly logger?: (event: CodexProtocol.CodexAppServerProtocolLogEvent) => Effect.Effect<void, never>;
}
interface CodexAppServerClientRaw {
    readonly notifications: CodexProtocol.CodexAppServerPatchedProtocol["incomingNotifications"];
    readonly requests: CodexProtocol.CodexAppServerPatchedProtocol["incomingRequests"];
    readonly request: CodexProtocol.CodexAppServerPatchedProtocol["request"];
    readonly notify: CodexProtocol.CodexAppServerPatchedProtocol["notify"];
    readonly respond: CodexProtocol.CodexAppServerPatchedProtocol["respond"];
    readonly respondError: CodexProtocol.CodexAppServerPatchedProtocol["respondError"];
}
declare const CodexAppServerClient_base: Context.ServiceClass<CodexAppServerClient, "effect-codex-app-server/client/CodexAppServerClient", {
    readonly raw: CodexAppServerClientRaw;
    readonly awaitTermination: Effect.Effect<never, CodexError.CodexAppServerError>;
    readonly request: <M extends CodexRpc.ClientRequestMethod>(method: M, payload: CodexRpc.ClientRequestParamsByMethod[M]) => Effect.Effect<CodexRpc.ClientRequestResponsesByMethod[M], CodexError.CodexAppServerError>;
    readonly notify: <M extends CodexRpc.ClientNotificationMethod>(method: M, payload: CodexRpc.ClientNotificationParamsByMethod[M]) => Effect.Effect<void, CodexError.CodexAppServerError>;
    readonly handleServerRequest: <M extends CodexRpc.ServerRequestMethod>(method: M, handler: (payload: CodexRpc.ServerRequestParamsByMethod[M]) => Effect.Effect<CodexRpc.ServerRequestResponsesByMethod[M], CodexError.CodexAppServerError>) => Effect.Effect<void>;
    readonly handleServerNotification: <M extends CodexRpc.ServerNotificationMethod>(method: M, handler: (payload: CodexRpc.ServerNotificationParamsByMethod[M]) => Effect.Effect<void, CodexError.CodexAppServerError>) => Effect.Effect<void>;
    readonly handleUnknownServerRequest: (handler: (method: string, params: unknown) => Effect.Effect<unknown, CodexError.CodexAppServerError>) => Effect.Effect<void>;
    readonly handleUnknownServerNotification: (handler: (method: string, params: unknown) => Effect.Effect<void, CodexError.CodexAppServerError>) => Effect.Effect<void>;
}>;
export declare class CodexAppServerClient extends CodexAppServerClient_base {
}
export declare const make: (stdio: Stdio.Stdio, options?: CodexAppServerClientOptions | undefined, terminationError?: Effect.Effect<CodexError.CodexAppServerIdentifierGenerationError | CodexError.CodexAppServerInputStreamEndedError | CodexError.CodexAppServerProcessExitedError | CodexError.CodexAppServerProtocolParseError | CodexError.CodexAppServerRequestError | CodexError.CodexAppServerSpawnError | CodexError.CodexAppServerTransportError, never, never> | undefined) => Effect.Effect<CodexAppServerClient["Service"], never, Scope.Scope>;
export declare const layerChildProcess: (handle: ChildProcessSpawner.ChildProcessHandle, options?: CodexAppServerClientOptions) => Layer.Layer<CodexAppServerClient>;
export {};
