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
var import_genesis = require("../../client/v1/genesis");
var import_genesis4 = require("../../connection/v1/genesis");
var import_genesis7 = require("../../channel/v1/genesis");
var import_binary = require("../../../../binary");
function createBaseGenesisState() {
  return {
    clientGenesis: import_genesis.GenesisState.fromPartial({}),
    connectionGenesis: import_genesis4.GenesisState.fromPartial({}),
    channelGenesis: import_genesis7.GenesisState.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientGenesis !== void 0) {
      import_genesis.GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== void 0) {
      import_genesis4.GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== void 0) {
      import_genesis7.GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
          message.clientGenesis = import_genesis.GenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = import_genesis4.GenesisState.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = import_genesis7.GenesisState.decode(reader, reader.uint32());
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
    message.clientGenesis = object.clientGenesis !== void 0 && object.clientGenesis !== null ? import_genesis.GenesisState.fromPartial(object.clientGenesis) : void 0;
    message.connectionGenesis = object.connectionGenesis !== void 0 && object.connectionGenesis !== null ? import_genesis4.GenesisState.fromPartial(object.connectionGenesis) : void 0;
    message.channelGenesis = object.channelGenesis !== void 0 && object.channelGenesis !== null ? import_genesis7.GenesisState.fromPartial(object.channelGenesis) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.client_genesis !== void 0 && object.client_genesis !== null) {
      message.clientGenesis = import_genesis.GenesisState.fromAmino(object.client_genesis);
    }
    if (object.connection_genesis !== void 0 && object.connection_genesis !== null) {
      message.connectionGenesis = import_genesis4.GenesisState.fromAmino(object.connection_genesis);
    }
    if (object.channel_genesis !== void 0 && object.channel_genesis !== null) {
      message.channelGenesis = import_genesis7.GenesisState.fromAmino(object.channel_genesis);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_genesis = message.clientGenesis ? import_genesis.GenesisState.toAmino(message.clientGenesis) : void 0;
    obj.connection_genesis = message.connectionGenesis ? import_genesis4.GenesisState.toAmino(message.connectionGenesis) : void 0;
    obj.channel_genesis = message.channelGenesis ? import_genesis7.GenesisState.toAmino(message.channelGenesis) : void 0;
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
      typeUrl: "/ibc.core.types.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  GenesisState
};
