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
var types_exports = {};
__export(types_exports, {
  BitArray: () => BitArray
});
module.exports = __toCommonJS(types_exports);
var import_binary = require("../../../binary");
function createBaseBitArray() {
  return {
    bits: BigInt(0),
    elems: []
  };
}
const BitArray = {
  typeUrl: "/tendermint.libs.bits.BitArray",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBitArray();
    message.bits = object.bits !== void 0 && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
    message.elems = object.elems?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseBitArray();
    if (object.bits !== void 0 && object.bits !== null) {
      message.bits = BigInt(object.bits);
    }
    message.elems = object.elems?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bits = message.bits !== BigInt(0) ? message.bits?.toString() : void 0;
    if (message.elems) {
      obj.elems = message.elems.map((e) => e.toString());
    } else {
      obj.elems = message.elems;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return BitArray.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BitArray.decode(message.value);
  },
  toProto(message) {
    return BitArray.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.libs.bits.BitArray",
      value: BitArray.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  BitArray
};
