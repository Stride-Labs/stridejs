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
    this.liquidStake = this.liquidStake.bind(this);
    this.redeemStake = this.redeemStake.bind(this);
    this.confirmDelegation = this.confirmDelegation.bind(this);
    this.confirmUndelegation = this.confirmUndelegation.bind(this);
    this.confirmUnbondedTokenSweep = this.confirmUnbondedTokenSweep.bind(this);
    this.adjustDelegatedBalance = this.adjustDelegatedBalance.bind(this);
    this.updateInnerRedemptionRateBounds = this.updateInnerRedemptionRateBounds.bind(this);
    this.resumeHostZone = this.resumeHostZone.bind(this);
    this.refreshRedemptionRate = this.refreshRedemptionRate.bind(this);
    this.overwriteDelegationRecord = this.overwriteDelegationRecord.bind(this);
    this.overwriteUnbondingRecord = this.overwriteUnbondingRecord.bind(this);
    this.overwriteRedemptionRecord = this.overwriteRedemptionRecord.bind(this);
    this.setOperatorAddress = this.setOperatorAddress.bind(this);
  }
  liquidStake(request) {
    const data = import_tx.MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "LiquidStake", data);
    return promise.then((data2) => import_tx.MsgLiquidStakeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redeemStake(request) {
    const data = import_tx.MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "RedeemStake", data);
    return promise.then((data2) => import_tx.MsgRedeemStakeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  confirmDelegation(request) {
    const data = import_tx.MsgConfirmDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "ConfirmDelegation", data);
    return promise.then((data2) => import_tx.MsgConfirmDelegationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  confirmUndelegation(request) {
    const data = import_tx.MsgConfirmUndelegation.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "ConfirmUndelegation", data);
    return promise.then((data2) => import_tx.MsgConfirmUndelegationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  confirmUnbondedTokenSweep(request) {
    const data = import_tx.MsgConfirmUnbondedTokenSweep.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "ConfirmUnbondedTokenSweep", data);
    return promise.then((data2) => import_tx.MsgConfirmUnbondedTokenSweepResponse.decode(new import_binary.BinaryReader(data2)));
  }
  adjustDelegatedBalance(request) {
    const data = import_tx.MsgAdjustDelegatedBalance.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "AdjustDelegatedBalance", data);
    return promise.then((data2) => import_tx.MsgAdjustDelegatedBalanceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateInnerRedemptionRateBounds(request) {
    const data = import_tx.MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then((data2) => import_tx.MsgUpdateInnerRedemptionRateBoundsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  resumeHostZone(request) {
    const data = import_tx.MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "ResumeHostZone", data);
    return promise.then((data2) => import_tx.MsgResumeHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  refreshRedemptionRate(request) {
    const data = import_tx.MsgRefreshRedemptionRate.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "RefreshRedemptionRate", data);
    return promise.then((data2) => import_tx.MsgRefreshRedemptionRateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  overwriteDelegationRecord(request) {
    const data = import_tx.MsgOverwriteDelegationRecord.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "OverwriteDelegationRecord", data);
    return promise.then((data2) => import_tx.MsgOverwriteDelegationRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  overwriteUnbondingRecord(request) {
    const data = import_tx.MsgOverwriteUnbondingRecord.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "OverwriteUnbondingRecord", data);
    return promise.then((data2) => import_tx.MsgOverwriteUnbondingRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  overwriteRedemptionRecord(request) {
    const data = import_tx.MsgOverwriteRedemptionRecord.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "OverwriteRedemptionRecord", data);
    return promise.then((data2) => import_tx.MsgOverwriteRedemptionRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  setOperatorAddress(request) {
    const data = import_tx.MsgSetOperatorAddress.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Msg", "SetOperatorAddress", data);
    return promise.then((data2) => import_tx.MsgSetOperatorAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Proper CommonJS exports for dynamic imports
module.exports = {
  MsgClientImpl
};
