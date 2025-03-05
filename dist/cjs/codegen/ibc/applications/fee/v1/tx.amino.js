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
  "/ibc.applications.fee.v1.MsgRegisterPayee": {
    aminoType: "cosmos-sdk/MsgRegisterPayee",
    toAmino: import_tx.MsgRegisterPayee.toAmino,
    fromAmino: import_tx.MsgRegisterPayee.fromAmino
  },
  "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
    aminoType: "cosmos-sdk/MsgRegisterCounterpartyPayee",
    toAmino: import_tx.MsgRegisterCounterpartyPayee.toAmino,
    fromAmino: import_tx.MsgRegisterCounterpartyPayee.fromAmino
  },
  "/ibc.applications.fee.v1.MsgPayPacketFee": {
    aminoType: "cosmos-sdk/MsgPayPacketFee",
    toAmino: import_tx.MsgPayPacketFee.toAmino,
    fromAmino: import_tx.MsgPayPacketFee.fromAmino
  },
  "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
    aminoType: "cosmos-sdk/MsgPayPacketFeeAsync",
    toAmino: import_tx.MsgPayPacketFeeAsync.toAmino,
    fromAmino: import_tx.MsgPayPacketFeeAsync.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
