import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
const registry = [["/stride.stakedym.MsgLiquidStake", MsgLiquidStake], ["/stride.stakedym.MsgRedeemStake", MsgRedeemStake], ["/stride.stakedym.MsgConfirmDelegation", MsgConfirmDelegation], ["/stride.stakedym.MsgConfirmUndelegation", MsgConfirmUndelegation], ["/stride.stakedym.MsgConfirmUnbondedTokenSweep", MsgConfirmUnbondedTokenSweep], ["/stride.stakedym.MsgAdjustDelegatedBalance", MsgAdjustDelegatedBalance], ["/stride.stakedym.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.stakedym.MsgResumeHostZone", MsgResumeHostZone], ["/stride.stakedym.MsgRefreshRedemptionRate", MsgRefreshRedemptionRate], ["/stride.stakedym.MsgOverwriteDelegationRecord", MsgOverwriteDelegationRecord], ["/stride.stakedym.MsgOverwriteUnbondingRecord", MsgOverwriteUnbondingRecord], ["/stride.stakedym.MsgOverwriteRedemptionRecord", MsgOverwriteRedemptionRecord], ["/stride.stakedym.MsgSetOperatorAddress", MsgSetOperatorAddress]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value: MsgConfirmDelegation.encode(value).finish()
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.encode(value).finish()
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.encode(value).finish()
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.encode(value).finish()
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.encode(value).finish()
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.encode(value).finish()
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.encode(value).finish()
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value
      };
    }
  },
  fromPartial: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmDelegation",
        value: MsgConfirmDelegation.fromPartial(value)
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.fromPartial(value)
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.fromPartial(value)
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.stakedym.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.fromPartial(value)
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.fromPartial(value)
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.fromPartial(value)
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.fromPartial(value)
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
