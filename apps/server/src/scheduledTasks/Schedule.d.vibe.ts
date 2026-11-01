import { type ScheduledTaskSchedule } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
export declare function nextScheduledRunAt(schedule: ScheduledTaskSchedule, from: DateTime.DateTime): DateTime.DateTime | null;
export declare function isSameSchedule(a: ScheduledTaskSchedule, b: ScheduledTaskSchedule): boolean;
export declare function isMissedFixedTimeRun(schedule: ScheduledTaskSchedule, dueAt: DateTime.DateTime, now: DateTime.DateTime): boolean;
