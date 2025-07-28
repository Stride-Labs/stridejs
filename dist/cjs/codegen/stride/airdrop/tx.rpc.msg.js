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
    this.claimDaily = this.claimDaily.bind(this);
    this.claimEarly = this.claimEarly.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.updateAirdrop = this.updateAirdrop.bind(this);
    this.addAllocations = this.addAllocations.bind(this);
    this.updateUserAllocation = this.updateUserAllocation.bind(this);
    this.linkAddresses = this.linkAddresses.bind(this);
  }
  claimDaily(request) {
    const data = import_tx.MsgClaimDaily.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimDaily", data);
    return promise.then((data2) => import_tx.MsgClaimDailyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimEarly(request) {
    const data = import_tx.MsgClaimEarly.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimEarly", data);
    return promise.then((data2) => import_tx.MsgClaimEarlyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createAirdrop(request) {
    const data = import_tx.MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "CreateAirdrop", data);
    return promise.then((data2) => import_tx.MsgCreateAirdropResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateAirdrop(request) {
    const data = import_tx.MsgUpdateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateAirdrop", data);
    return promise.then((data2) => import_tx.MsgUpdateAirdropResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addAllocations(request) {
    const data = import_tx.MsgAddAllocations.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "AddAllocations", data);
    return promise.then((data2) => import_tx.MsgAddAllocationsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateUserAllocation(request) {
    const data = import_tx.MsgUpdateUserAllocation.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateUserAllocation", data);
    return promise.then((data2) => import_tx.MsgUpdateUserAllocationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  linkAddresses(request) {
    const data = import_tx.MsgLinkAddresses.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "LinkAddresses", data);
    return promise.then((data2) => import_tx.MsgLinkAddressesResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Proper CommonJS exports for dynamic imports
module.exports = {
  MsgClientImpl
};
