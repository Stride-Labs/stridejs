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
var hd_exports = {};
__export(hd_exports, {
  BIP44Params: () => BIP44Params
});
module.exports = __toCommonJS(hd_exports);
var import_binary = require("../../../../binary");
function createBaseBIP44Params() {
  return {
    purpose: 0,
    coinType: 0,
    account: 0,
    change: false,
    addressIndex: 0
  };
}
const BIP44Params = {
  typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coinType !== 0) {
      writer.uint32(16).uint32(message.coinType);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.addressIndex !== 0) {
      writer.uint32(40).uint32(message.addressIndex);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purpose = reader.uint32();
          break;
        case 2:
          message.coinType = reader.uint32();
          break;
        case 3:
          message.account = reader.uint32();
          break;
        case 4:
          message.change = reader.bool();
          break;
        case 5:
          message.addressIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBIP44Params();
    message.purpose = object.purpose ?? 0;
    message.coinType = object.coinType ?? 0;
    message.account = object.account ?? 0;
    message.change = object.change ?? false;
    message.addressIndex = object.addressIndex ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBIP44Params();
    if (object.purpose !== void 0 && object.purpose !== null) {
      message.purpose = object.purpose;
    }
    if (object.coin_type !== void 0 && object.coin_type !== null) {
      message.coinType = object.coin_type;
    }
    if (object.account !== void 0 && object.account !== null) {
      message.account = object.account;
    }
    if (object.change !== void 0 && object.change !== null) {
      message.change = object.change;
    }
    if (object.address_index !== void 0 && object.address_index !== null) {
      message.addressIndex = object.address_index;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.purpose = message.purpose === 0 ? void 0 : message.purpose;
    obj.coin_type = message.coinType === 0 ? void 0 : message.coinType;
    obj.account = message.account === 0 ? void 0 : message.account;
    obj.change = message.change === false ? void 0 : message.change;
    obj.address_index = message.addressIndex === 0 ? void 0 : message.addressIndex;
    return obj;
  },
  fromAminoMsg(object) {
    return BIP44Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "crypto/keys/hd/BIP44Params",
      value: BIP44Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BIP44Params.decode(message.value);
  },
  toProto(message) {
    return BIP44Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
      value: BIP44Params.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BIP44Params
});
