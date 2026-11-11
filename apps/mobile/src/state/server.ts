import { createServerEnvironmentAtoms } from "@t3tools/client-runtime/state/server";
import {
  createOutdatedServerDescriptionCommand,
  createOutdatedServerUpdateCommand,
} from "@t3tools/client-runtime/state/outdatedServerUpdate";
import { createEnvironmentServerConfigsAtom } from "@t3tools/client-runtime/state/shell";

import { environmentCatalog } from "../connection/catalog";
import { connectionAtomRuntime } from "../connection/runtime.vibe";
import { environmentSession } from "./session.vibe";
import { createThreadListEnvironmentsAtom } from "./thread-list-environments.vibe";

export const serverEnvironment = createServerEnvironmentAtoms(connectionAtomRuntime, {
  initialConfigValueAtom: environmentSession.initialConfigValueAtom,
  usageLimitSources: true,
  usageLimitsCommand: true,
});
export const describeOutdatedServer = createOutdatedServerDescriptionCommand(connectionAtomRuntime);
export const updateOutdatedServer = createOutdatedServerUpdateCommand(connectionAtomRuntime);
export const environmentServerConfigsAtom = createEnvironmentServerConfigsAtom({
  catalogValueAtom: environmentCatalog.catalogValueAtom,
  serverConfigValueAtom: serverEnvironment.configValueAtom,
});

export const threadListEnvironmentsAtom = createThreadListEnvironmentsAtom(
  environmentServerConfigsAtom,
);
