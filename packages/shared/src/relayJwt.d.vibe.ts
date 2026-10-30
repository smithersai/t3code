import { type JWTPayload } from "jose";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
export declare const RELAY_LINK_PROOF_TYP = "t3-env-link+jwt";
export declare const RELAY_MINT_REQUEST_TYP = "t3-cloud-mint+jwt";
export declare const RELAY_HEALTH_REQUEST_TYP = "t3-cloud-health+jwt";
export declare const RELAY_MINT_RESPONSE_TYP = "t3-env-mint+jwt";
export declare const RELAY_HEALTH_RESPONSE_TYP = "t3-env-health+jwt";
export declare const RELAY_ACTIVITY_PUBLISH_TYP = "t3-env-activity+jwt";
export declare const RELAY_MANAGED_TUNNEL_RECOVERY_TYP = "t3-env-managed-tunnel-recovery+jwt";
export declare const RELAY_HOOK_DELIVERY_TYP = "t3-relay-hook-delivery+jwt";
export declare const RELAY_HOOK_DELIVERY_HEADER = "x-t3-relay-delivery";
declare const RelayJwtError_base: Schema.Class<RelayJwtError, Schema.TaggedStruct<"RelayJwtError", {
    readonly operation: Schema.Literals<readonly ["sign", "verify"]>;
    readonly typ: Schema.String;
    readonly issuer: Schema.optional<Schema.String>;
    readonly audience: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class RelayJwtError extends RelayJwtError_base {
    get message(): string;
    static diagnosticCode(error: RelayJwtError): string;
}
export declare function normalizeRelayIssuer(value: string): string;
export declare function decodeRelayJwt(token: string): JWTPayload;
export declare function signRelayJwt(input: {
    readonly privateKey: string;
    readonly typ: string;
    readonly payload: JWTPayload;
}): Effect.Effect<string, RelayJwtError>;
export declare function verifyRelayJwt(input: {
    readonly publicKey: string;
    readonly token: string;
    readonly typ: string;
    readonly issuer: string;
    readonly audience: string;
    readonly nowEpochSeconds: number;
    readonly maxTokenAge?: string | number;
}): Effect.Effect<JWTPayload, RelayJwtError>;
export {};
