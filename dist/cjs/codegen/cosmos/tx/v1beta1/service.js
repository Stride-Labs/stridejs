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
var service_exports = {};
__export(service_exports, {
  BroadcastMode: () => BroadcastMode,
  BroadcastModeAmino: () => BroadcastModeAmino,
  BroadcastModeSDKType: () => BroadcastModeSDKType,
  BroadcastTxRequest: () => BroadcastTxRequest,
  BroadcastTxResponse: () => BroadcastTxResponse,
  GetBlockWithTxsRequest: () => GetBlockWithTxsRequest,
  GetBlockWithTxsResponse: () => GetBlockWithTxsResponse,
  GetTxRequest: () => GetTxRequest,
  GetTxResponse: () => GetTxResponse,
  GetTxsEventRequest: () => GetTxsEventRequest,
  GetTxsEventResponse: () => GetTxsEventResponse,
  OrderBy: () => OrderBy,
  OrderByAmino: () => OrderByAmino,
  OrderBySDKType: () => OrderBySDKType,
  SimulateRequest: () => SimulateRequest,
  SimulateResponse: () => SimulateResponse,
  TxDecodeAminoRequest: () => TxDecodeAminoRequest,
  TxDecodeAminoResponse: () => TxDecodeAminoResponse,
  TxDecodeRequest: () => TxDecodeRequest,
  TxDecodeResponse: () => TxDecodeResponse,
  TxEncodeAminoRequest: () => TxEncodeAminoRequest,
  TxEncodeAminoResponse: () => TxEncodeAminoResponse,
  TxEncodeRequest: () => TxEncodeRequest,
  TxEncodeResponse: () => TxEncodeResponse,
  broadcastModeFromJSON: () => broadcastModeFromJSON,
  broadcastModeToJSON: () => broadcastModeToJSON,
  orderByFromJSON: () => orderByFromJSON,
  orderByToJSON: () => orderByToJSON
});
module.exports = __toCommonJS(service_exports);
var import_tx = require("./tx");
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_abci = require("../../base/abci/v1beta1/abci");
var import_types = require("../../../tendermint/types/types");
var import_block = require("../../../tendermint/types/block");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
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
    orderBy: 0,
    page: BigInt(0),
    limit: BigInt(0),
    query: ""
  };
}
const GetTxsEventRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.events) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (message.page !== BigInt(0)) {
      writer.uint32(32).uint64(message.page);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    if (message.query !== "") {
      writer.uint32(50).string(message.query);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
          break;
        case 4:
          message.page = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.query = reader.string();
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
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    message.orderBy = object.orderBy ?? 0;
    message.page = object.page !== void 0 && object.page !== null ? BigInt(object.page.toString()) : BigInt(0);
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.query = object.query ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    if (object.order_by !== void 0 && object.order_by !== null) {
      message.orderBy = object.order_by;
    }
    if (object.page !== void 0 && object.page !== null) {
      message.page = BigInt(object.page);
    }
    if (object.limit !== void 0 && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.query !== void 0 && object.query !== null) {
      message.query = object.query;
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
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    obj.order_by = message.orderBy === 0 ? void 0 : message.orderBy;
    obj.page = message.page !== BigInt(0) ? message.page?.toString() : void 0;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : void 0;
    obj.query = message.query === "" ? void 0 : message.query;
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
    pagination: void 0,
    total: BigInt(0)
  };
}
const GetTxsEventResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.txs) {
      import_tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      import_abci.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(import_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(import_abci.TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = reader.uint64();
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
    message.txs = object.txs?.map((e) => import_tx.Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map((e) => import_abci.TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.total = object.total !== void 0 && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map((e) => import_tx.Tx.fromAmino(e)) || [];
    message.txResponses = object.tx_responses?.map((e) => import_abci.TxResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    if (object.total !== void 0 && object.total !== null) {
      message.total = BigInt(object.total);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? import_tx.Tx.toAmino(e) : void 0);
    } else {
      obj.txs = message.txs;
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map((e) => e ? import_abci.TxResponse.toAmino(e) : void 0);
    } else {
      obj.tx_responses = message.txResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.total = message.total !== BigInt(0) ? message.total?.toString() : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      message.txBytes = (0, import_helpers.bytesFromBase64)(object.tx_bytes);
    }
    if (object.mode !== void 0 && object.mode !== null) {
      message.mode = object.mode;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_bytes = message.txBytes ? (0, import_helpers.base64FromBytes)(message.txBytes) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.txResponse !== void 0) {
      import_abci.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = import_abci.TxResponse.decode(reader, reader.uint32());
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
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? import_abci.TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBroadcastTxResponse();
    if (object.tx_response !== void 0 && object.tx_response !== null) {
      message.txResponse = import_abci.TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_response = message.txResponse ? import_abci.TxResponse.toAmino(message.txResponse) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tx !== void 0) {
      import_tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = import_tx.Tx.decode(reader, reader.uint32());
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
    message.tx = object.tx !== void 0 && object.tx !== null ? import_tx.Tx.fromPartial(object.tx) : void 0;
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimulateRequest();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = import_tx.Tx.fromAmino(object.tx);
    }
    if (object.tx_bytes !== void 0 && object.tx_bytes !== null) {
      message.txBytes = (0, import_helpers.bytesFromBase64)(object.tx_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? import_tx.Tx.toAmino(message.tx) : void 0;
    obj.tx_bytes = message.txBytes ? (0, import_helpers.base64FromBytes)(message.txBytes) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.gasInfo !== void 0) {
      import_abci.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== void 0) {
      import_abci.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = import_abci.GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = import_abci.Result.decode(reader, reader.uint32());
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
    message.gasInfo = object.gasInfo !== void 0 && object.gasInfo !== null ? import_abci.GasInfo.fromPartial(object.gasInfo) : void 0;
    message.result = object.result !== void 0 && object.result !== null ? import_abci.Result.fromPartial(object.result) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimulateResponse();
    if (object.gas_info !== void 0 && object.gas_info !== null) {
      message.gasInfo = import_abci.GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== void 0 && object.result !== null) {
      message.result = import_abci.Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.gas_info = message.gasInfo ? import_abci.GasInfo.toAmino(message.gasInfo) : void 0;
    obj.result = message.result ? import_abci.Result.toAmino(message.result) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tx !== void 0) {
      import_tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== void 0) {
      import_abci.TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = import_tx.Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = import_abci.TxResponse.decode(reader, reader.uint32());
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
    message.tx = object.tx !== void 0 && object.tx !== null ? import_tx.Tx.fromPartial(object.tx) : void 0;
    message.txResponse = object.txResponse !== void 0 && object.txResponse !== null ? import_abci.TxResponse.fromPartial(object.txResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxResponse();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = import_tx.Tx.fromAmino(object.tx);
    }
    if (object.tx_response !== void 0 && object.tx_response !== null) {
      message.txResponse = import_abci.TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? import_tx.Tx.toAmino(message.tx) : void 0;
    obj.tx_response = message.txResponse ? import_abci.TxResponse.toAmino(message.txResponse) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
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
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockWithTxsRequest();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.txs) {
      import_tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== void 0) {
      import_types.BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== void 0) {
      import_block.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(import_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = import_types.BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = import_block.Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
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
    message.txs = object.txs?.map((e) => import_tx.Tx.fromPartial(e)) || [];
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? import_types.BlockID.fromPartial(object.blockId) : void 0;
    message.block = object.block !== void 0 && object.block !== null ? import_block.Block.fromPartial(object.block) : void 0;
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map((e) => import_tx.Tx.fromAmino(e)) || [];
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = import_types.BlockID.fromAmino(object.block_id);
    }
    if (object.block !== void 0 && object.block !== null) {
      message.block = import_block.Block.fromAmino(object.block);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? import_tx.Tx.toAmino(e) : void 0);
    } else {
      obj.txs = message.txs;
    }
    obj.block_id = message.blockId ? import_types.BlockID.toAmino(message.blockId) : void 0;
    obj.block = message.block ? import_block.Block.toAmino(message.block) : void 0;
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
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
function createBaseTxDecodeRequest() {
  return {
    txBytes: new Uint8Array()
  };
}
const TxDecodeRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseTxDecodeRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxDecodeRequest();
    if (object.tx_bytes !== void 0 && object.tx_bytes !== null) {
      message.txBytes = (0, import_helpers.bytesFromBase64)(object.tx_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_bytes = message.txBytes ? (0, import_helpers.base64FromBytes)(message.txBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxDecodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDecodeRequest",
      value: TxDecodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDecodeRequest.decode(message.value);
  },
  toProto(message) {
    return TxDecodeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
      value: TxDecodeRequest.encode(message).finish()
    };
  }
};
function createBaseTxDecodeResponse() {
  return {
    tx: void 0
  };
}
const TxDecodeResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tx !== void 0) {
      import_tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = import_tx.Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== void 0 && object.tx !== null ? import_tx.Tx.fromPartial(object.tx) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxDecodeResponse();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = import_tx.Tx.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? import_tx.Tx.toAmino(message.tx) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxDecodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDecodeResponse",
      value: TxDecodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDecodeResponse.decode(message.value);
  },
  toProto(message) {
    return TxDecodeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
      value: TxDecodeResponse.encode(message).finish()
    };
  }
};
function createBaseTxEncodeRequest() {
  return {
    tx: void 0
  };
}
const TxEncodeRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tx !== void 0) {
      import_tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = import_tx.Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== void 0 && object.tx !== null ? import_tx.Tx.fromPartial(object.tx) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxEncodeRequest();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = import_tx.Tx.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? import_tx.Tx.toAmino(message.tx) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxEncodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxEncodeRequest",
      value: TxEncodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxEncodeRequest.decode(message.value);
  },
  toProto(message) {
    return TxEncodeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
      value: TxEncodeRequest.encode(message).finish()
    };
  }
};
function createBaseTxEncodeResponse() {
  return {
    txBytes: new Uint8Array()
  };
}
const TxEncodeResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseTxEncodeResponse();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxEncodeResponse();
    if (object.tx_bytes !== void 0 && object.tx_bytes !== null) {
      message.txBytes = (0, import_helpers.bytesFromBase64)(object.tx_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_bytes = message.txBytes ? (0, import_helpers.base64FromBytes)(message.txBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxEncodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxEncodeResponse",
      value: TxEncodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxEncodeResponse.decode(message.value);
  },
  toProto(message) {
    return TxEncodeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
      value: TxEncodeResponse.encode(message).finish()
    };
  }
};
function createBaseTxEncodeAminoRequest() {
  return {
    aminoJson: ""
  };
}
const TxEncodeAminoRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxEncodeAminoRequest();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxEncodeAminoRequest();
    if (object.amino_json !== void 0 && object.amino_json !== null) {
      message.aminoJson = object.amino_json;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amino_json = message.aminoJson === "" ? void 0 : message.aminoJson;
    return obj;
  },
  fromAminoMsg(object) {
    return TxEncodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxEncodeAminoRequest.decode(message.value);
  },
  toProto(message) {
    return TxEncodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.encode(message).finish()
    };
  }
};
function createBaseTxEncodeAminoResponse() {
  return {
    aminoBinary: new Uint8Array()
  };
}
const TxEncodeAminoResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxEncodeAminoResponse();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxEncodeAminoResponse();
    if (object.amino_binary !== void 0 && object.amino_binary !== null) {
      message.aminoBinary = (0, import_helpers.bytesFromBase64)(object.amino_binary);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amino_binary = message.aminoBinary ? (0, import_helpers.base64FromBytes)(message.aminoBinary) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxEncodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxEncodeAminoResponse.decode(message.value);
  },
  toProto(message) {
    return TxEncodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.encode(message).finish()
    };
  }
};
function createBaseTxDecodeAminoRequest() {
  return {
    aminoBinary: new Uint8Array()
  };
}
const TxDecodeAminoRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxDecodeAminoRequest();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxDecodeAminoRequest();
    if (object.amino_binary !== void 0 && object.amino_binary !== null) {
      message.aminoBinary = (0, import_helpers.bytesFromBase64)(object.amino_binary);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amino_binary = message.aminoBinary ? (0, import_helpers.base64FromBytes)(message.aminoBinary) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxDecodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDecodeAminoRequest.decode(message.value);
  },
  toProto(message) {
    return TxDecodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.encode(message).finish()
    };
  }
};
function createBaseTxDecodeAminoResponse() {
  return {
    aminoJson: ""
  };
}
const TxDecodeAminoResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxDecodeAminoResponse();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxDecodeAminoResponse();
    if (object.amino_json !== void 0 && object.amino_json !== null) {
      message.aminoJson = object.amino_json;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amino_json = message.aminoJson === "" ? void 0 : message.aminoJson;
    return obj;
  },
  fromAminoMsg(object) {
    return TxDecodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDecodeAminoResponse.decode(message.value);
  },
  toProto(message) {
    return TxDecodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  TxDecodeAminoRequest,
  TxDecodeAminoResponse,
  TxDecodeRequest,
  TxDecodeResponse,
  TxEncodeAminoRequest,
  TxEncodeAminoResponse,
  TxEncodeRequest,
  TxEncodeResponse,
  broadcastModeFromJSON,
  broadcastModeToJSON,
  orderByFromJSON,
  orderByToJSON
});
