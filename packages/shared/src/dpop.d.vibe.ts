import * as Schema from "effect/Schema";
import { normalizeDpopHtu } from "./dpopCommon.vibe";
import type { DpopPublicJwk as DpopPublicJwkType } from "./dpopCommon.vibe";
/**
 * How far a proof's `iat` may sit from the verifier's clock, in either direction.
 * Proofs carry the client's clock, so this also bounds tolerated clock skew.
 */
export declare const DPOP_MAX_CLOCK_SKEW_SECONDS = 300;
export declare const DpopPublicJwk: Schema.Struct<{
    readonly kty: Schema.Literal<"EC">;
    readonly crv: Schema.Literal<"P-256">;
    readonly x: Schema.String;
    readonly y: Schema.String;
}>;
export type DpopPublicJwk = DpopPublicJwkType;
export { normalizeDpopHtu };
export declare const DpopVerificationFailureCode: Schema.Literals<readonly ["missing_proof", "malformed_proof", "key_mismatch", "method_mismatch", "url_mismatch", "access_token_hash_mismatch", "time_window", "invalid_signature", "invalid_proof"]>;
export type DpopVerificationFailureCode = typeof DpopVerificationFailureCode.Type;
export type DpopVerificationResult = {
    readonly ok: true;
    readonly thumbprint: string;
    readonly jti: string;
    readonly iat: number;
} | {
    readonly ok: false;
    readonly code: DpopVerificationFailureCode;
    readonly reason: string;
};
/** @throws {never} */
export declare function computeDpopJwkThumbprint(jwk: DpopPublicJwkType): string;
/** @throws {never} */
export declare function computeDpopAccessTokenHash(accessToken: string): string;
/** @throws {never} */
export declare function verifyDpopProof(input: {
    readonly proof: string | null | undefined;
    readonly method: string;
    readonly url: string;
    readonly nowEpochSeconds: number;
    readonly expectedThumbprint?: string;
    readonly expectedAccessToken?: string;
    readonly maxAgeSeconds?: number;
}): DpopVerificationResult;
