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
  "/stride.staketia.MsgLiquidStake": {
    aminoType: "staketia/MsgLiquidStake",
    toAmino: import_tx.MsgLiquidStake.toAmino,
    fromAmino: import_tx.MsgLiquidStake.fromAmino
  },
  "/stride.staketia.MsgRedeemStake": {
    aminoType: "staketia/MsgRedeemStake",
    toAmino: import_tx.MsgRedeemStake.toAmino,
    fromAmino: import_tx.MsgRedeemStake.fromAmino
  },
  "/stride.staketia.MsgConfirmDelegation": {
    aminoType: "staketia/MsgConfirmDelegation",
    toAmino: import_tx.MsgConfirmDelegation.toAmino,
    fromAmino: import_tx.MsgConfirmDelegation.fromAmino
  },
  "/stride.staketia.MsgConfirmUndelegation": {
    aminoType: "staketia/MsgConfirmUndelegation",
    toAmino: import_tx.MsgConfirmUndelegation.toAmino,
    fromAmino: import_tx.MsgConfirmUndelegation.fromAmino
  },
  "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
    aminoType: "staketia/MsgConfirmUnbondedTokenSweep",
    toAmino: import_tx.MsgConfirmUnbondedTokenSweep.toAmino,
    fromAmino: import_tx.MsgConfirmUnbondedTokenSweep.fromAmino
  },
  "/stride.staketia.MsgAdjustDelegatedBalance": {
    aminoType: "staketia/MsgAdjustDelegatedBalance",
    toAmino: import_tx.MsgAdjustDelegatedBalance.toAmino,
    fromAmino: import_tx.MsgAdjustDelegatedBalance.fromAmino
  },
  "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "staketia/MsgUpdateRedemptionRateBounds",
    toAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.staketia.MsgResumeHostZone": {
    aminoType: "staketia/MsgResumeHostZone",
    toAmino: import_tx.MsgResumeHostZone.toAmino,
    fromAmino: import_tx.MsgResumeHostZone.fromAmino
  },
  "/stride.staketia.MsgRefreshRedemptionRate": {
    aminoType: "staketia/MsgRefreshRedemptionRate",
    toAmino: import_tx.MsgRefreshRedemptionRate.toAmino,
    fromAmino: import_tx.MsgRefreshRedemptionRate.fromAmino
  },
  "/stride.staketia.MsgOverwriteDelegationRecord": {
    aminoType: "staketia/MsgOverwriteDelegationRecord",
    toAmino: import_tx.MsgOverwriteDelegationRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteDelegationRecord.fromAmino
  },
  "/stride.staketia.MsgOverwriteUnbondingRecord": {
    aminoType: "staketia/MsgOverwriteUnbondingRecord",
    toAmino: import_tx.MsgOverwriteUnbondingRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteUnbondingRecord.fromAmino
  },
  "/stride.staketia.MsgOverwriteRedemptionRecord": {
    aminoType: "staketia/MsgOverwriteRedemptionRecord",
    toAmino: import_tx.MsgOverwriteRedemptionRecord.toAmino,
    fromAmino: import_tx.MsgOverwriteRedemptionRecord.fromAmino
  },
  "/stride.staketia.MsgSetOperatorAddress": {
    aminoType: "staketia/MsgSetOperatorAddress",
    toAmino: import_tx.MsgSetOperatorAddress.toAmino,
    fromAmino: import_tx.MsgSetOperatorAddress.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
