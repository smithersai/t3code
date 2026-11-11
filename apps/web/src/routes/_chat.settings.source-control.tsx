import { createFileRoute } from "@tanstack/react-router";

import { SourceControlSettingsPanel } from "../components/settings/SourceControlSettings.vibex";

export const Route = createFileRoute("/_chat/settings/source-control")({
  component: SourceControlSettingsPanel,
});
