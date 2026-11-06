import { type ScopedThreadRef, ThreadId } from "@t3tools/contracts";
export declare const THREAD_LINK_PROTOCOL = "t3-thread";
/**
 * The id as written. Thread ids can hold percent escapes of their own, so it is not decoded.
 * @throws {never}
 */
export declare function parseThreadLinkHref(href: string): ThreadId | null;
/** @throws {never} */
export declare function percentDecodedThreadLinkId(threadId: ThreadId): ThreadId | null;
/** @throws {never} */
export declare function resolveThreadLinkRef(source: ScopedThreadRef, refs: ReadonlyArray<ScopedThreadRef>): ScopedThreadRef | null;
/** @throws {never} */
export declare function formatThreadLink(threadId: string, label: string): string;
/** @throws {never} */
export declare function hasThreadLinks(markdown: string): boolean;
/** @throws {never} */
export declare function relabelThreadLinks(markdown: string, title: 
/** @throws {never} */
(threadId: ThreadId) => string | undefined): string;
