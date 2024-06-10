import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * CommunityPoolRebate stores the size of the community pool liquid stake
 * (denominated in stTokens) and the rebate rate as a decimal
 */

export interface CommunityPoolRebate {
  /** Rebate percentage as a decimal (e.g. 0.2 for 20%) */
  rebateRate: string;
  /** Number of stTokens received from the community pool liquid stake */

  liquidStakedStTokenAmount: string;
}
/**
 * CommunityPoolRebate stores the size of the community pool liquid stake
 * (denominated in stTokens) and the rebate rate as a decimal
 */

export interface CommunityPoolRebateSDKType {
  /** Rebate percentage as a decimal (e.g. 0.2 for 20%) */
  rebate_rate: string;
  /** Number of stTokens received from the community pool liquid stake */

  liquid_staked_st_token_amount: string;
}
/** Core data structure to track liquid staking zones */

export interface HostZone {
  /** Chain ID of the host zone */
  chainId: string;
  /** Bech32 prefix of host zone's address */

  bech32prefix: string;
  /** ConnectionID from Stride to the host zone (ID is on the stride side) */

  connectionId: string;
  /** Transfer Channel ID from Stride to the host zone (ID is on the stride side) */

  transferChannelId: string;
  /** ibc denom of the host zone's native token on stride */

  ibcDenom: string;
  /** native denom on host zone */

  hostDenom: string;
  /** The unbonding period in days (e.g. 21) */

  unbondingPeriod: Long;
  /** List of validators that are delegated to */

  validators: Validator[];
  /** Address that custodies native tokens during a liquid stake */

  depositAddress: string;
  /** ICA Address on the host zone responsible for collecting rewards */

  withdrawalIcaAddress: string;
  /** ICA Address on the host zone responsible for commission */

  feeIcaAddress: string;
  /** ICA Address on the host zone responsible for staking and unstaking */

  delegationIcaAddress: string;
  /** ICA Address that receives unstaked tokens after they've finished unbonding */

  redemptionIcaAddress: string;
  /**
   * ICA Address that receives tokens from a community pool to liquid stake or
   * redeem In the case of a liquid stake, the community pool deposits native
   * tokens In the case of a redemption, the community pool deposits stTokens
   */

  communityPoolDepositIcaAddress: string;
  /**
   * ICA Address that distributes tokens back to the community pool during a
   * community pool liquid stake or redeem In the case of a liquid stake, the
   * return address sends back stTokens In the case of a redemption, the return
   * address sends back native tokens
   */

  communityPoolReturnIcaAddress: string;
  /**
   * Module account on Stride that receives native tokens from the deposit ICA
   * and liquid stakes them
   */

  communityPoolStakeHoldingAddress: string;
  /**
   * Module account on Stride that receives stTokens from the deposit ICA and
   * redeems them
   */

  communityPoolRedeemHoldingAddress: string;
  /**
   * Optional community pool address to send tokens to after a community pool
   * liquid stake or redemption If this address is empty, the tokens are sent to
   * the main community pool
   */

  communityPoolTreasuryAddress: string;
  /** The total delegated balance on the host zone */

  totalDelegations: string;
  /** The redemption rate from the previous epoch */

  lastRedemptionRate: string;
  /** The current redemption rate */

  redemptionRate: string;
  /**
   * The min outer redemption rate bound - controlled only be governance
   * The min inner bound cannot exceed this bound
   */

  minRedemptionRate: string;
  /**
   * The max outer redemption rate bound - controlled only be governance
   * The max inner bound cannot exceed this bound
   */

  maxRedemptionRate: string;
  /**
   * The min minner redemption rate bound - controlled by the admin
   * If the redemption rate exceeds this bound, the host zone is halted
   */

  minInnerRedemptionRate: string;
  /**
   * The max minner redemption rate bound - controlled by the admin
   * If the redemption rate exceeds this bound, the host zone is halted
   */

  maxInnerRedemptionRate: string;
  /**
   * The max number of messages that can be sent in a delegation
   * or undelegation ICA tx
   */

  maxMessagesPerIcaTx: Long;
  /**
   * An optional fee rebate
   * If there is no rebate for the host zone, this will be nil
   */

  communityPoolRebate: CommunityPoolRebate;
  /** A boolean indicating whether the chain has LSM enabled */

  lsmLiquidStakeEnabled: boolean;
  /** A boolean indicating whether the chain is currently halted */

  halted: boolean;
}
/** Core data structure to track liquid staking zones */

export interface HostZoneSDKType {
  /** Chain ID of the host zone */
  chain_id: string;
  /** Bech32 prefix of host zone's address */

  bech32prefix: string;
  /** ConnectionID from Stride to the host zone (ID is on the stride side) */

  connection_id: string;
  /** Transfer Channel ID from Stride to the host zone (ID is on the stride side) */

  transfer_channel_id: string;
  /** ibc denom of the host zone's native token on stride */

  ibc_denom: string;
  /** native denom on host zone */

  host_denom: string;
  /** The unbonding period in days (e.g. 21) */

  unbonding_period: Long;
  /** List of validators that are delegated to */

  validators: ValidatorSDKType[];
  /** Address that custodies native tokens during a liquid stake */

  deposit_address: string;
  /** ICA Address on the host zone responsible for collecting rewards */

  withdrawal_ica_address: string;
  /** ICA Address on the host zone responsible for commission */

  fee_ica_address: string;
  /** ICA Address on the host zone responsible for staking and unstaking */

  delegation_ica_address: string;
  /** ICA Address that receives unstaked tokens after they've finished unbonding */

  redemption_ica_address: string;
  /**
   * ICA Address that receives tokens from a community pool to liquid stake or
   * redeem In the case of a liquid stake, the community pool deposits native
   * tokens In the case of a redemption, the community pool deposits stTokens
   */

  community_pool_deposit_ica_address: string;
  /**
   * ICA Address that distributes tokens back to the community pool during a
   * community pool liquid stake or redeem In the case of a liquid stake, the
   * return address sends back stTokens In the case of a redemption, the return
   * address sends back native tokens
   */

  community_pool_return_ica_address: string;
  /**
   * Module account on Stride that receives native tokens from the deposit ICA
   * and liquid stakes them
   */

  community_pool_stake_holding_address: string;
  /**
   * Module account on Stride that receives stTokens from the deposit ICA and
   * redeems them
   */

  community_pool_redeem_holding_address: string;
  /**
   * Optional community pool address to send tokens to after a community pool
   * liquid stake or redemption If this address is empty, the tokens are sent to
   * the main community pool
   */

  community_pool_treasury_address: string;
  /** The total delegated balance on the host zone */

  total_delegations: string;
  /** The redemption rate from the previous epoch */

  last_redemption_rate: string;
  /** The current redemption rate */

  redemption_rate: string;
  /**
   * The min outer redemption rate bound - controlled only be governance
   * The min inner bound cannot exceed this bound
   */

  min_redemption_rate: string;
  /**
   * The max outer redemption rate bound - controlled only be governance
   * The max inner bound cannot exceed this bound
   */

  max_redemption_rate: string;
  /**
   * The min minner redemption rate bound - controlled by the admin
   * If the redemption rate exceeds this bound, the host zone is halted
   */

  min_inner_redemption_rate: string;
  /**
   * The max minner redemption rate bound - controlled by the admin
   * If the redemption rate exceeds this bound, the host zone is halted
   */

  max_inner_redemption_rate: string;
  /**
   * The max number of messages that can be sent in a delegation
   * or undelegation ICA tx
   */

  max_messages_per_ica_tx: Long;
  /**
   * An optional fee rebate
   * If there is no rebate for the host zone, this will be nil
   */

  community_pool_rebate: CommunityPoolRebateSDKType;
  /** A boolean indicating whether the chain has LSM enabled */

  lsm_liquid_stake_enabled: boolean;
  /** A boolean indicating whether the chain is currently halted */

  halted: boolean;
}

function createBaseCommunityPoolRebate(): CommunityPoolRebate {
  return {
    rebateRate: "",
    liquidStakedStTokenAmount: ""
  };
}

export const CommunityPoolRebate = {
  encode(message: CommunityPoolRebate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rebateRate !== "") {
      writer.uint32(10).string(message.rebateRate);
    }

    if (message.liquidStakedStTokenAmount !== "") {
      writer.uint32(18).string(message.liquidStakedStTokenAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolRebate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolRebate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rebateRate = reader.string();
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

  fromPartial(object: DeepPartial<CommunityPoolRebate>): CommunityPoolRebate {
    const message = createBaseCommunityPoolRebate();
    message.rebateRate = object.rebateRate ?? "";
    message.liquidStakedStTokenAmount = object.liquidStakedStTokenAmount ?? "";
    return message;
  }

};

function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    bech32prefix: "",
    connectionId: "",
    transferChannelId: "",
    ibcDenom: "",
    hostDenom: "",
    unbondingPeriod: Long.UZERO,
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
    maxMessagesPerIcaTx: Long.UZERO,
    communityPoolRebate: undefined,
    lsmLiquidStakeEnabled: false,
    halted: false
  };
}

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.unbondingPeriod.isZero()) {
      writer.uint32(208).uint64(message.unbondingPeriod);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
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
      writer.uint32(82).string(message.lastRedemptionRate);
    }

    if (message.redemptionRate !== "") {
      writer.uint32(90).string(message.redemptionRate);
    }

    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(message.minRedemptionRate);
    }

    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(message.maxRedemptionRate);
    }

    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(226).string(message.minInnerRedemptionRate);
    }

    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(234).string(message.maxInnerRedemptionRate);
    }

    if (!message.maxMessagesPerIcaTx.isZero()) {
      writer.uint32(288).uint64(message.maxMessagesPerIcaTx);
    }

    if (message.communityPoolRebate !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.unbondingPeriod = (reader.uint64() as Long);
          break;

        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
          message.lastRedemptionRate = reader.string();
          break;

        case 11:
          message.redemptionRate = reader.string();
          break;

        case 20:
          message.minRedemptionRate = reader.string();
          break;

        case 21:
          message.maxRedemptionRate = reader.string();
          break;

        case 28:
          message.minInnerRedemptionRate = reader.string();
          break;

        case 29:
          message.maxInnerRedemptionRate = reader.string();
          break;

        case 36:
          message.maxMessagesPerIcaTx = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<HostZone>): HostZone {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.connectionId = object.connectionId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Long.fromValue(object.unbondingPeriod) : Long.UZERO;
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
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
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== undefined && object.maxMessagesPerIcaTx !== null ? Long.fromValue(object.maxMessagesPerIcaTx) : Long.UZERO;
    message.communityPoolRebate = object.communityPoolRebate !== undefined && object.communityPoolRebate !== null ? CommunityPoolRebate.fromPartial(object.communityPoolRebate) : undefined;
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.halted = object.halted ?? false;
    return message;
  }

};