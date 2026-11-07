import { type AuthSessionState } from "@t3tools/contracts";
import type { AsyncResult } from "effect/reactivity";
import type { EnvironmentId, ServerInstallation, ServerSelfUpdateCapability } from "@t3tools/contracts";
import type { ServerUpdateStage, ServerUpdateState } from "@t3tools/client-runtime/state/server";
import { type ComponentProps } from "react";
import { Button } from "./ui/button";
/** @throws {never} */
export declare function serverUpdateStageLabel(stage: ServerUpdateStage): string;
export interface ServerUpdateTarget {
    readonly environmentId: EnvironmentId;
    readonly serverLabel: string;
    readonly selfUpdate: ServerSelfUpdateCapability | null;
    readonly installation?: ServerInstallation | undefined;
    readonly desktopAppUpdate?: boolean;
    readonly threadContinuation?: boolean;
    readonly targetVersion: string;
    readonly continueThreadsAfterServerUpdate?: boolean;
}
type UpdateButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "className"> & {
    readonly label?: string;
    readonly appearance?: "button" | "icon";
};
export type ServerUpdateOutcome = {
    readonly status: "updated" | "skipped";
} | {
    readonly status: "failed";
    readonly message: string;
};
/**
 * Toasts its success or failure unless `quiet`; never rejects.
 * @throws {never}
 */
export declare function useServerUpdate(): 
/** @throws {never} */
(target: ServerUpdateTarget, { quiet }?: {
    readonly quiet?: boolean;
}) => Promise<ServerUpdateOutcome>;
/** @throws {never} */
export declare function ServerUpdatesAction({ targets, label, variant, size, className, }: UpdateButtonProps & {
    readonly targets: ReadonlyArray<ServerUpdateTarget>;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function canUpdateServer(result: AsyncResult.AsyncResult<AuthSessionState, unknown>): boolean;
/** @throws {never} */
export declare function ServerUpdateProgress({ state, }: {
    readonly state: Exclude<ServerUpdateState, {
        status: "idle";
    }>;
}): import("react").JSX.Element;
/**
 * client-runtime owns self-updates so unmounting during reconnect preserves operation state.
 * @throws {never}
 */
export declare function ServerUpdateAction({ environmentId, serverLabel, selfUpdate, installation, desktopAppUpdate, threadContinuation, targetVersion, label, variant, size, className, appearance, }: Omit<ServerUpdateTarget, "continueThreadsAfterServerUpdate"> & UpdateButtonProps): import("react").JSX.Element;
/**
 * Read the host descriptor's version because the host never delivers server config.
 * @throws {never}
 */
export declare function OutdatedServerUpdateAction({ environmentId, serverLabel, fromVersion, targetVersion, label, }: {
    readonly environmentId: EnvironmentId;
    readonly serverLabel: string;
    readonly fromVersion: string | undefined;
    readonly targetVersion: string;
    readonly label?: string;
}): import("react").JSX.Element;
export {};
