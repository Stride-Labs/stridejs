import { BinaryReader, BinaryWriter } from "../../../../../binary";
function createBaseParams() {
  return {
    controllerEnabled: false
  };
}
const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.controllerEnabled === true) {
      writer.uint32(8).bool(message.controllerEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.controllerEnabled = object.controllerEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.controller_enabled !== void 0 && object.controller_enabled !== null) {
      message.controllerEnabled = object.controller_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.controller_enabled = message.controllerEnabled === false ? void 0 : message.controllerEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  Params
};
