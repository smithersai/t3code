#!/usr/bin/env -S node --import=vibelang/register
export * from "./run.main.vibe";
if (import.meta.main) (await import("./run.main.vibe")).runCommandLine();
