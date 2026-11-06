import { type RelayAgentActivityPublishRequest } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as DpopProofs from "../auth/DpopProofs.vibe";
import * as RelayConfiguration from "../Config.vibe";
declare const EnvironmentPublishSignatureExpired_base: Schema.Class<EnvironmentPublishSignatureExpired, Schema.TaggedStruct<"EnvironmentPublishSignatureExpired", {
    readonly environmentId: Schema.String;
    readonly threadId: Schema.String;
    readonly expiresAt: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentPublishSignatureExpired extends EnvironmentPublishSignatureExpired_base {
    get message(): string;
}
declare const EnvironmentPublishSignatureInvalid_base: Schema.Class<EnvironmentPublishSignatureInvalid, Schema.TaggedStruct<"EnvironmentPublishSignatureInvalid", {
    readonly environmentId: Schema.String;
    readonly threadId: Schema.String;
    readonly reason: Schema.Literals<readonly ["invalid_signature_or_payload", "replayed_nonce"]>;
    readonly stage: Schema.Literals<readonly ["decode_token", "verify_proof", "validate_claims", "validate_expiration", "generate_replay_thumbprint", "consume_nonce"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentPublishSignatureInvalid extends EnvironmentPublishSignatureInvalid_base {
    get message(): string;
}
declare const EnvironmentPublishPublicKeyMissing_base: Schema.Class<EnvironmentPublishPublicKeyMissing, Schema.TaggedStruct<"EnvironmentPublishPublicKeyMissing", {
    readonly environmentId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentPublishPublicKeyMissing extends EnvironmentPublishPublicKeyMissing_base {
    get message(): string;
}
export type EnvironmentPublishSignatureError = EnvironmentPublishSignatureExpired | EnvironmentPublishSignatureInvalid | EnvironmentPublishPublicKeyMissing | DpopProofs.DpopProofReplayPersistenceError;
declare const EnvironmentPublishSignatures_base: Context.ServiceClass<EnvironmentPublishSignatures, "t3code-relay/environments/EnvironmentPublishSignatures", {
    readonly verify: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
        readonly threadId: string;
        readonly request: RelayAgentActivityPublishRequest;
    }) => Effect.Effect<void, EnvironmentPublishSignatureError>;
}>;
export declare class EnvironmentPublishSignatures extends EnvironmentPublishSignatures_base {
}
export declare const layer: Layer.Layer<EnvironmentPublishSignatures, never, Crypto.Crypto | DpopProofs.DpopProofReplay | RelayConfiguration.RelayConfiguration>;
export {};
