import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
declare const CursorKeychainTimeoutError_base: Schema.Class<CursorKeychainTimeoutError, Schema.TaggedStruct<"CursorKeychainTimeoutError", {}>, import("effect/Cause").YieldableError>;
export declare class CursorKeychainTimeoutError extends CursorKeychainTimeoutError_base {
    get message(): string;
}
export declare const isCursorKeychainTimeoutError: <I>(input: I) => input is I & CursorKeychainTimeoutError;
declare const CursorKeychainReadError_base: Schema.Class<CursorKeychainReadError, Schema.TaggedStruct<"CursorKeychainReadError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CursorKeychainReadError extends CursorKeychainReadError_base {
    get message(): string;
}
declare const CursorKeychain_base: Context.ServiceClass<CursorKeychain, "@t3tools/provider-cursor/server/CursorKeychain", {
    readonly accessToken: Effect.Effect<string | null, CursorKeychainTimeoutError | CursorKeychainReadError>;
}>;
export declare class CursorKeychain extends CursorKeychain_base {
}
export declare const layer: Layer.Layer<CursorKeychain, never, never>;
export {};
