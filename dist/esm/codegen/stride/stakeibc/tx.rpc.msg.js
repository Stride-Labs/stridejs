import { BinaryReader } from "../../binary";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLSMLiquidStake, MsgLSMLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidators, MsgAddValidatorsResponse, MsgChangeValidatorWeights, MsgChangeValidatorWeightsResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgCloseDelegationChannel, MsgCloseDelegationChannelResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgCalibrateDelegation, MsgCalibrateDelegationResponse, MsgClearBalance, MsgClearBalanceResponse, MsgUpdateInnerRedemptionRateBounds, MsgUpdateInnerRedemptionRateBoundsResponse, MsgResumeHostZone, MsgResumeHostZoneResponse, MsgCreateTradeRoute, MsgCreateTradeRouteResponse, MsgDeleteTradeRoute, MsgDeleteTradeRouteResponse, MsgUpdateTradeRoute, MsgUpdateTradeRouteResponse, MsgSetCommunityPoolRebate, MsgSetCommunityPoolRebateResponse, MsgToggleTradeController, MsgToggleTradeControllerResponse, MsgUpdateHostZoneParams, MsgUpdateHostZoneParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.lSMLiquidStake = this.lSMLiquidStake.bind(this);
    this.redeemStake = this.redeemStake.bind(this);
    this.registerHostZone = this.registerHostZone.bind(this);
    this.claimUndelegatedTokens = this.claimUndelegatedTokens.bind(this);
    this.rebalanceValidators = this.rebalanceValidators.bind(this);
    this.addValidators = this.addValidators.bind(this);
    this.changeValidatorWeight = this.changeValidatorWeight.bind(this);
    this.deleteValidator = this.deleteValidator.bind(this);
    this.restoreInterchainAccount = this.restoreInterchainAccount.bind(this);
    this.closeDelegationChannel = this.closeDelegationChannel.bind(this);
    this.updateValidatorSharesExchRate = this.updateValidatorSharesExchRate.bind(this);
    this.calibrateDelegation = this.calibrateDelegation.bind(this);
    this.clearBalance = this.clearBalance.bind(this);
    this.updateInnerRedemptionRateBounds = this.updateInnerRedemptionRateBounds.bind(this);
    this.resumeHostZone = this.resumeHostZone.bind(this);
    this.createTradeRoute = this.createTradeRoute.bind(this);
    this.deleteTradeRoute = this.deleteTradeRoute.bind(this);
    this.updateTradeRoute = this.updateTradeRoute.bind(this);
    this.setCommunityPoolRebate = this.setCommunityPoolRebate.bind(this);
    this.toggleTradeController = this.toggleTradeController.bind(this);
    this.updateHostZoneParams = this.updateHostZoneParams.bind(this);
  }
  liquidStake(request) {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then((data2) => MsgLiquidStakeResponse.decode(new BinaryReader(data2)));
  }
  lSMLiquidStake(request) {
    const data = MsgLSMLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LSMLiquidStake", data);
    return promise.then((data2) => MsgLSMLiquidStakeResponse.decode(new BinaryReader(data2)));
  }
  redeemStake(request) {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RedeemStake", data);
    return promise.then((data2) => MsgRedeemStakeResponse.decode(new BinaryReader(data2)));
  }
  registerHostZone(request) {
    const data = MsgRegisterHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RegisterHostZone", data);
    return promise.then((data2) => MsgRegisterHostZoneResponse.decode(new BinaryReader(data2)));
  }
  claimUndelegatedTokens(request) {
    const data = MsgClaimUndelegatedTokens.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClaimUndelegatedTokens", data);
    return promise.then((data2) => MsgClaimUndelegatedTokensResponse.decode(new BinaryReader(data2)));
  }
  rebalanceValidators(request) {
    const data = MsgRebalanceValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RebalanceValidators", data);
    return promise.then((data2) => MsgRebalanceValidatorsResponse.decode(new BinaryReader(data2)));
  }
  addValidators(request) {
    const data = MsgAddValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "AddValidators", data);
    return promise.then((data2) => MsgAddValidatorsResponse.decode(new BinaryReader(data2)));
  }
  changeValidatorWeight(request) {
    const data = MsgChangeValidatorWeights.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then((data2) => MsgChangeValidatorWeightsResponse.decode(new BinaryReader(data2)));
  }
  deleteValidator(request) {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteValidator", data);
    return promise.then((data2) => MsgDeleteValidatorResponse.decode(new BinaryReader(data2)));
  }
  restoreInterchainAccount(request) {
    const data = MsgRestoreInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RestoreInterchainAccount", data);
    return promise.then((data2) => MsgRestoreInterchainAccountResponse.decode(new BinaryReader(data2)));
  }
  closeDelegationChannel(request) {
    const data = MsgCloseDelegationChannel.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CloseDelegationChannel", data);
    return promise.then((data2) => MsgCloseDelegationChannelResponse.decode(new BinaryReader(data2)));
  }
  updateValidatorSharesExchRate(request) {
    const data = MsgUpdateValidatorSharesExchRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateValidatorSharesExchRate", data);
    return promise.then((data2) => MsgUpdateValidatorSharesExchRateResponse.decode(new BinaryReader(data2)));
  }
  calibrateDelegation(request) {
    const data = MsgCalibrateDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CalibrateDelegation", data);
    return promise.then((data2) => MsgCalibrateDelegationResponse.decode(new BinaryReader(data2)));
  }
  clearBalance(request) {
    const data = MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then((data2) => MsgClearBalanceResponse.decode(new BinaryReader(data2)));
  }
  updateInnerRedemptionRateBounds(request) {
    const data = MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then((data2) => MsgUpdateInnerRedemptionRateBoundsResponse.decode(new BinaryReader(data2)));
  }
  resumeHostZone(request) {
    const data = MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ResumeHostZone", data);
    return promise.then((data2) => MsgResumeHostZoneResponse.decode(new BinaryReader(data2)));
  }
  createTradeRoute(request) {
    const data = MsgCreateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CreateTradeRoute", data);
    return promise.then((data2) => MsgCreateTradeRouteResponse.decode(new BinaryReader(data2)));
  }
  deleteTradeRoute(request) {
    const data = MsgDeleteTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteTradeRoute", data);
    return promise.then((data2) => MsgDeleteTradeRouteResponse.decode(new BinaryReader(data2)));
  }
  updateTradeRoute(request) {
    const data = MsgUpdateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateTradeRoute", data);
    return promise.then((data2) => MsgUpdateTradeRouteResponse.decode(new BinaryReader(data2)));
  }
  setCommunityPoolRebate(request) {
    const data = MsgSetCommunityPoolRebate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "SetCommunityPoolRebate", data);
    return promise.then((data2) => MsgSetCommunityPoolRebateResponse.decode(new BinaryReader(data2)));
  }
  toggleTradeController(request) {
    const data = MsgToggleTradeController.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ToggleTradeController", data);
    return promise.then((data2) => MsgToggleTradeControllerResponse.decode(new BinaryReader(data2)));
  }
  updateHostZoneParams(request) {
    const data = MsgUpdateHostZoneParams.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateHostZoneParams", data);
    return promise.then((data2) => MsgUpdateHostZoneParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
