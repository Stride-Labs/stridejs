import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    maxMetadataLen: BigInt(0),
    authority: ""
  };
}
const Module = {
  typeUrl: "/cosmos.gov.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxMetadataLen);
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
          message.maxMetadataLen = reader.uint64();
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
    message.maxMetadataLen = object.maxMetadataLen !== void 0 && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt(0);
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.max_metadata_len !== void 0 && object.max_metadata_len !== null) {
      message.maxMetadataLen = BigInt(object.max_metadata_len);
    }
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_metadata_len = message.maxMetadataLen !== BigInt(0) ? message.maxMetadataLen?.toString() : void 0;
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
      typeUrl: "/cosmos.gov.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
export {
  Module
};
