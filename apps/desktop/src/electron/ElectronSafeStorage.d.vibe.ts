import { Context } from "effect";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
declare const ElectronSafeStorageAvailabilityError_base: Schema.Class<ElectronSafeStorageAvailabilityError, Schema.TaggedStruct<"ElectronSafeStorageAvailabilityError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronSafeStorageAvailabilityError extends ElectronSafeStorageAvailabilityError_base {
    get message(): string;
}
declare const ElectronSafeStorageEncryptError_base: Schema.Class<ElectronSafeStorageEncryptError, Schema.TaggedStruct<"ElectronSafeStorageEncryptError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronSafeStorageEncryptError extends ElectronSafeStorageEncryptError_base {
    get message(): string;
}
declare const ElectronSafeStorageDecryptError_base: Schema.Class<ElectronSafeStorageDecryptError, Schema.TaggedStruct<"ElectronSafeStorageDecryptError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronSafeStorageDecryptError extends ElectronSafeStorageDecryptError_base {
    get message(): string;
}
export declare const ElectronSafeStorageError: Schema.Union<readonly [typeof ElectronSafeStorageAvailabilityError, typeof ElectronSafeStorageEncryptError, typeof ElectronSafeStorageDecryptError]>;
export type ElectronSafeStorageError = typeof ElectronSafeStorageError.Type;
type ElectronSafeStorage_shape = {
    isEncryptionAvailable: Effect.Effect<boolean, ElectronSafeStorageAvailabilityError>;
    encryptString: (value: string) => Effect.Effect<Uint8Array, ElectronSafeStorageEncryptError>;
    decryptString: (value: Uint8Array) => Effect.Effect<string, ElectronSafeStorageDecryptError>;
    selectedStorageBackend: Effect.Effect<Option.Option<string>>;
};
declare const ElectronSafeStorage_base: Context.ServiceClass<ElectronSafeStorage, "@t3tools/desktop/electron/ElectronSafeStorage", ElectronSafeStorage_shape>;
export declare class ElectronSafeStorage extends ElectronSafeStorage_base {
}
export declare namespace ElectronSafeStorage {
    type Shape = ElectronSafeStorage_shape;
}
/** @public */
export declare const make: Effect.Effect<{
    isEncryptionAvailable: Effect.Effect<boolean, ElectronSafeStorageAvailabilityError>;
    encryptString: (value: string) => Effect.Effect<Uint8Array, ElectronSafeStorageEncryptError>;
    decryptString: (value: Uint8Array) => Effect.Effect<string, ElectronSafeStorageDecryptError>;
    selectedStorageBackend: Effect.Effect<Option.Option<string>>;
}, never, never>;
export declare const layer: Layer.Layer<ElectronSafeStorage, never, never>;
export {};
