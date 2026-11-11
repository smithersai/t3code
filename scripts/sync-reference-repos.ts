#!/usr/bin/env node
export * from "./sync-reference-repos.main.vibe";
if (import.meta.main) (await import("./sync-reference-repos.main.vibe")).main();
