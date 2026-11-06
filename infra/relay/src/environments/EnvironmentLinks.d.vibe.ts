import type { RelayClientEnvironmentRecord, RelayEnvironmentLinkProofPayload, RelayEnvironmentLinkRequest, RelayManagedEndpoint } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
export interface RelayLinkedEnvironmentRecord extends RelayClientEnvironmentRecord {
    readonly environmentPublicKey: string;
}
export interface AgentAwarenessDeliveryUserRecord {
    readonly userId: string;
    readonly notificationsEnabled: boolean;
    readonly liveActivitiesEnabled: boolean;
}
declare const EnvironmentLinkUpsertPersistenceError_base: Schema.Class<EnvironmentLinkUpsertPersistenceError, Schema.TaggedStruct<"EnvironmentLinkUpsertPersistenceError", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly deviceId: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkUpsertPersistenceError extends EnvironmentLinkUpsertPersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinkUserListPersistenceError_base: Schema.Class<EnvironmentLinkUserListPersistenceError, Schema.TaggedStruct<"EnvironmentLinkUserListPersistenceError", {
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkUserListPersistenceError extends EnvironmentLinkUserListPersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinkListPersistenceError_base: Schema.Class<EnvironmentLinkListPersistenceError, Schema.TaggedStruct<"EnvironmentLinkListPersistenceError", {
    readonly userId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkListPersistenceError extends EnvironmentLinkListPersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinkLookupPersistenceError_base: Schema.Class<EnvironmentLinkLookupPersistenceError, Schema.TaggedStruct<"EnvironmentLinkLookupPersistenceError", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkLookupPersistenceError extends EnvironmentLinkLookupPersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinkEnvironmentLookupPersistenceError_base: Schema.Class<EnvironmentLinkEnvironmentLookupPersistenceError, Schema.TaggedStruct<"EnvironmentLinkEnvironmentLookupPersistenceError", {
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkEnvironmentLookupPersistenceError extends EnvironmentLinkEnvironmentLookupPersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinkRevokePersistenceError_base: Schema.Class<EnvironmentLinkRevokePersistenceError, Schema.TaggedStruct<"EnvironmentLinkRevokePersistenceError", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkRevokePersistenceError extends EnvironmentLinkRevokePersistenceError_base {
    get message(): string;
}
declare const EnvironmentLinks_base: Context.ServiceClass<EnvironmentLinks, "t3code-relay/environments/EnvironmentLinks", {
    readonly upsert: (input: {
        readonly userId: string;
        readonly request: RelayEnvironmentLinkRequest;
        readonly proof: RelayEnvironmentLinkProofPayload;
        readonly endpoint: RelayManagedEndpoint;
    }) => Effect.Effect<void, EnvironmentLinkUpsertPersistenceError>;
    readonly listDeliveryUsersForEnvironment: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
    }) => Effect.Effect<readonly AgentAwarenessDeliveryUserRecord[], EnvironmentLinkUserListPersistenceError>;
    readonly listForUser: (input: {
        readonly userId: string;
    }) => Effect.Effect<readonly RelayClientEnvironmentRecord[], EnvironmentLinkListPersistenceError>;
    readonly getForUser: (input: {
        readonly userId: string;
        readonly environmentId: string;
    }) => Effect.Effect<RelayLinkedEnvironmentRecord | null, EnvironmentLinkLookupPersistenceError>;
    /** Narrow by user or proven key: a public environment id alone does not authorize access to its links. */
    readonly findActiveManagedForEnvironment: (input: {
        readonly environmentId: string;
        readonly userId?: string;
        readonly environmentPublicKey?: string;
    }) => Effect.Effect<readonly (RelayLinkedEnvironmentRecord & {
        readonly userId: string;
        readonly holdWebhooksWhileOffline: boolean;
    })[], EnvironmentLinkEnvironmentLookupPersistenceError>;
    readonly setHoldWebhooksWhileOffline: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly holdWebhooksWhileOffline: boolean;
    }) => Effect.Effect<void, EnvironmentLinkEnvironmentLookupPersistenceError>;
    readonly revokeForUser: (input: {
        readonly userId: string;
        readonly environmentId: string;
    }) => Effect.Effect<boolean, EnvironmentLinkRevokePersistenceError>;
}>;
export declare class EnvironmentLinks extends EnvironmentLinks_base {
}
export declare const layer: Layer.Layer<EnvironmentLinks, never, RelayDb.RelayDb>;
export {};
