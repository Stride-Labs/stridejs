import { Oracle, OracleAmino, OracleSDKType, Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Query's a specific oracle */
export interface QueryOracleRequest {
  chainId: string;
}
export interface QueryOracleRequestProtoMsg {
  typeUrl: "/stride.icaoracle.QueryOracleRequest";
  value: Uint8Array;
}
/** Query's a specific oracle */
export interface QueryOracleRequestAmino {
  chain_id?: string;
}
export interface QueryOracleRequestAminoMsg {
  type: "/stride.icaoracle.QueryOracleRequest";
  value: QueryOracleRequestAmino;
}
/** Query's a specific oracle */
export interface QueryOracleRequestSDKType {
  chain_id: string;
}
export interface QueryOracleResponse {
  oracle?: Oracle;
}
export interface QueryOracleResponseProtoMsg {
  typeUrl: "/stride.icaoracle.QueryOracleResponse";
  value: Uint8Array;
}
export interface QueryOracleResponseAmino {
  oracle?: OracleAmino;
}
export interface QueryOracleResponseAminoMsg {
  type: "/stride.icaoracle.QueryOracleResponse";
  value: QueryOracleResponseAmino;
}
export interface QueryOracleResponseSDKType {
  oracle?: OracleSDKType;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequest {}
export interface QueryAllOraclesRequestProtoMsg {
  typeUrl: "/stride.icaoracle.QueryAllOraclesRequest";
  value: Uint8Array;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequestAmino {}
export interface QueryAllOraclesRequestAminoMsg {
  type: "/stride.icaoracle.QueryAllOraclesRequest";
  value: QueryAllOraclesRequestAmino;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequestSDKType {}
export interface QueryAllOraclesResponse {
  oracles: Oracle[];
}
export interface QueryAllOraclesResponseProtoMsg {
  typeUrl: "/stride.icaoracle.QueryAllOraclesResponse";
  value: Uint8Array;
}
export interface QueryAllOraclesResponseAmino {
  oracles?: OracleAmino[];
}
export interface QueryAllOraclesResponseAminoMsg {
  type: "/stride.icaoracle.QueryAllOraclesResponse";
  value: QueryAllOraclesResponseAmino;
}
export interface QueryAllOraclesResponseSDKType {
  oracles: OracleSDKType[];
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequest {
  active: boolean;
}
export interface QueryActiveOraclesRequestProtoMsg {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest";
  value: Uint8Array;
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequestAmino {
  active?: boolean;
}
export interface QueryActiveOraclesRequestAminoMsg {
  type: "/stride.icaoracle.QueryActiveOraclesRequest";
  value: QueryActiveOraclesRequestAmino;
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequestSDKType {
  active: boolean;
}
export interface QueryActiveOraclesResponse {
  oracles: Oracle[];
}
export interface QueryActiveOraclesResponseProtoMsg {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse";
  value: Uint8Array;
}
export interface QueryActiveOraclesResponseAmino {
  oracles?: OracleAmino[];
}
export interface QueryActiveOraclesResponseAminoMsg {
  type: "/stride.icaoracle.QueryActiveOraclesResponse";
  value: QueryActiveOraclesResponseAmino;
}
export interface QueryActiveOraclesResponseSDKType {
  oracles: OracleSDKType[];
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequest {
  metricKey: string;
  oracleChainId: string;
}
export interface QueryMetricsRequestProtoMsg {
  typeUrl: "/stride.icaoracle.QueryMetricsRequest";
  value: Uint8Array;
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequestAmino {
  metric_key?: string;
  oracle_chain_id?: string;
}
export interface QueryMetricsRequestAminoMsg {
  type: "/stride.icaoracle.QueryMetricsRequest";
  value: QueryMetricsRequestAmino;
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequestSDKType {
  metric_key: string;
  oracle_chain_id: string;
}
export interface QueryMetricsResponse {
  metrics: Metric[];
}
export interface QueryMetricsResponseProtoMsg {
  typeUrl: "/stride.icaoracle.QueryMetricsResponse";
  value: Uint8Array;
}
export interface QueryMetricsResponseAmino {
  metrics?: MetricAmino[];
}
export interface QueryMetricsResponseAminoMsg {
  type: "/stride.icaoracle.QueryMetricsResponse";
  value: QueryMetricsResponseAmino;
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
  typeUrl: "/stride.icaoracle.QueryOracleRequest",
  encode(message: QueryOracleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryOracleRequest>): QueryOracleRequest {
    const message = createBaseQueryOracleRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryOracleRequestAmino): QueryOracleRequest {
    const message = createBaseQueryOracleRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryOracleRequest): QueryOracleRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryOracleRequestAminoMsg): QueryOracleRequest {
    return QueryOracleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleRequestProtoMsg): QueryOracleRequest {
    return QueryOracleRequest.decode(message.value);
  },
  toProto(message: QueryOracleRequest): Uint8Array {
    return QueryOracleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleRequest): QueryOracleRequestProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryOracleRequest",
      value: QueryOracleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleResponse(): QueryOracleResponse {
  return {
    oracle: undefined
  };
}
export const QueryOracleResponse = {
  typeUrl: "/stride.icaoracle.QueryOracleResponse",
  encode(message: QueryOracleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracle !== undefined) {
      Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryOracleResponse>): QueryOracleResponse {
    const message = createBaseQueryOracleResponse();
    message.oracle = object.oracle !== undefined && object.oracle !== null ? Oracle.fromPartial(object.oracle) : undefined;
    return message;
  },
  fromAmino(object: QueryOracleResponseAmino): QueryOracleResponse {
    const message = createBaseQueryOracleResponse();
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = Oracle.fromAmino(object.oracle);
    }
    return message;
  },
  toAmino(message: QueryOracleResponse): QueryOracleResponseAmino {
    const obj: any = {};
    obj.oracle = message.oracle ? Oracle.toAmino(message.oracle) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOracleResponseAminoMsg): QueryOracleResponse {
    return QueryOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleResponseProtoMsg): QueryOracleResponse {
    return QueryOracleResponse.decode(message.value);
  },
  toProto(message: QueryOracleResponse): Uint8Array {
    return QueryOracleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleResponse): QueryOracleResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryOracleResponse",
      value: QueryOracleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclesRequest(): QueryAllOraclesRequest {
  return {};
}
export const QueryAllOraclesRequest = {
  typeUrl: "/stride.icaoracle.QueryAllOraclesRequest",
  encode(_: QueryAllOraclesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryAllOraclesRequest>): QueryAllOraclesRequest {
    const message = createBaseQueryAllOraclesRequest();
    return message;
  },
  fromAmino(_: QueryAllOraclesRequestAmino): QueryAllOraclesRequest {
    const message = createBaseQueryAllOraclesRequest();
    return message;
  },
  toAmino(_: QueryAllOraclesRequest): QueryAllOraclesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclesRequestAminoMsg): QueryAllOraclesRequest {
    return QueryAllOraclesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclesRequestProtoMsg): QueryAllOraclesRequest {
    return QueryAllOraclesRequest.decode(message.value);
  },
  toProto(message: QueryAllOraclesRequest): Uint8Array {
    return QueryAllOraclesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclesRequest): QueryAllOraclesRequestProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryAllOraclesRequest",
      value: QueryAllOraclesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclesResponse(): QueryAllOraclesResponse {
  return {
    oracles: []
  };
}
export const QueryAllOraclesResponse = {
  typeUrl: "/stride.icaoracle.QueryAllOraclesResponse",
  encode(message: QueryAllOraclesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllOraclesResponse>): QueryAllOraclesResponse {
    const message = createBaseQueryAllOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllOraclesResponseAmino): QueryAllOraclesResponse {
    const message = createBaseQueryAllOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllOraclesResponse): QueryAllOraclesResponseAmino {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e ? Oracle.toAmino(e) : undefined);
    } else {
      obj.oracles = message.oracles;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclesResponseAminoMsg): QueryAllOraclesResponse {
    return QueryAllOraclesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclesResponseProtoMsg): QueryAllOraclesResponse {
    return QueryAllOraclesResponse.decode(message.value);
  },
  toProto(message: QueryAllOraclesResponse): Uint8Array {
    return QueryAllOraclesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclesResponse): QueryAllOraclesResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryAllOraclesResponse",
      value: QueryAllOraclesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveOraclesRequest(): QueryActiveOraclesRequest {
  return {
    active: false
  };
}
export const QueryActiveOraclesRequest = {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest",
  encode(message: QueryActiveOraclesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveOraclesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryActiveOraclesRequest>): QueryActiveOraclesRequest {
    const message = createBaseQueryActiveOraclesRequest();
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: QueryActiveOraclesRequestAmino): QueryActiveOraclesRequest {
    const message = createBaseQueryActiveOraclesRequest();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: QueryActiveOraclesRequest): QueryActiveOraclesRequestAmino {
    const obj: any = {};
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: QueryActiveOraclesRequestAminoMsg): QueryActiveOraclesRequest {
    return QueryActiveOraclesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveOraclesRequestProtoMsg): QueryActiveOraclesRequest {
    return QueryActiveOraclesRequest.decode(message.value);
  },
  toProto(message: QueryActiveOraclesRequest): Uint8Array {
    return QueryActiveOraclesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveOraclesRequest): QueryActiveOraclesRequestProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest",
      value: QueryActiveOraclesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveOraclesResponse(): QueryActiveOraclesResponse {
  return {
    oracles: []
  };
}
export const QueryActiveOraclesResponse = {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse",
  encode(message: QueryActiveOraclesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveOraclesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryActiveOraclesResponse>): QueryActiveOraclesResponse {
    const message = createBaseQueryActiveOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryActiveOraclesResponseAmino): QueryActiveOraclesResponse {
    const message = createBaseQueryActiveOraclesResponse();
    message.oracles = object.oracles?.map(e => Oracle.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryActiveOraclesResponse): QueryActiveOraclesResponseAmino {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e ? Oracle.toAmino(e) : undefined);
    } else {
      obj.oracles = message.oracles;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveOraclesResponseAminoMsg): QueryActiveOraclesResponse {
    return QueryActiveOraclesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveOraclesResponseProtoMsg): QueryActiveOraclesResponse {
    return QueryActiveOraclesResponse.decode(message.value);
  },
  toProto(message: QueryActiveOraclesResponse): Uint8Array {
    return QueryActiveOraclesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveOraclesResponse): QueryActiveOraclesResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse",
      value: QueryActiveOraclesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return {
    metricKey: "",
    oracleChainId: ""
  };
}
export const QueryMetricsRequest = {
  typeUrl: "/stride.icaoracle.QueryMetricsRequest",
  encode(message: QueryMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricKey !== "") {
      writer.uint32(10).string(message.metricKey);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryMetricsRequest>): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    message.metricKey = object.metricKey ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object: QueryMetricsRequestAmino): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    if (object.metric_key !== undefined && object.metric_key !== null) {
      message.metricKey = object.metric_key;
    }
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message: QueryMetricsRequest): QueryMetricsRequestAmino {
    const obj: any = {};
    obj.metric_key = message.metricKey === "" ? undefined : message.metricKey;
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object: QueryMetricsRequestAminoMsg): QueryMetricsRequest {
    return QueryMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetricsRequestProtoMsg): QueryMetricsRequest {
    return QueryMetricsRequest.decode(message.value);
  },
  toProto(message: QueryMetricsRequest): Uint8Array {
    return QueryMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMetricsRequest): QueryMetricsRequestProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryMetricsRequest",
      value: QueryMetricsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return {
    metrics: []
  };
}
export const QueryMetricsResponse = {
  typeUrl: "/stride.icaoracle.QueryMetricsResponse",
  encode(message: QueryMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryMetricsResponse>): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMetricsResponseAmino): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMetricsResponse): QueryMetricsResponseAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? Metric.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMetricsResponseAminoMsg): QueryMetricsResponse {
    return QueryMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetricsResponseProtoMsg): QueryMetricsResponse {
    return QueryMetricsResponse.decode(message.value);
  },
  toProto(message: QueryMetricsResponse): Uint8Array {
    return QueryMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMetricsResponse): QueryMetricsResponseProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.QueryMetricsResponse",
      value: QueryMetricsResponse.encode(message).finish()
    };
  }
};