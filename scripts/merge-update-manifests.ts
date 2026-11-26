#!/usr/bin/env node
export * from "./merge-update-manifests.main.vibe";
if (import.meta.main) (await import("./merge-update-manifests.main.vibe")).main();
