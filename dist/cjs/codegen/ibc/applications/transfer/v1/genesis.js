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
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_transfer = require("./transfer");
var import_coin = require("../../../../cosmos/base/v1beta1/coin");
var import_binary = require("../../../../binary");
function createBaseGenesisState() {
  return {
    portId: "",
    denomTraces: [],
    params: import_transfer.Params.fromPartial({}),
    totalEscrowed: []
  };
}
const GenesisState = {
  typeUrl: "/ibc.applications.transfer.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.denomTraces) {
      import_transfer.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== void 0) {
      import_transfer.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalEscrowed) {
      import_coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
          message.portId = reader.string();
          break;
        case 2:
          message.denomTraces.push(import_transfer.DenomTrace.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = import_transfer.Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalEscrowed.push(import_coin.Coin.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.denomTraces = object.denomTraces?.map((e) => import_transfer.DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== void 0 && object.params !== null ? import_transfer.Params.fromPartial(object.params) : void 0;
    message.totalEscrowed = object.totalEscrowed?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.denomTraces = object.denom_traces?.map((e) => import_transfer.DenomTrace.fromAmino(e)) || [];
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_transfer.Params.fromAmino(object.params);
    }
    message.totalEscrowed = object.total_escrowed?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map((e) => e ? import_transfer.DenomTrace.toAmino(e) : void 0);
    } else {
      obj.denom_traces = message.denomTraces;
    }
    obj.params = message.params ? import_transfer.Params.toAmino(message.params) : void 0;
    if (message.totalEscrowed) {
      obj.total_escrowed = message.totalEscrowed.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.total_escrowed = message.totalEscrowed;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  GenesisState
};
