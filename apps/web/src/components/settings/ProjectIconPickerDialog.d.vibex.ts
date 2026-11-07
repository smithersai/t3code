import { type ProjectIconOverride } from "@t3tools/contracts";
/** @throws {never} */
export declare function ProjectIconPickerDialog({ current, projectName, open, onOpenChange, onSelect, }: {
    readonly current: ProjectIconOverride | null;
    readonly projectName: string;
    readonly open: boolean;
    /** @throws {never} */
    readonly onOpenChange: (open: boolean) => void;
    /** @throws {never} */
    readonly onSelect: (icon: ProjectIconOverride) => void;
}): import("react").JSX.Element;
