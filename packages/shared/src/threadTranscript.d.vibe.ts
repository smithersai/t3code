import type { EnvironmentId, OrchestrationV2ThreadTranscript } from "@t3tools/contracts";
export declare function threadTranscriptHeader(environmentId: EnvironmentId, transcript: Pick<OrchestrationV2ThreadTranscript, "title" | "threadId" | "updatedAt">): string;
