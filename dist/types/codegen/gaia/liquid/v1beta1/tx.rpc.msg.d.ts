import { TxRpc } from "../../../types";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgTransferTokenizeShareRecord, MsgTransferTokenizeShareRecordResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse } from "./tx";
/** Msg defines the liquid Msg service. */
export interface Msg {
    /**
     * UpdateParams defines an operation for updating the x/liquid module
     * parameters.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** TokenizeShares defines a method for tokenizing shares from a validator. */
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    /**
     * RedeemTokensForShares defines a method for redeeming tokens from a
     * validator for shares.
     */
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    /**
     * TransferTokenizeShareRecord defines a method to transfer ownership of
     * TokenizeShareRecord
     */
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    /**
     * DisableTokenizeShares defines a method to prevent the tokenization of an
     * addresses stake
     */
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    /**
     * EnableTokenizeShares defines a method to re-enable the tokenization of an
     * addresseses stake after it has been disabled
     */
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    /**
     * WithdrawTokenizeShareRecordReward defines a method to withdraw reward for
     * an owning TokenizeShareRecord
     */
    withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
    /**
     * WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward
     * for all owning TokenizeShareRecord
     */
    withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    tokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
    redeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
    transferTokenizeShareRecord(request: MsgTransferTokenizeShareRecord): Promise<MsgTransferTokenizeShareRecordResponse>;
    disableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
    enableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
    withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
    withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}
