import { type ConnectionTarget } from "@t3tools/client-runtime/connection";
import type { DesktopSshEnvironmentTarget, EnvironmentMachineKind } from "@t3tools/contracts";
import type { ReactNode } from "react";
import type { EnvironmentPresentation } from "../../state/environments.vibe";
/** @throws {never} */
export declare function formatDesktopSshTarget(target: DesktopSshEnvironmentTarget): string;
/** @throws {never} */
export declare function environmentTransportLabel(environment: EnvironmentPresentation, activeTarget?: ConnectionTarget | null): string;
/** @throws {never} */
export declare function EnvironmentRow({ kind, label, subtitle, below, detail, dimmed, className, children, }: {
    readonly kind: EnvironmentMachineKind;
    readonly label: string;
    readonly subtitle: ReactNode;
    readonly below?: ReactNode;
    readonly detail?: ReactNode;
    readonly dimmed?: boolean;
    readonly className?: string;
    readonly children?: ReactNode;
}): import("react").JSX.Element;
