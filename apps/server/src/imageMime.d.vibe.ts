export declare const SAFE_IMAGE_FILE_EXTENSIONS: Set<string>;
export declare function parseBase64DataUrl(dataUrl: string): {
    readonly mimeType: string;
    readonly base64: string;
} | null;
export declare function inferImageExtension(input: {
    mimeType: string;
    fileName?: string;
}): string;
