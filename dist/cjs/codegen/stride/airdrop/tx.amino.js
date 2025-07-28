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
  "/stride.airdrop.MsgClaimDaily": {
    aminoType: "airdrop/MsgClaimDaily",
    toAmino: import_tx.MsgClaimDaily.toAmino,
    fromAmino: import_tx.MsgClaimDaily.fromAmino
  },
  "/stride.airdrop.MsgClaimEarly": {
    aminoType: "airdrop/MsgClaimEarly",
    toAmino: import_tx.MsgClaimEarly.toAmino,
    fromAmino: import_tx.MsgClaimEarly.fromAmino
  },
  "/stride.airdrop.MsgCreateAirdrop": {
    aminoType: "airdrop/MsgCreateAirdrop",
    toAmino: import_tx.MsgCreateAirdrop.toAmino,
    fromAmino: import_tx.MsgCreateAirdrop.fromAmino
  },
  "/stride.airdrop.MsgUpdateAirdrop": {
    aminoType: "airdrop/MsgUpdateAirdrop",
    toAmino: import_tx.MsgUpdateAirdrop.toAmino,
    fromAmino: import_tx.MsgUpdateAirdrop.fromAmino
  },
  "/stride.airdrop.MsgAddAllocations": {
    aminoType: "airdrop/MsgAddAllocations",
    toAmino: import_tx.MsgAddAllocations.toAmino,
    fromAmino: import_tx.MsgAddAllocations.fromAmino
  },
  "/stride.airdrop.MsgUpdateUserAllocation": {
    aminoType: "airdrop/MsgUpdateUserAllocation",
    toAmino: import_tx.MsgUpdateUserAllocation.toAmino,
    fromAmino: import_tx.MsgUpdateUserAllocation.fromAmino
  },
  "/stride.airdrop.MsgLinkAddresses": {
    aminoType: "airdrop/MsgLinkAddresses",
    toAmino: import_tx.MsgLinkAddresses.toAmino,
    fromAmino: import_tx.MsgLinkAddresses.fromAmino
  }
};
// Removed broken CommonJS export annotation
