// @effect-diagnostics nodeBuiltinImport:off - Lean self-invoked local IPC client; no auth/store graph.
import * as NodeNet from "node:net";
import * as Effect from "effect/Effect";

export const openManagedTokenSocket = (endpoint: string) =>
  Effect.sync(() => NodeNet.createConnection(endpoint));

/** @throws {never} */
export function reportManagedTokenFailure(): void {
  process.stderr.write("Could not access the managed ChatGPT connection. Reconnect in T3 Code.\n");
  process.exitCode = 1;
}

/** @throws {never} */
export function writeManagedToken(token: string): void {
  process.stdout.write(token);
}
