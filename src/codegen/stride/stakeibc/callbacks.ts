import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { LSMTokenDeposit, LSMTokenDepositSDKType } from "../records/records";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccountType, ICAAccountTypeSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface SplitDelegation {
  validator: string;
  amount: string;
}
export interface SplitDelegationSDKType {
  validator: string;
  amount: string;
}
export interface DelegateCallback {
  hostZoneId: string;
  depositRecordId: Long;
  splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackSDKType {
  host_zone_id: string;
  deposit_record_id: Long;
  split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
  userRedemptionRecordId: string;
  chainId: string;
  epochNumber: Long;
}
export interface ClaimCallbackSDKType {
  user_redemption_record_id: string;
  chain_id: string;
  epoch_number: Long;
}
export interface ReinvestCallback {
  reinvestAmount: Coin;
  hostZoneId: string;
}
export interface ReinvestCallbackSDKType {
  reinvest_amount: CoinSDKType;
  host_zone_id: string;
}
export interface UndelegateCallback {
  hostZoneId: string;
  splitDelegations: SplitDelegation[];
  epochUnbondingRecordIds: Long[];
}
export interface UndelegateCallbackSDKType {
  host_zone_id: string;
  split_delegations: SplitDelegationSDKType[];
  epoch_unbonding_record_ids: Long[];
}
export interface RedemptionCallback {
  hostZoneId: string;
  epochUnbondingRecordIds: Long[];
}
export interface RedemptionCallbackSDKType {
  host_zone_id: string;
  epoch_unbonding_record_ids: Long[];
}
export interface Rebalancing {
  srcValidator: string;
  dstValidator: string;
  amt: string;
}
export interface RebalancingSDKType {
  src_validator: string;
  dst_validator: string;
  amt: string;
}
export interface RebalanceCallback {
  hostZoneId: string;
  rebalancings: Rebalancing[];
}
export interface RebalanceCallbackSDKType {
  host_zone_id: string;
  rebalancings: RebalancingSDKType[];
}
export interface DetokenizeSharesCallback {
  deposit: LSMTokenDeposit;
}
export interface DetokenizeSharesCallbackSDKType {
  deposit: LSMTokenDepositSDKType;
}
export interface LSMLiquidStake {
  deposit: LSMTokenDeposit;
  hostZone: HostZone;
  validator: Validator;
}
export interface LSMLiquidStakeSDKType {
  deposit: LSMTokenDepositSDKType;
  host_zone: HostZoneSDKType;
  validator: ValidatorSDKType;
}
export interface ValidatorSharesToTokensQueryCallback {
  lsmLiquidStake: LSMLiquidStake;
}
export interface ValidatorSharesToTokensQueryCallbackSDKType {
  lsm_liquid_stake: LSMLiquidStakeSDKType;
}
export interface DelegatorSharesQueryCallback {
  /** Validator delegation at the time the query is submitted */
  initialValidatorDelegation: string;
}
export interface DelegatorSharesQueryCallbackSDKType {
  /** Validator delegation at the time the query is submitted */
  initial_validator_delegation: string;
}
export interface CommunityPoolBalanceQueryCallback {
  icaType: ICAAccountType;
  denom: string;
}
export interface CommunityPoolBalanceQueryCallbackSDKType {
  ica_type: ICAAccountTypeSDKType;
  denom: string;
}
export interface TradeRouteCallback {
  rewardDenom: string;
  hostDenom: string;
}
export interface TradeRouteCallbackSDKType {
  reward_denom: string;
  host_denom: string;
}

function createBaseSplitDelegation(): SplitDelegation {
  return {
    validator: "",
    amount: ""
  };
}

export const SplitDelegation = {
  encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation {
    const message = createBaseSplitDelegation();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseDelegateCallback(): DelegateCallback {
  return {
    hostZoneId: "",
    depositRecordId: Long.UZERO,
    splitDelegations: []
  };
}

export const DelegateCallback = {
  encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    if (!message.depositRecordId.isZero()) {
      writer.uint32(16).uint64(message.depositRecordId);
    }

    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;

        case 2:
          message.depositRecordId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback {
    const message = createBaseDelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? Long.fromValue(object.depositRecordId) : Long.UZERO;
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    return message;
  }

};

function createBaseClaimCallback(): ClaimCallback {
  return {
    userRedemptionRecordId: "",
    chainId: "",
    epochNumber: Long.UZERO
  };
}

export const ClaimCallback = {
  encode(message: ClaimCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userRedemptionRecordId !== "") {
      writer.uint32(10).string(message.userRedemptionRecordId);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(24).uint64(message.epochNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.epochNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimCallback>): ClaimCallback {
    const message = createBaseClaimCallback();
    message.userRedemptionRecordId = object.userRedemptionRecordId ?? "";
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    return message;
  }

};

function createBaseReinvestCallback(): ReinvestCallback {
  return {
    reinvestAmount: undefined,
    hostZoneId: ""
  };
}

export const ReinvestCallback = {
  encode(message: ReinvestCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reinvestAmount !== undefined) {
      Coin.encode(message.reinvestAmount, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostZoneId !== "") {
      writer.uint32(26).string(message.hostZoneId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReinvestCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReinvestCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reinvestAmount = Coin.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<ReinvestCallback>): ReinvestCallback {
    const message = createBaseReinvestCallback();
    message.reinvestAmount = object.reinvestAmount !== undefined && object.reinvestAmount !== null ? Coin.fromPartial(object.reinvestAmount) : undefined;
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  }

};

function createBaseUndelegateCallback(): UndelegateCallback {
  return {
    hostZoneId: "",
    splitDelegations: [],
    epochUnbondingRecordIds: []
  };
}

export const UndelegateCallback = {
  encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    for (const v of message.splitDelegations) {
      SplitDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    writer.uint32(26).fork();

    for (const v of message.epochUnbondingRecordIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;

        case 2:
          message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.epochUnbondingRecordIds.push((reader.uint64() as Long));
            }
          } else {
            message.epochUnbondingRecordIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback {
    const message = createBaseUndelegateCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.splitDelegations = object.splitDelegations?.map(e => SplitDelegation.fromPartial(e)) || [];
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseRedemptionCallback(): RedemptionCallback {
  return {
    hostZoneId: "",
    epochUnbondingRecordIds: []
  };
}

export const RedemptionCallback = {
  encode(message: RedemptionCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
              message.epochUnbondingRecordIds.push((reader.uint64() as Long));
            }
          } else {
            message.epochUnbondingRecordIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedemptionCallback>): RedemptionCallback {
    const message = createBaseRedemptionCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochUnbondingRecordIds = object.epochUnbondingRecordIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseRebalancing(): Rebalancing {
  return {
    srcValidator: "",
    dstValidator: "",
    amt: ""
  };
}

export const Rebalancing = {
  encode(message: Rebalancing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Rebalancing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<Rebalancing>): Rebalancing {
    const message = createBaseRebalancing();
    message.srcValidator = object.srcValidator ?? "";
    message.dstValidator = object.dstValidator ?? "";
    message.amt = object.amt ?? "";
    return message;
  }

};

function createBaseRebalanceCallback(): RebalanceCallback {
  return {
    hostZoneId: "",
    rebalancings: []
  };
}

export const RebalanceCallback = {
  encode(message: RebalanceCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }

    for (const v of message.rebalancings) {
      Rebalancing.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RebalanceCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<RebalanceCallback>): RebalanceCallback {
    const message = createBaseRebalanceCallback();
    message.hostZoneId = object.hostZoneId ?? "";
    message.rebalancings = object.rebalancings?.map(e => Rebalancing.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDetokenizeSharesCallback(): DetokenizeSharesCallback {
  return {
    deposit: undefined
  };
}

export const DetokenizeSharesCallback = {
  encode(message: DetokenizeSharesCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetokenizeSharesCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetokenizeSharesCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposit = LSMTokenDeposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DetokenizeSharesCallback>): DetokenizeSharesCallback {
    const message = createBaseDetokenizeSharesCallback();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseLSMLiquidStake(): LSMLiquidStake {
  return {
    deposit: undefined,
    hostZone: undefined,
    validator: undefined
  };
}

export const LSMLiquidStake = {
  encode(message: LSMLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(18).fork()).ldelim();
    }

    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LSMLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLSMLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposit = LSMTokenDeposit.decode(reader, reader.uint32());
          break;

        case 2:
          message.hostZone = HostZone.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LSMLiquidStake>): LSMLiquidStake {
    const message = createBaseLSMLiquidStake();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : undefined;
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }

};

function createBaseValidatorSharesToTokensQueryCallback(): ValidatorSharesToTokensQueryCallback {
  return {
    lsmLiquidStake: undefined
  };
}

export const ValidatorSharesToTokensQueryCallback = {
  encode(message: ValidatorSharesToTokensQueryCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lsmLiquidStake !== undefined) {
      LSMLiquidStake.encode(message.lsmLiquidStake, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSharesToTokensQueryCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<ValidatorSharesToTokensQueryCallback>): ValidatorSharesToTokensQueryCallback {
    const message = createBaseValidatorSharesToTokensQueryCallback();
    message.lsmLiquidStake = object.lsmLiquidStake !== undefined && object.lsmLiquidStake !== null ? LSMLiquidStake.fromPartial(object.lsmLiquidStake) : undefined;
    return message;
  }

};

function createBaseDelegatorSharesQueryCallback(): DelegatorSharesQueryCallback {
  return {
    initialValidatorDelegation: ""
  };
}

export const DelegatorSharesQueryCallback = {
  encode(message: DelegatorSharesQueryCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialValidatorDelegation !== "") {
      writer.uint32(10).string(message.initialValidatorDelegation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorSharesQueryCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<DelegatorSharesQueryCallback>): DelegatorSharesQueryCallback {
    const message = createBaseDelegatorSharesQueryCallback();
    message.initialValidatorDelegation = object.initialValidatorDelegation ?? "";
    return message;
  }

};

function createBaseCommunityPoolBalanceQueryCallback(): CommunityPoolBalanceQueryCallback {
  return {
    icaType: 0,
    denom: ""
  };
}

export const CommunityPoolBalanceQueryCallback = {
  encode(message: CommunityPoolBalanceQueryCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.icaType !== 0) {
      writer.uint32(8).int32(message.icaType);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolBalanceQueryCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolBalanceQueryCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.icaType = (reader.int32() as any);
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

  fromPartial(object: DeepPartial<CommunityPoolBalanceQueryCallback>): CommunityPoolBalanceQueryCallback {
    const message = createBaseCommunityPoolBalanceQueryCallback();
    message.icaType = object.icaType ?? 0;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseTradeRouteCallback(): TradeRouteCallback {
  return {
    rewardDenom: "",
    hostDenom: ""
  };
}

export const TradeRouteCallback = {
  encode(message: TradeRouteCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDenom !== "") {
      writer.uint32(10).string(message.rewardDenom);
    }

    if (message.hostDenom !== "") {
      writer.uint32(18).string(message.hostDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRouteCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<TradeRouteCallback>): TradeRouteCallback {
    const message = createBaseTradeRouteCallback();
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  }

};