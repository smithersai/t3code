import * as Effect from "effect/Effect";

export const readStdioIsTerminal = Effect.sync(() =>
  Boolean(process.stdin.isTTY && process.stdout.isTTY),
);
