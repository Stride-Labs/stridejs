import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** Minter represents the minting state. */

export interface Minter {
  /** current epoch provisions */
  epochProvisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  /** current epoch provisions */
  epoch_provisions: string;
}
/** next id: 5 */

export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */

  communityPoolGrowth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */

  communityPoolSecurityBudget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */

  strategicReserve: string;
}
/** next id: 5 */

export interface DistributionProportionsSDKType {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: growth.
   */

  community_pool_growth: string;
  /**
   * community_pool defines the proportion of the minted mint_denom that is
   * to be allocated to the community pool: security budget.
   */

  community_pool_security_budget: string;
  /**
   * strategic_reserve defines the proportion of the minted mint_denom that is
   * to be allocated to the pool: strategic reserve.
   */

  strategic_reserve: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** epoch provisions from the first epoch */

  genesisEpochProvisions: string;
  /** mint epoch identifier */

  epochIdentifier: string;
  /** number of epochs take to reduce rewards */

  reductionPeriodInEpochs: Long;
  /** reduction multiplier to execute on each period */

  reductionFactor: string;
  /** distribution_proportions defines the proportion of the minted denom */

  distributionProportions?: DistributionProportions;
  /** start epoch to distribute minting rewards */

  mintingRewardsDistributionStartEpoch: Long;
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  /** type of coin to mint */
  mint_denom: string;
  /** epoch provisions from the first epoch */

  genesis_epoch_provisions: string;
  /** mint epoch identifier */

  epoch_identifier: string;
  /** number of epochs take to reduce rewards */

  reduction_period_in_epochs: Long;
  /** reduction multiplier to execute on each period */

  reduction_factor: string;
  /** distribution_proportions defines the proportion of the minted denom */

  distribution_proportions?: DistributionProportionsSDKType;
  /** start epoch to distribute minting rewards */

  minting_rewards_distribution_start_epoch: Long;
}

function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.epochProvisions = object.epochProvisions ?? "";
    return message;
  }

};

function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    communityPoolGrowth: "",
    communityPoolSecurityBudget: "",
    strategicReserve: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }

    if (message.communityPoolGrowth !== "") {
      writer.uint32(18).string(message.communityPoolGrowth);
    }

    if (message.communityPoolSecurityBudget !== "") {
      writer.uint32(26).string(message.communityPoolSecurityBudget);
    }

    if (message.strategicReserve !== "") {
      writer.uint32(34).string(message.strategicReserve);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;

        case 2:
          message.communityPoolGrowth = reader.string();
          break;

        case 3:
          message.communityPoolSecurityBudget = reader.string();
          break;

        case 4:
          message.strategicReserve = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.communityPoolGrowth = object.communityPoolGrowth ?? "";
    message.communityPoolSecurityBudget = object.communityPoolSecurityBudget ?? "";
    message.strategicReserve = object.strategicReserve ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    genesisEpochProvisions: "",
    epochIdentifier: "",
    reductionPeriodInEpochs: Long.ZERO,
    reductionFactor: "",
    distributionProportions: undefined,
    mintingRewardsDistributionStartEpoch: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }

    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }

    if (!message.reductionPeriodInEpochs.isZero()) {
      writer.uint32(32).int64(message.reductionPeriodInEpochs);
    }

    if (message.reductionFactor !== "") {
      writer.uint32(42).string(message.reductionFactor);
    }

    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
    }

    if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
      writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;

        case 2:
          message.genesisEpochProvisions = reader.string();
          break;

        case 3:
          message.epochIdentifier = reader.string();
          break;

        case 4:
          message.reductionPeriodInEpochs = (reader.int64() as Long);
          break;

        case 5:
          message.reductionFactor = reader.string();
          break;

        case 6:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        case 7:
          message.mintingRewardsDistributionStartEpoch = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? Long.fromValue(object.reductionPeriodInEpochs) : Long.ZERO;
    message.reductionFactor = object.reductionFactor ?? "";
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? Long.fromValue(object.mintingRewardsDistributionStartEpoch) : Long.ZERO;
    return message;
  }

};