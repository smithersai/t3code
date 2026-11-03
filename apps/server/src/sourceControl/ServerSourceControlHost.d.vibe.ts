import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import * as Layer from "effect/Layer";
import * as ServerSettings from "../serverSettings.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.ts";
import * as VcsProcess from "../vcs/VcsProcess.ts";
export declare const layer: Layer.Layer<SourceControlHost.SourceControlHost, never, GitVcsDriver.GitVcsDriver | ServerSettings.ServerSettingsService | VcsDriverRegistry.VcsDriverRegistry | VcsProcess.VcsProcess>;
