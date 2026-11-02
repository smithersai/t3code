import { type OrchestrationV2TurnItem } from "@t3tools/contracts";
import { type LucideIcon } from "lucide-react";
import * as DateTime from "effect/DateTime";
type V2EventTone = "muted" | "warning" | "danger" | "success";
export declare function v2EventPresentation(item: OrchestrationV2TurnItem): {
    readonly label: string;
    readonly detail: string | null;
    readonly tone: V2EventTone;
    readonly icon: LucideIcon;
};
export declare function subagentGroupTiming(agents: ReadonlyArray<{
    status: OrchestrationV2TurnItem["status"];
    startedAt: DateTime.Utc | null;
    completedAt: DateTime.Utc | null;
}>): {
    status: "completed" | "running";
    startedAt: string | null;
    completedAt: string | null;
};
export {};
