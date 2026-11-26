import { lazy, Suspense } from "react";

import { FileSurfaceLoading } from "./fileSurfaceChrome";

const MermaidViewer = lazy(() => import("./MermaidViewer"));

/** @throws {never} */
export function MermaidFilePreview(props: { readonly text: string }) {
  return (
    <Suspense fallback={<FileSurfaceLoading />}>
      <MermaidViewer key={props.text} {...props} />
    </Suspense>
  );
}
