import type { NotificationResponse } from "expo-notifications";
import * as Schema from "effect/Schema";
declare const NotificationNavigationError_base: Schema.Class<NotificationNavigationError, Schema.TaggedStruct<"NotificationNavigationError", {
    readonly operation: Schema.Literals<readonly ["read", "route", "clear"]>;
    readonly notificationId: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class NotificationNavigationError extends NotificationNavigationError_base {
    get message(): string;
}
/** @throws {never} */
export declare function consumeLastAgentNotificationResponse(input: {
    /** @throws {never} */
    readonly getLastResponse: () => Promise<NotificationResponse | null>;
    /** @throws {never} */
    readonly clearLastResponse: () => Promise<void>;
    /** @throws {never} */
    readonly handleResponse: (response: NotificationResponse) => void;
}): Promise<void>;
export {};
