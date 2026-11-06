import type { ThreadId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import type * as Option from "effect/Option";
import type { RemoteEnvironmentAuthorization } from "../authorization/service.ts";
import type { PreparedConnection } from "../connection/model.vibe";
import type { ManagedRelayDpopSigner } from "../relay/managedRelay.ts";
export declare const fetchEnvironmentThreadTranscript: (input: {
    readonly prepared: PreparedConnection;
    readonly threadId: ThreadId;
    readonly signer: Option.Option<ManagedRelayDpopSigner["Service"]>;
    readonly remoteAuthorization?: Option.Option<RemoteEnvironmentAuthorization["Service"]>;
}) => Effect.Effect<{
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly title: string;
    readonly updatedAt: import("effect/DateTime").Utc;
    readonly items: readonly {
        readonly position: number;
        readonly visibility: "inherited" | "local" | "synthetic";
        readonly sourceThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly sourceItemId: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly item: {
            readonly source: {
                readonly kind: "command";
            } | {
                readonly kind: "command";
            } | {
                readonly kind: "monitor";
            } | {
                readonly kind: "background_task";
            } | {
                readonly kind: "system";
            } | {
                readonly kind: "subagent";
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            } | {
                readonly kind: "delegated_task";
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            };
            readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
            readonly summary: string;
            readonly detail?: string | undefined;
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "notification";
        } | {
            readonly createdBy: "agent" | "system" | "user";
            readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "user_message";
            readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
            readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
            readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
            readonly workflowScript?: boolean | undefined;
            readonly inputIntent: "promoted_queued_to_steer" | "queued_turn" | "steer" | "turn_start";
            readonly text: string;
            readonly textOmitted?: true;
            readonly context?: {
                readonly version: 1;
                readonly guest?: {
                    readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                    readonly name: string;
                    readonly text: string;
                    readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
                } | undefined;
                readonly records: readonly ({
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly attachmentId: string;
                    readonly name: string;
                    readonly mimeType: string;
                    readonly sizeBytes: number;
                    readonly kind: "image";
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly attachmentId: string;
                    readonly name: string;
                    readonly mimeType: string;
                    readonly sizeBytes: number;
                    readonly kind: "file";
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "terminal";
                    readonly terminalId: string;
                    readonly terminalLabel: string;
                    readonly lineStart: number;
                    readonly lineEnd: number;
                    readonly text: string;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                    readonly kind: "element";
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "mention";
                    readonly path: string;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "skill";
                    readonly name: string;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "thread";
                    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                    readonly title: string;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "environment";
                    readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: string;
                    readonly payload: unknown;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "preview-annotation";
                    readonly annotationId: string;
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly comment: string;
                    readonly targetSummary: string;
                    readonly styleChanges: readonly string[];
                    readonly elements?: readonly {
                        readonly pageUrl: string;
                        readonly pageTitle: string | null;
                        readonly tagName: string;
                        readonly selector: string | null;
                        readonly htmlPreview: string;
                        readonly componentName: string | null;
                        readonly source: {
                            readonly functionName: string | null;
                            readonly fileName: string | null;
                            readonly lineNumber: number | null;
                            readonly columnNumber: number | null;
                        } | null;
                        readonly styles: string;
                    }[];
                    readonly elementIds?: readonly string[];
                    readonly regionCount?: number;
                    readonly strokeCount?: number;
                    readonly styleChangeDetails?: readonly {
                        readonly targetId: string;
                        readonly selector: string | null;
                        readonly property: string;
                        readonly previousValue: string;
                        readonly value: string;
                    }[];
                    readonly screenshotContextId?: string & import("effect/Brand").Brand<"ComposerContextId">;
                } | {
                    readonly version: 1;
                    readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                    readonly label: string;
                    readonly kind: "review-comment";
                    readonly sectionId: string;
                    readonly sectionTitle: string;
                    readonly filePath: string;
                    readonly startIndex: number;
                    readonly endIndex: number;
                    readonly rangeLabel: string;
                    readonly text: string;
                    readonly diff: string;
                    readonly fenceLanguage?: string;
                    readonly pullRequest?: {
                        readonly number: number;
                        readonly title: string;
                        readonly url: string;
                        readonly headBranch: string;
                        readonly baseBranch: string;
                        readonly state: "closed" | "merged" | "open";
                        readonly isDraft: boolean;
                    };
                })[];
            } | undefined;
            readonly attachments: readonly ({
                readonly type: string;
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
            } | {
                readonly type: "image";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly kind: "snap-shot";
                    readonly capturedAt: string;
                    readonly appName: string;
                    readonly windowTitle: string;
                    readonly accessibleText?: string | undefined;
                    readonly accessibility?: {
                        readonly format: "flat-text";
                        readonly text: string;
                        readonly truncated: boolean;
                    } | {
                        readonly format: "element-tree";
                        readonly coordinateSpace: "captured-image";
                        readonly imageSize: {
                            readonly width: number;
                            readonly height: number;
                        };
                        readonly truncated: boolean;
                        readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                    } | undefined;
                    readonly appIdentifier?: string | undefined;
                    readonly appIconDataUrl?: string | undefined;
                } | undefined;
            } | {
                readonly type: "file";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly _tag: "pasted-text";
                } | undefined;
            })[];
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "assistant_message";
            readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
            readonly text: string;
            readonly textOmitted?: true;
            readonly attachments?: readonly ({
                readonly type: string;
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
            } | {
                readonly type: "image";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly kind: "snap-shot";
                    readonly capturedAt: string;
                    readonly appName: string;
                    readonly windowTitle: string;
                    readonly accessibleText?: string | undefined;
                    readonly accessibility?: {
                        readonly format: "flat-text";
                        readonly text: string;
                        readonly truncated: boolean;
                    } | {
                        readonly format: "element-tree";
                        readonly coordinateSpace: "captured-image";
                        readonly imageSize: {
                            readonly width: number;
                            readonly height: number;
                        };
                        readonly truncated: boolean;
                        readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                    } | undefined;
                    readonly appIdentifier?: string | undefined;
                    readonly appIconDataUrl?: string | undefined;
                } | undefined;
            } | {
                readonly type: "file";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly _tag: "pasted-text";
                } | undefined;
            })[] | undefined;
            readonly streaming: boolean;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "reasoning";
            readonly text: string;
            readonly streaming: boolean;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "proposed_plan";
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
            readonly markdown: string;
            readonly streaming: boolean;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "todo_list";
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
            readonly steps: readonly {
                readonly id: string;
                readonly text: string;
                readonly status: "completed" | "pending" | "running";
                readonly durationAnchorAt?: string | undefined;
                readonly durationMs?: number | undefined;
            }[];
            readonly explanation?: string | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "user_input_request";
            readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
            readonly questions: readonly {
                readonly id: string;
                readonly header: string;
                readonly question: string;
                readonly options: readonly {
                    readonly label: string;
                    readonly description: string;
                    readonly value?: string | undefined;
                    readonly preview?: string | undefined;
                }[];
                readonly multiSelect?: boolean | undefined;
                readonly allowCustomAnswer?: boolean | undefined;
                readonly initialAnswer?: string | undefined;
                readonly required?: boolean | undefined;
            }[];
            readonly questionAnswer?: {
                readonly requestId: string;
                readonly questionTextById?: {
                    readonly [x: string]: string;
                } | undefined;
                readonly answers: {
                    readonly [x: string]: unknown;
                };
                readonly attachmentsByQuestionId: {
                    readonly [x: string]: readonly ({
                        readonly type: "image";
                        readonly id: string;
                        readonly name: string;
                        readonly mimeType: string;
                        readonly sizeBytes: number;
                        readonly source?: {
                            readonly kind: "snap-shot";
                            readonly capturedAt: string;
                            readonly appName: string;
                            readonly windowTitle: string;
                            readonly accessibleText?: string | undefined;
                            readonly accessibility?: {
                                readonly format: "flat-text";
                                readonly text: string;
                                readonly truncated: boolean;
                            } | {
                                readonly format: "element-tree";
                                readonly coordinateSpace: "captured-image";
                                readonly imageSize: {
                                    readonly width: number;
                                    readonly height: number;
                                };
                                readonly truncated: boolean;
                                readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                            } | undefined;
                            readonly appIdentifier?: string | undefined;
                            readonly appIconDataUrl?: string | undefined;
                        } | undefined;
                    } | {
                        readonly type: "file";
                        readonly id: string;
                        readonly name: string;
                        readonly mimeType: string;
                        readonly sizeBytes: number;
                        readonly source?: {
                            readonly _tag: "pasted-text";
                        } | undefined;
                    })[];
                };
            } | undefined;
            readonly responseMode?: "message" | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "file_change";
            readonly fileName: string;
            readonly additions?: number | undefined;
            readonly deletions?: number | undefined;
            readonly diffStr?: string | undefined;
            readonly oldStr?: string | undefined;
            readonly newStr?: string | undefined;
            readonly changes?: readonly {
                readonly operation: string;
                readonly path: string;
                readonly oldPath?: string | undefined;
                readonly fileType?: string | undefined;
                readonly mimeType?: string | undefined;
            }[] | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "command_execution";
            readonly input: string;
            readonly output?: string | undefined;
            readonly outputOmitted?: boolean | undefined;
            readonly outputIndicatesFailure?: boolean | undefined;
            readonly exitCode?: number | undefined;
            readonly monitor?: boolean | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "file_search";
            readonly pattern?: string | undefined;
            readonly results?: readonly {
                readonly fileName: string;
                readonly line?: number | undefined;
                readonly column?: number | undefined;
                readonly preview?: string | undefined;
            }[] | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "web_search";
            readonly patterns?: readonly string[] | undefined;
            readonly results?: readonly {
                readonly title?: string | undefined;
                readonly url?: string | undefined;
                readonly snippet?: string | undefined;
            }[] | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "approval_request";
            readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
            readonly requestKind: "command" | "file-change" | "file-read" | "mcp-elicitation" | "permission";
            readonly prompt?: string | undefined;
            readonly reason?: string | undefined;
            readonly fullAccessOverride?: "ask_rule" | "provider_check" | undefined;
            readonly appName?: string | undefined;
            readonly options?: readonly {
                readonly decision: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline";
                readonly label: string;
                readonly warning?: string | undefined;
            }[] | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "checkpoint";
            readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
            readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
            readonly files: readonly {
                readonly path: string;
                readonly kind: string;
                readonly additions: number;
                readonly deletions: number;
            }[];
            readonly filesOmitted?: true;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "run_interrupt_request";
            readonly message: string;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "run_interrupt_result";
            readonly message: string;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "system_notice";
            readonly message: string;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "error";
            readonly failure: {
                readonly class: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error";
                readonly message: string;
                readonly code: string | null;
                readonly retryable: boolean | null;
                readonly resetAt?: string | null | undefined;
            };
            readonly retry?: {
                readonly attempt: number;
                readonly maxAttempts: number | null;
                readonly retryDelayMs: number | null;
            } | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "compaction";
            readonly driver: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | null;
            readonly summary?: string | undefined;
            readonly beforeTokenCount?: number | undefined;
            readonly afterTokenCount?: number | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "handoff";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
            readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
            readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
            readonly fromProviderInstanceIds: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[];
            readonly toProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly fromModelSelections?: readonly {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            }[] | undefined;
            readonly toModel?: string | undefined;
            readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
            readonly summary?: string | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "fork";
            readonly source: {
                readonly type: "run";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly runId: string & import("effect/Brand").Brand<"RunId">;
            } | {
                readonly type: "node";
                readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
            } | {
                readonly type: "provider_thread";
                readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
                readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
            };
            readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly providerThreadId?: (string & import("effect/Brand").Brand<"ProviderThreadId">) | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "thread_created";
            readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly targetProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly targetModel: string;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "secret_request";
            readonly label: string;
            readonly reason: string;
            readonly placeholder?: string | undefined;
            readonly delivery?: "file" | undefined;
            readonly secretStatus: "cancelled" | "declined" | "pending" | "saved";
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "link_request";
            readonly url?: string | undefined;
            readonly reason: string;
            readonly environmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
            readonly label?: string | undefined;
            readonly hint?: string | undefined;
            readonly requestedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
            readonly linkStatus: "cancelled" | "declined" | "failed" | "linked" | "pending";
            readonly linkedEnvironmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
            readonly linkedLabel?: string | undefined;
            readonly linkedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
            readonly failure?: string | undefined;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "subagent";
            readonly subagentId: string & import("effect/Brand").Brand<"NodeId">;
            readonly origin: "app_owned" | "provider_native";
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
            readonly remoteChild?: {
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly label: string;
                readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
                readonly stoppedThere?: boolean | undefined;
                readonly stopCount?: number | undefined;
            } | undefined;
            readonly prompt: string;
            readonly progress?: string | undefined;
            readonly result: string | null;
            readonly promptOmitted?: true;
            readonly resultOmitted?: true;
        } | {
            readonly toolNonExecutionKind?: string | undefined;
            readonly toolSurface?: "browser" | "computer" | undefined;
            readonly toolIcon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
            readonly toolSource?: {
                readonly key: string;
                readonly name: string;
                readonly kind: "browser" | "computer" | "integration";
                readonly icon?: {
                    readonly _tag: "native-app";
                    readonly app: {
                        readonly _tag: "app-id";
                        readonly appId: string;
                    } | {
                        readonly _tag: "display-name";
                        readonly displayName: string;
                    };
                } | {
                    readonly _tag: "themed-logo";
                    readonly logoUrl: string;
                    readonly logoUrlDark?: string | undefined;
                } | {
                    readonly _tag: "website";
                    readonly pageUrl: string;
                    readonly faviconUrl?: string | undefined;
                    readonly faviconUrlDark?: string | undefined;
                } | undefined;
            } | undefined;
            readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
            readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
            readonly nativeItemRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | null;
            readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
            readonly ordinal: number;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
            readonly title: string | null;
            readonly startedAt: import("effect/DateTime").Utc | null;
            readonly completedAt: import("effect/DateTime").Utc | null;
            readonly updatedAt: import("effect/DateTime").Utc;
            readonly type: "dynamic_tool";
            readonly toolName: string | null;
            readonly viewedImagePath?: string | undefined;
            readonly input: unknown;
            readonly output?: unknown;
            readonly outputOmitted?: boolean | undefined;
        };
    }[];
}, import("../rpc/http.ts").RemoteEnvironmentRequestError, import("effect/http/HttpClient").HttpClient>;
