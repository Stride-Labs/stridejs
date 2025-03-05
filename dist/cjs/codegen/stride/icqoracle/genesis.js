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
var import_icqoracle = require("./icqoracle");
var import_binary = require("../../binary");
function createBaseGenesisState() {
  return {
    params: import_icqoracle.Params.fromPartial({}),
    tokenPrices: []
  };
}
const GenesisState = {
  typeUrl: "/stride.icqoracle.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_icqoracle.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPrices) {
      import_icqoracle.TokenPrice.encode(v, writer.uint32(18).fork()).ldelim();
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
        case 1:
          message.params = import_icqoracle.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPrices.push(import_icqoracle.TokenPrice.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_icqoracle.Params.fromPartial(object.params) : void 0;
    message.tokenPrices = object.tokenPrices?.map((e) => import_icqoracle.TokenPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_icqoracle.Params.fromAmino(object.params);
    }
    message.tokenPrices = object.token_prices?.map((e) => import_icqoracle.TokenPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_icqoracle.Params.toAmino(message.params) : void 0;
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map((e) => e ? import_icqoracle.TokenPrice.toAmino(e) : void 0);
    } else {
      obj.token_prices = message.tokenPrices;
    }
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
      typeUrl: "/stride.icqoracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisState
});
