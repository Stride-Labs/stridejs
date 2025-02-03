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
var tx_exports = {};
__export(tx_exports, {
  MsgAdjustDelegatedBalance: () => MsgAdjustDelegatedBalance,
  MsgAdjustDelegatedBalanceResponse: () => MsgAdjustDelegatedBalanceResponse,
  MsgConfirmDelegation: () => MsgConfirmDelegation,
  MsgConfirmDelegationResponse: () => MsgConfirmDelegationResponse,
  MsgConfirmUnbondedTokenSweep: () => MsgConfirmUnbondedTokenSweep,
  MsgConfirmUnbondedTokenSweepResponse: () => MsgConfirmUnbondedTokenSweepResponse,
  MsgConfirmUndelegation: () => MsgConfirmUndelegation,
  MsgConfirmUndelegationResponse: () => MsgConfirmUndelegationResponse,
  MsgLiquidStake: () => MsgLiquidStake,
  MsgLiquidStakeResponse: () => MsgLiquidStakeResponse,
  MsgOverwriteDelegationRecord: () => MsgOverwriteDelegationRecord,
  MsgOverwriteDelegationRecordResponse: () => MsgOverwriteDelegationRecordResponse,
  MsgOverwriteRedemptionRecord: () => MsgOverwriteRedemptionRecord,
  MsgOverwriteRedemptionRecordResponse: () => MsgOverwriteRedemptionRecordResponse,
  MsgOverwriteUnbondingRecord: () => MsgOverwriteUnbondingRecord,
  MsgOverwriteUnbondingRecordResponse: () => MsgOverwriteUnbondingRecordResponse,
  MsgRedeemStake: () => MsgRedeemStake,
  MsgRedeemStakeResponse: () => MsgRedeemStakeResponse,
  MsgRefreshRedemptionRate: () => MsgRefreshRedemptionRate,
  MsgRefreshRedemptionRateResponse: () => MsgRefreshRedemptionRateResponse,
  MsgResumeHostZone: () => MsgResumeHostZone,
  MsgResumeHostZoneResponse: () => MsgResumeHostZoneResponse,
  MsgSetOperatorAddress: () => MsgSetOperatorAddress,
  MsgSetOperatorAddressResponse: () => MsgSetOperatorAddressResponse,
  MsgUpdateInnerRedemptionRateBounds: () => MsgUpdateInnerRedemptionRateBounds,
  MsgUpdateInnerRedemptionRateBoundsResponse: () => MsgUpdateInnerRedemptionRateBoundsResponse,
  OverwritableRecordType: () => OverwritableRecordType,
  OverwritableRecordTypeAmino: () => OverwritableRecordTypeAmino,
  OverwritableRecordTypeSDKType: () => OverwritableRecordTypeSDKType,
  overwritableRecordTypeFromJSON: () => overwritableRecordTypeFromJSON,
  overwritableRecordTypeToJSON: () => overwritableRecordTypeToJSON
});
module.exports = __toCommonJS(tx_exports);
var import_staketia = require("./staketia");
var import_coin = require("../../cosmos/base/v1beta1/coin");
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
var OverwritableRecordType = /* @__PURE__ */ ((OverwritableRecordType2) => {
  OverwritableRecordType2[OverwritableRecordType2["RECORD_TYPE_DELEGATION"] = 0] = "RECORD_TYPE_DELEGATION";
  OverwritableRecordType2[OverwritableRecordType2["RECORD_TYPE_UNBONDING"] = 1] = "RECORD_TYPE_UNBONDING";
  OverwritableRecordType2[OverwritableRecordType2["RECORD_TYPE_REDEMPTION"] = 2] = "RECORD_TYPE_REDEMPTION";
  OverwritableRecordType2[OverwritableRecordType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OverwritableRecordType2;
})(OverwritableRecordType || {});
const OverwritableRecordTypeSDKType = OverwritableRecordType;
const OverwritableRecordTypeAmino = OverwritableRecordType;
function overwritableRecordTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "RECORD_TYPE_DELEGATION":
      return 0 /* RECORD_TYPE_DELEGATION */;
    case 1:
    case "RECORD_TYPE_UNBONDING":
      return 1 /* RECORD_TYPE_UNBONDING */;
    case 2:
    case "RECORD_TYPE_REDEMPTION":
      return 2 /* RECORD_TYPE_REDEMPTION */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function overwritableRecordTypeToJSON(object) {
  switch (object) {
    case 0 /* RECORD_TYPE_DELEGATION */:
      return "RECORD_TYPE_DELEGATION";
    case 1 /* RECORD_TYPE_UNBONDING */:
      return "RECORD_TYPE_UNBONDING";
    case 2 /* RECORD_TYPE_REDEMPTION */:
      return "RECORD_TYPE_REDEMPTION";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgLiquidStake() {
  return {
    staker: "",
    nativeAmount: ""
  };
}
const MsgLiquidStake = {
  typeUrl: "/stride.staketia.MsgLiquidStake",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(18).string(message.nativeAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.nativeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLiquidStake();
    message.staker = object.staker ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLiquidStake();
    if (object.staker !== void 0 && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.native_amount !== void 0 && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.staker = message.staker === "" ? void 0 : message.staker;
    obj.native_amount = message.nativeAmount === "" ? void 0 : message.nativeAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLiquidStake.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgLiquidStake",
      value: MsgLiquidStake.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLiquidStake.decode(message.value);
  },
  toProto(message) {
    return MsgLiquidStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgLiquidStake",
      value: MsgLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStakeResponse() {
  return {
    stToken: import_coin.Coin.fromPartial({})
  };
}
const MsgLiquidStakeResponse = {
  typeUrl: "/stride.staketia.MsgLiquidStakeResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.stToken !== void 0) {
      import_coin.Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stToken = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== void 0 && object.stToken !== null ? import_coin.Coin.fromPartial(object.stToken) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLiquidStakeResponse();
    if (object.st_token !== void 0 && object.st_token !== null) {
      message.stToken = import_coin.Coin.fromAmino(object.st_token);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.st_token = message.stToken ? import_coin.Coin.toAmino(message.stToken) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgLiquidStakeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgLiquidStakeResponse",
      value: MsgLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStake() {
  return {
    redeemer: "",
    stTokenAmount: "",
    receiver: ""
  };
}
const MsgRedeemStake = {
  typeUrl: "/stride.staketia.MsgRedeemStake",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.redeemer !== "") {
      writer.uint32(10).string(message.redeemer);
    }
    if (message.stTokenAmount !== "") {
      writer.uint32(18).string(message.stTokenAmount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redeemer = reader.string();
          break;
        case 2:
          message.stTokenAmount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRedeemStake();
    message.redeemer = object.redeemer ?? "";
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRedeemStake();
    if (object.redeemer !== void 0 && object.redeemer !== null) {
      message.redeemer = object.redeemer;
    }
    if (object.st_token_amount !== void 0 && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.redeemer = message.redeemer === "" ? void 0 : message.redeemer;
    obj.st_token_amount = message.stTokenAmount === "" ? void 0 : message.stTokenAmount;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemStake.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgRedeemStake",
      value: MsgRedeemStake.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRedeemStake.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgRedeemStake",
      value: MsgRedeemStake.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStakeResponse() {
  return {
    nativeToken: import_coin.Coin.fromPartial({})
  };
}
const MsgRedeemStakeResponse = {
  typeUrl: "/stride.staketia.MsgRedeemStakeResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.nativeToken !== void 0) {
      import_coin.Coin.encode(message.nativeToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nativeToken = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRedeemStakeResponse();
    message.nativeToken = object.nativeToken !== void 0 && object.nativeToken !== null ? import_coin.Coin.fromPartial(object.nativeToken) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRedeemStakeResponse();
    if (object.native_token !== void 0 && object.native_token !== null) {
      message.nativeToken = import_coin.Coin.fromAmino(object.native_token);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.native_token = message.nativeToken ? import_coin.Coin.toAmino(message.nativeToken) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRedeemStakeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemStakeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgRedeemStakeResponse",
      value: MsgRedeemStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmDelegation() {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
const MsgConfirmDelegation = {
  typeUrl: "/stride.staketia.MsgConfirmDelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgConfirmDelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConfirmDelegation();
    if (object.operator !== void 0 && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== void 0 && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator = message.operator === "" ? void 0 : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId.toString() : void 0;
    obj.tx_hash = message.txHash === "" ? void 0 : message.txHash;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmDelegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgConfirmDelegation",
      value: MsgConfirmDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConfirmDelegation.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmDelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmDelegation",
      value: MsgConfirmDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmDelegationResponse() {
  return {};
}
const MsgConfirmDelegationResponse = {
  typeUrl: "/stride.staketia.MsgConfirmDelegationResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgConfirmDelegationResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConfirmDelegationResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConfirmDelegationResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmDelegationResponse",
      value: MsgConfirmDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUndelegation() {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
const MsgConfirmUndelegation = {
  typeUrl: "/stride.staketia.MsgConfirmUndelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgConfirmUndelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConfirmUndelegation();
    if (object.operator !== void 0 && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== void 0 && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator = message.operator === "" ? void 0 : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId.toString() : void 0;
    obj.tx_hash = message.txHash === "" ? void 0 : message.txHash;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmUndelegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgConfirmUndelegation",
      value: MsgConfirmUndelegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConfirmUndelegation.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmUndelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmUndelegation",
      value: MsgConfirmUndelegation.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUndelegationResponse() {
  return {};
}
const MsgConfirmUndelegationResponse = {
  typeUrl: "/stride.staketia.MsgConfirmUndelegationResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgConfirmUndelegationResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConfirmUndelegationResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConfirmUndelegationResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmUndelegationResponse",
      value: MsgConfirmUndelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUnbondedTokenSweep() {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
const MsgConfirmUnbondedTokenSweep = {
  typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    if (object.operator !== void 0 && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== void 0 && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator = message.operator === "" ? void 0 : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId.toString() : void 0;
    obj.tx_hash = message.txHash === "" ? void 0 : message.txHash;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmUnbondedTokenSweep.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgConfirmUnbondedTokenSweep",
      value: MsgConfirmUnbondedTokenSweep.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConfirmUnbondedTokenSweep.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmUnbondedTokenSweep.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
      value: MsgConfirmUnbondedTokenSweep.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUnbondedTokenSweepResponse() {
  return {};
}
const MsgConfirmUnbondedTokenSweepResponse = {
  typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweepResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConfirmUnbondedTokenSweepResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConfirmUnbondedTokenSweepResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConfirmUnbondedTokenSweepResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweepResponse",
      value: MsgConfirmUnbondedTokenSweepResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAdjustDelegatedBalance() {
  return {
    operator: "",
    delegationOffset: "",
    validatorAddress: ""
  };
}
const MsgAdjustDelegatedBalance = {
  typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegationOffset !== "") {
      writer.uint32(18).string(message.delegationOffset);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustDelegatedBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegationOffset = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAdjustDelegatedBalance();
    message.operator = object.operator ?? "";
    message.delegationOffset = object.delegationOffset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAdjustDelegatedBalance();
    if (object.operator !== void 0 && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegation_offset !== void 0 && object.delegation_offset !== null) {
      message.delegationOffset = object.delegation_offset;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator = message.operator === "" ? void 0 : message.operator;
    obj.delegation_offset = message.delegationOffset === "" ? void 0 : message.delegationOffset;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAdjustDelegatedBalance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgAdjustDelegatedBalance",
      value: MsgAdjustDelegatedBalance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAdjustDelegatedBalance.decode(message.value);
  },
  toProto(message) {
    return MsgAdjustDelegatedBalance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
      value: MsgAdjustDelegatedBalance.encode(message).finish()
    };
  }
};
function createBaseMsgAdjustDelegatedBalanceResponse() {
  return {};
}
const MsgAdjustDelegatedBalanceResponse = {
  typeUrl: "/stride.staketia.MsgAdjustDelegatedBalanceResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAdjustDelegatedBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAdjustDelegatedBalanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAdjustDelegatedBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgAdjustDelegatedBalanceResponse",
      value: MsgAdjustDelegatedBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInnerRedemptionRateBounds() {
  return {
    creator: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: ""
  };
}
const MsgUpdateInnerRedemptionRateBounds = {
  typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minInnerRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxInnerRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.min_inner_redemption_rate !== void 0 && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== void 0 && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate === "" ? void 0 : message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate === "" ? void 0 : message.maxInnerRedemptionRate;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInnerRedemptionRateBounds.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgUpdateRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateInnerRedemptionRateBounds.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInnerRedemptionRateBounds.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInnerRedemptionRateBoundsResponse() {
  return {};
}
const MsgUpdateInnerRedemptionRateBoundsResponse = {
  typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBoundsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBoundsResponse",
      value: MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZone() {
  return {
    creator: ""
  };
}
const MsgResumeHostZone = {
  typeUrl: "/stride.staketia.MsgResumeHostZone",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgResumeHostZone();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResumeHostZone.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgResumeHostZone",
      value: MsgResumeHostZone.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgResumeHostZone.decode(message.value);
  },
  toProto(message) {
    return MsgResumeHostZone.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgResumeHostZone",
      value: MsgResumeHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZoneResponse() {
  return {};
}
const MsgResumeHostZoneResponse = {
  typeUrl: "/stride.staketia.MsgResumeHostZoneResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResumeHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgResumeHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return MsgResumeHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgResumeHostZoneResponse",
      value: MsgResumeHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRefreshRedemptionRate() {
  return {
    creator: ""
  };
}
const MsgRefreshRedemptionRate = {
  typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRefreshRedemptionRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRefreshRedemptionRate();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRefreshRedemptionRate();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRefreshRedemptionRate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgRefreshRedemptionRate",
      value: MsgRefreshRedemptionRate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRefreshRedemptionRate.decode(message.value);
  },
  toProto(message) {
    return MsgRefreshRedemptionRate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
      value: MsgRefreshRedemptionRate.encode(message).finish()
    };
  }
};
function createBaseMsgRefreshRedemptionRateResponse() {
  return {};
}
const MsgRefreshRedemptionRateResponse = {
  typeUrl: "/stride.staketia.MsgRefreshRedemptionRateResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRefreshRedemptionRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgRefreshRedemptionRateResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRefreshRedemptionRateResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRefreshRedemptionRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRefreshRedemptionRateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRefreshRedemptionRateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgRefreshRedemptionRateResponse",
      value: MsgRefreshRedemptionRateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteDelegationRecord() {
  return {
    creator: "",
    delegationRecord: void 0
  };
}
const MsgOverwriteDelegationRecord = {
  typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegationRecord !== void 0) {
      import_staketia.DelegationRecord.encode(message.delegationRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteDelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegationRecord = import_staketia.DelegationRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgOverwriteDelegationRecord();
    message.creator = object.creator ?? "";
    message.delegationRecord = object.delegationRecord !== void 0 && object.delegationRecord !== null ? import_staketia.DelegationRecord.fromPartial(object.delegationRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgOverwriteDelegationRecord();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.delegation_record !== void 0 && object.delegation_record !== null) {
      message.delegationRecord = import_staketia.DelegationRecord.fromAmino(object.delegation_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.delegation_record = message.delegationRecord ? import_staketia.DelegationRecord.toAmino(message.delegationRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteDelegationRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgOverwriteDelegationRecord",
      value: MsgOverwriteDelegationRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgOverwriteDelegationRecord.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteDelegationRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
      value: MsgOverwriteDelegationRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteDelegationRecordResponse() {
  return {};
}
const MsgOverwriteDelegationRecordResponse = {
  typeUrl: "/stride.staketia.MsgOverwriteDelegationRecordResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteDelegationRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgOverwriteDelegationRecordResponse.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteDelegationRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteDelegationRecordResponse",
      value: MsgOverwriteDelegationRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteUnbondingRecord() {
  return {
    creator: "",
    unbondingRecord: void 0
  };
}
const MsgOverwriteUnbondingRecord = {
  typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingRecord !== void 0) {
      import_staketia.UnbondingRecord.encode(message.unbondingRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteUnbondingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unbondingRecord = import_staketia.UnbondingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgOverwriteUnbondingRecord();
    message.creator = object.creator ?? "";
    message.unbondingRecord = object.unbondingRecord !== void 0 && object.unbondingRecord !== null ? import_staketia.UnbondingRecord.fromPartial(object.unbondingRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgOverwriteUnbondingRecord();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.unbonding_record !== void 0 && object.unbonding_record !== null) {
      message.unbondingRecord = import_staketia.UnbondingRecord.fromAmino(object.unbonding_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.unbonding_record = message.unbondingRecord ? import_staketia.UnbondingRecord.toAmino(message.unbondingRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteUnbondingRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgOverwriteUnbondingRecord",
      value: MsgOverwriteUnbondingRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgOverwriteUnbondingRecord.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteUnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
      value: MsgOverwriteUnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteUnbondingRecordResponse() {
  return {};
}
const MsgOverwriteUnbondingRecordResponse = {
  typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecordResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgOverwriteUnbondingRecordResponse.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecordResponse",
      value: MsgOverwriteUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteRedemptionRecord() {
  return {
    creator: "",
    redemptionRecord: void 0
  };
}
const MsgOverwriteRedemptionRecord = {
  typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.redemptionRecord !== void 0) {
      import_staketia.RedemptionRecord.encode(message.redemptionRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteRedemptionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.redemptionRecord = import_staketia.RedemptionRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgOverwriteRedemptionRecord();
    message.creator = object.creator ?? "";
    message.redemptionRecord = object.redemptionRecord !== void 0 && object.redemptionRecord !== null ? import_staketia.RedemptionRecord.fromPartial(object.redemptionRecord) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgOverwriteRedemptionRecord();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.redemption_record !== void 0 && object.redemption_record !== null) {
      message.redemptionRecord = import_staketia.RedemptionRecord.fromAmino(object.redemption_record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.redemption_record = message.redemptionRecord ? import_staketia.RedemptionRecord.toAmino(message.redemptionRecord) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteRedemptionRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgOverwriteRedemptionRecord",
      value: MsgOverwriteRedemptionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgOverwriteRedemptionRecord.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteRedemptionRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
      value: MsgOverwriteRedemptionRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteRedemptionRecordResponse() {
  return {};
}
const MsgOverwriteRedemptionRecordResponse = {
  typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecordResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgOverwriteRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgOverwriteRedemptionRecordResponse.decode(message.value);
  },
  toProto(message) {
    return MsgOverwriteRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecordResponse",
      value: MsgOverwriteRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorAddress() {
  return {
    signer: "",
    operator: ""
  };
}
const MsgSetOperatorAddress = {
  typeUrl: "/stride.staketia.MsgSetOperatorAddress",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSetOperatorAddress();
    message.signer = object.signer ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSetOperatorAddress();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.operator !== void 0 && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.operator = message.operator === "" ? void 0 : message.operator;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetOperatorAddress.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "staketia/MsgSetOperatorAddress",
      value: MsgSetOperatorAddress.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetOperatorAddress.decode(message.value);
  },
  toProto(message) {
    return MsgSetOperatorAddress.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgSetOperatorAddress",
      value: MsgSetOperatorAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorAddressResponse() {
  return {};
}
const MsgSetOperatorAddressResponse = {
  typeUrl: "/stride.staketia.MsgSetOperatorAddressResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgSetOperatorAddressResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSetOperatorAddressResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetOperatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetOperatorAddressResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetOperatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.MsgSetOperatorAddressResponse",
      value: MsgSetOperatorAddressResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgAdjustDelegatedBalance,
  MsgAdjustDelegatedBalanceResponse,
  MsgConfirmDelegation,
  MsgConfirmDelegationResponse,
  MsgConfirmUnbondedTokenSweep,
  MsgConfirmUnbondedTokenSweepResponse,
  MsgConfirmUndelegation,
  MsgConfirmUndelegationResponse,
  MsgLiquidStake,
  MsgLiquidStakeResponse,
  MsgOverwriteDelegationRecord,
  MsgOverwriteDelegationRecordResponse,
  MsgOverwriteRedemptionRecord,
  MsgOverwriteRedemptionRecordResponse,
  MsgOverwriteUnbondingRecord,
  MsgOverwriteUnbondingRecordResponse,
  MsgRedeemStake,
  MsgRedeemStakeResponse,
  MsgRefreshRedemptionRate,
  MsgRefreshRedemptionRateResponse,
  MsgResumeHostZone,
  MsgResumeHostZoneResponse,
  MsgSetOperatorAddress,
  MsgSetOperatorAddressResponse,
  MsgUpdateInnerRedemptionRateBounds,
  MsgUpdateInnerRedemptionRateBoundsResponse,
  OverwritableRecordType,
  OverwritableRecordTypeAmino,
  OverwritableRecordTypeSDKType,
  overwritableRecordTypeFromJSON,
  overwritableRecordTypeToJSON
});
