import type { MediaActionsSource } from "../lib/mediaActionsSource";
import { type MediaActionId } from "@t3tools/client-runtime/media-actions";
export declare function useMediaActions(source: MediaActionsSource | undefined, onOpenFile?: () => void): {
    title: string | undefined;
    actions: {
        id: MediaActionId;
        title: string;
        run: () => void;
        disabled?: boolean;
    }[];
    sharing: boolean;
    share: () => Promise<void> | undefined;
};
