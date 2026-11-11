import { lazy } from "react";

// A component may throw while it renders, so lazy wrappers of named component exports stay in TypeScript.
export const OfficeFilePreview = lazy(() =>
  import("./OfficeFilePreview").then((module) => ({ default: module.OfficeFilePreview })),
);

export const FontFilePreview = lazy(() =>
  import("./FontFilePreview").then((module) => ({ default: module.FontFilePreview })),
);

export const MermaidFilePreview = lazy(() =>
  import("./MermaidFilePreview").then((module) => ({ default: module.MermaidFilePreview })),
);
