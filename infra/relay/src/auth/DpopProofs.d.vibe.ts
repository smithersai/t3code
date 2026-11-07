import * as Context from "effect/Context";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const DpopProofReplayPersistenceError_base: Schema.Class<DpopProofReplayPersistenceError, Schema.TaggedStruct<"DpopProofReplayPersistenceError", {
    readonly operation: Schema.Literals<readonly ["consume", "prune-expired"]>;
    readonly thumbprint: Schema.optionalKey<Schema.String>;
    readonly jti: Schema.optionalKey<Schema.String>;
    readonly iat: Schema.optionalKey<Schema.Number>;
    readonly expiresBefore: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DpopProofReplayPersistenceError extends DpopProofReplayPersistenceError_base {
    get message(): string;
}
export declare const DpopProofFailureCode: Schema.Union<readonly [Schema.Literals<readonly ["missing_proof", "malformed_proof", "key_mismatch", "method_mismatch", "url_mismatch", "access_token_hash_mismatch", "time_window", "invalid_signature", "invalid_proof"]>, Schema.Literal<"replayed">]>;
export type DpopProofFailureCode = typeof DpopProofFailureCode.Type;
declare const DpopProofRejected_base: Schema.Class<DpopProofRejected, Schema.TaggedStruct<"DpopProofRejected", {
    readonly code: Schema.Union<readonly [Schema.Literals<readonly ["missing_proof", "malformed_proof", "key_mismatch", "method_mismatch", "url_mismatch", "access_token_hash_mismatch", "time_window", "invalid_signature", "invalid_proof"]>, Schema.Literal<"replayed">]>;
}>, import("effect/Cause").YieldableError>;
export declare class DpopProofRejected extends DpopProofRejected_base {
    get message(): string;
}
declare const DpopProofReplay_base: Context.ServiceClass<DpopProofReplay, "t3code-relay/auth/DpopProofs/DpopProofReplay", {
    readonly verifyAndConsume: (input: {
        readonly proof: string | undefined;
        readonly method: string;
        readonly url: string;
        readonly expectedThumbprint?: string;
        readonly expectedAccessToken?: string;
        readonly now: DateTime.DateTime;
    }) => Effect.Effect<string, DpopProofRejected | DpopProofReplayPersistenceError>;
    readonly consume: (input: {
        readonly thumbprint: string;
        readonly jti: string;
        readonly iat: number;
        readonly expiresAt: DateTime.DateTime;
    }) => Effect.Effect<boolean, DpopProofReplayPersistenceError>;
    readonly pruneExpired: Effect.Effect<void, DpopProofReplayPersistenceError>;
}>;
export declare class DpopProofReplay extends DpopProofReplay_base {
}
export declare const layer: Layer.Layer<DpopProofReplay, never, RelayDb.RelayDb>;
export {};
