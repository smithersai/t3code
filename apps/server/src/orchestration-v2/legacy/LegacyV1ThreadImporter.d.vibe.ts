import { ThreadId } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import * as EventSink from "../EventSink.ts";
export interface LegacyV1ImportSummary {
    readonly importedThreadCount: number;
    readonly importedMessageCount: number;
}
declare const LegacyV1ThreadImportError_base: Schema.Class<LegacyV1ThreadImportError, Schema.TaggedStruct<"LegacyV1ThreadImportError", {
    readonly operation: Schema.String;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, Cause.YieldableError>;
export declare class LegacyV1ThreadImportError extends LegacyV1ThreadImportError_base {
    get message(): string;
}
export interface LegacyV1ThreadImporterShape {
    readonly pendingThreadCount: Effect.Effect<number, LegacyV1ThreadImportError>;
    readonly reconcileShells: Effect.Effect<LegacyV1ImportSummary, LegacyV1ThreadImportError>;
    readonly ensureTranscript: (threadId: ThreadId) => Effect.Effect<LegacyV1ImportSummary, LegacyV1ThreadImportError>;
    readonly importPendingTranscripts: Effect.Effect<LegacyV1ImportSummary, never>;
}
declare const LegacyV1ThreadImporter_base: Context.ServiceClass<LegacyV1ThreadImporter, "t3/orchestration-v2/legacy/LegacyV1ThreadImporter", LegacyV1ThreadImporterShape>;
export declare class LegacyV1ThreadImporter extends LegacyV1ThreadImporter_base {
}
export declare const layer: Layer.Layer<LegacyV1ThreadImporter, never, EventSink.EventSinkV2 | SqlClient.SqlClient>;
export {};
