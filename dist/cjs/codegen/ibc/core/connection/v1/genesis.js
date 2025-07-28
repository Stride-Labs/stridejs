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
var import_connection = require("./connection");
var import_binary = require("../../../../binary");
function createBaseGenesisState() {
  return {
    connections: [],
    clientConnectionPaths: [],
    nextConnectionSequence: BigInt(0),
    params: import_connection.Params.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.connection.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.connections) {
      import_connection.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientConnectionPaths) {
      import_connection.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextConnectionSequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }
    if (message.params !== void 0) {
      import_connection.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.connections.push(import_connection.IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientConnectionPaths.push(import_connection.ConnectionPaths.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextConnectionSequence = reader.uint64();
          break;
        case 4:
          message.params = import_connection.Params.decode(reader, reader.uint32());
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
    message.connections = object.connections?.map((e) => import_connection.IdentifiedConnection.fromPartial(e)) || [];
    message.clientConnectionPaths = object.clientConnectionPaths?.map((e) => import_connection.ConnectionPaths.fromPartial(e)) || [];
    message.nextConnectionSequence = object.nextConnectionSequence !== void 0 && object.nextConnectionSequence !== null ? BigInt(object.nextConnectionSequence.toString()) : BigInt(0);
    message.params = object.params !== void 0 && object.params !== null ? import_connection.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map((e) => import_connection.IdentifiedConnection.fromAmino(e)) || [];
    message.clientConnectionPaths = object.client_connection_paths?.map((e) => import_connection.ConnectionPaths.fromAmino(e)) || [];
    if (object.next_connection_sequence !== void 0 && object.next_connection_sequence !== null) {
      message.nextConnectionSequence = BigInt(object.next_connection_sequence);
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_connection.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? import_connection.IdentifiedConnection.toAmino(e) : void 0);
    } else {
      obj.connections = message.connections;
    }
    if (message.clientConnectionPaths) {
      obj.client_connection_paths = message.clientConnectionPaths.map((e) => e ? import_connection.ConnectionPaths.toAmino(e) : void 0);
    } else {
      obj.client_connection_paths = message.clientConnectionPaths;
    }
    obj.next_connection_sequence = message.nextConnectionSequence !== BigInt(0) ? message.nextConnectionSequence?.toString() : void 0;
    obj.params = message.params ? import_connection.Params.toAmino(message.params) : void 0;
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
      typeUrl: "/ibc.core.connection.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  GenesisState
};
