import * as Schema from "effect/Schema";
import * as AcpSchema from "./_generated/schema.gen.js";
declare const AcpRequestOperation: Schema.Literals<readonly ["decode-extension-request-payload", "encode-extension-response", "handle-request", "handle-extension-request", "receive-response", "receive-streaming-response"]>;
type AcpRequestOperation = typeof AcpRequestOperation.Type;
export declare const AcpRequestId: Schema.Union<readonly [Schema.String, Schema.Number]>;
export type AcpRequestId = typeof AcpRequestId.Type;
declare const AcpSchemaIssueKind: Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>;
type AcpSchemaIssueKind = typeof AcpSchemaIssueKind.Type;
export interface AcpRequestDiagnostics {
    readonly method?: string;
    readonly requestId?: AcpRequestId;
    readonly operation?: AcpRequestOperation;
    readonly cause?: unknown;
    readonly issueCount?: number;
    readonly issueKinds?: ReadonlyArray<AcpSchemaIssueKind>;
    readonly maximumPathDepth?: number;
}
declare const AcpSpawnError_base: Schema.Class<AcpSpawnError, Schema.TaggedStruct<"AcpSpawnError", {
    readonly command: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AcpSpawnError extends AcpSpawnError_base {
    get message(): string;
}
declare const AcpProcessExitedError_base: Schema.Class<AcpProcessExitedError, Schema.TaggedStruct<"AcpProcessExitedError", {
    readonly code: Schema.optional<Schema.Number>;
    readonly signal: Schema.optionalKey<Schema.String>;
    readonly pid: Schema.optionalKey<Schema.Int>;
    readonly stderr: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class AcpProcessExitedError extends AcpProcessExitedError_base {
    get message(): string;
}
export declare const AcpProtocolParseOperation: Schema.Literals<readonly ["encode-message", "decode-wire-message", "decode-notification-payload"]>;
export type AcpProtocolParseOperation = typeof AcpProtocolParseOperation.Type;
declare const AcpProtocolParseError_base: Schema.Class<AcpProtocolParseError, Schema.TaggedStruct<"AcpProtocolParseError", {
    readonly operation: Schema.Literals<readonly ["encode-message", "decode-wire-message", "decode-notification-payload"]>;
    readonly method: Schema.optionalKey<Schema.String>;
    readonly requestId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Number]>>;
    readonly issueCount: Schema.optionalKey<Schema.Number>;
    readonly issueKinds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>>>;
    readonly maximumPathDepth: Schema.optionalKey<Schema.Number>;
    readonly issueSummary: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AcpProtocolParseError extends AcpProtocolParseError_base {
    get message(): string;
    static fromSchemaError(operation: AcpProtocolParseOperation, method: string, cause: Schema.SchemaError): AcpProtocolParseError;
    static fromEncodingError(method: string | undefined, requestId: AcpRequestId | undefined, cause: unknown): AcpProtocolParseError;
}
declare const AcpTransportError_base: Schema.Class<AcpTransportError, Schema.TaggedStruct<"AcpTransportError", {
    readonly operation: Schema.optional<Schema.Literals<readonly ["call-rpc", "read-input-stream", "read-process-exit-status"]>>;
    readonly method: Schema.optional<Schema.String>;
    readonly detail: Schema.optional<Schema.String>;
    readonly pid: Schema.optionalKey<Schema.Int>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AcpTransportError extends AcpTransportError_base {
    get message(): string;
}
declare const AcpInputStreamEndedError_base: Schema.Class<AcpInputStreamEndedError, Schema.TaggedStruct<"AcpInputStreamEndedError", {}>, import("effect/Cause").YieldableError>;
export declare class AcpInputStreamEndedError extends AcpInputStreamEndedError_base {
    get message(): string;
}
declare const AcpRequestError_base: Schema.Class<AcpRequestError, Schema.TaggedStruct<"AcpRequestError", {
    readonly code: Schema.Union<readonly [Schema.Literal<-32700>, Schema.Literal<-32600>, Schema.Literal<-32601>, Schema.Literal<-32602>, Schema.Literal<-32603>, Schema.Literal<-32800>, Schema.Literal<-32000>, Schema.Literal<-32002>, Schema.Number]>;
    readonly errorMessage: Schema.String;
    readonly data: Schema.optional<Schema.Unknown>;
    readonly method: Schema.optionalKey<Schema.String>;
    readonly requestId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Number]>>;
    readonly operation: Schema.optionalKey<Schema.Literals<readonly ["decode-extension-request-payload", "encode-extension-response", "handle-request", "handle-extension-request", "receive-response", "receive-streaming-response"]>>;
    readonly issueCount: Schema.optionalKey<Schema.Number>;
    readonly issueKinds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>>>;
    readonly maximumPathDepth: Schema.optionalKey<Schema.Number>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class AcpRequestError extends AcpRequestError_base {
    get message(): string;
    static fromProtocolError(error: AcpSchema.Error, context: {
        readonly method: string;
        readonly requestId?: AcpRequestId;
        readonly cause?: unknown;
    }): AcpRequestError;
    static fromExtensionResponseFailure(method: string, requestId: AcpRequestId, cause: unknown): AcpRequestError;
    static fromExtensionResponseEncodingError(method: string, requestId: AcpRequestId, cause: AcpProtocolParseError): AcpRequestError;
    static unsupportedStreamingResponse(method: string, requestId: AcpRequestId): AcpRequestError;
    static fromCoreHandlerError(error: AcpError, method: string): AcpRequestError;
    static fromExtensionHandlerError(error: AcpError, method: string): AcpRequestError;
    static parseError(message?: string, data?: unknown): AcpRequestError;
    static invalidRequest(message?: string, data?: unknown): AcpRequestError;
    static methodNotFound(method: string): AcpRequestError;
    static invalidParams(message?: string, data?: unknown): AcpRequestError;
    static invalidExtensionPayload(method: string, cause: Schema.SchemaError): AcpRequestError;
    static internalError(message?: string, data?: unknown, diagnostics?: AcpRequestDiagnostics): AcpRequestError;
    static authRequired(message?: string, data?: unknown): AcpRequestError;
    static resourceNotFound(message?: string, data?: unknown): AcpRequestError;
    toProtocolError(): {
        readonly code: number;
        readonly message: string;
        readonly data?: Schema.Json;
    };
}
export declare const AcpError: Schema.Union<readonly [typeof AcpRequestError, typeof AcpSpawnError, typeof AcpProcessExitedError, typeof AcpProtocolParseError, typeof AcpTransportError, typeof AcpInputStreamEndedError]>;
export type AcpError = typeof AcpError.Type;
export {};
