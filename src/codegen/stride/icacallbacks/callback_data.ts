import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
export interface CallbackData {
  callbackKey: string;
  portId: string;
  channelId: string;
  sequence: bigint;
  callbackId: string;
  callbackArgs: Uint8Array;
}
export interface CallbackDataProtoMsg {
  typeUrl: "/stride.icacallbacks.CallbackData";
  value: Uint8Array;
}
export interface CallbackDataAmino {
  callback_key?: string;
  port_id?: string;
  channel_id?: string;
  sequence?: string;
  callback_id?: string;
  callback_args?: string;
}
export interface CallbackDataAminoMsg {
  type: "/stride.icacallbacks.CallbackData";
  value: CallbackDataAmino;
}
export interface CallbackDataSDKType {
  callback_key: string;
  port_id: string;
  channel_id: string;
  sequence: bigint;
  callback_id: string;
  callback_args: Uint8Array;
}
function createBaseCallbackData(): CallbackData {
  return {
    callbackKey: "",
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    callbackId: "",
    callbackArgs: new Uint8Array()
  };
}
export const CallbackData = {
  typeUrl: "/stride.icacallbacks.CallbackData",
  encode(message: CallbackData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<CallbackData>): CallbackData {
    const message = createBaseCallbackData();
    message.callbackKey = object.callbackKey ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.callbackId = object.callbackId ?? "";
    message.callbackArgs = object.callbackArgs ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CallbackDataAmino): CallbackData {
    const message = createBaseCallbackData();
    if (object.callback_key !== undefined && object.callback_key !== null) {
      message.callbackKey = object.callback_key;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.callback_id !== undefined && object.callback_id !== null) {
      message.callbackId = object.callback_id;
    }
    if (object.callback_args !== undefined && object.callback_args !== null) {
      message.callbackArgs = bytesFromBase64(object.callback_args);
    }
    return message;
  },
  toAmino(message: CallbackData): CallbackDataAmino {
    const obj: any = {};
    obj.callback_key = message.callbackKey === "" ? undefined : message.callbackKey;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.callback_id = message.callbackId === "" ? undefined : message.callbackId;
    obj.callback_args = message.callbackArgs ? base64FromBytes(message.callbackArgs) : undefined;
    return obj;
  },
  fromAminoMsg(object: CallbackDataAminoMsg): CallbackData {
    return CallbackData.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackDataProtoMsg): CallbackData {
    return CallbackData.decode(message.value);
  },
  toProto(message: CallbackData): Uint8Array {
    return CallbackData.encode(message).finish();
  },
  toProtoMsg(message: CallbackData): CallbackDataProtoMsg {
    return {
      typeUrl: "/stride.icacallbacks.CallbackData",
      value: CallbackData.encode(message).finish()
    };
  }
};