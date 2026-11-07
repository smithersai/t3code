import * as MacPermissions from "./permissions/MacPermissions.vibe";
for (const stream of [process.stdout, process.stderr]) {
  stream.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code !== "EPIPE") throw err;
  });
}

import * as NodeHttpClient from "@effect/platform-node/NodeHttpClient";
import * as NodeRuntime from "@effect/platform-node/NodeRuntime";
import * as NodeServices from "@effect/platform-node/NodeServices";
// @effect-diagnostics-next-line nodeBuiltinImport:off - Version output must flush before Electron exits, without acquiring the runtime.
import * as NodeFS from "node:fs";
import * as NodeOS from "node:os";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";

import * as Electron from "electron";

import * as NetService from "@t3tools/shared/Net";
import * as HostProcess from "@t3tools/shared/HostProcess";
import type { RemoteT3RunnerOptions } from "@t3tools/ssh/tunnel";
import serverPackageJson from "../../server/package.json" with { type: "json" };

import * as DesktopIpc from "./ipc/DesktopIpc.vibe";
import * as ElectronApp from "./electron/ElectronApp.vibe";
import * as ElectronDialog from "./electron/ElectronDialog.vibe";
import * as ElectronMenu from "./electron/ElectronMenu.vibe";
import * as ElectronPowerMonitor from "./electron/ElectronPowerMonitor.vibe";
import * as ElectronProtocol from "./electron/ElectronProtocol.ts";
import * as ElectronSafeStorage from "./electron/ElectronSafeStorage.vibe";
import * as ElectronShell from "./electron/ElectronShell.vibe";
import * as ElectronTheme from "./electron/ElectronTheme.vibe";
import * as ElectronUpdater from "./electron/ElectronUpdater.vibe";
import * as ElectronWindow from "./electron/ElectronWindow.vibe";
import * as DesktopApp from "./app/DesktopApp.ts";
import * as DesktopAppActivation from "./app/DesktopAppActivation.vibe";
import * as DesktopWebLinks from "./app/DesktopWebLinks.vibe";
import * as DesktopAppIdentity from "./app/DesktopAppIdentity.vibe";
import * as DesktopConnectionCatalogStore from "./app/DesktopConnectionCatalogStore.vibe";
import * as DesktopClerk from "./app/DesktopClerk.vibe";
import * as DesktopCliCommand from "./app/DesktopCliCommand.ts";
import * as DesktopApplicationMenu from "./window/DesktopApplicationMenu.vibe";
import * as DesktopAssets from "./app/DesktopAssets.vibe";
import * as DesktopBackendConfiguration from "./backend/DesktopBackendConfiguration.ts";
import * as DesktopBackendPool from "./backend/DesktopBackendPool.vibe";
import * as DesktopLocalEnvironmentAuth from "./backend/DesktopLocalEnvironmentAuth.vibe";
import * as DesktopNetworkInterfaces from "./backend/DesktopNetworkInterfaces.vibe";
import * as DesktopEnvironment from "./app/DesktopEnvironment.vibe";
import * as DesktopLifecycle from "./app/DesktopLifecycle.vibe";
import * as DesktopLinuxUrlHandler from "./app/DesktopLinuxUrlHandler.ts";
import * as DesktopShutdown from "./app/DesktopShutdown.vibe";
import * as DesktopObservability from "./app/DesktopObservability.vibe";
import * as DesktopServerExposure from "./backend/DesktopServerExposure.vibe";
import * as DesktopClientSettings from "./settings/DesktopClientSettings.vibe";
import * as DesktopSavedEnvironments from "./settings/DesktopSavedEnvironments.ts";
import * as DesktopSnapShot from "./snapShot/DesktopSnapShot.vibe";
import * as DesktopAppSettings from "./settings/DesktopAppSettings.vibe";
import * as DesktopPreReadyFileSystem from "./app/DesktopPreReadyFileSystem.vibe";
import * as DesktopPreReadyPlatform from "./app/DesktopPreReadyPlatform.vibe";
import * as DesktopShellEnvironment from "./shell/DesktopShellEnvironment.vibe";
import * as DesktopSshEnvironment from "./ssh/DesktopSshEnvironment.vibe";
import * as DesktopSshPasswordPrompts from "./ssh/DesktopSshPasswordPrompts.vibe";
import * as DesktopState from "./app/DesktopState.vibe";
import * as DesktopLegacyLocalStorage from "./app/DesktopLegacyLocalStorage.ts";
import * as DesktopTelemetryPublisher from "./telemetry/DesktopTelemetryPublisher.vibe";
import * as DesktopRendererHistory from "./telemetry/DesktopRendererHistory.vibe";
import * as DesktopUpdates from "./updates/DesktopUpdates.vibe";
import * as BrowserImport from "./preview/BrowserImport/BrowserImport.vibe";
import * as LinuxBrowserSecret from "./preview/BrowserImport/LinuxBrowserSecret.vibe";
import * as BrowserSession from "./preview/BrowserSession.vibe";
import * as DesktopBrowserHost from "./preview/DesktopBrowserHost.vibe";
import * as PreviewManager from "./preview/Manager.ts";
import * as PreviewPasskeys from "./preview/Passkeys.ts";
import * as DesktopWindow from "./window/DesktopWindow.vibe";
import * as DesktopWslBackend from "./wsl/DesktopWslBackend.vibe";
import * as DesktopWslEnvironment from "./wsl/DesktopWslEnvironment.ts";
import * as DesktopWslServerTree from "./wsl/DesktopWslServerTree.vibe";
import * as Crypto from "@t3tools/shared/Crypto";

if (process.argv.includes("--version")) {
  try {
    NodeFS.writeSync(process.stdout.fd, `${Electron.app.getVersion()}\n`);
  } catch (error) {
    if (!(error instanceof Error) || !("code" in error) || error.code !== "EPIPE") throw error;
  }
  Electron.app.exit(0);
}

const layerDesktopEnvironment = Layer.unwrap(
  Effect.gen(function* () {
    const metadata = yield* Effect.service(ElectronApp.ElectronApp).pipe(
      Effect.flatMap((app) => app.metadata),
    );
    const platform = yield* HostProcess.Platform;
    const processArch = yield* HostProcess.Architecture;
    return DesktopEnvironment.layer({
      dirname: __dirname,
      homeDirectory: NodeOS.homedir(),
      platform,
      processArch,
      ...metadata,
    });
  }),
);

const resolveDesktopSshCliRunner = (
  environment: DesktopEnvironment.DesktopEnvironment["Service"],
): RemoteT3RunnerOptions => {
  const devRemoteEntryPath = Option.getOrUndefined(environment.devRemoteT3ServerEntryPath);
  if (environment.isDevelopment && devRemoteEntryPath !== undefined) {
    return {
      nodeScriptPath: devRemoteEntryPath,
      nodeEngineRange: serverPackageJson.engines.node,
    };
  }
  return { archiveVersion: environment.appVersion };
};

const layerDesktopSshEnvironment = Layer.unwrap(
  Effect.gen(function* () {
    const environment = yield* DesktopEnvironment.DesktopEnvironment;
    return DesktopSshEnvironment.layer({
      resolveCliRunner: Effect.succeed(resolveDesktopSshCliRunner(environment)),
    });
  }),
);

const layerElectron = Layer.mergeAll(
  ElectronApp.layer,
  ElectronDialog.layer,
  ElectronMenu.layer,
  ElectronPowerMonitor.layer,
  ElectronProtocol.layer,
  ElectronSafeStorage.layer,
  ElectronShell.layer,
  ElectronTheme.layer,
  ElectronUpdater.layer,
  ElectronWindow.layer,
  DesktopIpc.layer(Electron.ipcMain),
);

const layerDesktopFoundation = Layer.mergeAll(
  MacPermissions.layer,
  DesktopState.layer,
  DesktopShutdown.layer,
  DesktopLegacyLocalStorage.layer,
  DesktopAppSettings.layer,
  DesktopClientSettings.layer,
  DesktopConnectionCatalogStore.layer.pipe(Layer.provideMerge(DesktopSavedEnvironments.layer)),
  DesktopAssets.layer,
  DesktopObservability.layer,
  DesktopRendererHistory.layer,
).pipe(Layer.provideMerge(layerDesktopEnvironment));

const layerDesktopSsh = layerDesktopSshEnvironment.pipe(
  Layer.provideMerge(DesktopSshPasswordPrompts.layer()),
);

const layerDesktopServerExposure = DesktopServerExposure.layer.pipe(
  Layer.provideMerge(DesktopNetworkInterfaces.layer),
  Layer.provideMerge(layerDesktopFoundation),
);

const layerDesktopPreview = PreviewManager.layer.pipe(
  Layer.provideMerge(DesktopBrowserHost.layer),
  // IPC needs both services on the same BrowserSession.
  Layer.provideMerge(BrowserImport.layer.pipe(Layer.provide(LinuxBrowserSecret.layer))),
  Layer.provideMerge(BrowserSession.layer),
  Layer.provideMerge(PreviewPasskeys.layer),
  Layer.provideMerge(layerDesktopFoundation),
);

const layerDesktopWindow = DesktopWindow.layer.pipe(
  Layer.provideMerge(layerDesktopServerExposure),
  Layer.provideMerge(layerDesktopPreview),
);

const layerDesktopSnapShot = DesktopSnapShot.layer.pipe(
  Layer.provideMerge(layerDesktopWindow),
  Layer.provideMerge(layerDesktopFoundation),
);
const layerDesktopAppActivation = DesktopAppActivation.layer.pipe(
  Layer.provide(layerDesktopWindow),
);

const layerDesktopBackend = DesktopBackendPool.layer.pipe(
  Layer.provideMerge(DesktopAppIdentity.layer),
  Layer.provideMerge(DesktopBackendConfiguration.layer),
  Layer.provideMerge(DesktopShellEnvironment.layer),
  Layer.provideMerge(DesktopWslEnvironment.layer),
  Layer.provideMerge(DesktopWslServerTree.layer),
  Layer.provideMerge(DesktopTelemetryPublisher.layer),
  Layer.provideMerge(layerDesktopWindow),
);

const layerDesktopWslBackend = DesktopWslBackend.layer.pipe(
  Layer.provideMerge(layerDesktopBackend),
);

const layerDesktopLocalEnvironmentAuth = DesktopLocalEnvironmentAuth.layer.pipe(
  Layer.provideMerge(layerDesktopBackend),
);

const layerDesktopApplication = Layer.mergeAll(
  DesktopLifecycle.layer,
  layerDesktopAppActivation,
  DesktopWebLinks.layer,
  DesktopApplicationMenu.layer,
  DesktopLinuxUrlHandler.layer,
  DesktopCliCommand.layer,
  layerDesktopSsh,
).pipe(
  Layer.provideMerge(layerDesktopSnapShot),
  Layer.provideMerge(DesktopUpdates.layer),
  Layer.provideMerge(layerDesktopWslBackend),
  Layer.provideMerge(layerDesktopLocalEnvironmentAuth),
);

// Clerk resolves userData before Electron is ready, so it gets the synchronous FileSystem.
const layerDesktopClerk = DesktopClerk.layer.pipe(
  Layer.provide(DesktopPreReadyFileSystem.layer),
  Layer.provideMerge(ElectronShell.layer),
  Layer.provideMerge(layerDesktopEnvironment),
  Layer.provideMerge(Layer.merge(NodeServices.layer, Crypto.layerWebCrypto)),
  Layer.provideMerge(ElectronApp.layer),
);

const layerDesktopApplicationRuntime = layerDesktopApplication.pipe(
  Layer.provideMerge(Layer.merge(NodeServices.layer, Crypto.layerWebCrypto)),
  Layer.provideMerge(NodeHttpClient.layerUndici),
  Layer.provideMerge(NetService.layer),
  Layer.provideMerge(layerElectron),
);

// Pre-ready setup and Clerk must not yield before Clerk registers its scheme.
const layerDesktopRuntime = layerDesktopClerk.pipe(
  Layer.flatMap((clerkContext) =>
    layerDesktopApplicationRuntime.pipe(Layer.provideMerge(Layer.succeedContext(clerkContext))),
  ),
  Layer.provideMerge(DesktopPreReadyPlatform.layer),
);

DesktopApp.program.pipe(Effect.provide(layerDesktopRuntime), NodeRuntime.runMain);
