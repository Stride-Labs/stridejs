"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_registry_exports = {};
__export(tx_registry_exports, {
  MessageComposer: () => MessageComposer,
  load: () => load,
  registry: () => registry
});
module.exports = __toCommonJS(tx_registry_exports);
var import_tx = require("./tx");
const registry = [["/stride.staketia.MsgLiquidStake", import_tx.MsgLiquidStake], ["/stride.staketia.MsgRedeemStake", import_tx.MsgRedeemStake], ["/stride.staketia.MsgConfirmDelegation", import_tx.MsgConfirmDelegation], ["/stride.staketia.MsgConfirmUndelegation", import_tx.MsgConfirmUndelegation], ["/stride.staketia.MsgConfirmUnbondedTokenSweep", import_tx.MsgConfirmUnbondedTokenSweep], ["/stride.staketia.MsgAdjustDelegatedBalance", import_tx.MsgAdjustDelegatedBalance], ["/stride.staketia.MsgUpdateInnerRedemptionRateBounds", import_tx.MsgUpdateInnerRedemptionRateBounds], ["/stride.staketia.MsgResumeHostZone", import_tx.MsgResumeHostZone], ["/stride.staketia.MsgRefreshRedemptionRate", import_tx.MsgRefreshRedemptionRate], ["/stride.staketia.MsgOverwriteDelegationRecord", import_tx.MsgOverwriteDelegationRecord], ["/stride.staketia.MsgOverwriteUnbondingRecord", import_tx.MsgOverwriteUnbondingRecord], ["/stride.staketia.MsgOverwriteRedemptionRecord", import_tx.MsgOverwriteRedemptionRecord], ["/stride.staketia.MsgSetOperatorAddress", import_tx.MsgSetOperatorAddress]];
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
        value: import_tx.MsgLiquidStake.encode(value).finish()
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: import_tx.MsgRedeemStake.encode(value).finish()
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: import_tx.MsgConfirmDelegation.encode(value).finish()
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: import_tx.MsgConfirmUndelegation.encode(value).finish()
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: import_tx.MsgConfirmUnbondedTokenSweep.encode(value).finish()
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: import_tx.MsgAdjustDelegatedBalance.encode(value).finish()
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: import_tx.MsgUpdateInnerRedemptionRateBounds.encode(value).finish()
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: import_tx.MsgResumeHostZone.encode(value).finish()
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: import_tx.MsgRefreshRedemptionRate.encode(value).finish()
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: import_tx.MsgOverwriteDelegationRecord.encode(value).finish()
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: import_tx.MsgOverwriteUnbondingRecord.encode(value).finish()
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: import_tx.MsgOverwriteRedemptionRecord.encode(value).finish()
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value: import_tx.MsgSetOperatorAddress.encode(value).finish()
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
        value: import_tx.MsgLiquidStake.fromPartial(value)
      };
    },
    redeemStake(value) {
      return {
        typeUrl: "/stride.staketia.MsgRedeemStake",
        value: import_tx.MsgRedeemStake.fromPartial(value)
      };
    },
    confirmDelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmDelegation",
        value: import_tx.MsgConfirmDelegation.fromPartial(value)
      };
    },
    confirmUndelegation(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUndelegation",
        value: import_tx.MsgConfirmUndelegation.fromPartial(value)
      };
    },
    confirmUnbondedTokenSweep(value) {
      return {
        typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep",
        value: import_tx.MsgConfirmUnbondedTokenSweep.fromPartial(value)
      };
    },
    adjustDelegatedBalance(value) {
      return {
        typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance",
        value: import_tx.MsgAdjustDelegatedBalance.fromPartial(value)
      };
    },
    updateInnerRedemptionRateBounds(value) {
      return {
        typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds",
        value: import_tx.MsgUpdateInnerRedemptionRateBounds.fromPartial(value)
      };
    },
    resumeHostZone(value) {
      return {
        typeUrl: "/stride.staketia.MsgResumeHostZone",
        value: import_tx.MsgResumeHostZone.fromPartial(value)
      };
    },
    refreshRedemptionRate(value) {
      return {
        typeUrl: "/stride.staketia.MsgRefreshRedemptionRate",
        value: import_tx.MsgRefreshRedemptionRate.fromPartial(value)
      };
    },
    overwriteDelegationRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord",
        value: import_tx.MsgOverwriteDelegationRecord.fromPartial(value)
      };
    },
    overwriteUnbondingRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord",
        value: import_tx.MsgOverwriteUnbondingRecord.fromPartial(value)
      };
    },
    overwriteRedemptionRecord(value) {
      return {
        typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord",
        value: import_tx.MsgOverwriteRedemptionRecord.fromPartial(value)
      };
    },
    setOperatorAddress(value) {
      return {
        typeUrl: "/stride.staketia.MsgSetOperatorAddress",
        value: import_tx.MsgSetOperatorAddress.fromPartial(value)
      };
    }
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  MessageComposer,
  load,
  registry
};
