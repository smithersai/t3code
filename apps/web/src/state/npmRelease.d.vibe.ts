import { AsyncResult, Atom } from "effect/reactivity";
export declare const npmReleasePublishedAtom: (arg: string) => Atom.Atom<AsyncResult.AsyncResult<boolean, import("effect/http/HttpClientError").HttpClientError>>;
export declare function useNpmReleasePublished(version: string | null): boolean;
