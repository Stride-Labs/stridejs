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
var import_airdrop = require("./airdrop");
var import_binary = require("../../binary");
function createBaseGenesisState() {
  return {
    params: import_airdrop.Params.fromPartial({}),
    airdrops: [],
    userAllocations: []
  };
}
const GenesisState = {
  typeUrl: "/stride.airdrop.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_airdrop.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.airdrops) {
      import_airdrop.Airdrop.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userAllocations) {
      import_airdrop.UserAllocation.encode(v, writer.uint32(26).fork()).ldelim();
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
          message.params = import_airdrop.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.airdrops.push(import_airdrop.Airdrop.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userAllocations.push(import_airdrop.UserAllocation.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_airdrop.Params.fromPartial(object.params) : void 0;
    message.airdrops = object.airdrops?.map((e) => import_airdrop.Airdrop.fromPartial(e)) || [];
    message.userAllocations = object.userAllocations?.map((e) => import_airdrop.UserAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_airdrop.Params.fromAmino(object.params);
    }
    message.airdrops = object.airdrops?.map((e) => import_airdrop.Airdrop.fromAmino(e)) || [];
    message.userAllocations = object.user_allocations?.map((e) => import_airdrop.UserAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_airdrop.Params.toAmino(message.params) : void 0;
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => e ? import_airdrop.Airdrop.toAmino(e) : void 0);
    } else {
      obj.airdrops = message.airdrops;
    }
    if (message.userAllocations) {
      obj.user_allocations = message.userAllocations.map((e) => e ? import_airdrop.UserAllocation.toAmino(e) : void 0);
    } else {
      obj.user_allocations = message.userAllocations;
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
      typeUrl: "/stride.airdrop.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  GenesisState
};
