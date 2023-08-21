import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgUnbondValidator, MsgUnbondValidatorResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgValidatorBond, MsgValidatorBondResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /*CreateValidator defines a method for creating a new validator.*/

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /*EditValidator defines a method for editing an existing validator.*/

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /*Delegate defines a method for performing a delegation of coins
   from a delegator to a validator.*/

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
  /*BeginRedelegate defines a method for performing a redelegation
   of coins from a delegator and source validator to a destination validator.*/

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /*Undelegate defines a method for performing an undelegation from a
   delegate and a validator.
   This allows a validator to stop their services and jail themselves without
   experiencing a slash*/

  unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
  /*UnbondValidator defines a method for performing the status transition for a validator
   from bonded to unbonding*/

  cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
  /*CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
   and delegate back to previous validator.
  
   This has been backported from SDK 46 as a desirable safety feature for LSM.
   If a liquid staking provider is exploited and the exploiter initiates an undelegation,
   having access to CancelUnbondingDelegation allows the liquid staking provider to cancel
   the undelegation with a software upgrade and thus avoid loss of user funds*/

  tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
  /*TokenizeShares defines a method for tokenizing shares from a validator.*/

  redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
  /*RedeemTokensForShares defines a method for redeeming tokens from a validator for
   shares.*/

  transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
  /*TransferTokenizeShareRecord defines a method to transfer ownership of
   TokenizeShareRecord*/

  disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
  /*DisableTokenizeShares defines a method to prevent the tokenization of an addresses stake*/

  enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
  /*EnableTokenizeShares defines a method to re-enable the tokenization of an addresseses stake
   after it has been disabled*/

  validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
  /*ValidatorBond defines a method for performing a validator self-bond*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  }

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

  unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse> {
    const data = MsgUnbondValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "UnbondValidator", data);
    return promise.then(data => MsgUnbondValidatorResponse.decode(new _m0.Reader(data)));
  }

  cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse> {
    const data = MsgCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
    return promise.then(data => MsgCancelUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse> {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TokenizeShares", data);
    return promise.then(data => MsgTokenizeSharesResponse.decode(new _m0.Reader(data)));
  }

  redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse> {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then(data => MsgRedeemTokensForSharesResponse.decode(new _m0.Reader(data)));
  }

  transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse> {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then(data => MsgTransferTokenizeShareRecordResponse.decode(new _m0.Reader(data)));
  }

  disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse> {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then(data => MsgDisableTokenizeSharesResponse.decode(new _m0.Reader(data)));
  }

  enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse> {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then(data => MsgEnableTokenizeSharesResponse.decode(new _m0.Reader(data)));
  }

  validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse> {
    const data = MsgValidatorBond.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "ValidatorBond", data);
    return promise.then(data => MsgValidatorBondResponse.decode(new _m0.Reader(data)));
  }

}