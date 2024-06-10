import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
    type: "stakeibc/LiquidStake";
    value: {
        creator: string;
        amount: string;
        host_denom: string;
    };
}
export interface AminoMsgLSMLiquidStake extends AminoMsg {
    type: "stakeibc/LSMLiquidStake";
    value: {
        creator: string;
        amount: string;
        lsm_token_ibc_denom: string;
    };
}
export interface AminoMsgRedeemStake extends AminoMsg {
    type: "stakeibc/RedeemStake";
    value: {
        creator: string;
        amount: string;
        host_zone: string;
        receiver: string;
    };
}
export interface AminoMsgRegisterHostZone extends AminoMsg {
    type: "stakeibc/RegisterHostZone";
    value: {
        connection_id: string;
        bech32prefix: string;
        host_denom: string;
        ibc_denom: string;
        creator: string;
        transfer_channel_id: string;
        unbonding_period: string;
        min_redemption_rate: string;
        max_redemption_rate: string;
        lsm_liquid_stake_enabled: boolean;
        community_pool_treasury_address: string;
        max_messages_per_ica_tx: string;
    };
}
export interface AminoMsgClaimUndelegatedTokens extends AminoMsg {
    type: "stakeibc/ClaimUndelegatedTokens";
    value: {
        creator: string;
        host_zone_id: string;
        epoch: string;
        receiver: string;
    };
}
export interface AminoMsgRebalanceValidators extends AminoMsg {
    type: "stakeibc/RebalanceValidators";
    value: {
        creator: string;
        host_zone: string;
        num_rebalance: string;
    };
}
export interface AminoMsgAddValidators extends AminoMsg {
    type: "/stride.stakeibc.MsgAddValidators";
    value: {
        creator: string;
        host_zone: string;
        validators: {
            name: string;
            address: string;
            weight: string;
            delegation: string;
            slash_query_progress_tracker: string;
            slash_query_checkpoint: string;
            shares_to_tokens_rate: string;
            delegation_changes_in_progress: string;
            slash_query_in_progress: boolean;
        }[];
    };
}
export interface AminoMsgChangeValidatorWeights extends AminoMsg {
    type: "/stride.stakeibc.MsgChangeValidatorWeights";
    value: {
        creator: string;
        host_zone: string;
        validator_weights: {
            address: string;
            weight: string;
        }[];
    };
}
export interface AminoMsgDeleteValidator extends AminoMsg {
    type: "stakeibc/DeleteValidator";
    value: {
        creator: string;
        host_zone: string;
        val_addr: string;
    };
}
export interface AminoMsgRestoreInterchainAccount extends AminoMsg {
    type: "stakeibc/RestoreInterchainAccount";
    value: {
        creator: string;
        chain_id: string;
        connection_id: string;
        account_owner: string;
    };
}
export interface AminoMsgUpdateValidatorSharesExchRate extends AminoMsg {
    type: "stakeibc/UpdateValidatorSharesExchRate";
    value: {
        creator: string;
        chain_id: string;
        valoper: string;
    };
}
export interface AminoMsgCalibrateDelegation extends AminoMsg {
    type: "/stride.stakeibc.MsgCalibrateDelegation";
    value: {
        creator: string;
        chain_id: string;
        valoper: string;
    };
}
export interface AminoMsgClearBalance extends AminoMsg {
    type: "still-no-defined";
    value: {
        creator: string;
        chain_id: string;
        amount: string;
        channel: string;
    };
}
export interface AminoMsgUpdateInnerRedemptionRateBounds extends AminoMsg {
    type: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds";
    value: {
        creator: string;
        chain_id: string;
        min_inner_redemption_rate: string;
        max_inner_redemption_rate: string;
    };
}
export interface AminoMsgResumeHostZone extends AminoMsg {
    type: "/stride.stakeibc.MsgResumeHostZone";
    value: {
        creator: string;
        chain_id: string;
    };
}
export interface AminoMsgCreateTradeRoute extends AminoMsg {
    type: "/stride.stakeibc.MsgCreateTradeRoute";
    value: {
        authority: string;
        host_chain_id: string;
        stride_to_reward_connection_id: string;
        stride_to_trade_connection_id: string;
        host_to_reward_transfer_channel_id: string;
        reward_to_trade_transfer_channel_id: string;
        trade_to_host_transfer_channel_id: string;
        reward_denom_on_host: string;
        reward_denom_on_reward: string;
        reward_denom_on_trade: string;
        host_denom_on_trade: string;
        host_denom_on_host: string;
        pool_id: string;
        max_allowed_swap_loss_rate: string;
        min_swap_amount: string;
        max_swap_amount: string;
        min_transfer_amount: string;
    };
}
export interface AminoMsgDeleteTradeRoute extends AminoMsg {
    type: "/stride.stakeibc.MsgDeleteTradeRoute";
    value: {
        authority: string;
        reward_denom: string;
        host_denom: string;
    };
}
export interface AminoMsgUpdateTradeRoute extends AminoMsg {
    type: "/stride.stakeibc.MsgUpdateTradeRoute";
    value: {
        authority: string;
        reward_denom: string;
        host_denom: string;
        pool_id: string;
        max_allowed_swap_loss_rate: string;
        min_swap_amount: string;
        max_swap_amount: string;
        min_transfer_amount: string;
    };
}
export interface AminoMsgSetCommunityPoolRebate extends AminoMsg {
    type: "/stride.stakeibc.MsgSetCommunityPoolRebate";
    value: {
        creator: string;
        chain_id: string;
        rebate_rate: string;
        liquid_staked_st_token_amount: string;
    };
}
export interface AminoMsgToggleTradeController extends AminoMsg {
    type: "/stride.stakeibc.MsgToggleTradeController";
    value: {
        creator: string;
        chain_id: string;
        permission_change: number;
        address: string;
    };
}
export interface AminoMsgUpdateHostZoneParams extends AminoMsg {
    type: "/stride.stakeibc.MsgUpdateHostZoneParams";
    value: {
        authority: string;
        chain_id: string;
        max_messages_per_ica_tx: string;
    };
}
export declare const AminoConverter: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: MsgLiquidStake) => AminoMsgLiquidStake["value"];
        fromAmino: ({ creator, amount, host_denom }: AminoMsgLiquidStake["value"]) => MsgLiquidStake;
    };
    "/stride.stakeibc.MsgLSMLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, lsmTokenIbcDenom }: MsgLSMLiquidStake) => AminoMsgLSMLiquidStake["value"];
        fromAmino: ({ creator, amount, lsm_token_ibc_denom }: AminoMsgLSMLiquidStake["value"]) => MsgLSMLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: MsgRedeemStake) => AminoMsgRedeemStake["value"];
        fromAmino: ({ creator, amount, host_zone, receiver }: AminoMsgRedeemStake["value"]) => MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingPeriod, minRedemptionRate, maxRedemptionRate, lsmLiquidStakeEnabled, communityPoolTreasuryAddress, maxMessagesPerIcaTx }: MsgRegisterHostZone) => AminoMsgRegisterHostZone["value"];
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_period, min_redemption_rate, max_redemption_rate, lsm_liquid_stake_enabled, community_pool_treasury_address, max_messages_per_ica_tx }: AminoMsgRegisterHostZone["value"]) => MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, receiver }: MsgClaimUndelegatedTokens) => AminoMsgClaimUndelegatedTokens["value"];
        fromAmino: ({ creator, host_zone_id, epoch, receiver }: AminoMsgClaimUndelegatedTokens["value"]) => MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: MsgRebalanceValidators) => AminoMsgRebalanceValidators["value"];
        fromAmino: ({ creator, host_zone, num_rebalance }: AminoMsgRebalanceValidators["value"]) => MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validators }: MsgAddValidators) => AminoMsgAddValidators["value"];
        fromAmino: ({ creator, host_zone, validators }: AminoMsgAddValidators["value"]) => MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeights": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validatorWeights }: MsgChangeValidatorWeights) => AminoMsgChangeValidatorWeights["value"];
        fromAmino: ({ creator, host_zone, validator_weights }: AminoMsgChangeValidatorWeights["value"]) => MsgChangeValidatorWeights;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: MsgDeleteValidator) => AminoMsgDeleteValidator["value"];
        fromAmino: ({ creator, host_zone, val_addr }: AminoMsgDeleteValidator["value"]) => MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, connectionId, accountOwner }: MsgRestoreInterchainAccount) => AminoMsgRestoreInterchainAccount["value"];
        fromAmino: ({ creator, chain_id, connection_id, account_owner }: AminoMsgRestoreInterchainAccount["value"]) => MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: MsgUpdateValidatorSharesExchRate) => AminoMsgUpdateValidatorSharesExchRate["value"];
        fromAmino: ({ creator, chain_id, valoper }: AminoMsgUpdateValidatorSharesExchRate["value"]) => MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgCalibrateDelegation": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: MsgCalibrateDelegation) => AminoMsgCalibrateDelegation["value"];
        fromAmino: ({ creator, chain_id, valoper }: AminoMsgCalibrateDelegation["value"]) => MsgCalibrateDelegation;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: MsgClearBalance) => AminoMsgClearBalance["value"];
        fromAmino: ({ creator, chain_id, amount, channel }: AminoMsgClearBalance["value"]) => MsgClearBalance;
    };
    "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, chainId, minInnerRedemptionRate, maxInnerRedemptionRate }: MsgUpdateInnerRedemptionRateBounds) => AminoMsgUpdateInnerRedemptionRateBounds["value"];
        fromAmino: ({ creator, chain_id, min_inner_redemption_rate, max_inner_redemption_rate }: AminoMsgUpdateInnerRedemptionRateBounds["value"]) => MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakeibc.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator, chainId }: MsgResumeHostZone) => AminoMsgResumeHostZone["value"];
        fromAmino: ({ creator, chain_id }: AminoMsgResumeHostZone["value"]) => MsgResumeHostZone;
    };
    "/stride.stakeibc.MsgCreateTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, hostChainId, strideToRewardConnectionId, strideToTradeConnectionId, hostToRewardTransferChannelId, rewardToTradeTransferChannelId, tradeToHostTransferChannelId, rewardDenomOnHost, rewardDenomOnReward, rewardDenomOnTrade, hostDenomOnTrade, hostDenomOnHost, poolId, maxAllowedSwapLossRate, minSwapAmount, maxSwapAmount, minTransferAmount }: MsgCreateTradeRoute) => AminoMsgCreateTradeRoute["value"];
        fromAmino: ({ authority, host_chain_id, stride_to_reward_connection_id, stride_to_trade_connection_id, host_to_reward_transfer_channel_id, reward_to_trade_transfer_channel_id, trade_to_host_transfer_channel_id, reward_denom_on_host, reward_denom_on_reward, reward_denom_on_trade, host_denom_on_trade, host_denom_on_host, pool_id, max_allowed_swap_loss_rate, min_swap_amount, max_swap_amount, min_transfer_amount }: AminoMsgCreateTradeRoute["value"]) => MsgCreateTradeRoute;
    };
    "/stride.stakeibc.MsgDeleteTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, rewardDenom, hostDenom }: MsgDeleteTradeRoute) => AminoMsgDeleteTradeRoute["value"];
        fromAmino: ({ authority, reward_denom, host_denom }: AminoMsgDeleteTradeRoute["value"]) => MsgDeleteTradeRoute;
    };
    "/stride.stakeibc.MsgUpdateTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, rewardDenom, hostDenom, poolId, maxAllowedSwapLossRate, minSwapAmount, maxSwapAmount, minTransferAmount }: MsgUpdateTradeRoute) => AminoMsgUpdateTradeRoute["value"];
        fromAmino: ({ authority, reward_denom, host_denom, pool_id, max_allowed_swap_loss_rate, min_swap_amount, max_swap_amount, min_transfer_amount }: AminoMsgUpdateTradeRoute["value"]) => MsgUpdateTradeRoute;
    };
    "/stride.stakeibc.MsgSetCommunityPoolRebate": {
        aminoType: string;
        toAmino: ({ creator, chainId, rebateRate, liquidStakedStTokenAmount }: MsgSetCommunityPoolRebate) => AminoMsgSetCommunityPoolRebate["value"];
        fromAmino: ({ creator, chain_id, rebate_rate, liquid_staked_st_token_amount }: AminoMsgSetCommunityPoolRebate["value"]) => MsgSetCommunityPoolRebate;
    };
    "/stride.stakeibc.MsgToggleTradeController": {
        aminoType: string;
        toAmino: ({ creator, chainId, permissionChange, address }: MsgToggleTradeController) => AminoMsgToggleTradeController["value"];
        fromAmino: ({ creator, chain_id, permission_change, address }: AminoMsgToggleTradeController["value"]) => MsgToggleTradeController;
    };
    "/stride.stakeibc.MsgUpdateHostZoneParams": {
        aminoType: string;
        toAmino: ({ authority, chainId, maxMessagesPerIcaTx }: MsgUpdateHostZoneParams) => AminoMsgUpdateHostZoneParams["value"];
        fromAmino: ({ authority, chain_id, max_messages_per_ica_tx }: AminoMsgUpdateHostZoneParams["value"]) => MsgUpdateHostZoneParams;
    };
};
