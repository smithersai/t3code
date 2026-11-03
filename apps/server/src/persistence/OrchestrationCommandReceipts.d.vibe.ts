import * as SqlClient from "effect/sql/SqlClient";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import { type OrchestrationCommandReceiptRepositoryError } from "./Errors.ts";
export declare const OrchestrationCommandReceipt: Schema.Struct<{
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
    readonly aggregateKind: Schema.Literals<readonly ["project", "thread"]>;
    readonly aggregateId: Schema.Union<readonly [Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">]>;
    readonly commandType: Schema.String;
    readonly acceptedAt: Schema.String;
    readonly resultSequence: Schema.Int;
    readonly status: Schema.Literals<readonly ["accepted", "rejected"]>;
    readonly error: Schema.NullOr<Schema.String>;
}>;
export type OrchestrationCommandReceipt = typeof OrchestrationCommandReceipt.Type;
export declare const GetByCommandIdInput: Schema.Struct<{
    readonly commandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
}>;
export type GetByCommandIdInput = typeof GetByCommandIdInput.Type;
declare const OrchestrationCommandReceiptRepository_base: Context.ServiceClass<OrchestrationCommandReceiptRepository, "t3/persistence/OrchestrationCommandReceipts/OrchestrationCommandReceiptRepository", {
    readonly insertIfAbsent: (receipt: OrchestrationCommandReceipt) => Effect.Effect<boolean, OrchestrationCommandReceiptRepositoryError>;
    readonly upsert: (receipt: OrchestrationCommandReceipt) => Effect.Effect<void, OrchestrationCommandReceiptRepositoryError>;
    readonly getByCommandId: (input: GetByCommandIdInput) => Effect.Effect<Option.Option<OrchestrationCommandReceipt>, OrchestrationCommandReceiptRepositoryError>;
}>;
export declare class OrchestrationCommandReceiptRepository extends OrchestrationCommandReceiptRepository_base {
}
export declare const layer: Layer.Layer<OrchestrationCommandReceiptRepository, never, SqlClient.SqlClient>;
export {};
