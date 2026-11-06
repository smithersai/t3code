import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
declare const MobileSecureStorageError_base: Schema.Class<MobileSecureStorageError, Schema.TaggedStruct<"MobileSecureStorageError", {
    readonly operation: Schema.Literals<readonly ["read", "write", "delete"]>;
    readonly key: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class MobileSecureStorageError extends MobileSecureStorageError_base {
    get message(): string;
}
declare const MobileSecureStorage_base: Context.ServiceClass<MobileSecureStorage, "@t3tools/mobile/persistence/MobileSecureStorage", {
    readonly getItem: (key: string) => Effect.Effect<string | null, MobileSecureStorageError>;
    readonly setItem: (key: string, value: string) => Effect.Effect<void, MobileSecureStorageError>;
    readonly removeItem: (key: string) => Effect.Effect<void, MobileSecureStorageError>;
}>;
export declare class MobileSecureStorage extends MobileSecureStorage_base {
}
export declare const make: {
    readonly getItem: (key: string) => Effect.Effect<string | null, MobileSecureStorageError>;
    readonly setItem: (key: string, value: string) => Effect.Effect<void, MobileSecureStorageError>;
    readonly removeItem: (key: string) => Effect.Effect<void, MobileSecureStorageError>;
};
export declare const layer: Layer.Layer<MobileSecureStorage, never, never>;
export {};
