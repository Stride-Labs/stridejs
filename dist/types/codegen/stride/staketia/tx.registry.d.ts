import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgRedeemStake, MsgConfirmDelegation, MsgConfirmUndelegation, MsgConfirmUnbondedTokenSweep, MsgAdjustDelegatedBalance, MsgUpdateInnerRedemptionRateBounds, MsgResumeHostZone, MsgRefreshRedemptionRate, MsgOverwriteDelegationRecord, MsgOverwriteUnbondingRecord, MsgOverwriteRedemptionRecord, MsgSetOperatorAddress } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmDelegation(value: MsgConfirmDelegation): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmUndelegation(value: MsgConfirmUndelegation): {
            typeUrl: string;
            value: Uint8Array;
        };
        confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep): {
            typeUrl: string;
            value: Uint8Array;
        };
        adjustDelegatedBalance(value: MsgAdjustDelegatedBalance): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: Uint8Array;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: Uint8Array;
        };
        refreshRedemptionRate(value: MsgRefreshRedemptionRate): {
            typeUrl: string;
            value: Uint8Array;
        };
        overwriteDelegationRecord(value: MsgOverwriteDelegationRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        setOperatorAddress(value: MsgSetOperatorAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: MsgRedeemStake;
        };
        confirmDelegation(value: MsgConfirmDelegation): {
            typeUrl: string;
            value: MsgConfirmDelegation;
        };
        confirmUndelegation(value: MsgConfirmUndelegation): {
            typeUrl: string;
            value: MsgConfirmUndelegation;
        };
        confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep): {
            typeUrl: string;
            value: MsgConfirmUnbondedTokenSweep;
        };
        adjustDelegatedBalance(value: MsgAdjustDelegatedBalance): {
            typeUrl: string;
            value: MsgAdjustDelegatedBalance;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: MsgUpdateInnerRedemptionRateBounds;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: MsgResumeHostZone;
        };
        refreshRedemptionRate(value: MsgRefreshRedemptionRate): {
            typeUrl: string;
            value: MsgRefreshRedemptionRate;
        };
        overwriteDelegationRecord(value: MsgOverwriteDelegationRecord): {
            typeUrl: string;
            value: MsgOverwriteDelegationRecord;
        };
        overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord): {
            typeUrl: string;
            value: MsgOverwriteUnbondingRecord;
        };
        overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord): {
            typeUrl: string;
            value: MsgOverwriteRedemptionRecord;
        };
        setOperatorAddress(value: MsgSetOperatorAddress): {
            typeUrl: string;
            value: MsgSetOperatorAddress;
        };
    };
    fromPartial: {
        liquidStake(value: MsgLiquidStake): {
            typeUrl: string;
            value: MsgLiquidStake;
        };
        redeemStake(value: MsgRedeemStake): {
            typeUrl: string;
            value: MsgRedeemStake;
        };
        confirmDelegation(value: MsgConfirmDelegation): {
            typeUrl: string;
            value: MsgConfirmDelegation;
        };
        confirmUndelegation(value: MsgConfirmUndelegation): {
            typeUrl: string;
            value: MsgConfirmUndelegation;
        };
        confirmUnbondedTokenSweep(value: MsgConfirmUnbondedTokenSweep): {
            typeUrl: string;
            value: MsgConfirmUnbondedTokenSweep;
        };
        adjustDelegatedBalance(value: MsgAdjustDelegatedBalance): {
            typeUrl: string;
            value: MsgAdjustDelegatedBalance;
        };
        updateInnerRedemptionRateBounds(value: MsgUpdateInnerRedemptionRateBounds): {
            typeUrl: string;
            value: MsgUpdateInnerRedemptionRateBounds;
        };
        resumeHostZone(value: MsgResumeHostZone): {
            typeUrl: string;
            value: MsgResumeHostZone;
        };
        refreshRedemptionRate(value: MsgRefreshRedemptionRate): {
            typeUrl: string;
            value: MsgRefreshRedemptionRate;
        };
        overwriteDelegationRecord(value: MsgOverwriteDelegationRecord): {
            typeUrl: string;
            value: MsgOverwriteDelegationRecord;
        };
        overwriteUnbondingRecord(value: MsgOverwriteUnbondingRecord): {
            typeUrl: string;
            value: MsgOverwriteUnbondingRecord;
        };
        overwriteRedemptionRecord(value: MsgOverwriteRedemptionRecord): {
            typeUrl: string;
            value: MsgOverwriteRedemptionRecord;
        };
        setOperatorAddress(value: MsgSetOperatorAddress): {
            typeUrl: string;
            value: MsgSetOperatorAddress;
        };
    };
};
