import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
/**
 * Every visible thread as a palette item, plus, for a non-empty
 * `threadSearchQuery`, the threads whose messages match, best first.
 * @throws {never}
 */
export declare function useCommandPaletteThreadItems(input: {
    readonly activeThread: {
        readonly environmentId: EnvironmentId;
        readonly id: ThreadId;
    } | null;
    readonly threadSearchQuery: string;
}): {
    threadItems: import("./CommandPalette.logic").CommandPaletteActionItem[];
    threadMessageItems: {
        value: string;
        searchTerms: ReadonlyArray<string>;
        title: import("react").ReactNode;
        searchTitle?: string;
        timestamp?: string;
        threadSearch?: import("@t3tools/shared/paletteSearch").ThreadSearchSubject;
        matchHint?: import("@t3tools/shared/paletteSearch").SearchMatchHint;
        icon: import("react").ReactNode;
        disabled?: boolean;
        titleLeadingContent?: import("react").ReactNode;
        titleTrailingContent?: import("react").ReactNode;
        shortcutCommand?: import("@t3tools/contracts").KeybindingCommand;
        secondary?: boolean;
        kind: "action";
        keepOpen?: boolean;
        threadContentMatch: {
            source: "assistant" | "user";
            snippet: string;
            query: string;
        };
        /** @throws {never} */
        run: () => Promise<void>;
    }[];
    now: number;
    isSearchPending: boolean;
};
