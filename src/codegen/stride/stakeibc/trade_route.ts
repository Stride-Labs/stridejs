import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * Deprecated, this configuration is no longer needed since swaps
 * are executed off-chain via authz
 *
 * Stores pool information needed to execute the swap along a trade route
 */

/** @deprecated */

export interface TradeConfig {
  /** Currently Osmosis is the only trade chain so this is an osmosis pool id */
  poolId: Long;
  /**
   * Spot price in the pool to convert the reward denom to the host denom
   * output_tokens = swap_price * input tokens
   * This value may be slightly stale as it is updated by an ICQ
   */

  swapPrice: string;
  /** unix time in seconds that the price was last updated */

  priceUpdateTimestamp: Long;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * 0.05 means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  maxAllowedSwapLossRate: string;
  /**
   * min and max set boundaries of reward denom on trade chain we will swap
   * min also decides when reward token transfers are worth it (transfer fees)
   */

  minSwapAmount: string;
  maxSwapAmount: string;
}
/**
 * Deprecated, this configuration is no longer needed since swaps
 * are executed off-chain via authz
 *
 * Stores pool information needed to execute the swap along a trade route
 */

/** @deprecated */

export interface TradeConfigSDKType {
  /** Currently Osmosis is the only trade chain so this is an osmosis pool id */
  pool_id: Long;
  /**
   * Spot price in the pool to convert the reward denom to the host denom
   * output_tokens = swap_price * input tokens
   * This value may be slightly stale as it is updated by an ICQ
   */

  swap_price: string;
  /** unix time in seconds that the price was last updated */

  price_update_timestamp: Long;
  /**
   * Threshold defining the percentage of tokens that could be lost in the trade
   * This captures both the loss from slippage and from a stale price on stride
   * 0.05 means the output from the trade can be no less than a 5% deviation
   * from the current value
   */

  max_allowed_swap_loss_rate: string;
  /**
   * min and max set boundaries of reward denom on trade chain we will swap
   * min also decides when reward token transfers are worth it (transfer fees)
   */

  min_swap_amount: string;
  max_swap_amount: string;
}
/**
 * TradeRoute represents a round trip including info on transfer and how to do
 * the swap. It makes the assumption that the reward token is always foreign to
 * the host so therefore the first two hops are to unwind the ibc denom enroute
 * to the trade chain and the last hop is the return so funds start/end in the
 * withdrawl ICA on hostZone
 * The structure is key'd on reward denom and host denom in their native forms
 * (i.e. reward_denom_on_reward_zone and host_denom_on_host_zone)
 */

export interface TradeRoute {
  /** ibc denom for the reward on the host zone */
  rewardDenomOnHostZone: string;
  /** should be the native denom for the reward chain */

  rewardDenomOnRewardZone: string;
  /** ibc denom of the reward on the trade chain, input to the swap */

  rewardDenomOnTradeZone: string;
  /** ibc of the host denom on the trade chain, output from the swap */

  hostDenomOnTradeZone: string;
  /** should be the same as the native host denom on the host chain */

  hostDenomOnHostZone: string;
  /**
   * ICAAccount on the host zone with the reward tokens
   * This is the same as the host zone withdrawal ICA account
   */

  hostAccount: ICAAccount;
  /**
   * ICAAccount on the reward zone that is acts as the intermediate
   * receiver of the transfer from host zone to trade zone
   */

  rewardAccount: ICAAccount;
  /**
   * ICAAccount responsible for executing the swap of reward
   * tokens for host tokens
   */

  tradeAccount: ICAAccount;
  /**
   * Channel responsible for the transfer of reward tokens from the host
   * zone to the reward zone. This is the channel ID on the host zone side
   */

  hostToRewardChannelId: string;
  /**
   * Channel responsible for the transfer of reward tokens from the reward
   * zone to the trade zone. This is the channel ID on the reward zone side
   */

  rewardToTradeChannelId: string;
  /**
   * Channel responsible for the transfer of host tokens from the trade
   * zone, back to the host zone. This is the channel ID on the trade zone side
   */

  tradeToHostChannelId: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  minTransferAmount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   * so the trade configuration is no longer needed
   *
   * specifies the configuration needed to execute the swap
   * such as pool_id, slippage, min trade amount, etc.
   */

  /** @deprecated */

  tradeConfig: TradeConfig;
}
/**
 * TradeRoute represents a round trip including info on transfer and how to do
 * the swap. It makes the assumption that the reward token is always foreign to
 * the host so therefore the first two hops are to unwind the ibc denom enroute
 * to the trade chain and the last hop is the return so funds start/end in the
 * withdrawl ICA on hostZone
 * The structure is key'd on reward denom and host denom in their native forms
 * (i.e. reward_denom_on_reward_zone and host_denom_on_host_zone)
 */

export interface TradeRouteSDKType {
  /** ibc denom for the reward on the host zone */
  reward_denom_on_host_zone: string;
  /** should be the native denom for the reward chain */

  reward_denom_on_reward_zone: string;
  /** ibc denom of the reward on the trade chain, input to the swap */

  reward_denom_on_trade_zone: string;
  /** ibc of the host denom on the trade chain, output from the swap */

  host_denom_on_trade_zone: string;
  /** should be the same as the native host denom on the host chain */

  host_denom_on_host_zone: string;
  /**
   * ICAAccount on the host zone with the reward tokens
   * This is the same as the host zone withdrawal ICA account
   */

  host_account: ICAAccountSDKType;
  /**
   * ICAAccount on the reward zone that is acts as the intermediate
   * receiver of the transfer from host zone to trade zone
   */

  reward_account: ICAAccountSDKType;
  /**
   * ICAAccount responsible for executing the swap of reward
   * tokens for host tokens
   */

  trade_account: ICAAccountSDKType;
  /**
   * Channel responsible for the transfer of reward tokens from the host
   * zone to the reward zone. This is the channel ID on the host zone side
   */

  host_to_reward_channel_id: string;
  /**
   * Channel responsible for the transfer of reward tokens from the reward
   * zone to the trade zone. This is the channel ID on the reward zone side
   */

  reward_to_trade_channel_id: string;
  /**
   * Channel responsible for the transfer of host tokens from the trade
   * zone, back to the host zone. This is the channel ID on the trade zone side
   */

  trade_to_host_channel_id: string;
  /**
   * Minimum amount of reward token that must be accumulated before
   * the tokens are transferred to the trade ICA
   */

  min_transfer_amount: string;
  /**
   * Deprecated, the trades are now executed off-chain via authz
   * so the trade configuration is no longer needed
   *
   * specifies the configuration needed to execute the swap
   * such as pool_id, slippage, min trade amount, etc.
   */

  /** @deprecated */

  trade_config: TradeConfigSDKType;
}

function createBaseTradeConfig(): TradeConfig {
  return {
    poolId: Long.UZERO,
    swapPrice: "",
    priceUpdateTimestamp: Long.UZERO,
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: ""
  };
}

export const TradeConfig = {
  encode(message: TradeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.swapPrice !== "") {
      writer.uint32(18).string(message.swapPrice);
    }

    if (!message.priceUpdateTimestamp.isZero()) {
      writer.uint32(24).uint64(message.priceUpdateTimestamp);
    }

    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(34).string(message.maxAllowedSwapLossRate);
    }

    if (message.minSwapAmount !== "") {
      writer.uint32(42).string(message.minSwapAmount);
    }

    if (message.maxSwapAmount !== "") {
      writer.uint32(50).string(message.maxSwapAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.swapPrice = reader.string();
          break;

        case 3:
          message.priceUpdateTimestamp = (reader.uint64() as Long);
          break;

        case 4:
          message.maxAllowedSwapLossRate = reader.string();
          break;

        case 5:
          message.minSwapAmount = reader.string();
          break;

        case 6:
          message.maxSwapAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeConfig>): TradeConfig {
    const message = createBaseTradeConfig();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.swapPrice = object.swapPrice ?? "";
    message.priceUpdateTimestamp = object.priceUpdateTimestamp !== undefined && object.priceUpdateTimestamp !== null ? Long.fromValue(object.priceUpdateTimestamp) : Long.UZERO;
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    return message;
  }

};

function createBaseTradeRoute(): TradeRoute {
  return {
    rewardDenomOnHostZone: "",
    rewardDenomOnRewardZone: "",
    rewardDenomOnTradeZone: "",
    hostDenomOnTradeZone: "",
    hostDenomOnHostZone: "",
    hostAccount: undefined,
    rewardAccount: undefined,
    tradeAccount: undefined,
    hostToRewardChannelId: "",
    rewardToTradeChannelId: "",
    tradeToHostChannelId: "",
    minTransferAmount: "",
    tradeConfig: undefined
  };
}

export const TradeRoute = {
  encode(message: TradeRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDenomOnHostZone !== "") {
      writer.uint32(10).string(message.rewardDenomOnHostZone);
    }

    if (message.rewardDenomOnRewardZone !== "") {
      writer.uint32(18).string(message.rewardDenomOnRewardZone);
    }

    if (message.rewardDenomOnTradeZone !== "") {
      writer.uint32(26).string(message.rewardDenomOnTradeZone);
    }

    if (message.hostDenomOnTradeZone !== "") {
      writer.uint32(34).string(message.hostDenomOnTradeZone);
    }

    if (message.hostDenomOnHostZone !== "") {
      writer.uint32(42).string(message.hostDenomOnHostZone);
    }

    if (message.hostAccount !== undefined) {
      ICAAccount.encode(message.hostAccount, writer.uint32(50).fork()).ldelim();
    }

    if (message.rewardAccount !== undefined) {
      ICAAccount.encode(message.rewardAccount, writer.uint32(58).fork()).ldelim();
    }

    if (message.tradeAccount !== undefined) {
      ICAAccount.encode(message.tradeAccount, writer.uint32(66).fork()).ldelim();
    }

    if (message.hostToRewardChannelId !== "") {
      writer.uint32(74).string(message.hostToRewardChannelId);
    }

    if (message.rewardToTradeChannelId !== "") {
      writer.uint32(82).string(message.rewardToTradeChannelId);
    }

    if (message.tradeToHostChannelId !== "") {
      writer.uint32(90).string(message.tradeToHostChannelId);
    }

    if (message.minTransferAmount !== "") {
      writer.uint32(106).string(message.minTransferAmount);
    }

    if (message.tradeConfig !== undefined) {
      TradeConfig.encode(message.tradeConfig, writer.uint32(98).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardDenomOnHostZone = reader.string();
          break;

        case 2:
          message.rewardDenomOnRewardZone = reader.string();
          break;

        case 3:
          message.rewardDenomOnTradeZone = reader.string();
          break;

        case 4:
          message.hostDenomOnTradeZone = reader.string();
          break;

        case 5:
          message.hostDenomOnHostZone = reader.string();
          break;

        case 6:
          message.hostAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 7:
          message.rewardAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 8:
          message.tradeAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 9:
          message.hostToRewardChannelId = reader.string();
          break;

        case 10:
          message.rewardToTradeChannelId = reader.string();
          break;

        case 11:
          message.tradeToHostChannelId = reader.string();
          break;

        case 13:
          message.minTransferAmount = reader.string();
          break;

        case 12:
          message.tradeConfig = TradeConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TradeRoute>): TradeRoute {
    const message = createBaseTradeRoute();
    message.rewardDenomOnHostZone = object.rewardDenomOnHostZone ?? "";
    message.rewardDenomOnRewardZone = object.rewardDenomOnRewardZone ?? "";
    message.rewardDenomOnTradeZone = object.rewardDenomOnTradeZone ?? "";
    message.hostDenomOnTradeZone = object.hostDenomOnTradeZone ?? "";
    message.hostDenomOnHostZone = object.hostDenomOnHostZone ?? "";
    message.hostAccount = object.hostAccount !== undefined && object.hostAccount !== null ? ICAAccount.fromPartial(object.hostAccount) : undefined;
    message.rewardAccount = object.rewardAccount !== undefined && object.rewardAccount !== null ? ICAAccount.fromPartial(object.rewardAccount) : undefined;
    message.tradeAccount = object.tradeAccount !== undefined && object.tradeAccount !== null ? ICAAccount.fromPartial(object.tradeAccount) : undefined;
    message.hostToRewardChannelId = object.hostToRewardChannelId ?? "";
    message.rewardToTradeChannelId = object.rewardToTradeChannelId ?? "";
    message.tradeToHostChannelId = object.tradeToHostChannelId ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    message.tradeConfig = object.tradeConfig !== undefined && object.tradeConfig !== null ? TradeConfig.fromPartial(object.tradeConfig) : undefined;
    return message;
  }

};