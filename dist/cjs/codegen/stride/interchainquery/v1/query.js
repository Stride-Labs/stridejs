"use strict";
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
  QueryPendingQueriesRequest: () => QueryPendingQueriesRequest,
  QueryPendingQueriesResponse: () => QueryPendingQueriesResponse
});
module.exports = __toCommonJS(query_exports);
var import_genesis = require("./genesis");
var import_binary = require("../../../binary");
function createBaseQueryPendingQueriesRequest() {
  return {};
}
const QueryPendingQueriesRequest = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesRequest();
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
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPendingQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryPendingQueriesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPendingQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
      value: QueryPendingQueriesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingQueriesResponse() {
  return {
    pendingQueries: []
  };
}
const QueryPendingQueriesResponse = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.pendingQueries) {
      import_genesis.Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingQueries.push(import_genesis.Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pendingQueries?.map((e) => import_genesis.Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pending_queries?.map((e) => import_genesis.Query.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pendingQueries) {
      obj.pending_queries = message.pendingQueries.map((e) => e ? import_genesis.Query.toAmino(e) : void 0);
    } else {
      obj.pending_queries = message.pendingQueries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPendingQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryPendingQueriesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPendingQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
      value: QueryPendingQueriesResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
