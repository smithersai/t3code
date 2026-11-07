import type { UsageRecord } from "@t3tools/provider-core/server/usage";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as HttpClient from "effect/http/HttpClient";
import * as Schema from "effect/Schema";
import * as CursorKeychain from "./CursorKeychain.vibe";
/** @throws {never} */
export declare function cursorRateModel(model: string): string;
export interface CursorAccountUsageReadResult {
    readonly accountKey: string | null;
    readonly records: readonly UsageRecord[];
    readonly missing: boolean;
    readonly error: string | null;
}
declare const CursorAccountUsageInvalidError_base: Schema.Class<CursorAccountUsageInvalidError, Schema.TaggedStruct<"CursorAccountUsageInvalidError", {
    readonly reason: Schema.String;
}>, import("effect/Cause").YieldableError>;
declare class CursorAccountUsageInvalidError extends CursorAccountUsageInvalidError_base {
}
export declare const readCursorAccountUsage: (credentialSource: string | {
    readonly kind: "keychain";
}, sinceMs: number, endDate: number, keychainToken?: Effect.Effect<string | null, CursorAccountUsageInvalidError | CursorKeychain.CursorKeychainReadError | CursorKeychain.CursorKeychainTimeoutError, never> | undefined) => Effect.Effect<CursorAccountUsageReadResult, never, FileSystem.FileSystem | Crypto.Crypto | HttpClient.HttpClient>;
export {};
