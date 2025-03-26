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
var module_exports = {};
__export(module_exports, {
  Module: () => Module
});
module.exports = __toCommonJS(module_exports);
var import_binary = require("../../../../binary");
function createBaseModule() {
  return {
    hooksOrder: [],
    authority: "",
    bech32PrefixValidator: "",
    bech32PrefixConsensus: ""
  };
}
const Module = {
  typeUrl: "/cosmos.staking.module.v1.Module",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.hooksOrder) {
      writer.uint32(10).string(v);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    if (message.bech32PrefixValidator !== "") {
      writer.uint32(26).string(message.bech32PrefixValidator);
    }
    if (message.bech32PrefixConsensus !== "") {
      writer.uint32(34).string(message.bech32PrefixConsensus);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hooksOrder.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.bech32PrefixValidator = reader.string();
          break;
        case 4:
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
    message.hooksOrder = object.hooksOrder?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    message.bech32PrefixValidator = object.bech32PrefixValidator ?? "";
    message.bech32PrefixConsensus = object.bech32PrefixConsensus ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    message.hooksOrder = object.hooks_order?.map((e) => e) || [];
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
    if (message.hooksOrder) {
      obj.hooks_order = message.hooksOrder.map((e) => e);
    } else {
      obj.hooks_order = message.hooksOrder;
    }
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.bech32_prefix_validator = message.bech32PrefixValidator === "" ? void 0 : message.bech32PrefixValidator;
    obj.bech32_prefix_consensus = message.bech32PrefixConsensus === "" ? void 0 : message.bech32PrefixConsensus;
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
      typeUrl: "/cosmos.staking.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Module
});
