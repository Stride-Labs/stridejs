import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export const AminoConverter = {
  "/stride.stakedym.MsgLiquidStake": {
    aminoType: "stakedym/MsgLiquidStake",
    toAmino: MsgLiquidStake.toAmino,
    fromAmino: MsgLiquidStake.fromAmino
  },
  "/stride.stakedym.MsgRedeemStake": {
    aminoType: "stakedym/MsgRedeemStake",
    toAmino: MsgRedeemStake.toAmino,
    fromAmino: MsgRedeemStake.fromAmino
  },
  "/stride.stakedym.MsgConfirmDelegation": {
    aminoType: "stakedym/MsgConfirmDelegation",
    toAmino: MsgConfirmDelegation.toAmino,
    fromAmino: MsgConfirmDelegation.fromAmino
  },
  "/stride.stakedym.MsgConfirmUndelegation": {
    aminoType: "stakedym/MsgConfirmUndelegation",
    toAmino: MsgConfirmUndelegation.toAmino,
    fromAmino: MsgConfirmUndelegation.fromAmino
  },
  "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
    aminoType: "stakedym/MsgConfirmUnbondedTokenSweep",
    toAmino: MsgConfirmUnbondedTokenSweep.toAmino,
    fromAmino: MsgConfirmUnbondedTokenSweep.fromAmino
  },
  "/stride.stakedym.MsgAdjustDelegatedBalance": {
    aminoType: "stakedym/MsgAdjustDelegatedBalance",
    toAmino: MsgAdjustDelegatedBalance.toAmino,
    fromAmino: MsgAdjustDelegatedBalance.fromAmino
  },
  "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "stakedym/MsgUpdateRedemptionRateBounds",
    toAmino: MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.stakedym.MsgResumeHostZone": {
    aminoType: "stakedym/MsgResumeHostZone",
    toAmino: MsgResumeHostZone.toAmino,
    fromAmino: MsgResumeHostZone.fromAmino
  },
  "/stride.stakedym.MsgRefreshRedemptionRate": {
    aminoType: "stakedym/MsgRefreshRedemptionRate",
    toAmino: MsgRefreshRedemptionRate.toAmino,
    fromAmino: MsgRefreshRedemptionRate.fromAmino
  },
  "/stride.stakedym.MsgOverwriteDelegationRecord": {
    aminoType: "stakedym/MsgOverwriteDelegationRecord",
    toAmino: MsgOverwriteDelegationRecord.toAmino,
    fromAmino: MsgOverwriteDelegationRecord.fromAmino
  },
  "/stride.stakedym.MsgOverwriteUnbondingRecord": {
    aminoType: "stakedym/MsgOverwriteUnbondingRecord",
    toAmino: MsgOverwriteUnbondingRecord.toAmino,
    fromAmino: MsgOverwriteUnbondingRecord.fromAmino
  },
  "/stride.stakedym.MsgOverwriteRedemptionRecord": {
    aminoType: "stakedym/MsgOverwriteRedemptionRecord",
    toAmino: MsgOverwriteRedemptionRecord.toAmino,
    fromAmino: MsgOverwriteRedemptionRecord.fromAmino
  },
  "/stride.stakedym.MsgSetOperatorAddress": {
    aminoType: "stakedym/MsgSetOperatorAddress",
    toAmino: MsgSetOperatorAddress.toAmino,
    fromAmino: MsgSetOperatorAddress.fromAmino
  }
};