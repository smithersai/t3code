import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { StoredOrchestrationShellSnapshot } from "./orchestrationCache.vibe";
/**
 * Shell rows are immutable and the shell reducer keeps unchanged rows by
 * reference, so each encoder remembers the canonical encoding of rows it has
 * already encoded successfully and only runs the row codec for new rows.
 *
 * `yieldToHost` defaults to a zero-delay timer.
 * @throws {never}
 */
export declare function makeStoredShellSnapshotEncoder(options?: {
    readonly yieldToHost?: Effect.Effect<void>;
}): (stored: typeof StoredOrchestrationShellSnapshot.Type) => Effect.Effect<string, Schema.SchemaError, never>;
