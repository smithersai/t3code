import { type ScopedThreadRef, ThreadId } from "@t3tools/contracts";
export declare const THREAD_LINK_PROTOCOL = "t3-thread";
/** The id as written. Thread ids can hold percent escapes of their own, so it is not decoded. */
export declare function parseThreadLinkHref(href: string): ThreadId | null;
export declare function percentDecodedThreadLinkId(threadId: ThreadId): ThreadId | null;
export declare function resolveThreadLinkRef(source: ScopedThreadRef, refs: ReadonlyArray<ScopedThreadRef>): ScopedThreadRef | null;
export declare function formatThreadLink(threadId: string, label: string): string;
export declare function hasThreadLinks(markdown: string): boolean;
export declare function relabelThreadLinks(markdown: string, title: (threadId: ThreadId) => string | undefined): string;
