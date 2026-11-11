#!/usr/bin/env node
export * from "./build-desktop-artifact.main.vibe";
if (import.meta.main) (await import("./build-desktop-artifact.main.vibe")).main();
