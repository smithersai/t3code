import { type ScopedProjectRef, type ScopedThreadRef } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const InvalidScopedProjectKeyError_base: Schema.Class<InvalidScopedProjectKeyError, Schema.TaggedStruct<"InvalidScopedProjectKeyError", {
    readonly key: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidScopedProjectKeyError extends InvalidScopedProjectKeyError_base {
    get message(): string;
}
declare const InvalidScopedThreadKeyError_base: Schema.Class<InvalidScopedThreadKeyError, Schema.TaggedStruct<"InvalidScopedThreadKeyError", {
    readonly key: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidScopedThreadKeyError extends InvalidScopedThreadKeyError_base {
    get message(): string;
}
declare const InvalidScopedProjectRefCollectionKeyError_base: Schema.Class<InvalidScopedProjectRefCollectionKeyError, Schema.TaggedStruct<"InvalidScopedProjectRefCollectionKeyError", {
    readonly key: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidScopedProjectRefCollectionKeyError extends InvalidScopedProjectRefCollectionKeyError_base {
    get message(): string;
}
/** @throws {never} */
export declare function projectKey(ref: ScopedProjectRef): string;
/** @throws {never} */
export declare function threadKey(ref: ScopedThreadRef): string;
/** @throws {never} */
export declare function projectRefCollectionKey(refs: ReadonlyArray<ScopedProjectRef>): string;
/** @throws {never} */
export declare function parseProjectKey(key: string): ScopedProjectRef;
/** @throws {never} */
export declare function parseProjectRefCollectionKey(key: string): ReadonlyArray<ScopedProjectRef>;
/** @throws {never} */
export declare function parseThreadKey(key: string): ScopedThreadRef;
/** @throws {never} */
export declare function projectRefsEqual(left: ReadonlyArray<ScopedProjectRef>, right: ReadonlyArray<ScopedProjectRef>): boolean;
/** @throws {never} */
export declare function threadRefsEqual(left: ReadonlyArray<ScopedThreadRef>, right: ReadonlyArray<ScopedThreadRef>): boolean;
/** @throws {never} */
export declare function arrayElementsEqual<A>(left: ReadonlyArray<A>, right: ReadonlyArray<A>): boolean;
export {};
