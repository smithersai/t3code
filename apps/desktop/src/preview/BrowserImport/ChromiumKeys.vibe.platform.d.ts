import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { ChildProcessSpawner } from "effect/process";
export declare const ChromiumKeyFailure: Schema.Literals<readonly ["needsKeychainApproval", "keychainItemMissing", "keychainUnavailable", "unsupportedPlatform", "readFailed"]>;
export type ChromiumKeyFailure = typeof ChromiumKeyFailure.Type;
declare const ChromiumKeyError_base: Schema.Class<ChromiumKeyError, Schema.TaggedStruct<"ChromiumKeyError", {
    readonly reason: Schema.Literals<readonly ["needsKeychainApproval", "keychainItemMissing", "keychainUnavailable", "unsupportedPlatform", "readFailed"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ChromiumKeyError extends ChromiumKeyError_base {
    get message(): string;
}
export interface ChromiumKeyMaterial {
    readonly cbcV10?: Buffer;
    readonly cbcV11?: Buffer;
    readonly cbcV11Error?: ChromiumKeyError;
    /** Linux clients can encrypt with an empty passphrase; retry it on failure (crbug.com/1195256). */
    readonly cbcEmpty?: Buffer;
    readonly gcmV10?: Buffer;
}
export declare const derive: (passphrase: string, iterations: number) => NonSharedBuffer;
export declare const decodeWindowsWrappedKey: (contents: string) => Effect.Effect<Buffer<ArrayBuffer>, ChromiumKeyError, never>;
export declare const unwrapWindowsDpapiKey: (wrapped: Buffer<ArrayBufferLike>) => Effect.Effect<Buffer<ArrayBuffer>, ChromiumKeyError, ChildProcessSpawner.ChildProcessSpawner>;
export {};
