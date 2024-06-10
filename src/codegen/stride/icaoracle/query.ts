import { Oracle, OracleSDKType, Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Query's a specific oracle */

export interface QueryOracleRequest {
  /** Query's a specific oracle */
  chainId: string;
}
/** Query's a specific oracle */

export interface QueryOracleRequestSDKType {
  /** Query's a specific oracle */
  chain_id: string;
}
export interface QueryOracleResponse {
  oracle: Oracle;
}
export interface QueryOracleResponseSDKType {
  oracle: OracleSDKType;
}
/** Query's all oracle's */

export interface QueryAllOraclesRequest {}
/** Query's all oracle's */

export interface QueryAllOraclesRequestSDKType {}
export interface QueryAllOraclesResponse {
  oracles: Oracle[];
}
export interface QueryAllOraclesResponseSDKType {
  oracles: OracleSDKType[];
}
/** Query's all oracle with a filter for whether they're active */

export interface QueryActiveOraclesRequest {
  /** Query's all oracle with a filter for whether they're active */
  active?: boolean;
}
/** Query's all oracle with a filter for whether they're active */

export interface QueryActiveOraclesRequestSDKType {
  /** Query's all oracle with a filter for whether they're active */
  active?: boolean;
}
export interface QueryActiveOraclesResponse {
  oracles: Oracle[];
}
export interface QueryActiveOraclesResponseSDKType {
  oracles: OracleSDKType[];
}
/** Query's metric's with optional filters */

export interface QueryMetricsRequest {
  metricKey?: string;
  oracleChainId?: string;
}
/** Query's metric's with optional filters */

export interface QueryMetricsRequestSDKType {
  metric_key?: string;
  oracle_chain_id?: string;
}
export interface QueryMetricsResponse {
  metrics: Metric[];
}
export interface QueryMetricsResponseSDKType {
  metrics: MetricSDKType[];
}

function createBaseQueryOracleRequest(): QueryOracleRequest {
  return {
    chainId: ""
  };
}

export const QueryOracleRequest = {
  encode(message: QueryOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleRequest();

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

  fromPartial(object: DeepPartial<QueryOracleRequest>): QueryOracleRequest {
    const message = createBaseQueryOracleRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryOracleResponse(): QueryOracleResponse {
  return {
    oracle: undefined
  };
}

export const QueryOracleResponse = {
  encode(message: QueryOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== undefined) {
      Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracle = Oracle.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOracleResponse>): QueryOracleResponse {
    const message = createBaseQueryOracleResponse();
    message.oracle = object.oracle !== undefined && object.oracle !== null ? Oracle.fromPartial(object.oracle) : undefined;
    return message;
  }

};

function createBaseQueryAllOraclesRequest(): QueryAllOraclesRequest {
  return {};
}

export const QueryAllOraclesRequest = {
  encode(_: QueryAllOraclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclesRequest();

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

  fromPartial(_: DeepPartial<QueryAllOraclesRequest>): QueryAllOraclesRequest {
    const message = createBaseQueryAllOraclesRequest();
    return message;
  }

};

function createBaseQueryAllOraclesResponse(): QueryAllOraclesResponse {
  return {
    oracles: []
  };
}

export const QueryAllOraclesResponse = {
  encode(message: QueryAllOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllOraclesResponse>): QueryAllOraclesResponse {
    const message = createBaseQueryAllOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryActiveOraclesRequest(): QueryActiveOraclesRequest {
  return {
    active: false
  };
}

export const QueryActiveOraclesRequest = {
  encode(message: QueryActiveOraclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOraclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOraclesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryActiveOraclesRequest>): QueryActiveOraclesRequest {
    const message = createBaseQueryActiveOraclesRequest();
    message.active = object.active ?? false;
    return message;
  }

};

function createBaseQueryActiveOraclesResponse(): QueryActiveOraclesResponse {
  return {
    oracles: []
  };
}

export const QueryActiveOraclesResponse = {
  encode(message: QueryActiveOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOraclesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryActiveOraclesResponse>): QueryActiveOraclesResponse {
    const message = createBaseQueryActiveOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return {
    metricKey: "",
    oracleChainId: ""
  };
}

export const QueryMetricsRequest = {
  encode(message: QueryMetricsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricKey !== "") {
      writer.uint32(10).string(message.metricKey);
    }

    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metricKey = reader.string();
          break;

        case 2:
          message.oracleChainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMetricsRequest>): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    message.metricKey = object.metricKey ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  }

};

function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return {
    metrics: []
  };
}

export const QueryMetricsResponse = {
  encode(message: QueryMetricsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metrics.push(Metric.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMetricsResponse>): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  }

};