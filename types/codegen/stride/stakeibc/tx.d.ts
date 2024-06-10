import { Validator, ValidatorSDKType } from "./validator";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum AuthzPermissionChange {
    /** GRANT - Grant the address trade permissions */
    GRANT = 0,
    /** REVOKE - Revoke trade permissions from the address */
    REVOKE = 1,
    UNRECOGNIZED = -1
}
export declare enum AuthzPermissionChangeSDKType {
    /** GRANT - Grant the address trade permissions */
    GRANT = 0,
    /** REVOKE - Revoke trade permissions from the address */
    REVOKE = 1,
    UNRECOGNIZED = -1
}
export declare function authzPermissionChangeFromJSON(object: any): AuthzPermissionChange;
export declare function authzPermissionChangeToJSON(object: AuthzPermissionChange): string;
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
export interface MsgUpdateInnerRedemptionRateBoundsResponse {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {
}
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
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseSDKType {
}
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
export interface MsgRedeemStakeResponse {
}
export interface MsgRedeemStakeResponseSDKType {
}
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
export interface MsgRegisterHostZoneResponse {
}
export interface MsgRegisterHostZoneResponseSDKType {
}
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
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgClaimUndelegatedTokensResponseSDKType {
}
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
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
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
export interface MsgAddValidatorsResponse {
}
export interface MsgAddValidatorsResponseSDKType {
}
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
export interface MsgChangeValidatorWeightsResponse {
}
export interface MsgChangeValidatorWeightsResponseSDKType {
}
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
export interface MsgDeleteValidatorResponse {
}
export interface MsgDeleteValidatorResponseSDKType {
}
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
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgRestoreInterchainAccountResponseSDKType {
}
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
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {
}
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
export interface MsgCalibrateDelegationResponse {
}
export interface MsgCalibrateDelegationResponseSDKType {
}
export interface MsgResumeHostZone {
    creator: string;
    chainId: string;
}
export interface MsgResumeHostZoneSDKType {
    creator: string;
    chain_id: string;
}
export interface MsgResumeHostZoneResponse {
}
export interface MsgResumeHostZoneResponseSDKType {
}
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
export interface MsgCreateTradeRouteResponse {
}
export interface MsgCreateTradeRouteResponseSDKType {
}
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
export interface MsgDeleteTradeRouteResponse {
}
export interface MsgDeleteTradeRouteResponseSDKType {
}
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
export interface MsgUpdateTradeRouteResponse {
}
export interface MsgUpdateTradeRouteResponseSDKType {
}
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
export interface MsgSetCommunityPoolRebateResponse {
}
export interface MsgSetCommunityPoolRebateResponseSDKType {
}
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
export interface MsgToggleTradeControllerResponse {
}
export interface MsgToggleTradeControllerResponseSDKType {
}
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
export interface MsgUpdateHostZoneParamsResponse {
}
export interface MsgUpdateHostZoneParamsResponseSDKType {
}
export declare const MsgUpdateInnerRedemptionRateBounds: {
    encode(message: MsgUpdateInnerRedemptionRateBounds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds;
    fromPartial(object: DeepPartial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds;
};
export declare const MsgUpdateInnerRedemptionRateBoundsResponse: {
    encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse;
    fromPartial(_: DeepPartial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse;
};
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake;
    fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(message: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromPartial(object: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgLSMLiquidStake: {
    encode(message: MsgLSMLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStake;
    fromPartial(object: DeepPartial<MsgLSMLiquidStake>): MsgLSMLiquidStake;
};
export declare const MsgLSMLiquidStakeResponse: {
    encode(message: MsgLSMLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStakeResponse;
    fromPartial(object: DeepPartial<MsgLSMLiquidStakeResponse>): MsgLSMLiquidStakeResponse;
};
export declare const MsgClearBalance: {
    encode(message: MsgClearBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance;
    fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance;
};
export declare const MsgClearBalanceResponse: {
    encode(_: MsgClearBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse;
    fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
};
export declare const MsgRedeemStake: {
    encode(message: MsgRedeemStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake;
    fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake;
};
export declare const MsgRedeemStakeResponse: {
    encode(_: MsgRedeemStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
};
export declare const MsgRegisterHostZone: {
    encode(message: MsgRegisterHostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone;
    fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone;
};
export declare const MsgRegisterHostZoneResponse: {
    encode(_: MsgRegisterHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse;
    fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
};
export declare const MsgClaimUndelegatedTokens: {
    encode(message: MsgClaimUndelegatedTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens;
    fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse;
    fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
};
export declare const MsgRebalanceValidators: {
    encode(message: MsgRebalanceValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators;
    fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators;
};
export declare const MsgRebalanceValidatorsResponse: {
    encode(_: MsgRebalanceValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse;
    fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
};
export declare const MsgAddValidators: {
    encode(message: MsgAddValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidators;
    fromPartial(object: DeepPartial<MsgAddValidators>): MsgAddValidators;
};
export declare const MsgAddValidatorsResponse: {
    encode(_: MsgAddValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorsResponse;
    fromPartial(_: DeepPartial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse;
};
export declare const ValidatorWeight: {
    encode(message: ValidatorWeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorWeight;
    fromPartial(object: DeepPartial<ValidatorWeight>): ValidatorWeight;
};
export declare const MsgChangeValidatorWeights: {
    encode(message: MsgChangeValidatorWeights, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeights;
    fromPartial(object: DeepPartial<MsgChangeValidatorWeights>): MsgChangeValidatorWeights;
};
export declare const MsgChangeValidatorWeightsResponse: {
    encode(_: MsgChangeValidatorWeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightsResponse;
    fromPartial(_: DeepPartial<MsgChangeValidatorWeightsResponse>): MsgChangeValidatorWeightsResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator;
    fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
export declare const MsgRestoreInterchainAccount: {
    encode(message: MsgRestoreInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount;
    fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
};
export declare const MsgRestoreInterchainAccountResponse: {
    encode(_: MsgRestoreInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse;
    fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate;
    fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse;
    fromPartial(_: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
};
export declare const MsgCalibrateDelegation: {
    encode(message: MsgCalibrateDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCalibrateDelegation;
    fromPartial(object: DeepPartial<MsgCalibrateDelegation>): MsgCalibrateDelegation;
};
export declare const MsgCalibrateDelegationResponse: {
    encode(_: MsgCalibrateDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCalibrateDelegationResponse;
    fromPartial(_: DeepPartial<MsgCalibrateDelegationResponse>): MsgCalibrateDelegationResponse;
};
export declare const MsgResumeHostZone: {
    encode(message: MsgResumeHostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZone;
    fromPartial(object: DeepPartial<MsgResumeHostZone>): MsgResumeHostZone;
};
export declare const MsgResumeHostZoneResponse: {
    encode(_: MsgResumeHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZoneResponse;
    fromPartial(_: DeepPartial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse;
};
export declare const MsgCreateTradeRoute: {
    encode(message: MsgCreateTradeRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeRoute;
    fromPartial(object: DeepPartial<MsgCreateTradeRoute>): MsgCreateTradeRoute;
};
export declare const MsgCreateTradeRouteResponse: {
    encode(_: MsgCreateTradeRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeRouteResponse;
    fromPartial(_: DeepPartial<MsgCreateTradeRouteResponse>): MsgCreateTradeRouteResponse;
};
export declare const MsgDeleteTradeRoute: {
    encode(message: MsgDeleteTradeRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTradeRoute;
    fromPartial(object: DeepPartial<MsgDeleteTradeRoute>): MsgDeleteTradeRoute;
};
export declare const MsgDeleteTradeRouteResponse: {
    encode(_: MsgDeleteTradeRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTradeRouteResponse;
    fromPartial(_: DeepPartial<MsgDeleteTradeRouteResponse>): MsgDeleteTradeRouteResponse;
};
export declare const MsgUpdateTradeRoute: {
    encode(message: MsgUpdateTradeRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTradeRoute;
    fromPartial(object: DeepPartial<MsgUpdateTradeRoute>): MsgUpdateTradeRoute;
};
export declare const MsgUpdateTradeRouteResponse: {
    encode(_: MsgUpdateTradeRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTradeRouteResponse;
    fromPartial(_: DeepPartial<MsgUpdateTradeRouteResponse>): MsgUpdateTradeRouteResponse;
};
export declare const MsgSetCommunityPoolRebate: {
    encode(message: MsgSetCommunityPoolRebate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommunityPoolRebate;
    fromPartial(object: DeepPartial<MsgSetCommunityPoolRebate>): MsgSetCommunityPoolRebate;
};
export declare const MsgSetCommunityPoolRebateResponse: {
    encode(_: MsgSetCommunityPoolRebateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetCommunityPoolRebateResponse;
    fromPartial(_: DeepPartial<MsgSetCommunityPoolRebateResponse>): MsgSetCommunityPoolRebateResponse;
};
export declare const MsgToggleTradeController: {
    encode(message: MsgToggleTradeController, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTradeController;
    fromPartial(object: DeepPartial<MsgToggleTradeController>): MsgToggleTradeController;
};
export declare const MsgToggleTradeControllerResponse: {
    encode(_: MsgToggleTradeControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTradeControllerResponse;
    fromPartial(_: DeepPartial<MsgToggleTradeControllerResponse>): MsgToggleTradeControllerResponse;
};
export declare const MsgUpdateHostZoneParams: {
    encode(message: MsgUpdateHostZoneParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostZoneParams;
    fromPartial(object: DeepPartial<MsgUpdateHostZoneParams>): MsgUpdateHostZoneParams;
};
export declare const MsgUpdateHostZoneParamsResponse: {
    encode(_: MsgUpdateHostZoneParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostZoneParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateHostZoneParamsResponse>): MsgUpdateHostZoneParamsResponse;
};
