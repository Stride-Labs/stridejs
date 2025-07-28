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
var localhost_exports = {};
__export(localhost_exports, {
  ClientState: () => ClientState
});
module.exports = __toCommonJS(localhost_exports);
var import_client = require("../../../core/client/v1/client");
var import_binary = require("../../../../binary");
function createBaseClientState() {
  return {
    latestHeight: import_client.Height.fromPartial({})
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.latestHeight !== void 0) {
      import_client.Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientState();
    message.latestHeight = object.latestHeight !== void 0 && object.latestHeight !== null ? import_client.Height.fromPartial(object.latestHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientState();
    if (object.latest_height !== void 0 && object.latest_height !== null) {
      message.latestHeight = import_client.Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.latest_height = message.latestHeight ? import_client.Height.toAmino(message.latestHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientState.decode(message.value);
  },
  toProto(message) {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  ClientState
};
