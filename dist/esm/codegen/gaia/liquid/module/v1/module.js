import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    authority: "",
    bech32PrefixValidator: "",
    bech32PrefixConsensus: ""
  };
}
const Module = {
  typeUrl: "/gaia.liquid.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bech32PrefixValidator !== "") {
      writer.uint32(18).string(message.bech32PrefixValidator);
    }
    if (message.bech32PrefixConsensus !== "") {
      writer.uint32(26).string(message.bech32PrefixConsensus);
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
          message.authority = reader.string();
          break;
        case 2:
          message.bech32PrefixValidator = reader.string();
          break;
        case 3:
          message.bech32PrefixConsensus = reader.string();
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
    message.authority = object.authority ?? "";
    message.bech32PrefixValidator = object.bech32PrefixValidator ?? "";
    message.bech32PrefixConsensus = object.bech32PrefixConsensus ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.bech32_prefix_validator !== void 0 && object.bech32_prefix_validator !== null) {
      message.bech32PrefixValidator = object.bech32_prefix_validator;
    }
    if (object.bech32_prefix_consensus !== void 0 && object.bech32_prefix_consensus !== null) {
      message.bech32PrefixConsensus = object.bech32_prefix_consensus;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.bech32_prefix_validator = message.bech32PrefixValidator === "" ? void 0 : message.bech32PrefixValidator;
    obj.bech32_prefix_consensus = message.bech32PrefixConsensus === "" ? void 0 : message.bech32PrefixConsensus;
    return obj;
  },
  fromAminoMsg(object) {
    return Module.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Module.decode(message.value);
  },
  toProto(message) {
    return Module.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
export {
  Module
};
