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
  LegacyAminoPubKey: () => LegacyAminoPubKey
});
module.exports = __toCommonJS(keys_exports);
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
function createBaseLegacyAminoPubKey() {
  return {
    threshold: 0,
    publicKeys: []
  };
}
const LegacyAminoPubKey = {
  typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      import_any.Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;
        case 2:
          message.publicKeys.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map((e) => import_any.Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseLegacyAminoPubKey();
    if (object.threshold !== void 0 && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    message.publicKeys = object.public_keys?.map((e) => import_any.Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.threshold = message.threshold === 0 ? void 0 : message.threshold;
    if (message.publicKeys) {
      obj.public_keys = message.publicKeys.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.public_keys = message.publicKeys;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return LegacyAminoPubKey.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "tendermint/PubKeyMultisigThreshold",
      value: LegacyAminoPubKey.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return LegacyAminoPubKey.decode(message.value);
  },
  toProto(message) {
    return LegacyAminoPubKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: LegacyAminoPubKey.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  LegacyAminoPubKey
};
