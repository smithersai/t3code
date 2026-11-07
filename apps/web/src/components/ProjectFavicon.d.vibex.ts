import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";
import type { ComponentType } from "react";
export type ProjectFaviconProject = Pick<EnvironmentProject, "environmentId" | "workspaceRoot" | "title" | "faviconPath" | "projectIcon">;
/** @throws {never} */
export declare function ProjectFavicon(input: {
    project: ProjectFaviconProject;
    className?: string | undefined;
    fallbackIcon?: ComponentType<{
        className?: string;
    }>;
}): import("react").JSX.Element;
