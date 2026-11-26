#!/usr/bin/env node
export * from "./export-android-icons.main.vibe";
if (import.meta.main) (await import("./export-android-icons.main.vibe")).main();
