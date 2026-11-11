#!/usr/bin/env node
// The release workflow runs this file with plain node, so it registers VibeLang's loader before it
// loads the module.
import "vibelang/register";

export type {
  DiscordReleaseAnnouncementOptions,
  DiscordReleaseTarget,
} from "./notify-discord-release.main.vibe";

const script = await import("./notify-discord-release.main.vibe");

export const {
  DiscordReleaseWebhookConfigurationError,
  DiscordReleaseWebhookRequestError,
  DiscordReleaseWebhookResponseError,
  buildDiscordReleaseAnnouncement,
  notifyDiscordReleaseCommand,
  postDiscordWebhook,
} = script;

if (import.meta.main) script.main();
