import type { AnyRouter } from "@tanstack/react-router";
/** Asks once per environment, until dismissed, to re-pair a connection that predates scoped permissions. */
export declare function startPermissionUpdateNotices(router: AnyRouter): () => void;
