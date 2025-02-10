import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    sealKeeper: false
  };
}
const Module = {
  typeUrl: "/cosmos.capability.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sealKeeper === true) {
      writer.uint32(8).bool(message.sealKeeper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sealKeeper = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModule();
    message.sealKeeper = object.sealKeeper ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.seal_keeper !== void 0 && object.seal_keeper !== null) {
      message.sealKeeper = object.seal_keeper;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.seal_keeper = message.sealKeeper === false ? void 0 : message.sealKeeper;
    return obj;
  },
  fromAminoMsg(object) {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Module.decode(message.value);
  },
  toProto(message) {
    return Module.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
export {
  Module
};
