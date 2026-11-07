import type { EnvironmentServerConfig } from "@t3tools/client-runtime/connection";
import { type EnvironmentId } from "@t3tools/contracts";
import type { ClientSettings } from "@t3tools/contracts/settings";
export interface ProfileReport {
    readonly profiles: ClientSettings["browserProfiles"];
    readonly defaultProfileId: ClientSettings["browserDefaultProfileId"];
    readonly recordingFrameRate: ClientSettings["browserRecordingFrameRate"];
}
/**
 * Keeps every operable server browser on this client's profiles. An environment is reported
 * again when its server config changes (a restarted server has forgotten them), when it becomes
 * operable, and when the profile settings change.
 */
export declare function startBrowserProfileReporting(): () => void;
export type ReportedProfiles = Map<EnvironmentId, {
    readonly config: EnvironmentServerConfig;
    readonly input: ProfileReport;
}>;
/**
 * Returns the targets that need `input` reported and records them in `reported`. An
 * environment that dropped out of `targets` is forgotten, so it is reported again once it
 * becomes operable.
 */
export declare function takeDueProfileReports(reported: ReportedProfiles, targets: ReadonlyMap<EnvironmentId, EnvironmentServerConfig>, input: ProfileReport): EnvironmentId[];
