import { Rpc } from "@osmonauts/helpers";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgUnbondValidator, MsgUnbondValidatorResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgValidatorBond, MsgValidatorBondResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
    cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
    cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
}
