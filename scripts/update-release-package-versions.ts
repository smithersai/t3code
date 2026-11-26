#!/usr/bin/env node
export * from "./update-release-package-versions.main.vibe";
if (import.meta.main) (await import("./update-release-package-versions.main.vibe")).main();
