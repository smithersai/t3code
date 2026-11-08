// @effect-diagnostics globalFetch:off -- Supply the host fetch implementation to the HTTP layer.
import { layerRemoteHttpClient } from "@t3tools/client-runtime/rpc";

export const makeHttpClientLayerOnPlatform = () => layerRemoteHttpClient(fetch);
