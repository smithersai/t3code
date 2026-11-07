import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as RelayDb from "../db.vibe";
declare const EnvironmentCredentialCreatePersistenceError_base: Schema.Class<EnvironmentCredentialCreatePersistenceError, Schema.TaggedStruct<"EnvironmentCredentialCreatePersistenceError", {
    readonly stage: Schema.Literals<readonly ["generate-credential", "hash-token", "insert-credential", "revoke-previous-credentials"]>;
    readonly environmentId: Schema.String;
    readonly credentialId: Schema.optionalKey<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentCredentialCreatePersistenceError extends EnvironmentCredentialCreatePersistenceError_base {
    get message(): string;
}
declare const EnvironmentCredentialAuthenticatePersistenceError_base: Schema.Class<EnvironmentCredentialAuthenticatePersistenceError, Schema.TaggedStruct<"EnvironmentCredentialAuthenticatePersistenceError", {
    readonly stage: Schema.Literals<readonly ["hash-token", "lookup-credential"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentCredentialAuthenticatePersistenceError extends EnvironmentCredentialAuthenticatePersistenceError_base {
    get message(): string;
}
declare const EnvironmentCredentialRevokePersistenceError_base: Schema.Class<EnvironmentCredentialRevokePersistenceError, Schema.TaggedStruct<"EnvironmentCredentialRevokePersistenceError", {
    readonly environmentId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class EnvironmentCredentialRevokePersistenceError extends EnvironmentCredentialRevokePersistenceError_base {
    get message(): string;
}
export interface EnvironmentCredentialPrincipal {
    readonly credentialId: string;
    readonly environmentId: string;
    readonly environmentPublicKey: string;
}
declare const EnvironmentCredentials_base: Context.ServiceClass<EnvironmentCredentials, "t3code-relay/environments/EnvironmentCredentials", {
    readonly create: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
    }) => Effect.Effect<string, EnvironmentCredentialCreatePersistenceError>;
    readonly authenticate: (token: string) => Effect.Effect<Option.Option<EnvironmentCredentialPrincipal>, EnvironmentCredentialAuthenticatePersistenceError>;
    readonly revokeForEnvironmentPublicKey: (input: {
        readonly environmentId: string;
        readonly environmentPublicKey: string;
    }) => Effect.Effect<boolean, EnvironmentCredentialRevokePersistenceError>;
}>;
export declare class EnvironmentCredentials extends EnvironmentCredentials_base {
}
export declare const layer: Layer.Layer<EnvironmentCredentials, never, Crypto.Crypto | RelayDb.RelayDb>;
export {};
