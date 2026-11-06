export declare function useThreadListV2ShelfPreferences(): {
    readonly loaded: boolean;
    readonly settledShelfExpanded: boolean;
    readonly snoozedShelfExpanded: boolean;
    readonly workingShelfEnabled: boolean;
    readonly workingShelfExpanded: boolean;
    readonly toggleSettledShelf: () => void;
    readonly toggleSnoozedShelf: () => void;
    readonly toggleWorkingShelf: () => void;
};
