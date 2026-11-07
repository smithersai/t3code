import { type TimelineRow } from "./timelineRowContext.vibe";
/** @throws {never} */
export declare function V2EventTimelineRow({ row }: {
    row: Extract<TimelineRow, {
        kind: "event";
    }>;
}): import("react").JSX.Element;
