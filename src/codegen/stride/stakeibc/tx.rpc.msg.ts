import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLSMLiquidStake, MsgLSMLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidators, MsgAddValidatorsResponse, MsgChangeValidatorWeights, MsgChangeValidatorWeightsResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgCalibrateDelegation, MsgCalibrateDelegationResponse, MsgClearBalance, MsgClearBalanceResponse, MsgUpdateInnerRedemptionRateBounds, MsgUpdateInnerRedemptionRateBoundsResponse, MsgResumeHostZone, MsgResumeHostZoneResponse, MsgCreateTradeRoute, MsgCreateTradeRouteResponse, MsgDeleteTradeRoute, MsgDeleteTradeRouteResponse, MsgUpdateTradeRoute, MsgUpdateTradeRouteResponse, MsgSetCommunityPoolRebate, MsgSetCommunityPoolRebateResponse, MsgToggleTradeController, MsgToggleTradeControllerResponse, MsgUpdateHostZoneParams, MsgUpdateHostZoneParamsResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /*null*/

  lSMLiquidStake(request: MsgLSMLiquidStake): Promise<MsgLSMLiquidStakeResponse>;
  /*null*/

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
  /*null*/

  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
  /*null*/

  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
  /*null*/

  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
  /*null*/

  addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse>;
  /*null*/

  changeValidatorWeight(request: MsgChangeValidatorWeights): Promise<MsgChangeValidatorWeightsResponse>;
  /*null*/

  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
  /*null*/

  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
  /*null*/

  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
  /*null*/

  calibrateDelegation(request: MsgCalibrateDelegation): Promise<MsgCalibrateDelegationResponse>;
  /*null*/

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
  /*null*/

  updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse>;
  /*null*/

  resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse>;
  /*null*/

  createTradeRoute(request: MsgCreateTradeRoute): Promise<MsgCreateTradeRouteResponse>;
  /*null*/

  deleteTradeRoute(request: MsgDeleteTradeRoute): Promise<MsgDeleteTradeRouteResponse>;
  /*null*/

  updateTradeRoute(request: MsgUpdateTradeRoute): Promise<MsgUpdateTradeRouteResponse>;
  /*null*/

  setCommunityPoolRebate(request: MsgSetCommunityPoolRebate): Promise<MsgSetCommunityPoolRebateResponse>;
  /*null*/

  toggleTradeController(request: MsgToggleTradeController): Promise<MsgToggleTradeControllerResponse>;
  /*null*/

  updateHostZoneParams(request: MsgUpdateHostZoneParams): Promise<MsgUpdateHostZoneParamsResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
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

  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  lSMLiquidStake(request: MsgLSMLiquidStake): Promise<MsgLSMLiquidStakeResponse> {
    const data = MsgLSMLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LSMLiquidStake", data);
    return promise.then(data => MsgLSMLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse> {
    const data = MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RedeemStake", data);
    return promise.then(data => MsgRedeemStakeResponse.decode(new _m0.Reader(data)));
  }

  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse> {
    const data = MsgRegisterHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RegisterHostZone", data);
    return promise.then(data => MsgRegisterHostZoneResponse.decode(new _m0.Reader(data)));
  }

  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse> {
    const data = MsgClaimUndelegatedTokens.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClaimUndelegatedTokens", data);
    return promise.then(data => MsgClaimUndelegatedTokensResponse.decode(new _m0.Reader(data)));
  }

  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse> {
    const data = MsgRebalanceValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RebalanceValidators", data);
    return promise.then(data => MsgRebalanceValidatorsResponse.decode(new _m0.Reader(data)));
  }

  addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse> {
    const data = MsgAddValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "AddValidators", data);
    return promise.then(data => MsgAddValidatorsResponse.decode(new _m0.Reader(data)));
  }

  changeValidatorWeight(request: MsgChangeValidatorWeights): Promise<MsgChangeValidatorWeightsResponse> {
    const data = MsgChangeValidatorWeights.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then(data => MsgChangeValidatorWeightsResponse.decode(new _m0.Reader(data)));
  }

  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse> {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteValidator", data);
    return promise.then(data => MsgDeleteValidatorResponse.decode(new _m0.Reader(data)));
  }

  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse> {
    const data = MsgRestoreInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RestoreInterchainAccount", data);
    return promise.then(data => MsgRestoreInterchainAccountResponse.decode(new _m0.Reader(data)));
  }

  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse> {
    const data = MsgUpdateValidatorSharesExchRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateValidatorSharesExchRate", data);
    return promise.then(data => MsgUpdateValidatorSharesExchRateResponse.decode(new _m0.Reader(data)));
  }

  calibrateDelegation(request: MsgCalibrateDelegation): Promise<MsgCalibrateDelegationResponse> {
    const data = MsgCalibrateDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CalibrateDelegation", data);
    return promise.then(data => MsgCalibrateDelegationResponse.decode(new _m0.Reader(data)));
  }

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse> {
    const data = MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then(data => MsgClearBalanceResponse.decode(new _m0.Reader(data)));
  }

  updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse> {
    const data = MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then(data => MsgUpdateInnerRedemptionRateBoundsResponse.decode(new _m0.Reader(data)));
  }

  resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse> {
    const data = MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ResumeHostZone", data);
    return promise.then(data => MsgResumeHostZoneResponse.decode(new _m0.Reader(data)));
  }

  createTradeRoute(request: MsgCreateTradeRoute): Promise<MsgCreateTradeRouteResponse> {
    const data = MsgCreateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CreateTradeRoute", data);
    return promise.then(data => MsgCreateTradeRouteResponse.decode(new _m0.Reader(data)));
  }

  deleteTradeRoute(request: MsgDeleteTradeRoute): Promise<MsgDeleteTradeRouteResponse> {
    const data = MsgDeleteTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteTradeRoute", data);
    return promise.then(data => MsgDeleteTradeRouteResponse.decode(new _m0.Reader(data)));
  }

  updateTradeRoute(request: MsgUpdateTradeRoute): Promise<MsgUpdateTradeRouteResponse> {
    const data = MsgUpdateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateTradeRoute", data);
    return promise.then(data => MsgUpdateTradeRouteResponse.decode(new _m0.Reader(data)));
  }

  setCommunityPoolRebate(request: MsgSetCommunityPoolRebate): Promise<MsgSetCommunityPoolRebateResponse> {
    const data = MsgSetCommunityPoolRebate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "SetCommunityPoolRebate", data);
    return promise.then(data => MsgSetCommunityPoolRebateResponse.decode(new _m0.Reader(data)));
  }

  toggleTradeController(request: MsgToggleTradeController): Promise<MsgToggleTradeControllerResponse> {
    const data = MsgToggleTradeController.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ToggleTradeController", data);
    return promise.then(data => MsgToggleTradeControllerResponse.decode(new _m0.Reader(data)));
  }

  updateHostZoneParams(request: MsgUpdateHostZoneParams): Promise<MsgUpdateHostZoneParamsResponse> {
    const data = MsgUpdateHostZoneParams.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateHostZoneParams", data);
    return promise.then(data => MsgUpdateHostZoneParamsResponse.decode(new _m0.Reader(data)));
  }

}