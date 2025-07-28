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
var import_binary = require("../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.tokenizeShares = this.tokenizeShares.bind(this);
    this.redeemTokensForShares = this.redeemTokensForShares.bind(this);
    this.transferTokenizeShareRecord = this.transferTokenizeShareRecord.bind(this);
    this.disableTokenizeShares = this.disableTokenizeShares.bind(this);
    this.enableTokenizeShares = this.enableTokenizeShares.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
  }
  updateParams(request) {
    const data = import_tx.MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data2) => import_tx.MsgUpdateParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShares(request) {
    const data = import_tx.MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TokenizeShares", data);
    return promise.then((data2) => import_tx.MsgTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redeemTokensForShares(request) {
    const data = import_tx.MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then((data2) => import_tx.MsgRedeemTokensForSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  transferTokenizeShareRecord(request) {
    const data = import_tx.MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then((data2) => import_tx.MsgTransferTokenizeShareRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  disableTokenizeShares(request) {
    const data = import_tx.MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then((data2) => import_tx.MsgDisableTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  enableTokenizeShares(request) {
    const data = import_tx.MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then((data2) => import_tx.MsgEnableTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawTokenizeShareRecordReward(request) {
    const data = import_tx.MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then((data2) => import_tx.MsgWithdrawTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawAllTokenizeShareRecordReward(request) {
    const data = import_tx.MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then((data2) => import_tx.MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Removed broken CommonJS export annotation
