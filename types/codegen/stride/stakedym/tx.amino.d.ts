import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
    type: "stakedym/MsgLiquidStake";
    value: {
        staker: string;
        native_amount: string;
    };
}
export interface AminoMsgRedeemStake extends AminoMsg {
    type: "stakedym/MsgRedeemStake";
    value: {
        redeemer: string;
        st_token_amount: string;
    };
}
export interface AminoMsgConfirmDelegation extends AminoMsg {
    type: "/stride.stakedym.MsgConfirmDelegation";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgConfirmUndelegation extends AminoMsg {
    type: "/stride.stakedym.MsgConfirmUndelegation";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgConfirmUnbondedTokenSweep extends AminoMsg {
    type: "/stride.stakedym.MsgConfirmUnbondedTokenSweep";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgAdjustDelegatedBalance extends AminoMsg {
    type: "/stride.stakedym.MsgAdjustDelegatedBalance";
    value: {
        operator: string;
        delegation_offset: string;
        validator_address: string;
    };
}
export interface AminoMsgUpdateInnerRedemptionRateBounds extends AminoMsg {
    type: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds";
    value: {
        creator: string;
        min_inner_redemption_rate: string;
        max_inner_redemption_rate: string;
    };
}
export interface AminoMsgResumeHostZone extends AminoMsg {
    type: "/stride.stakedym.MsgResumeHostZone";
    value: {
        creator: string;
    };
}
export interface AminoMsgRefreshRedemptionRate extends AminoMsg {
    type: "/stride.stakedym.MsgRefreshRedemptionRate";
    value: {
        creator: string;
    };
}
export interface AminoMsgOverwriteDelegationRecord extends AminoMsg {
    type: "/stride.stakedym.MsgOverwriteDelegationRecord";
    value: {
        creator: string;
        delegation_record: {
            id: string;
            native_amount: string;
            status: number;
            tx_hash: string;
        };
    };
}
export interface AminoMsgOverwriteUnbondingRecord extends AminoMsg {
    type: "/stride.stakedym.MsgOverwriteUnbondingRecord";
    value: {
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
}
export interface AminoMsgOverwriteRedemptionRecord extends AminoMsg {
    type: "/stride.stakedym.MsgOverwriteRedemptionRecord";
    value: {
        creator: string;
        redemption_record: {
            unbonding_record_id: string;
            redeemer: string;
            st_token_amount: string;
            native_amount: string;
        };
    };
}
export interface AminoMsgSetOperatorAddress extends AminoMsg {
    type: "/stride.stakedym.MsgSetOperatorAddress";
    value: {
        signer: string;
        operator: string;
    };
}
export declare const AminoConverter: {
    "/stride.stakedym.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ staker, nativeAmount }: MsgLiquidStake) => AminoMsgLiquidStake["value"];
        fromAmino: ({ staker, native_amount }: AminoMsgLiquidStake["value"]) => MsgLiquidStake;
    };
    "/stride.stakedym.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ redeemer, stTokenAmount }: MsgRedeemStake) => AminoMsgRedeemStake["value"];
        fromAmino: ({ redeemer, st_token_amount }: AminoMsgRedeemStake["value"]) => MsgRedeemStake;
    };
    "/stride.stakedym.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmDelegation) => AminoMsgConfirmDelegation["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmDelegation["value"]) => MsgConfirmDelegation;
    };
    "/stride.stakedym.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmUndelegation) => AminoMsgConfirmUndelegation["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmUndelegation["value"]) => MsgConfirmUndelegation;
    };
    "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmUnbondedTokenSweep) => AminoMsgConfirmUnbondedTokenSweep["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmUnbondedTokenSweep["value"]) => MsgConfirmUnbondedTokenSweep;
    };
    "/stride.stakedym.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: ({ operator, delegationOffset, validatorAddress }: MsgAdjustDelegatedBalance) => AminoMsgAdjustDelegatedBalance["value"];
        fromAmino: ({ operator, delegation_offset, validator_address }: AminoMsgAdjustDelegatedBalance["value"]) => MsgAdjustDelegatedBalance;
    };
    "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, minInnerRedemptionRate, maxInnerRedemptionRate }: MsgUpdateInnerRedemptionRateBounds) => AminoMsgUpdateInnerRedemptionRateBounds["value"];
        fromAmino: ({ creator, min_inner_redemption_rate, max_inner_redemption_rate }: AminoMsgUpdateInnerRedemptionRateBounds["value"]) => MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.stakedym.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator }: MsgResumeHostZone) => AminoMsgResumeHostZone["value"];
        fromAmino: ({ creator }: AminoMsgResumeHostZone["value"]) => MsgResumeHostZone;
    };
    "/stride.stakedym.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: ({ creator }: MsgRefreshRedemptionRate) => AminoMsgRefreshRedemptionRate["value"];
        fromAmino: ({ creator }: AminoMsgRefreshRedemptionRate["value"]) => MsgRefreshRedemptionRate;
    };
    "/stride.stakedym.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: ({ creator, delegationRecord }: MsgOverwriteDelegationRecord) => AminoMsgOverwriteDelegationRecord["value"];
        fromAmino: ({ creator, delegation_record }: AminoMsgOverwriteDelegationRecord["value"]) => MsgOverwriteDelegationRecord;
    };
    "/stride.stakedym.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: ({ creator, unbondingRecord }: MsgOverwriteUnbondingRecord) => AminoMsgOverwriteUnbondingRecord["value"];
        fromAmino: ({ creator, unbonding_record }: AminoMsgOverwriteUnbondingRecord["value"]) => MsgOverwriteUnbondingRecord;
    };
    "/stride.stakedym.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: ({ creator, redemptionRecord }: MsgOverwriteRedemptionRecord) => AminoMsgOverwriteRedemptionRecord["value"];
        fromAmino: ({ creator, redemption_record }: AminoMsgOverwriteRedemptionRecord["value"]) => MsgOverwriteRedemptionRecord;
    };
    "/stride.stakedym.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: ({ signer, operator }: MsgSetOperatorAddress) => AminoMsgSetOperatorAddress["value"];
        fromAmino: ({ signer, operator }: AminoMsgSetOperatorAddress["value"]) => MsgSetOperatorAddress;
    };
};
