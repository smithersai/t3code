#!/usr/bin/env node
export * from "./resolve-nightly-release.main.vibe";
if (import.meta.main) (await import("./resolve-nightly-release.main.vibe")).main();
