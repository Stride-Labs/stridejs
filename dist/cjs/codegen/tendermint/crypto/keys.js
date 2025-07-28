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
var keys_exports = {};
__export(keys_exports, {
  PublicKey: () => PublicKey
});
module.exports = __toCommonJS(keys_exports);
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBasePublicKey() {
  return {
    ed25519: void 0,
    secp256k1: void 0
  };
}
const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.ed25519 !== void 0) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== void 0) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? void 0;
    message.secp256k1 = object.secp256k1 ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePublicKey();
    if (object.ed25519 !== void 0 && object.ed25519 !== null) {
      message.ed25519 = (0, import_helpers.bytesFromBase64)(object.ed25519);
    }
    if (object.secp256k1 !== void 0 && object.secp256k1 !== null) {
      message.secp256k1 = (0, import_helpers.bytesFromBase64)(object.secp256k1);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.ed25519 = message.ed25519 ? (0, import_helpers.base64FromBytes)(message.ed25519) : void 0;
    obj.secp256k1 = message.secp256k1 ? (0, import_helpers.base64FromBytes)(message.secp256k1) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PublicKey.decode(message.value);
  },
  toProto(message) {
    return PublicKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  PublicKey
};
