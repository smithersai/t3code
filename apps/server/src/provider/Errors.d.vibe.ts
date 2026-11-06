import * as Schema from "effect/Schema";
declare const ProviderInstanceNotFoundError_base: Schema.Class<ProviderInstanceNotFoundError, Schema.TaggedStruct<"ProviderInstanceNotFoundError", {
    readonly instanceId: Schema.String;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderInstanceNotFoundError extends ProviderInstanceNotFoundError_base {
    get message(): string;
}
export { ProviderDriverError } from "@t3tools/provider-core/server/errors";
declare const ProviderWorkspaceMissingError_base: Schema.Class<ProviderWorkspaceMissingError, Schema.TaggedStruct<"ProviderWorkspaceMissingError", {
    readonly threadId: Schema.String;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderWorkspaceMissingError extends ProviderWorkspaceMissingError_base {
    get message(): string;
}
