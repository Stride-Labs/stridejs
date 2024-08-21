import { TxRpc } from "../../../types";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgWithdrawTokenizeShareRecordReward, MsgWithdrawTokenizeShareRecordRewardResponse, MsgWithdrawAllTokenizeShareRecordReward, MsgWithdrawAllTokenizeShareRecordRewardResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    /** WithdrawTokenizeShareRecordReward defines a method to withdraw reward for an owning TokenizeShareRecord */
    withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
    /** WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward for all owning TokenizeShareRecord */
    withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    withdrawTokenizeShareRecordReward(request: MsgWithdrawTokenizeShareRecordReward): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
    withdrawAllTokenizeShareRecordReward(request: MsgWithdrawAllTokenizeShareRecordReward): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
