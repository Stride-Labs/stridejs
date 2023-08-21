import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordReward, MsgFundCommunityPool } from "./tx";
export interface AminoMsgSetWithdrawAddress extends AminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: {
        delegator_address: string;
        withdraw_address: string;
    };
}
export interface AminoMsgWithdrawDelegatorReward extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: {
        delegator_address: string;
        validator_address: string;
    };
}
export interface AminoMsgWithdrawValidatorCommission extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: {
        validator_address: string;
    };
}
export interface AminoMsgWithdrawTokenizeShareRecordReward extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward";
    value: {
        owner_address: string;
        record_id: string;
    };
}
export interface AminoMsgWithdrawAllTokenizeShareRecordReward extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward";
    value: {
        owner_address: string;
    };
}
export interface AminoMsgFundCommunityPool extends AminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: {
        amount: {
            denom: string;
            amount: string;
        }[];
        depositor: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: MsgSetWithdrawAddress) => AminoMsgSetWithdrawAddress["value"];
        fromAmino: ({ delegator_address, withdraw_address }: AminoMsgSetWithdrawAddress["value"]) => MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: MsgWithdrawDelegatorReward) => AminoMsgWithdrawDelegatorReward["value"];
        fromAmino: ({ delegator_address, validator_address }: AminoMsgWithdrawDelegatorReward["value"]) => MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: MsgWithdrawValidatorCommission) => AminoMsgWithdrawValidatorCommission["value"];
        fromAmino: ({ validator_address }: AminoMsgWithdrawValidatorCommission["value"]) => MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: ({ ownerAddress, recordId }: MsgWithdrawTokenizeShareRecordReward) => AminoMsgWithdrawTokenizeShareRecordReward["value"];
        fromAmino: ({ owner_address, record_id }: AminoMsgWithdrawTokenizeShareRecordReward["value"]) => MsgWithdrawTokenizeShareRecordReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
        aminoType: string;
        toAmino: ({ ownerAddress }: MsgWithdrawAllTokenizeShareRecordReward) => AminoMsgWithdrawAllTokenizeShareRecordReward["value"];
        fromAmino: ({ owner_address }: AminoMsgWithdrawAllTokenizeShareRecordReward["value"]) => MsgWithdrawAllTokenizeShareRecordReward;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: MsgFundCommunityPool) => AminoMsgFundCommunityPool["value"];
        fromAmino: ({ amount, depositor }: AminoMsgFundCommunityPool["value"]) => MsgFundCommunityPool;
    };
};
