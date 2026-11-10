// @effect-diagnostics-next-line nodeBuiltinImport:off -- the SDK takes a Node ChildProcess for the CLI.
import * as NodeChildProcess from "node:child_process";
import * as NodeUtil from "node:util";

import type {
  SpawnOptions as ClaudeSpawnOptions,
  SpawnedProcess as ClaudeSpawnedProcess,
} from "@anthropic-ai/claude-agent-sdk";
import { signalProcessGroup } from "@t3tools/provider-core/server/processGroup";

const CLAUDE_GROUP_WATCH_SCRIPT = [
  "{ trap '' TERM; read -r _ <&3; kill -TERM 0; sleep 5; kill -KILL 0; } </dev/null >/dev/null 2>&1 &",
  'exec "$@" 3<&-',
].join("\n");

/**
 * Kill the CLI's group on exit to stop MCP grandchildren; `onExit` stops its agent scope for
 * setsid daemons. The CLI keeps working after its pipes close, so a watcher stops the group on
 * EOF from a pipe only this server holds, including when the server crashes.
 */
export function spawnClaudeProcessGroup(
  options: ClaudeSpawnOptions,
  onExit?: () => void,
): ClaudeSpawnedProcess {
  const child = NodeChildProcess.spawn(
    "/bin/sh",
    ["-c", CLAUDE_GROUP_WATCH_SCRIPT, "t3-claude", options.command, ...options.args],
    {
      cwd: options.cwd,
      env: options.env,
      signal: options.signal,
      stdio: ["pipe", "pipe", "ignore", "pipe"],
      detached: true,
    },
  );
  child.once("exit", () => {
    try {
      signalProcessGroup(child.pid ?? 0, "SIGKILL");
    } catch {}
    onExit?.();
  });
  // Node's typings make stdin and stdout nullable once stdio has a fourth entry; both are pipes.
  return child as ClaudeSpawnedProcess;
}

export const spawnClaudeWindowsProcess = (spawnOptions: ClaudeSpawnOptions) =>
  NodeChildProcess.spawn(spawnOptions.command, spawnOptions.args, {
    cwd: spawnOptions.cwd,
    env: spawnOptions.env,
    signal: spawnOptions.signal,
    windowsHide: true,
    stdio: ["pipe", "pipe", "pipe"],
  });

export const stripVTControlCharacters = (text: string): string =>
  NodeUtil.stripVTControlCharacters(text);

export const readCurrentDirectory = (): string => process.cwd();

/** @throws {never} */
export function utf8ByteLength(value: string): number {
  return Buffer.byteLength(value);
}

/** @throws {never} */
export function encodeBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
}

/** @throws {never} */
export function concatBuffers(chunks: ReadonlyArray<Uint8Array>): Buffer {
  return Buffer.concat(chunks);
}
