import type { OrchestrationV2TurnItem, OrchestrationV2TurnItemStatus } from "@t3tools/contracts";
import type { MuseItem } from "./protocol.vibe";
type Fields<T extends OrchestrationV2TurnItem["type"], K extends keyof Extract<OrchestrationV2TurnItem, {
    type: T;
}>> = Pick<Extract<OrchestrationV2TurnItem, {
    type: T;
}>, K>;
type MuseToolPresentation = {
    readonly status: OrchestrationV2TurnItemStatus;
    readonly title: string | null;
} & (Fields<"command_execution", "type" | "input" | "output" | "exitCode"> | Fields<"file_change", "type" | "fileName" | "oldStr" | "newStr" | "diffStr"> | Fields<"web_search", "type" | "patterns" | "results"> | Fields<"dynamic_tool", "type" | "toolName" | "input" | "output">);
/** @throws {never} */
export declare function museItemStatus(item: MuseItem): OrchestrationV2TurnItemStatus;
/** @throws {never} */
export declare function museToolPresentation(item: MuseItem, status?: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting"): MuseToolPresentation;
export {};
