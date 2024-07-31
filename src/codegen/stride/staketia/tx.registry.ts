import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/stride.staketia.MsgLiquidStake", MsgLiquidStake], ["/stride.staketia.MsgRedeemStake", MsgRedeemStake], ["/stride.staketia.MsgConfirmDelegation", MsgConfirmDelegation], ["/stride.staketia.MsgConfirmUndelegation", MsgConfirmUndelegation], ["/stride.staketia.MsgConfirmUnbondedTokenSweep", MsgConfirmUnbondedTokenSweep], ["/stride.staketia.MsgAdjustDelegatedBalance", MsgAdjustDelegatedBalance], ["/stride.staketia.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.staketia.MsgResumeHostZone", MsgResumeHostZone], ["/stride.staketia.MsgRefreshRedemptionRate", MsgRefreshRedemptionRate], ["/stride.staketia.MsgOverwriteDelegationRecord", MsgOverwriteDelegationRecord], ["/stride.staketia.MsgOverwriteUnbondingRecord", MsgOverwriteUnbondingRecord], ["/stride.staketia.MsgOverwriteRedemptionRecord", MsgOverwriteRedemptionRecord], ["/stride.staketia.MsgSetOperatorAddress", MsgSetOperatorAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: MsgConfirmDelegation.encode(value).finish()
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.encode(value).finish()
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.encode(value).finish()
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.encode(value).finish()
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.encode(value).finish()
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.encode(value).finish()
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.encode(value).finish()
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value
      };
    }
  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    confirmDelegation(value: MsgConfirmDelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: MsgConfirmDelegation.fromPartial(value)
      };
    },
    confirmUndelegation(value: MsgConfirmUndelegation) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.fromPartial(value)
      };
    },
    confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.fromPartial(value)
      };
    },
    adjustDelegatedBalance(value: MsgAdjustDelegatedBalance) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value: MsgResumeHostZone) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    refreshRedemptionRate(value: MsgRefreshRedemptionRate) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.fromPartial(value)
      };
    },
    overwriteDelegationRecord(value: MsgOverwriteDelegationRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.fromPartial(value)
      };
    },
    overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.fromPartial(value)
      };
    },
    overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.fromPartial(value)
      };
    },
    setOperatorAddress(value: MsgSetOperatorAddress) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.fromPartial(value)
      };
    }
  }
};