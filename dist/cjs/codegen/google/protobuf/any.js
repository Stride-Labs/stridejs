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
var any_exports = {};
__export(any_exports, {
  Any: () => Any
});
module.exports = __toCommonJS(any_exports);
var import_binary = require("../../binary");
function createBaseAny() {
  return {
    $typeUrl: "/google.protobuf.Any",
    typeUrl: "",
    value: new Uint8Array()
  };
}
const Any = {
  typeUrl: "/google.protobuf.Any",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAny();
    message.typeUrl = object.typeUrl ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      typeUrl: object.type,
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return Any.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Any.decode(message.value);
  },
  toProto(message) {
    return Any.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Any",
      value: Any.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
