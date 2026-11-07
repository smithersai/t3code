import type { ThreadId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as ThreadManagementService from "../orchestration-v2/ThreadManagementService.ts";
import * as ProjectService from "./ProjectService.ts";
/** The directory a thread works in, or undefined when the thread or its project is gone. */
export declare const threadWorkspaceRoot: (threadId: ThreadId) => Effect.Effect<string | undefined, never, ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
