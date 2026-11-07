import type { RestartingMachine, SkippedMachine } from "./updateEverything.logic";
interface UpdateEverythingDialogProps {
    readonly open: boolean;
    /** @throws {never} */
    readonly onOpenChange: (open: boolean) => void;
    readonly summary: string;
    readonly lines: ReadonlyArray<string>;
    readonly restarts: ReadonlyArray<RestartingMachine>;
    readonly skipped: ReadonlyArray<SkippedMachine>;
    /** @throws {never} */
    readonly onConfirm: () => void;
}
/** @throws {never} */
export declare function UpdateEverythingDialog({ open, onOpenChange, ...content }: UpdateEverythingDialogProps): import("react").JSX.Element;
export {};
