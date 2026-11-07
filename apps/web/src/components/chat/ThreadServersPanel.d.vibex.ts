import { type EnvironmentId, type ThreadId } from "@t3tools/contracts";
/**
 * Web servers the thread's terminals and agent started. Hidden while none run.
 * @throws {never}
 */
export declare function ThreadServersPanel(props: {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
}): import("react").JSX.Element | null;
