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
var params_exports = {};
__export(params_exports, {
  Params: () => Params
});
module.exports = __toCommonJS(params_exports);
var import_binary = require("../../binary");
function createBaseParams() {
  return {
    stakeibcActive: false,
    claimActive: false
  };
}
const Params = {
  typeUrl: "/stride.autopilot.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.stakeibcActive === true) {
      writer.uint32(8).bool(message.stakeibcActive);
    }
    if (message.claimActive === true) {
      writer.uint32(16).bool(message.claimActive);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeibcActive = reader.bool();
          break;
        case 2:
          message.claimActive = reader.bool();
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
    message.stakeibcActive = object.stakeibcActive ?? false;
    message.claimActive = object.claimActive ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.stakeibc_active !== void 0 && object.stakeibc_active !== null) {
      message.stakeibcActive = object.stakeibc_active;
    }
    if (object.claim_active !== void 0 && object.claim_active !== null) {
      message.claimActive = object.claim_active;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.stakeibc_active = message.stakeibcActive === false ? void 0 : message.stakeibcActive;
    obj.claim_active = message.claimActive === false ? void 0 : message.claimActive;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.autopilot.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
