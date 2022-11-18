import { Rpc } from "../../helpers";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgRegisterHostZone, MsgRegisterHostZoneResponse, MsgClaimUndelegatedTokens, MsgClaimUndelegatedTokensResponse, MsgRebalanceValidators, MsgRebalanceValidatorsResponse, MsgAddValidator, MsgAddValidatorResponse, MsgChangeValidatorWeight, MsgChangeValidatorWeightResponse, MsgDeleteValidator, MsgDeleteValidatorResponse, MsgRestoreInterchainAccount, MsgRestoreInterchainAccountResponse, MsgUpdateValidatorSharesExchRate, MsgUpdateValidatorSharesExchRateResponse, MsgClearBalance, MsgClearBalanceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
    /**
     * TODO(TEST-53): Remove this pre-launch (no need for clients to create /
     * interact with ICAs)
     */
    registerHostZone(request: MsgRegisterHostZone): Promise<MsgRegisterHostZoneResponse>;
    claimUndelegatedTokens(request: MsgClaimUndelegatedTokens): Promise<MsgClaimUndelegatedTokensResponse>;
    rebalanceValidators(request: MsgRebalanceValidators): Promise<MsgRebalanceValidatorsResponse>;
    addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponse>;
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
    addValidator(request: MsgAddValidator): Promise<MsgAddValidatorResponse>;
    changeValidatorWeight(request: MsgChangeValidatorWeight): Promise<MsgChangeValidatorWeightResponse>;
    deleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
    restoreInterchainAccount(request: MsgRestoreInterchainAccount): Promise<MsgRestoreInterchainAccountResponse>;
    updateValidatorSharesExchRate(request: MsgUpdateValidatorSharesExchRate): Promise<MsgUpdateValidatorSharesExchRateResponse>;
    clearBalance(request: MsgClearBalance): Promise<MsgClearBalanceResponse>;
}
