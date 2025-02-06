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
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: import_tx.MsgSetWithdrawAddress.toAmino,
    fromAmino: import_tx.MsgSetWithdrawAddress.fromAmino
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: import_tx.MsgWithdrawDelegatorReward.toAmino,
    fromAmino: import_tx.MsgWithdrawDelegatorReward.fromAmino
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: import_tx.MsgWithdrawValidatorCommission.toAmino,
    fromAmino: import_tx.MsgWithdrawValidatorCommission.fromAmino
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
    aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
    toAmino: import_tx.MsgWithdrawTokenizeShareRecordReward.toAmino,
    fromAmino: import_tx.MsgWithdrawTokenizeShareRecordReward.fromAmino
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
    aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
    toAmino: import_tx.MsgWithdrawAllTokenizeShareRecordReward.toAmino,
    fromAmino: import_tx.MsgWithdrawAllTokenizeShareRecordReward.fromAmino
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: import_tx.MsgFundCommunityPool.toAmino,
    fromAmino: import_tx.MsgFundCommunityPool.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
