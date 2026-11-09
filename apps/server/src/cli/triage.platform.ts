// @effect-diagnostics nodeBuiltinImport:off
import * as NodeChildProcess from "node:child_process";
import * as NodeReadlinePromises from "node:readline/promises";

import * as Effect from "effect/Effect";

import { interactiveStdin } from "./consoleStdin.ts";

export async function promptForTriageAgent<
  Agent extends { readonly id: string; readonly label: string },
>(agents: ReadonlyArray<Agent>): Promise<Agent> {
  const readline = NodeReadlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const menu = agents.map((agent, index) => `  [${String(index + 1)}] ${agent.label}`).join("\n");
    for (;;) {
      const answer = (await readline.question(`Run triage with:\n${menu}\n> `)).trim();
      const byNumber = agents[Number.parseInt(answer, 10) - 1];
      if (byNumber !== undefined) {
        return byNumber;
      }
      const byId = agents.find((agent) => agent.id === answer.toLowerCase());
      if (byId !== undefined) {
        return byId;
      }
    }
  } finally {
    readline.close();
  }
}

export const runInteractiveProcess = <E>(
  input: {
    readonly command: string;
    readonly args: ReadonlyArray<string>;
    readonly shell: boolean;
    readonly cwd: string;
  },
  onSpawnError: (cause: Error) => E,
) =>
  Effect.callback<number, E>((resume) => {
    const child = NodeChildProcess.spawn(input.command, [...input.args], {
      cwd: input.cwd,
      // The Windows desktop launcher supplies terminal input through the reopened console.
      stdio: [interactiveStdin(), "inherit", "inherit"],
      shell: input.shell,
    });
    child.once("error", (cause) => resume(Effect.fail(onSpawnError(cause))));
    child.once("exit", (code, signal) => resume(Effect.succeed(code ?? (signal === null ? 0 : 1))));
  });

export const readStdioIsTerminal = Effect.sync(() =>
  Boolean(process.stdin.isTTY && process.stdout.isTTY),
);

export const setProcessExitCode = (exitCode: number) =>
  Effect.sync(() => {
    process.exitCode = exitCode;
  });
