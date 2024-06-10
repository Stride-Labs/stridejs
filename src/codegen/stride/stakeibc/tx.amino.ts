import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { authzPermissionChangeFromJSON, MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeights, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgCalibrateDelegation, MsgClearBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgCreateTradeRoute, MsgDeleteTradeRoute, MsgUpdateTradeRoute, MsgSetCommunityPoolRebate, MsgToggleTradeController, MsgUpdateHostZoneParams } from "./tx";
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
export const AminoConverter = {
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "stakeibc/LiquidStake",
    toAmino: ({
      creator,
      amount,
      hostDenom
    }: MsgLiquidStake): AminoMsgLiquidStake["value"] => {
      return {
        creator,
        amount,
        host_denom: hostDenom
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_denom
    }: AminoMsgLiquidStake["value"]): MsgLiquidStake => {
      return {
        creator,
        amount,
        hostDenom: host_denom
      };
    }
  },
  "/stride.stakeibc.MsgLSMLiquidStake": {
    aminoType: "stakeibc/LSMLiquidStake",
    toAmino: ({
      creator,
      amount,
      lsmTokenIbcDenom
    }: MsgLSMLiquidStake): AminoMsgLSMLiquidStake["value"] => {
      return {
        creator,
        amount,
        lsm_token_ibc_denom: lsmTokenIbcDenom
      };
    },
    fromAmino: ({
      creator,
      amount,
      lsm_token_ibc_denom
    }: AminoMsgLSMLiquidStake["value"]): MsgLSMLiquidStake => {
      return {
        creator,
        amount,
        lsmTokenIbcDenom: lsm_token_ibc_denom
      };
    }
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "stakeibc/RedeemStake",
    toAmino: ({
      creator,
      amount,
      hostZone,
      receiver
    }: MsgRedeemStake): AminoMsgRedeemStake["value"] => {
      return {
        creator,
        amount,
        host_zone: hostZone,
        receiver
      };
    },
    fromAmino: ({
      creator,
      amount,
      host_zone,
      receiver
    }: AminoMsgRedeemStake["value"]): MsgRedeemStake => {
      return {
        creator,
        amount,
        hostZone: host_zone,
        receiver
      };
    }
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "stakeibc/RegisterHostZone",
    toAmino: ({
      connectionId,
      bech32prefix,
      hostDenom,
      ibcDenom,
      creator,
      transferChannelId,
      unbondingPeriod,
      minRedemptionRate,
      maxRedemptionRate,
      lsmLiquidStakeEnabled,
      communityPoolTreasuryAddress,
      maxMessagesPerIcaTx
    }: MsgRegisterHostZone): AminoMsgRegisterHostZone["value"] => {
      return {
        connection_id: connectionId,
        bech32prefix,
        host_denom: hostDenom,
        ibc_denom: ibcDenom,
        creator,
        transfer_channel_id: transferChannelId,
        unbonding_period: unbondingPeriod.toString(),
        min_redemption_rate: minRedemptionRate,
        max_redemption_rate: maxRedemptionRate,
        lsm_liquid_stake_enabled: lsmLiquidStakeEnabled,
        community_pool_treasury_address: communityPoolTreasuryAddress,
        max_messages_per_ica_tx: maxMessagesPerIcaTx.toString()
      };
    },
    fromAmino: ({
      connection_id,
      bech32prefix,
      host_denom,
      ibc_denom,
      creator,
      transfer_channel_id,
      unbonding_period,
      min_redemption_rate,
      max_redemption_rate,
      lsm_liquid_stake_enabled,
      community_pool_treasury_address,
      max_messages_per_ica_tx
    }: AminoMsgRegisterHostZone["value"]): MsgRegisterHostZone => {
      return {
        connectionId: connection_id,
        bech32prefix,
        hostDenom: host_denom,
        ibcDenom: ibc_denom,
        creator,
        transferChannelId: transfer_channel_id,
        unbondingPeriod: Long.fromString(unbonding_period),
        minRedemptionRate: min_redemption_rate,
        maxRedemptionRate: max_redemption_rate,
        lsmLiquidStakeEnabled: lsm_liquid_stake_enabled,
        communityPoolTreasuryAddress: community_pool_treasury_address,
        maxMessagesPerIcaTx: Long.fromString(max_messages_per_ica_tx)
      };
    }
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "stakeibc/ClaimUndelegatedTokens",
    toAmino: ({
      creator,
      hostZoneId,
      epoch,
      receiver
    }: MsgClaimUndelegatedTokens): AminoMsgClaimUndelegatedTokens["value"] => {
      return {
        creator,
        host_zone_id: hostZoneId,
        epoch: epoch.toString(),
        receiver
      };
    },
    fromAmino: ({
      creator,
      host_zone_id,
      epoch,
      receiver
    }: AminoMsgClaimUndelegatedTokens["value"]): MsgClaimUndelegatedTokens => {
      return {
        creator,
        hostZoneId: host_zone_id,
        epoch: Long.fromString(epoch),
        receiver
      };
    }
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "stakeibc/RebalanceValidators",
    toAmino: ({
      creator,
      hostZone,
      numRebalance
    }: MsgRebalanceValidators): AminoMsgRebalanceValidators["value"] => {
      return {
        creator,
        host_zone: hostZone,
        num_rebalance: numRebalance.toString()
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      num_rebalance
    }: AminoMsgRebalanceValidators["value"]): MsgRebalanceValidators => {
      return {
        creator,
        hostZone: host_zone,
        numRebalance: Long.fromString(num_rebalance)
      };
    }
  },
  "/stride.stakeibc.MsgAddValidators": {
    aminoType: "/stride.stakeibc.MsgAddValidators",
    toAmino: ({
      creator,
      hostZone,
      validators
    }: MsgAddValidators): AminoMsgAddValidators["value"] => {
      return {
        creator,
        host_zone: hostZone,
        validators: validators.map(el0 => ({
          name: el0.name,
          address: el0.address,
          weight: el0.weight.toString(),
          delegation: el0.delegation,
          slash_query_progress_tracker: el0.slashQueryProgressTracker,
          slash_query_checkpoint: el0.slashQueryCheckpoint,
          shares_to_tokens_rate: el0.sharesToTokensRate,
          delegation_changes_in_progress: el0.delegationChangesInProgress.toString(),
          slash_query_in_progress: el0.slashQueryInProgress
        }))
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      validators
    }: AminoMsgAddValidators["value"]): MsgAddValidators => {
      return {
        creator,
        hostZone: host_zone,
        validators: validators.map(el0 => ({
          name: el0.name,
          address: el0.address,
          weight: Long.fromString(el0.weight),
          delegation: el0.delegation,
          slashQueryProgressTracker: el0.slash_query_progress_tracker,
          slashQueryCheckpoint: el0.slash_query_checkpoint,
          sharesToTokensRate: el0.shares_to_tokens_rate,
          delegationChangesInProgress: Long.fromString(el0.delegation_changes_in_progress),
          slashQueryInProgress: el0.slash_query_in_progress
        }))
      };
    }
  },
  "/stride.stakeibc.MsgChangeValidatorWeights": {
    aminoType: "/stride.stakeibc.MsgChangeValidatorWeights",
    toAmino: ({
      creator,
      hostZone,
      validatorWeights
    }: MsgChangeValidatorWeights): AminoMsgChangeValidatorWeights["value"] => {
      return {
        creator,
        host_zone: hostZone,
        validator_weights: validatorWeights.map(el0 => ({
          address: el0.address,
          weight: el0.weight.toString()
        }))
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      validator_weights
    }: AminoMsgChangeValidatorWeights["value"]): MsgChangeValidatorWeights => {
      return {
        creator,
        hostZone: host_zone,
        validatorWeights: validator_weights.map(el0 => ({
          address: el0.address,
          weight: Long.fromString(el0.weight)
        }))
      };
    }
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "stakeibc/DeleteValidator",
    toAmino: ({
      creator,
      hostZone,
      valAddr
    }: MsgDeleteValidator): AminoMsgDeleteValidator["value"] => {
      return {
        creator,
        host_zone: hostZone,
        val_addr: valAddr
      };
    },
    fromAmino: ({
      creator,
      host_zone,
      val_addr
    }: AminoMsgDeleteValidator["value"]): MsgDeleteValidator => {
      return {
        creator,
        hostZone: host_zone,
        valAddr: val_addr
      };
    }
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "stakeibc/RestoreInterchainAccount",
    toAmino: ({
      creator,
      chainId,
      connectionId,
      accountOwner
    }: MsgRestoreInterchainAccount): AminoMsgRestoreInterchainAccount["value"] => {
      return {
        creator,
        chain_id: chainId,
        connection_id: connectionId,
        account_owner: accountOwner
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      connection_id,
      account_owner
    }: AminoMsgRestoreInterchainAccount["value"]): MsgRestoreInterchainAccount => {
      return {
        creator,
        chainId: chain_id,
        connectionId: connection_id,
        accountOwner: account_owner
      };
    }
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "stakeibc/UpdateValidatorSharesExchRate",
    toAmino: ({
      creator,
      chainId,
      valoper
    }: MsgUpdateValidatorSharesExchRate): AminoMsgUpdateValidatorSharesExchRate["value"] => {
      return {
        creator,
        chain_id: chainId,
        valoper
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      valoper
    }: AminoMsgUpdateValidatorSharesExchRate["value"]): MsgUpdateValidatorSharesExchRate => {
      return {
        creator,
        chainId: chain_id,
        valoper
      };
    }
  },
  "/stride.stakeibc.MsgCalibrateDelegation": {
    aminoType: "/stride.stakeibc.MsgCalibrateDelegation",
    toAmino: ({
      creator,
      chainId,
      valoper
    }: MsgCalibrateDelegation): AminoMsgCalibrateDelegation["value"] => {
      return {
        creator,
        chain_id: chainId,
        valoper
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      valoper
    }: AminoMsgCalibrateDelegation["value"]): MsgCalibrateDelegation => {
      return {
        creator,
        chainId: chain_id,
        valoper
      };
    }
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "still-no-defined",
    toAmino: ({
      creator,
      chainId,
      amount,
      channel
    }: MsgClearBalance): AminoMsgClearBalance["value"] => {
      return {
        creator,
        chain_id: chainId,
        amount,
        channel
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      amount,
      channel
    }: AminoMsgClearBalance["value"]): MsgClearBalance => {
      return {
        creator,
        chainId: chain_id,
        amount,
        channel
      };
    }
  },
  "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
    toAmino: ({
      creator,
      chainId,
      minInnerRedemptionRate,
      maxInnerRedemptionRate
    }: MsgUpdateInnerRedemptionRateBounds): AminoMsgUpdateInnerRedemptionRateBounds["value"] => {
      return {
        creator,
        chain_id: chainId,
        min_inner_redemption_rate: minInnerRedemptionRate,
        max_inner_redemption_rate: maxInnerRedemptionRate
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      min_inner_redemption_rate,
      max_inner_redemption_rate
    }: AminoMsgUpdateInnerRedemptionRateBounds["value"]): MsgUpdateInnerRedemptionRateBounds => {
      return {
        creator,
        chainId: chain_id,
        minInnerRedemptionRate: min_inner_redemption_rate,
        maxInnerRedemptionRate: max_inner_redemption_rate
      };
    }
  },
  "/stride.stakeibc.MsgResumeHostZone": {
    aminoType: "/stride.stakeibc.MsgResumeHostZone",
    toAmino: ({
      creator,
      chainId
    }: MsgResumeHostZone): AminoMsgResumeHostZone["value"] => {
      return {
        creator,
        chain_id: chainId
      };
    },
    fromAmino: ({
      creator,
      chain_id
    }: AminoMsgResumeHostZone["value"]): MsgResumeHostZone => {
      return {
        creator,
        chainId: chain_id
      };
    }
  },
  "/stride.stakeibc.MsgCreateTradeRoute": {
    aminoType: "/stride.stakeibc.MsgCreateTradeRoute",
    toAmino: ({
      authority,
      hostChainId,
      strideToRewardConnectionId,
      strideToTradeConnectionId,
      hostToRewardTransferChannelId,
      rewardToTradeTransferChannelId,
      tradeToHostTransferChannelId,
      rewardDenomOnHost,
      rewardDenomOnReward,
      rewardDenomOnTrade,
      hostDenomOnTrade,
      hostDenomOnHost,
      poolId,
      maxAllowedSwapLossRate,
      minSwapAmount,
      maxSwapAmount,
      minTransferAmount
    }: MsgCreateTradeRoute): AminoMsgCreateTradeRoute["value"] => {
      return {
        authority,
        host_chain_id: hostChainId,
        stride_to_reward_connection_id: strideToRewardConnectionId,
        stride_to_trade_connection_id: strideToTradeConnectionId,
        host_to_reward_transfer_channel_id: hostToRewardTransferChannelId,
        reward_to_trade_transfer_channel_id: rewardToTradeTransferChannelId,
        trade_to_host_transfer_channel_id: tradeToHostTransferChannelId,
        reward_denom_on_host: rewardDenomOnHost,
        reward_denom_on_reward: rewardDenomOnReward,
        reward_denom_on_trade: rewardDenomOnTrade,
        host_denom_on_trade: hostDenomOnTrade,
        host_denom_on_host: hostDenomOnHost,
        pool_id: poolId.toString(),
        max_allowed_swap_loss_rate: maxAllowedSwapLossRate,
        min_swap_amount: minSwapAmount,
        max_swap_amount: maxSwapAmount,
        min_transfer_amount: minTransferAmount
      };
    },
    fromAmino: ({
      authority,
      host_chain_id,
      stride_to_reward_connection_id,
      stride_to_trade_connection_id,
      host_to_reward_transfer_channel_id,
      reward_to_trade_transfer_channel_id,
      trade_to_host_transfer_channel_id,
      reward_denom_on_host,
      reward_denom_on_reward,
      reward_denom_on_trade,
      host_denom_on_trade,
      host_denom_on_host,
      pool_id,
      max_allowed_swap_loss_rate,
      min_swap_amount,
      max_swap_amount,
      min_transfer_amount
    }: AminoMsgCreateTradeRoute["value"]): MsgCreateTradeRoute => {
      return {
        authority,
        hostChainId: host_chain_id,
        strideToRewardConnectionId: stride_to_reward_connection_id,
        strideToTradeConnectionId: stride_to_trade_connection_id,
        hostToRewardTransferChannelId: host_to_reward_transfer_channel_id,
        rewardToTradeTransferChannelId: reward_to_trade_transfer_channel_id,
        tradeToHostTransferChannelId: trade_to_host_transfer_channel_id,
        rewardDenomOnHost: reward_denom_on_host,
        rewardDenomOnReward: reward_denom_on_reward,
        rewardDenomOnTrade: reward_denom_on_trade,
        hostDenomOnTrade: host_denom_on_trade,
        hostDenomOnHost: host_denom_on_host,
        poolId: Long.fromString(pool_id),
        maxAllowedSwapLossRate: max_allowed_swap_loss_rate,
        minSwapAmount: min_swap_amount,
        maxSwapAmount: max_swap_amount,
        minTransferAmount: min_transfer_amount
      };
    }
  },
  "/stride.stakeibc.MsgDeleteTradeRoute": {
    aminoType: "/stride.stakeibc.MsgDeleteTradeRoute",
    toAmino: ({
      authority,
      rewardDenom,
      hostDenom
    }: MsgDeleteTradeRoute): AminoMsgDeleteTradeRoute["value"] => {
      return {
        authority,
        reward_denom: rewardDenom,
        host_denom: hostDenom
      };
    },
    fromAmino: ({
      authority,
      reward_denom,
      host_denom
    }: AminoMsgDeleteTradeRoute["value"]): MsgDeleteTradeRoute => {
      return {
        authority,
        rewardDenom: reward_denom,
        hostDenom: host_denom
      };
    }
  },
  "/stride.stakeibc.MsgUpdateTradeRoute": {
    aminoType: "/stride.stakeibc.MsgUpdateTradeRoute",
    toAmino: ({
      authority,
      rewardDenom,
      hostDenom,
      poolId,
      maxAllowedSwapLossRate,
      minSwapAmount,
      maxSwapAmount,
      minTransferAmount
    }: MsgUpdateTradeRoute): AminoMsgUpdateTradeRoute["value"] => {
      return {
        authority,
        reward_denom: rewardDenom,
        host_denom: hostDenom,
        pool_id: poolId.toString(),
        max_allowed_swap_loss_rate: maxAllowedSwapLossRate,
        min_swap_amount: minSwapAmount,
        max_swap_amount: maxSwapAmount,
        min_transfer_amount: minTransferAmount
      };
    },
    fromAmino: ({
      authority,
      reward_denom,
      host_denom,
      pool_id,
      max_allowed_swap_loss_rate,
      min_swap_amount,
      max_swap_amount,
      min_transfer_amount
    }: AminoMsgUpdateTradeRoute["value"]): MsgUpdateTradeRoute => {
      return {
        authority,
        rewardDenom: reward_denom,
        hostDenom: host_denom,
        poolId: Long.fromString(pool_id),
        maxAllowedSwapLossRate: max_allowed_swap_loss_rate,
        minSwapAmount: min_swap_amount,
        maxSwapAmount: max_swap_amount,
        minTransferAmount: min_transfer_amount
      };
    }
  },
  "/stride.stakeibc.MsgSetCommunityPoolRebate": {
    aminoType: "/stride.stakeibc.MsgSetCommunityPoolRebate",
    toAmino: ({
      creator,
      chainId,
      rebateRate,
      liquidStakedStTokenAmount
    }: MsgSetCommunityPoolRebate): AminoMsgSetCommunityPoolRebate["value"] => {
      return {
        creator,
        chain_id: chainId,
        rebate_rate: rebateRate,
        liquid_staked_st_token_amount: liquidStakedStTokenAmount
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      rebate_rate,
      liquid_staked_st_token_amount
    }: AminoMsgSetCommunityPoolRebate["value"]): MsgSetCommunityPoolRebate => {
      return {
        creator,
        chainId: chain_id,
        rebateRate: rebate_rate,
        liquidStakedStTokenAmount: liquid_staked_st_token_amount
      };
    }
  },
  "/stride.stakeibc.MsgToggleTradeController": {
    aminoType: "/stride.stakeibc.MsgToggleTradeController",
    toAmino: ({
      creator,
      chainId,
      permissionChange,
      address
    }: MsgToggleTradeController): AminoMsgToggleTradeController["value"] => {
      return {
        creator,
        chain_id: chainId,
        permission_change: permissionChange,
        address
      };
    },
    fromAmino: ({
      creator,
      chain_id,
      permission_change,
      address
    }: AminoMsgToggleTradeController["value"]): MsgToggleTradeController => {
      return {
        creator,
        chainId: chain_id,
        permissionChange: authzPermissionChangeFromJSON(permission_change),
        address
      };
    }
  },
  "/stride.stakeibc.MsgUpdateHostZoneParams": {
    aminoType: "/stride.stakeibc.MsgUpdateHostZoneParams",
    toAmino: ({
      authority,
      chainId,
      maxMessagesPerIcaTx
    }: MsgUpdateHostZoneParams): AminoMsgUpdateHostZoneParams["value"] => {
      return {
        authority,
        chain_id: chainId,
        max_messages_per_ica_tx: maxMessagesPerIcaTx.toString()
      };
    },
    fromAmino: ({
      authority,
      chain_id,
      max_messages_per_ica_tx
    }: AminoMsgUpdateHostZoneParams["value"]): MsgUpdateHostZoneParams => {
      return {
        authority,
        chainId: chain_id,
        maxMessagesPerIcaTx: Long.fromString(max_messages_per_ica_tx)
      };
    }
  }
};