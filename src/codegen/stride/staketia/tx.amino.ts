import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export const AminoConverter = {
  "/stride.staketia.MsgLiquidStake": {
    aminoType: "staketia/MsgLiquidStake",
    toAmino: MsgLiquidStake.toAmino,
    fromAmino: MsgLiquidStake.fromAmino
  },
  "/stride.staketia.MsgRedeemStake": {
    aminoType: "staketia/MsgRedeemStake",
    toAmino: MsgRedeemStake.toAmino,
    fromAmino: MsgRedeemStake.fromAmino
  },
  "/stride.staketia.MsgConfirmDelegation": {
    aminoType: "staketia/MsgConfirmDelegation",
    toAmino: MsgConfirmDelegation.toAmino,
    fromAmino: MsgConfirmDelegation.fromAmino
  },
  "/stride.staketia.MsgConfirmUndelegation": {
    aminoType: "staketia/MsgConfirmUndelegation",
    toAmino: MsgConfirmUndelegation.toAmino,
    fromAmino: MsgConfirmUndelegation.fromAmino
  },
  "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
    aminoType: "staketia/MsgConfirmUnbondedTokenSweep",
    toAmino: MsgConfirmUnbondedTokenSweep.toAmino,
    fromAmino: MsgConfirmUnbondedTokenSweep.fromAmino
  },
  "/stride.staketia.MsgAdjustDelegatedBalance": {
    aminoType: "staketia/MsgAdjustDelegatedBalance",
    toAmino: MsgAdjustDelegatedBalance.toAmino,
    fromAmino: MsgAdjustDelegatedBalance.fromAmino
  },
  "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "staketia/MsgUpdateRedemptionRateBounds",
    toAmino: MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.staketia.MsgResumeHostZone": {
    aminoType: "staketia/MsgResumeHostZone",
    toAmino: MsgResumeHostZone.toAmino,
    fromAmino: MsgResumeHostZone.fromAmino
  },
  "/stride.staketia.MsgRefreshRedemptionRate": {
    aminoType: "staketia/MsgRefreshRedemptionRate",
    toAmino: MsgRefreshRedemptionRate.toAmino,
    fromAmino: MsgRefreshRedemptionRate.fromAmino
  },
  "/stride.staketia.MsgOverwriteDelegationRecord": {
    aminoType: "staketia/MsgOverwriteDelegationRecord",
    toAmino: MsgOverwriteDelegationRecord.toAmino,
    fromAmino: MsgOverwriteDelegationRecord.fromAmino
  },
  "/stride.staketia.MsgOverwriteUnbondingRecord": {
    aminoType: "staketia/MsgOverwriteUnbondingRecord",
    toAmino: MsgOverwriteUnbondingRecord.toAmino,
    fromAmino: MsgOverwriteUnbondingRecord.fromAmino
  },
  "/stride.staketia.MsgOverwriteRedemptionRecord": {
    aminoType: "staketia/MsgOverwriteRedemptionRecord",
    toAmino: MsgOverwriteRedemptionRecord.toAmino,
    fromAmino: MsgOverwriteRedemptionRecord.fromAmino
  },
  "/stride.staketia.MsgSetOperatorAddress": {
    aminoType: "staketia/MsgSetOperatorAddress",
    toAmino: MsgSetOperatorAddress.toAmino,
    fromAmino: MsgSetOperatorAddress.fromAmino
  }
};