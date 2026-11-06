export { PairingQrPayloadEmptyError, extractPairingUrlFromQrPayload } from "./pairing.vibe.throwing.js";
export declare function buildPairingUrl(host: string, code: string): string;
export declare function parsePairingUrl(url: string): {
    host: string;
    code: string;
};
