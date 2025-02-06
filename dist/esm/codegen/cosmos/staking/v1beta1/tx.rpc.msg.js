import { BinaryReader } from "../../../binary";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgUnbondValidator, MsgUnbondValidatorResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgValidatorBond, MsgValidatorBondResponse } from "./tx";
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
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then((data2) => MsgCreateValidatorResponse.decode(new BinaryReader(data2)));
  }
  editValidator(request) {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then((data2) => MsgEditValidatorResponse.decode(new BinaryReader(data2)));
  }
  delegate(request) {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then((data2) => MsgDelegateResponse.decode(new BinaryReader(data2)));
  }
  beginRedelegate(request) {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then((data2) => MsgBeginRedelegateResponse.decode(new BinaryReader(data2)));
  }
  undelegate(request) {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then((data2) => MsgUndelegateResponse.decode(new BinaryReader(data2)));
  }
  unbondValidator(request) {
    const data = MsgUnbondValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UnbondValidator", data);
    return promise.then((data2) => MsgUnbondValidatorResponse.decode(new BinaryReader(data2)));
  }
  cancelUnbondingDelegation(request) {
    const data = MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
    return promise.then((data2) => MsgCancelUnbondingDelegationResponse.decode(new BinaryReader(data2)));
  }
  tokenizeShares(request) {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TokenizeShares", data);
    return promise.then((data2) => MsgTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  redeemTokensForShares(request) {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then((data2) => MsgRedeemTokensForSharesResponse.decode(new BinaryReader(data2)));
  }
  transferTokenizeShareRecord(request) {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then((data2) => MsgTransferTokenizeShareRecordResponse.decode(new BinaryReader(data2)));
  }
  disableTokenizeShares(request) {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then((data2) => MsgDisableTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  enableTokenizeShares(request) {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then((data2) => MsgEnableTokenizeSharesResponse.decode(new BinaryReader(data2)));
  }
  validatorBond(request) {
    const data = MsgValidatorBond.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "ValidatorBond", data);
    return promise.then((data2) => MsgValidatorBondResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
