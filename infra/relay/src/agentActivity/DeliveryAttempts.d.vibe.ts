import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const DeliveryAttemptRecordPersistenceError_base: Schema.Class<DeliveryAttemptRecordPersistenceError, Schema.TaggedStruct<"DeliveryAttemptRecordPersistenceError", {
    readonly operation: Schema.Literals<readonly ["record", "claim-source-job", "complete-source-job"]>;
    readonly sourceJobId: Schema.NullOr<Schema.String>;
    readonly userId: Schema.NullOr<Schema.String>;
    readonly environmentId: Schema.NullOr<Schema.String>;
    readonly threadId: Schema.NullOr<Schema.String>;
    readonly deviceId: Schema.NullOr<Schema.String>;
    readonly kind: Schema.NullOr<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeliveryAttemptRecordPersistenceError extends DeliveryAttemptRecordPersistenceError_base {
    get message(): string;
}
export interface DeliveryAttemptInput {
    readonly userId: string | null;
    readonly environmentId: string | null;
    readonly threadId: string | null;
    readonly deviceId: string | null;
    readonly kind: string;
    readonly sourceJobId?: string | null;
    readonly token: string | null;
    readonly apnsStatus?: number;
    readonly apnsReason?: string;
    readonly apnsId?: string | null;
    readonly transportError?: string;
}
export interface DeliveryAttemptCompletionInput {
    readonly sourceJobId: string;
    readonly apnsStatus?: number;
    readonly apnsReason?: string;
    readonly apnsId?: string | null;
    readonly transportError?: string;
}
export type DeliverySourceJobClaimResult = "claimed" | "completed" | "in_flight";
declare const DeliveryAttempts_base: Context.ServiceClass<DeliveryAttempts, "t3code-relay/agentActivity/DeliveryAttempts", {
    readonly record: (input: DeliveryAttemptInput) => Effect.Effect<void, DeliveryAttemptRecordPersistenceError>;
    readonly claimSourceJob: (input: DeliveryAttemptInput & {
        readonly sourceJobId: string;
    }) => Effect.Effect<DeliverySourceJobClaimResult, DeliveryAttemptRecordPersistenceError>;
    readonly completeSourceJob: (input: DeliveryAttemptCompletionInput) => Effect.Effect<void, DeliveryAttemptRecordPersistenceError>;
}>;
export declare class DeliveryAttempts extends DeliveryAttempts_base {
}
export declare const make: Effect.Effect<{
    readonly record: (input: DeliveryAttemptInput) => Effect.Effect<void, DeliveryAttemptRecordPersistenceError>;
    readonly claimSourceJob: (input: DeliveryAttemptInput & {
        readonly sourceJobId: string;
    }) => Effect.Effect<DeliverySourceJobClaimResult, DeliveryAttemptRecordPersistenceError>;
    readonly completeSourceJob: (input: DeliveryAttemptCompletionInput) => Effect.Effect<void, DeliveryAttemptRecordPersistenceError>;
}, never, Crypto.Crypto | RelayDb.RelayDb>;
export declare const layer: Layer.Layer<DeliveryAttempts, never, Crypto.Crypto | RelayDb.RelayDb>;
export {};
