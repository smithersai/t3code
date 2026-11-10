import DiffsWorker from "@pierre/diffs/worker/worker.js?worker";
import * as Schema from "effect/Schema";

export class DiffWorkerError extends Schema.TaggedError<DiffWorkerError>()("DiffWorkerError", {
  operation: Schema.Literals(["create-worker", "get-render-options", "set-render-options"]),
  themeName: Schema.Literals(["pierre-dark", "t3-light"]),
  cause: Schema.Defect(),
}) {
  override get message(): string {
    return `Diff worker operation ${this.operation} failed for theme ${this.themeName}.`;
  }
}

// The pool's worker factory throws to report a worker that could not start.
export function createDiffsWorker(themeName: DiffWorkerError["themeName"]) {
  try {
    return new DiffsWorker();
  } catch (cause) {
    throw new DiffWorkerError({ operation: "create-worker", themeName, cause });
  }
}
