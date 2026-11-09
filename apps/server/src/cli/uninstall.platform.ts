// @effect-diagnostics nodeBuiltinImport:off
// Windows cleanup must outlive this executable to delete its directory; scoped ChildProcess kills children on exit.
import * as NodeChildProcess from "node:child_process";
import * as Effect from "effect/Effect";

export const readStdioIsTerminal = Effect.sync(() =>
  Boolean(process.stdin.isTTY && process.stdout.isTTY),
);

export function spawnDetachedRuntimeRemoval(comspec: string, runtimeDir: string): void {
  const child = NodeChildProcess.spawn(
    comspec,
    ["/d", "/c", `ping -n 3 127.0.0.1 >nul & rmdir /s /q "${runtimeDir}"`],
    { detached: true, stdio: "ignore", windowsHide: true },
  );
  child.unref();
}
