import { type AtomCommand, type AtomCommandOptions, type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
export declare function useAtomCommand<A, E, W>(command: AtomCommand<W, A, E>, options?: string | AtomCommandOptions): (value: W) => Promise<AtomCommandResult<A, E>>;
