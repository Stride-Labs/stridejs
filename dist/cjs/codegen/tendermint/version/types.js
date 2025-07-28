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
  App: () => App,
  Consensus: () => Consensus
});
module.exports = __toCommonJS(types_exports);
var import_binary = require("../../binary");
function createBaseApp() {
  return {
    protocol: BigInt(0),
    software: ""
  };
}
const App = {
  typeUrl: "/tendermint.version.App",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseApp();
    message.protocol = object.protocol !== void 0 && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
    message.software = object.software ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseApp();
    if (object.protocol !== void 0 && object.protocol !== null) {
      message.protocol = BigInt(object.protocol);
    }
    if (object.software !== void 0 && object.software !== null) {
      message.software = object.software;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.protocol = message.protocol !== BigInt(0) ? message.protocol?.toString() : void 0;
    obj.software = message.software === "" ? void 0 : message.software;
    return obj;
  },
  fromAminoMsg(object) {
    return App.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return App.decode(message.value);
  },
  toProto(message) {
    return App.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.App",
      value: App.encode(message).finish()
    };
  }
};
function createBaseConsensus() {
  return {
    block: BigInt(0),
    app: BigInt(0)
  };
}
const Consensus = {
  typeUrl: "/tendermint.version.Consensus",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensus();
    message.block = object.block !== void 0 && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== void 0 && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensus();
    if (object.block !== void 0 && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== void 0 && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block !== BigInt(0) ? message.block?.toString() : void 0;
    obj.app = message.app !== BigInt(0) ? message.app?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Consensus.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Consensus.decode(message.value);
  },
  toProto(message) {
    return Consensus.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.Consensus",
      value: Consensus.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
