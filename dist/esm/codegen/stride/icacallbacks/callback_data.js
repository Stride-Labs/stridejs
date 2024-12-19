import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseCallbackData() {
  return {
    callbackKey: "",
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    callbackId: "",
    callbackArgs: new Uint8Array()
  };
}
const CallbackData = {
  typeUrl: "/stride.icacallbacks.CallbackData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.callbackId !== "") {
      writer.uint32(42).string(message.callbackId);
    }
    if (message.callbackArgs.length !== 0) {
      writer.uint32(50).bytes(message.callbackArgs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCallbackData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackKey = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.sequence = reader.uint64();
          break;
        case 5:
          message.callbackId = reader.string();
          break;
        case 6:
          message.callbackArgs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCallbackData();
    message.callbackKey = object.callbackKey ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.callbackId = object.callbackId ?? "";
    message.callbackArgs = object.callbackArgs ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseCallbackData();
    if (object.callback_key !== void 0 && object.callback_key !== null) {
      message.callbackKey = object.callback_key;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.callback_id !== void 0 && object.callback_id !== null) {
      message.callbackId = object.callback_id;
    }
    if (object.callback_args !== void 0 && object.callback_args !== null) {
      message.callbackArgs = bytesFromBase64(object.callback_args);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.callback_key = message.callbackKey === "" ? void 0 : message.callbackKey;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.callback_id = message.callbackId === "" ? void 0 : message.callbackId;
    obj.callback_args = message.callbackArgs ? base64FromBytes(message.callbackArgs) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CallbackData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CallbackData.decode(message.value);
  },
  toProto(message) {
    return CallbackData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.CallbackData",
      value: CallbackData.encode(message).finish()
    };
  }
};
export {
  CallbackData
};
