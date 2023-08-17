import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgLSMLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
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
    };
}
export interface AminoMsgClaimUndelegatedTokens extends AminoMsg {
    type: "stakeibc/ClaimUndelegatedTokens";
    value: {
        creator: string;
        host_zone_id: string;
        epoch: string;
        sender: string;
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
            internal_shares_to_tokens_rate: string;
            delegation_changes_in_progress: string;
            slash_query_in_progress: boolean;
        }[];
    };
}
export interface AminoMsgChangeValidatorWeight extends AminoMsg {
    type: "stakeibc/ChangeValidatorWeight";
    value: {
        creator: string;
        host_zone: string;
        val_addr: string;
        weight: string;
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
        account_type: number;
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
export interface AminoMsgClearBalance extends AminoMsg {
    type: "still-no-defined";
    value: {
        creator: string;
        chain_id: string;
        amount: string;
        channel: string;
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
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingPeriod, minRedemptionRate, maxRedemptionRate, lsmLiquidStakeEnabled }: MsgRegisterHostZone) => AminoMsgRegisterHostZone["value"];
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_period, min_redemption_rate, max_redemption_rate, lsm_liquid_stake_enabled }: AminoMsgRegisterHostZone["value"]) => MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, sender }: MsgClaimUndelegatedTokens) => AminoMsgClaimUndelegatedTokens["value"];
        fromAmino: ({ creator, host_zone_id, epoch, sender }: AminoMsgClaimUndelegatedTokens["value"]) => MsgClaimUndelegatedTokens;
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
    "/stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr, weight }: MsgChangeValidatorWeight) => AminoMsgChangeValidatorWeight["value"];
        fromAmino: ({ creator, host_zone, val_addr, weight }: AminoMsgChangeValidatorWeight["value"]) => MsgChangeValidatorWeight;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: MsgDeleteValidator) => AminoMsgDeleteValidator["value"];
        fromAmino: ({ creator, host_zone, val_addr }: AminoMsgDeleteValidator["value"]) => MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, accountType }: MsgRestoreInterchainAccount) => AminoMsgRestoreInterchainAccount["value"];
        fromAmino: ({ creator, chain_id, account_type }: AminoMsgRestoreInterchainAccount["value"]) => MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: MsgUpdateValidatorSharesExchRate) => AminoMsgUpdateValidatorSharesExchRate["value"];
        fromAmino: ({ creator, chain_id, valoper }: AminoMsgUpdateValidatorSharesExchRate["value"]) => MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: MsgClearBalance) => AminoMsgClearBalance["value"];
        fromAmino: ({ creator, chain_id, amount, channel }: AminoMsgClearBalance["value"]) => MsgClearBalance;
    };
};
