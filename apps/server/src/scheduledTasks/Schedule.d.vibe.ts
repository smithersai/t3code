import { type ScheduledTaskSchedule } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
/** @throws {never} */
export declare function nextScheduledRunAt(schedule: ScheduledTaskSchedule, from: DateTime.DateTime): DateTime.DateTime | null;
/** @throws {never} */
export declare function isSameSchedule(a: ScheduledTaskSchedule, b: ScheduledTaskSchedule): boolean;
/** @throws {never} */
export declare function isMissedFixedTimeRun(schedule: ScheduledTaskSchedule, dueAt: DateTime.DateTime, now: DateTime.DateTime): boolean;
