import { RateLimit, RateLimitSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryAllRateLimitsRequest {}
export interface QueryAllRateLimitsRequestSDKType {}
export interface QueryAllRateLimitsResponse {
  rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitRequest {
  denom?: string;
  channelId: string;
}
export interface QueryRateLimitRequestSDKType {
  denom?: string;
  channel_id: string;
}
export interface QueryRateLimitResponse {
  rateLimit: RateLimit;
}
export interface QueryRateLimitResponseSDKType {
  rate_limit: RateLimitSDKType;
}
export interface QueryRateLimitsByChainIdRequest {
  chainId: string;
}
export interface QueryRateLimitsByChainIdRequestSDKType {
  chain_id: string;
}
export interface QueryRateLimitsByChainIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitsByChannelIdRequest {
  channelId: string;
}
export interface QueryRateLimitsByChannelIdRequestSDKType {
  channel_id: string;
}
export interface QueryRateLimitsByChannelIdResponse {
  rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
  rate_limits: RateLimitSDKType[];
}

function createBaseQueryAllRateLimitsRequest(): QueryAllRateLimitsRequest {
  return {};
}

export const QueryAllRateLimitsRequest = {
  encode(_: QueryAllRateLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest {
    const message = createBaseQueryAllRateLimitsRequest();
    return message;
  }

};

function createBaseQueryAllRateLimitsResponse(): QueryAllRateLimitsResponse {
  return {
    rateLimits: []
  };
}

export const QueryAllRateLimitsResponse = {
  encode(message: QueryAllRateLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRateLimitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse {
    const message = createBaseQueryAllRateLimitsResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRateLimitRequest(): QueryRateLimitRequest {
  return {
    denom: "",
    channelId: ""
  };
}

export const QueryRateLimitRequest = {
  encode(message: QueryRateLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitRequest>): QueryRateLimitRequest {
    const message = createBaseQueryRateLimitRequest();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseQueryRateLimitResponse(): QueryRateLimitResponse {
  return {
    rateLimit: undefined
  };
}

export const QueryRateLimitResponse = {
  encode(message: QueryRateLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitResponse>): QueryRateLimitResponse {
    const message = createBaseQueryRateLimitResponse();
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  }

};

function createBaseQueryRateLimitsByChainIdRequest(): QueryRateLimitsByChainIdRequest {
  return {
    chainId: ""
  };
}

export const QueryRateLimitsByChainIdRequest = {
  encode(message: QueryRateLimitsByChainIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest {
    const message = createBaseQueryRateLimitsByChainIdRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryRateLimitsByChainIdResponse(): QueryRateLimitsByChainIdResponse {
  return {
    rateLimits: []
  };
}

export const QueryRateLimitsByChainIdResponse = {
  encode(message: QueryRateLimitsByChainIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChainIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse {
    const message = createBaseQueryRateLimitsByChainIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRateLimitsByChannelIdRequest(): QueryRateLimitsByChannelIdRequest {
  return {
    channelId: ""
  };
}

export const QueryRateLimitsByChannelIdRequest = {
  encode(message: QueryRateLimitsByChannelIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest {
    const message = createBaseQueryRateLimitsByChannelIdRequest();
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseQueryRateLimitsByChannelIdResponse(): QueryRateLimitsByChannelIdResponse {
  return {
    rateLimits: []
  };
}

export const QueryRateLimitsByChannelIdResponse = {
  encode(message: QueryRateLimitsByChannelIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateLimitsByChannelIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse {
    const message = createBaseQueryRateLimitsByChannelIdResponse();
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    return message;
  }

};