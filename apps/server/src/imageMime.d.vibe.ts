export declare const SAFE_IMAGE_FILE_EXTENSIONS: Set<string>;
/** @throws {never} */
export declare function parseBase64DataUrl(dataUrl: string): {
    readonly mimeType: string;
    readonly base64: string;
} | null;
/** @throws {never} */
export declare function inferImageExtension(input: {
    mimeType: string;
    fileName?: string;
}): string;
