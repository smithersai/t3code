import type { RelayAgentActivityState } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const AgentActivityRowUpsertPersistenceError_base: Schema.Class<AgentActivityRowUpsertPersistenceError, Schema.TaggedStruct<"AgentActivityRowUpsertPersistenceError", {
    readonly environmentId: Schema.String;
    readonly threadId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentActivityRowUpsertPersistenceError extends AgentActivityRowUpsertPersistenceError_base {
    get message(): string;
}
declare const AgentActivityRowDeletePersistenceError_base: Schema.Class<AgentActivityRowDeletePersistenceError, Schema.TaggedStruct<"AgentActivityRowDeletePersistenceError", {
    readonly environmentId: Schema.String;
    readonly threadId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentActivityRowDeletePersistenceError extends AgentActivityRowDeletePersistenceError_base {
    get message(): string;
}
declare const AgentActivityRowPruneTerminalPersistenceError_base: Schema.Class<AgentActivityRowPruneTerminalPersistenceError, Schema.TaggedStruct<"AgentActivityRowPruneTerminalPersistenceError", {
    readonly updatedBefore: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentActivityRowPruneTerminalPersistenceError extends AgentActivityRowPruneTerminalPersistenceError_base {
    get message(): string;
}
declare const AgentActivityRowListPersistenceError_base: Schema.Class<AgentActivityRowListPersistenceError, Schema.TaggedStruct<"AgentActivityRowListPersistenceError", {
    readonly userId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AgentActivityRowListPersistenceError extends AgentActivityRowListPersistenceError_base {
    get message(): string;
}
declare const AgentActivityRows_base: Context.ServiceClass<AgentActivityRows, "t3code-relay/agentActivity/AgentActivityRows", {
    readonly upsert: (input: {
        readonly environmentPublicKey: string;
        readonly state: RelayAgentActivityState;
    }) => Effect.Effect<void, AgentActivityRowUpsertPersistenceError>;
    readonly pruneTerminal: (input: {
        readonly updatedBefore: string;
    }) => Effect.Effect<void, AgentActivityRowPruneTerminalPersistenceError>;
    readonly remove: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly threadId: string;
    }) => Effect.Effect<void, AgentActivityRowDeletePersistenceError>;
    readonly listForUser: (input: {
        readonly userId: string;
    }) => Effect.Effect<readonly RelayAgentActivityState[], AgentActivityRowListPersistenceError>;
    readonly getForUserThread: (input: {
        readonly userId: string;
        readonly environmentId: string;
        readonly threadId: string;
    }) => Effect.Effect<RelayAgentActivityState | null, AgentActivityRowListPersistenceError>;
}>;
export declare class AgentActivityRows extends AgentActivityRows_base {
}
export declare const make: Effect.Effect<{
    readonly upsert: (input: {
        readonly environmentPublicKey: string;
        readonly state: RelayAgentActivityState;
    }) => Effect.Effect<void, AgentActivityRowUpsertPersistenceError>;
    readonly pruneTerminal: (input: {
        readonly updatedBefore: string;
    }) => Effect.Effect<void, AgentActivityRowPruneTerminalPersistenceError>;
    readonly remove: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly threadId: string;
    }) => Effect.Effect<void, AgentActivityRowDeletePersistenceError>;
    readonly listForUser: (input: {
        readonly userId: string;
    }) => Effect.Effect<ReadonlyArray<RelayAgentActivityState>, AgentActivityRowListPersistenceError>;
    readonly getForUserThread: (input: {
        readonly userId: string;
        readonly environmentId: string;
        readonly threadId: string;
    }) => Effect.Effect<RelayAgentActivityState | null, AgentActivityRowListPersistenceError>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<AgentActivityRows, never, RelayDb.RelayDb>;
export {};
