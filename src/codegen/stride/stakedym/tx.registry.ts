import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.stakedym.MsgLiquidStake", MsgLiquidStake], ["/stride.stakedym.MsgRedeemStake", MsgRedeemStake], ["/stride.stakedym.MsgConfirmDelegation", MsgConfirmDelegation], ["/stride.stakedym.MsgConfirmUndelegation", MsgConfirmUndelegation], ["/stride.stakedym.MsgConfirmUnbondedTokenSweep", MsgConfirmUnbondedTokenSweep], ["/stride.stakedym.MsgAdjustDelegatedBalance", MsgAdjustDelegatedBalance], ["/stride.stakedym.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.stakedym.MsgResumeHostZone", MsgResumeHostZone], ["/stride.stakedym.MsgRefreshRedemptionRate", MsgRefreshRedemptionRate], ["/stride.stakedym.MsgOverwriteDelegationRecord", MsgOverwriteDelegationRecord], ["/stride.stakedym.MsgOverwriteUnbondingRecord", MsgOverwriteUnbondingRecord], ["/stride.stakedym.MsgOverwriteRedemptionRecord", MsgOverwriteRedemptionRecord], ["/stride.stakedym.MsgSetOperatorAddress", MsgSetOperatorAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value: MsgConfirmDelegation.encode(value).finish()
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.encode(value).finish()
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.encode(value).finish()
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.encode(value).finish()
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.encode(value).finish()
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.encode(value).finish()
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.encode(value).finish()
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value
      };
    }
  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value: MsgConfirmDelegation.fromPartial(value)
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.fromPartial(value)
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.fromPartial(value)
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.fromPartial(value)
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.fromPartial(value)
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.fromPartial(value)
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.fromPartial(value)
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.fromPartial(value)
      };
    }
  }
};