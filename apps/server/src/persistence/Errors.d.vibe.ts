import * as Schema from "effect/Schema";
export declare const PersistenceErrorCorrelation: Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.String;
}>, Schema.Struct<{
    readonly currentSessionId: Schema.String;
}>, Schema.Struct<{
    readonly pairingLinkId: Schema.String;
}>, Schema.Struct<{
    readonly threadId: Schema.String;
}>]>;
export type PersistenceErrorCorrelation = typeof PersistenceErrorCorrelation.Type;
declare const PersistenceSqlError_base: Schema.Class<PersistenceSqlError, Schema.TaggedStruct<"PersistenceSqlError", {
    readonly operation: Schema.String;
    readonly detail: Schema.optional<Schema.String>;
    readonly correlation: Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly sessionId: Schema.String;
    }>, Schema.Struct<{
        readonly currentSessionId: Schema.String;
    }>, Schema.Struct<{
        readonly pairingLinkId: Schema.String;
    }>, Schema.Struct<{
        readonly threadId: Schema.String;
    }>]>>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PersistenceSqlError extends PersistenceSqlError_base {
    get message(): string;
}
declare const PersistenceDecodeError_base: Schema.Class<PersistenceDecodeError, Schema.TaggedStruct<"PersistenceDecodeError", {
    readonly operation: Schema.String;
    readonly issue: Schema.String;
    readonly correlation: Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly sessionId: Schema.String;
    }>, Schema.Struct<{
        readonly currentSessionId: Schema.String;
    }>, Schema.Struct<{
        readonly pairingLinkId: Schema.String;
    }>, Schema.Struct<{
        readonly threadId: Schema.String;
    }>]>>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PersistenceDecodeError extends PersistenceDecodeError_base {
    /** @throws {never} */
    static fromSchemaError(operation: string, cause: Schema.SchemaError, correlation?: PersistenceErrorCorrelation): PersistenceDecodeError;
    get message(): string;
}
/** @throws {never} */
export declare function toPersistenceSqlError(operation: string): 
/** @throws {never} */
(cause: unknown) => PersistenceSqlError;
/** @throws {never} */
export declare function toPersistenceDecodeError(operation: string): 
/** @throws {never} */
(cause: Schema.SchemaError) => PersistenceDecodeError;
export type OrchestrationEventStoreError = PersistenceSqlError | PersistenceDecodeError;
export type OrchestrationCommandReceiptRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type ProviderSessionRuntimeRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type AuthPairingLinkRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type AuthSessionRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type PullRequestFilesViewedRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type PullRequestReviewGuideRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export type ProjectionRepositoryError = PersistenceSqlError | PersistenceDecodeError;
export {};
