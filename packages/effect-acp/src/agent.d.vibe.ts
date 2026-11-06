import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import * as Stdio from "effect/Stdio";
import * as AcpSchema from "./schema.ts";
import * as AcpError from "./errors.vibe";
import * as AcpProtocol from "./protocol.ts";
export interface AcpAgentOptions {
    readonly logIncoming?: boolean;
    readonly logOutgoing?: boolean;
    readonly logger?: (event: AcpProtocol.AcpProtocolLogEvent) => Effect.Effect<void, never>;
}
export type AcpRequestHandler<Request, Response> = AcpProtocol.AcpRequestHandler<Request, Response>;
declare const AcpAgent_base: Context.ServiceClass<AcpAgent, "effect-acp/agent/AcpAgent", {
    readonly raw: {
        readonly notifications: Stream.Stream<AcpProtocol.AcpIncomingNotification>;
        readonly request: (method: string, payload: unknown) => Effect.Effect<unknown, AcpError.AcpError>;
        readonly notify: (method: string, payload: unknown) => Effect.Effect<void, AcpError.AcpError>;
    };
    readonly client: {
        readonly requestPermission: (payload: AcpSchema.RequestPermissionRequest) => Effect.Effect<AcpSchema.RequestPermissionResponse, AcpError.AcpError>;
        readonly elicit: (payload: AcpSchema.CreateElicitationRequest) => Effect.Effect<AcpSchema.CreateElicitationResponse, AcpError.AcpError>;
        readonly sessionUpdate: (payload: AcpSchema.SessionNotification) => Effect.Effect<void, AcpError.AcpError>;
        readonly elicitationComplete: (payload: AcpSchema.CompleteElicitationNotification) => Effect.Effect<void, AcpError.AcpError>;
        readonly connectMcp: (payload: AcpSchema.ConnectMcpRequest) => Effect.Effect<AcpSchema.ConnectMcpResponse, AcpError.AcpError>;
        readonly messageMcp: (payload: AcpSchema.MessageMcpRequest) => Effect.Effect<AcpSchema.MessageMcpResponse, AcpError.AcpError>;
        readonly disconnectMcp: (payload: AcpSchema.DisconnectMcpRequest) => Effect.Effect<AcpSchema.DisconnectMcpResponse, AcpError.AcpError>;
        readonly notifyMcp: (payload: AcpSchema.MessageMcpNotification) => Effect.Effect<void, AcpError.AcpError>;
        readonly extRequest: (method: string, payload: unknown) => Effect.Effect<unknown, AcpError.AcpError>;
        readonly extNotification: (method: string, payload: unknown) => Effect.Effect<void, AcpError.AcpError>;
    };
    readonly handleInitialize: (handler: AcpRequestHandler<AcpSchema.InitializeRequest, AcpSchema.InitializeResponse>) => Effect.Effect<void>;
    readonly handleAuthenticate: (handler: AcpRequestHandler<AcpSchema.AuthenticateRequest, AcpSchema.AuthenticateResponse>) => Effect.Effect<void>;
    readonly handleLogout: (handler: AcpRequestHandler<AcpSchema.LogoutRequest, AcpSchema.LogoutResponse>) => Effect.Effect<void>;
    readonly handleCreateSession: (handler: AcpRequestHandler<AcpSchema.NewSessionRequest, AcpSchema.NewSessionResponse>) => Effect.Effect<void>;
    readonly handleLoadSession: (handler: AcpRequestHandler<AcpSchema.LoadSessionRequest, AcpSchema.LoadSessionResponse>) => Effect.Effect<void>;
    readonly handleListSessions: (handler: AcpRequestHandler<AcpSchema.ListSessionsRequest, AcpSchema.ListSessionsResponse>) => Effect.Effect<void>;
    readonly handleForkSession: (handler: AcpRequestHandler<AcpSchema.ForkSessionRequest, AcpSchema.ForkSessionResponse>) => Effect.Effect<void>;
    readonly handleResumeSession: (handler: AcpRequestHandler<AcpSchema.ResumeSessionRequest, AcpSchema.ResumeSessionResponse>) => Effect.Effect<void>;
    readonly handleCloseSession: (handler: AcpRequestHandler<AcpSchema.CloseSessionRequest, AcpSchema.CloseSessionResponse>) => Effect.Effect<void>;
    readonly handleDeleteSession: (handler: AcpRequestHandler<AcpSchema.DeleteSessionRequest, AcpSchema.DeleteSessionResponse>) => Effect.Effect<void>;
    readonly handleListProviders: (handler: AcpRequestHandler<AcpSchema.ListProvidersRequest, AcpSchema.ListProvidersResponse>) => Effect.Effect<void>;
    readonly handleSetProvider: (handler: AcpRequestHandler<AcpSchema.SetProviderRequest, AcpSchema.SetProviderResponse>) => Effect.Effect<void>;
    readonly handleDisableProvider: (handler: AcpRequestHandler<AcpSchema.DisableProviderRequest, AcpSchema.DisableProviderResponse>) => Effect.Effect<void>;
    readonly handleSetSessionConfigOption: (handler: AcpRequestHandler<AcpSchema.SetSessionConfigOptionRequest, AcpSchema.SetSessionConfigOptionResponse>) => Effect.Effect<void>;
    readonly handlePrompt: (handler: AcpRequestHandler<AcpSchema.PromptRequest, AcpSchema.PromptResponse>) => Effect.Effect<void>;
    readonly handleCancel: (handler: (notification: AcpSchema.CancelNotification) => Effect.Effect<void, AcpError.AcpError>) => Effect.Effect<void>;
    readonly handleUnknownExtRequest: (handler: (method: string, params: unknown, context: AcpProtocol.AcpRequestContext) => Effect.Effect<unknown, AcpError.AcpError>) => Effect.Effect<void>;
    readonly handleUnknownExtNotification: (handler: (method: string, params: unknown) => Effect.Effect<void, AcpError.AcpError>) => Effect.Effect<void>;
    readonly handleExtRequest: <A, I>(method: string, payload: Schema.Codec<A, I>, handler: AcpRequestHandler<A, unknown>) => Effect.Effect<void>;
    readonly handleExtNotification: <A, I>(method: string, payload: Schema.Codec<A, I>, handler: (payload: A) => Effect.Effect<void, AcpError.AcpError>) => Effect.Effect<void>;
}>;
export declare class AcpAgent extends AcpAgent_base {
}
/** @public */
export declare const make: (stdio: Stdio.Stdio, options?: AcpAgentOptions | undefined) => Effect.Effect<AcpAgent["Service"], never, Scope.Scope>;
export declare const layer: (stdio: Stdio.Stdio, options?: AcpAgentOptions) => Layer.Layer<AcpAgent>;
export declare const layerStdio: (options?: AcpAgentOptions) => Layer.Layer<AcpAgent, never, Stdio.Stdio>;
export {};
