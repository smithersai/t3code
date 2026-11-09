import * as Effect from "effect/Effect";

/** @throws {never} */
export function readAlertColorEnabled(): boolean {
  return process.stdout.isTTY === true && !process.env.NO_COLOR;
}

export const markProcessFailed = Effect.sync(() => {
  process.exitCode = 1;
});
