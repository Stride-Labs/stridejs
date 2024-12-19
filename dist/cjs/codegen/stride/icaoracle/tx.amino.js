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
  "/stride.icaoracle.MsgAddOracle": {
    aminoType: "stride/x/icaoracle/MsgAddOracle",
    toAmino: import_tx.MsgAddOracle.toAmino,
    fromAmino: import_tx.MsgAddOracle.fromAmino
  },
  "/stride.icaoracle.MsgInstantiateOracle": {
    aminoType: "stride/x/icaoracle/MsgInstantiateOracle",
    toAmino: import_tx.MsgInstantiateOracle.toAmino,
    fromAmino: import_tx.MsgInstantiateOracle.fromAmino
  },
  "/stride.icaoracle.MsgRestoreOracleICA": {
    aminoType: "stride/x/icaoracle/MsgRestoreOracleICA",
    toAmino: import_tx.MsgRestoreOracleICA.toAmino,
    fromAmino: import_tx.MsgRestoreOracleICA.fromAmino
  },
  "/stride.icaoracle.MsgToggleOracle": {
    aminoType: "stride/x/icaoracle/MsgToggleOracle",
    toAmino: import_tx.MsgToggleOracle.toAmino,
    fromAmino: import_tx.MsgToggleOracle.fromAmino
  },
  "/stride.icaoracle.MsgRemoveOracle": {
    aminoType: "stride/x/icaoracle/MsgRemoveOracle",
    toAmino: import_tx.MsgRemoveOracle.toAmino,
    fromAmino: import_tx.MsgRemoveOracle.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
