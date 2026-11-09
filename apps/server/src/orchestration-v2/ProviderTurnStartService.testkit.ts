import { SourceControlProviderError, SourceControlProviderKind } from "@t3tools/contracts";
import * as NodeServices from "@effect/platform-node/NodeServices";
import * as Crypto from "@t3tools/shared/Crypto";
import * as ServerConfig from "../config.vibe";
import * as GitManager from "../git/GitManager.vibe";
import * as GitVcsDriver from "../vcs/GitVcsDriver.vibe";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.vibe";
import * as VcsProjectConfig from "../vcs/VcsProjectConfig.vibe";
import * as VcsProcess from "../vcs/VcsProcess.vibe";
import * as ServerSettings from "../serverSettings.vibe";
import * as ProjectSetupScriptRunner from "../project/ProjectSetupScriptRunner.vibe";
import * as ProviderRegistry from "../provider/ProviderRegistry.vibe";
import * as SourceControlProviderRegistry from "../sourceControl/SourceControlProviderRegistry.vibe";
import * as TextGeneration from "../textGeneration/TextGeneration.vibe";
import * as ProjectionStore from "./ProjectionStore.vibe";
import * as ProjectStore from "./ProjectStore.vibe";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

import * as GitWorkflow from "../git/GitWorkflowService.vibe";
import * as ProjectService from "../project/ProjectService.ts";

export const layer = Layer.merge(
  Layer.mock(GitWorkflow.GitWorkflowService)({
    pruneWorktrees: () => Effect.void,
    createWorktree: () => Effect.succeed({} as never),
  }),
  Layer.mock(ProjectService.ProjectService)({
    getById: () => Effect.succeedNone,
  }),
);

// Keep repository detection, branch selection and worktree creation on the real Git path.
export const layerRealGit = GitWorkflow.layer.pipe(
  Layer.provide(GitManager.layer),
  Layer.provide(
    Layer.mergeAll(
      Layer.mock(SourceControlProviderRegistry.SourceControlProviderRegistry)({
        resolveLink: () => undefined,
        resolve: ({ cwd }) =>
          Effect.fail(
            new SourceControlProviderError({
              provider: SourceControlProviderKind.make("unknown"),
              operation: "resolve",
              cwd,
              detail: "No source control provider in tests",
            }),
          ),
      }),
      Layer.mock(TextGeneration.TextGeneration)({}),
      Layer.mock(ProviderRegistry.ProviderRegistry)({}),
      Layer.mock(ProjectSetupScriptRunner.ProjectSetupScriptRunner)({}),
      Layer.mock(ProjectionStore.ProjectionStoreV2)({}),
      Layer.mock(ProjectStore.ProjectStoreV2)({}),
      ServerSettings.layerTest(),
    ),
  ),
  Layer.provide(VcsDriverRegistry.layer.pipe(Layer.provide(VcsProjectConfig.layer))),
  Layer.provideMerge(GitVcsDriver.layer),
  Layer.provideMerge(VcsProcess.layer),
  Layer.provideMerge(ServerConfig.layerTest(process.cwd(), { prefix: "t3-recreate-" })),
  Layer.provideMerge(Layer.merge(NodeServices.layer, Crypto.layerWebCrypto)),
);
