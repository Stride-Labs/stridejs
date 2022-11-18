import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidator, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
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
        hostZone: string;
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
    };
}
export interface AminoMsgClaimUndelegatedTokens extends AminoMsg {
    type: "stakeibc/ClaimUndelegatedTokens";
    value: {
        creator: string;
        hostZoneId: string;
        epoch: string;
        sender: string;
    };
}
export interface AminoMsgRebalanceValidators extends AminoMsg {
    type: "stakeibc/RebalanceValidators";
    value: {
        creator: string;
        hostZone: string;
        numRebalance: string;
    };
}
export interface AminoMsgAddValidator extends AminoMsg {
    type: "stakeibc/AddValidator";
    value: {
        creator: string;
        hostZone: string;
        name: string;
        address: string;
        commission: string;
        weight: string;
    };
}
export interface AminoMsgChangeValidatorWeight extends AminoMsg {
    type: "stakeibc/ChangeValidatorWeight";
    value: {
        creator: string;
        hostZone: string;
        valAddr: string;
        weight: string;
    };
}
export interface AminoMsgDeleteValidator extends AminoMsg {
    type: "stakeibc/DeleteValidator";
    value: {
        creator: string;
        hostZone: string;
        valAddr: string;
    };
}
export interface AminoMsgRestoreInterchainAccount extends AminoMsg {
    type: "stakeibc/RestoreInterchainAccount";
    value: {
        creator: string;
        chainId: string;
        accountType: number;
    };
}
export interface AminoMsgUpdateValidatorSharesExchRate extends AminoMsg {
    type: "stakeibc/UpdateValidatorSharesExchRate";
    value: {
        creator: string;
        chainId: string;
        valoper: string;
    };
}
export interface AminoMsgClearBalance extends AminoMsg {
    type: "/Stridelabs.stride.stakeibc.MsgClearBalance";
    value: {
        creator: string;
        chain_id: string;
        amount: string;
        channel: string;
    };
}
export declare const AminoConverter: {
    "/Stridelabs.stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: MsgLiquidStake) => AminoMsgLiquidStake["value"];
        fromAmino: ({ creator, amount, host_denom }: AminoMsgLiquidStake["value"]) => MsgLiquidStake;
    };
    "/Stridelabs.stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: MsgRedeemStake) => AminoMsgRedeemStake["value"];
        fromAmino: ({ creator, amount, hostZone, receiver }: AminoMsgRedeemStake["value"]) => MsgRedeemStake;
    };
    "/Stridelabs.stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency }: MsgRegisterHostZone) => AminoMsgRegisterHostZone["value"];
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency }: AminoMsgRegisterHostZone["value"]) => MsgRegisterHostZone;
    };
    "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, sender }: MsgClaimUndelegatedTokens) => AminoMsgClaimUndelegatedTokens["value"];
        fromAmino: ({ creator, hostZoneId, epoch, sender }: AminoMsgClaimUndelegatedTokens["value"]) => MsgClaimUndelegatedTokens;
    };
    "/Stridelabs.stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: MsgRebalanceValidators) => AminoMsgRebalanceValidators["value"];
        fromAmino: ({ creator, hostZone, numRebalance }: AminoMsgRebalanceValidators["value"]) => MsgRebalanceValidators;
    };
    "/Stridelabs.stride.stakeibc.MsgAddValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, name, address, commission, weight }: MsgAddValidator) => AminoMsgAddValidator["value"];
        fromAmino: ({ creator, hostZone, name, address, commission, weight }: AminoMsgAddValidator["value"]) => MsgAddValidator;
    };
    "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr, weight }: MsgChangeValidatorWeight) => AminoMsgChangeValidatorWeight["value"];
        fromAmino: ({ creator, hostZone, valAddr, weight }: AminoMsgChangeValidatorWeight["value"]) => MsgChangeValidatorWeight;
    };
    "/Stridelabs.stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: MsgDeleteValidator) => AminoMsgDeleteValidator["value"];
        fromAmino: ({ creator, hostZone, valAddr }: AminoMsgDeleteValidator["value"]) => MsgDeleteValidator;
    };
    "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, accountType }: MsgRestoreInterchainAccount) => AminoMsgRestoreInterchainAccount["value"];
        fromAmino: ({ creator, chainId, accountType }: AminoMsgRestoreInterchainAccount["value"]) => MsgRestoreInterchainAccount;
    };
    "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: MsgUpdateValidatorSharesExchRate) => AminoMsgUpdateValidatorSharesExchRate["value"];
        fromAmino: ({ creator, chainId, valoper }: AminoMsgUpdateValidatorSharesExchRate["value"]) => MsgUpdateValidatorSharesExchRate;
    };
    "/Stridelabs.stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: MsgClearBalance) => AminoMsgClearBalance["value"];
        fromAmino: ({ creator, chain_id, amount, channel }: AminoMsgClearBalance["value"]) => MsgClearBalance;
    };
};
