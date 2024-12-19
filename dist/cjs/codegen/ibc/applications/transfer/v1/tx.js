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
var tx_exports = {};
__export(tx_exports, {
  MsgTransfer: () => MsgTransfer,
  MsgTransferResponse: () => MsgTransferResponse
});
module.exports = __toCommonJS(tx_exports);
var import_coin = require("../../../../cosmos/base/v1beta1/coin");
var import_client = require("../../../core/client/v1/client");
var import_binary = require("../../../../binary");
function createBaseMsgTransfer() {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: import_coin.Coin.fromPartial({}),
    sender: "",
    receiver: "",
    timeoutHeight: import_client.Height.fromPartial({}),
    timeoutTimestamp: BigInt(0),
    memo: ""
  };
}
const MsgTransfer = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== void 0) {
      import_coin.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== void 0) {
      import_client.Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = import_coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 8:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.token = object.token !== void 0 && object.token !== null ? import_coin.Coin.fromPartial(object.token) : void 0;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? import_client.Height.fromPartial(object.timeoutHeight) : void 0;
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTransfer();
    if (object.source_port !== void 0 && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== void 0 && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    if (object.token !== void 0 && object.token !== null) {
      message.token = import_coin.Coin.fromAmino(object.token);
    }
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.timeout_height !== void 0 && object.timeout_height !== null) {
      message.timeoutHeight = import_client.Height.fromAmino(object.timeout_height);
    }
    if (object.timeout_timestamp !== void 0 && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.memo !== void 0 && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.source_port = message.sourcePort === "" ? void 0 : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? void 0 : message.sourceChannel;
    obj.token = message.token ? import_coin.Coin.toAmino(message.token) : void 0;
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    obj.timeout_height = message.timeoutHeight ? import_client.Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp.toString() : void 0;
    obj.memo = message.memo === "" ? void 0 : message.memo;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTransfer.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTransfer",
      value: MsgTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTransfer.decode(message.value);
  },
  toProto(message) {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse() {
  return {
    sequence: BigInt(0)
  };
}
const MsgTransferResponse = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTransferResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTransferResponse();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTransferResponse",
      value: MsgTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgTransfer,
  MsgTransferResponse
});
