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
var ibc_exports = {};
__export(ibc_exports, {
  MsgIBCCloseChannel: () => MsgIBCCloseChannel,
  MsgIBCSend: () => MsgIBCSend,
  MsgIBCSendResponse: () => MsgIBCSendResponse
});
module.exports = __toCommonJS(ibc_exports);
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseMsgIBCSend() {
  return {
    channel: "",
    timeoutHeight: BigInt(0),
    timeoutTimestamp: BigInt(0),
    data: new Uint8Array()
  };
}
const MsgIBCSend = {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeoutHeight = reader.uint64();
          break;
        case 5:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 6:
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
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgIBCSend();
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = object.channel;
    }
    if (object.timeout_height !== void 0 && object.timeout_height !== null) {
      message.timeoutHeight = BigInt(object.timeout_height);
    }
    if (object.timeout_timestamp !== void 0 && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel = message.channel === "" ? void 0 : message.channel;
    obj.timeout_height = message.timeoutHeight !== BigInt(0) ? message.timeoutHeight?.toString() : void 0;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : void 0;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgIBCSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgIBCSend",
      value: MsgIBCSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgIBCSend.decode(message.value);
  },
  toProto(message) {
    return MsgIBCSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
      value: MsgIBCSend.encode(message).finish()
    };
  }
};
function createBaseMsgIBCSendResponse() {
  return {
    sequence: BigInt(0)
  };
}
const MsgIBCSendResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCSendResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSendResponse();
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
    const message = createBaseMsgIBCSendResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgIBCSendResponse();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgIBCSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgIBCSendResponse",
      value: MsgIBCSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgIBCSendResponse.decode(message.value);
  },
  toProto(message) {
    return MsgIBCSendResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgIBCSendResponse",
      value: MsgIBCSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIBCCloseChannel() {
  return {
    channel: ""
  };
}
const MsgIBCCloseChannel = {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgIBCCloseChannel();
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel = message.channel === "" ? void 0 : message.channel;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgIBCCloseChannel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgIBCCloseChannel",
      value: MsgIBCCloseChannel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgIBCCloseChannel.decode(message.value);
  },
  toProto(message) {
    return MsgIBCCloseChannel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
      value: MsgIBCCloseChannel.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgIBCCloseChannel,
  MsgIBCSend,
  MsgIBCSendResponse
});
