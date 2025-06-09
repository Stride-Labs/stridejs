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
  "/stride.stakeibc.MsgLiquidStake": {
    aminoType: "stakeibc/MsgLiquidStake",
    toAmino: import_tx.MsgLiquidStake.toAmino,
    fromAmino: import_tx.MsgLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgLSMLiquidStake": {
    aminoType: "stakeibc/MsgLSMLiquidStake",
    toAmino: import_tx.MsgLSMLiquidStake.toAmino,
    fromAmino: import_tx.MsgLSMLiquidStake.fromAmino
  },
  "/stride.stakeibc.MsgRedeemStake": {
    aminoType: "stakeibc/MsgRedeemStake",
    toAmino: import_tx.MsgRedeemStake.toAmino,
    fromAmino: import_tx.MsgRedeemStake.fromAmino
  },
  "/stride.stakeibc.MsgRegisterHostZone": {
    aminoType: "stakeibc/MsgRegisterHostZone",
    toAmino: import_tx.MsgRegisterHostZone.toAmino,
    fromAmino: import_tx.MsgRegisterHostZone.fromAmino
  },
  "/stride.stakeibc.MsgClaimUndelegatedTokens": {
    aminoType: "stakeibc/MsgClaimUndelegatedTokens",
    toAmino: import_tx.MsgClaimUndelegatedTokens.toAmino,
    fromAmino: import_tx.MsgClaimUndelegatedTokens.fromAmino
  },
  "/stride.stakeibc.MsgRebalanceValidators": {
    aminoType: "stakeibc/MsgRebalanceValidators",
    toAmino: import_tx.MsgRebalanceValidators.toAmino,
    fromAmino: import_tx.MsgRebalanceValidators.fromAmino
  },
  "/stride.stakeibc.MsgAddValidators": {
    aminoType: "stakeibc/MsgAddValidators",
    toAmino: import_tx.MsgAddValidators.toAmino,
    fromAmino: import_tx.MsgAddValidators.fromAmino
  },
  "/stride.stakeibc.MsgChangeValidatorWeights": {
    aminoType: "stakeibc/MsgChangeValidatorWeights",
    toAmino: import_tx.MsgChangeValidatorWeights.toAmino,
    fromAmino: import_tx.MsgChangeValidatorWeights.fromAmino
  },
  "/stride.stakeibc.MsgDeleteValidator": {
    aminoType: "stakeibc/MsgDeleteValidator",
    toAmino: import_tx.MsgDeleteValidator.toAmino,
    fromAmino: import_tx.MsgDeleteValidator.fromAmino
  },
  "/stride.stakeibc.MsgRestoreInterchainAccount": {
    aminoType: "stakeibc/MsgRestoreInterchainAcco",
    toAmino: import_tx.MsgRestoreInterchainAccount.toAmino,
    fromAmino: import_tx.MsgRestoreInterchainAccount.fromAmino
  },
  "/stride.stakeibc.MsgCloseDelegationChannel": {
    aminoType: "stakeibc/MsgCloseDelegationChanne",
    toAmino: import_tx.MsgCloseDelegationChannel.toAmino,
    fromAmino: import_tx.MsgCloseDelegationChannel.fromAmino
  },
  "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
    aminoType: "stakeibc/MsgUpdateValSharesExchRate",
    toAmino: import_tx.MsgUpdateValidatorSharesExchRate.toAmino,
    fromAmino: import_tx.MsgUpdateValidatorSharesExchRate.fromAmino
  },
  "/stride.stakeibc.MsgCalibrateDelegation": {
    aminoType: "stakeibc/MsgCalibrateDelegation",
    toAmino: import_tx.MsgCalibrateDelegation.toAmino,
    fromAmino: import_tx.MsgCalibrateDelegation.fromAmino
  },
  "/stride.stakeibc.MsgClearBalance": {
    aminoType: "stakeibc/MsgClearBalance",
    toAmino: import_tx.MsgClearBalance.toAmino,
    fromAmino: import_tx.MsgClearBalance.fromAmino
  },
  "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
    aminoType: "stakeibc/MsgUpdateRedemptionRateBounds",
    toAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.toAmino,
    fromAmino: import_tx.MsgUpdateInnerRedemptionRateBounds.fromAmino
  },
  "/stride.stakeibc.MsgResumeHostZone": {
    aminoType: "stakeibc/MsgResumeHostZone",
    toAmino: import_tx.MsgResumeHostZone.toAmino,
    fromAmino: import_tx.MsgResumeHostZone.fromAmino
  },
  "/stride.stakeibc.MsgCreateTradeRoute": {
    aminoType: "stakeibc/MsgCreateTradeRoute",
    toAmino: import_tx.MsgCreateTradeRoute.toAmino,
    fromAmino: import_tx.MsgCreateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgDeleteTradeRoute": {
    aminoType: "stakeibc/MsgDeleteTradeRoute",
    toAmino: import_tx.MsgDeleteTradeRoute.toAmino,
    fromAmino: import_tx.MsgDeleteTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgUpdateTradeRoute": {
    aminoType: "stakeibc/MsgUpdateTradeRoute",
    toAmino: import_tx.MsgUpdateTradeRoute.toAmino,
    fromAmino: import_tx.MsgUpdateTradeRoute.fromAmino
  },
  "/stride.stakeibc.MsgSetCommunityPoolRebate": {
    aminoType: "stakeibc/MsgSetCommunityPoolRebate",
    toAmino: import_tx.MsgSetCommunityPoolRebate.toAmino,
    fromAmino: import_tx.MsgSetCommunityPoolRebate.fromAmino
  },
  "/stride.stakeibc.MsgToggleTradeController": {
    aminoType: "stakeibc/MsgToggleTradeController",
    toAmino: import_tx.MsgToggleTradeController.toAmino,
    fromAmino: import_tx.MsgToggleTradeController.fromAmino
  },
  "/stride.stakeibc.MsgUpdateHostZoneParams": {
    aminoType: "stakeibc/MsgUpdateHostZoneParams",
    toAmino: import_tx.MsgUpdateHostZoneParams.toAmino,
    fromAmino: import_tx.MsgUpdateHostZoneParams.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
