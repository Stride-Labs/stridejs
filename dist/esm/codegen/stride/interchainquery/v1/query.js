import { Query } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryPendingQueriesRequest() {
  return {};
}
const QueryPendingQueriesRequest = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.pendingQueries) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingQueries.push(Query.decode(reader, reader.uint32()));
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
    message.pendingQueries = object.pendingQueries?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pending_queries?.map((e) => Query.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pendingQueries) {
      obj.pending_queries = message.pendingQueries.map((e) => e ? Query.toAmino(e) : void 0);
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
export {
  QueryPendingQueriesRequest,
  QueryPendingQueriesResponse
};
