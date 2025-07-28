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
var import_mint = require("./mint");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    minter: import_mint.Minter.fromPartial({}),
    params: import_mint.Params.fromPartial({}),
    reductionStartedEpoch: BigInt(0)
  };
}
const GenesisState = {
  typeUrl: "/stride.mint.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.minter !== void 0) {
      import_mint.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== void 0) {
      import_mint.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.reductionStartedEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
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
          message.minter = import_mint.Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = import_mint.Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reductionStartedEpoch = reader.int64();
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
    message.minter = object.minter !== void 0 && object.minter !== null ? import_mint.Minter.fromPartial(object.minter) : void 0;
    message.params = object.params !== void 0 && object.params !== null ? import_mint.Params.fromPartial(object.params) : void 0;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== void 0 && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.minter !== void 0 && object.minter !== null) {
      message.minter = import_mint.Minter.fromAmino(object.minter);
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_mint.Params.fromAmino(object.params);
    }
    if (object.reduction_started_epoch !== void 0 && object.reduction_started_epoch !== null) {
      message.reductionStartedEpoch = BigInt(object.reduction_started_epoch);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.minter = message.minter ? import_mint.Minter.toAmino(message.minter) : void 0;
    obj.params = message.params ? import_mint.Params.toAmino(message.params) : void 0;
    obj.reduction_started_epoch = message.reductionStartedEpoch !== BigInt(0) ? message.reductionStartedEpoch?.toString() : void 0;
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
      typeUrl: "/stride.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
