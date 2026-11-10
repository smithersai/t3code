// @effect-diagnostics nodeBuiltinImport:off - OAuth loopback listener and PKCE use Node APIs.
import * as NodeCrypto from "node:crypto";
import * as NodeHttp from "node:http";

import * as Effect from "effect/Effect";

export const randomBase64Url = (size: number) =>
  Effect.sync(() => NodeCrypto.randomBytes(size).toString("base64url"));

export const randomLoopbackPort = Effect.sync(() => NodeCrypto.randomInt(49_152, 65_536));

export const sha256Base64Url = (value: string) =>
  Effect.sync(() => NodeCrypto.createHash("sha256").update(value).digest("base64url"));

export const createLoopbackServer = (listener: NodeHttp.RequestListener) =>
  NodeHttp.createServer(listener);
