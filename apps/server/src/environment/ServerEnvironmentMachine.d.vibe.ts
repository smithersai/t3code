import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as ProcessRunner from "../processRunner.ts";
export declare const detectServerEnvironmentMachineKind: () => Effect.Effect<"cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server" | null, never, FileSystem.FileSystem | ProcessRunner.ProcessRunner>;
