import { Rpc } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidators, MsgAddValidatorsResponse, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgClearBalance, MsgClearBalanceResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
    registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
    claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
    rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
    addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse>;
    changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse>;
    deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
    restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
    updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
    clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
    registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
    claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
    rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
    addValidators(request: MsgAddValidators): Promise<MsgAddValidatorsResponse>;
    changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse>;
    deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
    restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
    updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
    clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
}
