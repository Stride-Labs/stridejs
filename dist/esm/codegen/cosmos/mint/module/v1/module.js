import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    feeCollectorName: "",
    authority: ""
  };
}
const Module = {
  typeUrl: "/cosmos.mint.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.feeCollectorName !== "") {
      writer.uint32(10).string(message.feeCollectorName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
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
          message.feeCollectorName = reader.string();
          break;
        case 2:
          message.authority = reader.string();
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
    message.feeCollectorName = object.feeCollectorName ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.fee_collector_name !== void 0 && object.fee_collector_name !== null) {
      message.feeCollectorName = object.fee_collector_name;
    }
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fee_collector_name = message.feeCollectorName === "" ? void 0 : message.feeCollectorName;
    obj.authority = message.authority === "" ? void 0 : message.authority;
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
      typeUrl: "/cosmos.mint.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
export {
  Module
};
