import { ManagedRelay } from "@t3tools/client-runtime/relay";
import * as Schema from "effect/Schema";
declare const ManagedRelayTokenStoreError_base: Schema.Class<ManagedRelayTokenStoreError, Schema.TaggedStruct<"ManagedRelayTokenStoreError", {
    readonly operation: Schema.Literals<readonly ["read", "decode", "encode", "write", "clear"]>;
    readonly storageKey: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ManagedRelayTokenStoreError extends ManagedRelayTokenStoreError_base {
    get message(): string;
}
export declare const managedRelayAccessTokenStore: ManagedRelay.ManagedRelayAccessTokenStore;
export {};
