import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseMinter() {
  return {
    epochProvisions: ""
  };
}
const Minter = {
  typeUrl: "/stride.mint.v1beta1.Minter",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.epochProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMinter();
    if (object.epoch_provisions !== void 0 && object.epoch_provisions !== null) {
      message.epochProvisions = object.epoch_provisions;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_provisions = message.epochProvisions === "" ? void 0 : message.epochProvisions;
    return obj;
  },
  fromAminoMsg(object) {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Minter.decode(message.value);
  },
  toProto(message) {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseDistributionProportions() {
  return {
    staking: "",
    communityPoolGrowth: "",
    communityPoolSecurityBudget: "",
    strategicReserve: ""
  };
}
const DistributionProportions = {
  typeUrl: "/stride.mint.v1beta1.DistributionProportions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.communityPoolGrowth !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.communityPoolGrowth, 18).atomics);
    }
    if (message.communityPoolSecurityBudget !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityPoolSecurityBudget, 18).atomics);
    }
    if (message.strategicReserve !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.strategicReserve, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.communityPoolGrowth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.communityPoolSecurityBudget = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.strategicReserve = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.communityPoolGrowth = object.communityPoolGrowth ?? "";
    message.communityPoolSecurityBudget = object.communityPoolSecurityBudget ?? "";
    message.strategicReserve = object.strategicReserve ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDistributionProportions();
    if (object.staking !== void 0 && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.community_pool_growth !== void 0 && object.community_pool_growth !== null) {
      message.communityPoolGrowth = object.community_pool_growth;
    }
    if (object.community_pool_security_budget !== void 0 && object.community_pool_security_budget !== null) {
      message.communityPoolSecurityBudget = object.community_pool_security_budget;
    }
    if (object.strategic_reserve !== void 0 && object.strategic_reserve !== null) {
      message.strategicReserve = object.strategic_reserve;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.staking = message.staking === "" ? void 0 : message.staking;
    obj.community_pool_growth = message.communityPoolGrowth === "" ? void 0 : message.communityPoolGrowth;
    obj.community_pool_security_budget = message.communityPoolSecurityBudget === "" ? void 0 : message.communityPoolSecurityBudget;
    obj.strategic_reserve = message.strategicReserve === "" ? void 0 : message.strategicReserve;
    return obj;
  },
  fromAminoMsg(object) {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DistributionProportions.decode(message.value);
  },
  toProto(message) {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: BigInt(0),
    reductionFactor: "",
    distributionProportions: DistributionProportions.fromPartial({}),
    mintingRewardsDistributionStartEpoch: BigInt(0)
  };
}
const Params = {
  typeUrl: "/stride.mint.v1beta1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.reductionPeriodInEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.distributionProportions !== void 0) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }
    if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.genesisEpochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.reductionPeriodInEpochs = reader.int64();
          break;
        case 5:
          message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 7:
          message.mintingRewardsDistributionStartEpoch = reader.int64();
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
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== void 0 && object.reductionPeriodInEpochs !== null ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0);
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== void 0 && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : void 0;
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== void 0 && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.mint_denom !== void 0 && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.genesis_epoch_provisions !== void 0 && object.genesis_epoch_provisions !== null) {
      message.genesisEpochProvisions = object.genesis_epoch_provisions;
    }
    if (object.epoch_identifier !== void 0 && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.reduction_period_in_epochs !== void 0 && object.reduction_period_in_epochs !== null) {
      message.reductionPeriodInEpochs = BigInt(object.reduction_period_in_epochs);
    }
    if (object.reduction_factor !== void 0 && object.reduction_factor !== null) {
      message.reductionFactor = object.reduction_factor;
    }
    if (object.distribution_proportions !== void 0 && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    if (object.minting_rewards_distribution_start_epoch !== void 0 && object.minting_rewards_distribution_start_epoch !== null) {
      message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.mint_denom = message.mintDenom === "" ? void 0 : message.mintDenom;
    obj.genesis_epoch_provisions = message.genesisEpochProvisions === "" ? void 0 : message.genesisEpochProvisions;
    obj.epoch_identifier = message.epochIdentifier === "" ? void 0 : message.epochIdentifier;
    obj.reduction_period_in_epochs = message.reductionPeriodInEpochs !== BigInt(0) ? message.reductionPeriodInEpochs?.toString() : void 0;
    obj.reduction_factor = message.reductionFactor === "" ? void 0 : message.reductionFactor;
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : void 0;
    obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch !== BigInt(0) ? message.mintingRewardsDistributionStartEpoch?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  DistributionProportions,
  Minter,
  Params
};
