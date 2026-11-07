import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import type { HeldHook } from "./HookInboxStore.ts";
declare const HookInboxError_base: Schema.Class<HookInboxError, Schema.TaggedStruct<"HookInboxError", {
    readonly operation: Schema.Literals<readonly ["hold", "wake", "clear"]>;
    readonly endpointKey: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class HookInboxError extends HookInboxError_base {
    get message(): string;
}
declare const HookInbox_base: Context.ServiceClass<HookInbox, "t3code-relay/hooks/HookInbox", {
    /** False when the environment's inbox is full and nothing was stored. */
    readonly hold: (input: {
        readonly endpointKey: string;
        readonly baseUrl: string;
        readonly hook: HeldHook;
    }) => Effect.Effect<boolean, HookInboxError>;
    readonly wake: (input: {
        readonly endpointKey: string;
        readonly baseUrl: string;
    }) => Effect.Effect<boolean, HookInboxError>;
    readonly clear: (input: {
        readonly endpointKey: string;
    }) => Effect.Effect<void, HookInboxError>;
}>;
export declare class HookInbox extends HookInbox_base {
}
export {};
