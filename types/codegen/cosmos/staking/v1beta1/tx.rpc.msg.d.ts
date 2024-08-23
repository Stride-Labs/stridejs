import { TxRpc } from "../../../types";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgUnbondValidator, MsgUnbondValidatorResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgValidatorBond, MsgValidatorBondResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     * This allows a validator to stop their services and jail themselves without
     * experiencing a slash
     */
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    /**
     * UnbondValidator defines a method for performing the status transition for a validator
     * from bonded to unbonding
     */
    unbondValidator(request: MsgUnbondValidator): Promise<MsgUnbondValidatorResponse>;
    /**
     * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
     * and delegate back to previous validator.
     *
     * This has been backported from SDK 46 as a desirable safety feature for LSM.
     * If a liquid staking provider is exploited and the exploiter initiates an undelegation,
     * having access to CancelUnbondingDelegation allows the liquid staking provider to cancel
     * the undelegation with a software upgrade and thus avoid loss of user funds
     */
    cancelUnbondingDelegation(request: MsgCancelUnbondingDelegation): Promise<MsgCancelUnbondingDelegationResponse>;
    /** TokenizeShares defines a method for tokenizing shares from a validator. */
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    /**
     * RedeemTokensForShares defines a method for redeeming tokens from a validator for
     * shares.
     */
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    /**
     * TransferTokenizeShareRecord defines a method to transfer ownership of
     * TokenizeShareRecord
     */
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    /** DisableTokenizeShares defines a method to prevent the tokenization of an addresses stake */
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    /**
     * EnableTokenizeShares defines a method to re-enable the tokenization of an addresseses stake
     * after it has been disabled
     */
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    /** ValidatorBond defines a method for performing a validator self-bond */
    validatorBond(request: MsgValidatorBond): Promise<MsgValidatorBondResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
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
