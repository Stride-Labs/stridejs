import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const strideAminoConverters: {
    "/stride.staketia.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ staker, nativeAmount }: import("./staketia/tx").MsgLiquidStake) => {
            staker: string;
            native_amount: string;
        };
        fromAmino: ({ staker, native_amount }: {
            staker: string;
            native_amount: string;
        }) => import("./staketia/tx").MsgLiquidStake;
    };
    "/stride.staketia.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ redeemer, stTokenAmount }: import("./staketia/tx").MsgRedeemStake) => {
            redeemer: string;
            st_token_amount: string;
        };
        fromAmino: ({ redeemer, st_token_amount }: {
            redeemer: string;
            st_token_amount: string;
        }) => import("./staketia/tx").MsgRedeemStake;
    };
    "/stride.staketia.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./staketia/tx").MsgConfirmDelegation) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./staketia/tx").MsgConfirmDelegation;
    };
    "/stride.staketia.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./staketia/tx").MsgConfirmUndelegation) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./staketia/tx").MsgConfirmUndelegation;
    };
    "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./staketia/tx").MsgConfirmUnbondedTokenSweep) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./staketia/tx").MsgConfirmUnbondedTokenSweep;
    };
    "/stride.staketia.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: ({ operator, delegationOffset, validatorAddress }: import("./staketia/tx").MsgAdjustDelegatedBalance) => {
            operator: string;
            delegation_offset: string;
            validator_address: string;
        };
        fromAmino: ({ operator, delegation_offset, validator_address }: {
            operator: string;
            delegation_offset: string;
            validator_address: string;
        }) => import("./staketia/tx").MsgAdjustDelegatedBalance;
    };
    "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, minInnerRedemptionRate, maxInnerRedemptionRate }: import("./staketia/tx").MsgUpdateInnerRedemptionRateBounds) => {
            creator: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        };
        fromAmino: ({ creator, min_inner_redemption_rate, max_inner_redemption_rate }: {
            creator: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        }) => import("./staketia/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.staketia.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator }: import("./staketia/tx").MsgResumeHostZone) => {
            creator: string;
        };
        fromAmino: ({ creator }: {
            creator: string;
        }) => import("./staketia/tx").MsgResumeHostZone;
    };
    "/stride.staketia.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: ({ creator }: import("./staketia/tx").MsgRefreshRedemptionRate) => {
            creator: string;
        };
        fromAmino: ({ creator }: {
            creator: string;
        }) => import("./staketia/tx").MsgRefreshRedemptionRate;
    };
    "/stride.staketia.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: ({ creator, delegationRecord }: import("./staketia/tx").MsgOverwriteDelegationRecord) => {
            creator: string;
            delegation_record: {
                id: string;
                native_amount: string;
                status: number;
                tx_hash: string;
            };
        };
        fromAmino: ({ creator, delegation_record }: {
            creator: string;
            delegation_record: {
                id: string;
                native_amount: string;
                status: number;
                tx_hash: string;
            };
        }) => import("./staketia/tx").MsgOverwriteDelegationRecord;
    };
    "/stride.staketia.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: ({ creator, unbondingRecord }: import("./staketia/tx").MsgOverwriteUnbondingRecord) => {
            creator: string;
            unbonding_record: {
                id: string;
                status: number;
                st_token_amount: string;
                native_amount: string;
                unbonding_completion_time_seconds: string;
                undelegation_tx_hash: string;
                unbonded_token_sweep_tx_hash: string;
            };
        };
        fromAmino: ({ creator, unbonding_record }: {
            creator: string;
            unbonding_record: {
                id: string;
                status: number;
                st_token_amount: string;
                native_amount: string;
                unbonding_completion_time_seconds: string;
                undelegation_tx_hash: string;
                unbonded_token_sweep_tx_hash: string;
            };
        }) => import("./staketia/tx").MsgOverwriteUnbondingRecord;
    };
    "/stride.staketia.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: ({ creator, redemptionRecord }: import("./staketia/tx").MsgOverwriteRedemptionRecord) => {
            creator: string;
            redemption_record: {
                unbonding_record_id: string;
                redeemer: string;
                st_token_amount: string;
                native_amount: string;
            };
        };
        fromAmino: ({ creator, redemption_record }: {
            creator: string;
            redemption_record: {
                unbonding_record_id: string;
                redeemer: string;
                st_token_amount: string;
                native_amount: string;
            };
        }) => import("./staketia/tx").MsgOverwriteRedemptionRecord;
    };
    "/stride.staketia.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: ({ signer, operator }: import("./staketia/tx").MsgSetOperatorAddress) => {
            signer: string;
            operator: string;
        };
        fromAmino: ({ signer, operator }: {
            signer: string;
            operator: string;
        }) => import("./staketia/tx").MsgSetOperatorAddress;
    };
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: import("./stakeibc/tx").MsgLiquidStake) => {
            creator: string;
            amount: string;
            host_denom: string;
        };
        fromAmino: ({ creator, amount, host_denom }: {
            creator: string;
            amount: string;
            host_denom: string;
        }) => import("./stakeibc/tx").MsgLiquidStake;
    };
    "/stride.stakeibc.MsgLSMLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, lsmTokenIbcDenom }: import("./stakeibc/tx").MsgLSMLiquidStake) => {
            creator: string;
            amount: string;
            lsm_token_ibc_denom: string;
        };
        fromAmino: ({ creator, amount, lsm_token_ibc_denom }: {
            creator: string;
            amount: string;
            lsm_token_ibc_denom: string;
        }) => import("./stakeibc/tx").MsgLSMLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: import("./stakeibc/tx").MsgRedeemStake) => {
            creator: string;
            amount: string;
            host_zone: string;
            receiver: string;
        };
        fromAmino: ({ creator, amount, host_zone, receiver }: {
            creator: string;
            amount: string;
            host_zone: string;
            receiver: string;
        }) => import("./stakeibc/tx").MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingPeriod, minRedemptionRate, maxRedemptionRate, lsmLiquidStakeEnabled, communityPoolTreasuryAddress, maxMessagesPerIcaTx }: import("./stakeibc/tx").MsgRegisterHostZone) => {
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
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_period, min_redemption_rate, max_redemption_rate, lsm_liquid_stake_enabled, community_pool_treasury_address, max_messages_per_ica_tx }: {
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
        }) => import("./stakeibc/tx").MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, receiver }: import("./stakeibc/tx").MsgClaimUndelegatedTokens) => {
            creator: string;
            host_zone_id: string;
            epoch: string;
            receiver: string;
        };
        fromAmino: ({ creator, host_zone_id, epoch, receiver }: {
            creator: string;
            host_zone_id: string;
            epoch: string;
            receiver: string;
        }) => import("./stakeibc/tx").MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: import("./stakeibc/tx").MsgRebalanceValidators) => {
            creator: string;
            host_zone: string;
            num_rebalance: string;
        };
        fromAmino: ({ creator, host_zone, num_rebalance }: {
            creator: string;
            host_zone: string;
            num_rebalance: string;
        }) => import("./stakeibc/tx").MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validators }: import("./stakeibc/tx").MsgAddValidators) => {
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
        fromAmino: ({ creator, host_zone, validators }: {
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
        }) => import("./stakeibc/tx").MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeights": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validatorWeights }: import("./stakeibc/tx").MsgChangeValidatorWeights) => {
            creator: string;
            host_zone: string;
            validator_weights: {
                address: string;
                weight: string;
            }[];
        };
        fromAmino: ({ creator, host_zone, validator_weights }: {
            creator: string;
            host_zone: string;
            validator_weights: {
                address: string;
                weight: string;
            }[];
        }) => import("./stakeibc/tx").MsgChangeValidatorWeights;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: import("./stakeibc/tx").MsgDeleteValidator) => {
            creator: string;
            host_zone: string;
            val_addr: string;
        };
        fromAmino: ({ creator, host_zone, val_addr }: {
            creator: string;
            host_zone: string;
            val_addr: string;
        }) => import("./stakeibc/tx").MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, connectionId, accountOwner }: import("./stakeibc/tx").MsgRestoreInterchainAccount) => {
            creator: string;
            chain_id: string;
            connection_id: string;
            account_owner: string;
        };
        fromAmino: ({ creator, chain_id, connection_id, account_owner }: {
            creator: string;
            chain_id: string;
            connection_id: string;
            account_owner: string;
        }) => import("./stakeibc/tx").MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate) => {
            creator: string;
            chain_id: string;
            valoper: string;
        };
        fromAmino: ({ creator, chain_id, valoper }: {
            creator: string;
            chain_id: string;
            valoper: string;
        }) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgCalibrateDelegation": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: import("./stakeibc/tx").MsgCalibrateDelegation) => {
            creator: string;
            chain_id: string;
            valoper: string;
        };
        fromAmino: ({ creator, chain_id, valoper }: {
            creator: string;
            chain_id: string;
            valoper: string;
        }) => import("./stakeibc/tx").MsgCalibrateDelegation;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: import("./stakeibc/tx").MsgClearBalance) => {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        };
        fromAmino: ({ creator, chain_id, amount, channel }: {
            creator: string;
            chain_id: string;
            amount: string;
            channel: string;
        }) => import("./stakeibc/tx").MsgClearBalance;
    };
    "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, chainId, minInnerRedemptionRate, maxInnerRedemptionRate }: import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBounds) => {
            creator: string;
            chain_id: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        };
        fromAmino: ({ creator, chain_id, min_inner_redemption_rate, max_inner_redemption_rate }: {
            creator: string;
            chain_id: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        }) => import("./stakeibc/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakeibc.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator, chainId }: import("./stakeibc/tx").MsgResumeHostZone) => {
            creator: string;
            chain_id: string;
        };
        fromAmino: ({ creator, chain_id }: {
            creator: string;
            chain_id: string;
        }) => import("./stakeibc/tx").MsgResumeHostZone;
    };
    "/stride.stakeibc.MsgCreateTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, hostChainId, strideToRewardConnectionId, strideToTradeConnectionId, hostToRewardTransferChannelId, rewardToTradeTransferChannelId, tradeToHostTransferChannelId, rewardDenomOnHost, rewardDenomOnReward, rewardDenomOnTrade, hostDenomOnTrade, hostDenomOnHost, poolId, maxAllowedSwapLossRate, minSwapAmount, maxSwapAmount, minTransferAmount }: import("./stakeibc/tx").MsgCreateTradeRoute) => {
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
        fromAmino: ({ authority, host_chain_id, stride_to_reward_connection_id, stride_to_trade_connection_id, host_to_reward_transfer_channel_id, reward_to_trade_transfer_channel_id, trade_to_host_transfer_channel_id, reward_denom_on_host, reward_denom_on_reward, reward_denom_on_trade, host_denom_on_trade, host_denom_on_host, pool_id, max_allowed_swap_loss_rate, min_swap_amount, max_swap_amount, min_transfer_amount }: {
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
        }) => import("./stakeibc/tx").MsgCreateTradeRoute;
    };
    "/stride.stakeibc.MsgDeleteTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, rewardDenom, hostDenom }: import("./stakeibc/tx").MsgDeleteTradeRoute) => {
            authority: string;
            reward_denom: string;
            host_denom: string;
        };
        fromAmino: ({ authority, reward_denom, host_denom }: {
            authority: string;
            reward_denom: string;
            host_denom: string;
        }) => import("./stakeibc/tx").MsgDeleteTradeRoute;
    };
    "/stride.stakeibc.MsgUpdateTradeRoute": {
        aminoType: string;
        toAmino: ({ authority, rewardDenom, hostDenom, poolId, maxAllowedSwapLossRate, minSwapAmount, maxSwapAmount, minTransferAmount }: import("./stakeibc/tx").MsgUpdateTradeRoute) => {
            authority: string;
            reward_denom: string;
            host_denom: string;
            pool_id: string;
            max_allowed_swap_loss_rate: string;
            min_swap_amount: string;
            max_swap_amount: string;
            min_transfer_amount: string;
        };
        fromAmino: ({ authority, reward_denom, host_denom, pool_id, max_allowed_swap_loss_rate, min_swap_amount, max_swap_amount, min_transfer_amount }: {
            authority: string;
            reward_denom: string;
            host_denom: string;
            pool_id: string;
            max_allowed_swap_loss_rate: string;
            min_swap_amount: string;
            max_swap_amount: string;
            min_transfer_amount: string;
        }) => import("./stakeibc/tx").MsgUpdateTradeRoute;
    };
    "/stride.stakeibc.MsgSetCommunityPoolRebate": {
        aminoType: string;
        toAmino: ({ creator, chainId, rebateRate, liquidStakedStTokenAmount }: import("./stakeibc/tx").MsgSetCommunityPoolRebate) => {
            creator: string;
            chain_id: string;
            rebate_rate: string;
            liquid_staked_st_token_amount: string;
        };
        fromAmino: ({ creator, chain_id, rebate_rate, liquid_staked_st_token_amount }: {
            creator: string;
            chain_id: string;
            rebate_rate: string;
            liquid_staked_st_token_amount: string;
        }) => import("./stakeibc/tx").MsgSetCommunityPoolRebate;
    };
    "/stride.stakeibc.MsgToggleTradeController": {
        aminoType: string;
        toAmino: ({ creator, chainId, permissionChange, address }: import("./stakeibc/tx").MsgToggleTradeController) => {
            creator: string;
            chain_id: string;
            permission_change: number;
            address: string;
        };
        fromAmino: ({ creator, chain_id, permission_change, address }: {
            creator: string;
            chain_id: string;
            permission_change: number;
            address: string;
        }) => import("./stakeibc/tx").MsgToggleTradeController;
    };
    "/stride.stakeibc.MsgUpdateHostZoneParams": {
        aminoType: string;
        toAmino: ({ authority, chainId, maxMessagesPerIcaTx }: import("./stakeibc/tx").MsgUpdateHostZoneParams) => {
            authority: string;
            chain_id: string;
            max_messages_per_ica_tx: string;
        };
        fromAmino: ({ authority, chain_id, max_messages_per_ica_tx }: {
            authority: string;
            chain_id: string;
            max_messages_per_ica_tx: string;
        }) => import("./stakeibc/tx").MsgUpdateHostZoneParams;
    };
    "/stride.stakedym.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ staker, nativeAmount }: import("./stakedym/tx").MsgLiquidStake) => {
            staker: string;
            native_amount: string;
        };
        fromAmino: ({ staker, native_amount }: {
            staker: string;
            native_amount: string;
        }) => import("./stakedym/tx").MsgLiquidStake;
    };
    "/stride.stakedym.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ redeemer, stTokenAmount }: import("./stakedym/tx").MsgRedeemStake) => {
            redeemer: string;
            st_token_amount: string;
        };
        fromAmino: ({ redeemer, st_token_amount }: {
            redeemer: string;
            st_token_amount: string;
        }) => import("./stakedym/tx").MsgRedeemStake;
    };
    "/stride.stakedym.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./stakedym/tx").MsgConfirmDelegation) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./stakedym/tx").MsgConfirmDelegation;
    };
    "/stride.stakedym.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./stakedym/tx").MsgConfirmUndelegation) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./stakedym/tx").MsgConfirmUndelegation;
    };
    "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: import("./stakedym/tx").MsgConfirmUnbondedTokenSweep) => {
            operator: string;
            record_id: string;
            tx_hash: string;
        };
        fromAmino: ({ operator, record_id, tx_hash }: {
            operator: string;
            record_id: string;
            tx_hash: string;
        }) => import("./stakedym/tx").MsgConfirmUnbondedTokenSweep;
    };
    "/stride.stakedym.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: ({ operator, delegationOffset, validatorAddress }: import("./stakedym/tx").MsgAdjustDelegatedBalance) => {
            operator: string;
            delegation_offset: string;
            validator_address: string;
        };
        fromAmino: ({ operator, delegation_offset, validator_address }: {
            operator: string;
            delegation_offset: string;
            validator_address: string;
        }) => import("./stakedym/tx").MsgAdjustDelegatedBalance;
    };
    "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, minInnerRedemptionRate, maxInnerRedemptionRate }: import("./stakedym/tx").MsgUpdateInnerRedemptionRateBounds) => {
            creator: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        };
        fromAmino: ({ creator, min_inner_redemption_rate, max_inner_redemption_rate }: {
            creator: string;
            min_inner_redemption_rate: string;
            max_inner_redemption_rate: string;
        }) => import("./stakedym/tx").MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakedym.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator }: import("./stakedym/tx").MsgResumeHostZone) => {
            creator: string;
        };
        fromAmino: ({ creator }: {
            creator: string;
        }) => import("./stakedym/tx").MsgResumeHostZone;
    };
    "/stride.stakedym.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: ({ creator }: import("./stakedym/tx").MsgRefreshRedemptionRate) => {
            creator: string;
        };
        fromAmino: ({ creator }: {
            creator: string;
        }) => import("./stakedym/tx").MsgRefreshRedemptionRate;
    };
    "/stride.stakedym.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: ({ creator, delegationRecord }: import("./stakedym/tx").MsgOverwriteDelegationRecord) => {
            creator: string;
            delegation_record: {
                id: string;
                native_amount: string;
                status: number;
                tx_hash: string;
            };
        };
        fromAmino: ({ creator, delegation_record }: {
            creator: string;
            delegation_record: {
                id: string;
                native_amount: string;
                status: number;
                tx_hash: string;
            };
        }) => import("./stakedym/tx").MsgOverwriteDelegationRecord;
    };
    "/stride.stakedym.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: ({ creator, unbondingRecord }: import("./stakedym/tx").MsgOverwriteUnbondingRecord) => {
            creator: string;
            unbonding_record: {
                id: string;
                status: number;
                st_token_amount: string;
                native_amount: string;
                unbonding_completion_time_seconds: string;
                undelegation_tx_hash: string;
                unbonded_token_sweep_tx_hash: string;
            };
        };
        fromAmino: ({ creator, unbonding_record }: {
            creator: string;
            unbonding_record: {
                id: string;
                status: number;
                st_token_amount: string;
                native_amount: string;
                unbonding_completion_time_seconds: string;
                undelegation_tx_hash: string;
                unbonded_token_sweep_tx_hash: string;
            };
        }) => import("./stakedym/tx").MsgOverwriteUnbondingRecord;
    };
    "/stride.stakedym.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: ({ creator, redemptionRecord }: import("./stakedym/tx").MsgOverwriteRedemptionRecord) => {
            creator: string;
            redemption_record: {
                unbonding_record_id: string;
                redeemer: string;
                st_token_amount: string;
                native_amount: string;
            };
        };
        fromAmino: ({ creator, redemption_record }: {
            creator: string;
            redemption_record: {
                unbonding_record_id: string;
                redeemer: string;
                st_token_amount: string;
                native_amount: string;
            };
        }) => import("./stakedym/tx").MsgOverwriteRedemptionRecord;
    };
    "/stride.stakedym.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: ({ signer, operator }: import("./stakedym/tx").MsgSetOperatorAddress) => {
            signer: string;
            operator: string;
        };
        fromAmino: ({ signer, operator }: {
            signer: string;
            operator: string;
        }) => import("./stakedym/tx").MsgSetOperatorAddress;
    };
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: import("./interchainquery/v1/messages").MsgSubmitQueryResponse) => {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        };
        fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        }) => import("./interchainquery/v1/messages").MsgSubmitQueryResponse;
    };
    "/stride.icaoracle.MsgAddOracle": {
        aminoType: string;
        toAmino: ({ creator, connectionId }: import("./icaoracle/tx").MsgAddOracle) => {
            creator: string;
            connection_id: string;
        };
        fromAmino: ({ creator, connection_id }: {
            creator: string;
            connection_id: string;
        }) => import("./icaoracle/tx").MsgAddOracle;
    };
    "/stride.icaoracle.MsgInstantiateOracle": {
        aminoType: string;
        toAmino: ({ creator, oracleChainId, contractCodeId, transferChannelOnOracle }: import("./icaoracle/tx").MsgInstantiateOracle) => {
            creator: string;
            oracle_chain_id: string;
            contract_code_id: string;
            transfer_channel_on_oracle: string;
        };
        fromAmino: ({ creator, oracle_chain_id, contract_code_id, transfer_channel_on_oracle }: {
            creator: string;
            oracle_chain_id: string;
            contract_code_id: string;
            transfer_channel_on_oracle: string;
        }) => import("./icaoracle/tx").MsgInstantiateOracle;
    };
    "/stride.icaoracle.MsgRestoreOracleICA": {
        aminoType: string;
        toAmino: ({ creator, oracleChainId }: import("./icaoracle/tx").MsgRestoreOracleICA) => {
            creator: string;
            oracle_chain_id: string;
        };
        fromAmino: ({ creator, oracle_chain_id }: {
            creator: string;
            oracle_chain_id: string;
        }) => import("./icaoracle/tx").MsgRestoreOracleICA;
    };
    "/stride.icaoracle.MsgToggleOracle": {
        aminoType: string;
        toAmino: ({ authority, oracleChainId, active }: import("./icaoracle/tx").MsgToggleOracle) => {
            authority: string;
            oracle_chain_id: string;
            active: boolean;
        };
        fromAmino: ({ authority, oracle_chain_id, active }: {
            authority: string;
            oracle_chain_id: string;
            active: boolean;
        }) => import("./icaoracle/tx").MsgToggleOracle;
    };
    "/stride.icaoracle.MsgRemoveOracle": {
        aminoType: string;
        toAmino: ({ authority, oracleChainId }: import("./icaoracle/tx").MsgRemoveOracle) => {
            authority: string;
            oracle_chain_id: string;
        };
        fromAmino: ({ authority, oracle_chain_id }: {
            authority: string;
            oracle_chain_id: string;
        }) => import("./icaoracle/tx").MsgRemoveOracle;
    };
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: import("./claim/tx").MsgSetAirdropAllocations) => {
            allocator: string;
            airdrop_identifier: string;
            users: string[];
            weights: string[];
        };
        fromAmino: ({ allocator, airdrop_identifier, users, weights }: {
            allocator: string;
            airdrop_identifier: string;
            users: string[];
            weights: string[];
        }) => import("./claim/tx").MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user }: import("./claim/tx").MsgClaimFreeAmount) => {
            user: string;
        };
        fromAmino: ({ user }: {
            user: string;
        }) => import("./claim/tx").MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, chainId, denom, startTime, duration, autopilotEnabled }: import("./claim/tx").MsgCreateAirdrop) => {
            distributor: string;
            identifier: string;
            chain_id: string;
            denom: string;
            start_time: string;
            duration: string;
            autopilot_enabled: boolean;
        };
        fromAmino: ({ distributor, identifier, chain_id, denom, start_time, duration, autopilot_enabled }: {
            distributor: string;
            identifier: string;
            chain_id: string;
            denom: string;
            start_time: string;
            duration: string;
            autopilot_enabled: boolean;
        }) => import("./claim/tx").MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: import("./claim/tx").MsgDeleteAirdrop) => {
            distributor: string;
            identifier: string;
        };
        fromAmino: ({ distributor, identifier }: {
            distributor: string;
            identifier: string;
        }) => import("./claim/tx").MsgDeleteAirdrop;
    };
    "/stride.airdrop.MsgClaimDaily": {
        aminoType: string;
        toAmino: ({ claimer, airdropId }: import("./airdrop/tx").MsgClaimDaily) => {
            claimer: string;
            airdrop_id: string;
        };
        fromAmino: ({ claimer, airdrop_id }: {
            claimer: string;
            airdrop_id: string;
        }) => import("./airdrop/tx").MsgClaimDaily;
    };
    "/stride.airdrop.MsgClaimEarly": {
        aminoType: string;
        toAmino: ({ claimer, airdropId }: import("./airdrop/tx").MsgClaimEarly) => {
            claimer: string;
            airdrop_id: string;
        };
        fromAmino: ({ claimer, airdrop_id }: {
            claimer: string;
            airdrop_id: string;
        }) => import("./airdrop/tx").MsgClaimEarly;
    };
    "/stride.airdrop.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ admin, airdropId, rewardDenom, distributionStartDate, distributionEndDate, clawbackDate, claimTypeDeadlineDate, earlyClaimPenalty, distributorAddress, allocatorAddress, linkerAddress }: import("./airdrop/tx").MsgCreateAirdrop) => {
            admin: string;
            airdrop_id: string;
            reward_denom: string;
            distribution_start_date: {
                seconds: string;
                nanos: number;
            };
            distribution_end_date: {
                seconds: string;
                nanos: number;
            };
            clawback_date: {
                seconds: string;
                nanos: number;
            };
            claim_type_deadline_date: {
                seconds: string;
                nanos: number;
            };
            early_claim_penalty: string;
            distributor_address: string;
            allocator_address: string;
            linker_address: string;
        };
        fromAmino: ({ admin, airdrop_id, reward_denom, distribution_start_date, distribution_end_date, clawback_date, claim_type_deadline_date, early_claim_penalty, distributor_address, allocator_address, linker_address }: {
            admin: string;
            airdrop_id: string;
            reward_denom: string;
            distribution_start_date: {
                seconds: string;
                nanos: number;
            };
            distribution_end_date: {
                seconds: string;
                nanos: number;
            };
            clawback_date: {
                seconds: string;
                nanos: number;
            };
            claim_type_deadline_date: {
                seconds: string;
                nanos: number;
            };
            early_claim_penalty: string;
            distributor_address: string;
            allocator_address: string;
            linker_address: string;
        }) => import("./airdrop/tx").MsgCreateAirdrop;
    };
    "/stride.airdrop.MsgUpdateAirdrop": {
        aminoType: string;
        toAmino: ({ admin, airdropId, rewardDenom, distributionStartDate, distributionEndDate, clawbackDate, claimTypeDeadlineDate, earlyClaimPenalty, distributorAddress, allocatorAddress, linkerAddress }: import("./airdrop/tx").MsgUpdateAirdrop) => {
            admin: string;
            airdrop_id: string;
            reward_denom: string;
            distribution_start_date: {
                seconds: string;
                nanos: number;
            };
            distribution_end_date: {
                seconds: string;
                nanos: number;
            };
            clawback_date: {
                seconds: string;
                nanos: number;
            };
            claim_type_deadline_date: {
                seconds: string;
                nanos: number;
            };
            early_claim_penalty: string;
            distributor_address: string;
            allocator_address: string;
            linker_address: string;
        };
        fromAmino: ({ admin, airdrop_id, reward_denom, distribution_start_date, distribution_end_date, clawback_date, claim_type_deadline_date, early_claim_penalty, distributor_address, allocator_address, linker_address }: {
            admin: string;
            airdrop_id: string;
            reward_denom: string;
            distribution_start_date: {
                seconds: string;
                nanos: number;
            };
            distribution_end_date: {
                seconds: string;
                nanos: number;
            };
            clawback_date: {
                seconds: string;
                nanos: number;
            };
            claim_type_deadline_date: {
                seconds: string;
                nanos: number;
            };
            early_claim_penalty: string;
            distributor_address: string;
            allocator_address: string;
            linker_address: string;
        }) => import("./airdrop/tx").MsgUpdateAirdrop;
    };
    "/stride.airdrop.MsgAddAllocations": {
        aminoType: string;
        toAmino: ({ admin, airdropId, allocations }: import("./airdrop/tx").MsgAddAllocations) => {
            admin: string;
            airdrop_id: string;
            allocations: {
                user_address: string;
                allocations: string[];
            }[];
        };
        fromAmino: ({ admin, airdrop_id, allocations }: {
            admin: string;
            airdrop_id: string;
            allocations: {
                user_address: string;
                allocations: string[];
            }[];
        }) => import("./airdrop/tx").MsgAddAllocations;
    };
    "/stride.airdrop.MsgUpdateUserAllocation": {
        aminoType: string;
        toAmino: ({ admin, airdropId, userAddress, allocations }: import("./airdrop/tx").MsgUpdateUserAllocation) => {
            admin: string;
            airdrop_id: string;
            user_address: string;
            allocations: string[];
        };
        fromAmino: ({ admin, airdrop_id, user_address, allocations }: {
            admin: string;
            airdrop_id: string;
            user_address: string;
            allocations: string[];
        }) => import("./airdrop/tx").MsgUpdateUserAllocation;
    };
    "/stride.airdrop.MsgLinkAddresses": {
        aminoType: string;
        toAmino: ({ admin, airdropId, strideAddress, hostAddress }: import("./airdrop/tx").MsgLinkAddresses) => {
            admin: string;
            airdrop_id: string;
            stride_address: string;
            host_address: string;
        };
        fromAmino: ({ admin, airdrop_id, stride_address, host_address }: {
            admin: string;
            airdrop_id: string;
            stride_address: string;
            host_address: string;
        }) => import("./airdrop/tx").MsgLinkAddresses;
    };
};
export declare const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStrideClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStrideClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
