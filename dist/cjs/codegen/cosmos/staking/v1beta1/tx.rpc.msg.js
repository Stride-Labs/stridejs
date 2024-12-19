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
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.unbondValidator = this.unbondValidator.bind(this);
    this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    this.tokenizeShares = this.tokenizeShares.bind(this);
    this.redeemTokensForShares = this.redeemTokensForShares.bind(this);
    this.transferTokenizeShareRecord = this.transferTokenizeShareRecord.bind(this);
    this.disableTokenizeShares = this.disableTokenizeShares.bind(this);
    this.enableTokenizeShares = this.enableTokenizeShares.bind(this);
    this.validatorBond = this.validatorBond.bind(this);
  }
  createValidator(request) {
    const data = import_tx.MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then((data2) => import_tx.MsgCreateValidatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  editValidator(request) {
    const data = import_tx.MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then((data2) => import_tx.MsgEditValidatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegate(request) {
    const data = import_tx.MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then((data2) => import_tx.MsgDelegateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  beginRedelegate(request) {
    const data = import_tx.MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then((data2) => import_tx.MsgBeginRedelegateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  undelegate(request) {
    const data = import_tx.MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then((data2) => import_tx.MsgUndelegateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  unbondValidator(request) {
    const data = import_tx.MsgUnbondValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UnbondValidator", data);
    return promise.then((data2) => import_tx.MsgUnbondValidatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  cancelUnbondingDelegation(request) {
    const data = import_tx.MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
    return promise.then((data2) => import_tx.MsgCancelUnbondingDelegationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShares(request) {
    const data = import_tx.MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TokenizeShares", data);
    return promise.then((data2) => import_tx.MsgTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redeemTokensForShares(request) {
    const data = import_tx.MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then((data2) => import_tx.MsgRedeemTokensForSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  transferTokenizeShareRecord(request) {
    const data = import_tx.MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then((data2) => import_tx.MsgTransferTokenizeShareRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  disableTokenizeShares(request) {
    const data = import_tx.MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then((data2) => import_tx.MsgDisableTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  enableTokenizeShares(request) {
    const data = import_tx.MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then((data2) => import_tx.MsgEnableTokenizeSharesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  validatorBond(request) {
    const data = import_tx.MsgValidatorBond.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "ValidatorBond", data);
    return promise.then((data2) => import_tx.MsgValidatorBondResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
