import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
export type NotificationPermissionResult = {
    readonly type: "unsupported";
} | {
    readonly type: "granted";
} | {
    readonly type: "denied";
    readonly canAskAgain: boolean;
};
declare const NotificationPermissionReadError_base: Schema.Class<NotificationPermissionReadError, Schema.TaggedStruct<"NotificationPermissionReadError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class NotificationPermissionReadError extends NotificationPermissionReadError_base {
    get message(): string;
}
declare const NotificationPermissionRequestError_base: Schema.Class<NotificationPermissionRequestError, Schema.TaggedStruct<"NotificationPermissionRequestError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class NotificationPermissionRequestError extends NotificationPermissionRequestError_base {
    get message(): string;
}
export declare const requestAgentNotificationPermission: Effect.Effect<NotificationPermissionResult, NotificationPermissionReadError | NotificationPermissionRequestError>;
export {};
