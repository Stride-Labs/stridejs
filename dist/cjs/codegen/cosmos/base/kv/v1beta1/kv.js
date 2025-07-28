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
var kv_exports = {};
__export(kv_exports, {
  Pair: () => Pair,
  Pairs: () => Pairs
});
module.exports = __toCommonJS(kv_exports);
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBasePairs() {
  return {
    pairs: []
  };
}
const Pairs = {
  typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.pairs) {
      Pair.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePairs();
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePairs();
    message.pairs = object.pairs?.map((e) => Pair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? Pair.toAmino(e) : void 0);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Pairs.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Pairs",
      value: Pairs.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Pairs.decode(message.value);
  },
  toProto(message) {
    return Pairs.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.kv.v1beta1.Pairs",
      value: Pairs.encode(message).finish()
    };
  }
};
function createBasePair() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
const Pair = {
  typeUrl: "/cosmos.base.kv.v1beta1.Pair",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
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
    const message = createBasePair();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePair();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Pair.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Pair",
      value: Pair.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Pair.decode(message.value);
  },
  toProto(message) {
    return Pair.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.kv.v1beta1.Pair",
      value: Pair.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
