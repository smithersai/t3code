import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import { type ThreadPrPresentation } from "./thread-pr-presentation";
export { presentThreadPr, type ThreadPr, type ThreadPrPresentation, } from "./thread-pr-presentation";
export declare function useThreadPr(thread: EnvironmentThreadShell): ThreadPrPresentation | null;
