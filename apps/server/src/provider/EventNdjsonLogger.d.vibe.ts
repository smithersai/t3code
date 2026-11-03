/** Native and canonical views share write state to avoid races on the same thread file. */
import type * as ProviderEventLoggers from "@t3tools/provider-core/server/ProviderEventLoggers";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type { EventNdjsonLogStoreOptions, EventNdjsonStream } from "./EventNdjsonLogger.vibe.platform.js";
export { EventNdjsonLogConfigurationError, EventNdjsonLogDirectoryError, boundProviderEventForLogging, makeEventNdjsonLogStore, shouldPersistProviderEvent, writeBatchedMessages } from "./EventNdjsonLogger.vibe.platform.js";
export type { EventNdjsonLogStore, EventNdjsonLogStoreError, EventNdjsonLogStoreOptions, EventNdjsonStream, PendingRecord } from "./EventNdjsonLogger.vibe.platform.js";
export interface EventNdjsonLoggerOptions extends EventNdjsonLogStoreOptions {
    readonly stream: EventNdjsonStream;
}
export declare const makeEventNdjsonLogger: (filePath: string, options: EventNdjsonLoggerOptions) => Effect.Effect<ProviderEventLoggers.EventNdjsonLogger | undefined, never, FileSystem.FileSystem | Path.Path>;
