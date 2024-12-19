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
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: import_tx.MsgCreateValidator.toAmino,
    fromAmino: import_tx.MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: import_tx.MsgEditValidator.toAmino,
    fromAmino: import_tx.MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: import_tx.MsgDelegate.toAmino,
    fromAmino: import_tx.MsgDelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: import_tx.MsgBeginRedelegate.toAmino,
    fromAmino: import_tx.MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: import_tx.MsgUndelegate.toAmino,
    fromAmino: import_tx.MsgUndelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUnbondValidator": {
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    toAmino: import_tx.MsgUnbondValidator.toAmino,
    fromAmino: import_tx.MsgUnbondValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: import_tx.MsgCancelUnbondingDelegation.toAmino,
    fromAmino: import_tx.MsgCancelUnbondingDelegation.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTokenizeShares": {
    aminoType: "cosmos-sdk/MsgTokenizeShares",
    toAmino: import_tx.MsgTokenizeShares.toAmino,
    fromAmino: import_tx.MsgTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    toAmino: import_tx.MsgRedeemTokensForShares.toAmino,
    fromAmino: import_tx.MsgRedeemTokensForShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    toAmino: import_tx.MsgTransferTokenizeShareRecord.toAmino,
    fromAmino: import_tx.MsgTransferTokenizeShareRecord.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    toAmino: import_tx.MsgDisableTokenizeShares.toAmino,
    fromAmino: import_tx.MsgDisableTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    toAmino: import_tx.MsgEnableTokenizeShares.toAmino,
    fromAmino: import_tx.MsgEnableTokenizeShares.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgValidatorBond": {
    aminoType: "cosmos-sdk/MsgValidatorBond",
    toAmino: import_tx.MsgValidatorBond.toAmino,
    fromAmino: import_tx.MsgValidatorBond.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
