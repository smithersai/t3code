import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import type { VcsDriverKind } from "@t3tools/contracts";
import * as VcsDriver from "../VcsDriver.ts";
export interface VcsDriverFixture<R, E> {
    readonly createRepo: (cwd: string) => Effect.Effect<void, E, R>;
    readonly writeFile: (cwd: string, relativePath: string, contents: string) => Effect.Effect<void, E, R | FileSystem.FileSystem | Path.Path>;
    readonly trackFile?: (cwd: string, relativePath: string) => Effect.Effect<void, E, R>;
    readonly commit?: (cwd: string, message: string) => Effect.Effect<void, E, R>;
    readonly ignorePath: (cwd: string, pattern: string) => Effect.Effect<void, E, R | FileSystem.FileSystem | Path.Path>;
}
export interface VcsDriverContractSuiteInput<R, E> {
    readonly name: string;
    readonly kind: VcsDriverKind;
    readonly layer: Layer.Layer<VcsDriver.VcsDriver | R | FileSystem.FileSystem | Path.Path, E, never>;
    readonly fixture: VcsDriverFixture<R, E>;
}
export declare function runVcsDriverContractSuite<R, E>(input: VcsDriverContractSuiteInput<R, E>): void;
