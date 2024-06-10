import { Validator, ValidatorSDKType } from "./validator";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export enum AuthzPermissionChange {
  /** GRANT - Grant the address trade permissions */
  GRANT = 0,

  /** REVOKE - Revoke trade permissions from the address */
  REVOKE = 1,
  UNRECOGNIZED = -1,
}
export enum AuthzPermissionChangeSDKType {
  /** GRANT - Grant the address trade permissions */
  GRANT = 0,

  /** REVOKE - Revoke trade permissions from the address */
  REVOKE = 1,
  UNRECOGNIZED = -1,
}
export function authzPermissionChangeFromJSON(object: any): AuthzPermissionChange {
  switch (object) {
    case 0:
    case "GRANT":
      return AuthzPermissionChange.GRANT;

    case 1:
    case "REVOKE":
      return AuthzPermissionChange.REVOKE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthzPermissionChange.UNRECOGNIZED;
  }
}
export function authzPermissionChangeToJSON(object: AuthzPermissionChange): string {
  switch (object) {
    case AuthzPermissionChange.GRANT:
      return "GRANT";

    case AuthzPermissionChange.REVOKE:
      return "REVOKE";

    default:
      return "UNKNOWN";
  }
}
export interface MsgUpdateInnerRedemptionRateBounds {
  creator: string;
  chainId: string;
  minInnerRedemptionRate: string;
  maxInnerRedemptionRate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
  creator: string;
  chain_id: string;
  min_inner_redemption_rate: string;
  max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {}
export interface MsgLiquidStake {
  creator: string;
  amount: string;
  hostDenom: string;
}
export interface MsgLiquidStakeSDKType {
  creator: string;
  amount: string;
  host_denom: string;
}
export interface MsgLiquidStakeResponse {
  stToken: Coin;
}
export interface MsgLiquidStakeResponseSDKType {
  st_token: CoinSDKType;
}
export interface MsgLSMLiquidStake {
  creator: string;
  amount: string;
  lsmTokenIbcDenom: string;
}
export interface MsgLSMLiquidStakeSDKType {
  creator: string;
  amount: string;
  lsm_token_ibc_denom: string;
}
export interface MsgLSMLiquidStakeResponse {
  transactionComplete: boolean;
}
export interface MsgLSMLiquidStakeResponseSDKType {
  transaction_complete: boolean;
}
export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceSDKType {
  creator: string;
  chain_id: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceResponse {}
export interface MsgClearBalanceResponseSDKType {}
export interface MsgRedeemStake {
  creator: string;
  amount: string;
  hostZone: string;
  receiver: string;
}
export interface MsgRedeemStakeSDKType {
  creator: string;
  amount: string;
  host_zone: string;
  receiver: string;
}
export interface MsgRedeemStakeResponse {}
export interface MsgRedeemStakeResponseSDKType {}
/** next: 15 */

export interface MsgRegisterHostZone {
  connectionId: string;
  bech32prefix: string;
  hostDenom: string;
  ibcDenom: string;
  creator: string;
  transferChannelId: string;
  unbondingPeriod: Long;
  minRedemptionRate: string;
  maxRedemptionRate: string;
  lsmLiquidStakeEnabled: boolean;
  communityPoolTreasuryAddress: string;
  maxMessagesPerIcaTx: Long;
}
/** next: 15 */

export interface MsgRegisterHostZoneSDKType {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_period: Long;
  min_redemption_rate: string;
  max_redemption_rate: string;
  lsm_liquid_stake_enabled: boolean;
  community_pool_treasury_address: string;
  max_messages_per_ica_tx: Long;
}
export interface MsgRegisterHostZoneResponse {}
export interface MsgRegisterHostZoneResponseSDKType {}
export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver} */

  hostZoneId: string;
  epoch: Long;
  receiver: string;
}
export interface MsgClaimUndelegatedTokensSDKType {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver} */

  host_zone_id: string;
  epoch: Long;
  receiver: string;
}
export interface MsgClaimUndelegatedTokensResponse {}
export interface MsgClaimUndelegatedTokensResponseSDKType {}
export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: Long;
}
export interface MsgRebalanceValidatorsSDKType {
  creator: string;
  host_zone: string;
  num_rebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {}
export interface MsgRebalanceValidatorsResponseSDKType {}
export interface MsgAddValidators {
  creator: string;
  hostZone: string;
  validators: Validator[];
}
export interface MsgAddValidatorsSDKType {
  creator: string;
  host_zone: string;
  validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {}
export interface MsgAddValidatorsResponseSDKType {}
export interface ValidatorWeight {
  address: string;
  weight: Long;
}
export interface ValidatorWeightSDKType {
  address: string;
  weight: Long;
}
export interface MsgChangeValidatorWeights {
  creator: string;
  hostZone: string;
  validatorWeights: ValidatorWeight[];
}
export interface MsgChangeValidatorWeightsSDKType {
  creator: string;
  host_zone: string;
  validator_weights: ValidatorWeightSDKType[];
}
export interface MsgChangeValidatorWeightsResponse {}
export interface MsgChangeValidatorWeightsResponseSDKType {}
export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}
export interface MsgDeleteValidatorSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
}
export interface MsgDeleteValidatorResponse {}
export interface MsgDeleteValidatorResponseSDKType {}
export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  connectionId: string;
  accountOwner: string;
}
export interface MsgRestoreInterchainAccountSDKType {
  creator: string;
  chain_id: string;
  connection_id: string;
  account_owner: string;
}
export interface MsgRestoreInterchainAccountResponse {}
export interface MsgRestoreInterchainAccountResponseSDKType {}
export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {}
export interface MsgCalibrateDelegation {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgCalibrateDelegationSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgCalibrateDelegationResponse {}
export interface MsgCalibrateDelegationResponseSDKType {}
export interface MsgResumeHostZone {
  creator: string;
  chainId: string;
}
export interface MsgResumeHostZoneSDKType {
  creator: string;
  chain_id: string;
}
export interface MsgResumeHostZoneResponse {}
export interface MsgResumeHostZoneResponseSDKType {}
/** Creates a new trade route */

export interface MsgCreateTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The chain ID of the host zone */

  hostChainId: string;
  /** Connection IDs between stride and the other zones */

  strideToRewardConnectionId: string;
  strideToTradeConnectionId: string;
  /** Transfer channels between the host, reward, and trade zones */

  hostToRewardTransferChannelId: string;
  rewardToTradeTransferChannelId: string;
  tradeToHostTransferChannelId: string;
  /** ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX) */

  rewardDenomOnHost: string;
  /** native denom of reward token on the reward zone (e.g. usdc on Noble) */

  rewardDenomOnReward: string;
  /** ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis) */

  rewardDenomOnTrade: string;
  /** ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis) */

  hostDenomOnTrade: string;
  /** the host zone's native denom (e.g. dydx on dYdX) */

  hostDenomOnHost: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * The osmosis pool ID
   */

  /** @deprecated */

  poolId: Long;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  /** @deprecated */

  maxAllowedSwapLossRate: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */

  minSwapAmount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */

  maxSwapAmount: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  minTransferAmount: string;
}
/** Creates a new trade route */

export interface MsgCreateTradeRouteSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The chain ID of the host zone */

  host_chain_id: string;
  /** Connection IDs between stride and the other zones */

  stride_to_reward_connection_id: string;
  stride_to_trade_connection_id: string;
  /** Transfer channels between the host, reward, and trade zones */

  host_to_reward_transfer_channel_id: string;
  reward_to_trade_transfer_channel_id: string;
  trade_to_host_transfer_channel_id: string;
  /** ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX) */

  reward_denom_on_host: string;
  /** native denom of reward token on the reward zone (e.g. usdc on Noble) */

  reward_denom_on_reward: string;
  /** ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis) */

  reward_denom_on_trade: string;
  /** ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis) */

  host_denom_on_trade: string;
  /** the host zone's native denom (e.g. dydx on dYdX) */

  host_denom_on_host: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * The osmosis pool ID
   */

  /** @deprecated */

  pool_id: Long;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  /** @deprecated */

  max_allowed_swap_loss_rate: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */

  min_swap_amount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */

  max_swap_amount: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  min_transfer_amount: string;
}
export interface MsgCreateTradeRouteResponse {}
export interface MsgCreateTradeRouteResponseSDKType {}
/** Deletes a trade route */

export interface MsgDeleteTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */

  rewardDenom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */

  hostDenom: string;
}
/** Deletes a trade route */

export interface MsgDeleteTradeRouteSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */

  reward_denom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */

  host_denom: string;
}
export interface MsgDeleteTradeRouteResponse {}
export interface MsgDeleteTradeRouteResponseSDKType {}
/** Updates the config of a trade route */

export interface MsgUpdateTradeRoute {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */

  rewardDenom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */

  hostDenom: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * The osmosis pool ID
   */

  /** @deprecated */

  poolId: Long;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  /** @deprecated */

  maxAllowedSwapLossRate: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */

  /** @deprecated */

  minSwapAmount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */

  /** @deprecated */

  maxSwapAmount: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  minTransferAmount: string;
}
/** Updates the config of a trade route */

export interface MsgUpdateTradeRouteSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** The reward denom of the route in it's native form (e.g. usdc) */

  reward_denom: string;
  /** The host zone's denom in it's native form (e.g. dydx) */

  host_denom: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * The osmosis pool ID
   */

  /** @deprecated */

  pool_id: Long;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * "0.05" means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  /** @deprecated */

  max_allowed_swap_loss_rate: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * minimum amount of reward tokens to initate a swap
   * if not provided, defaults to 0
   */

  /** @deprecated */

  min_swap_amount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   *
   * maximum amount of reward tokens in a single swap
   * if not provided, defaults to 10e24
   */

  /** @deprecated */

  max_swap_amount: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  min_transfer_amount: string;
}
export interface MsgUpdateTradeRouteResponse {}
export interface MsgUpdateTradeRouteResponseSDKType {}
/**
 * Registers or updates a community pool rebate by specifying the amount liquid
 * staked
 */

export interface MsgSetCommunityPoolRebate {
  /** Message signer (admin only) */
  creator: string;
  /**
   * Chain id of the chain whose community pool has a liquid staking rebate
   * arrangement with stride
   */

  chainId: string;
  /** Rebate percentage represented as a decimal (e.g. 0.2 for 20%) */

  rebateRate: string;
  /** Number of stTokens recieved by the community pool after liquid staking */

  liquidStakedStTokenAmount: string;
}
/**
 * Registers or updates a community pool rebate by specifying the amount liquid
 * staked
 */

export interface MsgSetCommunityPoolRebateSDKType {
  /** Message signer (admin only) */
  creator: string;
  /**
   * Chain id of the chain whose community pool has a liquid staking rebate
   * arrangement with stride
   */

  chain_id: string;
  /** Rebate percentage represented as a decimal (e.g. 0.2 for 20%) */

  rebate_rate: string;
  /** Number of stTokens recieved by the community pool after liquid staking */

  liquid_staked_st_token_amount: string;
}
export interface MsgSetCommunityPoolRebateResponse {}
export interface MsgSetCommunityPoolRebateResponseSDKType {}
/** Grants or revokes trade permissions to a given address via authz */

export interface MsgToggleTradeController {
  /** Message signer (admin only) */
  creator: string;
  /** Chain ID of the trade account */

  chainId: string;
  /** Permission change (either grant or revoke) */

  permissionChange: AuthzPermissionChange;
  /** Address of trade operator */

  address: string;
}
/** Grants or revokes trade permissions to a given address via authz */

export interface MsgToggleTradeControllerSDKType {
  /** Message signer (admin only) */
  creator: string;
  /** Chain ID of the trade account */

  chain_id: string;
  /** Permission change (either grant or revoke) */

  permission_change: AuthzPermissionChangeSDKType;
  /** Address of trade operator */

  address: string;
}
export interface MsgToggleTradeControllerResponse {}
export interface MsgToggleTradeControllerResponseSDKType {}
/** Updates host zone params */

export interface MsgUpdateHostZoneParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** Chain ID of the host zone */

  chainId: string;
  /** Max messages that can be sent in a single ICA message */

  maxMessagesPerIcaTx: Long;
}
/** Updates host zone params */

export interface MsgUpdateHostZoneParamsSDKType {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** Chain ID of the host zone */

  chain_id: string;
  /** Max messages that can be sent in a single ICA message */

  max_messages_per_ica_tx: Long;
}
export interface MsgUpdateHostZoneParamsResponse {}
export interface MsgUpdateHostZoneParamsResponseSDKType {}

function createBaseMsgUpdateInnerRedemptionRateBounds(): MsgUpdateInnerRedemptionRateBounds {
  return {
    creator: "",
    chainId: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: ""
  };
}

export const MsgUpdateInnerRedemptionRateBounds = {
  encode(message: MsgUpdateInnerRedemptionRateBounds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(26).string(message.minInnerRedemptionRate);
    }

    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(34).string(message.maxInnerRedemptionRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.minInnerRedemptionRate = reader.string();
          break;

        case 4:
          message.maxInnerRedemptionRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  }

};

function createBaseMsgUpdateInnerRedemptionRateBoundsResponse(): MsgUpdateInnerRedemptionRateBoundsResponse {
  return {};
}

export const MsgUpdateInnerRedemptionRateBoundsResponse = {
  encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  }

};

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    creator: "",
    amount: "",
    hostDenom: ""
  };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.hostDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  }

};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {
    stToken: undefined
  };
}

export const MsgLiquidStakeResponse = {
  encode(message: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stToken !== undefined) {
      Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stToken = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== undefined && object.stToken !== null ? Coin.fromPartial(object.stToken) : undefined;
    return message;
  }

};

function createBaseMsgLSMLiquidStake(): MsgLSMLiquidStake {
  return {
    creator: "",
    amount: "",
    lsmTokenIbcDenom: ""
  };
}

export const MsgLSMLiquidStake = {
  encode(message: MsgLSMLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.lsmTokenIbcDenom !== "") {
      writer.uint32(26).string(message.lsmTokenIbcDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLSMLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.lsmTokenIbcDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLSMLiquidStake>): MsgLSMLiquidStake {
    const message = createBaseMsgLSMLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.lsmTokenIbcDenom = object.lsmTokenIbcDenom ?? "";
    return message;
  }

};

function createBaseMsgLSMLiquidStakeResponse(): MsgLSMLiquidStakeResponse {
  return {
    transactionComplete: false
  };
}

export const MsgLSMLiquidStakeResponse = {
  encode(message: MsgLSMLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionComplete === true) {
      writer.uint32(8).bool(message.transactionComplete);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLSMLiquidStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transactionComplete = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLSMLiquidStakeResponse>): MsgLSMLiquidStakeResponse {
    const message = createBaseMsgLSMLiquidStakeResponse();
    message.transactionComplete = object.transactionComplete ?? false;
    return message;
  }

};

function createBaseMsgClearBalance(): MsgClearBalance {
  return {
    creator: "",
    chainId: "",
    amount: "",
    channel: ""
  };
}

export const MsgClearBalance = {
  encode(message: MsgClearBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        case 4:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  }

};

function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}

export const MsgClearBalanceResponse = {
  encode(_: MsgClearBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalanceResponse();

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

  fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  }

};

function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    creator: "",
    amount: "",
    hostZone: "",
    receiver: ""
  };
}

export const MsgRedeemStake = {
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.hostZone = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}

export const MsgRedeemStakeResponse = {
  encode(_: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();

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

  fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  }

};

function createBaseMsgRegisterHostZone(): MsgRegisterHostZone {
  return {
    connectionId: "",
    bech32prefix: "",
    hostDenom: "",
    ibcDenom: "",
    creator: "",
    transferChannelId: "",
    unbondingPeriod: Long.UZERO,
    minRedemptionRate: "",
    maxRedemptionRate: "",
    lsmLiquidStakeEnabled: false,
    communityPoolTreasuryAddress: "",
    maxMessagesPerIcaTx: Long.UZERO
  };
}

export const MsgRegisterHostZone = {
  encode(message: MsgRegisterHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }

    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }

    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }

    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(82).string(message.transferChannelId);
    }

    if (!message.unbondingPeriod.isZero()) {
      writer.uint32(88).uint64(message.unbondingPeriod);
    }

    if (message.minRedemptionRate !== "") {
      writer.uint32(106).string(message.minRedemptionRate);
    }

    if (message.maxRedemptionRate !== "") {
      writer.uint32(114).string(message.maxRedemptionRate);
    }

    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(120).bool(message.lsmLiquidStakeEnabled);
    }

    if (message.communityPoolTreasuryAddress !== "") {
      writer.uint32(130).string(message.communityPoolTreasuryAddress);
    }

    if (!message.maxMessagesPerIcaTx.isZero()) {
      writer.uint32(136).uint64(message.maxMessagesPerIcaTx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.connectionId = reader.string();
          break;

        case 12:
          message.bech32prefix = reader.string();
          break;

        case 4:
          message.hostDenom = reader.string();
          break;

        case 5:
          message.ibcDenom = reader.string();
          break;

        case 6:
          message.creator = reader.string();
          break;

        case 10:
          message.transferChannelId = reader.string();
          break;

        case 11:
          message.unbondingPeriod = (reader.uint64() as Long);
          break;

        case 13:
          message.minRedemptionRate = reader.string();
          break;

        case 14:
          message.maxRedemptionRate = reader.string();
          break;

        case 15:
          message.lsmLiquidStakeEnabled = reader.bool();
          break;

        case 16:
          message.communityPoolTreasuryAddress = reader.string();
          break;

        case 17:
          message.maxMessagesPerIcaTx = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.creator = object.creator ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Long.fromValue(object.unbondingPeriod) : Long.UZERO;
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.communityPoolTreasuryAddress = object.communityPoolTreasuryAddress ?? "";
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== undefined && object.maxMessagesPerIcaTx !== null ? Long.fromValue(object.maxMessagesPerIcaTx) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}

export const MsgRegisterHostZoneResponse = {
  encode(_: MsgRegisterHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZoneResponse();

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

  fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  }

};

function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return {
    creator: "",
    hostZoneId: "",
    epoch: Long.UZERO,
    receiver: ""
  };
}

export const MsgClaimUndelegatedTokens = {
  encode(message: MsgClaimUndelegatedTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }

    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokens();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZoneId = reader.string();
          break;

        case 3:
          message.epoch = (reader.uint64() as Long);
          break;

        case 5:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}

export const MsgClaimUndelegatedTokensResponse = {
  encode(_: MsgClaimUndelegatedTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokensResponse();

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

  fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  }

};

function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return {
    creator: "",
    hostZone: "",
    numRebalance: Long.UZERO
  };
}

export const MsgRebalanceValidators = {
  encode(message: MsgRebalanceValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (!message.numRebalance.isZero()) {
      writer.uint32(24).uint64(message.numRebalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.numRebalance = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== undefined && object.numRebalance !== null ? Long.fromValue(object.numRebalance) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}

export const MsgRebalanceValidatorsResponse = {
  encode(_: MsgRebalanceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidatorsResponse();

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

  fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  }

};

function createBaseMsgAddValidators(): MsgAddValidators {
  return {
    creator: "",
    hostZone: "",
    validators: []
  };
}

export const MsgAddValidators = {
  encode(message: MsgAddValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddValidators>): MsgAddValidators {
    const message = createBaseMsgAddValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAddValidatorsResponse(): MsgAddValidatorsResponse {
  return {};
}

export const MsgAddValidatorsResponse = {
  encode(_: MsgAddValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidatorsResponse();

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

  fromPartial(_: DeepPartial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  }

};

function createBaseValidatorWeight(): ValidatorWeight {
  return {
    address: "",
    weight: Long.UZERO
  };
}

export const ValidatorWeight = {
  encode(message: ValidatorWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorWeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorWeight>): ValidatorWeight {
    const message = createBaseValidatorWeight();
    message.address = object.address ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseMsgChangeValidatorWeights(): MsgChangeValidatorWeights {
  return {
    creator: "",
    hostZone: "",
    validatorWeights: []
  };
}

export const MsgChangeValidatorWeights = {
  encode(message: MsgChangeValidatorWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    for (const v of message.validatorWeights) {
      ValidatorWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeights();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.validatorWeights.push(ValidatorWeight.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChangeValidatorWeights>): MsgChangeValidatorWeights {
    const message = createBaseMsgChangeValidatorWeights();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validatorWeights = object.validatorWeights?.map(e => ValidatorWeight.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgChangeValidatorWeightsResponse(): MsgChangeValidatorWeightsResponse {
  return {};
}

export const MsgChangeValidatorWeightsResponse = {
  encode(_: MsgChangeValidatorWeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeightsResponse();

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

  fromPartial(_: DeepPartial<MsgChangeValidatorWeightsResponse>): MsgChangeValidatorWeightsResponse {
    const message = createBaseMsgChangeValidatorWeightsResponse();
    return message;
  }

};

function createBaseMsgDeleteValidator(): MsgDeleteValidator {
  return {
    creator: "",
    hostZone: "",
    valAddr: ""
  };
}

export const MsgDeleteValidator = {
  encode(message: MsgDeleteValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }

    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hostZone = reader.string();
          break;

        case 3:
          message.valAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  }

};

function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}

export const MsgDeleteValidatorResponse = {
  encode(_: MsgDeleteValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidatorResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  }

};

function createBaseMsgRestoreInterchainAccount(): MsgRestoreInterchainAccount {
  return {
    creator: "",
    chainId: "",
    connectionId: "",
    accountOwner: ""
  };
}

export const MsgRestoreInterchainAccount = {
  encode(message: MsgRestoreInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }

    if (message.accountOwner !== "") {
      writer.uint32(34).string(message.accountOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.connectionId = reader.string();
          break;

        case 4:
          message.accountOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountOwner = object.accountOwner ?? "";
    return message;
  }

};

function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}

export const MsgRestoreInterchainAccountResponse = {
  encode(_: MsgRestoreInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccountResponse();

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

  fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  }

};

function createBaseMsgUpdateValidatorSharesExchRate(): MsgUpdateValidatorSharesExchRate {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}

export const MsgUpdateValidatorSharesExchRate = {
  encode(message: MsgUpdateValidatorSharesExchRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.valoper = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  }

};

function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}

export const MsgUpdateValidatorSharesExchRateResponse = {
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  }

};

function createBaseMsgCalibrateDelegation(): MsgCalibrateDelegation {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}

export const MsgCalibrateDelegation = {
  encode(message: MsgCalibrateDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCalibrateDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCalibrateDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.valoper = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCalibrateDelegation>): MsgCalibrateDelegation {
    const message = createBaseMsgCalibrateDelegation();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  }

};

function createBaseMsgCalibrateDelegationResponse(): MsgCalibrateDelegationResponse {
  return {};
}

export const MsgCalibrateDelegationResponse = {
  encode(_: MsgCalibrateDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCalibrateDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCalibrateDelegationResponse();

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

  fromPartial(_: DeepPartial<MsgCalibrateDelegationResponse>): MsgCalibrateDelegationResponse {
    const message = createBaseMsgCalibrateDelegationResponse();
    return message;
  }

};

function createBaseMsgResumeHostZone(): MsgResumeHostZone {
  return {
    creator: "",
    chainId: ""
  };
}

export const MsgResumeHostZone = {
  encode(message: MsgResumeHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgResumeHostZone>): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseMsgResumeHostZoneResponse(): MsgResumeHostZoneResponse {
  return {};
}

export const MsgResumeHostZoneResponse = {
  encode(_: MsgResumeHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  }

};

function createBaseMsgCreateTradeRoute(): MsgCreateTradeRoute {
  return {
    authority: "",
    hostChainId: "",
    strideToRewardConnectionId: "",
    strideToTradeConnectionId: "",
    hostToRewardTransferChannelId: "",
    rewardToTradeTransferChannelId: "",
    tradeToHostTransferChannelId: "",
    rewardDenomOnHost: "",
    rewardDenomOnReward: "",
    rewardDenomOnTrade: "",
    hostDenomOnTrade: "",
    hostDenomOnHost: "",
    poolId: Long.UZERO,
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minTransferAmount: ""
  };
}

export const MsgCreateTradeRoute = {
  encode(message: MsgCreateTradeRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }

    if (message.strideToRewardConnectionId !== "") {
      writer.uint32(26).string(message.strideToRewardConnectionId);
    }

    if (message.strideToTradeConnectionId !== "") {
      writer.uint32(34).string(message.strideToTradeConnectionId);
    }

    if (message.hostToRewardTransferChannelId !== "") {
      writer.uint32(42).string(message.hostToRewardTransferChannelId);
    }

    if (message.rewardToTradeTransferChannelId !== "") {
      writer.uint32(50).string(message.rewardToTradeTransferChannelId);
    }

    if (message.tradeToHostTransferChannelId !== "") {
      writer.uint32(58).string(message.tradeToHostTransferChannelId);
    }

    if (message.rewardDenomOnHost !== "") {
      writer.uint32(66).string(message.rewardDenomOnHost);
    }

    if (message.rewardDenomOnReward !== "") {
      writer.uint32(74).string(message.rewardDenomOnReward);
    }

    if (message.rewardDenomOnTrade !== "") {
      writer.uint32(82).string(message.rewardDenomOnTrade);
    }

    if (message.hostDenomOnTrade !== "") {
      writer.uint32(90).string(message.hostDenomOnTrade);
    }

    if (message.hostDenomOnHost !== "") {
      writer.uint32(98).string(message.hostDenomOnHost);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(104).uint64(message.poolId);
    }

    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(114).string(message.maxAllowedSwapLossRate);
    }

    if (message.minSwapAmount !== "") {
      writer.uint32(122).string(message.minSwapAmount);
    }

    if (message.maxSwapAmount !== "") {
      writer.uint32(130).string(message.maxSwapAmount);
    }

    if (message.minTransferAmount !== "") {
      writer.uint32(138).string(message.minTransferAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.hostChainId = reader.string();
          break;

        case 3:
          message.strideToRewardConnectionId = reader.string();
          break;

        case 4:
          message.strideToTradeConnectionId = reader.string();
          break;

        case 5:
          message.hostToRewardTransferChannelId = reader.string();
          break;

        case 6:
          message.rewardToTradeTransferChannelId = reader.string();
          break;

        case 7:
          message.tradeToHostTransferChannelId = reader.string();
          break;

        case 8:
          message.rewardDenomOnHost = reader.string();
          break;

        case 9:
          message.rewardDenomOnReward = reader.string();
          break;

        case 10:
          message.rewardDenomOnTrade = reader.string();
          break;

        case 11:
          message.hostDenomOnTrade = reader.string();
          break;

        case 12:
          message.hostDenomOnHost = reader.string();
          break;

        case 13:
          message.poolId = (reader.uint64() as Long);
          break;

        case 14:
          message.maxAllowedSwapLossRate = reader.string();
          break;

        case 15:
          message.minSwapAmount = reader.string();
          break;

        case 16:
          message.maxSwapAmount = reader.string();
          break;

        case 17:
          message.minTransferAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateTradeRoute>): MsgCreateTradeRoute {
    const message = createBaseMsgCreateTradeRoute();
    message.authority = object.authority ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.strideToRewardConnectionId = object.strideToRewardConnectionId ?? "";
    message.strideToTradeConnectionId = object.strideToTradeConnectionId ?? "";
    message.hostToRewardTransferChannelId = object.hostToRewardTransferChannelId ?? "";
    message.rewardToTradeTransferChannelId = object.rewardToTradeTransferChannelId ?? "";
    message.tradeToHostTransferChannelId = object.tradeToHostTransferChannelId ?? "";
    message.rewardDenomOnHost = object.rewardDenomOnHost ?? "";
    message.rewardDenomOnReward = object.rewardDenomOnReward ?? "";
    message.rewardDenomOnTrade = object.rewardDenomOnTrade ?? "";
    message.hostDenomOnTrade = object.hostDenomOnTrade ?? "";
    message.hostDenomOnHost = object.hostDenomOnHost ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    return message;
  }

};

function createBaseMsgCreateTradeRouteResponse(): MsgCreateTradeRouteResponse {
  return {};
}

export const MsgCreateTradeRouteResponse = {
  encode(_: MsgCreateTradeRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeRouteResponse();

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

  fromPartial(_: DeepPartial<MsgCreateTradeRouteResponse>): MsgCreateTradeRouteResponse {
    const message = createBaseMsgCreateTradeRouteResponse();
    return message;
  }

};

function createBaseMsgDeleteTradeRoute(): MsgDeleteTradeRoute {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: ""
  };
}

export const MsgDeleteTradeRoute = {
  encode(message: MsgDeleteTradeRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }

    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTradeRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTradeRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.rewardDenom = reader.string();
          break;

        case 3:
          message.hostDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDeleteTradeRoute>): MsgDeleteTradeRoute {
    const message = createBaseMsgDeleteTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  }

};

function createBaseMsgDeleteTradeRouteResponse(): MsgDeleteTradeRouteResponse {
  return {};
}

export const MsgDeleteTradeRouteResponse = {
  encode(_: MsgDeleteTradeRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTradeRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTradeRouteResponse();

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

  fromPartial(_: DeepPartial<MsgDeleteTradeRouteResponse>): MsgDeleteTradeRouteResponse {
    const message = createBaseMsgDeleteTradeRouteResponse();
    return message;
  }

};

function createBaseMsgUpdateTradeRoute(): MsgUpdateTradeRoute {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: "",
    poolId: Long.UZERO,
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minTransferAmount: ""
  };
}

export const MsgUpdateTradeRoute = {
  encode(message: MsgUpdateTradeRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }

    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(32).uint64(message.poolId);
    }

    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(42).string(message.maxAllowedSwapLossRate);
    }

    if (message.minSwapAmount !== "") {
      writer.uint32(50).string(message.minSwapAmount);
    }

    if (message.maxSwapAmount !== "") {
      writer.uint32(58).string(message.maxSwapAmount);
    }

    if (message.minTransferAmount !== "") {
      writer.uint32(138).string(message.minTransferAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTradeRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTradeRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.rewardDenom = reader.string();
          break;

        case 3:
          message.hostDenom = reader.string();
          break;

        case 4:
          message.poolId = (reader.uint64() as Long);
          break;

        case 5:
          message.maxAllowedSwapLossRate = reader.string();
          break;

        case 6:
          message.minSwapAmount = reader.string();
          break;

        case 7:
          message.maxSwapAmount = reader.string();
          break;

        case 17:
          message.minTransferAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateTradeRoute>): MsgUpdateTradeRoute {
    const message = createBaseMsgUpdateTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    return message;
  }

};

function createBaseMsgUpdateTradeRouteResponse(): MsgUpdateTradeRouteResponse {
  return {};
}

export const MsgUpdateTradeRouteResponse = {
  encode(_: MsgUpdateTradeRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTradeRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTradeRouteResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateTradeRouteResponse>): MsgUpdateTradeRouteResponse {
    const message = createBaseMsgUpdateTradeRouteResponse();
    return message;
  }

};

function createBaseMsgSetCommunityPoolRebate(): MsgSetCommunityPoolRebate {
  return {
    creator: "",
    chainId: "",
    rebateRate: "",
    liquidStakedStTokenAmount: ""
  };
}

export const MsgSetCommunityPoolRebate = {
  encode(message: MsgSetCommunityPoolRebate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.rebateRate !== "") {
      writer.uint32(26).string(message.rebateRate);
    }

    if (message.liquidStakedStTokenAmount !== "") {
      writer.uint32(34).string(message.liquidStakedStTokenAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommunityPoolRebate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommunityPoolRebate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.rebateRate = reader.string();
          break;

        case 4:
          message.liquidStakedStTokenAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetCommunityPoolRebate>): MsgSetCommunityPoolRebate {
    const message = createBaseMsgSetCommunityPoolRebate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.rebateRate = object.rebateRate ?? "";
    message.liquidStakedStTokenAmount = object.liquidStakedStTokenAmount ?? "";
    return message;
  }

};

function createBaseMsgSetCommunityPoolRebateResponse(): MsgSetCommunityPoolRebateResponse {
  return {};
}

export const MsgSetCommunityPoolRebateResponse = {
  encode(_: MsgSetCommunityPoolRebateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommunityPoolRebateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommunityPoolRebateResponse();

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

  fromPartial(_: DeepPartial<MsgSetCommunityPoolRebateResponse>): MsgSetCommunityPoolRebateResponse {
    const message = createBaseMsgSetCommunityPoolRebateResponse();
    return message;
  }

};

function createBaseMsgToggleTradeController(): MsgToggleTradeController {
  return {
    creator: "",
    chainId: "",
    permissionChange: 0,
    address: ""
  };
}

export const MsgToggleTradeController = {
  encode(message: MsgToggleTradeController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.permissionChange !== 0) {
      writer.uint32(24).int32(message.permissionChange);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTradeController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTradeController();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.permissionChange = (reader.int32() as any);
          break;

        case 4:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgToggleTradeController>): MsgToggleTradeController {
    const message = createBaseMsgToggleTradeController();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.permissionChange = object.permissionChange ?? 0;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgToggleTradeControllerResponse(): MsgToggleTradeControllerResponse {
  return {};
}

export const MsgToggleTradeControllerResponse = {
  encode(_: MsgToggleTradeControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTradeControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTradeControllerResponse();

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

  fromPartial(_: DeepPartial<MsgToggleTradeControllerResponse>): MsgToggleTradeControllerResponse {
    const message = createBaseMsgToggleTradeControllerResponse();
    return message;
  }

};

function createBaseMsgUpdateHostZoneParams(): MsgUpdateHostZoneParams {
  return {
    authority: "",
    chainId: "",
    maxMessagesPerIcaTx: Long.UZERO
  };
}

export const MsgUpdateHostZoneParams = {
  encode(message: MsgUpdateHostZoneParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.maxMessagesPerIcaTx.isZero()) {
      writer.uint32(24).uint64(message.maxMessagesPerIcaTx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostZoneParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZoneParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.maxMessagesPerIcaTx = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateHostZoneParams>): MsgUpdateHostZoneParams {
    const message = createBaseMsgUpdateHostZoneParams();
    message.authority = object.authority ?? "";
    message.chainId = object.chainId ?? "";
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== undefined && object.maxMessagesPerIcaTx !== null ? Long.fromValue(object.maxMessagesPerIcaTx) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateHostZoneParamsResponse(): MsgUpdateHostZoneParamsResponse {
  return {};
}

export const MsgUpdateHostZoneParamsResponse = {
  encode(_: MsgUpdateHostZoneParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostZoneParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZoneParamsResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateHostZoneParamsResponse>): MsgUpdateHostZoneParamsResponse {
    const message = createBaseMsgUpdateHostZoneParamsResponse();
    return message;
  }

};