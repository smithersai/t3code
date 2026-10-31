import * as Rpc from "effect/rpc/Rpc";
import * as RpcGroup from "effect/rpc/RpcGroup";
import * as Schema from "effect/Schema";
import * as AcpSchema from "./_generated/schema.gen.js";
import * as AcpSchemaV1 from "./_generated/schema-v1.gen.js";
export declare const V1_AGENT_METHODS: {
    readonly authenticate: "authenticate";
    readonly logout: "logout";
    readonly session_load: "session/load";
    readonly session_set_model: "session/set_model";
    readonly session_set_mode: "session/set_mode";
};
export declare const V1_CLIENT_METHODS: {
    readonly session_elicitation: "session/elicitation";
    readonly unstable_session_elicitation: "_session/elicitation";
    readonly session_elicitation_complete: "session/elicitation/complete";
    readonly fs_read_text_file: "fs/read_text_file";
    readonly fs_write_text_file: "fs/write_text_file";
    readonly terminal_create: "terminal/create";
    readonly terminal_output: "terminal/output";
    readonly terminal_release: "terminal/release";
    readonly terminal_wait_for_exit: "terminal/wait_for_exit";
    readonly terminal_kill: "terminal/kill";
};
export declare const AgentRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"auth/login", Schema.Struct<{
    readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"auth/logout", Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"initialize", Schema.Struct<{
    readonly protocolVersion: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly info: Schema.suspend<Schema.Codec<AcpSchema.Implementation, AcpSchema.Implementation, never, never>>;
    readonly capabilities: Schema.optionalKey<Schema.suspend<Schema.Codec<AcpSchema.ClientCapabilities, AcpSchema.ClientCapabilities, never, never>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly protocolVersion: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly info: Schema.suspend<Schema.Codec<AcpSchema.Implementation, AcpSchema.Implementation, never, never>>;
    readonly capabilities: Schema.optionalKey<Schema.suspend<Schema.Codec<AcpSchema.AgentCapabilities, AcpSchema.AgentCapabilities, never, never>>>;
    readonly authMethods: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"terminal">;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"agent">;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/disable", Schema.Struct<{
    readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/list", Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly providers: Schema.$Array<Schema.Struct<{
        readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly supported: Schema.$Array<Schema.Union<readonly [Schema.Literal<"anthropic">, Schema.Literal<"openai">, Schema.Literal<"azure">, Schema.Literal<"vertex">, Schema.Literal<"bedrock">, Schema.String]>>;
        readonly required: Schema.Boolean;
        readonly current: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly apiType: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly baseUrl: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/set", Schema.Struct<{
    readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly apiType: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly baseUrl: Schema.String;
    readonly headers: Schema.optionalKey<Schema.$Record<Schema.String, Schema.String>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/close", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/delete", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/fork", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/list", Schema.Struct<{
    readonly cwd: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly cursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly updatedAt: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly nextCursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/new", Schema.Struct<{
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/prompt", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly prompt: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"text">;
        readonly text: Schema.String;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly data: Schema.String;
        readonly mimeType: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly uri: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"audio">;
        readonly data: Schema.String;
        readonly mimeType: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource_link">;
        readonly name: Schema.String;
        readonly uri: Schema.String;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly icons: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly src: Schema.String;
            readonly mimeType: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly sizes: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.String>, Schema.Null]>>;
            readonly theme: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"light">, Schema.Literal<"dark">, Schema.String]>, Schema.Null]>>;
        }>>, Schema.Null]>>;
        readonly mimeType: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly size: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly resource: Schema.suspend<Schema.Codec<AcpSchema.EmbeddedResourceResource, AcpSchema.EmbeddedResourceResource, never, never>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/resume", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly replayFrom: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"start">;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/set_config_option", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly type: Schema.Literal<"id">;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.Boolean;
    readonly type: Schema.Literal<"boolean">;
}>, Schema.StructWithRest<Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly type: Schema.String;
    readonly value: Schema.Codec<Schema.Json, Schema.Json, never, never>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Struct<{
    readonly configOptions: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never>>;
export declare const CompatAgentRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"auth/login", Schema.Struct<{
    readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"auth/logout", Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"authenticate", Schema.Struct<{
    readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"initialize", Schema.Unknown, Schema.Union<readonly [Schema.Struct<{
    readonly protocolVersion: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly info: Schema.suspend<Schema.Codec<AcpSchema.Implementation, AcpSchema.Implementation, never, never>>;
    readonly capabilities: Schema.optionalKey<Schema.suspend<Schema.Codec<AcpSchema.AgentCapabilities, AcpSchema.AgentCapabilities, never, never>>>;
    readonly authMethods: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"terminal">;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"agent">;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
        readonly methodId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly protocolVersion: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly agentCapabilities: Schema.optionalKey<Schema.suspend<Schema.Codec<AcpSchemaV1.AgentCapabilities, AcpSchemaV1.AgentCapabilities, never, never>>>;
    readonly authMethods: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"terminal">;
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Record<Schema.String, Schema.String>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.suspend<Schema.Codec<AcpSchemaV1.AuthMethodAgent, AcpSchemaV1.AuthMethodAgent, never, never>>]>>>;
    readonly agentInfo: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly name: Schema.String;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly version: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"logout", Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/disable", Schema.Struct<{
    readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/list", Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly providers: Schema.$Array<Schema.Struct<{
        readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly supported: Schema.$Array<Schema.Union<readonly [Schema.Literal<"anthropic">, Schema.Literal<"openai">, Schema.Literal<"azure">, Schema.Literal<"vertex">, Schema.Literal<"bedrock">, Schema.String]>>;
        readonly required: Schema.Boolean;
        readonly current: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly apiType: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly baseUrl: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"providers/set", Schema.Struct<{
    readonly providerId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly apiType: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly baseUrl: Schema.String;
    readonly headers: Schema.optionalKey<Schema.$Record<Schema.String, Schema.String>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/close", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/delete", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/fork", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.String;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"sse">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.suspend<Schema.Codec<AcpSchemaV1.McpServerStdio, AcpSchemaV1.McpServerStdio, never, never>>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly modes: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly currentModeId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly availableModes: Schema.$Array<Schema.Struct<{
            readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly configOptions: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchemaV1.SessionConfigSelectOptions, AcpSchemaV1.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>]>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly models: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly currentModelId: Schema.String;
        readonly availableModels: Schema.$Array<Schema.Struct<{
            readonly modelId: Schema.String;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
    }>>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/list", Schema.Union<readonly [Schema.Struct<{
    readonly cwd: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly cursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly cwd: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly cursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly cwd: Schema.String;
        readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly updatedAt: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly nextCursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly updatedAt: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly nextCursor: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/load", Schema.Struct<{
    readonly mcpServers: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"sse">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.suspend<Schema.Codec<AcpSchemaV1.McpServerStdio, AcpSchemaV1.McpServerStdio, never, never>>]>>;
    readonly cwd: Schema.String;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly modes: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly currentModeId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly availableModes: Schema.$Array<Schema.Struct<{
            readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly configOptions: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchemaV1.SessionConfigSelectOptions, AcpSchemaV1.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>]>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly models: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly currentModelId: Schema.String;
        readonly availableModels: Schema.$Array<Schema.Struct<{
            readonly modelId: Schema.String;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
    }>>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/new", Schema.Union<readonly [Schema.Struct<{
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly cwd: Schema.String;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"sse">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.suspend<Schema.Codec<AcpSchemaV1.McpServerStdio, AcpSchemaV1.McpServerStdio, never, never>>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly modes: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly currentModeId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly availableModes: Schema.$Array<Schema.Struct<{
            readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly configOptions: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchemaV1.SessionConfigSelectOptions, AcpSchemaV1.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>]>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly models: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly currentModelId: Schema.String;
        readonly availableModels: Schema.$Array<Schema.Struct<{
            readonly modelId: Schema.String;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
    }>>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/prompt", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly prompt: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"text">;
        readonly text: Schema.String;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly data: Schema.String;
        readonly mimeType: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly uri: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"audio">;
        readonly data: Schema.String;
        readonly mimeType: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource_link">;
        readonly name: Schema.String;
        readonly uri: Schema.String;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly icons: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly src: Schema.String;
            readonly mimeType: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly sizes: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.String>, Schema.Null]>>;
            readonly theme: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"light">, Schema.Literal<"dark">, Schema.String]>, Schema.Null]>>;
        }>>, Schema.Null]>>;
        readonly mimeType: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly size: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly resource: Schema.suspend<Schema.Codec<AcpSchema.EmbeddedResourceResource, AcpSchema.EmbeddedResourceResource, never, never>>;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">, Schema.String]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly prompt: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"text">;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly text: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly data: Schema.String;
        readonly mimeType: Schema.String;
        readonly uri: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"audio">;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly data: Schema.String;
        readonly mimeType: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource_link">;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly mimeType: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly name: Schema.String;
        readonly size: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly title: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly uri: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly annotations: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly audience: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Literal<"assistant">, Schema.Literal<"user">]>>, Schema.Null]>>;
            readonly lastModified: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly priority: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>, Schema.Null]>>;
        readonly resource: Schema.suspend<Schema.Codec<AcpSchemaV1.EmbeddedResourceResource, AcpSchemaV1.EmbeddedResourceResource, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly stopReason: Schema.suspend<Schema.Codec<AcpSchemaV1.StopReason, AcpSchemaV1.StopReason, never, never>>;
    readonly usage: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly totalTokens: Schema.Number;
        readonly inputTokens: Schema.Number;
        readonly outputTokens: Schema.Number;
        readonly thoughtTokens: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly cachedReadTokens: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly cachedWriteTokens: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/resume", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"stdio">;
        readonly name: Schema.String;
        readonly command: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
        readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly replayFrom: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"start">;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly cwd: Schema.String;
    readonly additionalDirectories: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly mcpServers: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"http">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"sse">;
        readonly name: Schema.String;
        readonly url: Schema.String;
        readonly headers: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly value: Schema.String;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"acp">;
        readonly name: Schema.String;
        readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.suspend<Schema.Codec<AcpSchemaV1.McpServerStdio, AcpSchemaV1.McpServerStdio, never, never>>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly modes: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly currentModeId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly availableModes: Schema.$Array<Schema.Struct<{
            readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
            readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly configOptions: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchemaV1.SessionConfigSelectOptions, AcpSchemaV1.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>]>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly models: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly currentModelId: Schema.String;
        readonly availableModels: Schema.$Array<Schema.Struct<{
            readonly modelId: Schema.String;
            readonly name: Schema.String;
            readonly description: Schema.optionalKey<Schema.NullOr<Schema.String>>;
            readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
        }>>;
        readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
    }>>>;
}>, Schema.Struct<{
    readonly configOptions: Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/set_config_option", Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly type: Schema.Literal<"id">;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.Boolean;
    readonly type: Schema.Literal<"boolean">;
}>, Schema.StructWithRest<Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly type: Schema.String;
    readonly value: Schema.Codec<Schema.Json, Schema.Json, never, never>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.Boolean;
    readonly type: Schema.Literal<"boolean">;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly value: Schema.suspend<Schema.Codec<string, string, never, never>>;
}>]>]>, Schema.Union<readonly [Schema.Struct<{
    readonly configOptions: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchemaV1.SessionConfigSelectOptions, AcpSchemaV1.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly id: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly configOptions: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"select">;
        readonly currentValue: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly options: Schema.suspend<Schema.Codec<AcpSchema.SessionConfigSelectOptions, AcpSchema.SessionConfigSelectOptions, never, never>>;
    }>, Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.Boolean;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly configId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly category: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Literal<"mode">, Schema.Literal<"model">, Schema.Literal<"model_config">, Schema.Literal<"thought_level">, Schema.String]>, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/set_mode", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly modeId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/set_model", Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly modelId: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never>>;
export declare const ClientRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"elicitation/create", Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>, Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>]>, Schema.Union<readonly [Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"accept">;
    readonly content: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Union<readonly [Schema.String, Schema.Number, Schema.Number, Schema.Boolean, Schema.$Array<Schema.String>]>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"decline">;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"cancel">;
}>, Schema.StructWithRest<Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/connect", Schema.Struct<{
    readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/disconnect", Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/message", Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly method: Schema.String;
    readonly params: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Codec<Schema.Json, Schema.Json, never, never>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/request_permission", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly title: Schema.String;
    readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly subject: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"tool_call">;
        readonly toolCall: Schema.suspend<Schema.Codec<AcpSchema.ToolCallUpdate, AcpSchema.ToolCallUpdate, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"command">;
        readonly command: Schema.String;
        readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly terminalId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Null]>>;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly optionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly kind: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly outcome: Schema.suspend<Schema.Codec<AcpSchema.RequestPermissionOutcome, AcpSchema.RequestPermissionOutcome, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never>>;
export declare const CompatClientRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"_session/elicitation", Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>, Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>]>, Schema.Struct<{
    readonly action: Schema.Union<readonly [Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"accept">;
        readonly content: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Union<readonly [Schema.String, Schema.Number, Schema.Number, Schema.Boolean, Schema.$Array<Schema.String>]>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"decline">;
    }>, Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"cancel">;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>;
    readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"elicitation/create", Schema.Unknown, Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"accept">;
    readonly content: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Union<readonly [Schema.String, Schema.Number, Schema.Number, Schema.Boolean, Schema.$Array<Schema.String>]>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"decline">;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"cancel">;
}>, Schema.StructWithRest<Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Union<readonly [Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"accept">;
    readonly content: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Union<readonly [Schema.String, Schema.Number, Schema.Number, Schema.Boolean, Schema.$Array<Schema.String>]>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"decline">;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.Literal<"cancel">;
}>, Schema.StructWithRest<Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly action: Schema.String;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"fs/read_text_file", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly path: Schema.String;
    readonly line: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly limit: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly content: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"fs/write_text_file", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly path: Schema.String;
    readonly content: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/connect", Schema.Struct<{
    readonly serverId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/disconnect", Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"mcp/message", Schema.Struct<{
    readonly connectionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly method: Schema.String;
    readonly params: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Codec<Schema.Json, Schema.Json, never, never>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/elicitation", Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"form">;
    readonly requestedSchema: Schema.suspend<Schema.Codec<AcpSchema.ElicitationSchema, AcpSchema.ElicitationSchema, never, never>>;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.Literal<"url">;
    readonly elicitationId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly url: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>]>, Schema.Union<readonly [Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>, Schema.StructWithRest<Schema.Struct<{
    readonly message: Schema.String;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    readonly mode: Schema.String;
    readonly requestId: Schema.suspend<Schema.Codec<AcpSchema.RequestId, AcpSchema.RequestId, never, never>>;
}>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>]>, Schema.Struct<{
    readonly action: Schema.Union<readonly [Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"accept">;
        readonly content: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Union<readonly [Schema.String, Schema.Number, Schema.Number, Schema.Boolean, Schema.$Array<Schema.String>]>>, Schema.Null]>>;
    }>, Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"decline">;
    }>, Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.Literal<"cancel">;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
        readonly action: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>;
    readonly _meta: Schema.optionalKey<Schema.NullOr<Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"session/request_permission", Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly title: Schema.String;
    readonly description: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly subject: Schema.optionalKey<Schema.Union<readonly [Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"tool_call">;
        readonly toolCall: Schema.suspend<Schema.Codec<AcpSchema.ToolCallUpdate, AcpSchema.ToolCallUpdate, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"command">;
        readonly command: Schema.String;
        readonly cwd: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly toolCallId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly terminalId: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.StructWithRest<Schema.Struct<{
        readonly type: Schema.String;
    }>, readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>]>]>, Schema.Null]>>;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly optionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly kind: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly toolCall: Schema.suspend<Schema.Codec<AcpSchemaV1.ToolCallUpdate, AcpSchemaV1.ToolCallUpdate, never, never>>;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly optionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
        readonly name: Schema.String;
        readonly kind: Schema.suspend<Schema.Codec<AcpSchemaV1.PermissionOptionKind, AcpSchemaV1.PermissionOptionKind, never, never>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Union<readonly [Schema.Struct<{
    readonly outcome: Schema.suspend<Schema.Codec<AcpSchema.RequestPermissionOutcome, AcpSchema.RequestPermissionOutcome, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly outcome: Schema.suspend<Schema.Codec<AcpSchemaV1.RequestPermissionOutcome, AcpSchemaV1.RequestPermissionOutcome, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>]>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"terminal/create", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly command: Schema.String;
    readonly args: Schema.optionalKey<Schema.$Array<Schema.String>>;
    readonly env: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly value: Schema.String;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>>>;
    readonly cwd: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly outputByteLimit: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly terminalId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"terminal/kill", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly terminalId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"terminal/output", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly terminalId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly output: Schema.String;
    readonly truncated: Schema.Boolean;
    readonly exitStatus: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly exitCode: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
        readonly signal: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
        readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
    }>, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"terminal/release", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly terminalId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never> | Rpc.Rpc<"terminal/wait_for_exit", Schema.Struct<{
    readonly sessionId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly terminalId: Schema.suspend<Schema.Codec<string, string, never, never>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly exitCode: Schema.optionalKey<Schema.Union<readonly [Schema.Number, Schema.Null]>>;
    readonly signal: Schema.optionalKey<Schema.Union<readonly [Schema.String, Schema.Null]>>;
    readonly _meta: Schema.optionalKey<Schema.Union<readonly [Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>, Schema.Null]>>;
}>, Schema.Struct<{
    readonly code: Schema.suspend<Schema.Codec<number, number, never, never>>;
    readonly message: Schema.String;
    readonly data: Schema.optionalKey<Schema.Codec<Schema.Json, Schema.Json, never, never>>;
}>, never, never>>;
