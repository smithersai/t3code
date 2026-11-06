import { type SkippedMachine } from "./updateEverything.logic";
export type ReportLocalUpdateError = (title: string, description: string) => void;
export declare function useUpdateEverything(localUpdateVersion: string | null): {
    hasUpdates: boolean;
    summary: string;
    lines: readonly string[];
    restarts: import("./updateEverything.logic").RestartingMachine[];
    skipped: readonly SkippedMachine[];
    run: ({ downloadLocal, installLocal, }: {
        downloadLocal?: (reportError: ReportLocalUpdateError) => Promise<boolean>;
        installLocal?: (reportError: ReportLocalUpdateError) => Promise<boolean>;
    }) => Promise<void>;
};
