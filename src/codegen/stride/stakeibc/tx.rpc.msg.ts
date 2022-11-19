import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidator, MsgAddValidatorResponse, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgClearBalance, MsgClearBalanceResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /*null*/

  redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
  /*null*/

  registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
  /*TODO(TEST-53): Remove this pre-launch (no need for clients to create /
   interact with ICAs)*/

  claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
  /*null*/

  rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
  /*null*/

  addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponse>;
  /*null*/

  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse>;
  /*null*/

  deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
  /*null*/

  restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
  /*null*/

  updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
  /*null*/

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.redeemStake = this.redeemStake.bind(this);
    this.registerHostZone = this.registerHostZone.bind(this);
    this.claimUndelegatedTokens = this.claimUndelegatedTokens.bind(this);
    this.rebalanceValidators = this.rebalanceValidators.bind(this);
    this.addValidator = this.addValidator.bind(this);
    this.changeValidatorWeight = this.changeValidatorWeight.bind(this);
    this.deleteValidator = this.deleteValidator.bind(this);
    this.restoreInterchainAccount = this.restoreInterchainAccount.bind(this);
    this.updateValidatorSharesExchRate = this.updateValidatorSharesExchRate.bind(this);
    this.clearBalance = this.clearBalance.bind(this);
  }

  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
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

  addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponse> {
    const data = MsgAddValidator.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "AddValidator", data);
    return promise.then(data => MsgAddValidatorResponse.decode(new _m0.Reader(data)));
  }

  changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse> {
    const data = MsgChangeValidatorWeight.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ChangeValidatorWeight", data);
    return promise.then(data => MsgChangeValidatorWeightResponse.decode(new _m0.Reader(data)));
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

  clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse> {
    const data = MsgClearBalance.encode(request).finish();
    const promise = this.rpc.request("stride.stakeibc.Msg", "ClearBalance", data);
    return promise.then(data => MsgClearBalanceResponse.decode(new _m0.Reader(data)));
  }

}