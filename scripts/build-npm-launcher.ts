#!/usr/bin/env node
export * from "./build-npm-launcher.main.vibe";
if (import.meta.main) (await import("./build-npm-launcher.main.vibe")).main();
