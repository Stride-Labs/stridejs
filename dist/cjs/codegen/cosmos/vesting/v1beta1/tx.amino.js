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
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: import_tx.MsgCreateVestingAccount.toAmino,
    fromAmino: import_tx.MsgCreateVestingAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
    toAmino: import_tx.MsgCreatePermanentLockedAccount.toAmino,
    fromAmino: import_tx.MsgCreatePermanentLockedAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: import_tx.MsgCreatePeriodicVestingAccount.toAmino,
    fromAmino: import_tx.MsgCreatePeriodicVestingAccount.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
