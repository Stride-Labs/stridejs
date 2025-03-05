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
var coin_exports = {};
__export(coin_exports, {
  Coin: () => Coin,
  DecCoin: () => DecCoin,
  DecProto: () => DecProto,
  IntProto: () => IntProto
});
module.exports = __toCommonJS(coin_exports);
var import_binary = require("../../../binary");
function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}
const Coin = {
  typeUrl: "/cosmos.base.v1beta1.Coin",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCoin();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.amount = message.amount ?? "";
    return obj;
  },
  fromAminoMsg(object) {
    return Coin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Coin",
      value: Coin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Coin.decode(message.value);
  },
  toProto(message) {
    return Coin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.Coin",
      value: Coin.encode(message).finish()
    };
  }
};
function createBaseDecCoin() {
  return {
    denom: "",
    amount: ""
  };
}
const DecCoin = {
  typeUrl: "/cosmos.base.v1beta1.DecCoin",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDecCoin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDecCoin();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    return obj;
  },
  fromAminoMsg(object) {
    return DecCoin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecCoin",
      value: DecCoin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DecCoin.decode(message.value);
  },
  toProto(message) {
    return DecCoin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecCoin",
      value: DecCoin.encode(message).finish()
    };
  }
};
function createBaseIntProto() {
  return {
    int: ""
  };
}
const IntProto = {
  typeUrl: "/cosmos.base.v1beta1.IntProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIntProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIntProto();
    message.int = object.int ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseIntProto();
    if (object.int !== void 0 && object.int !== null) {
      message.int = object.int;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.int = message.int === "" ? void 0 : message.int;
    return obj;
  },
  fromAminoMsg(object) {
    return IntProto.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IntProto",
      value: IntProto.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IntProto.decode(message.value);
  },
  toProto(message) {
    return IntProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.IntProto",
      value: IntProto.encode(message).finish()
    };
  }
};
function createBaseDecProto() {
  return {
    dec: ""
  };
}
const DecProto = {
  typeUrl: "/cosmos.base.v1beta1.DecProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDecProto();
    message.dec = object.dec ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDecProto();
    if (object.dec !== void 0 && object.dec !== null) {
      message.dec = object.dec;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.dec = message.dec === "" ? void 0 : message.dec;
    return obj;
  },
  fromAminoMsg(object) {
    return DecProto.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecProto",
      value: DecProto.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DecProto.decode(message.value);
  },
  toProto(message) {
    return DecProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecProto",
      value: DecProto.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Coin,
  DecCoin,
  DecProto,
  IntProto
});
