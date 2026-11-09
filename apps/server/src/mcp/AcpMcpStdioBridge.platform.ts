// @effect-diagnostics nodeBuiltinImport:off
import * as NodeReadline from "node:readline";

import * as Effect from "effect/Effect";

/** @throws {never} */
export function globalFetch(): (url: string, init?: RequestInit) => Promise<Response> {
  return fetch;
}

export const createLineReader = (input: NodeJS.ReadableStream) =>
  Effect.sync(() => NodeReadline.createInterface({ input }));

/** @throws {never} */
export function readAcpMcpEndpoint(): string | undefined {
  return process.env.T3_ACP_MCP_ENDPOINT;
}

/** @throws {never} */
export function readAcpMcpAuthorization(): string | undefined {
  return process.env.T3_ACP_MCP_AUTHORIZATION;
}

/** @throws {never} */
export function failAcpMcpCli(message: string): void {
  process.stderr.write(message);
  process.exitCode = 2;
}

/** @throws {never} */
export function processStdin(): NodeJS.ReadableStream {
  return process.stdin;
}

/** @throws {never} */
export function processStdout(): { write(chunk: string): unknown } {
  return process.stdout;
}

/** @throws {never} */
export function writeStdout(text: string): void {
  process.stdout.write(text);
}
