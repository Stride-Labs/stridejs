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
  "/stride.auction.MsgPlaceBid": {
    aminoType: "auction/MsgPlaceBid",
    toAmino: import_tx.MsgPlaceBid.toAmino,
    fromAmino: import_tx.MsgPlaceBid.fromAmino
  },
  "/stride.auction.MsgCreateAuction": {
    aminoType: "auction/MsgCreateAuction",
    toAmino: import_tx.MsgCreateAuction.toAmino,
    fromAmino: import_tx.MsgCreateAuction.fromAmino
  },
  "/stride.auction.MsgUpdateAuction": {
    aminoType: "auction/MsgUpdateAuction",
    toAmino: import_tx.MsgUpdateAuction.toAmino,
    fromAmino: import_tx.MsgUpdateAuction.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
