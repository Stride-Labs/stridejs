import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
    type: "stakeibc/LiquidStake";
    value: {
        creator: string;
        amount: string;
        host_denom: string;
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
        unbonding_frequency: string;
        min_redemption_rate: string;
        max_redemption_rate: string;
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
            delegation_amt: string;
            weight: string;
            internal_exchange_rate: {
                internal_tokens_to_shares_rate: string;
                epoch_number: string;
            };
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
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: MsgRedeemStake) => AminoMsgRedeemStake["value"];
        fromAmino: ({ creator, amount, host_zone, receiver }: AminoMsgRedeemStake["value"]) => MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency, minRedemptionRate, maxRedemptionRate }: MsgRegisterHostZone) => AminoMsgRegisterHostZone["value"];
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency, min_redemption_rate, max_redemption_rate }: AminoMsgRegisterHostZone["value"]) => MsgRegisterHostZone;
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
