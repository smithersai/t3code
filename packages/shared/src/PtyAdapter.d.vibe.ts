import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
declare const PtySpawnError_base: Schema.Class<PtySpawnError, Schema.TaggedStruct<"PtySpawnError", {
    readonly adapter: Schema.String;
    readonly shell: Schema.optional<Schema.String>;
    readonly attemptedShells: Schema.optional<Schema.$Array<Schema.String>>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PtySpawnError extends PtySpawnError_base {
    get message(): string;
}
export interface PtyExitEvent {
    exitCode: number;
    signal: number | null;
}
export interface PtyProcess {
    readonly pid: number;
    /** @throws {never} */
    write(data: string): void;
    /** @throws {never} */
    resize(cols: number, rows: number): void;
    /** @throws {never} */
    kill(signal?: string): void;
    /** @throws {never} */
    onData(callback: 
    /** @throws {never} */
    (data: string) => void): 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onExit(callback: 
    /** @throws {never} */
    (event: PtyExitEvent) => void): 
    /** @throws {never} */
    () => void;
}
export interface PtySpawnInput {
    shell: string;
    args?: string[];
    cwd: string;
    cols: number;
    rows: number;
    env: NodeJS.ProcessEnv;
}
declare const PtyAdapter_base: Context.ServiceClass<PtyAdapter, "@t3tools/shared/PtyAdapter", {
    readonly spawn: (input: PtySpawnInput) => Effect.Effect<PtyProcess, PtySpawnError>;
}>;
export declare class PtyAdapter extends PtyAdapter_base {
}
export {};
