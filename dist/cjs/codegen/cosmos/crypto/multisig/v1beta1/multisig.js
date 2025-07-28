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
var multisig_exports = {};
__export(multisig_exports, {
  CompactBitArray: () => CompactBitArray,
  MultiSignature: () => MultiSignature
});
module.exports = __toCommonJS(multisig_exports);
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseMultiSignature() {
  return {
    signatures: []
  };
}
const MultiSignature = {
  typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMultiSignature();
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMultiSignature();
    message.signatures = object.signatures?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MultiSignature.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MultiSignature",
      value: MultiSignature.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MultiSignature.decode(message.value);
  },
  toProto(message) {
    return MultiSignature.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
      value: MultiSignature.encode(message).finish()
    };
  }
};
function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}
const CompactBitArray = {
  typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;
        case 2:
          message.elems = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCompactBitArray();
    message.extraBitsStored = object.extraBitsStored ?? 0;
    message.elems = object.elems ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseCompactBitArray();
    if (object.extra_bits_stored !== void 0 && object.extra_bits_stored !== null) {
      message.extraBitsStored = object.extra_bits_stored;
    }
    if (object.elems !== void 0 && object.elems !== null) {
      message.elems = (0, import_helpers.bytesFromBase64)(object.elems);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.extra_bits_stored = message.extraBitsStored === 0 ? void 0 : message.extraBitsStored;
    obj.elems = message.elems ? (0, import_helpers.base64FromBytes)(message.elems) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CompactBitArray.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompactBitArray",
      value: CompactBitArray.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompactBitArray.decode(message.value);
  },
  toProto(message) {
    return CompactBitArray.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
      value: CompactBitArray.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
