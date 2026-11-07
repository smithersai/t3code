import { createGitEnvironmentAtoms } from "@t3tools/client-runtime/state/git";
import { connectionAtomRuntime } from "../connection/runtime.vibe";

export const gitEnvironment = createGitEnvironmentAtoms(connectionAtomRuntime);
