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
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.setAirdropAllocations = this.setAirdropAllocations.bind(this);
    this.claimFreeAmount = this.claimFreeAmount.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.deleteAirdrop = this.deleteAirdrop.bind(this);
  }
  setAirdropAllocations(request) {
    const data = import_tx.MsgSetAirdropAllocations.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "SetAirdropAllocations", data);
    return promise.then((data2) => import_tx.MsgSetAirdropAllocationsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimFreeAmount(request) {
    const data = import_tx.MsgClaimFreeAmount.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "ClaimFreeAmount", data);
    return promise.then((data2) => import_tx.MsgClaimFreeAmountResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createAirdrop(request) {
    const data = import_tx.MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "CreateAirdrop", data);
    return promise.then((data2) => import_tx.MsgCreateAirdropResponse.decode(new import_binary.BinaryReader(data2)));
  }
  deleteAirdrop(request) {
    const data = import_tx.MsgDeleteAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "DeleteAirdrop", data);
    return promise.then((data2) => import_tx.MsgDeleteAirdropResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Removed broken CommonJS export annotation
