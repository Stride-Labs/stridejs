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
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_binary = require("../../binary");
function createBaseGenesisState() {
  return {
    totalUstrdBurned: ""
  };
}
const GenesisState = {
  typeUrl: "/stride.strdburner.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.totalUstrdBurned !== "") {
      writer.uint32(74).string(message.totalUstrdBurned);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.totalUstrdBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.totalUstrdBurned = object.totalUstrdBurned ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.total_ustrd_burned !== void 0 && object.total_ustrd_burned !== null) {
      message.totalUstrdBurned = object.total_ustrd_burned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_ustrd_burned = message.totalUstrdBurned === "" ? void 0 : message.totalUstrdBurned;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
