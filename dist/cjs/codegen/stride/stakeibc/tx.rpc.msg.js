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
    const data = import_tx.MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then((data2) => import_tx.MsgLiquidStakeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  lSMLiquidStake(request) {
    const data = import_tx.MsgLSMLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LSMLiquidStake", data);
    return promise.then((data2) => import_tx.MsgLSMLiquidStakeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redeemStake(request) {
    const data = import_tx.MsgRedeemStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RedeemStake", data);
    return promise.then((data2) => import_tx.MsgRedeemStakeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  registerHostZone(request) {
    const data = import_tx.MsgRegisterHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RegisterHostZone", data);
    return promise.then((data2) => import_tx.MsgRegisterHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimUndelegatedTokens(request) {
    const data = import_tx.MsgClaimUndelegatedTokens.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClaimUndelegatedTokens", data);
    return promise.then((data2) => import_tx.MsgClaimUndelegatedTokensResponse.decode(new import_binary.BinaryReader(data2)));
  }
  rebalanceValidators(request) {
    const data = import_tx.MsgRebalanceValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RebalanceValidators", data);
    return promise.then((data2) => import_tx.MsgRebalanceValidatorsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addValidators(request) {
    const data = import_tx.MsgAddValidators.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "AddValidators", data);
    return promise.then((data2) => import_tx.MsgAddValidatorsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  changeValidatorWeight(request) {
    const data = import_tx.MsgChangeValidatorWeights.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then((data2) => import_tx.MsgChangeValidatorWeightsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  deleteValidator(request) {
    const data = import_tx.MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteValidator", data);
    return promise.then((data2) => import_tx.MsgDeleteValidatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  restoreInterchainAccount(request) {
    const data = import_tx.MsgRestoreInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "RestoreInterchainAccount", data);
    return promise.then((data2) => import_tx.MsgRestoreInterchainAccountResponse.decode(new import_binary.BinaryReader(data2)));
  }
  closeDelegationChannel(request) {
    const data = import_tx.MsgCloseDelegationChannel.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CloseDelegationChannel", data);
    return promise.then((data2) => import_tx.MsgCloseDelegationChannelResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateValidatorSharesExchRate(request) {
    const data = import_tx.MsgUpdateValidatorSharesExchRate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateValidatorSharesExchRate", data);
    return promise.then((data2) => import_tx.MsgUpdateValidatorSharesExchRateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  calibrateDelegation(request) {
    const data = import_tx.MsgCalibrateDelegation.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CalibrateDelegation", data);
    return promise.then((data2) => import_tx.MsgCalibrateDelegationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clearBalance(request) {
    const data = import_tx.MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then((data2) => import_tx.MsgClearBalanceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateInnerRedemptionRateBounds(request) {
    const data = import_tx.MsgUpdateInnerRedemptionRateBounds.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateInnerRedemptionRateBounds", data);
    return promise.then((data2) => import_tx.MsgUpdateInnerRedemptionRateBoundsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  resumeHostZone(request) {
    const data = import_tx.MsgResumeHostZone.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ResumeHostZone", data);
    return promise.then((data2) => import_tx.MsgResumeHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  createTradeRoute(request) {
    const data = import_tx.MsgCreateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "CreateTradeRoute", data);
    return promise.then((data2) => import_tx.MsgCreateTradeRouteResponse.decode(new import_binary.BinaryReader(data2)));
  }
  deleteTradeRoute(request) {
    const data = import_tx.MsgDeleteTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "DeleteTradeRoute", data);
    return promise.then((data2) => import_tx.MsgDeleteTradeRouteResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateTradeRoute(request) {
    const data = import_tx.MsgUpdateTradeRoute.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateTradeRoute", data);
    return promise.then((data2) => import_tx.MsgUpdateTradeRouteResponse.decode(new import_binary.BinaryReader(data2)));
  }
  setCommunityPoolRebate(request) {
    const data = import_tx.MsgSetCommunityPoolRebate.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "SetCommunityPoolRebate", data);
    return promise.then((data2) => import_tx.MsgSetCommunityPoolRebateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  toggleTradeController(request) {
    const data = import_tx.MsgToggleTradeController.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ToggleTradeController", data);
    return promise.then((data2) => import_tx.MsgToggleTradeControllerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateHostZoneParams(request) {
    const data = import_tx.MsgUpdateHostZoneParams.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "UpdateHostZoneParams", data);
    return promise.then((data2) => import_tx.MsgUpdateHostZoneParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Proper CommonJS exports for dynamic imports
module.exports = {
  MsgClientImpl
};
