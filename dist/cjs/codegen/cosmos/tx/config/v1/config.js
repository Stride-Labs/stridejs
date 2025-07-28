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
var config_exports = {};
__export(config_exports, {
  Config: () => Config
});
module.exports = __toCommonJS(config_exports);
var import_binary = require("../../../../binary");
function createBaseConfig() {
  return {
    skipAnteHandler: false,
    skipPostHandler: false
  };
}
const Config = {
  typeUrl: "/cosmos.tx.config.v1.Config",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.skipAnteHandler === true) {
      writer.uint32(8).bool(message.skipAnteHandler);
    }
    if (message.skipPostHandler === true) {
      writer.uint32(16).bool(message.skipPostHandler);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skipAnteHandler = reader.bool();
          break;
        case 2:
          message.skipPostHandler = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConfig();
    message.skipAnteHandler = object.skipAnteHandler ?? false;
    message.skipPostHandler = object.skipPostHandler ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseConfig();
    if (object.skip_ante_handler !== void 0 && object.skip_ante_handler !== null) {
      message.skipAnteHandler = object.skip_ante_handler;
    }
    if (object.skip_post_handler !== void 0 && object.skip_post_handler !== null) {
      message.skipPostHandler = object.skip_post_handler;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.skip_ante_handler = message.skipAnteHandler === false ? void 0 : message.skipAnteHandler;
    obj.skip_post_handler = message.skipPostHandler === false ? void 0 : message.skipPostHandler;
    return obj;
  },
  fromAminoMsg(object) {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Config.decode(message.value);
  },
  toProto(message) {
    return Config.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.config.v1.Config",
      value: Config.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
