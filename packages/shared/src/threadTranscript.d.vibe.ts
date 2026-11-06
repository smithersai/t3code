import type { EnvironmentId, OrchestrationV2ThreadTranscript } from "@t3tools/contracts";
/** @throws {never} */
export declare function threadTranscriptHeader(environmentId: EnvironmentId, transcript: Pick<OrchestrationV2ThreadTranscript, "title" | "threadId" | "updatedAt">): string;
