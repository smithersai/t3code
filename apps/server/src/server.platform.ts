// Effect wraps this raw Node HTTP server after its startup and write-error guards attach.
// @effect-diagnostics nodeBuiltinImport:off
import * as NodeHttp from "node:http";

/** @throws {never} */
export function createNodeHttpServer(): NodeHttp.Server {
  return NodeHttp.createServer();
}
