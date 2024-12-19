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
var callbacks_exports = {};
__export(callbacks_exports, {
  ClaimCallback: () => ClaimCallback,
  CommunityPoolBalanceQueryCallback: () => CommunityPoolBalanceQueryCallback,
  DelegateCallback: () => DelegateCallback,
  DelegatorSharesQueryCallback: () => DelegatorSharesQueryCallback,
  DetokenizeSharesCallback: () => DetokenizeSharesCallback,
  LSMLiquidStake: () => LSMLiquidStake,
  RebalanceCallback: () => RebalanceCallback,
  Rebalancing: () => Rebalancing,
  RedemptionCallback: () => RedemptionCallback,
  ReinvestCallback: () => ReinvestCallback,
  SplitDelegation: () => SplitDelegation,
  SplitUndelegation: () => SplitUndelegation,
  TradeRouteCallback: () => TradeRouteCallback,
  UndelegateCallback: () => UndelegateCallback,
  ValidatorSharesToTokensQueryCallback: () => ValidatorSharesToTokensQueryCallback
});
module.exports = __toCommonJS(callbacks_exports);
var import_coin = require("../../cosmos/base/v1beta1/coin");
var import_records = require("../records/records");
var import_host_zone = require("./host_zone");
var import_validator = require("./validator");
var import_binary = require("../../binary");
function createBaseSplitDelegation() {
  return {
    validator: "",
    amount: ""
  };
}
const SplitDelegation = {
  typeUrl: "/stride.stakeibc.SplitDelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSplitDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSplitDelegation();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseSplitDelegation();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator === "" ? void 0 : message.validator;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    return obj;
  },
  fromAminoMsg(object) {
    return SplitDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SplitDelegation.decode(message.value);
  },
  toProto(message) {
    return SplitDelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.SplitDelegation",
      value: SplitDelegation.encode(message).finish()
    };
  }
};
function createBaseSplitUndelegation() {
  return {
    validator: "",
    nativeTokenAmount: ""
  };
}
const SplitUndelegation = {
  typeUrl: "/stride.stakeibc.SplitUndelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.nativeTokenAmount !== "") {
      writer.uint32(18).string(message.nativeTokenAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSplitUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.nativeTokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSplitUndelegation();
    message.validator = object.validator ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseSplitUndelegation();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.native_token_amount !== void 0 && object.native_token_amount !== null) {
      message.nativeTokenAmount = object.native_token_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator === "" ? void 0 : message.validator;
    obj.native_token_amount = message.nativeTokenAmount === "" ? void 0 : message.nativeTokenAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return SplitUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SplitUndelegation.decode(message.value);
  },
  toProto(message) {
    return SplitUndelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.SplitUndelegation",
      value: SplitUndelegation.encode(message).finish()
    };
  }
};
function createBaseDelegateCallback() {
  return {
    hostZoneId: "",
    depositRecordId: BigInt(0),
    splitDelegations: []
  };
}
const DelegateCallback = {
  typeUrl: "/stride.stakeibc.DelegateCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    if (message.depositRecordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositRecordId);
    }
    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.depositRecordId = reader.uint64();
          break;
        case 3:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = object.depositRecordId !== void 0 && object.depositRecordId !== null ? BigInt(object.depositRecordId.toString()) : BigInt(0);
    message.splitDelegations = object.splitDelegations?.map((e) => SplitDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegateCallback();
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.deposit_record_id !== void 0 && object.deposit_record_id !== null) {
      message.depositRecordId = BigInt(object.deposit_record_id);
    }
    message.splitDelegations = object.split_delegations?.map((e) => SplitDelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    obj.deposit_record_id = message.depositRecordId !== BigInt(0) ? message.depositRecordId.toString() : void 0;
    if (message.splitDelegations) {
      obj.split_delegations = message.splitDelegations.map((e) => e ? SplitDelegation.toAmino(e) : void 0);
    } else {
      obj.split_delegations = message.splitDelegations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DelegateCallback.decode(message.value);
  },
  toProto(message) {
    return DelegateCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.DelegateCallback",
      value: DelegateCallback.encode(message).finish()
    };
  }
};
function createBaseClaimCallback() {
  return {
    userRedemptionRecordId: "",
    chainId: "",
    epochNumber: BigInt(0)
  };
}
const ClaimCallback = {
  typeUrl: "/stride.stakeibc.ClaimCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClaimCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecordId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseClaimCallback();
    if (object.user_redemption_record_id !== void 0 && object.user_redemption_record_id !== null) {
      message.userRedemptionRecordId = object.user_redemption_record_id;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.user_redemption_record_id = message.userRedemptionRecordId === "" ? void 0 : message.userRedemptionRecordId;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ClaimCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ClaimCallback.decode(message.value);
  },
  toProto(message) {
    return ClaimCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ClaimCallback",
      value: ClaimCallback.encode(message).finish()
    };
  }
};
function createBaseReinvestCallback() {
  return {
    reinvestAmount: import_coin.Coin.fromPartial({}),
    hostZoneId: ""
  };
}
const ReinvestCallback = {
  typeUrl: "/stride.stakeibc.ReinvestCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.reinvestAmount !== void 0) {
      import_coin.Coin.encode(message.reinvestAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZoneId !== "") {
      writer.uint32(26).string(message.hostZoneId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReinvestCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reinvestAmount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseReinvestCallback();
    message.reinvestAmount = object.reinvestAmount !== void 0 && object.reinvestAmount !== null ? import_coin.Coin.fromPartial(object.reinvestAmount) : void 0;
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseReinvestCallback();
    if (object.reinvest_amount !== void 0 && object.reinvest_amount !== null) {
      message.reinvestAmount = import_coin.Coin.fromAmino(object.reinvest_amount);
    }
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.reinvest_amount = message.reinvestAmount ? import_coin.Coin.toAmino(message.reinvestAmount) : void 0;
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    return obj;
  },
  fromAminoMsg(object) {
    return ReinvestCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ReinvestCallback.decode(message.value);
  },
  toProto(message) {
    return ReinvestCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ReinvestCallback",
      value: ReinvestCallback.encode(message).finish()
    };
  }
};
function createBaseUndelegateCallback() {
  return {
    hostZoneId: "",
    splitUndelegations: [],
    epochUnbondingRecordIds: []
  };
}
const UndelegateCallback = {
  typeUrl: "/stride.stakeibc.UndelegateCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.splitUndelegations) {
      SplitUndelegation.encode(v, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUndelegateCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.splitUndelegations.push(SplitUndelegation.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push(reader.uint64());
            }
          } else {
            message.epochUnbondingRecordIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitUndelegations = object.splitUndelegations?.map((e) => SplitUndelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseUndelegateCallback();
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    message.splitUndelegations = object.split_undelegations?.map((e) => SplitUndelegation.fromAmino(e)) || [];
    message.epochUnbondingRecordIds = object.epoch_unbonding_record_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    if (message.splitUndelegations) {
      obj.split_undelegations = message.splitUndelegations.map((e) => e ? SplitUndelegation.toAmino(e) : void 0);
    } else {
      obj.split_undelegations = message.splitUndelegations;
    }
    if (message.epochUnbondingRecordIds) {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds.map((e) => e.toString());
    } else {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return UndelegateCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UndelegateCallback.decode(message.value);
  },
  toProto(message) {
    return UndelegateCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.UndelegateCallback",
      value: UndelegateCallback.encode(message).finish()
    };
  }
};
function createBaseRedemptionCallback() {
  return {
    hostZoneId: "",
    epochUnbondingRecordIds: []
  };
}
const RedemptionCallback = {
  typeUrl: "/stride.stakeibc.RedemptionCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    writer.uint32(18).fork();
    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedemptionCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push(reader.uint64());
            }
          } else {
            message.epochUnbondingRecordIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedemptionCallback();
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    message.epochUnbondingRecordIds = object.epoch_unbonding_record_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    if (message.epochUnbondingRecordIds) {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds.map((e) => e.toString());
    } else {
      obj.epoch_unbonding_record_ids = message.epochUnbondingRecordIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return RedemptionCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RedemptionCallback.decode(message.value);
  },
  toProto(message) {
    return RedemptionCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.RedemptionCallback",
      value: RedemptionCallback.encode(message).finish()
    };
  }
};
function createBaseRebalancing() {
  return {
    srcValidator: "",
    dstValidator: "",
    amt: ""
  };
}
const Rebalancing = {
  typeUrl: "/stride.stakeibc.Rebalancing",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.srcValidator !== "") {
      writer.uint32(10).string(message.srcValidator);
    }
    if (message.dstValidator !== "") {
      writer.uint32(18).string(message.dstValidator);
    }
    if (message.amt !== "") {
      writer.uint32(26).string(message.amt);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRebalancing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcValidator = reader.string();
          break;
        case 2:
          message.dstValidator = reader.string();
          break;
        case 3:
          message.amt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRebalancing();
    message.srcValidator = object.srcValidator ?? "";
    message.dstValidator = object.dstValidator ?? "";
    message.amt = object.amt ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRebalancing();
    if (object.src_validator !== void 0 && object.src_validator !== null) {
      message.srcValidator = object.src_validator;
    }
    if (object.dst_validator !== void 0 && object.dst_validator !== null) {
      message.dstValidator = object.dst_validator;
    }
    if (object.amt !== void 0 && object.amt !== null) {
      message.amt = object.amt;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.src_validator = message.srcValidator === "" ? void 0 : message.srcValidator;
    obj.dst_validator = message.dstValidator === "" ? void 0 : message.dstValidator;
    obj.amt = message.amt === "" ? void 0 : message.amt;
    return obj;
  },
  fromAminoMsg(object) {
    return Rebalancing.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Rebalancing.decode(message.value);
  },
  toProto(message) {
    return Rebalancing.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.Rebalancing",
      value: Rebalancing.encode(message).finish()
    };
  }
};
function createBaseRebalanceCallback() {
  return {
    hostZoneId: "",
    rebalancings: []
  };
}
const RebalanceCallback = {
  typeUrl: "/stride.stakeibc.RebalanceCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    for (const v of message.rebalancings) {
      Rebalancing.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRebalanceCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        case 2:
          message.rebalancings.push(Rebalancing.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRebalanceCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.rebalancings = object.rebalancings?.map((e) => Rebalancing.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRebalanceCallback();
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    message.rebalancings = object.rebalancings?.map((e) => Rebalancing.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    if (message.rebalancings) {
      obj.rebalancings = message.rebalancings.map((e) => e ? Rebalancing.toAmino(e) : void 0);
    } else {
      obj.rebalancings = message.rebalancings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return RebalanceCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RebalanceCallback.decode(message.value);
  },
  toProto(message) {
    return RebalanceCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.RebalanceCallback",
      value: RebalanceCallback.encode(message).finish()
    };
  }
};
function createBaseDetokenizeSharesCallback() {
  return {
    deposit: void 0
  };
}
const DetokenizeSharesCallback = {
  typeUrl: "/stride.stakeibc.DetokenizeSharesCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deposit !== void 0) {
      import_records.LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDetokenizeSharesCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = import_records.LSMTokenDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDetokenizeSharesCallback();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? import_records.LSMTokenDeposit.fromPartial(object.deposit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDetokenizeSharesCallback();
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = import_records.LSMTokenDeposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? import_records.LSMTokenDeposit.toAmino(message.deposit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DetokenizeSharesCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DetokenizeSharesCallback.decode(message.value);
  },
  toProto(message) {
    return DetokenizeSharesCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.DetokenizeSharesCallback",
      value: DetokenizeSharesCallback.encode(message).finish()
    };
  }
};
function createBaseLSMLiquidStake() {
  return {
    deposit: void 0,
    hostZone: void 0,
    validator: void 0
  };
}
const LSMLiquidStake = {
  typeUrl: "/stride.stakeibc.LSMLiquidStake",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deposit !== void 0) {
      import_records.LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZone !== void 0) {
      import_host_zone.HostZone.encode(message.hostZone, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== void 0) {
      import_validator.Validator.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLSMLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = import_records.LSMTokenDeposit.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostZone = import_host_zone.HostZone.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = import_validator.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLSMLiquidStake();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? import_records.LSMTokenDeposit.fromPartial(object.deposit) : void 0;
    message.hostZone = object.hostZone !== void 0 && object.hostZone !== null ? import_host_zone.HostZone.fromPartial(object.hostZone) : void 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? import_validator.Validator.fromPartial(object.validator) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseLSMLiquidStake();
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = import_records.LSMTokenDeposit.fromAmino(object.deposit);
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = import_host_zone.HostZone.fromAmino(object.host_zone);
    }
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = import_validator.Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? import_records.LSMTokenDeposit.toAmino(message.deposit) : void 0;
    obj.host_zone = message.hostZone ? import_host_zone.HostZone.toAmino(message.hostZone) : void 0;
    obj.validator = message.validator ? import_validator.Validator.toAmino(message.validator) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return LSMLiquidStake.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LSMLiquidStake.decode(message.value);
  },
  toProto(message) {
    return LSMLiquidStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.LSMLiquidStake",
      value: LSMLiquidStake.encode(message).finish()
    };
  }
};
function createBaseValidatorSharesToTokensQueryCallback() {
  return {
    lsmLiquidStake: void 0
  };
}
const ValidatorSharesToTokensQueryCallback = {
  typeUrl: "/stride.stakeibc.ValidatorSharesToTokensQueryCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.lsmLiquidStake !== void 0) {
      LSMLiquidStake.encode(message.lsmLiquidStake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSharesToTokensQueryCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lsmLiquidStake = LSMLiquidStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSharesToTokensQueryCallback();
    message.lsmLiquidStake = object.lsmLiquidStake !== void 0 && object.lsmLiquidStake !== null ? LSMLiquidStake.fromPartial(object.lsmLiquidStake) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSharesToTokensQueryCallback();
    if (object.lsm_liquid_stake !== void 0 && object.lsm_liquid_stake !== null) {
      message.lsmLiquidStake = LSMLiquidStake.fromAmino(object.lsm_liquid_stake);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.lsm_liquid_stake = message.lsmLiquidStake ? LSMLiquidStake.toAmino(message.lsmLiquidStake) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSharesToTokensQueryCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorSharesToTokensQueryCallback.decode(message.value);
  },
  toProto(message) {
    return ValidatorSharesToTokensQueryCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ValidatorSharesToTokensQueryCallback",
      value: ValidatorSharesToTokensQueryCallback.encode(message).finish()
    };
  }
};
function createBaseDelegatorSharesQueryCallback() {
  return {
    initialValidatorDelegation: ""
  };
}
const DelegatorSharesQueryCallback = {
  typeUrl: "/stride.stakeibc.DelegatorSharesQueryCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.initialValidatorDelegation !== "") {
      writer.uint32(10).string(message.initialValidatorDelegation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegatorSharesQueryCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialValidatorDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegatorSharesQueryCallback();
    message.initialValidatorDelegation = object.initialValidatorDelegation ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegatorSharesQueryCallback();
    if (object.initial_validator_delegation !== void 0 && object.initial_validator_delegation !== null) {
      message.initialValidatorDelegation = object.initial_validator_delegation;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.initial_validator_delegation = message.initialValidatorDelegation === "" ? void 0 : message.initialValidatorDelegation;
    return obj;
  },
  fromAminoMsg(object) {
    return DelegatorSharesQueryCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DelegatorSharesQueryCallback.decode(message.value);
  },
  toProto(message) {
    return DelegatorSharesQueryCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.DelegatorSharesQueryCallback",
      value: DelegatorSharesQueryCallback.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolBalanceQueryCallback() {
  return {
    icaType: 0,
    denom: ""
  };
}
const CommunityPoolBalanceQueryCallback = {
  typeUrl: "/stride.stakeibc.CommunityPoolBalanceQueryCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.icaType !== 0) {
      writer.uint32(8).int32(message.icaType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolBalanceQueryCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icaType = reader.int32();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommunityPoolBalanceQueryCallback();
    message.icaType = object.icaType ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommunityPoolBalanceQueryCallback();
    if (object.ica_type !== void 0 && object.ica_type !== null) {
      message.icaType = object.ica_type;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.ica_type = message.icaType === 0 ? void 0 : message.icaType;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return CommunityPoolBalanceQueryCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CommunityPoolBalanceQueryCallback.decode(message.value);
  },
  toProto(message) {
    return CommunityPoolBalanceQueryCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.CommunityPoolBalanceQueryCallback",
      value: CommunityPoolBalanceQueryCallback.encode(message).finish()
    };
  }
};
function createBaseTradeRouteCallback() {
  return {
    rewardDenom: "",
    hostDenom: ""
  };
}
const TradeRouteCallback = {
  typeUrl: "/stride.stakeibc.TradeRouteCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rewardDenom !== "") {
      writer.uint32(10).string(message.rewardDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(18).string(message.hostDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTradeRouteCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDenom = reader.string();
          break;
        case 2:
          message.hostDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTradeRouteCallback();
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTradeRouteCallback();
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return TradeRouteCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TradeRouteCallback.decode(message.value);
  },
  toProto(message) {
    return TradeRouteCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.TradeRouteCallback",
      value: TradeRouteCallback.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClaimCallback,
  CommunityPoolBalanceQueryCallback,
  DelegateCallback,
  DelegatorSharesQueryCallback,
  DetokenizeSharesCallback,
  LSMLiquidStake,
  RebalanceCallback,
  Rebalancing,
  RedemptionCallback,
  ReinvestCallback,
  SplitDelegation,
  SplitUndelegation,
  TradeRouteCallback,
  UndelegateCallback,
  ValidatorSharesToTokensQueryCallback
});
