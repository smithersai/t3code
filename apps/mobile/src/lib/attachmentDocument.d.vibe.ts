import type { EnvironmentId } from "@t3tools/contracts";
import type { FileBackedComposerAttachment } from "./composerImages";
/** Captured bytes never resolve against the workspace. */
export declare function useAttachmentDocument(input: {
    readonly name: string;
    readonly mimeType: string;
    readonly sizeBytes: number;
    readonly attachmentId: string;
    readonly environmentId: EnvironmentId | null;
    readonly attachment: FileBackedComposerAttachment | null;
}): {
    renderedMode: "html" | "markdown" | "table" | null;
    activeMode: "html" | "markdown" | "source" | "table";
    kind: import("@t3tools/shared/filePreview").FilePreviewKind;
    uri: string | null;
    /** Native viewers resolve their own fresh URL from this instead of reusing `uri`. */
    resource: {
        _tag: "attachment";
        attachmentId: string;
        fileName: string;
        mimeType: string;
        disposition: "inline";
    };
    content: {
        text: string;
        truncated: boolean;
    } | null;
    table: {
        rows: string[][];
        truncated: boolean;
    } | null;
    error: string | null;
    needsText: boolean;
    rendered: boolean;
    setRendered: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    revision: number;
    retry: () => void;
    share: () => Promise<void>;
    sharing: boolean;
};
