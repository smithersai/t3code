export { PiRpcError, PiRpcTimeoutError, makePiRpcConnection } from "./rpc.vibe.platform.js";
export type { PiRpcConnection, PiRpcRecord, PiRpcSpawnOptions } from "./rpc.vibe.platform.js";
/** @throws {never} */
export declare function piRecordField(input: unknown, key: string): unknown;
/** @throws {never} */
export declare function piRecordString(input: unknown, key: string): string | undefined;
/** @throws {never} */
export declare function piRecordNumber(input: unknown, key: string): number | undefined;
/** @throws {never} */
export declare function parsePiModelSlug(slug: string): {
    provider: string;
    modelId: string;
} | null;
