import { Height } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseClientState() {
  return {
    latestHeight: Height.fromPartial({})
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.latestHeight !== void 0) {
      Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientState();
    message.latestHeight = object.latestHeight !== void 0 && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientState();
    if (object.latest_height !== void 0 && object.latest_height !== null) {
      message.latestHeight = Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientState.decode(message.value);
  },
  toProto(message) {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
export {
  ClientState
};
