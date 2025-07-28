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
  "/gaia.liquid.v1beta1.MsgUpdateParams": {
    aminoType: "gaia/liquid/MsgUpdateParams",
    toAmino: import_tx.MsgUpdateParams.toAmino,
    fromAmino: import_tx.MsgUpdateParams.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgTokenizeShares": {
    aminoType: "gaia/MsgTokenizeShares",
    toAmino: import_tx.MsgTokenizeShares.toAmino,
    fromAmino: import_tx.MsgTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "gaia/MsgRedeemTokensForShares",
    toAmino: import_tx.MsgRedeemTokensForShares.toAmino,
    fromAmino: import_tx.MsgRedeemTokensForShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "gaia/MsgTransferTokenizeShareRecord",
    toAmino: import_tx.MsgTransferTokenizeShareRecord.toAmino,
    fromAmino: import_tx.MsgTransferTokenizeShareRecord.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "gaia/MsgDisableTokenizeShares",
    toAmino: import_tx.MsgDisableTokenizeShares.toAmino,
    fromAmino: import_tx.MsgDisableTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "gaia/MsgEnableTokenizeShares",
    toAmino: import_tx.MsgEnableTokenizeShares.toAmino,
    fromAmino: import_tx.MsgEnableTokenizeShares.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawTokenizeShareRecordReward",
    toAmino: import_tx.MsgWithdrawTokenizeShareRecordReward.toAmino,
    fromAmino: import_tx.MsgWithdrawTokenizeShareRecordReward.fromAmino
  },
  "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawAllTokenizeShareRecordReward",
    toAmino: import_tx.MsgWithdrawAllTokenizeShareRecordReward.toAmino,
    fromAmino: import_tx.MsgWithdrawAllTokenizeShareRecordReward.fromAmino
  }
};
// Removed broken CommonJS export annotation
