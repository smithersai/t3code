// @effect-diagnostics nodeBuiltinImport:off
import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";

import * as Effect from "effect/Effect";

const exitLogPath = process.env.T3_ACP_EXIT_LOG_PATH;
const residualCallbackResponseLogPath = process.env.T3_ACP_RESIDUAL_CALLBACK_RESPONSE_LOG_PATH;

/** @throws {never} */
export function readEnv(name: string): string | undefined {
  return process.env[name];
}

export const readEnvEffect = (name: string) => Effect.sync(() => process.env[name]);

export const readProcessCwd = Effect.sync(() => process.cwd());

function logExit(reason: string): void {
  if (!exitLogPath) {
    return;
  }
  NodeFS.appendFileSync(exitLogPath, `${reason}\n`, "utf8");
}

/** @throws {never} */
export function writeJsonRpcNotification(method: string, params: unknown): void {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", method, params })}\n`);
}

export const logResidualCallbackResponse = (kind: string) =>
  Effect.sync(() => {
    if (!residualCallbackResponseLogPath) return;
    NodeFS.appendFileSync(residualCallbackResponseLogPath, `${kind}\n`, "utf8");
  });

/** @throws {never} */
export function installExitLogging(): void {
  process.once("SIGTERM", () => {
    logExit("SIGTERM");
    process.exit(0);
  });

  process.once("SIGINT", () => {
    logExit("SIGINT");
    process.exit(0);
  });

  process.once("exit", (code) => {
    logExit(`exit:${code}`);
  });
}

export const floodStderrOnce = (): Promise<void> =>
  new Promise<void>((resolve) => {
    process.stderr.write("stderr".repeat(350_000), () => resolve());
  });

export const exitProcess = (code: number) => Effect.sync(() => process.exit(code));

export const exitFromTestNotification = (params: unknown) =>
  Effect.sync(() => {
    const code =
      typeof params === "object" && params !== null ? Reflect.get(params, "code") : undefined;
    process.exit(typeof code === "number" ? code : 19);
  });

export const appendUtf8 = (path: string, text: string) =>
  Effect.sync(() => {
    NodeFS.appendFileSync(path, text, "utf8");
  });

export const fileExists = (path: string) => Effect.sync(() => NodeFS.existsSync(path));

/** @throws {never} */
export function encodeBase64(text: string): string {
  return Buffer.from(text).toString("base64");
}

export const launchRunningCommand = (input: {
  readonly pidPath: string;
  readonly ignoresTerm: boolean;
  readonly separateSession: boolean;
}) =>
  Effect.sync(() => {
    const runningCommandPidPath = input.pidPath;
    const runningCommandIgnoresTerm = input.ignoresTerm;
    const runningCommandSeparateSession = input.separateSession;
    let runningCommandPublished: Promise<void> = Promise.resolve();
    const command = runningCommandIgnoresTerm
      ? 'trap "" TERM; bash -c \'trap "" TERM; while :; do sleep 1; done\' & child=$!; printf "%s %s\n" "$$" "$child" > "$1"; wait "$child"'
      : 'sleep 120 & child=$!; printf "%s %s\n" "$$" "$child" > "$1"; wait "$child"';
    if (runningCommandSeparateSession) {
      const launcher = [
        'const { spawn } = require("node:child_process");',
        "const child = spawn(process.argv[1], process.argv.slice(2), { stdio: ['ignore', 'inherit', 'ignore'] });",
        "child.once('exit', (code, signal) => process.exitCode = code ?? (signal ? 1 : 0));",
      ].join(" ");
      const detachedCommand = runningCommandIgnoresTerm
        ? 'trap "" TERM; bash -c \'trap "" TERM; while :; do sleep 1; done\' & child=$!; printf "%s %s %s\n" "$PPID" "$$" "$child" > "$1"; echo published; wait "$child"'
        : 'sleep 120 & child=$!; printf "%s %s %s\n" "$PPID" "$$" "$child" > "$1"; echo published; wait "$child"';
      // Only nested bash writes the "$PPID $$ $child" triple; writing the launcher PID
      // here would race it. The launcher's printed line keeps the agent alive until the
      // triple exists.
      const detachedLauncher = NodeChildProcess.spawn(
        process.execPath,
        ["-e", launcher, "bash", "-c", detachedCommand, "bash", runningCommandPidPath],
        { detached: true, stdio: ["ignore", "pipe", "ignore"] },
      );
      runningCommandPublished = new Promise((resolve) =>
        detachedLauncher.stdout.once("data", () => resolve()),
      );
      detachedLauncher.unref();
    } else {
      NodeChildProcess.spawn("bash", ["-c", command, "bash", runningCommandPidPath], {
        stdio: "ignore",
      });
    }
    const published = runningCommandPublished;
    return () => published;
  });
