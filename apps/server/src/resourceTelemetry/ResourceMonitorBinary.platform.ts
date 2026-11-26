import * as Effect from "effect/Effect";

export function readProcessReport(): unknown {
  return process.report?.getReport();
}

export const readModuleDirectory = Effect.sync(() => import.meta.dirname);
