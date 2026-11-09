// @effect-diagnostics nodeBuiltinImport:off - v8.writeHeapSnapshot has no Effect equivalent.
import * as NodePath from "node:path";
import * as NodeV8 from "node:v8";
import * as Effect from "effect/Effect";

/** @throws {never} */
export function heapSnapshotPath(logsDir: string, timestamp: string): string {
  return NodePath.join(logsDir, `server-${process.pid}-${timestamp}.heapsnapshot`);
}

/** @throws {unknown} */
export function writeNativeHeapSnapshot(path: string): string {
  return NodeV8.writeHeapSnapshot(path);
}

export const onHeapSnapshotSignal = (onSignal: () => void) =>
  Effect.acquireRelease(
    Effect.sync(() => process.on("SIGUSR2", onSignal)),
    () => Effect.sync(() => process.off("SIGUSR2", onSignal)),
  );
