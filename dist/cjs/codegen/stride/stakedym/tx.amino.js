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
var tx_amino_exports = {};
__export(tx_amino_exports, {
  AminoConverter: () => AminoConverter
});
module.exports = __toCommonJS(tx_amino_exports);
var import_tx = require("./tx");
const AminoConverter = {
  "/stride.stakedym.MsgLiquidStake": {
    aminoType: "stakedym/MsgLiquidStake",
    toAmino: import_tx.MsgLiquidStake.toAmino,
    fromAmino: import_tx.MsgLiquidStake.fromAmino
  },
  "/stride.stakedym.MsgRedeemStake": {
    aminoType: "stakedym/MsgRedeemStake",
    toAmino: import_tx.MsgRedeemStake.toAmino,
    fromAmino: import_tx.MsgRedeemStake.fromAmino
  },
  "/stride.stakedym.MsgConfirmDelegation": {
    aminoType: "stakedym/MsgConfirmDelegation",
    toAmino: import_tx.MsgConfirmDelegation.toAmino,
    fromAmino: import_tx.MsgConfirmDelegation.fromAmino
  },
  "/stride.stakedym.MsgConfirmUndelegation": {
    aminoType: "stakedym/MsgConfirmUndelegation",
    toAmino: import_tx.MsgConfirmUndelegation.toAmino,
    fromAmino: import_tx.MsgConfirmUndelegation.fromAmino
  },
  "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
    aminoType: "stakedym/MsgConfirmUnbondedTokenSweep",
    toAmino: import_tx.MsgConfirmUnbondedTokenSweep.toAmino,
    fromAmino: import_tx.MsgConfirmUnbondedTokenSweep.fromAmino
  },
  "/stride.stakedym.MsgAdjustDelegatedBalance": {
    aminoType: "stakedym/MsgAdjustDelegatedBalance",
    toAmino: import_tx.MsgAdjustDelegatedBalance.toAmino,
    fromAmino: import_tx.MsgAdjustDelegatedBalance.fromAmino
  },
  "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "stakedym/MsgUpdateRedemptionRateBounds",
    toAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.stakedym.MsgResumeHostZone": {
    aminoType: "stakedym/MsgResumeHostZone",
    toAmino: import_tx.MsgResumeHostZone.toAmino,
    fromAmino: import_tx.MsgResumeHostZone.fromAmino
  },
  "/stride.stakedym.MsgRefreshRedemptionRate": {
    aminoType: "stakedym/MsgRefreshRedemptionRate",
    toAmino: import_tx.MsgRefreshRedemptionRate.toAmino,
    fromAmino: import_tx.MsgRefreshRedemptionRate.fromAmino
  },
  "/stride.stakedym.MsgOverwriteDelegationRecord": {
    aminoType: "stakedym/MsgOverwriteDelegationRecord",
    toAmino: import_tx.MsgOverwriteDelegationRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteDelegationRecord.fromAmino
  },
  "/stride.stakedym.MsgOverwriteUnbondingRecord": {
    aminoType: "stakedym/MsgOverwriteUnbondingRecord",
    toAmino: import_tx.MsgOverwriteUnbondingRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteUnbondingRecord.fromAmino
  },
  "/stride.stakedym.MsgOverwriteRedemptionRecord": {
    aminoType: "stakedym/MsgOverwriteRedemptionRecord",
    toAmino: import_tx.MsgOverwriteRedemptionRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteRedemptionRecord.fromAmino
  },
  "/stride.stakedym.MsgSetOperatorAddress": {
    aminoType: "stakedym/MsgSetOperatorAddress",
    toAmino: import_tx.MsgSetOperatorAddress.toAmino,
    fromAmino: import_tx.MsgSetOperatorAddress.fromAmino
  }
};
// Removed broken CommonJS export annotation
