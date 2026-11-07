import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { type FileChipTarget } from "./fileChipMenu";
export declare function useFileChipShare(environmentId: EnvironmentId, threadId: ThreadId, sourceIdentifier: string): (target: FileChipTarget) => void;
