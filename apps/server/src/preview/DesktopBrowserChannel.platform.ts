// @effect-diagnostics nodeBuiltinImport:off - Bridges Playwright's WebSocket transport to the desktop's fds.
import * as NodeCrypto from "node:crypto";
import * as NodeNet from "node:net";

import * as Effect from "effect/Effect";

/** @throws {never} */
export function utf8LineBytes(line: string): Buffer {
  return Buffer.from(`${line}\n`);
}

export const openInputSocket = (fd: number) =>
  Effect.sync(() => new NodeNet.Socket({ fd, readable: true, writable: false }));

export const makeRelaySecret = Effect.sync(() => NodeCrypto.randomBytes(24).toString("base64url"));
