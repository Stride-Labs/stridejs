import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface CallbackData {
  callbackKey: string;
  portId: string;
  channelId: string;
  sequence: Long;
  callbackId: string;
  callbackArgs: Uint8Array;
}
export interface CallbackDataSDKType {
  callback_key: string;
  port_id: string;
  channel_id: string;
  sequence: Long;
  callback_id: string;
  callback_args: Uint8Array;
}

function createBaseCallbackData(): CallbackData {
  return {
    callbackKey: "",
    portId: "",
    channelId: "",
    sequence: Long.UZERO,
    callbackId: "",
    callbackArgs: new Uint8Array()
  };
}

export const CallbackData = {
  encode(message: CallbackData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CallbackData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.sequence = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<CallbackData>): CallbackData {
    const message = createBaseCallbackData();
    message.callbackKey = object.callbackKey ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.callbackId = object.callbackId ?? "";
    message.callbackArgs = object.callbackArgs ?? new Uint8Array();
    return message;
  }

};