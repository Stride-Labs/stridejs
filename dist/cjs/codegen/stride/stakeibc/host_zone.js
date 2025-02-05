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
var host_zone_exports = {};
__export(host_zone_exports, {
  CommunityPoolRebate: () => CommunityPoolRebate,
  HostZone: () => HostZone
});
module.exports = __toCommonJS(host_zone_exports);
var import_validator = require("./validator");
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
function createBaseCommunityPoolRebate() {
  return {
    rebateRate: "",
    liquidStakedStTokenAmount: ""
  };
}
const CommunityPoolRebate = {
  typeUrl: "/stride.stakeibc.CommunityPoolRebate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rebateRate !== "") {
      writer.uint32(10).string(import_math.Decimal.fromUserInput(message.rebateRate, 18).atomics);
    }
    if (message.liquidStakedStTokenAmount !== "") {
      writer.uint32(18).string(message.liquidStakedStTokenAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolRebate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebateRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.liquidStakedStTokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommunityPoolRebate();
    message.rebateRate = object.rebateRate ?? "";
    message.liquidStakedStTokenAmount = object.liquidStakedStTokenAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommunityPoolRebate();
    if (object.rebate_rate !== void 0 && object.rebate_rate !== null) {
      message.rebateRate = object.rebate_rate;
    }
    if (object.liquid_staked_st_token_amount !== void 0 && object.liquid_staked_st_token_amount !== null) {
      message.liquidStakedStTokenAmount = object.liquid_staked_st_token_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rebate_rate = message.rebateRate === "" ? void 0 : message.rebateRate;
    obj.liquid_staked_st_token_amount = message.liquidStakedStTokenAmount === "" ? void 0 : message.liquidStakedStTokenAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return CommunityPoolRebate.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CommunityPoolRebate.decode(message.value);
  },
  toProto(message) {
    return CommunityPoolRebate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.CommunityPoolRebate",
      value: CommunityPoolRebate.encode(message).finish()
    };
  }
};
function createBaseHostZone() {
  return {
    chainId: "",
    bech32prefix: "",
    connectionId: "",
    transferChannelId: "",
    ibcDenom: "",
    hostDenom: "",
    unbondingPeriod: BigInt(0),
    validators: [],
    depositAddress: "",
    withdrawalIcaAddress: "",
    feeIcaAddress: "",
    delegationIcaAddress: "",
    redemptionIcaAddress: "",
    communityPoolDepositIcaAddress: "",
    communityPoolReturnIcaAddress: "",
    communityPoolStakeHoldingAddress: "",
    communityPoolRedeemHoldingAddress: "",
    communityPoolTreasuryAddress: "",
    totalDelegations: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    minRedemptionRate: "",
    maxRedemptionRate: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: "",
    maxMessagesPerIcaTx: BigInt(0),
    redemptionsEnabled: false,
    communityPoolRebate: void 0,
    lsmLiquidStakeEnabled: false,
    halted: false
  };
}
const HostZone = {
  typeUrl: "/stride.stakeibc.HostZone",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }
    if (message.unbondingPeriod !== BigInt(0)) {
      writer.uint32(208).uint64(message.unbondingPeriod);
    }
    for (const v of message.validators) {
      import_validator.Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositAddress !== "") {
      writer.uint32(146).string(message.depositAddress);
    }
    if (message.withdrawalIcaAddress !== "") {
      writer.uint32(178).string(message.withdrawalIcaAddress);
    }
    if (message.feeIcaAddress !== "") {
      writer.uint32(186).string(message.feeIcaAddress);
    }
    if (message.delegationIcaAddress !== "") {
      writer.uint32(194).string(message.delegationIcaAddress);
    }
    if (message.redemptionIcaAddress !== "") {
      writer.uint32(202).string(message.redemptionIcaAddress);
    }
    if (message.communityPoolDepositIcaAddress !== "") {
      writer.uint32(242).string(message.communityPoolDepositIcaAddress);
    }
    if (message.communityPoolReturnIcaAddress !== "") {
      writer.uint32(250).string(message.communityPoolReturnIcaAddress);
    }
    if (message.communityPoolStakeHoldingAddress !== "") {
      writer.uint32(258).string(message.communityPoolStakeHoldingAddress);
    }
    if (message.communityPoolRedeemHoldingAddress !== "") {
      writer.uint32(266).string(message.communityPoolRedeemHoldingAddress);
    }
    if (message.communityPoolTreasuryAddress !== "") {
      writer.uint32(282).string(message.communityPoolTreasuryAddress);
    }
    if (message.totalDelegations !== "") {
      writer.uint32(106).string(message.totalDelegations);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(import_math.Decimal.fromUserInput(message.lastRedemptionRate, 18).atomics);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(90).string(import_math.Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(import_math.Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(import_math.Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(226).string(import_math.Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(234).string(import_math.Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    if (message.maxMessagesPerIcaTx !== BigInt(0)) {
      writer.uint32(288).uint64(message.maxMessagesPerIcaTx);
    }
    if (message.redemptionsEnabled === true) {
      writer.uint32(296).bool(message.redemptionsEnabled);
    }
    if (message.communityPoolRebate !== void 0) {
      CommunityPoolRebate.encode(message.communityPoolRebate, writer.uint32(274).fork()).ldelim();
    }
    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(216).bool(message.lsmLiquidStakeEnabled);
    }
    if (message.halted === true) {
      writer.uint32(152).bool(message.halted);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 17:
          message.bech32prefix = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 12:
          message.transferChannelId = reader.string();
          break;
        case 8:
          message.ibcDenom = reader.string();
          break;
        case 9:
          message.hostDenom = reader.string();
          break;
        case 26:
          message.unbondingPeriod = reader.uint64();
          break;
        case 3:
          message.validators.push(import_validator.Validator.decode(reader, reader.uint32()));
          break;
        case 18:
          message.depositAddress = reader.string();
          break;
        case 22:
          message.withdrawalIcaAddress = reader.string();
          break;
        case 23:
          message.feeIcaAddress = reader.string();
          break;
        case 24:
          message.delegationIcaAddress = reader.string();
          break;
        case 25:
          message.redemptionIcaAddress = reader.string();
          break;
        case 30:
          message.communityPoolDepositIcaAddress = reader.string();
          break;
        case 31:
          message.communityPoolReturnIcaAddress = reader.string();
          break;
        case 32:
          message.communityPoolStakeHoldingAddress = reader.string();
          break;
        case 33:
          message.communityPoolRedeemHoldingAddress = reader.string();
          break;
        case 35:
          message.communityPoolTreasuryAddress = reader.string();
          break;
        case 13:
          message.totalDelegations = reader.string();
          break;
        case 10:
          message.lastRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.redemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.minRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.maxRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 28:
          message.minInnerRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 29:
          message.maxInnerRedemptionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 36:
          message.maxMessagesPerIcaTx = reader.uint64();
          break;
        case 37:
          message.redemptionsEnabled = reader.bool();
          break;
        case 34:
          message.communityPoolRebate = CommunityPoolRebate.decode(reader, reader.uint32());
          break;
        case 27:
          message.lsmLiquidStakeEnabled = reader.bool();
          break;
        case 19:
          message.halted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.connectionId = object.connectionId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== void 0 && object.unbondingPeriod !== null ? BigInt(object.unbondingPeriod.toString()) : BigInt(0);
    message.validators = object.validators?.map((e) => import_validator.Validator.fromPartial(e)) || [];
    message.depositAddress = object.depositAddress ?? "";
    message.withdrawalIcaAddress = object.withdrawalIcaAddress ?? "";
    message.feeIcaAddress = object.feeIcaAddress ?? "";
    message.delegationIcaAddress = object.delegationIcaAddress ?? "";
    message.redemptionIcaAddress = object.redemptionIcaAddress ?? "";
    message.communityPoolDepositIcaAddress = object.communityPoolDepositIcaAddress ?? "";
    message.communityPoolReturnIcaAddress = object.communityPoolReturnIcaAddress ?? "";
    message.communityPoolStakeHoldingAddress = object.communityPoolStakeHoldingAddress ?? "";
    message.communityPoolRedeemHoldingAddress = object.communityPoolRedeemHoldingAddress ?? "";
    message.communityPoolTreasuryAddress = object.communityPoolTreasuryAddress ?? "";
    message.totalDelegations = object.totalDelegations ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== void 0 && object.maxMessagesPerIcaTx !== null ? BigInt(object.maxMessagesPerIcaTx.toString()) : BigInt(0);
    message.redemptionsEnabled = object.redemptionsEnabled ?? false;
    message.communityPoolRebate = object.communityPoolRebate !== void 0 && object.communityPoolRebate !== null ? CommunityPoolRebate.fromPartial(object.communityPoolRebate) : void 0;
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.halted = object.halted ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseHostZone();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.bech32prefix !== void 0 && object.bech32prefix !== null) {
      message.bech32prefix = object.bech32prefix;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.transfer_channel_id !== void 0 && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.ibc_denom !== void 0 && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.unbonding_period !== void 0 && object.unbonding_period !== null) {
      message.unbondingPeriod = BigInt(object.unbonding_period);
    }
    message.validators = object.validators?.map((e) => import_validator.Validator.fromAmino(e)) || [];
    if (object.deposit_address !== void 0 && object.deposit_address !== null) {
      message.depositAddress = object.deposit_address;
    }
    if (object.withdrawal_ica_address !== void 0 && object.withdrawal_ica_address !== null) {
      message.withdrawalIcaAddress = object.withdrawal_ica_address;
    }
    if (object.fee_ica_address !== void 0 && object.fee_ica_address !== null) {
      message.feeIcaAddress = object.fee_ica_address;
    }
    if (object.delegation_ica_address !== void 0 && object.delegation_ica_address !== null) {
      message.delegationIcaAddress = object.delegation_ica_address;
    }
    if (object.redemption_ica_address !== void 0 && object.redemption_ica_address !== null) {
      message.redemptionIcaAddress = object.redemption_ica_address;
    }
    if (object.community_pool_deposit_ica_address !== void 0 && object.community_pool_deposit_ica_address !== null) {
      message.communityPoolDepositIcaAddress = object.community_pool_deposit_ica_address;
    }
    if (object.community_pool_return_ica_address !== void 0 && object.community_pool_return_ica_address !== null) {
      message.communityPoolReturnIcaAddress = object.community_pool_return_ica_address;
    }
    if (object.community_pool_stake_holding_address !== void 0 && object.community_pool_stake_holding_address !== null) {
      message.communityPoolStakeHoldingAddress = object.community_pool_stake_holding_address;
    }
    if (object.community_pool_redeem_holding_address !== void 0 && object.community_pool_redeem_holding_address !== null) {
      message.communityPoolRedeemHoldingAddress = object.community_pool_redeem_holding_address;
    }
    if (object.community_pool_treasury_address !== void 0 && object.community_pool_treasury_address !== null) {
      message.communityPoolTreasuryAddress = object.community_pool_treasury_address;
    }
    if (object.total_delegations !== void 0 && object.total_delegations !== null) {
      message.totalDelegations = object.total_delegations;
    }
    if (object.last_redemption_rate !== void 0 && object.last_redemption_rate !== null) {
      message.lastRedemptionRate = object.last_redemption_rate;
    }
    if (object.redemption_rate !== void 0 && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.min_redemption_rate !== void 0 && object.min_redemption_rate !== null) {
      message.minRedemptionRate = object.min_redemption_rate;
    }
    if (object.max_redemption_rate !== void 0 && object.max_redemption_rate !== null) {
      message.maxRedemptionRate = object.max_redemption_rate;
    }
    if (object.min_inner_redemption_rate !== void 0 && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== void 0 && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    if (object.max_messages_per_ica_tx !== void 0 && object.max_messages_per_ica_tx !== null) {
      message.maxMessagesPerIcaTx = BigInt(object.max_messages_per_ica_tx);
    }
    if (object.redemptions_enabled !== void 0 && object.redemptions_enabled !== null) {
      message.redemptionsEnabled = object.redemptions_enabled;
    }
    if (object.community_pool_rebate !== void 0 && object.community_pool_rebate !== null) {
      message.communityPoolRebate = CommunityPoolRebate.fromAmino(object.community_pool_rebate);
    }
    if (object.lsm_liquid_stake_enabled !== void 0 && object.lsm_liquid_stake_enabled !== null) {
      message.lsmLiquidStakeEnabled = object.lsm_liquid_stake_enabled;
    }
    if (object.halted !== void 0 && object.halted !== null) {
      message.halted = object.halted;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.bech32prefix = message.bech32prefix === "" ? void 0 : message.bech32prefix;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.transfer_channel_id = message.transferChannelId === "" ? void 0 : message.transferChannelId;
    obj.ibc_denom = message.ibcDenom === "" ? void 0 : message.ibcDenom;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    obj.unbonding_period = message.unbondingPeriod !== BigInt(0) ? message.unbondingPeriod?.toString() : void 0;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? import_validator.Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.deposit_address = message.depositAddress === "" ? void 0 : message.depositAddress;
    obj.withdrawal_ica_address = message.withdrawalIcaAddress === "" ? void 0 : message.withdrawalIcaAddress;
    obj.fee_ica_address = message.feeIcaAddress === "" ? void 0 : message.feeIcaAddress;
    obj.delegation_ica_address = message.delegationIcaAddress === "" ? void 0 : message.delegationIcaAddress;
    obj.redemption_ica_address = message.redemptionIcaAddress === "" ? void 0 : message.redemptionIcaAddress;
    obj.community_pool_deposit_ica_address = message.communityPoolDepositIcaAddress === "" ? void 0 : message.communityPoolDepositIcaAddress;
    obj.community_pool_return_ica_address = message.communityPoolReturnIcaAddress === "" ? void 0 : message.communityPoolReturnIcaAddress;
    obj.community_pool_stake_holding_address = message.communityPoolStakeHoldingAddress === "" ? void 0 : message.communityPoolStakeHoldingAddress;
    obj.community_pool_redeem_holding_address = message.communityPoolRedeemHoldingAddress === "" ? void 0 : message.communityPoolRedeemHoldingAddress;
    obj.community_pool_treasury_address = message.communityPoolTreasuryAddress === "" ? void 0 : message.communityPoolTreasuryAddress;
    obj.total_delegations = message.totalDelegations === "" ? void 0 : message.totalDelegations;
    obj.last_redemption_rate = message.lastRedemptionRate === "" ? void 0 : message.lastRedemptionRate;
    obj.redemption_rate = message.redemptionRate === "" ? void 0 : message.redemptionRate;
    obj.min_redemption_rate = message.minRedemptionRate === "" ? void 0 : message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate === "" ? void 0 : message.maxRedemptionRate;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate === "" ? void 0 : message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate === "" ? void 0 : message.maxInnerRedemptionRate;
    obj.max_messages_per_ica_tx = message.maxMessagesPerIcaTx !== BigInt(0) ? message.maxMessagesPerIcaTx?.toString() : void 0;
    obj.redemptions_enabled = message.redemptionsEnabled === false ? void 0 : message.redemptionsEnabled;
    obj.community_pool_rebate = message.communityPoolRebate ? CommunityPoolRebate.toAmino(message.communityPoolRebate) : void 0;
    obj.lsm_liquid_stake_enabled = message.lsmLiquidStakeEnabled === false ? void 0 : message.lsmLiquidStakeEnabled;
    obj.halted = message.halted === false ? void 0 : message.halted;
    return obj;
  },
  fromAminoMsg(object) {
    return HostZone.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HostZone.decode(message.value);
  },
  toProto(message) {
    return HostZone.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.HostZone",
      value: HostZone.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CommunityPoolRebate,
  HostZone
});
