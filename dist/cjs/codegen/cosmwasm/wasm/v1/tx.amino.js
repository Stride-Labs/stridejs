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
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: import_tx.MsgStoreCode.toAmino,
    fromAmino: import_tx.MsgStoreCode.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: import_tx.MsgInstantiateContract.toAmino,
    fromAmino: import_tx.MsgInstantiateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
    aminoType: "wasm/MsgInstantiateContract2",
    toAmino: import_tx.MsgInstantiateContract2.toAmino,
    fromAmino: import_tx.MsgInstantiateContract2.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: import_tx.MsgExecuteContract.toAmino,
    fromAmino: import_tx.MsgExecuteContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: import_tx.MsgMigrateContract.toAmino,
    fromAmino: import_tx.MsgMigrateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: import_tx.MsgUpdateAdmin.toAmino,
    fromAmino: import_tx.MsgUpdateAdmin.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: import_tx.MsgClearAdmin.toAmino,
    fromAmino: import_tx.MsgClearAdmin.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
    aminoType: "wasm/MsgUpdateInstantiateConfig",
    toAmino: import_tx.MsgUpdateInstantiateConfig.toAmino,
    fromAmino: import_tx.MsgUpdateInstantiateConfig.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUpdateParams": {
    aminoType: "wasm/MsgUpdateParams",
    toAmino: import_tx.MsgUpdateParams.toAmino,
    fromAmino: import_tx.MsgUpdateParams.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgSudoContract": {
    aminoType: "wasm/MsgSudoContract",
    toAmino: import_tx.MsgSudoContract.toAmino,
    fromAmino: import_tx.MsgSudoContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgPinCodes": {
    aminoType: "wasm/MsgPinCodes",
    toAmino: import_tx.MsgPinCodes.toAmino,
    fromAmino: import_tx.MsgPinCodes.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUnpinCodes": {
    aminoType: "wasm/MsgUnpinCodes",
    toAmino: import_tx.MsgUnpinCodes.toAmino,
    fromAmino: import_tx.MsgUnpinCodes.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
    aminoType: "wasm/MsgStoreAndInstantiateContract",
    toAmino: import_tx.MsgStoreAndInstantiateContract.toAmino,
    fromAmino: import_tx.MsgStoreAndInstantiateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgRemoveCodeUploadParamsAddresses",
    toAmino: import_tx.MsgRemoveCodeUploadParamsAddresses.toAmino,
    fromAmino: import_tx.MsgRemoveCodeUploadParamsAddresses.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
    aminoType: "wasm/MsgAddCodeUploadParamsAddresses",
    toAmino: import_tx.MsgAddCodeUploadParamsAddresses.toAmino,
    fromAmino: import_tx.MsgAddCodeUploadParamsAddresses.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
    aminoType: "wasm/MsgStoreAndMigrateContract",
    toAmino: import_tx.MsgStoreAndMigrateContract.toAmino,
    fromAmino: import_tx.MsgStoreAndMigrateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
    aminoType: "wasm/MsgUpdateContractLabel",
    toAmino: import_tx.MsgUpdateContractLabel.toAmino,
    fromAmino: import_tx.MsgUpdateContractLabel.fromAmino
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AminoConverter
});
