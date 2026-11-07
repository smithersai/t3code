export * as ClientCapabilities from "#vibelang/emitted/src/platform/capabilities";
export * as Persistence from "#vibelang/emitted/src/platform/persistence";
// Flat so consumers' inferred types can name it.
export { ConnectionPersistenceError } from "#vibelang/emitted/src/platform/persistence";
export * from "#vibelang/emitted/src/platform/orchestrationCache";
export * from "./shellCacheEncoding.ts";
export * from "#vibelang/emitted/src/platform/threadCacheEncoding";
export * as PlatformConnectionSource from "#vibelang/emitted/src/platform/source";
export * from "#vibelang/emitted/src/platform/storageDocument";
