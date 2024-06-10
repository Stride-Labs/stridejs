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
export declare const TradeConfig: {
    encode(message: TradeConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeConfig;
    fromPartial(object: DeepPartial<TradeConfig>): TradeConfig;
};
export declare const TradeRoute: {
    encode(message: TradeRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeRoute;
    fromPartial(object: DeepPartial<TradeRoute>): TradeRoute;
};
