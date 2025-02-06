var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var query_exports = {};
__export(query_exports, {
  QueryActiveOraclesRequest: () => QueryActiveOraclesRequest,
  QueryActiveOraclesResponse: () => QueryActiveOraclesResponse,
  QueryAllOraclesRequest: () => QueryAllOraclesRequest,
  QueryAllOraclesResponse: () => QueryAllOraclesResponse,
  QueryMetricsRequest: () => QueryMetricsRequest,
  QueryMetricsResponse: () => QueryMetricsResponse,
  QueryOracleRequest: () => QueryOracleRequest,
  QueryOracleResponse: () => QueryOracleResponse
});
module.exports = __toCommonJS(query_exports);
var import_icaoracle = require("./icaoracle");
var import_binary = require("../../binary");
function createBaseQueryOracleRequest() {
  return {
    chainId: ""
  };
}
const QueryOracleRequest = {
  typeUrl: "/stride.icaoracle.QueryOracleRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryOracleRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryOracleRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryOracleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryOracleRequest.decode(message.value);
  },
  toProto(message) {
    return QueryOracleRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryOracleRequest",
      value: QueryOracleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleResponse() {
  return {
    oracle: void 0
  };
}
const QueryOracleResponse = {
  typeUrl: "/stride.icaoracle.QueryOracleResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.oracle !== void 0) {
      import_icaoracle.Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracle = import_icaoracle.Oracle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryOracleResponse();
    message.oracle = object.oracle !== void 0 && object.oracle !== null ? import_icaoracle.Oracle.fromPartial(object.oracle) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryOracleResponse();
    if (object.oracle !== void 0 && object.oracle !== null) {
      message.oracle = import_icaoracle.Oracle.fromAmino(object.oracle);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.oracle = message.oracle ? import_icaoracle.Oracle.toAmino(message.oracle) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryOracleResponse.decode(message.value);
  },
  toProto(message) {
    return QueryOracleResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryOracleResponse",
      value: QueryOracleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclesRequest() {
  return {};
}
const QueryAllOraclesRequest = {
  typeUrl: "/stride.icaoracle.QueryAllOraclesRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseQueryAllOraclesRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryAllOraclesRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllOraclesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllOraclesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllOraclesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryAllOraclesRequest",
      value: QueryAllOraclesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOraclesResponse() {
  return {
    oracles: []
  };
}
const QueryAllOraclesResponse = {
  typeUrl: "/stride.icaoracle.QueryAllOraclesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.oracles) {
      import_icaoracle.Oracle.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(import_icaoracle.Oracle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllOraclesResponse();
    message.oracles = object.oracles?.map((e) => import_icaoracle.Oracle.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllOraclesResponse();
    message.oracles = object.oracles?.map((e) => import_icaoracle.Oracle.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e ? import_icaoracle.Oracle.toAmino(e) : void 0);
    } else {
      obj.oracles = message.oracles;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllOraclesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllOraclesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllOraclesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryAllOraclesResponse",
      value: QueryAllOraclesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveOraclesRequest() {
  return {
    active: false
  };
}
const QueryActiveOraclesRequest = {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryActiveOraclesRequest();
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryActiveOraclesRequest();
    if (object.active !== void 0 && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.active = message.active === false ? void 0 : message.active;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryActiveOraclesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryActiveOraclesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryActiveOraclesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest",
      value: QueryActiveOraclesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveOraclesResponse() {
  return {
    oracles: []
  };
}
const QueryActiveOraclesResponse = {
  typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.oracles) {
      import_icaoracle.Oracle.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveOraclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(import_icaoracle.Oracle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryActiveOraclesResponse();
    message.oracles = object.oracles?.map((e) => import_icaoracle.Oracle.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryActiveOraclesResponse();
    message.oracles = object.oracles?.map((e) => import_icaoracle.Oracle.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e ? import_icaoracle.Oracle.toAmino(e) : void 0);
    } else {
      obj.oracles = message.oracles;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryActiveOraclesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryActiveOraclesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryActiveOraclesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse",
      value: QueryActiveOraclesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMetricsRequest() {
  return {
    metricKey: "",
    oracleChainId: ""
  };
}
const QueryMetricsRequest = {
  typeUrl: "/stride.icaoracle.QueryMetricsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.metricKey !== "") {
      writer.uint32(10).string(message.metricKey);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryMetricsRequest();
    message.metricKey = object.metricKey ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryMetricsRequest();
    if (object.metric_key !== void 0 && object.metric_key !== null) {
      message.metricKey = object.metric_key;
    }
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.metric_key = message.metricKey === "" ? void 0 : message.metricKey;
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryMetricsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryMetricsRequest",
      value: QueryMetricsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMetricsResponse() {
  return {
    metrics: []
  };
}
const QueryMetricsResponse = {
  typeUrl: "/stride.icaoracle.QueryMetricsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.metrics) {
      import_icaoracle.Metric.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(import_icaoracle.Metric.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map((e) => import_icaoracle.Metric.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map((e) => import_icaoracle.Metric.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) => e ? import_icaoracle.Metric.toAmino(e) : void 0);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryMetricsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.QueryMetricsResponse",
      value: QueryMetricsResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryActiveOraclesRequest,
  QueryActiveOraclesResponse,
  QueryAllOraclesRequest,
  QueryAllOraclesResponse,
  QueryMetricsRequest,
  QueryMetricsResponse,
  QueryOracleRequest,
  QueryOracleResponse
});
