import * as Schema from "effect/Schema";
declare const CodexAppServerRequestOperation: Schema.Literals<readonly ["decode-payload", "encode-payload", "handle-request", "receive-response"]>;
type CodexAppServerRequestOperation = typeof CodexAppServerRequestOperation.Type;
declare const CodexAppServerSchemaIssueKind: Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>;
type CodexAppServerSchemaIssueKind = typeof CodexAppServerSchemaIssueKind.Type;
declare const CodexAppServerPayloadKind: Schema.Literals<readonly ["null", "array", "string", "number", "boolean", "bigint", "object", "symbol", "function", "undefined"]>;
type CodexAppServerPayloadKind = typeof CodexAppServerPayloadKind.Type;
export interface CodexAppServerRequestDiagnostics {
    readonly method?: string;
    readonly requestId?: string;
    readonly operation?: CodexAppServerRequestOperation;
    readonly cause?: unknown;
    readonly issueCount?: number;
    readonly issueKinds?: ReadonlyArray<CodexAppServerSchemaIssueKind>;
    readonly maximumPathDepth?: number;
    readonly payloadKind?: CodexAppServerPayloadKind;
}
export declare const CodexAppServerProtocolParseOperation: Schema.Literals<readonly ["encode-wire-message", "decode-wire-message", "route-wire-message", "decode-notification-payload", "decode-request-payload", "decode-response-payload"]>;
export type CodexAppServerProtocolParseOperation = typeof CodexAppServerProtocolParseOperation.Type;
export declare const CodexAppServerTransportOperation: Schema.Literals<readonly ["read-input-stream", "read-process-exit-status"]>;
export type CodexAppServerTransportOperation = typeof CodexAppServerTransportOperation.Type;
export declare const CodexAppServerIdentifierPurpose: Schema.Literals<readonly ["provider-event", "command-approval-request", "file-change-approval-request", "mcp-elicitation-request", "app-permission-approval-request", "user-input-request"]>;
export type CodexAppServerIdentifierPurpose = typeof CodexAppServerIdentifierPurpose.Type;
export interface CodexAppServerProtocolErrorShape {
    readonly code: number;
    readonly message: string;
    readonly data?: unknown;
}
declare const CodexAppServerSpawnError_base: Schema.Class<CodexAppServerSpawnError, Schema.TaggedStruct<"CodexAppServerSpawnError", {
    readonly command: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerSpawnError extends CodexAppServerSpawnError_base {
    get message(): string;
}
declare const CodexAppServerProcessExitedError_base: Schema.Class<CodexAppServerProcessExitedError, Schema.TaggedStruct<"CodexAppServerProcessExitedError", {
    readonly code: Schema.optional<Schema.Number>;
    readonly pid: Schema.optionalKey<Schema.Int>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerProcessExitedError extends CodexAppServerProcessExitedError_base {
    get message(): string;
}
declare const CodexAppServerProtocolParseError_base: Schema.Class<CodexAppServerProtocolParseError, Schema.TaggedStruct<"CodexAppServerProtocolParseError", {
    readonly operation: Schema.Literals<readonly ["encode-wire-message", "decode-wire-message", "route-wire-message", "decode-notification-payload", "decode-request-payload", "decode-response-payload"]>;
    readonly method: Schema.optionalKey<Schema.String>;
    readonly requestId: Schema.optionalKey<Schema.String>;
    readonly payloadKind: Schema.optionalKey<Schema.Literals<readonly ["null", "array", "string", "number", "boolean", "bigint", "object", "symbol", "function", "undefined"]>>;
    readonly presentFields: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["id", "method", "params", "result", "error"]>>>;
    readonly issueCount: Schema.optionalKey<Schema.Number>;
    readonly issueKinds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>>>;
    readonly maximumPathDepth: Schema.optionalKey<Schema.Number>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerProtocolParseError extends CodexAppServerProtocolParseError_base {
    get message(): string;
    static fromSchemaError(operation: CodexAppServerProtocolParseOperation, cause: Schema.SchemaError, context?: {
        readonly method?: string;
        readonly requestId?: string;
    }): CodexAppServerProtocolParseError;
    static fromRequestError(operation: CodexAppServerProtocolParseOperation, method: string, cause: CodexAppServerRequestError): CodexAppServerProtocolParseError;
    static fromUnroutableMessage(message: unknown): CodexAppServerProtocolParseError;
}
declare const CodexAppServerTransportError_base: Schema.Class<CodexAppServerTransportError, Schema.TaggedStruct<"CodexAppServerTransportError", {
    readonly operation: Schema.Literals<readonly ["read-input-stream", "read-process-exit-status"]>;
    readonly pid: Schema.optionalKey<Schema.Int>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerTransportError extends CodexAppServerTransportError_base {
    get message(): string;
}
declare const CodexAppServerIdentifierGenerationError_base: Schema.Class<CodexAppServerIdentifierGenerationError, Schema.TaggedStruct<"CodexAppServerIdentifierGenerationError", {
    readonly purpose: Schema.Literals<readonly ["provider-event", "command-approval-request", "file-change-approval-request", "mcp-elicitation-request", "app-permission-approval-request", "user-input-request"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerIdentifierGenerationError extends CodexAppServerIdentifierGenerationError_base {
    get message(): string;
}
declare const CodexAppServerInputStreamEndedError_base: Schema.Class<CodexAppServerInputStreamEndedError, Schema.TaggedStruct<"CodexAppServerInputStreamEndedError", {}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerInputStreamEndedError extends CodexAppServerInputStreamEndedError_base {
    get message(): string;
}
declare const CodexAppServerRequestError_base: Schema.Class<CodexAppServerRequestError, Schema.TaggedStruct<"CodexAppServerRequestError", {
    readonly code: Schema.Number;
    readonly errorMessage: Schema.String;
    readonly data: Schema.optional<Schema.Unknown>;
    readonly method: Schema.optionalKey<Schema.String>;
    readonly requestId: Schema.optionalKey<Schema.String>;
    readonly operation: Schema.optionalKey<Schema.Literals<readonly ["decode-payload", "encode-payload", "handle-request", "receive-response"]>>;
    readonly issueCount: Schema.optionalKey<Schema.Number>;
    readonly issueKinds: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["Filter", "Encoding", "Pointer", "Composite", "AnyOf", "InvalidType", "InvalidValue", "MissingKey", "UnexpectedKey", "Forbidden", "OneOf"]>>>;
    readonly maximumPathDepth: Schema.optionalKey<Schema.Number>;
    readonly payloadKind: Schema.optionalKey<Schema.Literals<readonly ["null", "array", "string", "number", "boolean", "bigint", "object", "symbol", "function", "undefined"]>>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class CodexAppServerRequestError extends CodexAppServerRequestError_base {
    get message(): string;
    static fromProtocolError(error: CodexAppServerProtocolErrorShape, method: string, requestId: string): CodexAppServerRequestError;
    static fromAppServerError(error: CodexAppServerError, method: string): CodexAppServerRequestError;
    static parseError(message?: string, data?: unknown): CodexAppServerRequestError;
    static invalidRequest(message?: string, data?: unknown): CodexAppServerRequestError;
    static methodNotFound(method: string): CodexAppServerRequestError;
    static invalidParams(message?: string, data?: unknown, diagnostics?: CodexAppServerRequestDiagnostics): CodexAppServerRequestError;
    static invalidPayload(method: string, operation: "decode-payload" | "encode-payload", cause: Schema.SchemaError): CodexAppServerRequestError;
    static unexpectedPayload(method: string, operation: "decode-payload" | "encode-payload", payload: unknown): CodexAppServerRequestError;
    static internalError(message?: string, data?: unknown, diagnostics?: CodexAppServerRequestDiagnostics): CodexAppServerRequestError;
    static overloaded(message?: string, data?: unknown): CodexAppServerRequestError;
    toProtocolError(): CodexAppServerProtocolErrorShape;
}
export declare const CodexAppServerError: Schema.Union<readonly [typeof CodexAppServerRequestError, typeof CodexAppServerSpawnError, typeof CodexAppServerProcessExitedError, typeof CodexAppServerProtocolParseError, typeof CodexAppServerTransportError, typeof CodexAppServerIdentifierGenerationError, typeof CodexAppServerInputStreamEndedError]>;
export type CodexAppServerError = typeof CodexAppServerError.Type;
export {};
