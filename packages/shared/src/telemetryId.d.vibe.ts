/**
 * Hashes an identifier before it reaches analytics. Clients and the server both
 * use it, so one Connect account gives the same owner id on every surface.
 * @throws {never}
 */
export declare const hashTelemetryId: (value: string) => string;
/**
 * True for a `hashTelemetryId` result. The server accepts only this shape from clients.
 * @throws {never}
 */
export declare const isTelemetryIdHash: (value: string) => boolean;
