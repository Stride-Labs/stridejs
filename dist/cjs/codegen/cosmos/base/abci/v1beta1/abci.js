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
var abci_exports = {};
__export(abci_exports, {
  ABCIMessageLog: () => ABCIMessageLog,
  Attribute: () => Attribute,
  GasInfo: () => GasInfo,
  MsgData: () => MsgData,
  Result: () => Result,
  SearchTxsResult: () => SearchTxsResult,
  SimulationResponse: () => SimulationResponse,
  StringEvent: () => StringEvent,
  TxMsgData: () => TxMsgData,
  TxResponse: () => TxResponse
});
module.exports = __toCommonJS(abci_exports);
var import_any = require("../../../../google/protobuf/any");
var import_types = require("../../../../tendermint/abci/types");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseTxResponse() {
  return {
    height: BigInt(0),
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    tx: void 0,
    timestamp: "",
    events: []
  };
}
const TxResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== void 0) {
      import_any.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      import_types.Event.encode(v, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64();
          break;
        case 10:
          message.gasUsed = reader.int64();
          break;
        case 11:
          message.tx = import_any.Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(import_types.Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxResponse();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.tx = object.tx !== void 0 && object.tx !== null ? import_any.Any.fromPartial(object.tx) : void 0;
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map((e) => import_types.Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxResponse();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.txhash !== void 0 && object.txhash !== null) {
      message.txhash = object.txhash;
    }
    if (object.codespace !== void 0 && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.code !== void 0 && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = object.data;
    }
    if (object.raw_log !== void 0 && object.raw_log !== null) {
      message.rawLog = object.raw_log;
    }
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromAmino(e)) || [];
    if (object.info !== void 0 && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== void 0 && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== void 0 && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = import_any.Any.fromAmino(object.tx);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    message.events = object.events?.map((e) => import_types.Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.txhash = message.txhash === "" ? void 0 : message.txhash;
    obj.codespace = message.codespace === "" ? void 0 : message.codespace;
    obj.code = message.code === 0 ? void 0 : message.code;
    obj.data = message.data === "" ? void 0 : message.data;
    obj.raw_log = message.rawLog === "" ? void 0 : message.rawLog;
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? ABCIMessageLog.toAmino(e) : void 0);
    } else {
      obj.logs = message.logs;
    }
    obj.info = message.info === "" ? void 0 : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : void 0;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : void 0;
    obj.tx = message.tx ? import_any.Any.toAmino(message.tx) : void 0;
    obj.timestamp = message.timestamp === "" ? void 0 : message.timestamp;
    if (message.events) {
      obj.events = message.events.map((e) => e ? import_types.Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxResponse",
      value: TxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxResponse.decode(message.value);
  },
  toProto(message) {
    return TxResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
      value: TxResponse.encode(message).finish()
    };
  }
};
function createBaseABCIMessageLog() {
  return {
    msgIndex: 0,
    log: "",
    events: []
  };
}
const ABCIMessageLog = {
  typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => StringEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseABCIMessageLog();
    if (object.msg_index !== void 0 && object.msg_index !== null) {
      message.msgIndex = object.msg_index;
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map((e) => StringEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.msg_index = message.msgIndex === 0 ? void 0 : message.msgIndex;
    obj.log = message.log === "" ? void 0 : message.log;
    if (message.events) {
      obj.events = message.events.map((e) => e ? StringEvent.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ABCIMessageLog.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ABCIMessageLog",
      value: ABCIMessageLog.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ABCIMessageLog.decode(message.value);
  },
  toProto(message) {
    return ABCIMessageLog.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
      value: ABCIMessageLog.encode(message).finish()
    };
  }
};
function createBaseStringEvent() {
  return {
    type: "",
    attributes: []
  };
}
const StringEvent = {
  typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseStringEvent();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map((e) => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === "" ? void 0 : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toAmino(e) : void 0);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return StringEvent.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StringEvent",
      value: StringEvent.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StringEvent.decode(message.value);
  },
  toProto(message) {
    return StringEvent.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
      value: StringEvent.encode(message).finish()
    };
  }
};
function createBaseAttribute() {
  return {
    key: "",
    value: ""
  };
}
const Attribute = {
  typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAttribute();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value === "" ? void 0 : message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return Attribute.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Attribute",
      value: Attribute.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Attribute.decode(message.value);
  },
  toProto(message) {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
function createBaseGasInfo() {
  return {
    gasWanted: BigInt(0),
    gasUsed: BigInt(0)
  };
}
const GasInfo = {
  typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64();
          break;
        case 2:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGasInfo();
    message.gasWanted = object.gasWanted !== void 0 && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== void 0 && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGasInfo();
    if (object.gas_wanted !== void 0 && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== void 0 && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : void 0;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GasInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GasInfo",
      value: GasInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GasInfo.decode(message.value);
  },
  toProto(message) {
    return GasInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
      value: GasInfo.encode(message).finish()
    };
  }
};
function createBaseResult() {
  return {
    data: new Uint8Array(),
    log: "",
    events: []
  };
}
const Result = {
  typeUrl: "/cosmos.base.abci.v1beta1.Result",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      import_types.Event.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(import_types.Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => import_types.Event.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseResult();
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    if (object.log !== void 0 && object.log !== null) {
      message.log = object.log;
    }
    message.events = object.events?.map((e) => import_types.Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    obj.log = message.log === "" ? void 0 : message.log;
    if (message.events) {
      obj.events = message.events.map((e) => e ? import_types.Event.toAmino(e) : void 0);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Result.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Result",
      value: Result.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Result.decode(message.value);
  },
  toProto(message) {
    return Result.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.Result",
      value: Result.encode(message).finish()
    };
  }
};
function createBaseSimulationResponse() {
  return {
    gasInfo: GasInfo.fromPartial({}),
    result: void 0
  };
}
const SimulationResponse = {
  typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.gasInfo !== void 0) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== void 0) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
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
    const message = createBaseSimulationResponse();
    message.gasInfo = object.gasInfo !== void 0 && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : void 0;
    message.result = object.result !== void 0 && object.result !== null ? Result.fromPartial(object.result) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimulationResponse();
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
    return SimulationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SimulationResponse",
      value: SimulationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SimulationResponse.decode(message.value);
  },
  toProto(message) {
    return SimulationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
      value: SimulationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgData() {
  return {
    msgType: "",
    data: new Uint8Array()
  };
}
const MsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgData();
    if (object.msg_type !== void 0 && object.msg_type !== null) {
      message.msgType = object.msg_type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.msg_type = message.msgType === "" ? void 0 : message.msgType;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgData",
      value: MsgData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgData.decode(message.value);
  },
  toProto(message) {
    return MsgData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
      value: MsgData.encode(message).finish()
    };
  }
};
function createBaseTxMsgData() {
  return {
    data: []
  };
}
const TxMsgData = {
  typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.data) {
      MsgData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? MsgData.toAmino(e) : void 0);
    } else {
      obj.data = message.data;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxMsgData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxMsgData",
      value: TxMsgData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxMsgData.decode(message.value);
  },
  toProto(message) {
    return TxMsgData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
      value: TxMsgData.encode(message).finish()
    };
  }
};
function createBaseSearchTxsResult() {
  return {
    totalCount: BigInt(0),
    count: BigInt(0),
    pageNumber: BigInt(0),
    pageTotal: BigInt(0),
    limit: BigInt(0),
    txs: []
  };
}
const SearchTxsResult = {
  typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.pageNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (message.pageTotal !== BigInt(0)) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64();
          break;
        case 2:
          message.count = reader.uint64();
          break;
        case 3:
          message.pageNumber = reader.uint64();
          break;
        case 4:
          message.pageTotal = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSearchTxsResult();
    message.totalCount = object.totalCount !== void 0 && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.count = object.count !== void 0 && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.pageNumber = object.pageNumber !== void 0 && object.pageNumber !== null ? BigInt(object.pageNumber.toString()) : BigInt(0);
    message.pageTotal = object.pageTotal !== void 0 && object.pageTotal !== null ? BigInt(object.pageTotal.toString()) : BigInt(0);
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSearchTxsResult();
    if (object.total_count !== void 0 && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.count !== void 0 && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.page_number !== void 0 && object.page_number !== null) {
      message.pageNumber = BigInt(object.page_number);
    }
    if (object.page_total !== void 0 && object.page_total !== null) {
      message.pageTotal = BigInt(object.page_total);
    }
    if (object.limit !== void 0 && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    message.txs = object.txs?.map((e) => TxResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_count = message.totalCount ? message.totalCount?.toString() : "0";
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : void 0;
    obj.page_number = message.pageNumber ? message.pageNumber?.toString() : "0";
    obj.page_total = message.pageTotal ? message.pageTotal?.toString() : "0";
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : void 0;
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? TxResponse.toAmino(e) : void 0);
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SearchTxsResult.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SearchTxsResult",
      value: SearchTxsResult.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SearchTxsResult.decode(message.value);
  },
  toProto(message) {
    return SearchTxsResult.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
      value: SearchTxsResult.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ABCIMessageLog,
  Attribute,
  GasInfo,
  MsgData,
  Result,
  SearchTxsResult,
  SimulationResponse,
  StringEvent,
  TxMsgData,
  TxResponse
});
