import * as Schema from "effect/Schema";
declare const ProviderDriverError_base: Schema.Class<ProviderDriverError, Schema.TaggedStruct<"ProviderDriverError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderDriverError extends ProviderDriverError_base {
    get message(): string;
}
declare const ProviderCredentialError_base: Schema.Class<ProviderCredentialError, Schema.TaggedStruct<"ProviderCredentialError", {
    readonly operation: Schema.Literals<readonly ["get", "set", "remove"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderCredentialError extends ProviderCredentialError_base {
    get message(): string;
}
export {};
