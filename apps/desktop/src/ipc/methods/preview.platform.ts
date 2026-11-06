// The platform code of preview.vibe, which a .vibe file does not import as a value (EK4402).

import {
  DesktopPreviewConfigInputSchema,
  DesktopPreviewWebviewConfigSchema,
  DEFAULT_BROWSER_PROFILE_ID,
  INCOGNITO_BROWSER_PROFILE_ID,
} from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as NodeURL from "node:url";
import * as PreviewManager from "../../preview/Manager.ts";
import { PREVIEW_WEBVIEW_PREFERENCES } from "../../preview/WebviewPreferences.ts";
import * as IpcChannels from "../channels.ts";
import * as DesktopIpc from "../DesktopIpc.vibe";

/** Keep the default profile's bare environment id so existing logins retain their partition. */
export function resolvePartitionScope(
  environmentId: string,
  profileId: string | undefined,
): {
  readonly scope: string;
  readonly persistent: boolean;
  readonly namespace?: "profile";
} {
  if (profileId === undefined || profileId === DEFAULT_BROWSER_PROFILE_ID) {
    return { scope: environmentId, persistent: true };
  }
  // JSON framing preserves lone UTF-16 surrogates; URI encoding throws and replacement would collide.
  return {
    scope: JSON.stringify([environmentId, profileId]),
    persistent: profileId !== INCOGNITO_BROWSER_PROFILE_ID,
    namespace: "profile" as const,
  };
}
export const getPreviewConfig = DesktopIpc.makeIpcMethod({
  channel: IpcChannels.PREVIEW_GET_CONFIG_CHANNEL,
  payload: DesktopPreviewConfigInputSchema,
  result: DesktopPreviewWebviewConfigSchema,
  handler: Effect.fn("desktop.ipc.preview.getConfig")(function* ({ environmentId, profileId }) {
    const manager = yield* PreviewManager.PreviewManager;
    const { scope, persistent, namespace } = resolvePartitionScope(environmentId, profileId);
    // Session creation installs UA and permission handlers before a guest can attach.
    yield* manager.getBrowserSession(scope, persistent, namespace);
    return {
      partition: yield* manager.getBrowserPartition(scope, persistent, namespace),
      webPreferences: PREVIEW_WEBVIEW_PREFERENCES,
      preloadUrl: NodeURL.pathToFileURL(`${__dirname}/preview-pick-preload.cjs`).href,
    };
  }),
});
