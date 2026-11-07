import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { type ChromiumKeyMaterial } from "./ChromiumKeys.vibe";
import { type ImportedCookie } from "./CookieDatabase.vibe";
export declare function decryptChromiumValue(encrypted: Uint8Array, keys: ChromiumKeyMaterial, domain: string, schemaVersion?: number, platform?: NodeJS.Platform): string | null;
export declare const readChromiumCookieDatabase: (snapshotPath: string, keys: ChromiumKeyMaterial, platform: NodeJS.Platform) => Effect.Effect<{
    cookies: ImportedCookie[];
    undecryptable: number;
    undecryptableHosts: string[];
}, import("./ChromiumKeys.vibe.platform.ts").ChromiumKeyError | Schema.SchemaError | import("effect/sql/SqlError").SqlError, never>;
