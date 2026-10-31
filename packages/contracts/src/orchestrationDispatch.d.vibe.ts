import * as Schema from "effect/Schema";
declare const OrchestrationDispatchCommandError_base: Schema.Class<OrchestrationDispatchCommandError, Schema.TaggedStruct<"OrchestrationDispatchCommandError", {
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
    readonly bootstrapThreadDisposition: Schema.optional<Schema.Literals<readonly ["deleted", "not-created"]>>;
}>, import("effect/Cause").YieldableError>;
export declare class OrchestrationDispatchCommandError extends OrchestrationDispatchCommandError_base {
}
export {};
