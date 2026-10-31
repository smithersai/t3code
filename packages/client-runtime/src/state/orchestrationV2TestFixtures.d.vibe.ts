import { type OrchestrationProjectShell, type OrchestrationV2ShellSnapshot, type OrchestrationV2ThreadProjection, type OrchestrationV2ThreadShell } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
export declare const v2Now: DateTime.Utc;
export declare const v2ThreadId: string & import("effect/Brand").Brand<"ThreadId">;
export declare const v2Project: OrchestrationProjectShell;
export declare const v2ThreadShell: OrchestrationV2ThreadShell;
export declare const v2Projection: OrchestrationV2ThreadProjection;
export declare const v2ShellSnapshot: OrchestrationV2ShellSnapshot;
