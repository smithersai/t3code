import * as Effect from "effect/Effect";

export const readProcessEnvironment = Effect.sync((): NodeJS.ProcessEnv => process.env);

/** @throws {never} */
export function currentProcessId(): number {
  return process.pid;
}
