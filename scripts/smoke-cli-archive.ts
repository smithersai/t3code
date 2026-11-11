#!/usr/bin/env node
export * from "./smoke-cli-archive.main.vibe";
if (import.meta.main) (await import("./smoke-cli-archive.main.vibe")).main();
