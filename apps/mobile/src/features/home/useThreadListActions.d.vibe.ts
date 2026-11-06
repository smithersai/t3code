import type { ThreadMoveDestination } from "../threads/threadOrder";
import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
export declare function useThreadListActions(): {
    readonly archiveThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly confirmDeleteThread: (thread: EnvironmentThreadShell) => void;
    readonly settleThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly snoozeThread: (thread: EnvironmentThreadShell, snoozedUntil: string) => Promise<boolean>;
    readonly unsnoozeThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly unsettleThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly pinThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly unpinThread: (thread: EnvironmentThreadShell) => Promise<boolean>;
    readonly setThreadAutoSettle: (thread: EnvironmentThreadShell, enabled: boolean) => Promise<boolean>;
    readonly moveThread: (thread: EnvironmentThreadShell, direction: ThreadMoveDestination) => Promise<boolean>;
    readonly renameThread: (thread: EnvironmentThreadShell) => void;
    readonly regenerateThreadTitle: (thread: EnvironmentThreadShell) => Promise<boolean>;
};
export declare function useArchivedThreadListActions(onCompleted: (thread: EnvironmentThreadShell) => void): {
    readonly unarchiveThread: (thread: EnvironmentThreadShell) => void;
    readonly confirmDeleteThread: (thread: EnvironmentThreadShell) => void;
};
