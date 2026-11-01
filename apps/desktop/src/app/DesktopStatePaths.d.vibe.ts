import * as Option from "effect/Option";
export type JoinPath = (first: string, ...segments: string[]) => string;
export declare function resolveDesktopBaseDir(input: {
    readonly homeDirectory: string;
    readonly joinPath: JoinPath;
    readonly t3Home: Option.Option<string>;
}): string;
export declare function resolveDesktopStateDir(input: {
    readonly baseDir: string;
    readonly isDevelopment: boolean;
    readonly joinPath: JoinPath;
    readonly t3Home: Option.Option<string>;
}): string;
