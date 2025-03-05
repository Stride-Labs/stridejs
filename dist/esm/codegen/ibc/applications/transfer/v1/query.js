import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseQueryDenomTraceRequest() {
  return {
    hash: ""
  };
}
const QueryDenomTraceRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomTraceRequest();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash === "" ? void 0 : message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomTraceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomTraceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomTraceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTraceResponse() {
  return {
    denomTrace: void 0
  };
}
const QueryDenomTraceResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.denomTrace !== void 0) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTraceResponse();
    message.denomTrace = object.denomTrace !== void 0 && object.denomTrace !== null ? DenomTrace.fromPartial(object.denomTrace) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomTraceResponse();
    if (object.denom_trace !== void 0 && object.denom_trace !== null) {
      message.denomTrace = DenomTrace.fromAmino(object.denom_trace);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom_trace = message.denomTrace ? DenomTrace.toAmino(message.denomTrace) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomTraceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomTraceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomTraceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTracesRequest() {
  return {
    pagination: void 0
  };
}
const QueryDenomTracesRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomTracesRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomTracesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomTracesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomTracesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomTracesResponse() {
  return {
    denomTraces: [],
    pagination: void 0
  };
}
const QueryDenomTracesResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denomTraces?.map((e) => DenomTrace.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denom_traces?.map((e) => DenomTrace.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map((e) => e ? DenomTrace.toAmino(e) : void 0);
    } else {
      obj.denom_traces = message.denomTraces;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomTracesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomTracesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomTracesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: void 0
  };
}
const QueryParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomHashRequest() {
  return {
    trace: ""
  };
}
const QueryDenomHashRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomHashRequest();
    message.trace = object.trace ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomHashRequest();
    if (object.trace !== void 0 && object.trace !== null) {
      message.trace = object.trace;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.trace = message.trace === "" ? void 0 : message.trace;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomHashRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomHashRequest",
      value: QueryDenomHashRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomHashRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomHashRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
      value: QueryDenomHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomHashResponse() {
  return {
    hash: ""
  };
}
const QueryDenomHashResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomHashResponse();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomHashResponse();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash === "" ? void 0 : message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomHashResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomHashResponse",
      value: QueryDenomHashResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomHashResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomHashResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
      value: QueryDenomHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowAddressRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
const QueryEscrowAddressRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
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
  fromPartial(object) {
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEscrowAddressRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEscrowAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryEscrowAddressRequest",
      value: QueryEscrowAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryEscrowAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEscrowAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
      value: QueryEscrowAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowAddressResponse() {
  return {
    escrowAddress: ""
  };
}
const QueryEscrowAddressResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.escrowAddress !== "") {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = object.escrowAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEscrowAddressResponse();
    if (object.escrow_address !== void 0 && object.escrow_address !== null) {
      message.escrowAddress = object.escrow_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.escrow_address = message.escrowAddress === "" ? void 0 : message.escrowAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEscrowAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryEscrowAddressResponse",
      value: QueryEscrowAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryEscrowAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEscrowAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
      value: QueryEscrowAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalEscrowForDenomRequest() {
  return {
    denom: ""
  };
}
const QueryTotalEscrowForDenomRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalEscrowForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalEscrowForDenomRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalEscrowForDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTotalEscrowForDenomRequest",
      value: QueryTotalEscrowForDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTotalEscrowForDenomRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalEscrowForDenomRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
      value: QueryTotalEscrowForDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalEscrowForDenomResponse() {
  return {
    amount: Coin.fromPartial({})
  };
}
const QueryTotalEscrowForDenomResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalEscrowForDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTotalEscrowForDenomResponse",
      value: QueryTotalEscrowForDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTotalEscrowForDenomResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalEscrowForDenomResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
      value: QueryTotalEscrowForDenomResponse.encode(message).finish()
    };
  }
};
export {
  QueryDenomHashRequest,
  QueryDenomHashResponse,
  QueryDenomTraceRequest,
  QueryDenomTraceResponse,
  QueryDenomTracesRequest,
  QueryDenomTracesResponse,
  QueryEscrowAddressRequest,
  QueryEscrowAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTotalEscrowForDenomRequest,
  QueryTotalEscrowForDenomResponse
};
