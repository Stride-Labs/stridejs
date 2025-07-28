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
var timestamp_exports = {};
__export(timestamp_exports, {
  Timestamp: () => Timestamp
});
module.exports = __toCommonJS(timestamp_exports);
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseTimestamp() {
  return {
    seconds: BigInt(0),
    nanos: 0
  };
}
const Timestamp = {
  typeUrl: "/google.protobuf.Timestamp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.seconds !== BigInt(0)) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;
        case 2:
          message.nanos = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTimestamp();
    message.seconds = object.seconds !== void 0 && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
    message.nanos = object.nanos ?? 0;
    return message;
  },
  fromAmino(object) {
    return (0, import_helpers.fromJsonTimestamp)(object);
  },
  toAmino(message) {
    return (0, import_helpers.fromTimestamp)(message).toISOString().replace(/\.\d+Z$/, "Z");
  },
  fromAminoMsg(object) {
    return Timestamp.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Timestamp.decode(message.value);
  },
  toProto(message) {
    return Timestamp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Timestamp",
      value: Timestamp.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Timestamp
};
