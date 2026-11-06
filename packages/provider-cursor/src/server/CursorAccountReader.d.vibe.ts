import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as HttpClient from "effect/http/HttpClient";
import * as Layer from "effect/Layer";
import type { CursorCredentialSource } from "./accountCache.ts";
import { type CursorAccountUsageReadResult } from "./accountUsage.vibe";
import * as CursorKeychain from "./CursorKeychain.vibe";
declare const CursorAccountReader_base: Context.ServiceClass<CursorAccountReader, "@t3tools/provider-cursor/server/CursorAccountReader", {
    readonly read: (credentialSource: CursorCredentialSource, sinceMs: number, untilMs: number) => Effect.Effect<CursorAccountUsageReadResult>;
}>;
export declare class CursorAccountReader extends CursorAccountReader_base {
}
export declare const layer: Layer.Layer<CursorAccountReader, never, Crypto.Crypto | CursorKeychain.CursorKeychain | FileSystem.FileSystem | HttpClient.HttpClient>;
export {};
