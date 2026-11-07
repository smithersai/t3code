import * as Schema from "effect/Schema";
export declare const TrimmedString: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const TrimmedNonEmptyString: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export declare const NonNegativeInt: Schema.Int;
export declare const PositiveInt: Schema.Int;
export declare const PortSchema: Schema.Int;
export declare const DpopFailureReason: Schema.Literals<readonly ["time_window", "key_mismatch", "request_mismatch", "token_mismatch", "replay", "invalid_proof"]>;
export type DpopFailureReason = typeof DpopFailureReason.Type;
export declare const IsoDateTime: Schema.String;
export type IsoDateTime = typeof IsoDateTime.Type;
/** @throws {never} */
export declare const ForwardCompatibleOptional: <Value extends Schema.Top>(value: Value) => Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Value>, Schema.Unknown, never, never>>;
/** @throws {never} */
export declare const ForwardCompatibleNullable: <Value extends Schema.Top>(value: Value) => Schema.decodeTo<Schema.NullOr<Value>, Schema.Unknown, never, never>;
/**
 * Missing or unknown values decode to null; null encodes as absent for older clients requiring a literal.
 * @throws {never}
 */
export declare const OmittedWhenNull: <Value extends Schema.Top>(value: Value) => Schema.decodeTo<Schema.NullOr<Value>, Schema.optionalKey<Schema.Unknown>, never, never>;
/**
 * Prefer {@link ForwardCompatibleUnion} for tagged unions so malformed known members still fail.
 * @throws {never}
 */
export declare const ForwardCompatibleArray: <Element extends Schema.Top>(element: Element) => ForwardCompatibleArray<Element>;
export type ForwardCompatibleArray<Element extends Schema.Top> = Schema.Codec<ReadonlyArray<Element["Type"]>, ReadonlyArray<Element["Encoded"]>, Element["DecodingServices"], Element["EncodingServices"]>;
/** Class identity prevents decoded payloads from impersonating unknown members. */
export declare class UnknownUnionMember<Tag extends string = string> {
    readonly tag: Tag;
    readonly value: string;
    /** @throws {never} */
    constructor(tag: Tag, value: string);
}
/**
 * Unknown members are decode-only; encoding one fails.
 * @throws {never}
 */
export declare const ForwardCompatibleUnion: <const Members extends ReadonlyArray<Schema.Top & {
    readonly fields: object;
}>, const Tag extends string>(members: Members, tag: Tag) => ForwardCompatibleUnion<Members, Tag>;
export type ForwardCompatibleUnion<Members extends ReadonlyArray<Schema.Top>, Tag extends string> = Schema.Codec<Members[number]["Type"] | UnknownUnionMember<Tag>, Members[number]["Encoded"], Members[number]["DecodingServices"], Members[number]["EncodingServices"]>;
/** @throws {never} */
export declare const hasUnknownUnionTag: (members: ReadonlyArray<Schema.Top & {
    readonly fields: object;
}>, tag: string) => (
/** @throws {never} */
(value: unknown) => boolean);
/** @throws {never} */
export declare const isUnknownUnionMember: <A>(value: A) => value is Extract<A, UnknownUnionMember<string>>;
/** @throws {never} */
export declare const ForwardCompatibleUnionArray: <const Members extends ReadonlyArray<Schema.Top & {
    readonly fields: object;
}>, const Tag extends string>(members: Members, tag: Tag) => Schema.decodeTo<Schema.$Array<Schema.toType<Schema.Union<Members>>>, Schema.$Array<ForwardCompatibleUnion<Members, Tag>>, never, never>;
export declare const ThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
export type ThreadId = typeof ThreadId.Type;
export declare const ProjectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
export type ProjectId = typeof ProjectId.Type;
export declare const EnvironmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
export type EnvironmentId = typeof EnvironmentId.Type;
export declare const CommandId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
export type CommandId = typeof CommandId.Type;
export declare const EventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
export type EventId = typeof EventId.Type;
export declare const MessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
export type MessageId = typeof MessageId.Type;
export declare const TurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">;
export type TurnId = typeof TurnId.Type;
export declare const RunId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
export type RunId = typeof RunId.Type;
export declare const RunAttemptId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunAttemptId">;
export type RunAttemptId = typeof RunAttemptId.Type;
export declare const NodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
export type NodeId = typeof NodeId.Type;
export declare const GuestShareId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">;
export type GuestShareId = typeof GuestShareId.Type;
export declare const GuestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
export type GuestMessageId = typeof GuestMessageId.Type;
export declare const AuthSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
export type AuthSessionId = typeof AuthSessionId.Type;
export declare const RpcClientId: Schema.brand<Schema.Int, "RpcClientId">;
export type RpcClientId = typeof RpcClientId.Type;
export declare const ClientSurface: Schema.Literals<readonly ["web", "desktop", "mobile", "cli"]>;
export type ClientSurface = typeof ClientSurface.Type;
export declare const ClientOs: Schema.Literals<readonly ["macOS", "Windows", "Linux", "iOS", "Android", "ChromeOS", "other", "unknown"]>;
export type ClientOs = typeof ClientOs.Type;
export declare const ClientDeviceType: Schema.Literals<readonly ["desktop", "phone", "tablet", "unknown"]>;
export type ClientDeviceType = typeof ClientDeviceType.Type;
export declare const ClientWebDeployment: Schema.Literals<readonly ["hosted", "server"]>;
export type ClientWebDeployment = typeof ClientWebDeployment.Type;
export declare const ClientConnectionMethod: Schema.Literals<readonly ["direct", "ssh", "relay", "unknown"]>;
export type ClientConnectionMethod = typeof ClientConnectionMethod.Type;
export declare const ProviderItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">;
export type ProviderItemId = typeof ProviderItemId.Type;
export declare const ProviderSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
export type ProviderSessionId = typeof ProviderSessionId.Type;
export declare const ProviderThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
export type ProviderThreadId = typeof ProviderThreadId.Type;
export declare const ProviderTurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
export type ProviderTurnId = typeof ProviderTurnId.Type;
export declare const RuntimeSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeSessionId">;
export type RuntimeSessionId = typeof RuntimeSessionId.Type;
export declare const RuntimeItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">;
export type RuntimeItemId = typeof RuntimeItemId.Type;
export declare const TurnItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
export type TurnItemId = typeof TurnItemId.Type;
export declare const RuntimeRequestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
export type RuntimeRequestId = typeof RuntimeRequestId.Type;
export declare const RuntimeTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
export type RuntimeTaskId = typeof RuntimeTaskId.Type;
export declare const ScheduledTaskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
/** A one-use handle to a secret the user entered for an agent; the agent never sees the value. */
export declare const SecretRef: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">;
export type SecretRef = typeof SecretRef.Type;
export type ScheduledTaskId = typeof ScheduledTaskId.Type;
export declare const ApprovalRequestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ApprovalRequestId">;
export type ApprovalRequestId = typeof ApprovalRequestId.Type;
export declare const CheckpointRef: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointRef">;
export type CheckpointRef = typeof CheckpointRef.Type;
export declare const CheckpointId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointId">;
export type CheckpointId = typeof CheckpointId.Type;
export declare const CheckpointScopeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointScopeId">;
export type CheckpointScopeId = typeof CheckpointScopeId.Type;
export declare const ContextHandoffId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextHandoffId">;
export type ContextHandoffId = typeof ContextHandoffId.Type;
export declare const ContextTransferId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextTransferId">;
export type ContextTransferId = typeof ContextTransferId.Type;
export declare const RawEventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RawEventId">;
export type RawEventId = typeof RawEventId.Type;
export declare const PlanId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "PlanId">;
export type PlanId = typeof PlanId.Type;
