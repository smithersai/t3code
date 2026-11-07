import * as Effect from "effect/Effect";
import type * as AcpSchema from "effect-acp/compat";
export declare class AcpMcpOverAcpError extends Error {
    readonly _tag = "AcpMcpOverAcpError";
    readonly name = "AcpMcpOverAcpError";
}
export interface AcpMcpOverAcpBridgeOptions {
    readonly endpoint: string;
    readonly authorization: string;
    readonly allocateConnectionId: Effect.Effect<string>;
    /** @throws {never} */
    readonly fetchImplementation?: (url: string, init?: RequestInit) => Promise<Response>;
}
export interface AcpMcpOverAcpBridge {
    readonly connect: (request: AcpSchema.ConnectMcpRequest) => Effect.Effect<AcpSchema.ConnectMcpResponse, AcpMcpOverAcpError>;
    readonly message: (request: AcpSchema.MessageMcpRequest) => Effect.Effect<AcpSchema.MessageMcpResponse, AcpMcpOverAcpError>;
    readonly notification: (request: AcpSchema.MessageMcpNotification) => Effect.Effect<void, AcpMcpOverAcpError>;
    readonly disconnect: (request: AcpSchema.DisconnectMcpRequest) => Effect.Effect<AcpSchema.DisconnectMcpResponse, AcpMcpOverAcpError>;
    readonly dispose: Effect.Effect<void>;
}
export declare const makeAcpMcpOverAcpBridge: (options: AcpMcpOverAcpBridgeOptions) => Effect.Effect<AcpMcpOverAcpBridge>;
