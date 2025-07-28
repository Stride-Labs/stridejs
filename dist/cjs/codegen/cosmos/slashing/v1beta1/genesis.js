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
  GenesisState: () => GenesisState,
  MissedBlock: () => MissedBlock,
  SigningInfo: () => SigningInfo,
  ValidatorMissedBlocks: () => ValidatorMissedBlocks
});
module.exports = __toCommonJS(genesis_exports);
var import_slashing = require("./slashing");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    params: import_slashing.Params.fromPartial({}),
    signingInfos: [],
    missedBlocks: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_slashing.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
          message.params = import_slashing.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_slashing.Params.fromPartial(object.params) : void 0;
    message.signingInfos = object.signingInfos?.map((e) => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map((e) => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_slashing.Params.fromAmino(object.params);
    }
    message.signingInfos = object.signing_infos?.map((e) => SigningInfo.fromAmino(e)) || [];
    message.missedBlocks = object.missed_blocks?.map((e) => ValidatorMissedBlocks.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_slashing.Params.toAmino(message.params) : import_slashing.Params.toAmino(import_slashing.Params.fromPartial({}));
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map((e) => e ? SigningInfo.toAmino(e) : void 0);
    } else {
      obj.signing_infos = message.signingInfos;
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map((e) => e ? ValidatorMissedBlocks.toAmino(e) : void 0);
    } else {
      obj.missed_blocks = message.missedBlocks;
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
      typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseSigningInfo() {
  return {
    address: "",
    validatorSigningInfo: import_slashing.ValidatorSigningInfo.fromPartial({})
  };
}
const SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== void 0) {
      import_slashing.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = import_slashing.ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = object.validatorSigningInfo !== void 0 && object.validatorSigningInfo !== null ? import_slashing.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSigningInfo();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.validator_signing_info !== void 0 && object.validator_signing_info !== null) {
      message.validatorSigningInfo = import_slashing.ValidatorSigningInfo.fromAmino(object.validator_signing_info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.validator_signing_info = message.validatorSigningInfo ? import_slashing.ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : import_slashing.ValidatorSigningInfo.toAmino(import_slashing.ValidatorSigningInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return SigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SigningInfo",
      value: SigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SigningInfo.decode(message.value);
  },
  toProto(message) {
    return SigningInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
      value: SigningInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorMissedBlocks() {
  return {
    address: "",
    missedBlocks: []
  };
}
const ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map((e) => MissedBlock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorMissedBlocks();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    message.missedBlocks = object.missed_blocks?.map((e) => MissedBlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map((e) => e ? MissedBlock.toAmino(e) : void 0);
    } else {
      obj.missed_blocks = message.missedBlocks;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorMissedBlocks.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorMissedBlocks.decode(message.value);
  },
  toProto(message) {
    return ValidatorMissedBlocks.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.encode(message).finish()
    };
  }
};
function createBaseMissedBlock() {
  return {
    index: BigInt(0),
    missed: false
  };
}
const MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMissedBlock();
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.missed = object.missed ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMissedBlock();
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.missed !== void 0 && object.missed !== null) {
      message.missed = object.missed;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : void 0;
    obj.missed = message.missed === false ? void 0 : message.missed;
    return obj;
  },
  fromAminoMsg(object) {
    return MissedBlock.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MissedBlock",
      value: MissedBlock.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MissedBlock.decode(message.value);
  },
  toProto(message) {
    return MissedBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
      value: MissedBlock.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
