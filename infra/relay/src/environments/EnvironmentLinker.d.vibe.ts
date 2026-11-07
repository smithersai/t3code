import { RelayEnvironmentLinkProofPayload, type RelayEnvironmentLinkRequest } from "@t3tools/contracts/relay";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as DpopProofs from "../auth/DpopProofs.vibe";
import * as RelayTokens from "../auth/RelayTokens.vibe";
import * as EnvironmentCredentials from "./EnvironmentCredentials.vibe";
import * as EnvironmentLinks from "./EnvironmentLinks.vibe";
import * as ManagedEndpointProvider from "./ManagedEndpointProvider.ts";
import * as RelayConfiguration from "../Config.vibe";
declare const EnvironmentLinkProofExpired_base: Schema.Class<EnvironmentLinkProofExpired, Schema.TaggedStruct<"EnvironmentLinkProofExpired", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly expiresAt: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkProofExpired extends EnvironmentLinkProofExpired_base {
    get message(): string;
}
declare const EnvironmentLinkProofInvalid_base: Schema.Class<EnvironmentLinkProofInvalid, Schema.TaggedStruct<"EnvironmentLinkProofInvalid", {
    readonly userId: Schema.String;
    readonly environmentId: Schema.String;
    readonly reason: Schema.Literals<readonly ["invalid_signature_or_scope", "descriptor_mismatch", "replayed_nonce", "challenge_invalid", "origin_not_allowed", "endpoint_not_secure"]>;
    readonly stage: Schema.Literals<readonly ["decode_token", "decode_payload", "verify_proof", "authorize_capabilities", "validate_descriptor", "verify_challenge", "validate_expiration", "consume_proof_nonce", "consume_challenge_nonce", "validate_origin", "validate_endpoint"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentLinkProofInvalid extends EnvironmentLinkProofInvalid_base {
    get message(): string;
}
export type EnvironmentLinkError = EnvironmentLinkProofExpired | EnvironmentLinkProofInvalid | DpopProofs.DpopProofReplayPersistenceError | EnvironmentLinks.EnvironmentLinkUpsertPersistenceError | EnvironmentCredentials.EnvironmentCredentialCreatePersistenceError | ManagedEndpointProvider.ManagedEndpointProviderError;
declare const EnvironmentLinker_base: Context.ServiceClass<EnvironmentLinker, "t3code-relay/environments/EnvironmentLinker", {
    readonly link: (input: {
        readonly userId: string;
        readonly request: RelayEnvironmentLinkRequest;
    }) => Effect.Effect<{
        readonly environmentId: RelayEnvironmentLinkProofPayload["environmentId"];
        readonly endpoint: RelayEnvironmentLinkProofPayload["endpoint"];
        readonly endpointRuntime: ManagedEndpointProvider.ManagedEndpointProvisioningResult["runtime"] | null;
        readonly environmentCredential: string;
    }, EnvironmentLinkError>;
}>;
export declare class EnvironmentLinker extends EnvironmentLinker_base {
}
export declare const layer: Layer.Layer<EnvironmentLinker, never, DpopProofs.DpopProofReplay | EnvironmentCredentials.EnvironmentCredentials | EnvironmentLinks.EnvironmentLinks | ManagedEndpointProvider.ManagedEndpointProvider | RelayConfiguration.RelayConfiguration | RelayTokens.RelayTokens>;
export {};
