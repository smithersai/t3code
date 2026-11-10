import * as NodeServices from "@effect/platform-node/NodeServices";
import { expect, it } from "@effect/vitest";
import { ProviderInstanceId } from "@t3tools/contracts";
import { McpProviderSessions } from "@t3tools/provider-core/server/McpProviderSessions";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { McpServer } from "effect/ai";

import { ServerSecretStore } from "../auth/ServerSecretStore.vibe";
import { ServerConfig } from "../config.vibe";
import { DeviceService } from "../device/DeviceService.vibe";
import { ServerEnvironment } from "../environment/ServerEnvironment.vibe";
import { GitWorkflowService } from "../git/GitWorkflowService.vibe";
import * as McpHttpServer from "../mcp/McpHttpServer.vibe";
import { PreviewAutomationBroker } from "../mcp/PreviewAutomationBroker.vibe";
import {
  CLAUDE_PROVIDER,
  makeClaudeQueryOptions,
} from "../orchestration-v2/Adapters/ClaudeAdapterV2.vibe";
import { OrchestratorV2 } from "../orchestration-v2/Orchestrator.vibe";
import { ProviderAdapterRegistryV2 } from "../orchestration-v2/ProviderAdapterRegistry.vibe";
import { ThreadLaunchService } from "../orchestration-v2/ThreadLaunchService.vibe";
import { ThreadManagementService } from "../orchestration-v2/ThreadManagementService.vibe";
import { ThreadSearch } from "../orchestration-v2/ThreadSearch.vibe";
import { PeerForwarding } from "../peer/PeerForwarding.vibe";
import { PeerLinkRequests } from "../peer/PeerLinkRequests.vibe";
import { PeerLinks } from "../peer/PeerLinks.vibe";
import { RemoteDelegation } from "../peer/RemoteDelegation.vibe";
import { PreviewManager } from "../preview/Manager.vibe";
import { PreviewBrowser } from "../preview/PreviewBrowser.vibe";
import { ManagedProjectFolders } from "../project/ManagedProjectFolders.vibe";
import { ProjectService } from "../project/ProjectService.ts";
import { ProjectSetupScriptRunner } from "../project/ProjectSetupScriptRunner.vibe";
import { PullRequestReviewGuideService } from "../pullRequest/PullRequestReviewGuideService.vibe";
import { ScheduledTaskService } from "../scheduledTasks/ScheduledTaskService.vibe";
import { SecretRequests } from "../secrets/SecretRequests.vibe";
import { ServerSettingsService } from "../serverSettings.vibe";
import { SourceControlRepositoryService } from "../sourceControl/SourceControlRepositoryService.vibe";
import { GitVcsDriver } from "../vcs/GitVcsDriver.vibe";
import { VcsStatusBroadcaster } from "../vcs/VcsStatusBroadcaster.vibe";
import { buildCodexAdditionalContext } from "./CodexDeveloperInstructions.ts";
import { DocumentText } from "./DocumentText.vibe";
import { ProviderRegistry } from "./ProviderRegistry.vibe";
import budget from "./agentContextBudget.json" with { type: "json" };
import * as Crypto from "@t3tools/shared/Crypto";

// Registration only stores tool definitions, so the handlers' services are never called.
const toolHandlerServices = Layer.mergeAll(
  Layer.mock(DeviceService)({}),
  Layer.mock(DocumentText)({}),
  Layer.mock(GitVcsDriver)({}),
  Layer.mock(GitWorkflowService)({}),
  Layer.mock(ManagedProjectFolders)({ namedProjectsRoot: "" }),
  Layer.mock(McpProviderSessions)({}),
  Layer.mock(OrchestratorV2)({}),
  Layer.mock(PeerForwarding)({}),
  Layer.mock(PeerLinkRequests)({}),
  Layer.mock(PeerLinks)({}),
  Layer.mock(PreviewAutomationBroker)({}),
  Layer.mock(PreviewBrowser)({}),
  Layer.mock(PreviewManager)({}),
  Layer.mock(ProjectService)({}),
  Layer.mock(ProjectSetupScriptRunner)({}),
  Layer.mock(ProviderAdapterRegistryV2)({}),
  Layer.mock(ProviderRegistry)({}),
  Layer.mock(PullRequestReviewGuideService)({}),
  Layer.mock(RemoteDelegation)({}),
  Layer.mock(ScheduledTaskService)({}),
  Layer.mock(SecretRequests)({}),
  ServerConfig.layerTest(process.cwd(), { prefix: "t3-agent-context-budget-" }),
  Layer.mock(ServerEnvironment)({}),
  Layer.mock(ServerSecretStore)({}),
  Layer.mock(ServerSettingsService)({}),
  Layer.mock(SourceControlRepositoryService)({}),
  Layer.mock(ThreadLaunchService)({}),
  Layer.mock(ThreadManagementService)({}),
  Layer.mock(ThreadSearch)({}),
  Layer.mock(VcsStatusBroadcaster)({}),
).pipe(Layer.provideMerge(Layer.merge(NodeServices.layer, Crypto.layerWebCrypto)));

const utf8Bytes = (text: string) => Buffer.byteLength(text, "utf8");

const claudeSystemAppend = () => {
  const { systemPrompt } = makeClaudeQueryOptions({
    modelSelection: {
      instanceId: ProviderInstanceId.make(CLAUDE_PROVIDER),
      model: "claude-opus-5-5",
    },
    nativeThreadId: "context-budget",
    resume: false,
    cwd: null,
    mcpServers: { "t3-code": { type: "http", url: "http://127.0.0.1/mcp" } },
  });
  return typeof systemPrompt === "object" && "append" in systemPrompt ? systemPrompt.append : "";
};

const codexAdditionalContext = () =>
  Object.values(
    buildCodexAdditionalContext(
      { model: "gpt-6.1-sol", modelName: "GPT-6.1 Sol", reasoningEffort: "high" },
      { browser: true, device: true },
    ),
  )
    .map((entry) => entry.value)
    .join("");

// CI rejects a PR that raises any value above main's agentContextBudget.json, so growth
// needs the agent-context-increase label. Lower the values when the text shrinks.
it.effect("agent context matches the committed budget", () =>
  Effect.gen(function* () {
    const mcp = yield* McpServer.McpServer;
    const measured = {
      claudeSystemAppendBytes: utf8Bytes(claudeSystemAppend()),
      codexAdditionalContextBytes: utf8Bytes(codexAdditionalContext()),
      // The model sees these fields. outputSchema and annotations are protocol metadata.
      mcpToolListJsonBytes: utf8Bytes(
        JSON.stringify(
          mcp.tools.map(({ tool }) => ({
            name: tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema,
          })),
        ),
      ),
    };

    expect(measured).toEqual(budget);
  }).pipe(
    Effect.provide(
      McpHttpServer.layerTools.pipe(
        Layer.provide(McpHttpServer.layerCallerInvocation),
        Layer.provideMerge(McpServer.McpServer.layer),
        Layer.provide(toolHandlerServices),
      ),
    ),
  ),
);
