import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Digest from "effect/crypto/Digest";
import * as SecureRandom from "effect/crypto/SecureRandom";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import type * as PlatformError from "effect/PlatformError";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
declare const ManagementError_base: Schema.Class<ManagementError, Schema.TaggedStruct<"ManagementError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
declare class ManagementError extends ManagementError_base {
}
/** @throws {never} */
export declare const isWriterName: (name: string) => boolean;
declare const WriterRegistry_base: Context.ServiceClass<WriterRegistry, "@t3tools/task-cache/WriterRegistry", {
    readonly read: () => Effect.Effect<Record<string, string>, PlatformError.PlatformError | Schema.SchemaError>;
    readonly update: (name: string, revoke: boolean, endpoint?: string, initialize?: boolean) => Effect.Effect<string | undefined, PlatformError.PlatformError | Schema.SchemaError | ManagementError>;
}>;
export declare class WriterRegistry extends WriterRegistry_base {
}
export declare const layer: Layer.Layer<WriterRegistry, Config.ConfigError, Digest.Digest | FileSystem.FileSystem | SecureRandom.SecureRandom>;
export {};
