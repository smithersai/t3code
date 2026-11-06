import * as Effect from "effect/Effect";
import type * as NodeStream from "node:stream";
import * as Yauzl from "yauzl";
/** Closing the scope closes the archive. */
export declare const openZipArchive: <E>(archivePath: string, makeError: 
/** @throws {never} */
(detail: string, cause: unknown) => E) => Effect.Effect<{
    entryCount: number;
    next: Effect.Effect<Yauzl.Entry | null, E, never>;
    streamEntry: (entry: Yauzl.Entry) => Effect.Effect<NodeStream.Readable, E, import("effect/Scope").Scope>;
}, E, import("effect/Scope").Scope>;
