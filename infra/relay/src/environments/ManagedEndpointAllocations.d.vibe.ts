import type { RelayManagedEndpoint, RelayManagedEndpointOrigin } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
export interface ManagedEndpointAllocation {
    readonly userId: string;
    readonly environmentId: string;
    readonly hostname: string;
    readonly tunnelId: string | null;
    readonly tunnelName: string;
    readonly dnsRecordId: string | null;
    readonly readyAt: string | null;
    readonly origin: RelayManagedEndpointOrigin | null;
    readonly updatedAt: string;
    readonly generation: number;
    readonly tunnelReleasedAt: string | null;
}
export interface ManagedEndpointTunnelAllocation extends ManagedEndpointAllocation {
    readonly recoveryEnabled: boolean;
}
export declare const MANAGED_ENDPOINT_ALLOCATION_LOOKUP_BATCH_SIZE = 500;
/** @throws {never} */
export declare function resolveReadyManagedEndpoint(input: {
    readonly allocation: ManagedEndpointAllocation;
    readonly baseDomain: string | undefined;
}): RelayManagedEndpoint | null;
declare const ManagedEndpointAllocationPersistenceError_base: Schema.Class<ManagedEndpointAllocationPersistenceError, Schema.TaggedStruct<"ManagedEndpointAllocationPersistenceError", {
    readonly operation: Schema.Literals<readonly ["get", "reserve", "record-tunnel", "record-dns", "mark-ready", "enable-recovery", "list-tunnels", "lock-tunnel", "claim-release", "claim-deprovision", "remove", "remove-claimed", "get-by-tunnel-name"]>;
    readonly stage: Schema.Literals<readonly ["database-request", "resolve-reservation"]>;
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly hostname: Schema.optionalKey<Schema.String>;
    readonly tunnelName: Schema.optionalKey<Schema.String>;
    readonly tunnelId: Schema.optionalKey<Schema.String>;
    readonly dnsRecordId: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedEndpointAllocationPersistenceError extends ManagedEndpointAllocationPersistenceError_base {
    get message(): string;
}
interface ManagedEndpointAllocationKey {
    readonly userId: string;
    readonly environmentId: string;
}
interface ReserveManagedEndpointAllocationInput extends ManagedEndpointAllocationKey {
    readonly hostname: string;
    readonly tunnelName: string;
}
interface RecordManagedEndpointTunnelInput extends ManagedEndpointAllocationKey {
    readonly tunnelId: string;
    readonly generation: number;
}
interface RecordManagedEndpointDnsInput extends ManagedEndpointAllocationKey {
    readonly dnsRecordId: string;
    readonly tunnelId: string;
    readonly generation: number;
}
interface MarkManagedEndpointReadyInput extends ManagedEndpointAllocationKey {
    readonly tunnelId: string;
    readonly generation: number;
    readonly origin: RelayManagedEndpointOrigin;
}
interface ClaimManagedEndpointReleaseInput extends ManagedEndpointAllocationKey {
    readonly tunnelId: string;
    readonly generation: number;
    readonly markReleased?: boolean;
}
interface EnableManagedEndpointRecoveryInput extends ManagedEndpointAllocationKey {
    readonly tunnelId: string;
    readonly environmentPublicKey: string;
    readonly origin: RelayManagedEndpointOrigin;
}
interface ClaimManagedEndpointDeprovisionInput extends ManagedEndpointAllocationKey {
    readonly generation: number;
}
interface RemoveClaimedManagedEndpointAllocationInput extends ManagedEndpointAllocationKey {
    readonly generation: number;
}
declare const ManagedEndpointAllocations_base: Context.ServiceClass<ManagedEndpointAllocations, "t3code-relay/environments/ManagedEndpointAllocations", {
    readonly get: (input: ManagedEndpointAllocationKey) => Effect.Effect<ManagedEndpointAllocation | null, ManagedEndpointAllocationPersistenceError>;
    readonly getByTunnelName: (tunnelName: string) => Effect.Effect<ManagedEndpointAllocation | null, ManagedEndpointAllocationPersistenceError>;
    readonly reserve: (input: ReserveManagedEndpointAllocationInput) => Effect.Effect<ManagedEndpointAllocation, ManagedEndpointAllocationPersistenceError>;
    readonly recordTunnel: (input: RecordManagedEndpointTunnelInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly recordDns: (input: RecordManagedEndpointDnsInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly markReady: (input: MarkManagedEndpointReadyInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
    readonly enableRecovery: (input: EnableManagedEndpointRecoveryInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
    readonly listByTunnelNames: (tunnelNames: readonly string[]) => Effect.Effect<readonly ManagedEndpointTunnelAllocation[], ManagedEndpointAllocationPersistenceError>;
    /** Claim deletion only while tunnel and generation match, so concurrent provisioning keeps its new tunnel. */
    readonly claimRelease: (input: ClaimManagedEndpointReleaseInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly withClaimedTunnel: <A, E, R>(input: ClaimManagedEndpointReleaseInput, effect: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E | ManagedEndpointAllocationPersistenceError, R>;
    /** Return a teardown claim generation, or null if concurrent provisioning superseded the captured snapshot. */
    readonly claimDeprovision: (input: ClaimManagedEndpointDeprovisionInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly remove: (input: ManagedEndpointAllocationKey) => Effect.Effect<void, ManagedEndpointAllocationPersistenceError>;
    readonly removeClaimed: (input: RemoveClaimedManagedEndpointAllocationInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
}>;
export declare class ManagedEndpointAllocations extends ManagedEndpointAllocations_base {
}
export declare const make: Effect.Effect<{
    readonly get: (input: ManagedEndpointAllocationKey) => Effect.Effect<ManagedEndpointAllocation | null, ManagedEndpointAllocationPersistenceError>;
    readonly getByTunnelName: (tunnelName: string) => Effect.Effect<ManagedEndpointAllocation | null, ManagedEndpointAllocationPersistenceError>;
    readonly reserve: (input: ReserveManagedEndpointAllocationInput) => Effect.Effect<ManagedEndpointAllocation, ManagedEndpointAllocationPersistenceError>;
    readonly recordTunnel: (input: RecordManagedEndpointTunnelInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly recordDns: (input: RecordManagedEndpointDnsInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly markReady: (input: MarkManagedEndpointReadyInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
    readonly enableRecovery: (input: EnableManagedEndpointRecoveryInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
    readonly listByTunnelNames: (tunnelNames: ReadonlyArray<string>) => Effect.Effect<ReadonlyArray<ManagedEndpointTunnelAllocation>, ManagedEndpointAllocationPersistenceError>;
    /** Claim deletion only while tunnel and generation match, so concurrent provisioning keeps its new tunnel. */
    readonly claimRelease: (input: ClaimManagedEndpointReleaseInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly withClaimedTunnel: <A, E, R>(input: ClaimManagedEndpointReleaseInput, effect: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E | ManagedEndpointAllocationPersistenceError, R>;
    /** Return a teardown claim generation, or null if concurrent provisioning superseded the captured snapshot. */
    readonly claimDeprovision: (input: ClaimManagedEndpointDeprovisionInput) => Effect.Effect<number | null, ManagedEndpointAllocationPersistenceError>;
    readonly remove: (input: ManagedEndpointAllocationKey) => Effect.Effect<void, ManagedEndpointAllocationPersistenceError>;
    readonly removeClaimed: (input: RemoveClaimedManagedEndpointAllocationInput) => Effect.Effect<boolean, ManagedEndpointAllocationPersistenceError>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<ManagedEndpointAllocations, never, RelayDb.RelayDb>;
export {};
