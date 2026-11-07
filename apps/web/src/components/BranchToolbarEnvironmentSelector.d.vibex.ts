import type { EnvironmentId } from "@t3tools/contracts";
import { type EnvironmentOption } from "./BranchToolbar.logic.vibe";
interface BranchToolbarEnvironmentSelectorProps {
    autoEnvironmentLabel?: string | undefined;
    onAutoEnvironment?: (
    /** @throws {never} */
    () => void) | undefined;
    envLocked: boolean;
    environmentId: EnvironmentId;
    availableEnvironments: readonly EnvironmentOption[];
    /** @throws {never} */
    onEnvironmentChange?: (environmentId: EnvironmentId) => void;
    onAddToMachine?: (
    /** @throws {never} */
    () => void) | undefined;
}
export declare const BranchToolbarEnvironmentSelector: import("react").MemoExoticComponent<
/** @throws {never} */
({ autoEnvironmentLabel, onAutoEnvironment, envLocked, environmentId, availableEnvironments, onEnvironmentChange, onAddToMachine, }: BranchToolbarEnvironmentSelectorProps) => import("react").JSX.Element>;
export {};
