import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export interface AminoMsgLiquidStake extends AminoMsg {
    type: "staketia/MsgLiquidStake";
    value: {
        staker: string;
        native_amount: string;
    };
}
export interface AminoMsgRedeemStake extends AminoMsg {
    type: "staketia/MsgRedeemStake";
    value: {
        redeemer: string;
        st_token_amount: string;
    };
}
export interface AminoMsgConfirmDelegation extends AminoMsg {
    type: "/stride.staketia.MsgConfirmDelegation";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgConfirmUndelegation extends AminoMsg {
    type: "/stride.staketia.MsgConfirmUndelegation";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgConfirmUnbondedTokenSweep extends AminoMsg {
    type: "/stride.staketia.MsgConfirmUnbondedTokenSweep";
    value: {
        operator: string;
        record_id: string;
        tx_hash: string;
    };
}
export interface AminoMsgAdjustDelegatedBalance extends AminoMsg {
    type: "/stride.staketia.MsgAdjustDelegatedBalance";
    value: {
        operator: string;
        delegation_offset: string;
        validator_address: string;
    };
}
export interface AminoMsgUpdateInnerRedemptionRateBounds extends AminoMsg {
    type: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds";
    value: {
        creator: string;
        min_inner_redemption_rate: string;
        max_inner_redemption_rate: string;
    };
}
export interface AminoMsgResumeHostZone extends AminoMsg {
    type: "/stride.staketia.MsgResumeHostZone";
    value: {
        creator: string;
    };
}
export interface AminoMsgRefreshRedemptionRate extends AminoMsg {
    type: "/stride.staketia.MsgRefreshRedemptionRate";
    value: {
        creator: string;
    };
}
export interface AminoMsgOverwriteDelegationRecord extends AminoMsg {
    type: "/stride.staketia.MsgOverwriteDelegationRecord";
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
    type: "/stride.staketia.MsgOverwriteUnbondingRecord";
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
    type: "/stride.staketia.MsgOverwriteRedemptionRecord";
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
    type: "/stride.staketia.MsgSetOperatorAddress";
    value: {
        signer: string;
        operator: string;
    };
}
export declare const AminoConverter: {
    "/stride.staketia.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ staker, nativeAmount }: MsgLiquidStake) => AminoMsgLiquidStake["value"];
        fromAmino: ({ staker, native_amount }: AminoMsgLiquidStake["value"]) => MsgLiquidStake;
    };
    "/stride.staketia.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ redeemer, stTokenAmount }: MsgRedeemStake) => AminoMsgRedeemStake["value"];
        fromAmino: ({ redeemer, st_token_amount }: AminoMsgRedeemStake["value"]) => MsgRedeemStake;
    };
    "/stride.staketia.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmDelegation) => AminoMsgConfirmDelegation["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmDelegation["value"]) => MsgConfirmDelegation;
    };
    "/stride.staketia.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmUndelegation) => AminoMsgConfirmUndelegation["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmUndelegation["value"]) => MsgConfirmUndelegation;
    };
    "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: ({ operator, recordId, txHash }: MsgConfirmUnbondedTokenSweep) => AminoMsgConfirmUnbondedTokenSweep["value"];
        fromAmino: ({ operator, record_id, tx_hash }: AminoMsgConfirmUnbondedTokenSweep["value"]) => MsgConfirmUnbondedTokenSweep;
    };
    "/stride.staketia.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: ({ operator, delegationOffset, validatorAddress }: MsgAdjustDelegatedBalance) => AminoMsgAdjustDelegatedBalance["value"];
        fromAmino: ({ operator, delegation_offset, validator_address }: AminoMsgAdjustDelegatedBalance["value"]) => MsgAdjustDelegatedBalance;
    };
    "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: ({ creator, minInnerRedemptionRate, maxInnerRedemptionRate }: MsgUpdateInnerRedemptionRateBounds) => AminoMsgUpdateInnerRedemptionRateBounds["value"];
        fromAmino: ({ creator, min_inner_redemption_rate, max_inner_redemption_rate }: AminoMsgUpdateInnerRedemptionRateBounds["value"]) => MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.staketia.MsgResumeHostZone": {
        aminoType: string;
        toAmino: ({ creator }: MsgResumeHostZone) => AminoMsgResumeHostZone["value"];
        fromAmino: ({ creator }: AminoMsgResumeHostZone["value"]) => MsgResumeHostZone;
    };
    "/stride.staketia.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: ({ creator }: MsgRefreshRedemptionRate) => AminoMsgRefreshRedemptionRate["value"];
        fromAmino: ({ creator }: AminoMsgRefreshRedemptionRate["value"]) => MsgRefreshRedemptionRate;
    };
    "/stride.staketia.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: ({ creator, delegationRecord }: MsgOverwriteDelegationRecord) => AminoMsgOverwriteDelegationRecord["value"];
        fromAmino: ({ creator, delegation_record }: AminoMsgOverwriteDelegationRecord["value"]) => MsgOverwriteDelegationRecord;
    };
    "/stride.staketia.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: ({ creator, unbondingRecord }: MsgOverwriteUnbondingRecord) => AminoMsgOverwriteUnbondingRecord["value"];
        fromAmino: ({ creator, unbonding_record }: AminoMsgOverwriteUnbondingRecord["value"]) => MsgOverwriteUnbondingRecord;
    };
    "/stride.staketia.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: ({ creator, redemptionRecord }: MsgOverwriteRedemptionRecord) => AminoMsgOverwriteRedemptionRecord["value"];
        fromAmino: ({ creator, redemption_record }: AminoMsgOverwriteRedemptionRecord["value"]) => MsgOverwriteRedemptionRecord;
    };
    "/stride.staketia.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: ({ signer, operator }: MsgSetOperatorAddress) => AminoMsgSetOperatorAddress["value"];
        fromAmino: ({ signer, operator }: AminoMsgSetOperatorAddress["value"]) => MsgSetOperatorAddress;
    };
};
