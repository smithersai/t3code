// @effect-diagnostics nodeBuiltinImport:off - Effect has no incremental digest or free-space query.
import * as NodeCrypto from "node:crypto";
import * as NodeFSP from "node:fs/promises";
import * as Effect from "effect/Effect";

export const makeSha256Hash = Effect.sync(() => NodeCrypto.createHash("sha256"));

export const statFreeSpace = (directory: string) => NodeFSP.statfs(directory, { bigint: true });
