#!/usr/bin/env node
export * from "./build-cli-archive.main.vibe";
if (import.meta.main) (await import("./build-cli-archive.main.vibe")).main();
