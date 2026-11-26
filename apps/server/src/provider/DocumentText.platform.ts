// @effect-diagnostics nodeBuiltinImport:off -- the isolated parser process is an external runtime boundary.
import * as NodeChildProcess from "node:child_process";
import * as NodeURL from "node:url";
import * as Effect from "effect/Effect";

// In a bundle import.meta.url is bin.mjs; development and tests use this source module.
export const readDocumentTextEntry = Effect.sync(() =>
  NodeURL.fileURLToPath(
    new URL(import.meta.url.endsWith(".ts") ? "../bin.ts" : "./bin.mjs", import.meta.url),
  ),
);

export const execDocumentTextParser = (
  executable: string,
  args: ReadonlyArray<string>,
  environment: Readonly<Record<string, string | undefined>>,
  signal: AbortSignal,
): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    NodeChildProcess.execFile(
      executable,
      args,
      {
        signal,
        timeout: 15_000,
        maxBuffer: 4 * 1024 * 1024 + 1024,
        encoding: "utf8",
        windowsHide: true,
        env: {
          ...environment,
          ELECTRON_RUN_AS_NODE: "1",
          NODE_OPTIONS: `${environment.NODE_OPTIONS ?? ""} --max-old-space-size=192`,
        },
      },
      (error, stdout) => (error ? reject(error) : resolve(stdout)),
    );
  });
