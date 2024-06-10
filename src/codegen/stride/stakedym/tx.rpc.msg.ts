import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgConfirmDelegation, MsgConfirmDelegationResponse, MsgConfirmUndelegation, MsgConfirmUndelegationResponse, MsgConfirmUnbondedTokenSweep, MsgConfirmUnbondedTokenSweepResponse, MsgAdjustDelegatedBalance, MsgAdjustDelegatedBalanceResponse, MsgUpdateInnerRedemptionRateBounds, MsgUpdateInnerRedemptionRateBoundsResponse, MsgResumeHostZone, MsgResumeHostZoneResponse, MsgRefreshRedemptionRate, MsgRefreshRedemptionRateResponse, MsgOverwriteDelegationRecord, MsgOverwriteDelegationRecordResponse, MsgOverwriteUnbondingRecord, MsgOverwriteUnbondingRecordResponse, MsgOverwriteRedemptionRecord, MsgOverwriteRedemptionRecordResponse, MsgSetOperatorAddress, MsgSetOperatorAddressResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /*User transaction to liquid stake native tokens into stTokens*/

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
  /*User transaction to redeem stake stTokens into native tokens*/

  confirmDelegation(request: MsgConfirmDelegation): Promise<MsgConfirmDelegationResponse>;
  /*Operator transaction to confirm a delegation was submitted
   on the host chain*/

  confirmUndelegation(request: MsgConfirmUndelegation): Promise<MsgConfirmUndelegationResponse>;
  /*Operator transaction to confirm an undelegation was submitted
   on the host chain*/

  confirmUnbondedTokenSweep(request: MsgConfirmUnbondedTokenSweep): Promise<MsgConfirmUnbondedTokenSweepResponse>;
  /*Operator transaction to confirm unbonded tokens were transferred back to
   stride*/

  adjustDelegatedBalance(request: MsgAdjustDelegatedBalance): Promise<MsgAdjustDelegatedBalanceResponse>;
  /*Operator transaction to adjust the delegated balance after a validator was
   slashed*/

  updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse>;
  /*Adjusts the inner redemption rate bounds on the host zone*/

  resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse>;
  /*Unhalts the host zone if redemption rates were exceeded*/

  refreshRedemptionRate(request: MsgRefreshRedemptionRate): Promise<MsgRefreshRedemptionRateResponse>;
  /*Trigger updating the redemption rate*/

  overwriteDelegationRecord(request: MsgOverwriteDelegationRecord): Promise<MsgOverwriteDelegationRecordResponse>;
  /*Overwrites a delegation record*/

  overwriteUnbondingRecord(request: MsgOverwriteUnbondingRecord): Promise<MsgOverwriteUnbondingRecordResponse>;
  /*Overwrites a unbonding record*/

  overwriteRedemptionRecord(request: MsgOverwriteRedemptionRecord): Promise<MsgOverwriteRedemptionRecordResponse>;
  /*Overwrites a redemption record*/

  setOperatorAddress(request: MsgSetOperatorAddress): Promise<MsgSetOperatorAddressResponse>;
  /*Sets the operator address*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse> {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "RedeemStake", data);
    return promise.then(data => MsgRedeemStakeResponse.decode(new _m0.Reader(data)));
  }

  confirmDelegation(request: MsgConfirmDelegation): Promise<MsgConfirmDelegationResponse> {
    const data = MsgConfirmDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmDelegation", data);
    return promise.then(data => MsgConfirmDelegationResponse.decode(new _m0.Reader(data)));
  }

  confirmUndelegation(request: MsgConfirmUndelegation): Promise<MsgConfirmUndelegationResponse> {
    const data = MsgConfirmUndelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmUndelegation", data);
    return promise.then(data => MsgConfirmUndelegationResponse.decode(new _m0.Reader(data)));
  }

  confirmUnbondedTokenSweep(request: MsgConfirmUnbondedTokenSweep): Promise<MsgConfirmUnbondedTokenSweepResponse> {
    const data = MsgConfirmUnbondedTokenSweep.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmUnbondedTokenSweep", data);
    return promise.then(data => MsgConfirmUnbondedTokenSweepResponse.decode(new _m0.Reader(data)));
  }

  adjustDelegatedBalance(request: MsgAdjustDelegatedBalance): Promise<MsgAdjustDelegatedBalanceResponse> {
    const data = MsgAdjustDelegatedBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "AdjustDelegatedBalance", data);
    return promise.then(data => MsgAdjustDelegatedBalanceResponse.decode(new _m0.Reader(data)));
  }

  updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse> {
    const data = MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then(data => MsgUpdateInnerRedemptionRateBoundsResponse.decode(new _m0.Reader(data)));
  }

  resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse> {
    const data = MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ResumeHostZone", data);
    return promise.then(data => MsgResumeHostZoneResponse.decode(new _m0.Reader(data)));
  }

  refreshRedemptionRate(request: MsgRefreshRedemptionRate): Promise<MsgRefreshRedemptionRateResponse> {
    const data = MsgRefreshRedemptionRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "RefreshRedemptionRate", data);
    return promise.then(data => MsgRefreshRedemptionRateResponse.decode(new _m0.Reader(data)));
  }

  overwriteDelegationRecord(request: MsgOverwriteDelegationRecord): Promise<MsgOverwriteDelegationRecordResponse> {
    const data = MsgOverwriteDelegationRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteDelegationRecord", data);
    return promise.then(data => MsgOverwriteDelegationRecordResponse.decode(new _m0.Reader(data)));
  }

  overwriteUnbondingRecord(request: MsgOverwriteUnbondingRecord): Promise<MsgOverwriteUnbondingRecordResponse> {
    const data = MsgOverwriteUnbondingRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteUnbondingRecord", data);
    return promise.then(data => MsgOverwriteUnbondingRecordResponse.decode(new _m0.Reader(data)));
  }

  overwriteRedemptionRecord(request: MsgOverwriteRedemptionRecord): Promise<MsgOverwriteRedemptionRecordResponse> {
    const data = MsgOverwriteRedemptionRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteRedemptionRecord", data);
    return promise.then(data => MsgOverwriteRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  setOperatorAddress(request: MsgSetOperatorAddress): Promise<MsgSetOperatorAddressResponse> {
    const data = MsgSetOperatorAddress.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "SetOperatorAddress", data);
    return promise.then(data => MsgSetOperatorAddressResponse.decode(new _m0.Reader(data)));
  }

}