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
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.withdrawTokenizeShareRecordReward = this.withdrawTokenizeShareRecordReward.bind(this);
    this.withdrawAllTokenizeShareRecordReward = this.withdrawAllTokenizeShareRecordReward.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }
  setWithdrawAddress(request) {
    const data = import_tx.MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then((data2) => import_tx.MsgSetWithdrawAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawDelegatorReward(request) {
    const data = import_tx.MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then((data2) => import_tx.MsgWithdrawDelegatorRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawValidatorCommission(request) {
    const data = import_tx.MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then((data2) => import_tx.MsgWithdrawValidatorCommissionResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawTokenizeShareRecordReward(request) {
    const data = import_tx.MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then((data2) => import_tx.MsgWithdrawTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
  withdrawAllTokenizeShareRecordReward(request) {
    const data = import_tx.MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then((data2) => import_tx.MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
  fundCommunityPool(request) {
    const data = import_tx.MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then((data2) => import_tx.MsgFundCommunityPoolResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
