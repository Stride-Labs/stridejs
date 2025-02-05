import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
var OrderBy = /* @__PURE__ */ ((OrderBy2) => {
  OrderBy2[OrderBy2["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy2[OrderBy2["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy2[OrderBy2["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy2[OrderBy2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy2;
})(OrderBy || {});
const OrderBySDKType = OrderBy;
const OrderByAmino = OrderBy;
function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return 0 /* ORDER_BY_UNSPECIFIED */;
    case 1:
    case "ORDER_BY_ASC":
      return 1 /* ORDER_BY_ASC */;
    case 2:
    case "ORDER_BY_DESC":
      return 2 /* ORDER_BY_DESC */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function orderByToJSON(object) {
  switch (object) {
    case 0 /* ORDER_BY_UNSPECIFIED */:
      return "ORDER_BY_UNSPECIFIED";
    case 1 /* ORDER_BY_ASC */:
      return "ORDER_BY_ASC";
    case 2 /* ORDER_BY_DESC */:
      return "ORDER_BY_DESC";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var BroadcastMode = /* @__PURE__ */ ((BroadcastMode2) => {
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode2[BroadcastMode2["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode2[BroadcastMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode2;
})(BroadcastMode || {});
const BroadcastModeSDKType = BroadcastMode;
const BroadcastModeAmino = BroadcastMode;
function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return 0 /* BROADCAST_MODE_UNSPECIFIED */;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return 1 /* BROADCAST_MODE_BLOCK */;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return 2 /* BROADCAST_MODE_SYNC */;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return 3 /* BROADCAST_MODE_ASYNC */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function broadcastModeToJSON(object) {
  switch (object) {
    case 0 /* BROADCAST_MODE_UNSPECIFIED */:
      return "BROADCAST_MODE_UNSPECIFIED";
    case 1 /* BROADCAST_MODE_BLOCK */:
      return "BROADCAST_MODE_BLOCK";
    case 2 /* BROADCAST_MODE_SYNC */:
      return "BROADCAST_MODE_SYNC";
    case 3 /* BROADCAST_MODE_ASYNC */:
      return "BROADCAST_MODE_ASYNC";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: void 0,
    orderBy: 0
  };
}
const GetTxsEventRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map((e) => e) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.orderBy = object.orderBy ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.order_by !== void 0 && object.order_by !== null) {
      message.orderBy = object.order_by;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.events) {
      obj.events = message.events.map((e) => e);
    } else {
      obj.events = message.events;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    obj.order_by = message.orderBy === 0 ? void 0 : message.orderBy;
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxsEventRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxsEventRequest",
      value: GetTxsEventRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxsEventRequest.decode(message.value);
  },
  toProto(message) {
    return GetTxsEventRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
      value: GetTxsEventRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    txResponses: [],
    pagination: void 0
  };
}
const GetTxsEventResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
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
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map((e) => TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map((e) => Tx.fromAmino(e)) || [];
    message.txResponses = object.tx_responses?.map((e) => TxResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? Tx.toAmino(e) : void 0);
    } else {
      obj.txs = message.txs;
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map((e) => e ? TxResponse.toAmino(e) : void 0);
    } else {
      obj.tx_responses = message.txResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxsEventResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxsEventResponse",
      value: GetTxsEventResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxsEventResponse.decode(message.value);
  },
  toProto(message) {
    return GetTxsEventResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
      value: GetTxsEventResponse.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxRequest() {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
const BroadcastTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBroadcastTxRequest();
    if (object.tx_bytes !== void 0 && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    if (object.mode !== void 0 && object.mode !== null) {
      message.mode = object.mode;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : void 0;
    obj.mode = message.mode === 0 ? void 0 : message.mode;
    return obj;
  },
  fromAminoMsg(object) {
    return BroadcastTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BroadcastTxRequest",
      value: BroadcastTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BroadcastTxRequest.decode(message.value);
  },
  toProto(message) {
    return BroadcastTxRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
      value: BroadcastTxRequest.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxResponse() {
  return {
    txResponse: void 0
  };
}
const BroadcastTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.txResponse !== void 0) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBroadcastTxResponse();
    if (object.tx_response !== void 0 && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BroadcastTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BroadcastTxResponse",
      value: BroadcastTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BroadcastTxResponse.decode(message.value);
  },
  toProto(message) {
    return BroadcastTxResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
      value: BroadcastTxResponse.encode(message).finish()
    };
  }
};
function createBaseSimulateRequest() {
  return {
    tx: void 0,
    txBytes: new Uint8Array()
  };
}
const SimulateRequest = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimulateRequest();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_bytes !== void 0 && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : void 0;
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SimulateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SimulateRequest",
      value: SimulateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SimulateRequest.decode(message.value);
  },
  toProto(message) {
    return SimulateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
      value: SimulateRequest.encode(message).finish()
    };
  }
};
function createBaseSimulateResponse() {
  return {
    gasInfo: void 0,
    result: void 0
  };
}
const SimulateResponse = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.gasInfo !== void 0) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== void 0) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== void 0 && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : void 0;
    message.result = object.result !== void 0 && object.result !== null ? Result.fromPartial(object.result) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimulateResponse();
    if (object.gas_info !== void 0 && object.gas_info !== null) {
      message.gasInfo = GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== void 0 && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : void 0;
    obj.result = message.result ? Result.toAmino(message.result) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SimulateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SimulateResponse",
      value: SimulateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SimulateResponse.decode(message.value);
  },
  toProto(message) {
    return SimulateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
      value: SimulateResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
const GetTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
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
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxRequest();
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
    return GetTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxRequest",
      value: GetTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxRequest.decode(message.value);
  },
  toProto(message) {
    return GetTxRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
      value: GetTxRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxResponse() {
  return {
    tx: void 0,
    txResponse: void 0
  };
}
const GetTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx !== void 0) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== void 0) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== void 0 && object.tx !== null ? Tx.fromPartial(object.tx) : void 0;
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxResponse();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_response !== void 0 && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : void 0;
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxResponse",
      value: GetTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxResponse.decode(message.value);
  },
  toProto(message) {
    return GetTxResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
      value: GetTxResponse.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsRequest() {
  return {
    height: BigInt(0),
    pagination: void 0
  };
}
const GetBlockWithTxsRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
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
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockWithTxsRequest();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetBlockWithTxsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetBlockWithTxsRequest.decode(message.value);
  },
  toProto(message) {
    return GetBlockWithTxsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    blockId: void 0,
    block: void 0,
    pagination: void 0
  };
}
const GetBlockWithTxsResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.txs) {
      Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== void 0) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
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
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? Block.fromPartial(object.block) : void 0;
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map((e) => Tx.fromAmino(e)) || [];
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== void 0 && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? Tx.toAmino(e) : void 0);
    } else {
      obj.txs = message.txs;
    }
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.block = message.block ? Block.toAmino(message.block) : void 0;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetBlockWithTxsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetBlockWithTxsResponse.decode(message.value);
  },
  toProto(message) {
    return GetBlockWithTxsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.encode(message).finish()
    };
  }
};
export {
  BroadcastMode,
  BroadcastModeAmino,
  BroadcastModeSDKType,
  BroadcastTxRequest,
  BroadcastTxResponse,
  GetBlockWithTxsRequest,
  GetBlockWithTxsResponse,
  GetTxRequest,
  GetTxResponse,
  GetTxsEventRequest,
  GetTxsEventResponse,
  OrderBy,
  OrderByAmino,
  OrderBySDKType,
  SimulateRequest,
  SimulateResponse,
  broadcastModeFromJSON,
  broadcastModeToJSON,
  orderByFromJSON,
  orderByToJSON
};
