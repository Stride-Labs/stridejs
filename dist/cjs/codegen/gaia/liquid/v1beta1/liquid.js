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
var liquid_exports = {};
__export(liquid_exports, {
  LiquidValidator: () => LiquidValidator,
  Params: () => Params,
  PendingTokenizeShareAuthorizations: () => PendingTokenizeShareAuthorizations,
  TokenizeShareLockStatus: () => TokenizeShareLockStatus,
  TokenizeShareLockStatusAmino: () => TokenizeShareLockStatusAmino,
  TokenizeShareLockStatusSDKType: () => TokenizeShareLockStatusSDKType,
  TokenizeShareRecord: () => TokenizeShareRecord,
  TokenizeShareRecordReward: () => TokenizeShareRecordReward,
  tokenizeShareLockStatusFromJSON: () => tokenizeShareLockStatusFromJSON,
  tokenizeShareLockStatusToJSON: () => tokenizeShareLockStatusToJSON
});
module.exports = __toCommonJS(liquid_exports);
var import_coin = require("../../../cosmos/base/v1beta1/coin");
var import_binary = require("../../../binary");
var import_decimals = require("../../../decimals");
var TokenizeShareLockStatus = /* @__PURE__ */ ((TokenizeShareLockStatus2) => {
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED"] = 0] = "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_LOCKED"] = 1] = "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED"] = 2] = "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING"] = 3] = "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return TokenizeShareLockStatus2;
})(TokenizeShareLockStatus || {});
const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
function tokenizeShareLockStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return 0 /* TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED */;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return 1 /* TOKENIZE_SHARE_LOCK_STATUS_LOCKED */;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return 2 /* TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED */;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return 3 /* TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function tokenizeShareLockStatusToJSON(object) {
  switch (object) {
    case 0 /* TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case 1 /* TOKENIZE_SHARE_LOCK_STATUS_LOCKED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case 2 /* TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case 3 /* TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING */:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseParams() {
  return {
    globalLiquidStakingCap: "",
    validatorLiquidStakingCap: ""
  };
}
const Params = {
  typeUrl: "/gaia.liquid.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.globalLiquidStakingCap !== "") {
      writer.uint32(66).string(import_decimals.Decimal.fromUserInput(message.globalLiquidStakingCap, 18).atomics);
    }
    if (message.validatorLiquidStakingCap !== "") {
      writer.uint32(74).string(import_decimals.Decimal.fromUserInput(message.validatorLiquidStakingCap, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.globalLiquidStakingCap = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.validatorLiquidStakingCap = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.globalLiquidStakingCap = object.globalLiquidStakingCap ?? "";
    message.validatorLiquidStakingCap = object.validatorLiquidStakingCap ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.global_liquid_staking_cap !== void 0 && object.global_liquid_staking_cap !== null) {
      message.globalLiquidStakingCap = object.global_liquid_staking_cap;
    }
    if (object.validator_liquid_staking_cap !== void 0 && object.validator_liquid_staking_cap !== null) {
      message.validatorLiquidStakingCap = object.validator_liquid_staking_cap;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.global_liquid_staking_cap = message.globalLiquidStakingCap ?? "";
    obj.validator_liquid_staking_cap = message.validatorLiquidStakingCap ?? "";
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "gaia/x/liquid/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecord() {
  return {
    id: BigInt(0),
    owner: "",
    moduleAccount: "",
    validator: ""
  };
}
const TokenizeShareRecord = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenizeShareRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.module_account !== void 0 && object.module_account !== null) {
      message.moduleAccount = object.module_account;
    }
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.module_account = message.moduleAccount === "" ? void 0 : message.moduleAccount;
    obj.validator = message.validator === "" ? void 0 : message.validator;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenizeShareRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TokenizeShareRecord.decode(message.value);
  },
  toProto(message) {
    return TokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord",
      value: TokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBasePendingTokenizeShareAuthorizations() {
  return {
    addresses: []
  };
}
const PendingTokenizeShareAuthorizations = {
  typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PendingTokenizeShareAuthorizations.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PendingTokenizeShareAuthorizations.decode(message.value);
  },
  toProto(message) {
    return PendingTokenizeShareAuthorizations.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecordReward() {
  return {
    recordId: BigInt(0),
    reward: []
  };
}
const TokenizeShareRecordReward = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.recordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = reader.uint64();
          break;
        case 2:
          message.reward.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenizeShareRecordReward();
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.reward = object.reward?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenizeShareRecordReward();
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    message.reward = object.reward?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : void 0;
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TokenizeShareRecordReward.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TokenizeShareRecordReward.decode(message.value);
  },
  toProto(message) {
    return TokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseLiquidValidator() {
  return {
    operatorAddress: "",
    liquidShares: ""
  };
}
const LiquidValidator = {
  typeUrl: "/gaia.liquid.v1beta1.LiquidValidator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.liquidShares !== "") {
      writer.uint32(26).string(import_decimals.Decimal.fromUserInput(message.liquidShares, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.liquidShares = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseLiquidValidator();
    if (object.operator_address !== void 0 && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.liquid_shares !== void 0 && object.liquid_shares !== null) {
      message.liquidShares = object.liquid_shares;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator_address = message.operatorAddress === "" ? void 0 : message.operatorAddress;
    obj.liquid_shares = message.liquidShares === "" ? void 0 : message.liquidShares;
    return obj;
  },
  fromAminoMsg(object) {
    return LiquidValidator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LiquidValidator.decode(message.value);
  },
  toProto(message) {
    return LiquidValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.LiquidValidator",
      value: LiquidValidator.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  LiquidValidator,
  Params,
  PendingTokenizeShareAuthorizations,
  TokenizeShareLockStatus,
  TokenizeShareLockStatusAmino,
  TokenizeShareLockStatusSDKType,
  TokenizeShareRecord,
  TokenizeShareRecordReward,
  tokenizeShareLockStatusFromJSON,
  tokenizeShareLockStatusToJSON
};
