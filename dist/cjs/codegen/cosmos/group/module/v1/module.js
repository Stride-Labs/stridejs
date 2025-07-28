"use strict";
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
var import_duration = require("../../../../google/protobuf/duration");
var import_binary = require("../../../../binary");
function createBaseModule() {
  return {
    maxExecutionPeriod: import_duration.Duration.fromPartial({}),
    maxMetadataLen: BigInt(0)
  };
}
const Module = {
  typeUrl: "/cosmos.group.module.v1.Module",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.maxExecutionPeriod !== void 0) {
      import_duration.Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxMetadataLen);
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
          message.maxExecutionPeriod = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = reader.uint64();
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
    message.maxExecutionPeriod = object.maxExecutionPeriod !== void 0 && object.maxExecutionPeriod !== null ? import_duration.Duration.fromPartial(object.maxExecutionPeriod) : void 0;
    message.maxMetadataLen = object.maxMetadataLen !== void 0 && object.maxMetadataLen !== null ? BigInt(object.maxMetadataLen.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.max_execution_period !== void 0 && object.max_execution_period !== null) {
      message.maxExecutionPeriod = import_duration.Duration.fromAmino(object.max_execution_period);
    }
    if (object.max_metadata_len !== void 0 && object.max_metadata_len !== null) {
      message.maxMetadataLen = BigInt(object.max_metadata_len);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_execution_period = message.maxExecutionPeriod ? import_duration.Duration.toAmino(message.maxExecutionPeriod) : import_duration.Duration.toAmino(import_duration.Duration.fromPartial({}));
    obj.max_metadata_len = message.maxMetadataLen !== BigInt(0) ? message.maxMetadataLen?.toString() : void 0;
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
      typeUrl: "/cosmos.group.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
