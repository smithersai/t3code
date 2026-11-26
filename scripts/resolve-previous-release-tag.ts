#!/usr/bin/env node
export * from "./resolve-previous-release-tag.main.vibe";
if (import.meta.main) (await import("./resolve-previous-release-tag.main.vibe")).main();
