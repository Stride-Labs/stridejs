import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
const registry = [["/stride.staketia.MsgLiquidStake", MsgLiquidStake], ["/stride.staketia.MsgRedeemStake", MsgRedeemStake], ["/stride.staketia.MsgConfirmDelegation", MsgConfirmDelegation], ["/stride.staketia.MsgConfirmUndelegation", MsgConfirmUndelegation], ["/stride.staketia.MsgConfirmUnbondedTokenSweep", MsgConfirmUnbondedTokenSweep], ["/stride.staketia.MsgAdjustDelegatedBalance", MsgAdjustDelegatedBalance], ["/stride.staketia.MsgUpdateInnerRedemptionRateBounds", MsgUpdateInnerRedemptionRateBounds], ["/stride.staketia.MsgResumeHostZone", MsgResumeHostZone], ["/stride.staketia.MsgRefreshRedemptionRate", MsgRefreshRedemptionRate], ["/stride.staketia.MsgOverwriteDelegationRecord", MsgOverwriteDelegationRecord], ["/stride.staketia.MsgOverwriteUnbondingRecord", MsgOverwriteUnbondingRecord], ["/stride.staketia.MsgOverwriteRedemptionRecord", MsgOverwriteRedemptionRecord], ["/stride.staketia.MsgSetOperatorAddress", MsgSetOperatorAddress]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: MsgConfirmDelegation.encode(value).finish()
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.encode(value).finish()
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.encode(value).finish()
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: MsgResumeHostZone.encode(value).finish()
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.encode(value).finish()
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.encode(value).finish()
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.encode(value).finish()
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.encode(value).finish()
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value: MsgSetOperatorAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value
      };
    }
  },
  fromPartial: {
    liquidStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: MsgConfirmDelegation.fromPartial(value)
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: MsgConfirmUndelegation.fromPartial(value)
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: MsgConfirmUnbondedTokenSweep.fromPartial(value)
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: MsgAdjustDelegatedBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: MsgResumeHostZone.fromPartial(value)
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: MsgRefreshRedemptionRate.fromPartial(value)
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: MsgOverwriteDelegationRecord.fromPartial(value)
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: MsgOverwriteUnbondingRecord.fromPartial(value)
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: MsgOverwriteRedemptionRecord.fromPartial(value)
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
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
