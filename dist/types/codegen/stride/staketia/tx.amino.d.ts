import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export declare const AminoConverter: {
    "/stride.staketia.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: MsgLiquidStake) => import("./tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./tx").MsgLiquidStakeAmino) => MsgLiquidStake;
    };
    "/stride.staketia.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: MsgRedeemStake) => import("./tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./tx").MsgRedeemStakeAmino) => MsgRedeemStake;
    };
    "/stride.staketia.MsgConfirmDelegation": {
        aminoType: string;
        toAmino: (message: MsgConfirmDelegation) => import("./tx").MsgConfirmDelegationAmino;
        fromAmino: (object: import("./tx").MsgConfirmDelegationAmino) => MsgConfirmDelegation;
    };
    "/stride.staketia.MsgConfirmUndelegation": {
        aminoType: string;
        toAmino: (message: MsgConfirmUndelegation) => import("./tx").MsgConfirmUndelegationAmino;
        fromAmino: (object: import("./tx").MsgConfirmUndelegationAmino) => MsgConfirmUndelegation;
    };
    "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
        aminoType: string;
        toAmino: (message: MsgConfirmUnbondedTokenSweep) => import("./tx").MsgConfirmUnbondedTokenSweepAmino;
        fromAmino: (object: import("./tx").MsgConfirmUnbondedTokenSweepAmino) => MsgConfirmUnbondedTokenSweep;
    };
    "/stride.staketia.MsgAdjustDelegatedBalance": {
        aminoType: string;
        toAmino: (message: MsgAdjustDelegatedBalance) => import("./tx").MsgAdjustDelegatedBalanceAmino;
        fromAmino: (object: import("./tx").MsgAdjustDelegatedBalanceAmino) => MsgAdjustDelegatedBalance;
    };
    "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
        aminoType: string;
        toAmino: (message: MsgUpdateInnerRedemptionRateBounds) => import("./tx").MsgUpdateInnerRedemptionRateBoundsAmino;
        fromAmino: (object: import("./tx").MsgUpdateInnerRedemptionRateBoundsAmino) => MsgUpdateInnerRedemptionRateBounds;
    };
    "/stride.staketia.MsgResumeHostZone": {
        aminoType: string;
        toAmino: (message: MsgResumeHostZone) => import("./tx").MsgResumeHostZoneAmino;
        fromAmino: (object: import("./tx").MsgResumeHostZoneAmino) => MsgResumeHostZone;
    };
    "/stride.staketia.MsgRefreshRedemptionRate": {
        aminoType: string;
        toAmino: (message: MsgRefreshRedemptionRate) => import("./tx").MsgRefreshRedemptionRateAmino;
        fromAmino: (object: import("./tx").MsgRefreshRedemptionRateAmino) => MsgRefreshRedemptionRate;
    };
    "/stride.staketia.MsgOverwriteDelegationRecord": {
        aminoType: string;
        toAmino: (message: MsgOverwriteDelegationRecord) => import("./tx").MsgOverwriteDelegationRecordAmino;
        fromAmino: (object: import("./tx").MsgOverwriteDelegationRecordAmino) => MsgOverwriteDelegationRecord;
    };
    "/stride.staketia.MsgOverwriteUnbondingRecord": {
        aminoType: string;
        toAmino: (message: MsgOverwriteUnbondingRecord) => import("./tx").MsgOverwriteUnbondingRecordAmino;
        fromAmino: (object: import("./tx").MsgOverwriteUnbondingRecordAmino) => MsgOverwriteUnbondingRecord;
    };
    "/stride.staketia.MsgOverwriteRedemptionRecord": {
        aminoType: string;
        toAmino: (message: MsgOverwriteRedemptionRecord) => import("./tx").MsgOverwriteRedemptionRecordAmino;
        fromAmino: (object: import("./tx").MsgOverwriteRedemptionRecordAmino) => MsgOverwriteRedemptionRecord;
    };
    "/stride.staketia.MsgSetOperatorAddress": {
        aminoType: string;
        toAmino: (message: MsgSetOperatorAddress) => import("./tx").MsgSetOperatorAddressAmino;
        fromAmino: (object: import("./tx").MsgSetOperatorAddressAmino) => MsgSetOperatorAddress;
    };
};
