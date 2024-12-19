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
var distribution_exports = {};
__export(distribution_exports, {
  CommunityPoolSpendProposal: () => CommunityPoolSpendProposal,
  CommunityPoolSpendProposalWithDeposit: () => CommunityPoolSpendProposalWithDeposit,
  DelegationDelegatorReward: () => DelegationDelegatorReward,
  DelegatorStartingInfo: () => DelegatorStartingInfo,
  FeePool: () => FeePool,
  Params: () => Params,
  ValidatorAccumulatedCommission: () => ValidatorAccumulatedCommission,
  ValidatorCurrentRewards: () => ValidatorCurrentRewards,
  ValidatorHistoricalRewards: () => ValidatorHistoricalRewards,
  ValidatorOutstandingRewards: () => ValidatorOutstandingRewards,
  ValidatorSlashEvent: () => ValidatorSlashEvent,
  ValidatorSlashEvents: () => ValidatorSlashEvents
});
module.exports = __toCommonJS(distribution_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
var import_math = require("@cosmjs/math");
function createBaseParams() {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}
const Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.communityTax !== "") {
      writer.uint32(10).string(import_math.Decimal.fromUserInput(message.communityTax, 18).atomics);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.baseProposerReward, 18).atomics);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.bonusProposerReward, 18).atomics);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
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
        case 1:
          message.communityTax = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.baseProposerReward = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bonusProposerReward = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
    message.communityTax = object.communityTax ?? "";
    message.baseProposerReward = object.baseProposerReward ?? "";
    message.bonusProposerReward = object.bonusProposerReward ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.community_tax !== void 0 && object.community_tax !== null) {
      message.communityTax = object.community_tax;
    }
    if (object.base_proposer_reward !== void 0 && object.base_proposer_reward !== null) {
      message.baseProposerReward = object.base_proposer_reward;
    }
    if (object.bonus_proposer_reward !== void 0 && object.bonus_proposer_reward !== null) {
      message.bonusProposerReward = object.bonus_proposer_reward;
    }
    if (object.withdraw_addr_enabled !== void 0 && object.withdraw_addr_enabled !== null) {
      message.withdrawAddrEnabled = object.withdraw_addr_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.community_tax = message.communityTax === "" ? void 0 : message.communityTax;
    obj.base_proposer_reward = message.baseProposerReward === "" ? void 0 : message.baseProposerReward;
    obj.bonus_proposer_reward = message.bonusProposerReward === "" ? void 0 : message.bonusProposerReward;
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled === false ? void 0 : message.withdrawAddrEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/distribution/Params",
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
      typeUrl: "/cosmos.distribution.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewards() {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
const ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.cumulativeRewardRatio) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulative_reward_ratio?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    if (object.reference_count !== void 0 && object.reference_count !== null) {
      message.referenceCount = object.reference_count;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio;
    }
    obj.reference_count = message.referenceCount === 0 ? void 0 : message.referenceCount;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorHistoricalRewards.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorHistoricalRewards.decode(message.value);
  },
  toProto(message) {
    return ValidatorHistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: BigInt(0)
  };
}
const ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rewards) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    message.period = object.period !== void 0 && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    if (object.period !== void 0 && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    obj.period = message.period !== BigInt(0) ? message.period.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorCurrentRewards.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorCurrentRewards.decode(message.value);
  },
  toProto(message) {
    return ValidatorCurrentRewards.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
const ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.commission) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.commission) {
      obj.commission = message.commission.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.commission = message.commission;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorAccumulatedCommission.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorAccumulatedCommission.decode(message.value);
  },
  toProto(message) {
    return ValidatorAccumulatedCommission.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
const ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rewards) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorOutstandingRewards.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorOutstandingRewards.decode(message.value);
  },
  toProto(message) {
    return ValidatorOutstandingRewards.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvent() {
  return {
    validatorPeriod: BigInt(0),
    fraction: ""
  };
}
const ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64();
          break;
        case 2:
          message.fraction = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== void 0 && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt(0);
    message.fraction = object.fraction ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSlashEvent();
    if (object.validator_period !== void 0 && object.validator_period !== null) {
      message.validatorPeriod = BigInt(object.validator_period);
    }
    if (object.fraction !== void 0 && object.fraction !== null) {
      message.fraction = object.fraction;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_period = message.validatorPeriod !== BigInt(0) ? message.validatorPeriod.toString() : void 0;
    obj.fraction = message.fraction === "" ? void 0 : message.fraction;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSlashEvent.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEvent",
      value: ValidatorSlashEvent.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorSlashEvent.decode(message.value);
  },
  toProto(message) {
    return ValidatorSlashEvent.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
      value: ValidatorSlashEvent.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvents() {
  return {
    validatorSlashEvents: []
  };
}
const ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validatorSlashEvents?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validator_slash_events?.map((e) => ValidatorSlashEvent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map((e) => e ? ValidatorSlashEvent.toAmino(e) : void 0);
    } else {
      obj.validator_slash_events = message.validatorSlashEvents;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSlashEvents.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEvents",
      value: ValidatorSlashEvents.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorSlashEvents.decode(message.value);
  },
  toProto(message) {
    return ValidatorSlashEvents.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
      value: ValidatorSlashEvents.encode(message).finish()
    };
  }
};
function createBaseFeePool() {
  return {
    communityPool: []
  };
}
const FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.communityPool) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFeePool();
    message.communityPool = object.community_pool?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.community_pool = message.communityPool;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FeePool.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FeePool",
      value: FeePool.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return FeePool.decode(message.value);
  },
  toProto(message) {
    return FeePool.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposal() {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
const CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommunityPoolSpendProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== void 0 && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.recipient = message.recipient === "" ? void 0 : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message) {
    return CommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfo() {
  return {
    previousPeriod: BigInt(0),
    stake: "",
    height: BigInt(0)
  };
}
const DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.stake, 18).atomics);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stake = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== void 0 && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
    message.stake = object.stake ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegatorStartingInfo();
    if (object.previous_period !== void 0 && object.previous_period !== null) {
      message.previousPeriod = BigInt(object.previous_period);
    }
    if (object.stake !== void 0 && object.stake !== null) {
      message.stake = object.stake;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.previous_period = message.previousPeriod !== BigInt(0) ? message.previousPeriod.toString() : void 0;
    obj.stake = message.stake === "" ? void 0 : message.stake;
    obj.height = message.height ? message.height.toString() : "0";
    return obj;
  },
  fromAminoMsg(object) {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorStartingInfo",
      value: DelegatorStartingInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelegatorStartingInfo.decode(message.value);
  },
  toProto(message) {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
function createBaseDelegationDelegatorReward() {
  return {
    validatorAddress: "",
    reward: []
  };
}
const DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegationDelegatorReward();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.reward = object.reward?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegationDelegatorReward",
      value: DelegationDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto(message) {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
const CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.recipient !== void 0 && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.recipient = message.recipient === "" ? void 0 : message.recipient;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.deposit = message.deposit === "" ? void 0 : message.deposit;
    return obj;
  },
  fromAminoMsg(object) {
    return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommunityPoolSpendProposalWithDeposit.decode(message.value);
  },
  toProto(message) {
    return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposalWithDeposit,
  DelegationDelegatorReward,
  DelegatorStartingInfo,
  FeePool,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorCurrentRewards,
  ValidatorHistoricalRewards,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent,
  ValidatorSlashEvents
});
