import { type ContextMenuItem, type EditorId, type EnvironmentId } from "@t3tools/contracts";
export type FileContextMenuAction = "reveal-in-folder" | "open"
/** Submenu parent; never the activated id. */
 | "open-with" | `editor:${EditorId}`;
export interface FileContextMenuTarget {
    readonly environmentId: EnvironmentId | null;
    /** Repo- or workspace-relative file path, as shown in diffs. */
    readonly filePath: string;
    readonly workspaceRoot: string | undefined;
    readonly repositoryRoot?: string | undefined;
}
export declare function resolveFileContextMenuAbsolutePath(target: FileContextMenuTarget): string | null;
export interface FileContextMenuCapabilities {
    readonly revealLabel: string | undefined;
    readonly canOpenDefault: boolean;
    readonly editorIds: ReadonlyArray<EditorId>;
}
export declare function useFileContextMenu(environmentId: EnvironmentId | null): {
    buildItems: (target: FileContextMenuTarget) => readonly ContextMenuItem<FileContextMenuAction>[];
    capabilities: FileContextMenuCapabilities;
    activate: (action: FileContextMenuAction, target: FileContextMenuTarget) => Promise<void>;
    show: (target: FileContextMenuTarget, position?: {
        x: number;
        y: number;
    }) => Promise<void>;
};
export declare function useFileContextMenuHandler(environmentId: EnvironmentId | null): (target: FileContextMenuTarget, event?: {
    clientX: number;
    clientY: number;
}) => void;
