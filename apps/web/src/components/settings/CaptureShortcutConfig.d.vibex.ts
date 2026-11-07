import { type DesktopSnapShotState } from "@t3tools/contracts";
/** @throws {never} */
export declare function CaptureShortcutConfig({ state, disabled, onBusyChange, onSaved, onComplete, }: {
    state: DesktopSnapShotState;
    disabled?: boolean;
    /** @throws {never} */
    onBusyChange?: (busy: boolean) => void;
    /** @throws {never} */
    onSaved?: () => Promise<unknown>;
    /** @throws {never} */
    onComplete?: () => Promise<void>;
}): import("react").JSX.Element;
