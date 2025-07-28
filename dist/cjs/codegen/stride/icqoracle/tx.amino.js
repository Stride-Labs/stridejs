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
  "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
    aminoType: "icqoracle/MsgRegisterTokenPriceQuery",
    toAmino: import_tx.MsgRegisterTokenPriceQuery.toAmino,
    fromAmino: import_tx.MsgRegisterTokenPriceQuery.fromAmino
  },
  "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
    aminoType: "icqoracle/MsgRemoveTokenPriceQuery",
    toAmino: import_tx.MsgRemoveTokenPriceQuery.toAmino,
    fromAmino: import_tx.MsgRemoveTokenPriceQuery.fromAmino
  },
  "/stride.icqoracle.MsgUpdateParams": {
    aminoType: "icqoracle/MsgUpdateParams",
    toAmino: import_tx.MsgUpdateParams.toAmino,
    fromAmino: import_tx.MsgUpdateParams.fromAmino
  }
};
// Removed broken CommonJS export annotation
