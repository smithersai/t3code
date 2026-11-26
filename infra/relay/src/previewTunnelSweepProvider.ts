import * as Provider from "alchemy/Provider";
import type { PreviewTunnelSweep } from "./previewTunnelSweep.vibe";

export function makePreviewTunnelSweepProvider(
  resource: typeof PreviewTunnelSweep,
  implementation: Omit<Provider.ProviderService<PreviewTunnelSweep>, "Type">,
) {
  return Provider.succeed(resource, resource.Provider.of(implementation));
}
