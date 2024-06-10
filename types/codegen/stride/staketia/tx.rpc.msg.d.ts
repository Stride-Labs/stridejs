import { Rpc } from "@osmonauts/helpers";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgRedeemStake, MsgRedeemStakeResponse, MsgConfirmDelegation, MsgConfirmDelegationResponse, MsgConfirmUndelegation, MsgConfirmUndelegationResponse, MsgConfirmUnbondedTokenSweep, MsgConfirmUnbondedTokenSweepResponse, MsgAdjustDelegatedBalance, MsgAdjustDelegatedBalanceResponse, MsgUpdateInnerRedemptionRateBounds, MsgUpdateInnerRedemptionRateBoundsResponse, MsgResumeHostZone, MsgResumeHostZoneResponse, MsgRefreshRedemptionRate, MsgRefreshRedemptionRateResponse, MsgOverwriteDelegationRecord, MsgOverwriteDelegationRecordResponse, MsgOverwriteUnbondingRecord, MsgOverwriteUnbondingRecordResponse, MsgOverwriteRedemptionRecord, MsgOverwriteRedemptionRecordResponse, MsgSetOperatorAddress, MsgSetOperatorAddressResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
    confirmDelegation(request: MsgConfirmDelegation): Promise<MsgConfirmDelegationResponse>;
    confirmUndelegation(request: MsgConfirmUndelegation): Promise<MsgConfirmUndelegationResponse>;
    confirmUnbondedTokenSweep(request: MsgConfirmUnbondedTokenSweep): Promise<MsgConfirmUnbondedTokenSweepResponse>;
    adjustDelegatedBalance(request: MsgAdjustDelegatedBalance): Promise<MsgAdjustDelegatedBalanceResponse>;
    updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse>;
    resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse>;
    refreshRedemptionRate(request: MsgRefreshRedemptionRate): Promise<MsgRefreshRedemptionRateResponse>;
    overwriteDelegationRecord(request: MsgOverwriteDelegationRecord): Promise<MsgOverwriteDelegationRecordResponse>;
    overwriteUnbondingRecord(request: MsgOverwriteUnbondingRecord): Promise<MsgOverwriteUnbondingRecordResponse>;
    overwriteRedemptionRecord(request: MsgOverwriteRedemptionRecord): Promise<MsgOverwriteRedemptionRecordResponse>;
    setOperatorAddress(request: MsgSetOperatorAddress): Promise<MsgSetOperatorAddressResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
    redeemStake(request: MsgRedeemStake): Promise<MsgRedeemStakeResponse>;
    confirmDelegation(request: MsgConfirmDelegation): Promise<MsgConfirmDelegationResponse>;
    confirmUndelegation(request: MsgConfirmUndelegation): Promise<MsgConfirmUndelegationResponse>;
    confirmUnbondedTokenSweep(request: MsgConfirmUnbondedTokenSweep): Promise<MsgConfirmUnbondedTokenSweepResponse>;
    adjustDelegatedBalance(request: MsgAdjustDelegatedBalance): Promise<MsgAdjustDelegatedBalanceResponse>;
    updateInnerRedemptionRateBounds(request: MsgUpdateInnerRedemptionRateBounds): Promise<MsgUpdateInnerRedemptionRateBoundsResponse>;
    resumeHostZone(request: MsgResumeHostZone): Promise<MsgResumeHostZoneResponse>;
    refreshRedemptionRate(request: MsgRefreshRedemptionRate): Promise<MsgRefreshRedemptionRateResponse>;
    overwriteDelegationRecord(request: MsgOverwriteDelegationRecord): Promise<MsgOverwriteDelegationRecordResponse>;
    overwriteUnbondingRecord(request: MsgOverwriteUnbondingRecord): Promise<MsgOverwriteUnbondingRecordResponse>;
    overwriteRedemptionRecord(request: MsgOverwriteRedemptionRecord): Promise<MsgOverwriteRedemptionRecordResponse>;
    setOperatorAddress(request: MsgSetOperatorAddress): Promise<MsgSetOperatorAddressResponse>;
}
