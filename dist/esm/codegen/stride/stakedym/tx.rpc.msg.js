import { BinaryReader } from "../../binary";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgConfirmDelegation, MsgConfirmDelegationResponse, MsgConfirmUndelegation, MsgConfirmUndelegationResponse, MsgConfirmUnbondedTokenSweep, MsgConfirmUnbondedTokenSweepResponse, MsgAdjustDelegatedBalance, MsgAdjustDelegatedBalanceResponse, MsgUpdateInnerRedemptionRateBounds, MsgUpdateInnerRedemptionRateBoundsResponse, MsgResumeHostZone, MsgResumeHostZoneResponse, MsgRefreshRedemptionRate, MsgRefreshRedemptionRateResponse, MsgOverwriteDelegationRecord, MsgOverwriteDelegationRecordResponse, MsgOverwriteUnbondingRecord, MsgOverwriteUnbondingRecordResponse, MsgOverwriteRedemptionRecord, MsgOverwriteRedemptionRecordResponse, MsgSetOperatorAddress, MsgSetOperatorAddressResponse } from "./tx";
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
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "LiquidStake", data);
    return promise.then((data2) => MsgLiquidStakeResponse.decode(new BinaryReader(data2)));
  }
  redeemStake(request) {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "RedeemStake", data);
    return promise.then((data2) => MsgRedeemStakeResponse.decode(new BinaryReader(data2)));
  }
  confirmDelegation(request) {
    const data = MsgConfirmDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmDelegation", data);
    return promise.then((data2) => MsgConfirmDelegationResponse.decode(new BinaryReader(data2)));
  }
  confirmUndelegation(request) {
    const data = MsgConfirmUndelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmUndelegation", data);
    return promise.then((data2) => MsgConfirmUndelegationResponse.decode(new BinaryReader(data2)));
  }
  confirmUnbondedTokenSweep(request) {
    const data = MsgConfirmUnbondedTokenSweep.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ConfirmUnbondedTokenSweep", data);
    return promise.then((data2) => MsgConfirmUnbondedTokenSweepResponse.decode(new BinaryReader(data2)));
  }
  adjustDelegatedBalance(request) {
    const data = MsgAdjustDelegatedBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "AdjustDelegatedBalance", data);
    return promise.then((data2) => MsgAdjustDelegatedBalanceResponse.decode(new BinaryReader(data2)));
  }
  updateInnerRedemptionRateBounds(request) {
    const data = MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then((data2) => MsgUpdateInnerRedemptionRateBoundsResponse.decode(new BinaryReader(data2)));
  }
  resumeHostZone(request) {
    const data = MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "ResumeHostZone", data);
    return promise.then((data2) => MsgResumeHostZoneResponse.decode(new BinaryReader(data2)));
  }
  refreshRedemptionRate(request) {
    const data = MsgRefreshRedemptionRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "RefreshRedemptionRate", data);
    return promise.then((data2) => MsgRefreshRedemptionRateResponse.decode(new BinaryReader(data2)));
  }
  overwriteDelegationRecord(request) {
    const data = MsgOverwriteDelegationRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteDelegationRecord", data);
    return promise.then((data2) => MsgOverwriteDelegationRecordResponse.decode(new BinaryReader(data2)));
  }
  overwriteUnbondingRecord(request) {
    const data = MsgOverwriteUnbondingRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteUnbondingRecord", data);
    return promise.then((data2) => MsgOverwriteUnbondingRecordResponse.decode(new BinaryReader(data2)));
  }
  overwriteRedemptionRecord(request) {
    const data = MsgOverwriteRedemptionRecord.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "OverwriteRedemptionRecord", data);
    return promise.then((data2) => MsgOverwriteRedemptionRecordResponse.decode(new BinaryReader(data2)));
  }
  setOperatorAddress(request) {
    const data = MsgSetOperatorAddress.encode(request).finish();
    const promise = this.rpc.request("stride.stakedym.Msg", "SetOperatorAddress", data);
    return promise.then((data2) => MsgSetOperatorAddressResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
