import type { Session } from "electron";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as ElectronDialog from "../electron/ElectronDialog.vibe";
export type BrowserSessionPartitionNamespace = "profile";
declare const BrowserSessionPartitionDerivationError_base: Schema.Class<BrowserSessionPartitionDerivationError, Schema.TaggedStruct<"BrowserSessionPartitionDerivationError", {
    readonly scope: Schema.String;
    readonly cause: Schema.instanceOf<PlatformError.PlatformError, unknown>;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserSessionPartitionDerivationError extends BrowserSessionPartitionDerivationError_base {
    get message(): string;
}
declare const BrowserSessionCreationError_base: Schema.Class<BrowserSessionCreationError, Schema.TaggedStruct<"BrowserSessionCreationError", {
    readonly scope: Schema.String;
    readonly partition: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserSessionCreationError extends BrowserSessionCreationError_base {
    get message(): string;
}
declare const BrowserSessionStorageClearError_base: Schema.Class<BrowserSessionStorageClearError, Schema.TaggedStruct<"BrowserSessionStorageClearError", {
    readonly partition: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserSessionStorageClearError extends BrowserSessionStorageClearError_base {
    get message(): string;
}
declare const BrowserSessionCacheClearError_base: Schema.Class<BrowserSessionCacheClearError, Schema.TaggedStruct<"BrowserSessionCacheClearError", {
    readonly partition: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserSessionCacheClearError extends BrowserSessionCacheClearError_base {
    get message(): string;
}
export declare const BrowserSessionGetSessionError: Schema.Union<readonly [typeof BrowserSessionPartitionDerivationError, typeof BrowserSessionCreationError]>;
export type BrowserSessionGetSessionError = typeof BrowserSessionGetSessionError.Type;
export declare const BrowserSessionError: Schema.Union<readonly [typeof BrowserSessionPartitionDerivationError, typeof BrowserSessionCreationError, typeof BrowserSessionStorageClearError, typeof BrowserSessionCacheClearError]>;
export type BrowserSessionError = typeof BrowserSessionError.Type;
declare const BrowserSession_base: Context.ServiceClass<BrowserSession, "@t3tools/desktop/preview/BrowserSession", {
    readonly getPartition: (scope?: string, persistent?: boolean, namespace?: BrowserSessionPartitionNamespace) => Effect.Effect<string, BrowserSessionPartitionDerivationError>;
    /** @throws {never} */
    readonly isPartition: (partition: string) => boolean;
    readonly getSession: (scope?: string, persistent?: boolean, namespace?: BrowserSessionPartitionNamespace) => Effect.Effect<Session, BrowserSessionGetSessionError>;
    /** Omit `partitions` to clear every known partition. */
    readonly clearCookies: (partitions?: readonly string[]) => Effect.Effect<void, BrowserSessionStorageClearError>;
    readonly clearCache: (partitions?: readonly string[]) => Effect.Effect<void, BrowserSessionCacheClearError>;
}>;
export declare class BrowserSession extends BrowserSession_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getPartition: (scope?: string, persistent?: boolean, namespace?: BrowserSessionPartitionNamespace) => Effect.Effect<string, BrowserSessionPartitionDerivationError>;
    /** @throws {never} */
    readonly isPartition: (partition: string) => boolean;
    readonly getSession: (scope?: string, persistent?: boolean, namespace?: BrowserSessionPartitionNamespace) => Effect.Effect<Session, BrowserSessionGetSessionError>;
    /** Omit `partitions` to clear every known partition. */
    readonly clearCookies: (partitions?: ReadonlyArray<string>) => Effect.Effect<void, BrowserSessionStorageClearError>;
    readonly clearCache: (partitions?: ReadonlyArray<string>) => Effect.Effect<void, BrowserSessionCacheClearError>;
}, never, Crypto.Crypto | ElectronDialog.ElectronDialog>;
export declare const layer: Layer.Layer<BrowserSession, never, Crypto.Crypto | ElectronDialog.ElectronDialog>;
export {};
