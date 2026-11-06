export type DeepPartial<T> = T extends readonly (infer U)[] ? readonly DeepPartial<U>[] : T extends object ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;
/** @throws {never} */
export declare function deepMerge<T extends Record<string, unknown>>(current: T, patch: DeepPartial<T>): T;
